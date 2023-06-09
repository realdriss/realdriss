<?php

namespace RealDriss\Ecommerce\Repositories\Caches;

use RealDriss\Ecommerce\Repositories\Interfaces\ProductCategoryInterface;
use RealDriss\Ecommerce\Repositories\Interfaces\ProductCollectionInterface;
use RealDriss\Ecommerce\Repositories\Interfaces\ProductInterface;
use RealDriss\Support\Repositories\Caches\CacheAbstractDecorator;

class ProductCacheDecorator extends CacheAbstractDecorator implements ProductInterface
{
    /**
     * {@inheritDoc}
     */
    public function getSearch($query, $paginate = 10)
    {
        return $this->getDataIfExistCache(__FUNCTION__, func_get_args());
    }

    /**
     * {@inheritDoc}
     */
    public function syncCategories($model, $categories = null)
    {
        $result = call_user_func_array([$this->repository, __FUNCTION__], func_get_args());

        if (is_array($result) && isset($result['error']) && !$result['error']) {
            $this->cache->flush();

            /**
             * @var ProductCategoryCacheDecorator $categoryRepository
             */
            $categoryRepository = app(ProductCategoryInterface::class);
            $categoryRepository->getCacheInstance()->flush();
        }
        return $result;
    }

    /**
     * {@inheritDoc}
     */
    public function getRelatedCategories($model)
    {
        return $this->getDataIfExistCache(__FUNCTION__, func_get_args());
    }

    /**
     * {@inheritDoc}
     */
    public function getRelatedCategoryIds($model)
    {
        return $this->getDataIfExistCache(__FUNCTION__, func_get_args());
    }

    /**
     * {@inheritDoc}
     */
    public function syncProductCollections($model, $productCollections = null)
    {
        $result = call_user_func_array([$this->repository, __FUNCTION__], func_get_args());

        if (is_array($result) && isset($result['error']) && !$result['error']) {
            $this->getCacheInstance()->flushCache();

            /**
             * @var ProductCollectionCacheDecorator $productCollectionRepository
             */
            $productCollectionRepository = app(ProductCollectionInterface::class);
            $productCollectionRepository->getCacheInstance()->flushCache();
        }
        return $result;
    }

    /**
     * {@inheritDoc}
     */
    public function getRelatedProductCollections($model)
    {
        return $this->getDataIfExistCache(__FUNCTION__, func_get_args());
    }

    /**
     * {@inheritDoc}
     */
    public function getRelatedProductCollectionIds($model)
    {
        return $this->getDataIfExistCache(__FUNCTION__, func_get_args());
    }

    /**
     * {@inheritDoc}
     */
    public function syncProducts($model, $products = null)
    {
        $result = call_user_func_array([$this->repository, __FUNCTION__], func_get_args());

        if (is_array($result) && isset($result['error']) && !$result['error']) {
            $this->getCacheInstance()->flushCache();

            /**
             * @var ProductCacheDecorator $productCollectionRepository
             */
            $productRepository = app(ProductInterface::class);
            $productRepository->getCacheInstance()->flushCache();
        }
        return $result;
    }

    /**
     * {@inheritDoc}
     */
    public function getRelatedProducts($model)
    {
        return $this->getDataIfExistCache(__FUNCTION__, func_get_args());
    }

    /**
     * {@inheritDoc}
     */
    public function getRelatedProductIds($model)
    {
        return $this->getDataIfExistCache(__FUNCTION__, func_get_args());
    }

    /**
     * {@inheritDoc}
     */
    public function syncCrossSaleProducts($model, $products = null)
    {
        $result = call_user_func_array([$this->repository, __FUNCTION__], func_get_args());

        if (is_array($result) && isset($result['error']) && !$result['error']) {
            $this->getCacheInstance()->flushCache();

            /**
             * @var ProductCacheDecorator $productCollectionRepository
             */
            $productRepository = app(ProductInterface::class);
            $productRepository->getCacheInstance()->flushCache();
        }
        return $result;
    }

    /**
     * {@inheritDoc}
     */
    public function syncUpSaleProducts($model, $products = null)
    {
        $result = call_user_func_array([$this->repository, __FUNCTION__], func_get_args());

        if (is_array($result) && isset($result['error']) && !$result['error']) {
            $this->getCacheInstance()->flushCache();

            /**
             * @var ProductCacheDecorator $productCollectionRepository
             */
            $productRepository = app(ProductInterface::class);
            $productRepository->getCacheInstance()->flushCache();
        }
        return $result;
    }

    /**
     * {@inheritDoc}
     */
    public function getRelatedProductAttributeSets($product)
    {
        return $this->getDataIfExistCache(__FUNCTION__, func_get_args());
    }

    /**
     * {@inheritDoc}
     */
    public function getRelatedProductAttributeSetIds($product)
    {
        return $this->getDataIfExistCache(__FUNCTION__, func_get_args());
    }

    /**
     * {@inheritDoc}
     */
    public function getRelatedProductAttributes($product)
    {
        return $this->getDataIfExistCache(__FUNCTION__, func_get_args());
    }

    /**
     * {@inheritDoc}
     */
    public function getRelatedProductAttributeIds($product)
    {
        return $this->getDataIfExistCache(__FUNCTION__, func_get_args());
    }

    /**
     * {@inheritDoc}
     */
    public function getProducts(array $params)
    {
        return $this->getDataIfExistCache(__FUNCTION__, func_get_args());
    }

    /**
     * {@inheritDoc}
     */
    public function getProductsWithCategory(array $params)
    {
        return $this->getDataIfExistCache(__FUNCTION__, func_get_args());
    }

    /**
     * {@inheritDoc}
     */
    public function getOnSaleProducts(array $params)
    {
        return $this->getDataIfExistCache(__FUNCTION__, func_get_args());
    }

    /**
     * {@inheritDoc}
     */
    public function getProductVariations($configurableProductId, array $params = [])
    {
        return $this->getDataIfExistCache(__FUNCTION__, func_get_args());
    }

    /**
     * {@inheritDoc}
     */
    public function getProductsByCollections(array $params)
    {
        return $this->getDataIfExistCache(__FUNCTION__, func_get_args());
    }

    /**
     * {@inheritDoc}
     */
    public function getProductByBrands(array $params)
    {
        return $this->getDataIfExistCache(__FUNCTION__, func_get_args());
    }

    /**
     * {@inheritDoc}
     */
    public function getProductByTags(array $params)
    {
        return $this->getDataIfExistCache(__FUNCTION__, func_get_args());
    }

    /**
     * {@inheritDoc}
     */
    public function filterProducts(array $filters, array $params = [])
    {
        return $this->getDataIfExistCache(__FUNCTION__, func_get_args());
    }

    /**
     * {@inheritDoc}
     */
    public function getProductsByCategories(array $params)
    {
        return $this->getDataIfExistCache(__FUNCTION__, func_get_args());
    }
}
