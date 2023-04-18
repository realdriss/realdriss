<?php

namespace RealDriss\Base\Models;

use Eloquent; //abstract class Illuminate\Database\Eloquent\Model
use Illuminate\Support\Str;
use MacroableModels; //RealDriss\Base\Facades\MacroableModelsFacade
use Illuminate\Database\Eloquent\Relations\MorphMany;
use MetaBox as MetaBoxSupport; //RealDriss\Base\Facades\MetaBoxFacade 

class BaseModel extends Eloquent
{
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
     * @return MorphMany
     */
    public function metadata()
    {
        return $this->morphMany(MetaBox::class, 'reference')
            ->select([
                'reference_id',
                'reference_type',
                'meta_key',
                'meta_value',
            ]);
    }

    /**
     * @param string $key
     * @param bool $single
     * @return string|array
     */
    public function getMetaData(string $key, bool $single = false)
    {
        $field = $this->metadata->where('meta_key', $key)->first();

        if (!$field) {
            return $single ? '' : [];
        }

        return MetaBoxSupport::getMetaData($field, $key, $single);
    }

    //start dev section
    public static function dev()
    {
        //test code here
        MacroableModels::dev();
    }
    
    //end dev section
}
