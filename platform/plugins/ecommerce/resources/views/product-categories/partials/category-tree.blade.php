<ul class="{{ $className ?: '' }}">
    @foreach ($categories->where('parent_id', $parent_id ?? 0) as $category)
        <li class="folder-root open">
            <a href="{{ $canEdit ? route('product-categories.edit', $category->id) : '' }}" class="fetch-data category-name">
                {!! Html::image(RvMedia::getImageUrl($category->image, 'thumb', false, RvMedia::getDefaultImage()), $category->name) !!}
                <span>{{ $category->name }}</span>
                @php
                    switch ($category->status->getValue()) {
                        case \Botble\Base\Enums\BaseStatusEnum::DRAFT:
                            $badge = 'bg-secondary';
                            break;
                        case \Botble\Base\Enums\BaseStatusEnum::PENDING:
                            $badge = 'bg-warning';
                            break;
                        default:
                            $badge = 'bg-success';
                            break;
                    }
                @endphp
                <span class="badge {{ $badge }} font-weight-bold" data-toggle="tooltip"
                    data-original-title="{{ trans('plugins/ecommerce::product-categories.total_products', ['total' => $category->products_count]) }}">
                    {{ $category->products_count }}
                </span>
            </a>
            <a href="{{ $category->url }}"
                target="_blank"
                class="text-info"
                data-toggle="tooltip"
                data-original-title="{{ trans('plugins/ecommerce::product-categories.view_new_tab') }}">
                <i class="fas fa-external-link-alt"></i>
            </a>
            @if ($canDelete)
                <a href="#"
                    class="btn btn-icon btn-danger deleteDialog"
                    data-section="{{ route('product-categories.destroy', $category->id) }}"
                    role="button"
                    data-toggle="tooltip"
                    data-original-title="{{ trans('core/table::table.delete') }}">
                    <i class="fa fa-trash"></i>
                </a>
            @endif
            @if ($categories->where('parent_id', $category->id)->count())
                <i class="far fa-minus-square file-opener-i"></i>
                @include('plugins/ecommerce::product-categories.partials.category-tree', ['parent_id' => $category->id, 'className' => ''])
            @endif
        </li>
    @endforeach
</ul>
