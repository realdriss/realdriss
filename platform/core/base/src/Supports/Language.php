<?php

namespace Botble\Base\Supports;

class Language
{
    /**
     * The list of flags
     *
     * for each flag:
     * the key is the flag file name (without the extension)
     * the value is the Country name
     */
    protected static $flags = [
        'ke'     => 'Kenya',
        'us'     => 'United States',
        'ar'     => 'Argentina',
    ];

    /**
     * The list of predefined languages
     *
     * for each language:
     * [0] => ISO 639-1 language code
     * [1] => Laravel locale
     * [2] => name
     * [3] => text direction
     * [4] => flag code
     */
    protected static $languages = [
        'en_US'          => ['en', 'en_US', 'English', 'ltr', 'us'],
        'es_AR'          => ['es', 'es_AR', 'Español', 'ltr', 'ar'],
        
    ];

    /**
     * @return array
     */
    public static function getListLanguageFlags(): array
    {
        return self::$flags;
    }

    /**
     * @return array
     */
    public static function getAvailableLocales(): array
    {
        $languages = [];
        $locales = scan_folder(resource_path('lang'));
        if (in_array('vendor', $locales)) {
            $locales = array_merge($locales, scan_folder(resource_path('lang/vendor')));
        }

        foreach ($locales as $locale) {
            if ($locale === 'vendor') {
                continue;
            }
            foreach (Language::getListLanguages() as $key => $language) {
                if (in_array($key, [$locale, str_replace('-', '_', $locale)]) ||
                    in_array($language[1], [$locale, str_replace('-', '_', $locale)])
                ) {
                    $languages[$locale] = [
                        'locale' => $locale,
                        'name'   => $language[2],
                        'flag'   => $language[4],
                    ];
                }

                if (!array_key_exists($locale, $languages) &&
                    in_array($language[0], [$locale, str_replace('-', '_', $locale)])) {
                    $languages[$locale] = [
                        'locale' => $locale,
                        'name'   => $language[2],
                        'flag'   => $language[4],
                    ];
                }
            }
        }

        return $languages;
    }

    /**
     * @return array
     */
    public static function getListLanguages(): array
    {
        return self::$languages;
    }
}
