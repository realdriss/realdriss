@php
    $canEdit = Auth::user()->hasPermission('product-categories.edit');
    $canDelete = Auth::user()->hasPermission('product-categories.delete');
@endphp

@include('plugins/ecommerce::product-categories.partials.category-tree', ['className' => 'file-tree file-list'])
