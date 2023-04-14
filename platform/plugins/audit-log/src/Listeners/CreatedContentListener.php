<?php

namespace RealDriss\AuditLog\Listeners;

use RealDriss\AuditLog\Events\AuditHandlerEvent;
use RealDriss\Base\Events\CreatedContentEvent;
use Exception;
use AuditLog;

class CreatedContentListener
{

    /**
     * Handle the event.
     *
     * @param CreatedContentEvent $event
     * @return void
     */
    public function handle(CreatedContentEvent $event)
    {
        try {
            if ($event->data->id) {
                event(new AuditHandlerEvent(
                    $event->screen,
                    'created',
                    $event->data->id,
                    AuditLog::getReferenceName($event->screen, $event->data),
                    'info'
                ));
            }
        } catch (Exception $exception) {
            info($exception->getMessage());
        }
    }
}
