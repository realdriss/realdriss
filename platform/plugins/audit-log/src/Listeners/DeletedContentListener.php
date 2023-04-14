<?php

namespace RealDriss\AuditLog\Listeners;

use RealDriss\AuditLog\Events\AuditHandlerEvent;
use RealDriss\Base\Events\DeletedContentEvent;
use Exception;
use AuditLog;

class DeletedContentListener
{

    /**
     * Handle the event.
     *
     * @param DeletedContentEvent $event
     * @return void
     */
    public function handle(DeletedContentEvent $event)
    {
        try {
            if ($event->data->id) {
                event(new AuditHandlerEvent(
                    $event->screen,
                    'deleted',
                    $event->data->id,
                    AuditLog::getReferenceName($event->screen, $event->data),
                    'danger'
                ));
            }
        } catch (Exception $exception) {
            info($exception->getMessage());
        }
    }
}
