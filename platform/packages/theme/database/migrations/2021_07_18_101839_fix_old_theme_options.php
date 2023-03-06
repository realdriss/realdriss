<?php

use Botble\Setting\Models\Setting as SettingModel;
use Illuminate\Database\Migrations\Migration;

class FixOldThemeOptions extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        try {
            $theme = Theme::getThemeName();

            foreach (SettingModel::get() as $item) {
                $item->key = str_replace('theme--', 'theme-' . $theme . '-', $item->key);

                if (DB::table('settings')->where('key', $item->key)->count() == 0) {
                    $item->save();
                }
            }
        } catch (Exception $exception) {
            info($exception->getMessage());
        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
