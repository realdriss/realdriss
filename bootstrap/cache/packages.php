<?php return array (
  'barryvdh/laravel-debugbar' => 
  array (
    'providers' => 
    array (
      0 => 'Barryvdh\\Debugbar\\ServiceProvider',
    ),
    'aliases' => 
    array (
      'Debugbar' => 'Barryvdh\\Debugbar\\Facades\\Debugbar',
    ),
  ),
  'barryvdh/laravel-dompdf' => 
  array (
    'providers' => 
    array (
      0 => 'Barryvdh\\DomPDF\\ServiceProvider',
    ),
    'aliases' => 
    array (
      'PDF' => 'Barryvdh\\DomPDF\\Facade',
    ),
  ),
  'barryvdh/laravel-ide-helper' => 
  array (
    'providers' => 
    array (
      0 => 'Barryvdh\\LaravelIdeHelper\\IdeHelperServiceProvider',
    ),
  ),
  'beyondcode/laravel-dump-server' => 
  array (
    'providers' => 
    array (
      0 => 'BeyondCode\\DumpServer\\DumpServerServiceProvider',
    ),
  ),
  'beyondcode/laravel-websockets' => 
  array (
    'providers' => 
    array (
      0 => 'BeyondCode\\LaravelWebSockets\\WebSocketsServiceProvider',
    ),
    'aliases' => 
    array (
      'WebSocketRouter' => 'BeyondCode\\LaravelWebSockets\\Facades\\WebSocketRouter',
    ),
  ),
  'facade/ignition' => 
  array (
    'providers' => 
    array (
      0 => 'Facade\\Ignition\\IgnitionServiceProvider',
    ),
    'aliases' => 
    array (
      'Flare' => 'Facade\\Ignition\\Facades\\Flare',
    ),
  ),
  'fideloper/proxy' => 
  array (
    'providers' => 
    array (
      0 => 'Fideloper\\Proxy\\TrustedProxyServiceProvider',
    ),
  ),
  'fruitcake/laravel-cors' => 
  array (
    'providers' => 
    array (
      0 => 'Fruitcake\\Cors\\CorsServiceProvider',
    ),
  ),
  'gathuku/laravelmpesa' => 
  array (
    'providers' => 
    array (
      0 => 'Gathuku\\Mpesa\\MpesaServiceProvider',
    ),
    'aliases' => 
    array (
      'Mpesa' => 'Gathuku\\Mpesa\\Facades\\Mpesa',
    ),
  ),
  'intervention/image' => 
  array (
    'providers' => 
    array (
      0 => 'Intervention\\Image\\ImageServiceProvider',
    ),
    'aliases' => 
    array (
      'Image' => 'Intervention\\Image\\Facades\\Image',
    ),
  ),
  'kris/laravel-form-builder' => 
  array (
    'providers' => 
    array (
      0 => 'Kris\\LaravelFormBuilder\\FormBuilderServiceProvider',
    ),
    'aliases' => 
    array (
      'FormBuilder' => 'Kris\\LaravelFormBuilder\\Facades\\FormBuilder',
    ),
  ),
  'laravel/sail' => 
  array (
    'providers' => 
    array (
      0 => 'Laravel\\Sail\\SailServiceProvider',
    ),
  ),
  'laravel/tinker' => 
  array (
    'providers' => 
    array (
      0 => 'Laravel\\Tinker\\TinkerServiceProvider',
    ),
  ),
  'laravelcollective/html' => 
  array (
    'providers' => 
    array (
      0 => 'Collective\\Html\\HtmlServiceProvider',
    ),
    'aliases' => 
    array (
      'Form' => 'Collective\\Html\\FormFacade',
      'Html' => 'Collective\\Html\\HtmlFacade',
    ),
  ),
  'maatwebsite/excel' => 
  array (
    'providers' => 
    array (
      0 => 'Maatwebsite\\Excel\\ExcelServiceProvider',
    ),
    'aliases' => 
    array (
      'Excel' => 'Maatwebsite\\Excel\\Facades\\Excel',
    ),
  ),
  'mews/purifier' => 
  array (
    'providers' => 
    array (
      0 => 'Mews\\Purifier\\PurifierServiceProvider',
    ),
    'aliases' => 
    array (
      'Purifier' => 'Mews\\Purifier\\Facades\\Purifier',
    ),
  ),
  'nesbot/carbon' => 
  array (
    'providers' => 
    array (
      0 => 'Carbon\\Laravel\\ServiceProvider',
    ),
  ),
  'nunomaduro/collision' => 
  array (
    'providers' => 
    array (
      0 => 'NunoMaduro\\Collision\\Adapters\\Laravel\\CollisionServiceProvider',
    ),
  ),
  'realdriss/assets' => 
  array (
    'providers' => 
    array (
      0 => 'RealDriss\\Assets\\Providers\\AssetsServiceProvider',
    ),
    'aliases' => 
    array (
      'Assets' => 'RealDriss\\Assets\\Facades\\AssetsFacade',
    ),
  ),
  'realdriss/menu' => 
  array (
    'providers' => 
    array (
      0 => 'RealDriss\\Menu\\Providers\\MenuServiceProvider',
    ),
    'aliases' => 
    array (
      'Menu' => 'RealDriss\\Menu\\Facades\\MenuFacade',
    ),
  ),
  'realdriss/page' => 
  array (
    'providers' => 
    array (
      0 => 'RealDriss\\Page\\Providers\\PageServiceProvider',
    ),
  ),
  'realdriss/platform' => 
  array (
    'providers' => 
    array (
      0 => 'RealDriss\\Base\\Providers\\BaseServiceProvider',
      1 => 'RealDriss\\Base\\Providers\\CommandServiceProvider',
      2 => 'RealDriss\\Base\\Providers\\EventServiceProvider',
      3 => 'RealDriss\\Base\\Providers\\BreadcrumbsServiceProvider',
      4 => 'RealDriss\\Base\\Providers\\ComposerServiceProvider',
      5 => 'RealDriss\\Base\\Providers\\MailConfigServiceProvider',
      6 => 'RealDriss\\Base\\Providers\\FormServiceProvider',
      7 => 'RealDriss\\Support\\Providers\\SupportServiceProvider',
      8 => 'RealDriss\\Table\\Providers\\TableServiceProvider',
      9 => 'RealDriss\\ACL\\Providers\\AclServiceProvider',
      10 => 'RealDriss\\Dashboard\\Providers\\DashboardServiceProvider',
      11 => 'RealDriss\\Media\\Providers\\MediaServiceProvider',
      12 => 'RealDriss\\JsValidation\\Providers\\JsValidationServiceProvider',
      13 => 'RealDriss\\Chart\\Providers\\ChartServiceProvider',
    ),
    'aliases' => 
    array (
      'Assets' => 'RealDriss\\Base\\Facades\\AssetsFacade',
      'BaseHelper' => 'RealDriss\\Base\\Facades\\BaseHelperFacade',
      'MetaBox' => 'RealDriss\\Base\\Facades\\MetaBoxFacade',
      'Action' => 'RealDriss\\Base\\Facades\\ActionFacade',
      'Filter' => 'RealDriss\\Base\\Facades\\FilterFacade',
      'EmailHandler' => 'RealDriss\\Base\\Facades\\EmailHandlerFacade',
      'Breadcrumbs' => 'RealDriss\\Base\\Facades\\BreadcrumbsFacade',
      'JsValidator' => 'RealDriss\\JsValidation\\Facades\\JsValidatorFacade',
    ),
  ),
  'realdriss/plugin-management' => 
  array (
    'providers' => 
    array (
      0 => 'RealDriss\\PluginManagement\\Providers\\PluginManagementServiceProvider',
    ),
  ),
  'realdriss/revision' => 
  array (
    'providers' => 
    array (
      0 => 'RealDriss\\Revision\\Providers\\RevisionServiceProvider',
    ),
  ),
  'realdriss/seo-helper' => 
  array (
    'providers' => 
    array (
      0 => 'RealDriss\\SeoHelper\\Providers\\SeoHelperServiceProvider',
    ),
    'aliases' => 
    array (
      'SeoHelper' => 'RealDriss\\SeoHelper\\Facades\\SeoHelperFacade',
    ),
  ),
  'realdriss/shortcode' => 
  array (
    'providers' => 
    array (
      0 => 'RealDriss\\Shortcode\\Providers\\ShortcodeServiceProvider',
    ),
  ),
  'realdriss/sitemap' => 
  array (
    'providers' => 
    array (
      0 => 'RealDriss\\Sitemap\\Providers\\SitemapServiceProvider',
    ),
  ),
  'realdriss/slug' => 
  array (
    'providers' => 
    array (
      0 => 'RealDriss\\Slug\\Providers\\SlugServiceProvider',
    ),
    'aliases' => 
    array (
      'SlugHelper' => 'RealDriss\\Slug\\Facades\\SlugHelperFacade',
    ),
  ),
  'realdriss/theme' => 
  array (
    'providers' => 
    array (
      0 => 'RealDriss\\Theme\\Providers\\ThemeServiceProvider',
      1 => 'RealDriss\\Theme\\Providers\\RouteServiceProvider',
    ),
    'aliases' => 
    array (
      'Theme' => 'RealDriss\\Theme\\Facades\\ThemeFacade',
      'ThemeOption' => 'RealDriss\\Theme\\Facades\\ThemeOptionFacade',
      'ThemeManager' => 'RealDriss\\Theme\\Facades\\ManagerFacade',
      'AdminBar' => 'RealDriss\\Theme\\Facades\\AdminBarFacade',
      'SiteMapManager' => 'RealDriss\\Theme\\Facades\\SiteMapManagerFacade',
    ),
  ),
  'realdriss/widget' => 
  array (
    'providers' => 
    array (
      0 => 'RealDriss\\Widget\\Providers\\WidgetServiceProvider',
    ),
    'aliases' => 
    array (
      'Widget' => 'RealDriss\\Widget\\Facades\\WidgetFacade',
      'WidgetGroup' => 'RealDriss\\Widget\\Facades\\WidgetGroupFacade',
    ),
  ),
  'tightenco/ziggy' => 
  array (
    'providers' => 
    array (
      0 => 'Tightenco\\Ziggy\\ZiggyServiceProvider',
    ),
  ),
  'yajra/laravel-datatables-buttons' => 
  array (
    'providers' => 
    array (
      0 => 'Yajra\\DataTables\\ButtonsServiceProvider',
    ),
  ),
  'yajra/laravel-datatables-html' => 
  array (
    'providers' => 
    array (
      0 => 'Yajra\\DataTables\\HtmlServiceProvider',
    ),
  ),
  'yajra/laravel-datatables-oracle' => 
  array (
    'providers' => 
    array (
      0 => 'Yajra\\DataTables\\DataTablesServiceProvider',
    ),
    'aliases' => 
    array (
      'DataTables' => 'Yajra\\DataTables\\Facades\\DataTables',
    ),
  ),
);