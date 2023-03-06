<?php

namespace Botble\Ecommerce\Repositories\Eloquent;

use Botble\Base\Enums\BaseStatusEnum;
use Botble\Ecommerce\Models\ProductAttribute;
use Botble\Ecommerce\Repositories\Interfaces\ProductInterface;
use Botble\Support\Repositories\Eloquent\RepositoriesAbstract;
use Carbon\Carbon;
use Exception;
use Illuminate\Database\Query\Builder;
use Illuminate\Database\Query\JoinClause;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\DB;

class ProductRepository extends RepositoriesAbstract implements ProductInterface
{

    /**
     * {@inheritDoc}
     */
    public function getSearch($query, $paginate = 10)
    {
        $data = $this->model
            ->where('name', 'LIKE', '%' . $query . '%')
            ->orWhere('sku', 'LIKE', '%' . $query . '%');

        return $this->applyBeforeExecuteQuery($data)->paginate($paginate);
    }

    /**
     * {@inheritDoc}
     */
    public function syncCategories($model, $categories = null)
    {
        if ($categories === null) {
            return null;
        }

        try {
            $model->categories()->sync((array)$categories);
            $result = true;
            $message = null;
        } catch (Exception $exception) {
            $result = false;
            $message = $exception->getMessage();
        }

        return [$result, $message];
    }

    /**
     * {@inheritDoc}
     */
    public function syncProductCollections($model, $productCollections = null)
    {
        if ($productCollections === null) {
            return null;
        }

        try {
            $model->productCollections()->sync((array)$productCollections);
            $message = null;
            $result = true;
        } catch (Exception $exception) {
            $result = false;
            $message = $exception->getMessage();
        }

        return [$result, $message];
    }

    /**
     * {@inheritDoc}
     */
    public function getRelatedCategories($model)
    {
        try {
            return $model->categories()->get();
        } catch (Exception $exception) {
            return collect([]);
        }
    }

    /**
     * {@inheritDoc}
     */
    public function getRelatedCategoryIds($model)
    {
        try {
            return $model->categories()->allRelatedIds()->toArray();
        } catch (Exception $exception) {
            return [];
        }
    }

    /**
     * {@inheritDoc}
     */
    public function getRelatedProductCollections($model)
    {
        try {
            return $model->productCollections()->get();
        } catch (Exception $exception) {
            return collect([]);
        }
    }

    /**
     * {@inheritDoc}
     */
    public function getRelatedProductCollectionIds($model)
    {
        try {
            return $model->productCollections()->allRelatedIds()->toArray();
        } catch (Exception $exception) {
            return [];
        }
    }

    /**
     * {@inheritDoc}
     */
    public function syncProducts($model, $products = null)
    {
        if ($products === null) {
            return null;
        }

        try {
            $model->products()->sync((array)$products);
            $message = null;
            $result = true;
        } catch (Exception $exception) {
            $result = false;
            $message = $exception->getMessage();
        }

        return [$result, $message];
    }

    /**
     * {@inheritDoc}
     */
    public function getRelatedProducts($model)
    {
        try {
            return $model->products()->get();
        } catch (Exception $exception) {
            return collect([]);
        }
    }

    /**
     * {@inheritDoc}
     */
    public function getRelatedProductIds($model)
    {
        try {
            return $model->products()->allRelatedIds()->toArray();
        } catch (Exception $exception) {
            return [];
        }
    }

    /**
     * {@inheritDoc}
     */
    public function syncCrossSaleProducts($model, $products = null)
    {
        if ($products === null) {
            return null;
        }

        try {
            $model->crossSales()->sync((array)$products);
            $message = null;
            $result = true;
        } catch (Exception $exception) {
            $result = false;
            $message = $exception->getMessage();
        }

        return [$result, $message];
    }

    /**
     * {@inheritDoc}
     */
    public function syncUpSaleProducts($model, $products = null)
    {
        if ($products === null) {
            return null;
        }

        try {
            $model->upSales()->sync((array)$products);
            $message = null;
            $result = true;
        } catch (Exception $exception) {
            $result = false;
            $message = $exception->getMessage();
        }

        return [$result, $message];
    }

    /**
     * {@inheritDoc}
     */
    public function getRelatedProductAttributeSets($product)
    {
        try {
            return $product->productAttributeSets()->orderBy('order')->get();
        } catch (Exception $exception) {
            return collect([]);
        }
    }

    /**
     * {@inheritDoc}
     */
    public function getRelatedProductAttributeSetIds($product)
    {
        try {
            return $product->productAttributeSets()->allRelatedIds()->toArray();
        } catch (Exception $exception) {
            return [];
        }
    }

    /**
     * {@inheritDoc}
     */
    public function getRelatedProductAttributes($product)
    {
        try {
            $data = ProductAttribute::join('ec_product_variation_items', 'ec_product_variation_items.attribute_id', '=',
                'ec_product_attributes.id')
                ->join('ec_product_variations', 'ec_product_variation_items.variation_id', '=',
                    'ec_product_variations.id')
                ->where('configurable_product_id', $product->id)
                ->where('ec_product_attributes.status', BaseStatusEnum::PUBLISHED)
                ->select('ec_product_attributes.*')
                ->distinct();

            return $this->applyBeforeExecuteQuery($data)->get();

        } catch (Exception $exception) {
            return collect([]);
        }
    }

    /**
     * {@inheritDoc}
     */
    public function getRelatedProductAttributeIds($product)
    {
        try {
            return $product->productAttributes()->allRelatedIds()->toArray();
        } catch (Exception $exception) {
            return [];
        }
    }

    /**
     * {@inheritDoc}
     */
    public function getProducts(array $params)
    {
        $this->model = $this->originalModel;

        $params = array_merge([
            'condition' => [
                'status'       => BaseStatusEnum::PUBLISHED,
                'is_variation' => 0,
            ],
            'order_by'  => [
                'order'      => 'ASC',
                'created_at' => 'DESC',
            ],
            'take'      => null,
            'paginate'  => [
                'per_page'      => null,
                'current_paged' => 1,
            ],
            'with'      => [],
            'withCount' => [],
        ], $params);

        return $this->advancedGet($params);
    }

    /**
     * {@inheritDoc}
     */
    public function getProductsWithCategory(array $params)
    {
        $this->model = $this->originalModel;

        $params = array_merge([
            'categories' => [
                'by'       => 'id',
                'value_in' => [],
            ],
            'condition'  => [
                'ec_products.status'       => BaseStatusEnum::PUBLISHED,
                'ec_products.is_variation' => 0,
            ],
            'order_by'   => [
                'ec_products.order'      => 'ASC',
                'ec_products.created_at' => 'DESC',
            ],
            'take'       => null,
            'paginate'   => [
                'per_page'      => null,
                'current_paged' => 1,
            ],
            'select'     => [
                'ec_products.*',
                'base_category.id as category_id',
                'base_category.name as category_name',
            ],
            'with'       => [],
        ], $params);

        $this->model = $this->model
            ->leftJoin('ec_product_category_product', 'ec_products.id', '=', 'ec_product_category_product.product_id')
            ->leftJoin('ec_product_categories', 'ec_product_categories.id', '=',
                'ec_product_category_product.category_id')
            ->leftJoin('ec_product_categories as base_category', 'ec_products.category_id', '=', 'base_category.id')
            ->leftJoin('ec_brands', 'ec_products.brand_id', '=', 'ec_brands.id')
            ->distinct()
            ->where(function ($query) use ($params) {
                /**
                 * @var Builder $query
                 */
                if (!$params['categories']['value_in']) {
                    return $query;
                }

                if ($params['categories']['by'] == 'id') {
                    return $query
                        ->whereIn('ec_products.category_id', $params['categories']['value_in'])
                        ->orWhereIn('ec_product_category_product.category_id', $params['categories']['value_in']);
                }
                return $query
                    ->whereIn('ec_product_categories.' . $params['categories']['by'],
                        $params['categories']['value_in']);
            });

        return $this->advancedGet($params);
    }

    /**
     * {@inheritDoc}
     */
    public function getOnSaleProducts(array $params)
    {
        $this->model = $this->originalModel;

        $params = array_merge([
            'condition' => [
                'status'       => BaseStatusEnum::PUBLISHED,
                'is_variation' => 0,
            ],
            'order_by'  => [
                'order'      => 'ASC',
                'created_at' => 'DESC',
            ],
            'take'      => null,
            'paginate'  => [
                'per_page'      => null,
                'current_paged' => 1,
            ],
            'with'      => [],
        ], $params);

        $this->model = $this->model
            ->where(function ($query) {
                /**
                 * @var Builder $query
                 */
                return $query
                    ->where(function ($subQuery) {
                        /**
                         * @var Builder $subQuery
                         */
                        return $subQuery
                            ->where('sale_type', 0)
                            ->where('sale_price', '>', 0);
                    })
                    ->orWhere(function ($subQuery) {
                        /**
                         * @var Builder $subQuery
                         */
                        return $subQuery
                            ->where(function ($sub) {
                                /**
                                 * @var Builder $sub
                                 */
                                return $sub
                                    ->where('sale_type', 1)
                                    ->where('start_date', '<>', null)
                                    ->where('end_date', '<>', null)
                                    ->where('start_date', '<=', now())
                                    ->where('end_date', '>=', Carbon::today());
                            })
                            ->orWhere(function ($sub) {
                                /**
                                 * @var Builder $sub
                                 */
                                return $sub
                                    ->where('sale_type', 1)
                                    ->where('start_date', '<>', null)
                                    ->where('start_date', '<=', now())
                                    ->whereNull('end_date');
                            });
                    });
            });

        return $this->advancedGet($params);
    }

    /**
     * {@inheritDoc}
     */
    public function getProductVariations($configurableProductId, array $params = [])
    {
        $this->model = $this->model
            ->join('ec_product_variations', function ($join) use ($configurableProductId) {
                /**
                 * @var JoinClause $join
                 */
                return $join
                    ->on('ec_product_variations.product_id', '=', 'ec_products.id')
                    ->where('ec_product_variations.configurable_product_id', $configurableProductId);
            })
            ->join('ec_products as original_products', 'ec_product_variations.configurable_product_id', '=',
                'original_products.id');

        $params = array_merge([
            'select' => [
                'ec_products.*',
                'ec_product_variations.id as variation_id',
                'ec_product_variations.configurable_product_id as configurable_product_id',
                'original_products.images as original_images',
            ],
        ], $params);

        return $this->advancedGet($params);
    }

    /**
     * {@inheritDoc}
     */
    public function getProductsByCollections(array $params)
    {
        $this->model = $this->originalModel;

        $params = array_merge([
            'collections' => [
                'by'       => 'id',
                'value_in' => [],
            ],
            'condition'   => [
                'ec_products.status'       => BaseStatusEnum::PUBLISHED,
                'ec_products.is_variation' => 0,
            ],
            'order_by'    => [
                'ec_products.order'      => 'ASC',
                'ec_products.created_at' => 'DESC',
            ],
            'take'        => null,
            'paginate'    => [
                'per_page'      => null,
                'current_paged' => 1,
            ],
            'select'      => [
                'ec_products.*',
            ],
            'with'        => [],
            'withCount'   => [],
        ], $params);

        $this->model = $this->model
            ->leftJoin('ec_product_collection_products', 'ec_products.id', '=',
                'ec_product_collection_products.product_id')
            ->leftJoin(
                'ec_product_collections',
                'ec_product_collections.id',
                '=',
                'ec_product_collection_products.product_collection_id'
            )
            ->distinct()
            ->where(function ($query) use ($params) {
                /**
                 * @var Builder $query
                 */
                if (!$params['collections']['value_in']) {
                    return $query;
                }

                return $query
                    ->whereIn('ec_product_collections.' . $params['collections']['by'],
                        $params['collections']['value_in']);
            });

        return $this->advancedGet($params);
    }

    /**
     * {@inheritDoc}
     */
    public function getProductByBrands(array $params)
    {
        $this->model = $this->originalModel;

        $params = array_merge([
            'brand_id'  => null,
            'condition' => [
                'status'       => BaseStatusEnum::PUBLISHED,
                'is_variation' => 0,
            ],
            'order_by'  => [
                'order'      => 'ASC',
                'created_at' => 'DESC',
            ],
            'take'      => null,
            'paginate'  => [
                'per_page'      => null,
                'current_paged' => 1,
            ],
            'select'    => [
                '*',
            ],
            'with'      => [

            ],
        ], $params);

        $this->model = $this->model
            ->where('brand_id', $params['brand_id']);

        return $this->advancedGet($params);
    }

    /**
     * {@inheritDoc}
     */
    public function getProductsByCategories(array $params)
    {
        $this->model = $this->originalModel;

        $params = array_merge([
            'categories' => [
                'by'       => 'id',
                'value_in' => [],
            ],
            'condition'  => [
                'ec_products.status'       => BaseStatusEnum::PUBLISHED,
                'ec_products.is_variation' => 0,
            ],
            'order_by'   => [
                'ec_products.order'      => 'ASC',
                'ec_products.created_at' => 'DESC',
            ],
            'take'       => null,
            'paginate'   => [
                'per_page'      => null,
                'current_paged' => 1,
            ],
            'select'     => [
                'ec_products.*',
            ],
            'with'       => [],
            'withCount'  => [],
        ], $params);

        $this->model = $this->model
            ->leftJoin('ec_product_category_product', 'ec_products.id', '=',
                'ec_product_category_product.product_id')
            ->leftJoin(
                'ec_product_categories',
                'ec_product_categories.id',
                '=',
                'ec_product_category_product.category_id'
            )
            ->distinct()
            ->where(function ($query) use ($params) {
                /**
                 * @var Builder $query
                 */
                if (!$params['categories']['value_in']) {
                    return $query;
                }

                return $query
                    ->whereIn('ec_product_categories.' . $params['categories']['by'],
                        $params['categories']['value_in']);
            });

        return $this->advancedGet($params);
    }

    /**
     * {@inheritDoc}
     */
    public function getProductByTags(array $params)
    {
        $this->model = $this->originalModel;

        $params = array_merge([
            'product_tag' => [
                'by'       => 'id',
                'value_in' => [],
            ],
            'condition'   => [
                'ec_products.status'       => BaseStatusEnum::PUBLISHED,
                'ec_products.is_variation' => 0,
            ],
            'order_by'    => [
                'ec_products.order'      => 'ASC',
                'ec_products.created_at' => 'DESC',
            ],
            'take'        => null,
            'paginate'    => [
                'per_page'      => null,
                'current_paged' => 1,
            ],
            'select'      => [
                'ec_products.*',
            ],
            'with'        => [],
            'withCount'   => [],
        ], $params);

        $this->model = $this->model
            ->leftJoin('ec_product_tag_product', 'ec_products.id', '=', 'ec_product_tag_product.product_id')
            ->leftJoin('ec_product_tags', 'ec_product_tags.id', '=', 'ec_product_tag_product.tag_id')
            ->distinct()
            ->where(function ($query) use ($params) {
                /**
                 * @var Builder $query
                 */
                if (!$params['product_tag']['value_in']) {
                    return $query;
                }

                return $query
                    ->whereIn('ec_product_tag_product.tag_id', $params['product_tag']['value_in']);
            });

        return $this->advancedGet($params);
    }

    /**
     * {@inheritDoc}
     */
    public function filterProducts(array $filters, array $params = [])
    {
        $filters = array_merge([
            'keyword'                => null,
            'min_price'              => null,
            'max_price'              => null,
            'categories'             => [],
            'tags'                   => [],
            'brands'                 => [],
            'attributes'             => [],
            'count_attribute_groups' => null,
        ], $filters);

        $params = array_merge([
            'condition' => [
                'ec_products.status'       => BaseStatusEnum::PUBLISHED,
                'ec_products.is_variation' => 0,
            ],
            'order_by'  => $filters['order_by'],
            'take'      => null,
            'paginate'  => [
                'per_page'      => null,
                'current_paged' => 1,
            ],
            'select'    => [
                'ec_products.*',
                'products_with_final_price.final_price',
            ],
            'with'      => [],
            'withCount' => [],
        ], $params);

        $this->model = $this->originalModel;

        $now = now();

        $this->model = $this->model
            ->distinct()
            ->join(DB::raw('
                (
                    SELECT DISTINCT
                        `ec_products`.id,
                        CASE
                            WHEN (
                                ec_products.sale_type = 0 AND
                                ec_products.sale_price <> 0
                            ) THEN ec_products.sale_price
                            WHEN (
                                ec_products.sale_type = 0 AND
                                ec_products.sale_price = 0
                            ) THEN ec_products.price
                            WHEN (
                                ec_products.sale_type = 1 AND
                                (
                                    ec_products.start_date > ' . esc_sql($now) . ' OR
                                    ec_products.end_date < ' . esc_sql($now) . '
                                )
                            ) THEN ec_products.price
                            WHEN (
                                ec_products.sale_type = 1 AND
                                ec_products.start_date <= ' . esc_sql($now) . ' AND
                                ec_products.end_date >= ' . esc_sql($now) . '
                            ) THEN ec_products.sale_price
                            WHEN (
                                ec_products.sale_type = 1 AND
                                ec_products.start_date IS NULL AND
                                ec_products.end_date >= ' . esc_sql($now) . '
                            ) THEN ec_products.sale_price
                            WHEN (
                                ec_products.sale_type = 1 AND
                                ec_products.start_date <= ' . esc_sql($now) . ' AND
                                ec_products.end_date IS NULL
                            ) THEN ec_products.sale_price
                            ELSE ec_products.price
                        END AS final_price
                    FROM `ec_products`
                ) AS products_with_final_price
            '), function ($join) {
                return $join->on('products_with_final_price.id', '=', 'ec_products.id');
            });

        $keyword = $filters['keyword'];
        if ($keyword) {
            $this->model = $this->model
                ->where(function ($query) use ($keyword) {
                    /**
                     * @var Builder $query
                     */
                    return $query
                        ->where('ec_products.name', 'LIKE', '%' . $keyword . '%')
                        ->orWhere('ec_products.sku', 'LIKE', '%' . $keyword . '%')
                        ->orWhere('ec_products.description', 'LIKE', '%' . $keyword . '%')
                        ->orWhereHas('tags', function ($query) use ($keyword) {
                            /**
                             * @var Builder $query
                             */
                            $query->where('ec_product_tags.name', 'LIKE', '%' . $keyword . '%');
                        });
                });
        }

        // Filter product by min price and max price
        if ($filters['min_price'] !== null || $filters['max_price'] !== null) {
            $this->model = $this->model
                ->where(function ($query) use ($filters) {
                    /**
                     * @var Builder $query
                     */
                    $priceMin = Arr::get($filters, 'min_price');
                    $priceMax = Arr::get($filters, 'max_price');

                    if ($priceMin !== null) {
                        $query = $query->where('products_with_final_price.final_price', '>=', $priceMin);
                    }

                    if ($priceMax !== null) {
                        $query = $query->where('products_with_final_price.final_price', '<=', $priceMax);
                    }

                    return $query;
                });
        }

        // Filter product by categories
        $filters['categories'] = array_filter($filters['categories']);
        if ($filters['categories']) {
            $this->model = $this->model
                ->leftJoin('ec_product_category_product', 'ec_product_category_product.product_id', '=',
                    'ec_products.id')
                ->where(function ($query) use ($filters) {
                    /**
                     * @var Builder $query
                     */
                    return $query
                        ->whereIn('ec_product_category_product.category_id', $filters['categories']);
                });
        }

        // Filter product by tags
        $filters['tags'] = array_filter($filters['tags']);
        if ($filters['tags']) {
            $this->model = $this->model
                ->leftJoin('ec_product_tag_product', 'ec_product_tag_product.product_id', '=',
                    'ec_products.id')
                ->where(function ($query) use ($filters) {
                    /**
                     * @var Builder $query
                     */
                    return $query
                        ->whereIn('ec_product_tag_product.tag_id', $filters['tags']);
                });
        }

        // Filter product by collections
        $filters['collections'] = array_filter($filters['collections']);
        if ($filters['collections']) {
            $this->model = $this->model
                ->leftJoin('ec_product_collection_products', 'ec_product_collection_products.product_id', '=',
                    'ec_products.id')
                ->where(function ($query) use ($filters) {
                    /**
                     * @var Builder $query
                     */
                    return $query
                        ->whereIn('ec_product_collection_products.product_collection_id', $filters['collections']);
                });
        }

        // Filter product by brands
        $filters['brands'] = array_filter($filters['brands']);
        if ($filters['brands']) {
            $this->model = $this->model
                ->leftJoin('ec_brands', 'ec_products.brand_id', '=', 'ec_brands.id')
                ->whereIn('ec_products.brand_id', $filters['brands']);
        }

        // Filter product by attributes
        $filters['attributes'] = array_filter($filters['attributes']);
        if ($filters['attributes']) {
            $this->model = $this->model
                ->join(
                    DB::raw('
                    (
                        SELECT DISTINCT
                            ec_product_variations.id,
                            ec_product_variations.configurable_product_id,
                            COUNT(ec_product_variation_items.attribute_id) AS count_attr

                        FROM ec_product_variation_items

                        INNER JOIN ec_product_variations ON ec_product_variations.id = ec_product_variation_items.variation_id

                        WHERE ec_product_variation_items.attribute_id IN (' . implode(',', $filters['attributes']) . ')

                        GROUP BY
                            ec_product_variations.id,
                            ec_product_variations.configurable_product_id
                    ) AS t2'),
                    function ($join) use ($filters) {
                        /**
                         * @var JoinClause $join
                         */
                        $join = $join->on('t2.configurable_product_id', '=', 'ec_products.id');

                        if ($filters['count_attribute_groups'] > 1) {
                            $join = $join->on('t2.count_attr', '=', DB::raw($filters['count_attribute_groups']));
                        }

                        return $join;
                    }
                );
        }

        return $this->advancedGet($params);
    }
}
