<?php

namespace RealDriss\Theme\Http\Controllers;

use BaseHelper;
use RealDriss\Page\Models\Page;
use RealDriss\Page\Services\PageService; // every route is handled by the page package
use RealDriss\Theme\Events\RenderingHomePageEvent;
use RealDriss\Theme\Events\RenderingSingleEvent;
use RealDriss\Theme\Events\RenderingSiteMapEvent;
use Illuminate\Contracts\Filesystem\FileNotFoundException;
use Illuminate\Routing\Controller;
use Illuminate\Support\Arr;
use Response;
use SeoHelper;
use SiteMapManager;
use SlugHelper;
use Theme;

class PublicController extends Controller
{
    /**
     * @param string $key
     * @return \Illuminate\Http\RedirectResponse|Response
     * @throws FileNotFoundException
     */
    public function getView($key = null)
    {
        if (empty($key)) {
            return $this->getIndex();
        }

        $slug = SlugHelper::getSlug($key, '');
        //dd($slug);

        if (!$slug) {
            abort(404);
        }

        if (defined('PAGE_MODULE_SCREEN_NAME')) {
            if ($slug->reference_type == Page::class && BaseHelper::isHomepage($slug->reference_id)) {
                return redirect()->route('public.index');
            }
        }

        $result = apply_filters(BASE_FILTER_PUBLIC_SINGLE_DATA, $slug);
        //dd($result);

        if (isset($result['slug']) && $result['slug'] !== $key) {
            return redirect()->route('public.single', $result['slug']);
        }

        event(new RenderingSingleEvent($slug));

        if (!empty($result) && is_array($result)) {
            /**
             * @param $result['view'] e.g 'page'
             * @param $result['data'] e.g ['page' => RealDriss\Page\Models\Page]
             * @param Arr::get($result, 'default_view') e.g "packages/page::themes.page"
             * 
             * 
            */
            return Theme::scope($result['view'], $result['data'], Arr::get($result, 'default_view'))->render();
        }

        abort(404);
    }

    /**
     * @return \Illuminate\Http\Response|Response
     */
    public function getIndex()
    {
        if (defined('PAGE_MODULE_SCREEN_NAME')) {
            $homepageId = BaseHelper::getHomepageId();

            if ($homepageId) {
                $slug = SlugHelper::getSlug(null, SlugHelper::getPrefix(Page::class), Page::class, $homepageId);
                // dump($slug);

                if ($slug) {
                    $data = (new PageService)->handleFrontRoutes($slug);
                    // dd(Theme::scope($data['view'], $data['data'], $data['default_view']));

                    return Theme::scope($data['view'], $data['data'], $data['default_view'])->render();
                }
            }
        }

        SeoHelper::setTitle(theme_option('site_title'));

        Theme::breadcrumb()->add(__('Home'), route('public.index'));

        event(RenderingHomePageEvent::class);


        return Theme::scope('index')->render();
    }

    /**
     * @return string
     */
    public function getSiteMap()
    {
        event(RenderingSiteMapEvent::class);

        // show your site map (options: 'xml' (default), 'html', 'txt', 'ror-rss', 'ror-rdf')
        return SiteMapManager::render();
    }
}
