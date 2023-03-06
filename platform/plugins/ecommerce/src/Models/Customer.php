<?php

namespace Botble\Ecommerce\Models;

use Botble\Base\Supports\Avatar;
use Botble\Ecommerce\Notifications\ResetPasswordNotification;
use Eloquent;
use Exception;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use RvMedia;
use MacroableModels;
use Illuminate\Support\Str;

/**
 * @mixin Eloquent
 */
class Customer extends Authenticatable
{
    use Notifiable;

    /**
     * @var string
     */
    protected $table = 'ec_customers';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'avatar',
        'phone',
        'dob',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Send the password reset notification.
     *
     * @param string $token
     * @return void
     */
    public function sendPasswordResetNotification($token)
    {
        $this->notify(new ResetPasswordNotification($token));
    }

    /**
     * @return string
     */
    public function getAvatarUrlAttribute()
    {
        if ($this->avatar) {
            return RvMedia::getImageUrl($this->avatar, 'thumb');
        }

        try {
            return (new Avatar)->create($this->name)->toBase64();
        } catch (Exception $exception) {
            return RvMedia::getDefaultImage();
        }
    }

    /**
     * @return HasMany
     */
    public function orders()
    {
        return $this->hasMany(Order::class, 'user_id', 'id');
    }

    /**
     * @return HasMany
     */
    public function addresses()
    {
        return $this->hasMany(Address::class, 'customer_id', 'id');
    }

    /**
     * @return BelongsToMany
     */
    public function discounts()
    {
        return $this->belongsToMany(Discount::class, 'ec_discount_customers', 'customer_id', 'id');
    }

    /**
     * @return BelongsToMany
     */
    public function wishlist(): HasMany
    {
        return $this->hasMany(Wishlist::class, 'customer_id');
    }

    protected static function boot()
    {
        parent::boot();

        self::deleting(function (Customer $customer) {
            $customer->discounts()->detach();
            Review::where('customer_id', $customer->id)->delete();
            Wishlist::where('customer_id', $customer->id)->delete();
        });
    }

    /**
     * @param string $key
     * @return mixed
     */
    public function __get($key)
    {
        if (class_exists('MacroableModels')) {
            $method = 'get' . Str::studly($key) . 'Attribute';
            if (MacroableModels::modelHasMacro(get_class($this), $method)) {
                return call_user_func([$this, $method]);
            }
        }

        return parent::__get($key);
    }

    /**
     * @return HasMany
     */
    public function reviews(): HasMany
    {
        return $this->hasMany(Review::class, 'customer_id');
    }
}
