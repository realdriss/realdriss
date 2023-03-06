<div class="form-group">
    <label class="control-label">{{ trans('plugins/blog::base.number_posts_per_page') }}</label>
    {!! Form::number('paginate', theme_option('number_of_posts_in_a_category', 12), ['class' => 'form-control', 'placeholder' => trans('plugins/blog::base.number_posts_per_page')]) !!}
</div>
