<ul {!! $options !!}>
    @foreach ($menu_nodes as $key => $row)
        <li @if ($row->css_class || $row->active) class="@if ($row->css_class) {{ $row->css_class }} @endif @if ($row->active) active @endif" @endif>
            <a class="@if ($row->has_child) dropdown-toggler @endif dropdown-item menu-link" href="{{ $row->has_child ? '#' : url($row->url) }}" @if ($row->target !== '_self') target="{{ $row->target }}" @endif @if ($row->has_child) data-toggle="dropdown" aria-expanded="true" @endif>
                @if ($row->icon_font) <i class="{{ trim($row->icon_font) }}"></i> @endif {{ $row->title }}
            </a>
            @if ($row->has_child)
                <div class="dropdown-menu">
                    {!! Menu::generateMenu([
                        'menu'       => $menu,
                        'menu_nodes' => $row->child,
                        'view'       => 'sub-menu',
                    ]) !!}
                </div>
            @endif
        </li>
    @endforeach
</ul>
