<?php

use Botble\Base\Enums\BaseStatusEnum;
use Botble\Ecommerce\Models\Product;
use Botble\Ecommerce\Repositories\Interfaces\ProductCategoryInterface;
use Botble\Ecommerce\Repositories\Interfaces\ProductCollectionInterface;
use Botble\Ecommerce\Repositories\Interfaces\ProductInterface;
use Botble\Ecommerce\Repositories\Interfaces\ReviewInterface;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Support\Arr;
use Illuminate\Support\Collection;

if (!function_exists('get_product_by_id')) {
    /**
     * @param int $productId
     * @return mixed
     */
    function get_product_by_id($productId)
    {
        return app(ProductInterface::class)->findById($productId);
    }
}

if (!function_exists('get_products')) {
    /**
     * @param array $params
     * @return mixed
     */
    function get_products(array $params = [])
    {
        $params = array_merge([
            'condition' => [
                'ec_products.status'       => BaseStatusEnum::PUBLISHED,
                'ec_products.is_variation' => 0,
            ],
            'order_by'  => [
                'ec_products.order'      => 'ASC',
                'ec_products.created_at' => 'DESC',
            ],
            'take'      => null,
            'paginate'  => [
                'per_page'      => null,
                'current_paged' => 1,
            ],
            'select'    => [
                'ec_products.*',
            ],
            'with'      => ['slugable'],
        ], $params);

        return app(ProductInterface::class)->getProducts($params);
    }
}

if (!function_exists('get_products_by_categories')) {
    /**
     * @param array $params
     * @return mixed
     */
    function get_products_by_categories(array $params = [])
    {
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

        return app(ProductInterface::class)->getProductsWithCategory($params);
    }
}

if (!function_exists('get_products_on_sale')) {
    /**
     * @param array $params
     * @return mixed
     */
    function get_products_on_sale(array $params = [])
    {
        $params = array_merge([
            'condition' => [
                'ec_products.status'       => BaseStatusEnum::PUBLISHED,
                'ec_products.is_variation' => 0,
            ],
            'order_by'  => [
                'ec_products.order'      => 'ASC',
                'ec_products.created_at' => 'DESC',
            ],
            'take'      => null,
            'paginate'  => [
                'per_page'      => null,
                'current_paged' => 1,
            ],
            'select'    => [
                'ec_products.*',
            ],
            'with'      => [],
            'withCount' => [],
        ], $params);

        return app(ProductInterface::class)->getOnSaleProducts($params);
    }
}

if (!function_exists('get_featured_products')) {
    /**
     * @param array $params
     * @return mixed
     */
    function get_featured_products(array $params = [])
    {
        $params = array_merge([
            'condition' => [
                'ec_products.is_featured'  => 1,
                'ec_products.is_variation' => 0,
                'ec_products.status'       => BaseStatusEnum::PUBLISHED,
            ],
            'take'      => null,
            'order_by'  => [
                'ec_products.created_at' => 'DESC',
            ],
            'select'    => ['ec_products.*'],
            'with'      => [],
        ], $params);

        return app(ProductInterface::class)->advancedGet($params);
    }
}

if (!function_exists('get_top_rated_products')) {
    /**
     * @param int $limit
     * @param array $with
     * @param array $withCount
     * @return mixed
     */
    function get_top_rated_products($limit = 10, array $with = [], array $withCount = [])
    {
        $topProductIds = get_top_rated_product_ids($limit);

        $products = get_products([
            'condition' => [
                'ec_products.status'       => BaseStatusEnum::PUBLISHED,
                'ec_products.is_variation' => 0,
                ['ec_products.id', 'IN', $topProductIds],
            ],
            'order_by'  => [
                'ec_products.order'      => 'ASC',
                'ec_products.created_at' => 'DESC',
            ],
            'take'      => null,
            'paginate'  => [
                'per_page'      => null,
                'current_paged' => 1,
            ],
            'select'    => [
                'ec_products.*',
            ],
            'with'      => $with,
            'withCount' => $withCount,
        ]);

        $products = $products->sortBy(function ($product) use ($topProductIds) {
            return array_search($product->id, $topProductIds);
        });

        return $products;
    }
}

if (!function_exists('get_top_rated_product_ids')) {
    /**
     * @param int $limit
     * @return mixed
     */
    function get_top_rated_product_ids($limit = 10)
    {
        return app(ReviewInterface::class)->getModel()
            ->where([
                'ec_reviews.status' => BaseStatusEnum::PUBLISHED,
            ])
            ->selectRaw('ec_reviews.product_id, avg(ec_reviews.star) AS star')
            ->groupBy('ec_reviews.product_id')
            ->orderBy('star', 'DESC')
            ->limit($limit)
            ->pluck('ec_reviews.product_id')
            ->all();
    }
}

if (!function_exists('get_trending_products')) {
    /**
     * @param array $params
     * @return mixed
     */
    function get_trending_products(array $params = [])
    {
        $params = array_merge([
            'condition' => [
                'ec_products.status'       => BaseStatusEnum::PUBLISHED,
                'ec_products.is_variation' => 0,
            ],
            'take'      => 10,
            'order_by'  => [
                'ec_products.views' => 'DESC',
            ],
            'select'    => ['ec_products.*'],
            'with'      => [],
        ], $params);

        return app(ProductInterface::class)->advancedGet($params);
    }
}

if (!function_exists('get_featured_product_categories')) {
    /**
     * Get featured product categories
     * @param array $args
     * @return mixed
     */
    function get_featured_product_categories($args = [])
    {
        $params = array_merge([
            'limit'     => 0,
            'order'     => [
                'ec_product_categories.order' => 'DESC',
            ],
            'select'    => ['*'],
            'with'      => ['slugable'],
            'withCount' => [],
        ], $args);

        return app(ProductCategoryInterface::class)->advancedGet([
            'condition' => [
                'ec_product_categories.is_featured' => 1,
                'ec_product_categories.status'      => BaseStatusEnum::PUBLISHED,
            ],
            'take'      => $params['limit'],
            'order_by'  => $params['order'],
            'select'    => $params['select'],
            'withCount' => Arr::get($params, 'withCount', []),
        ]);
    }
}

if (!function_exists('get_product_collections')) {
    /**
     * @return Collection
     */
    function get_product_collections(
        array $condition = ['status' => BaseStatusEnum::PUBLISHED],
        array $with = [],
        array $select = ['*']
    ) {
        return app(ProductCollectionInterface::class)->allBy($condition, $with, $select);
    }
}

if (!function_exists('get_products_by_collections')) {
    /**
     * @param array $param
     * @return Collection
     */
    function get_products_by_collections($param = [])
    {
        return app(ProductInterface::class)->getProductsByCollections($param);
    }
}

if (!function_exists('get_default_product_variation')) {
    /**
     * @param int $configurableId
     * @return Product
     */
    function get_default_product_variation($configurableId)
    {
        return app(ProductInterface::class)
            ->getProductVariations($configurableId, [
                'condition' => [
                    'ec_products.status'       => BaseStatusEnum::PUBLISHED,
                    'ec_products.is_variation' => 1,
                ],
                'take'      => 1,
                'order_by'  => [
                    'ec_product_variations.is_default' => 'DESC',
                ],
            ]);
    }
}

if (!function_exists('get_product_by_brand')) {
    /**
     * @param array $params
     * @return LengthAwarePaginator|\Illuminate\Database\Eloquent\Collection|Collection|mixed
     */
    function get_product_by_brand(array $params)
    {
        return app(ProductInterface::class)->getProductByBrands($params);
    }
}

if (!function_exists('the_product_price')) {
    /**
     * @param Product $product
     * @param array $htmlWrap
     * @return string
     */
    function the_product_price($product, $htmlWrap = [])
    {
        $htmlWrapParams = array_merge([
            'open_wrap_price'  => '<del>',
            'close_wrap_price' => '</del>',
            'open_wrap_sale'   => '<ins>',
            'close_wrap_sale'  => '</ins>',
        ], $htmlWrap);
        if ($product->front_sale_price !== $product->price) {
            return $htmlWrapParams['open_wrap_price'] . format_price($product->price) . $htmlWrapParams['close_wrap_price'] .
                $htmlWrapParams['open_wrap_sale'] . format_price($product->front_sale_price) . $htmlWrapParams['close_wrap_sale'];
        }
        return $htmlWrapParams['open_wrap_sale'] . $product->price . $htmlWrapParams['close_wrap_sale'];
    }
}

if (!function_exists('get_related_products')) {
    /**
     * Get related products of $product
     * @param Product $product
     * @param int $limit
     * @return array
     */
    function get_related_products($product, $limit = 4)
    {
        $params = [
            'condition' => [
                'ec_products.status'       => BaseStatusEnum::PUBLISHED,
                'ec_products.is_variation' => 0,
            ],
            'order_by'  => [
                'ec_products.order'      => 'ASC',
                'ec_products.created_at' => 'DESC',
            ],
            'take'      => $limit,
            'select'    => [
                'ec_products.*',
            ],
            'with'      => [
                'slugable',
                'variations',
                'productCollections',
                'variationAttributeSwatchesForProductList',
                'promotions',
                'latestFlashSales',
            ],
        ];

        $withCount = [];
        if (EcommerceHelper::isReviewEnabled()) {
            $withCount = [
                'reviews',
                'reviews as reviews_avg' => function ($query) {
                    $query->select(DB::raw('avg(star)'));
                },
            ];
        }

        $params['withCount'] = $withCount;

        $relatedIds = app(ProductInterface::class)->getRelatedProductIds($product);

        if (!empty($relatedIds)) {
            $params['condition'][] = ['ec_products.id', 'IN', $relatedIds];
        } else {
            $params['condition'][] = ['ec_products.id', '!=', $product->id];
        }

        return app(ProductInterface::class)->getProducts($params);
    }
}

if (!function_exists('get_cross_sale_products')) {
    /**
     * @param Product $product
     * @param array $with
     * @return \Illuminate\Database\Eloquent\Collection
     */
    function get_cross_sale_products($product, int $limit = 4, array $with = [])
    {
        $withCount = [];
        if (EcommerceHelper::isReviewEnabled()) {
            $withCount = [
                'reviews',
                'reviews as reviews_avg' => function ($query) {
                    $query->select(DB::raw('avg(star)'));
                },
            ];
        }

        $with = array_merge([
            'slugable',
            'variations',
            'productCollections',
            'variationAttributeSwatchesForProductList',
            'promotions',
            'latestFlashSales',
        ], $with);

        return $product->crossSales()->limit($limit)->with($with)->withCount($withCount)->get();
    }
}

if (!function_exists('get_up_sale_products')) {
    /**
     * @param Product $product
     * @param int $limit
     * @param array $with
     * @return \Illuminate\Database\Eloquent\Collection
     */
    function get_up_sale_products($product, int $limit = 4, array $with = [])
    {
        $withCount = [];
        if (EcommerceHelper::isReviewEnabled()) {
            $withCount = [
                'reviews',
                'reviews as reviews_avg' => function ($query) {
                    $query->select(DB::raw('avg(star)'));
                },
            ];
        }

        $with = array_merge([
            'slugable',
            'variations',
            'productCollections',
            'variationAttributeSwatchesForProductList',
            'promotions',
            'latestFlashSales',
        ], $with);

        return $product->upSales()->limit($limit)->with($with)->withCount($withCount)->get();
    }
}

if (!function_exists('get_cart_cross_sale_products')) {
    /**
     * @param Product $product
     * @param array $with
     * @return \Illuminate\Database\Eloquent\Collection
     */
    function get_cart_cross_sale_products(array $productIds, int $limit = 4, array $with = [])
    {
        $crossSaleIds = DB::table('ec_product_cross_sale_relations')
            ->whereIn('from_product_id', $productIds)
            ->pluck('to_product_id')
            ->all();

        $params = [
            'condition' => [
                'ec_products.status'       => BaseStatusEnum::PUBLISHED,
                'ec_products.is_variation' => 0,
                ['ec_products.id', 'IN', $crossSaleIds],
            ],
            'order_by'  => [
                'ec_products.order'      => 'ASC',
                'ec_products.created_at' => 'DESC',
            ],
            'take'      => $limit,
            'select'    => [
                'ec_products.*',
            ],
            'with'      => array_merge([
                'slugable',
                'variations',
                'productCollections',
                'variationAttributeSwatchesForProductList',
                'promotions',
                'latestFlashSales',
            ], $with),
        ];

        $withCount = [];
        if (EcommerceHelper::isReviewEnabled()) {
            $withCount = [
                'reviews',
                'reviews as reviews_avg' => function ($query) {
                    $query->select(DB::raw('avg(star)'));
                },
            ];
        }

        $params['withCount'] = $withCount;

        return app(ProductInterface::class)->getProducts($params);
    }
}

if (!function_exists('get_product_attributes_with_set')) {
    /**
     * Get list attributes by set id of product
     * @param Product $product
     * @param int $setId
     * @return array
     */
    function get_product_attributes_with_set($product, int $setId)
    {
        $productAttributes = app(ProductInterface::class)->getRelatedProductAttributes($product);
        $attributes = [];

        foreach ($productAttributes as $attribute) {
            if ($attribute->attribute_set_id === $setId) {
                array_push($attributes, $attribute);
            }
        }

        return $attributes;
    }
}

if (!function_exists('handle_next_attributes_in_product')) {
    /**
     * @return array
     */
    function handle_next_attributes_in_product(
        $productAttributes,
        $productVariationsInfo,
        $setId,
        $selectedAttributes,
        $key,
        $variationNextIds,
        $variationInfo = null,
        $unavailableAttributeIds = []
    ) {
        foreach ($productAttributes as $attribute) {
            if ($variationInfo != null && !$variationInfo->where('id', $attribute->id)->count()) {
                $unavailableAttributeIds[] = $attribute->id;
            }
            if (in_array($attribute->id, $selectedAttributes)) {
                $variationIds = $productVariationsInfo
                    ->where('attribute_set_id', $setId)
                    ->where('id', $attribute->id)
                    ->pluck('variation_id')
                    ->toArray();
                if ($key == 0) {
                    $variationNextIds = $variationIds;
                } else {
                    $variationNextIds = array_intersect($variationNextIds, $variationIds);
                }
            }
        }

        return [$variationNextIds, $unavailableAttributeIds];
    }
}
