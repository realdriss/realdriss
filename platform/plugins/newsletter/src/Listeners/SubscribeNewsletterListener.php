<?php

namespace Botble\Newsletter\Listeners;

use Botble\Newsletter\Events\SubscribeNewsletterEvent;
use EmailHandler;
use Html;
use Illuminate\Contracts\Queue\ShouldQueue;
use URL;

class SubscribeNewsletterListener implements ShouldQueue
{
    /**
     * Handle the event.
     *
     * @param SubscribeNewsletterEvent $event
     * @return void
     * @throws \Illuminate\Contracts\Filesystem\FileNotFoundException
     * @throws \Throwable
     */
    public function handle(SubscribeNewsletterEvent $event)
    {
        $mailer = EmailHandler::setModule(NEWSLETTER_MODULE_SCREEN_NAME)
            ->setVariableValues([
                'newsletter_name'             => $event->newsLetter->name ?? 'N/A',
                'newsletter_email'            => $event->newsLetter->email,
                'newsletter_unsubscribe_link' => Html::link(
                    URL::signedRoute('public.newsletter.unsubscribe',
                        ['user' => $event->newsLetter->id]),
                    __('here')
                )->toHtml(),
            ]);

        $mailchimpApiKey = setting('newsletter_mailchimp_api_key', config('plugins.newsletter.general.mailchimp.api_key'));
        $mailchimpListId = setting('newsletter_mailchimp_list_id', config('plugins.newsletter.general.mailchimp.list_id'));

        if (!$mailchimpApiKey || !$mailchimpListId) {
            $mailer->sendUsingTemplate('subscriber_email', $event->newsLetter->email);
        }

        $mailer->sendUsingTemplate('admin_email');
    }
}
