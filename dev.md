## Artisan commands

cms:activity-logs:clean-old-logs
cms:activity-logs:clear
cms:backup:create
cms:backup:list
cms:backup:remove
cms:backup:restore
cms:install
cms:log:clear
cms:media:chunks:clear
cms:media:thumbnail:delete
cms:media:thumbnail:generate
cms:menu:clear-cache
cms:plugin:activate
cms:plugin:activate:all
cms:plugin:assets:publish
cms:plugin:deactivate
cms:plugin:remove
cms:publish:assets
cms:slug:prefix
cms:theme:activate
cms:theme:assets:publish
cms:theme:assets:remove
cms:theme:remove
cms:theme:rename
cms:translations:clean
cms:translations:export
cms:translations:import
cms:translations:remove-unused-translations  
cms:translations:reset
cms:translations:update-theme-translations   
cms:user:create



bootstrap/cache/services.php

### providers

    26 => 'Botble\\Assets\\Providers\\AssetsServiceProvider',
    27 => 'Botble\\Menu\\Providers\\MenuServiceProvider',
    28 => 'Botble\\Page\\Providers\\PageServiceProvider',
    29 => 'Botble\\Base\\Providers\\BaseServiceProvider',
    30 => 'Botble\\Base\\Providers\\CommandServiceProvider',
    31 => 'Botble\\Base\\Providers\\EventServiceProvider',
    32 => 'Botble\\Base\\Providers\\BreadcrumbsServiceProvider',
    33 => 'Botble\\Base\\Providers\\ComposerServiceProvider',
    34 => 'Botble\\Base\\Providers\\MailConfigServiceProvider',
    35 => 'Botble\\Base\\Providers\\FormServiceProvider',
    36 => 'Botble\\Support\\Providers\\SupportServiceProvider',
    37 => 'Botble\\Table\\Providers\\TableServiceProvider',
    38 => 'Botble\\ACL\\Providers\\AclServiceProvider',
    39 => 'Botble\\Dashboard\\Providers\\DashboardServiceProvider',
    40 => 'Botble\\Media\\Providers\\MediaServiceProvider',
    41 => 'Botble\\JsValidation\\Providers\\JsValidationServiceProvider',
    42 => 'Botble\\Chart\\Providers\\ChartServiceProvider',
    43 => 'Botble\\PluginManagement\\Providers\\PluginManagementServiceProvider',
    44 => 'Botble\\Revision\\Providers\\RevisionServiceProvider',
    45 => 'Botble\\SeoHelper\\Providers\\SeoHelperServiceProvider',
    46 => 'Botble\\Shortcode\\Providers\\ShortcodeServiceProvider',
    47 => 'Botble\\Sitemap\\Providers\\SitemapServiceProvider',
    48 => 'Botble\\Slug\\Providers\\SlugServiceProvider',
    49 => 'Botble\\Theme\\Providers\\ThemeServiceProvider',
    50 => 'Botble\\Theme\\Providers\\RouteServiceProvider',
    51 => 'Botble\\Widget\\Providers\\WidgetServiceProvider',


### eager 


    13 => 'Botble\\Assets\\Providers\\AssetsServiceProvider',
    14 => 'Botble\\Menu\\Providers\\MenuServiceProvider',
    15 => 'Botble\\Page\\Providers\\PageServiceProvider',
    16 => 'Botble\\Base\\Providers\\BaseServiceProvider',
    17 => 'Botble\\Base\\Providers\\CommandServiceProvider',
    18 => 'Botble\\Base\\Providers\\EventServiceProvider',
    19 => 'Botble\\Base\\Providers\\BreadcrumbsServiceProvider',
    20 => 'Botble\\Base\\Providers\\ComposerServiceProvider',
    21 => 'Botble\\Base\\Providers\\MailConfigServiceProvider',
    22 => 'Botble\\Base\\Providers\\FormServiceProvider',
    23 => 'Botble\\Support\\Providers\\SupportServiceProvider',
    24 => 'Botble\\Table\\Providers\\TableServiceProvider',
    25 => 'Botble\\ACL\\Providers\\AclServiceProvider',
    26 => 'Botble\\Dashboard\\Providers\\DashboardServiceProvider',
    27 => 'Botble\\Media\\Providers\\MediaServiceProvider',
    28 => 'Botble\\JsValidation\\Providers\\JsValidationServiceProvider',
    29 => 'Botble\\Chart\\Providers\\ChartServiceProvider',
    30 => 'Botble\\PluginManagement\\Providers\\PluginManagementServiceProvider',
    31 => 'Botble\\Revision\\Providers\\RevisionServiceProvider',
    32 => 'Botble\\SeoHelper\\Providers\\SeoHelperServiceProvider',
    33 => 'Botble\\Shortcode\\Providers\\ShortcodeServiceProvider',
    34 => 'Botble\\Sitemap\\Providers\\SitemapServiceProvider',
    35 => 'Botble\\Slug\\Providers\\SlugServiceProvider',
    36 => 'Botble\\Theme\\Providers\\ThemeServiceProvider',
    37 => 'Botble\\Theme\\Providers\\RouteServiceProvider',
    38 => 'Botble\\Widget\\Providers\\WidgetServiceProvider',
