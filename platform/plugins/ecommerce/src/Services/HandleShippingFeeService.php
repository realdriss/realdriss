<?php

namespace RealDriss\Ecommerce\Services;

use RealDriss\Base\Models\BaseModel;
use RealDriss\Ecommerce\Models\ShippingRule;
use RealDriss\Ecommerce\Repositories\Interfaces\AddressInterface;
use RealDriss\Ecommerce\Repositories\Interfaces\ProductInterface;
use RealDriss\Ecommerce\Repositories\Interfaces\ShippingInterface;
use RealDriss\Ecommerce\Repositories\Interfaces\ShippingRuleInterface;
use RealDriss\Ecommerce\Repositories\Interfaces\StoreLocatorInterface;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Arr;

class HandleShippingFeeService
{

    /**
     * @var ShippingInterface
     */
    protected $shippingRepository;

    /**
     * @var AddressInterface
     */
    protected $addressRepository;

    /**
     * @var ShippingRuleInterface
     */
    protected $shippingRuleRepository;

    /**
     * @var ProductInterface
     */
    protected $productRepository;

    /**
     * @var StoreLocatorInterface
     */
    protected $storeLocatorRepository;

    /**
     * @var array
     */
    protected $shippings;

    /**
     * @var BaseModel
     */
    protected $shippingDefault;

    /**
     * @var array
     */
    protected $shippingRules;

    /**
     * HandleShippingFeeService constructor.
     * @param ShippingInterface $shippingRepository
     * @param AddressInterface $addressRepository
     * @param ShippingRuleInterface $shippingRuleRepository
     * @param ProductInterface $productRepository
     * @param StoreLocatorInterface $storeLocatorRepository
     */
    public function __construct(
        ShippingInterface $shippingRepository,
        AddressInterface $addressRepository,
        ShippingRuleInterface $shippingRuleRepository,
        ProductInterface $productRepository,
        StoreLocatorInterface $storeLocatorRepository
    ) {
        $this->shippingRepository = $shippingRepository;
        $this->addressRepository = $addressRepository;
        $this->shippingRuleRepository = $shippingRuleRepository;
        $this->productRepository = $productRepository;
        $this->storeLocatorRepository = $storeLocatorRepository;
        $this->shippings = [];
        $this->shippingRules = [];
    }

    /**
     * @param array $data
     * @param null $method
     * @param null $option
     * @return array
     */
    public function execute(array $data, $method = null, $option = null)
    {
        if (!empty($method)) {
            return $this->getShippingFee($data, $method, $option);
        }

        $result = [];

        $default = $this->getShippingFee($data, 'default', $option);

        if ($default) {
            $result['default'] = $default;
        }

        return $result;
    }

    /**
     * @param array $data
     * @param string $method
     * @param string $option
     * @return array
     */
    protected function getShippingFee(array $data, $method, $option = null)
    {
        $weight = Arr::get($data, 'weight', 0.1);
        $weight = $weight ?: 0.1;
        $orderTotal = Arr::get($data, 'order_total', 0);

        $country = Arr::get($data, 'country');

        $result = [];
        switch ($method) {
            case 'default':
                $methodKey = "$method-$country";
                if (Arr::has($this->shippings, $methodKey)) {
                    $shipping = Arr::get($this->shippings, $methodKey);
                } else {
                    $shipping = $this->shippingRepository
                        ->getModel()
                        ->where('country', $country)
                        ->first();
                    Arr::set($this->shippings, $methodKey, $shipping);
                }

                if (!empty($shipping)) {
                    $result = $this->calculateDefaultFeeByAddress(
                        $shipping,
                        $weight,
                        $orderTotal,
                        Arr::get($data, 'city'),
                        $option
                    );
                }

                if (empty($result)) {
                    if ($this->shippingDefault) {
                        $default = $this->shippingDefault;
                    } else {
                        $default = $this->shippingRepository
                            ->getModel()
                            ->whereNull('country')
                            ->first();
                        $this->shippingDefault = $default;
                    }

                    $result = $this->calculateDefaultFeeByAddress(
                        $default,
                        $weight,
                        $orderTotal,
                        Arr::get($data, 'city'),
                        $option
                    );
                }
                break;
        }

        return $result;
    }

    /**
     * @param string $address
     * @param int $weight
     * @param int $orderTotal
     * @param string $city
     * @param null $option
     * @return array
     */
    protected function calculateDefaultFeeByAddress($address, $weight, $orderTotal, $city, $option = null)
    {
        $weight = ecommerce_convert_weight($weight);
        $result = [];

        if ($address) {
            $ruleKey = "rule-option-$option";
            if (Arr::has($this->shippingRules, $ruleKey)) {
                $rule = Arr::get($this->shippingRules, $ruleKey);
            } else {
                $rule = $this->shippingRuleRepository->findById($option, ['items']);
                Arr::set($this->shippingRules, $ruleKey, $rule);
            }
            if ($rule) {
                $ruleDetail = $rule
                    ->items
                    ->where('city', $city)
                    ->where('is_enabled', 1)
                    ->first();
                if ($ruleDetail) {
                    $result[] = [
                        'name'  => $rule->name,
                        'price' => $rule->price + $ruleDetail->adjustment_price,
                    ];
                } else {
                    $result[] = [
                        'name'  => $rule->name,
                        'price' => $rule->price,
                    ];
                }
            } else {
                $rules = $this->shippingRuleRepository
                    ->getModel()
                    ->where(function (Builder $query) use ($orderTotal, $address) {
                        $query
                            ->where('shipping_id', $address->id)
                            ->where('type', 'base_on_price')
                            ->where('from', '<=', $orderTotal)
                            ->where(function (Builder $sub) use ($orderTotal) {
                                $sub
                                    ->whereNull('to')
                                    ->orWhere('to', '<=', 0)
                                    ->orWhere('to', '>=', $orderTotal);
                            });
                    })
                    ->orWhere(function (Builder $query) use ($weight, $address) {
                        $query
                            ->where('shipping_id', $address->id)
                            ->where('type', 'base_on_weight')
                            ->where('from', '<=', $weight)
                            ->where(function (Builder $sub) use ($weight) {
                                $sub
                                    ->whereNull('to')
                                    ->orWhere('to', '<=', 0)
                                    ->orWhere('to', '>=', $weight);
                            });
                    })
                    ->with(['items'])
                    ->get();

                foreach ($rules as $rule) {
                    /**
                     * @var ShippingRule $rule
                     */
                    $ruleDetail = $rule
                        ->items
                        ->where('city', $city)
                        ->where('is_enabled', 1)
                        ->first();
                    if ($ruleDetail) {
                        $result[$rule->id] = [
                            'name'  => $rule->name,
                            'price' => $rule->price + $ruleDetail->adjustment_price,
                        ];
                    } else {
                        $result[$rule->id] = [
                            'name'  => $rule->name,
                            'price' => $rule->price,
                        ];
                    }
                }
            }
        }

        return $result;
    }
}
