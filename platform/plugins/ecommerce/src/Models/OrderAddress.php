<?php

namespace RealDriss\Ecommerce\Models;

use RealDriss\Base\Models\BaseModel;
use RealDriss\Base\Supports\Avatar;
use RealDriss\Base\Supports\Helper;
use Exception;
use RvMedia;

class OrderAddress extends BaseModel
{

    /**
     * @var string
     */
    protected $table = 'ec_order_addresses';

    /**
     * @var array
     */
    protected $fillable = [
        'name',
        'email',
        'phone',
        'country',
        'state',
        'city',
        'address',
        'zip_code',
        'order_id',
    ];

    /**
     * @var bool
     */
    public $timestamps = false;

    /**
     * @return string
     */
    public function getCountryNameAttribute()
    {
        return Helper::getCountryNameByCode($this->country);
    }

    /**
     * @return string
     */
    public function getAvatarUrlAttribute()
    {
        try {
            return (new Avatar)->create($this->name)->toBase64();
        } catch (Exception $exception) {
            return RvMedia::getDefaultImage();
        }
    }
}
