<?php

namespace RealDriss\Theme\Events;

use RealDriss\Base\Events\Event;
use Illuminate\Queue\SerializesModels;

class RenderingSiteMapEvent extends Event
{
    use SerializesModels;
}
