<?php

namespace RealDriss\Contact\Events;

use RealDriss\Base\Events\Event;
use Eloquent;
use Illuminate\Queue\SerializesModels;
use stdClass;

class SentContactEvent extends Event
{
    use SerializesModels;

    /**
     * @var Eloquent|false
     */
    public $data;

    /**
     * SentContactEvent constructor.
     * @param Eloquent|false|stdClass $data
     */
    public function __construct($data)
    {
        $this->data = $data;
    }
}
