<?php

namespace RealDriss\Payment\Repositories\Caches;

use RealDriss\Support\Repositories\Caches\CacheAbstractDecorator;
use RealDriss\Payment\Repositories\Interfaces\PaymentInterface;

class PaymentCacheDecorator extends CacheAbstractDecorator implements PaymentInterface
{

}
