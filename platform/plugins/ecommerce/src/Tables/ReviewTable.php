<?php

namespace Botble\Ecommerce\Tables;

use BaseHelper;
use Botble\Base\Enums\BaseStatusEnum;
use Botble\Ecommerce\Repositories\Interfaces\ReviewInterface;
use Botble\Table\Abstracts\TableAbstract;
use Html;
use Illuminate\Contracts\Routing\UrlGenerator;
use Illuminate\Support\Facades\Auth;
use Yajra\DataTables\DataTables;

class ReviewTable extends TableAbstract
{

    /**
     * @var bool
     */
    protected $hasActions = true;

    /**
     * @var bool
     */
    protected $hasFilter = true;

    /**
     * ReviewTable constructor.
     * @param DataTables $table
     * @param UrlGenerator $urlGenerator
     * @param ReviewInterface $reviewRepository
     */
    public function __construct(DataTables $table, UrlGenerator $urlGenerator, ReviewInterface $reviewRepository)
    {
        parent::__construct($table, $urlGenerator);

        $this->repository = $reviewRepository;

        if (!Auth::user()->hasAnyPermission(['review.edit', 'review.destroy'])) {
            $this->hasOperations = false;
            $this->hasActions = false;
        }
    }

    /**
     * {@inheritDoc}
     */
    public function ajax()
    {
        $data = $this->table
            ->eloquent($this->query())
            ->editColumn('product_id', function ($item) {
                if (!empty($item->product)) {
                    return Html::link($item->product->url,
                        $item->product_name,
                        ['target' => '_blank']
                    );
                }
                return null;
            })
            ->editColumn('customer_id', function ($item) {
                return Html::link(route('customer.edit', $item->user->id), $item->user->name)->toHtml();
            })
            ->editColumn('star', function ($item) {
                return view('plugins/ecommerce::reviews.partials.rating', ['star' => $item->star])->render();
            })
            ->editColumn('checkbox', function ($item) {
                return $this->getCheckbox($item->id);
            })
            ->editColumn('status', function ($item) {
                return $item->status->toHtml();
            })
            ->editColumn('created_at', function ($item) {
                return BaseHelper::formatDate($item->created_at);
            })
            ->addColumn('operations', function ($item) {
                return view('plugins/ecommerce::reviews.partials.actions', compact('item'))->render();
            });

        return $this->toJson($data);
    }

    /**
     * {@inheritDoc}
     */
    public function query()
    {
        $query = $this->repository->getModel()
            ->select([
                'id',
                'star',
                'comment',
                'product_id',
                'customer_id',
                'status',
                'created_at',
            ])
            ->with(['user', 'product']);

        return $this->applyScopes($query);
    }

    /**
     * {@inheritDoc}
     */
    public function columns()
    {
        return [
            'id'          => [
                'title' => trans('core/base::tables.id'),
                'width' => '20px',
                'class' => 'text-left',
            ],
            'product_id'  => [
                'title' => trans('plugins/ecommerce::review.product'),
                'class' => 'text-left',
            ],
            'customer_id' => [
                'title' => trans('plugins/ecommerce::review.user'),
                'class' => 'text-left',
            ],
            'star'        => [
                'title' => trans('plugins/ecommerce::review.star'),
                'class' => 'text-center',
            ],
            'comment'     => [
                'title' => trans('plugins/ecommerce::review.comment'),
                'class' => 'text-left',
            ],
            'status'      => [
                'title' => trans('plugins/ecommerce::review.status'),
                'class' => 'text-center',
            ],
            'created_at'  => [
                'title' => trans('core/base::tables.created_at'),
                'width' => '100px',
                'class' => 'text-left',
            ],
        ];
    }

    /**
     * {@inheritDoc}
     */
    public function bulkActions(): array
    {
        return $this->addDeleteAction(route('reviews.deletes'), 'review.destroy', parent::bulkActions());
    }

    /**
     * {@inheritDoc}
     */
    public function getBulkChanges(): array
    {
        return [
            'status'     => [
                'title'    => trans('core/base::tables.status'),
                'type'     => 'select',
                'choices'  => BaseStatusEnum::labels(),
                'validate' => 'required|in:' . implode(',', BaseStatusEnum::values()),
            ],
            'created_at' => [
                'title' => trans('core/base::tables.created_at'),
                'type'  => 'date',
            ],
        ];
    }

    /**
     * {@inheritDoc}
     */
    public function renderTable($data = [], $mergeData = [])
    {
        if ($this->query()->count() === 0 &&
            !$this->request()->wantsJson() &&
            $this->request()->input('filter_table_id') !== $this->getOption('id')
        ) {
            return view('plugins/ecommerce::reviews.intro');
        }

        return parent::renderTable($data, $mergeData);
    }
}
