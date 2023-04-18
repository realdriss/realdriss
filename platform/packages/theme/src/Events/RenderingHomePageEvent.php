<?php

namespace RealDriss\Theme\Events;

use RealDriss\Base\Events\Event;
use Illuminate\Queue\SerializesModels;

class RenderingHomePageEvent extends Event
{
    use SerializesModels;
}