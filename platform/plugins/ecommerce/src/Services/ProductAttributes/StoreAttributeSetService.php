<?php

namespace RealDriss\Ecommerce\Services\ProductAttributes;

use RealDriss\Base\Events\CreatedContentEvent;
use RealDriss\Base\Events\DeletedContentEvent;
use RealDriss\Base\Events\UpdatedContentEvent;
use RealDriss\Ecommerce\Models\ProductAttributeSet;
use RealDriss\Ecommerce\Repositories\Eloquent\ProductAttributeRepository;
use RealDriss\Ecommerce\Repositories\Eloquent\ProductAttributeSetRepository;
use RealDriss\Ecommerce\Repositories\Interfaces\ProductAttributeInterface;
use RealDriss\Ecommerce\Repositories\Interfaces\ProductAttributeSetInterface;
use Exception;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;

class StoreAttributeSetService
{
    /**
     * @var ProductAttributeSetRepository
     */
    protected $productAttributeSetRepository;

    /**
     * @var ProductAttributeRepository
     */
    protected $productAttributeRepository;

    /**
     * StoreAttributeSetService constructor.
     * @param ProductAttributeSetInterface $productAttributeSet
     * @param ProductAttributeInterface $productAttribute
     */
    public function __construct(
        ProductAttributeSetInterface $productAttributeSet,
        ProductAttributeInterface $productAttribute
    ) {
        $this->productAttributeSetRepository = $productAttributeSet;
        $this->productAttributeRepository = $productAttribute;
    }

    /**
     * @param Request $request
     * @param ProductAttributeSet $productAttributeSet
     * @return ProductAttributeSet|false|Model
     */
    public function execute(Request $request, ProductAttributeSet $productAttributeSet)
    {
        $data = $request->input();

        if (!$productAttributeSet->id) {
            $isUpdated = false;
        } else {
            $isUpdated = true;
        }

        $productAttributeSet->fill($data);

        $productAttributeSet = $this->productAttributeSetRepository->createOrUpdate($productAttributeSet);

        if (!$isUpdated) {
            event(new CreatedContentEvent(PRODUCT_ATTRIBUTE_SETS_MODULE_SCREEN_NAME, $request, $productAttributeSet));
        } else {
            event(new UpdatedContentEvent(PRODUCT_ATTRIBUTE_SETS_MODULE_SCREEN_NAME, $request, $productAttributeSet));
        }

        $attributes = json_decode($request->get('attributes', '[]'), true) ?: [];
        $deletedAttributes = json_decode($request->get('deleted_attributes', '[]'), true) ?: [];

        $this->deleteAttributes($productAttributeSet->id, $deletedAttributes);
        $this->storeAttributes($productAttributeSet->id, $attributes);

        return $productAttributeSet;
    }

    /**
     * @param int $productAttributeSetId
     * @param array $attributeIds
     * @throws Exception
     */
    protected function deleteAttributes($productAttributeSetId, array $attributeIds)
    {
        foreach ($attributeIds as $id) {
            $attribute = $this->productAttributeRepository
                ->getFirstBy([
                    'id'               => $id,
                    'attribute_set_id' => $productAttributeSetId,
                ]);

            if ($attribute) {
                $attribute->delete();
                event(new DeletedContentEvent(PRODUCT_ATTRIBUTES_MODULE_SCREEN_NAME, request(), $attribute));
            }
        }
    }

    /**
     * @param int $productAttributeSetId
     * @param array $attributes
     */
    protected function storeAttributes($productAttributeSetId, array $attributes)
    {
        foreach ($attributes as $item) {
            if (isset($item['id'])) {
                $attribute = $this->productAttributeRepository->findById($item['id']);
                if (!$attribute) {
                    $item['attribute_set_id'] = $productAttributeSetId;
                    $attribute = $this->productAttributeRepository->create($item);

                    event(new CreatedContentEvent(PRODUCT_ATTRIBUTES_MODULE_SCREEN_NAME, request(), $attribute));
                } else {
                    $attribute->fill($item);
                    $attribute = $this->productAttributeRepository->createOrUpdate($attribute);

                    event(new UpdatedContentEvent(PRODUCT_ATTRIBUTES_MODULE_SCREEN_NAME, request(), $attribute));
                }
            }
        }
    }
}
