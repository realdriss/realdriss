<?php

namespace RealDriss\Payment\Models;

use RealDriss\ACL\Models\User;
use RealDriss\Base\Models\BaseModel;
use RealDriss\Base\Traits\EnumCastable;
use RealDriss\Payment\Enums\PaymentMethodEnum;
use RealDriss\Payment\Enums\PaymentStatusEnum;
use Html;
use Illuminate\Database\Eloquent\Relations\MorphTo;

class Payment extends BaseModel
{
    use EnumCastable;

    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'payments';

    /**
     * @var array
     */
    protected $fillable = [
        'amount',
        'currency',
        'user_id',
        'charge_id',
        'payment_channel',
        'description',
        'status',
        'order_id',
        'payment_type',
        'customer_id',
        'customer_type',
        'refunded_amount',
        'refund_note',
    ];

    /**
     * @var array
     */
    protected $casts = [
        'payment_channel' => PaymentMethodEnum::class,
        'status'          => PaymentStatusEnum::class,
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user()
    {
        return $this->belongsTo(User::class)->withDefault();
    }

    /**
     * @return MorphTo
     */
    public function customer(): MorphTo
    {
        return $this->morphTo();
    }

    /**
     * @return string
     */
    public function getDescription(): string
    {
        $time = Html::tag('span', $this->created_at->diffForHumans(), ['class' => 'small italic']);

        return 'You have created a payment #' . $this->charge_id . ' via ' . $this->payment_channel->label() . ' ' . $time .
            ': ' . number_format($this->amount, 2, '.', ',') . $this->currency;
    }
}
