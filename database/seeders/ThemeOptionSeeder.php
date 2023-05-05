<?php

namespace Database\Seeders;

use RealDriss\Base\Supports\BaseSeeder;
use RealDriss\Setting\Models\Setting as SettingModel;
use Theme;

class ThemeOptionSeeder extends BaseSeeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->uploadFiles('general');

        $theme = Theme::getThemeName();
        SettingModel::where('key', 'LIKE', 'theme-' . $theme . '-%')->delete();
        SettingModel::insertOrIgnore([
            [
                'key'   => 'theme',
                'value' => $theme,
            ],
            [
                'key'   => 'theme-' . $theme . '-site_title',
                'value' => 'RealDriss',
            ],
            [
                'key'   => 'theme-' . $theme . '-copyright',
                'value' => '© ' . now()->format('Y') . ' RealDriss. All Rights Reserved.',
            ],
            [
                'key'   => 'theme-' . $theme . '-favicon',
                'value' => 'general/favicon.png',
            ],
            [
                'key'   => 'theme-' . $theme . '-logo',
                'value' => 'general/logo-dark.svg',
            ],
            [
                'key'   => 'theme-' . $theme . '-logo_footer',
                'value' => 'general/logo-light.svg',
            ],
            [
                'key'   => 'theme-' . $theme . '-address',
                'value' => 'Pioneer BC, Eldoret, UG, Kenya',
            ],
            [
                'key'   => 'theme-' . $theme . '-hotline',
                'value' => '0799066109',
            ],
            [
                'key'   => 'theme-' . $theme . '-email',
                'value' => 'info@realdriss.com',
            ],
            [
                'key'   => 'theme-' . $theme . '-facebook',
                'value' => 'https://facebook.com/realdriss',
            ],
            [
                'key'   => 'theme-' . $theme . '-twitter',
                'value' => 'https://twitter.com/realdriss',
            ],
            [
                'key'   => 'theme-' . $theme . '-youtube',
                'value' => 'https://youtube.com/realdriss',
            ],
            [
                'key'   => 'theme-' . $theme . '-instagram',
                'value' => 'https://instagram.com/realdriss',
            ],
            [
                'key'   => 'theme-' . $theme . '-payment_methods',
                'value' => json_encode([
                    'general/visa.png',
                    'general/paypal.png',
                    'general/master-card.png',
                ]),
            ],
            [
                'key'   => 'theme-' . $theme . '-newsletter_image',
                'value' => 'general/newsletter.jpg',
            ],
            [
                'key'   => 'theme-' . $theme . '-homepage_id',
                'value' => '1',
            ],
            [
                'key'   => 'theme-' . $theme . '-blog_page_id',
                'value' => '3',
            ],
            [
                'key'   => 'theme-' . $theme . '-cookie_consent_message',
                'value' => 'Your experience on our site will be improved by allowing cookies.',
            ],
            [
                'key'   => 'theme-' . $theme . '-cookie_consent_learn_more_url',
                'value' => url('cookie-policy'),
            ],
            [
                'key'   => 'theme-' . $theme . '-cookie_consent_learn_more_text',
                'value' => 'Learn more',
            ],
        ]);
    }
}
