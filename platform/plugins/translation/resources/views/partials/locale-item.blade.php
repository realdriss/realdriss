<tr data-locale="{{ $item['locale'] }}">
    <td class="text-left">
        <span>{{ $item['name'] }}</span>
    </td>
    <td class="text-center">{{ $item['locale'] }}</td>
    <td class="text-center">
        {!! language_flag($item['flag'], $item['name']) !!}
    </td>
    <td class="text-center">
        <span>
            @if ($item['locale'] != 'en')
                <a href="#" class="delete-locale-button text-danger" data-toggle="tooltip" data-url="{{ route('translations.locales.delete', $item['locale']) }}" role="button" data-original-title="{{ trans('plugins/translation::translation.delete') }}"><i class="icon icon-trash"></i></a>
                &nbsp;<a href="{{ route('translations.locales.download', $item['locale']) }}" class="download-locale-button" data-toggle="tooltip" role="button" data-original-title="{{ trans('plugins/translation::translation.download') }}"><i class="icon icon-download"></i></a>
            @else
                &mdash;
            @endif
        </span>
    </td>
</tr>
