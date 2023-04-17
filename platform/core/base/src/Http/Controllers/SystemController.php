<?php

namespace RealDriss\Base\Http\Controllers;

use Arr; //Illuminate\Support\Arr
use Assets; //RealDriss\Base\Facades\AssetsFacade
use RealDriss\Base\Http\Responses\BaseHttpResponse;
use RealDriss\Base\Supports\Helper;
use RealDriss\Base\Supports\Language;
use RealDriss\Base\Supports\MembershipAuthorization;
use RealDriss\Base\Supports\SystemManagement;
use RealDriss\Base\Tables\InfoTable;
use RealDriss\Table\TableBuilder;
// start dev section
use RealDriss\Base\Models\BaseModel;
use RealDriss\Base\Models\MetaBox;
// end dev section
use Exception;
use Illuminate\Contracts\Container\BindingResolutionException;
use Illuminate\Contracts\Filesystem\FileNotFoundException;
use Illuminate\Contracts\View\Factory;
use Illuminate\Filesystem\Filesystem;
use Illuminate\Foundation\Application;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\View\View;
use Menu;
use Throwable;

class SystemController extends Controller
{

    /**
     * @param Request $request
     * @param TableBuilder $tableBuilder
     * @return Factory|View
     * @throws Throwable
     * @throws BindingResolutionException
     * @throws FileNotFoundException
     */

     //serves --admin/system/info
    public function getInfo(Request $request, TableBuilder $tableBuilder)
    {
        page_title()->setTitle(trans('core/base::system.info.title'));

        Assets::addScriptsDirectly('vendor/core/core/base/js/system-info.js')
            ->addStylesDirectly(['vendor/core/core/base/css/system-info.css']);

        $composerArray = SystemManagement::getComposerArray();
        $packages = SystemManagement::getPackagesAndDependencies($composerArray['require']);
        

        $infoTable = $tableBuilder->create(InfoTable::class);

        if ($request->expectsJson()) {
            return $infoTable->renderTable();
        }

        //bug
        $systemEnv = SystemManagement::getSystemEnv();
        $serverEnv = SystemManagement::getServerEnv();

        $requiredPhpVersion = Arr::get($composerArray, 'require.php', '^7.3');
        $requiredPhpVersion = str_replace('^', '', $requiredPhpVersion);
        $requiredPhpVersion = str_replace('~', '', $requiredPhpVersion);

        $matchPHPRequirement = version_compare(phpversion(), $requiredPhpVersion) > 0;

        // dd($systemEnv);
        return view('core/base::system.info', compact(
            'packages',
            'infoTable',
            'systemEnv',
            'serverEnv',
            'matchPHPRequirement',
            'requiredPhpVersion'
        ));
    }

    /**
     * @return Factory|View
     */
    //serves --admin/system/cache
    public function getCacheManagement()
    {
        page_title()->setTitle(trans('core/base::cache.cache_management'));

        Assets::addScriptsDirectly('vendor/core/core/base/js/cache.js');

        return view('core/base::system.cache');
    }

    /**
     * @param Request $request
     * @param BaseHttpResponse $response
     * @param Filesystem $files
     * @param Application $app
     * @return BaseHttpResponse
     */

     //serves --admin/system/cache/clear
    public function postClearCache(Request $request, BaseHttpResponse $response, Filesystem $files, Application $app)
    {
        switch ($request->input('type')) {
            case 'clear_cms_cache':
                Helper::clearCache();
                Menu::clearCacheMenuItems();
                break;
            case 'refresh_compiled_views':
                foreach ($files->glob(config('view.compiled') . '/*') as $view) {
                    $files->delete($view);
                }
                break;
            case 'clear_config_cache':
                $files->delete($app->getCachedConfigPath());
                break;
            case 'clear_route_cache':
                $files->delete($app->getCachedRoutesPath());
                break;
            case 'clear_log':
                if ($files->isDirectory(storage_path('logs'))) {
                    foreach ($files->allFiles(storage_path('logs')) as $file) {
                        $files->delete($file->getPathname());
                    }
                }
                break;
        }

        return $response->setMessage(trans('core/base::cache.commands.' . $request->input('type') . '.success_msg'));
    }

    /**
     * @param MembershipAuthorization $authorization
     * @param BaseHttpResponse $response
     * @return BaseHttpResponse
     */


     //serves --admin/membership/authorize
    public function authorize(MembershipAuthorization $authorization, BaseHttpResponse $response)
    {
        $authorization->authorize();

        return $response;
    }

    /**
     * @param string $lang
     * @param Request $request
     * @return RedirectResponse
     * @throws Exception
     */

     //serves --settings-language/{alias}
    public function getLanguage($lang, Request $request)
    {
        if ($lang != false && array_key_exists($lang, Language::getAvailableLocales())) {
            if (Auth::check()) {
                cache()->forget(md5('cache-dashboard-menu-' . $request->user()->getKey()));
            }
            session()->put('site-locale', $lang);
        }

        return redirect()->back();
    }

    //start dev section
    public function dev()
    {

        BaseModel::dev();
        MetaBox::dev();
        BaseHttpResponse::dev();
        SystemManagement::dev();
        echo 'Yey! Let\'s develop RealDriss!'; 
    }
    //end dev section
}
