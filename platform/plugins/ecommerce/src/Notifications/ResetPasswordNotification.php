<?php

namespace RealDriss\Ecommerce\Notifications;

use EmailHandler;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;
use Illuminate\Support\HtmlString;

class ResetPasswordNotification extends Notification
{
    /**
     * The password reset token.
     *
     * @var string
     */
    public $token;

    /**
     * Create a new notification instance.
     *
     * @param string $token
     */
    public function __construct($token)
    {
        $this->token = $token;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param mixed $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return ['mail'];
    }

    /**
     * Get the mail representation of the notification.
     *
     * @param mixed $notifiable
     * @return MailMessage
     */
    public function toMail($notifiable)
    {
        EmailHandler::setModule(ECOMMERCE_MODULE_SCREEN_NAME)
            ->setVariableValue('reset_link', route('customer.password.reset.update', ['token' => $this->token]));

        $template = 'password-reminder';
        $content = EmailHandler::prepareData(EmailHandler::getTemplateContent($template));

        return (new MailMessage)
            ->view(['html' => new HtmlString($content)])
            ->subject(EmailHandler::getTemplateSubject($template));
    }
}
