<?php

namespace RealDriss\Newsletter\Events;

use RealDriss\Newsletter\Models\Newsletter;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class SubscribeNewsletterEvent
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    /**
     * @var Newsletter
     */
    public $newsLetter;

    /**
     * Create a new event instance.
     *
     * @param Newsletter $newsletter
     */
    public function __construct(Newsletter $newsletter)
    {
        $this->newsLetter = $newsletter;
    }
}
