$(document).ready((function(){$(document).on("keyup","#store_order_prefix",(function(e){$(e.currentTarget).val()?$(".sample-order-code-prefix").text($(e.currentTarget).val()+"-"):$(".sample-order-code-prefix").text("")})),$(document).on("keyup","#store_order_suffix",(function(e){$(e.currentTarget).val()?$(".sample-order-code-suffix").text("-"+$(e.currentTarget).val()):$(".sample-order-code-suffix").text("")})),$(document).on("change",".check-all",(function(e){var r=$(e.currentTarget),t=r.attr("data-set"),c=r.prop("checked");$(t).each((function(e,r){c?$(r).prop("checked",!0):$(r).prop("checked",!1)}))}))}));