<?php

namespace RealDriss\Ecommerce\Http\Controllers;

use Assets;
use RealDriss\Base\Events\DeletedContentEvent;
use RealDriss\Base\Http\Controllers\BaseController;
use RealDriss\Base\Http\Responses\BaseHttpResponse;
use RealDriss\Ecommerce\Repositories\Interfaces\ReviewInterface;
use RealDriss\Ecommerce\Tables\ReviewTable;
use Exception;
use Illuminate\Contracts\View\Factory;
use Illuminate\Http\Request;
use Illuminate\View\View;
use Throwable;

class ReviewController extends BaseController
{
    /**
     * @var ReviewInterface
     */
    protected $reviewRepository;

    /**
     * ReviewController constructor.
     * @param ReviewInterface $reviewRepository
     */
    public function __construct(ReviewInterface $reviewRepository)
    {
        $this->reviewRepository = $reviewRepository;
    }

    /**
     * @param ReviewTable $dataTable
     * @return Factory|View
     * @throws Throwable
     */
    public function index(ReviewTable $dataTable)
    {
        page_title()->setTitle(trans('plugins/ecommerce::review.name'));

        Assets::addStylesDirectly('vendor/core/plugins/ecommerce/css/review.css');

        return $dataTable->renderTable();
    }

    /**
     * @param Request $request
     * @param int $id
     * @param BaseHttpResponse $response
     * @return BaseHttpResponse
     */
    public function destroy(Request $request, $id, BaseHttpResponse $response)
    {
        try {
            $review = $this->reviewRepository->findOrFail($id);
            $this->reviewRepository->delete($review);

            event(new DeletedContentEvent(REVIEW_MODULE_SCREEN_NAME, $request, $review));

            return $response->setMessage(trans('core/base::notices.delete_success_message'));
        } catch (Exception $exception) {
            return $response
                ->setError()
                ->setMessage($exception->getMessage());
        }
    }

    /**
     * @param Request $request
     * @param BaseHttpResponse $response
     * @return BaseHttpResponse
     * @throws Exception
     */
    public function deletes(Request $request, BaseHttpResponse $response)
    {
        $ids = $request->input('ids');
        if (empty($ids)) {
            return $response
                ->setError()
                ->setMessage(trans('core/base::notices.no_select'));
        }

        foreach ($ids as $id) {
            $review = $this->reviewRepository->findOrFail($id);
            $this->reviewRepository->delete($review);

            event(new DeletedContentEvent(REVIEW_MODULE_SCREEN_NAME, $request, $review));
        }

        return $response->setMessage(trans('core/base::notices.delete_success_message'));
    }
}
