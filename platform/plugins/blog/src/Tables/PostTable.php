<?php

namespace RealDriss\Blog\Tables;

use BaseHelper;
use RealDriss\Base\Enums\BaseStatusEnum;
use RealDriss\Blog\Exports\PostExport;
use RealDriss\Blog\Repositories\Interfaces\CategoryInterface;
use RealDriss\Blog\Repositories\Interfaces\PostInterface;
use RealDriss\Table\Abstracts\TableAbstract;
use Carbon\Carbon;
use Html;
use Illuminate\Contracts\Routing\UrlGenerator;
use Illuminate\Database\Query\Builder;
use Illuminate\Support\Facades\Auth;
use Yajra\DataTables\DataTables;

class PostTable extends TableAbstract
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
     * @var CategoryInterface
     */
    protected $categoryRepository;

    /**
     * @var string
     */
    protected $exportClass = PostExport::class;

    /**
     * @var int
     */
    protected $defaultSortColumn = 6;

    /**
     * PostTable constructor.
     * @param DataTables $table
     * @param UrlGenerator $urlGenerator
     * @param PostInterface $postRepository
     * @param CategoryInterface $categoryRepository
     */
    public function __construct(
        DataTables $table,
        UrlGenerator $urlGenerator,
        PostInterface $postRepository,
        CategoryInterface $categoryRepository
    ) {
        parent::__construct($table, $urlGenerator);

        $this->repository = $postRepository;
        $this->categoryRepository = $categoryRepository;

        if (!Auth::user()->hasAnyPermission(['posts.edit', 'posts.destroy'])) {
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
            ->editColumn('name', function ($item) {
                if (!Auth::user()->hasPermission('posts.edit')) {
                    return $item->name;
                }

                return Html::link(route('posts.edit', $item->id), $item->name);
            })
            ->editColumn('image', function ($item) {
                return $this->displayThumbnail($item->image);
            })
            ->editColumn('checkbox', function ($item) {
                return $this->getCheckbox($item->id);
            })
            ->editColumn('created_at', function ($item) {
                return BaseHelper::formatDate($item->created_at);
            })
            ->editColumn('updated_at', function ($item) {
                $categories = '';
                foreach ($item->categories as $category) {
                    $categories .= Html::link(route('categories.edit', $category->id), $category->name) . ', ';
                }

                return rtrim($categories, ', ');
            })
            ->editColumn('author_id', function ($item) {
                return $item->author ? $item->author->name : null;
            })
            ->editColumn('status', function ($item) {
                if ($this->request()->input('action') === 'excel') {
                    return $item->status->getValue();
                }

                return $item->status->toHtml();
            })
            ->addColumn('operations', function ($item) {
                return $this->getOperations('posts.edit', 'posts.destroy', $item);
            });

        return $this->toJson($data);
    }

    /**
     * {@inheritDoc}
     */
    public function query()
    {
        $query = $this->repository->getModel()
            ->with([
                'categories' => function ($query) {
                    $query->select(['categories.id', 'categories.name']);
                },
                'author',
            ])
            ->select([
                'id',
                'name',
                'image',
                'created_at',
                'status',
                'updated_at',
                'author_id',
                'author_type',
            ]);

        return $this->applyScopes($query);
    }

    /**
     * {@inheritDoc}
     */
    public function columns()
    {
        return [
            'id'         => [
                'title' => trans('core/base::tables.id'),
                'width' => '20px',
            ],
            'image'      => [
                'title' => trans('core/base::tables.image'),
                'width' => '70px',
            ],
            'name'       => [
                'title' => trans('core/base::tables.name'),
                'class' => 'text-left',
            ],
            'updated_at' => [
                'title'     => trans('plugins/blog::posts.categories'),
                'width'     => '150px',
                'class'     => 'no-sort text-center',
                'orderable' => false,
            ],
            'author_id'  => [
                'title'     => trans('plugins/blog::posts.author'),
                'width'     => '150px',
                'class'     => 'no-sort text-center',
                'orderable' => false,
            ],
            'created_at' => [
                'title' => trans('core/base::tables.created_at'),
                'width' => '100px',
                'class' => 'text-center',
            ],
            'status'     => [
                'title' => trans('core/base::tables.status'),
                'width' => '100px',
                'class' => 'text-center',
            ],
        ];
    }

    /**
     * {@inheritDoc}
     */
    public function buttons()
    {
        return $this->addCreateButton(route('posts.create'), 'posts.create');
    }

    /**
     * {@inheritDoc}
     */
    public function bulkActions(): array
    {
        return $this->addDeleteAction(route('posts.deletes'), 'posts.destroy', parent::bulkActions());
    }

    /**
     * {@inheritDoc}
     */
    public function getBulkChanges(): array
    {
        return [
            'name'       => [
                'title'    => trans('core/base::tables.name'),
                'type'     => 'text',
                'validate' => 'required|max:120',
            ],
            'status'     => [
                'title'    => trans('core/base::tables.status'),
                'type'     => 'select',
                'choices'  => BaseStatusEnum::labels(),
                'validate' => 'required|in:' . implode(',', BaseStatusEnum::values()),
            ],
            'category'         => [
                'title'    => trans('plugins/blog::posts.category'),
                'type'     => 'select-search',
                'validate' => 'required',
                'callback' => 'getCategories',
            ],
            'created_at' => [
                'title'    => trans('core/base::tables.created_at'),
                'type'     => 'date',
                'validate' => 'required',
            ],
        ];
    }

    /**
     * @return array
     */
    public function getCategories(): array
    {
        return $this->categoryRepository->pluck('categories.name', 'categories.id');
    }

    /**
     * {@inheritDoc}
     */
    public function applyFilterCondition($query, string $key, string $operator, ?string $value)
    {
        switch ($key) {
            case 'created_at':
                if (!$value) {
                    break;
                }

                $value = Carbon::createFromFormat(config('core.base.general.date_format.date'), $value)->toDateString();

                return $query->whereDate($key, $operator, $value);
            case 'category':
                if (!$value) {
                    break;
                }

                if (!$this->isJoined($query, 'post_categories')) {
                    $query = $query
                        ->join('post_categories', 'post_categories.post_id', '=', 'posts.id')
                        ->join('categories', 'post_categories.category_id', '=', 'categories.id')
                        ->select($query->getModel()->getTable() . '.*');
                }

                return $query->where('post_categories.category_id', $value);
        }

        return parent::applyFilterCondition($query, $key, $operator, $value);
    }

    /**
     * @param Builder $query
     * @param string $table
     * @return bool
     */
    protected function isJoined($query, $table)
    {
        $joins = $query->getQuery()->joins;

        if ($joins == null) {
            return false;
        }

        foreach ($joins as $join) {
            if ($join->table == $table) {
                return true;
            }
        }

        return false;
    }

    /**
     * {@inheritDoc}
     */
    public function saveBulkChangeItem($item, string $inputKey, ?string $inputValue)
    {
        if ($inputKey === 'category') {
            $item->categories()->sync([$inputValue]);

            return $item;
        }

        return parent::saveBulkChangeItem($item, $inputKey, $inputValue);
    }

    /**
     * {@inheritDoc}
     */
    public function getDefaultButtons(): array
    {
        return [
            'export',
            'reload',
        ];
    }
}
