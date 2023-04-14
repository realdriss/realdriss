<?php

namespace RealDriss\Payment\Services\Traits;

use RealDriss\Payment\Supports\PaymentHelper;

/**
 * @deprecated
 */
trait PaymentTrait
{

    /**
     * Store payment on local
     *
     * @param array $args
     * @return mixed
     * @deprecated
     */
    public function storeLocalPayment(array $args = [])
    {
        return PaymentHelper::storeLocalPayment($args);
    }
}
