/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./platform/plugins/ecommerce/resources/assets/js/components/CreateOrderComponent.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./platform/plugins/ecommerce/resources/assets/js/components/CreateOrderComponent.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    products: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    product_ids: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    customer_id: {
      type: Number,
      "default": function _default() {
        return null;
      }
    },
    customer: {
      type: Object,
      "default": function _default() {
        return {
          email: 'guest@example.com'
        };
      }
    },
    customer_addresses: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    customer_address: {
      type: Object,
      "default": function _default() {
        return {
          name: null,
          email: null,
          address: null,
          phone: null,
          country: 'AF',
          state: null,
          city: null,
          zip_code: null
        };
      }
    },
    customer_order_numbers: {
      type: Number,
      "default": function _default() {
        return 0;
      }
    },
    sub_amount: {
      type: Number,
      "default": function _default() {
        return 0;
      }
    },
    total_amount: {
      type: Number,
      "default": function _default() {
        return 0;
      }
    },
    discount_amount: {
      type: Number,
      "default": function _default() {
        return 0;
      }
    },
    discount_description: {
      type: String,
      "default": function _default() {
        return null;
      }
    },
    shipping_amount: {
      type: Number,
      "default": function _default() {
        return 0;
      }
    },
    shipping_method: {
      type: String,
      "default": function _default() {
        return 'default';
      }
    },
    shipping_option: {
      type: String,
      "default": function _default() {
        return '';
      }
    },
    is_selected_shipping: {
      type: Boolean,
      "default": function _default() {
        return false;
      }
    },
    shipping_method_name: {
      type: String,
      "default": function _default() {
        return 'Default';
      }
    },
    payment_method: {
      type: String,
      "default": function _default() {
        return 'cod';
      }
    },
    currency: {
      type: String,
      "default": function _default() {
        return null;
      },
      required: true
    },
    zip_code_enabled: {
      type: Number,
      "default": function _default() {
        return 0;
      },
      required: true
    }
  },
  data: function data() {
    return {
      list_products: {
        data: []
      },
      hidden_product_search_panel: true,
      loading: false,
      note: null,
      customers: {
        data: []
      },
      hidden_customer_search_panel: true,
      customer_keyword: null,
      countries: [],
      shipping_type: 'custom',
      product: {
        name: null,
        price: 0,
        sku: null,
        with_storehouse_management: false,
        allow_checkout_when_out_of_stock: false,
        quantity: 0
      },
      shipping_methods: {
        'default': {
          name: 'Default',
          price: 0
        }
      },
      discount_type_unit: this.currency,
      discount_type: 'amount',
      coupon_code: null,
      child_discount_description: this.discount_description,
      has_invalid_coupon: false,
      has_applied_discount: this.discount_amount > 0,
      discount_custom_value: 0,
      child_customer: this.customer,
      child_customer_id: this.customer_id,
      child_customer_order_numbers: this.customer_order_numbers,
      child_customer_addresses: this.customer_addresses,
      child_customer_address: this.customer_address,
      child_products: this.products,
      child_product_ids: this.product_ids,
      child_sub_amount: this.sub_amount,
      child_total_amount: this.total_amount,
      child_discount_amount: this.discount_amount,
      child_shipping_amount: this.shipping_amount,
      child_shipping_method: this.shipping_method,
      child_shipping_option: this.shipping_option,
      child_shipping_method_name: this.shipping_method_name,
      child_is_selected_shipping: this.is_selected_shipping,
      child_payment_method: this.payment_method
    };
  },
  mounted: function mounted() {
    var context = this;
    $(document).on('click', 'body', function (e) {
      var container = $('.box-search-advance');
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        context.hidden_customer_search_panel = true;
        context.hidden_product_search_panel = true;
      }
    });
  },
  methods: {
    loadListCustomersForSearch: function loadListCustomersForSearch() {
      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var context = this;
      context.hidden_customer_search_panel = false;
      $('.textbox-advancesearch.customer').closest('.box-search-advance.customer').find('.panel').addClass('active');
      if (_.isEmpty(context.customers.data) || force) {
        context.loading = true;
        axios.get(route('customers.get-list-customers-for-search', {
          keyword: context.customer_keyword,
          page: page
        })).then(function (res) {
          context.customers = res.data.data;
          context.loading = false;
        })["catch"](function (res) {
          RealDriss.handleError(res.response.data);
        });
      }
    },
    handleSearchCustomer: function handleSearchCustomer(value) {
      if (value !== this.customer_keyword) {
        var context = this;
        this.customer_keyword = value;
        setTimeout(function () {
          context.loadListCustomersForSearch(1, true);
        }, 500);
      }
    },
    loadListProductsAndVariations: function loadListProductsAndVariations() {
      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var context = this;
      context.hidden_product_search_panel = false;
      $('.textbox-advancesearch.product').closest('.box-search-advance.product').find('.panel').addClass('active');
      if (_.isEmpty(context.list_products.data) || force) {
        context.loading = true;
        axios.get(route('products.get-all-products-and-variations', {
          keyword: context.product_keyword,
          page: page
        })).then(function (res) {
          context.list_products = res.data.data;
          context.loading = false;
        })["catch"](function (res) {
          RealDriss.handleError(res.response.data);
        });
      }
    },
    handleSearchProduct: function handleSearchProduct(value) {
      if (value !== this.product_keyword) {
        var context = this;
        this.product_keyword = value;
        setTimeout(function () {
          context.loadListProductsAndVariations(1, true);
        }, 500);
      }
    },
    selectProductVariant: function selectProductVariant(product) {
      var variation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      if (!_.isEmpty(variation) && variation.is_out_of_stock || _.isEmpty(variation) && product.is_out_of_stock) {
        RealDriss.showError('Cannot select out of stock product!');
        return false;
      }
      if (!_.isEmpty(variation)) {
        if (!_.includes(this.child_product_ids, variation.product_id)) {
          var productItem = variation;
          productItem.product_name = product.name;
          productItem.image_url = product.image_url;
          productItem.price = variation.price;
          productItem.product_link = route('products.edit', variation.product_id);
          productItem.select_qty = 1;
          this.child_products.push(productItem);
          this.child_product_ids.push(variation.product_id);
        }
      } else if (!_.includes(this.child_product_ids, product.id)) {
        var _productItem = product;
        _productItem.product_name = product.name;
        _productItem.image_url = product.image_url;
        _productItem.price = product.price;
        _productItem.product_link = route('products.edit', product.id);
        _productItem.select_qty = 1;
        this.child_products.push(_productItem);
        this.child_product_ids.push(product.id);
      }
      this.hidden_product_search_panel = true;
    },
    selectCustomer: function selectCustomer(customer) {
      this.child_customer = customer;
      this.child_customer_id = customer.id;
      this.loadCustomerAddress(this.child_customer_id);
      this.getOrderNumbers();
    },
    removeCustomer: function removeCustomer() {
      this.child_customer = this.customer;
      this.child_customer_id = null;
      this.child_customer_addresses = [];
      this.child_customer_address = {
        name: null,
        email: null,
        address: null,
        phone: null,
        country: 'AF',
        state: null,
        city: null,
        zip_code: null
      };
      this.child_customer_order_numbers = 0;
    },
    handleRemoveVariant: function handleRemoveVariant($event, variant) {
      $event.preventDefault();
      if (variant.product_id) {
        this.child_product_ids = _.reject(this.child_product_ids, function (item) {
          return item === variant.product_id;
        });
        this.child_products = _.reject(this.child_products, function (item) {
          return item.product_id === variant.product_id;
        });
      } else {
        this.child_product_ids = _.reject(this.child_product_ids, function (item) {
          return item === variant.id;
        });
        this.child_products = _.reject(this.child_products, function (item) {
          return item.id === variant.id;
        });
      }
    },
    loadCountries: function loadCountries() {
      var context = this;
      if (_.isEmpty(context.countries)) {
        axios.get(route('ajax.countries.list')).then(function (res) {
          context.countries = res.data.data;
        })["catch"](function (res) {
          RealDriss.handleError(res.response.data);
        });
      }
    },
    createOrder: function createOrder($event) {
      var paid = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      $event.preventDefault();
      $($event.target).find('.btn-primary').addClass('button-loading');
      var context = this;
      var products = [];
      _.each(this.child_products, function (item) {
        products.push({
          id: item.configurable_product_id ? item.product_id : item.id,
          quantity: item.select_qty
        });
      });
      axios.post(route('orders.create'), {
        products: products,
        payment_status: paid ? 'completed' : 'pending',
        payment_method: this.child_payment_method,
        shipping_method: this.child_shipping_method,
        shipping_option: this.child_shipping_option,
        shipping_amount: this.child_shipping_amount,
        discount_amount: this.child_discount_amount,
        discount_description: this.child_discount_description,
        coupon_code: this.coupon_code,
        customer_id: this.child_customer_id,
        note: this.note,
        amount: this.child_sub_amount,
        customer_address: this.child_customer_address
      }).then(function (res) {
        var data = res.data.data;
        if (res.data.error) {
          RealDriss.showError(res.data.message);
          $($event.target).find('.btn-primary').removeClass('button-loading');
        } else {
          RealDriss.showSuccess(res.data.message);
          if (paid) {
            context.$root.$emit('bv::hide::modal', 'make-paid');
          } else {
            context.$root.$emit('bv::hide::modal', 'make-pending');
          }
          setTimeout(function () {
            window.location.href = route('orders.edit', data.id);
          }, 1000);
        }
      })["catch"](function (res) {
        RealDriss.handleError(res.response.data);
        $($event.target).find('.btn-primary').removeClass('button-loading');
      });
    },
    createProduct: function createProduct($event) {
      $event.preventDefault();
      $($event.target).find('.btn-primary').addClass('button-loading');
      var context = this;
      axios.post(route('products.create-product-when-creating-order'), context.product).then(function (res) {
        if (res.data.error) {
          RealDriss.showError(res.data.message);
          $($event.target).find('.btn-primary').removeClass('button-loading');
        } else {
          context.product = res.data.data;
          context.list_products = {
            data: []
          };
          var productItem = context.product;
          productItem.product_name = context.product.name;
          productItem.image_url = context.product.image_url;
          productItem.price = context.product.price;
          productItem.product_link = route('products.edit', context.product.id);
          context.child_products.push(productItem);
          context.child_product_ids.push(context.product.id);
          context.hidden_product_search_panel = true;
          RealDriss.showSuccess(res.data.message);
          context.$root.$emit('bv::hide::modal', 'add-product-item');
        }
      })["catch"](function (res) {
        $($event.target).find('.btn-primary').removeClass('button-loading');
        RealDriss.handleError(res.response.data);
      });
    },
    updateCustomerEmail: function updateCustomerEmail($event) {
      $event.preventDefault();
      $($event.target).find('.btn-primary').addClass('button-loading');
      var context = this;
      axios.post(route('customers.update-email', context.child_customer.id), {
        email: context.child_customer.email
      }).then(function (res) {
        if (res.data.error) {
          RealDriss.showError(res.data.message);
          $($event.target).find('.btn-primary').removeClass('button-loading');
        } else {
          RealDriss.showSuccess(res.data.message);
          context.$root.$emit('bv::hide::modal', 'edit-email');
        }
        $($event.target).find('.btn-primary').removeClass('button-loading');
      })["catch"](function (res) {
        RealDriss.handleError(res.response.data);
        $($event.target).find('.btn-primary').removeClass('button-loading');
      });
    },
    updateOrderAddress: function updateOrderAddress($event) {
      $event.preventDefault();
      if (this.customer) {
        var $modal = $(event.target).closest('.modal-dialog');
        $($event.target).find('.btn-primary').addClass('button-loading');
        this.child_customer_address.name = $modal.find('.customer-address-name').val();
        this.child_customer_address.email = $modal.find('.customer-address-email').val();
        this.child_customer_address.phone = $modal.find('.customer-address-phone').val();
        this.child_customer_address.address = $modal.find('.customer-address-address').val();
        this.child_customer_address.city = $modal.find('.customer-address-city').val();
        this.child_customer_address.state = $modal.find('.customer-address-state').val();
        this.child_customer_address.country = $modal.find('.customer-address-country').val();
        this.child_customer_address.zip_code = $modal.find('.customer-address-zip-code').val();
        var context = this;
        setTimeout(function () {
          $($event.target).find('.btn-primary').removeClass('button-loading');
          context.$root.$emit('bv::hide::modal', 'edit-address');
        }, 500);
      }
    },
    createNewCustomer: function createNewCustomer($event) {
      $event.preventDefault();
      var context = this;
      $($event.target).find('.btn-primary').addClass('button-loading');
      axios.post(route('customers.create-customer-when-creating-order'), {
        customer_id: context.child_customer_id,
        name: context.child_customer_address.name,
        email: context.child_customer_address.email,
        phone: context.child_customer_address.phone,
        address: context.child_customer_address.address,
        country: context.child_customer_address.country,
        state: context.child_customer_address.state,
        city: context.child_customer_address.city,
        zip_code: context.child_customer_address.zip_code
      }).then(function (res) {
        if (res.data.error) {
          RealDriss.showError(res.data.message);
          $($event.target).find('.btn-primary').removeClass('button-loading');
        } else {
          context.child_customer_address = res.data.data.address;
          context.child_customer = res.data.data.customer;
          context.child_customer_id = context.child_customer.id;
          context.customers = {
            data: []
          };
          RealDriss.showSuccess(res.data.message);
          context.$root.$emit('bv::hide::modal', 'add-customer');
        }
        $($event.target).find('.btn-primary').removeClass('button-loading');
      })["catch"](function (res) {
        RealDriss.handleError(res.response.data);
        $($event.target).find('.btn-primary').removeClass('button-loading');
      });
    },
    selectCustomerAddress: function selectCustomerAddress(event) {
      var context = this;
      _.each(this.child_customer_addresses, function (item) {
        if (parseInt(item.id) === parseInt(event.target.value)) {
          context.child_customer_address = item;
        }
      });
    },
    getOrderNumbers: function getOrderNumbers() {
      var context = this;
      axios.get(route('customers.get-customer-order-numbers', context.child_customer_id)).then(function (res) {
        context.child_customer_order_numbers = res.data.data;
      })["catch"](function (res) {
        RealDriss.handleError(res.response.data);
      });
    },
    loadCustomerAddress: function loadCustomerAddress() {
      var context = this;
      axios.get(route('customers.get-customer-addresses', context.child_customer_id)).then(function (res) {
        context.child_customer_addresses = res.data.data;
        if (!_.isEmpty(context.child_customer_addresses)) {
          context.child_customer_address = _.first(context.child_customer_addresses);
        }
      })["catch"](function (res) {
        RealDriss.handleError(res.response.data);
      });
    },
    selectShippingMethod: function selectShippingMethod($event) {
      $event.preventDefault();
      var context = this;
      $($event.target).find('.btn-primary').addClass('button-loading');
      context.child_is_selected_shipping = true;
      if (context.shipping_type === 'free-shipping') {
        context.child_shipping_method_name = 'Free shipping';
        context.child_shipping_amount = 0;
      } else {
        var selected_shipping = $($event.target).find('.ui-select').val();
        if (!_.isEmpty(selected_shipping)) {
          selected_shipping = selected_shipping.split(';');
          context.child_shipping_method = selected_shipping[0].trim();
          context.child_shipping_option = selected_shipping[1].trim();
          context.child_shipping_amount = parseFloat(selected_shipping[2].trim());
          context.child_shipping_method_name = $($event.target).find('.ui-select option:selected').data('name');
        }
      }
      setTimeout(function () {
        $($event.target).find('.btn-primary').removeClass('button-loading');
        context.$root.$emit('bv::hide::modal', 'add-shipping');
      }, 500);
    },
    loadAvailableShippingMethods: function loadAvailableShippingMethods() {
      var context = this;
      axios.get(route('orders.get-available-shipping-methods', {
        address: context.child_customer_address.address,
        country: context.child_customer_address.country,
        state: context.child_customer_address.state,
        city: context.child_customer_address.city,
        zip_code: context.child_customer_address.zip_code,
        products: context.child_product_ids
      })).then(function (res) {
        context.shipping_methods = res.data.data;
      })["catch"](function (res) {
        RealDriss.handleError(res.response.data);
      });
    },
    changeDiscountType: function changeDiscountType(event) {
      if ($(event.target).val() === 'amount') {
        this.discount_type_unit = this.currency;
      } else {
        this.discount_type_unit = '%';
      }
      this.discount_type = $(event.target).val();
    },
    handleAddDiscount: function handleAddDiscount(event) {
      event.preventDefault();
      var context = this;
      context.has_applied_discount = true;
      context.has_invalid_coupon = false;
      var button = $(event.target).find('.btn-primary');
      button.addClass('button-loading').prop('disabled', true);
      if (!_.isEmpty(context.coupon_code)) {
        axios.post(route('orders.apply-coupon-when-creating-order'), {
          coupon_code: context.coupon_code,
          country: context.child_customer_address.country,
          shipping_amount: context.child_shipping_amount,
          product_ids: context.child_product_ids,
          customer_id: context.child_customer_id,
          sub_total: context.child_sub_amount
        }).then(function (res) {
          if (res.data.error) {
            RealDriss.showError(res.data.message);
            button.removeClass('button-loading');
            context.has_invalid_coupon = true;
          } else {
            context.child_discount_amount = res.data.data.discount_amount;
            if (res.data.data.is_free_shipping) {
              context.child_shipping_amount = 0;
            }
            RealDriss.showSuccess(res.data.message);
          }
          button.removeClass('button-loading');
          context.$root.$emit('bv::hide::modal', 'add-discounts');
        })["catch"](function (res) {
          RealDriss.handleError(res.response.data);
          button.removeClass('button-loading');
        });
      } else {
        if (this.discount_type === 'percentage') {
          context.child_discount_amount = context.child_total_amount * context.discount_custom_value / 100;
        } else {
          context.child_discount_amount = context.discount_custom_value;
        }
        setTimeout(function () {
          button.removeClass('button-loading').prop('disabled', false);
          context.$root.$emit('bv::hide::modal', 'add-discounts');
        }, 500);
      }
    },
    calculateAmount: function calculateAmount(products) {
      var context = this;
      context.child_sub_amount = 0;
      _.each(products, function (item) {
        context.child_sub_amount += parseFloat(item.price) * parseInt(item.select_qty);
      });
      context.child_total_amount = parseFloat(context.child_sub_amount) - parseFloat(context.child_discount_amount) + parseFloat(context.child_shipping_amount);
      if (context.child_total_amount < 0) {
        context.child_total_amount = 0;
      }
    },
    handleChangeQuantity: function handleChangeQuantity() {
      this.calculateAmount(this.child_products);
    },
    resetProductData: function resetProductData() {
      this.product = {
        name: null,
        price: 0,
        sku: null,
        with_storehouse_management: false,
        allow_checkout_when_out_of_stock: false,
        quantity: 0
      };
    }
  },
  watch: {
    'child_products': function child_products(value) {
      this.calculateAmount(value);
    },
    'child_discount_amount': function child_discount_amount(value) {
      var context = this;
      context.child_total_amount = parseFloat(context.child_sub_amount) - parseFloat(value) + parseFloat(context.child_shipping_amount);
    },
    'child_shipping_amount': function child_shipping_amount(value) {
      var context = this;
      context.child_total_amount = parseFloat(context.child_sub_amount) - parseFloat(context.child_discount_amount) + parseFloat(value);
    },
    'shipping_type': function shipping_type(value) {
      if (value === 'free-shipping') {
        this.child_shipping_amount = 0;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./platform/plugins/ecommerce/resources/assets/js/components/CreateOrderComponent.vue?vue&type=template&id=78266498&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./platform/plugins/ecommerce/resources/assets/js/components/CreateOrderComponent.vue?vue&type=template&id=78266498& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "flexbox-grid no-pd-none"
  }, [_c('div', {
    staticClass: "flexbox-content"
  }, [_c('div', {
    staticClass: "wrapper-content"
  }, [_c('div', {
    staticClass: "pd-all-20"
  }, [_c('label', {
    staticClass: "title-product-main text-no-bold"
  }, [_vm._v(_vm._s(_vm.__('Order information')))])]), _vm._v(" "), _c('div', {
    staticClass: "pd-all-10-20 border-top-title-main"
  }, [_c('div', {
    staticClass: "clearfix"
  }, [_vm.child_products.length ? _c('div', {
    staticClass: "table-wrapper p-none mb20 ps-relative z-index-4"
  }, [_c('table', {
    staticClass: "table-normal"
  }, [_c('tbody', _vm._l(_vm.child_products, function (variant) {
    return _c('tr', [_c('td', {
      staticClass: "width-60-px min-width-60-px"
    }, [_c('div', {
      staticClass: "wrap-img vertical-align-m-i"
    }, [_c('img', {
      staticClass: "thumb-image",
      attrs: {
        "src": variant.image_url,
        "alt": variant.product_name
      }
    })])]), _vm._v(" "), _c('td', {
      staticClass: "pl5 p-r5 min-width-200-px"
    }, [_c('a', {
      staticClass: "hover-underline pre-line",
      attrs: {
        "href": variant.product_link,
        "target": "_blank"
      }
    }, [_vm._v(_vm._s(variant.product_name))]), _vm._v(" "), variant.variation_items && variant.variation_items.length ? _c('p', {
      staticClass: "type-subdued"
    }, _vm._l(variant.variation_items, function (productItem, index) {
      return _c('span', [_vm._v("\n                                            " + _vm._s(productItem.attribute_title) + "\n                                            "), index !== variant.variation_items.length - 1 ? _c('span', [_vm._v("/")]) : _vm._e()]);
    }), 0) : _vm._e()]), _vm._v(" "), _c('td', {
      staticClass: "pl5 p-r5 width-100-px min-width-100-px text-center"
    }, [_c('div', {
      staticClass: "dropup dropdown-priceOrderNew"
    }, [_c('div', {
      staticClass: "inline_block dropdown"
    }, [_c('a', {
      staticClass: "wordwrap hide-print"
    }, [_vm._v(_vm._s(variant.price) + " " + _vm._s(_vm.currency))])])])]), _vm._v(" "), _c('td', {
      staticClass: "pl5 p-r5 width-20-px min-width-20-px text-center"
    }, [_vm._v(" x")]), _vm._v(" "), _c('td', {
      staticClass: "pl5 p-r5 width-100-px min-width-100-px"
    }, [_c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: variant.select_qty,
        expression: "variant.select_qty"
      }],
      staticClass: "next-input p-none-r",
      attrs: {
        "type": "number",
        "min": "1"
      },
      domProps: {
        "value": variant.select_qty
      },
      on: {
        "change": function change($event) {
          return _vm.handleChangeQuantity();
        },
        "input": function input($event) {
          if ($event.target.composing) return;
          _vm.$set(variant, "select_qty", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c('td', {
      staticClass: "pl5 p-r5 width-100-px min-width-100-px text-center"
    }, [_vm._v(_vm._s(variant.price) + "\n                                    " + _vm._s(_vm.currency) + "\n                                ")]), _vm._v(" "), _c('td', {
      staticClass: "pl5 p-r5 text-right width-20-px min-width-20-px"
    }, [_c('a', {
      attrs: {
        "href": "#"
      },
      on: {
        "click": function click($event) {
          return _vm.handleRemoveVariant($event, variant);
        }
      }
    }, [_c('svg', {
      staticClass: "svg-next-icon svg-next-icon-size-12"
    }, [_c('use', {
      attrs: {
        "xmlns:xlink": "http://www.w3.org/1999/xlink",
        "xlink:href": "#next-remove"
      }
    })])])])]);
  }), 0)])]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "box-search-advance product"
  }, [_c('div', [_c('input', {
    staticClass: "next-input textbox-advancesearch product",
    attrs: {
      "type": "text",
      "placeholder": "Search or create a new product"
    },
    on: {
      "click": function click($event) {
        return _vm.loadListProductsAndVariations();
      },
      "keyup": function keyup($event) {
        return _vm.handleSearchProduct($event.target.value);
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "panel panel-default",
    "class": {
      active: _vm.list_products,
      hidden: _vm.hidden_product_search_panel
    }
  }, [_c('div', {
    staticClass: "panel-body"
  }, [_c('div', {
    directives: [{
      name: "b-modal",
      rawName: "v-b-modal.add-product-item",
      modifiers: {
        "add-product-item": true
      }
    }],
    staticClass: "box-search-advance-head"
  }, [_c('img', {
    attrs: {
      "width": "30",
      "src": "//hstatic.net/0/0/global/design/imgs/next-create-custom-line-item.svg",
      "alt": "icon"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "ml10",
    attrs: {
      "data-bind": "text:CustomFieldName"
    }
  }, [_vm._v(_vm._s(_vm.__('Create a new product')))])]), _vm._v(" "), _c('div', {
    staticClass: "list-search-data"
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.loading,
      expression: "loading"
    }],
    staticClass: "has-loading"
  }, [_c('i', {
    staticClass: "fa fa-spinner fa-spin"
  })]), _vm._v(" "), _c('ul', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: !_vm.loading,
      expression: "!loading"
    }],
    staticClass: "clearfix"
  }, [_vm._l(_vm.list_products.data, function (product_item) {
    return _c('li', _vm._g({
      "class": {
        'item-selectable': !product_item.variations.length,
        'item-not-selectable': product_item.variations.length
      }
    }, !product_item.variations.length ? {
      click: function click() {
        return _vm.selectProductVariant(product_item);
      }
    } : {}), [_c('div', {
      staticClass: "wrap-img inline_block vertical-align-t float-left"
    }, [_c('img', {
      staticClass: "thumb-image",
      attrs: {
        "src": product_item.image_url,
        "title": product_item.name,
        "alt": product_item.name
      }
    })]), _vm._v(" "), _c('label', {
      staticClass: "inline_block ml10 mt10 ws-nm",
      staticStyle: {
        "width": "calc(100% - 50px)"
      }
    }, [_vm._v(_vm._s(product_item.name) + "\n                                                "), !product_item.variations.length ? _c('span', [product_item.is_out_of_stock ? _c('span', {
      staticClass: "text-danger"
    }, [_c('small', [_vm._v(" (" + _vm._s(_vm.__('Out of stock')) + ")")])]) : _vm._e(), _vm._v(" "), !product_item.is_out_of_stock && product_item.quantity > 0 ? _c('span', [_c('small', [_vm._v(" (" + _vm._s(product_item.quantity) + " " + _vm._s(_vm.__('product(s) available')) + ")")])]) : _vm._e()]) : _vm._e()]), _vm._v(" "), product_item.variations.length ? _c('div', [_c('div', {
      staticClass: "clear"
    }), _vm._v(" "), _c('ul', _vm._l(product_item.variations, function (variation) {
      return variation.variation_items.length ? _c('li', {
        staticClass: "clearfix product-variant",
        on: {
          "click": function click($event) {
            return _vm.selectProductVariant(product_item, variation);
          }
        }
      }, [_c('a', {
        staticClass: "color_green float-left"
      }, _vm._l(variation.variation_items, function (productItem, index) {
        return _c('span', [_vm._v("\n                                                                    " + _vm._s(productItem.attribute_title) + "\n                                                                    "), index !== variation.variation_items.length - 1 ? _c('span', [_vm._v("/")]) : _vm._e()]);
      }), 0), _vm._v(" "), variation.is_out_of_stock ? _c('span', {
        staticClass: "text-danger"
      }, [_c('small', [_vm._v(" (" + _vm._s(_vm.__('Out of stock')) + ")")])]) : _vm._e(), _vm._v(" "), !variation.is_out_of_stock && variation.quantity > 0 ? _c('span', [_c('small', [_vm._v(" (" + _vm._s(variation.quantity) + " " + _vm._s(_vm.__('product(s) available')) + ")")])]) : _vm._e()]) : _vm._e();
    }), 0)]) : _vm._e()]);
  }), _vm._v(" "), _vm.list_products.data.length === 0 ? _c('li', [_c('span', [_vm._v(_vm._s(_vm.__('No products found!')))])]) : _vm._e()], 2)])]), _vm._v(" "), _vm.list_products.next_page_url || _vm.list_products.prev_page_url ? _c('div', {
    staticClass: "panel-footer"
  }, [_c('div', {
    staticClass: "btn-group float-right"
  }, [_c('button', {
    "class": {
      'btn btn-secondary': _vm.list_products.current_page !== 1,
      'btn btn-secondary disable': _vm.list_products.current_page === 1
    },
    attrs: {
      "type": "button",
      "disabled": _vm.list_products.current_page === 1
    },
    on: {
      "click": function click($event) {
        _vm.loadListProductsAndVariations(_vm.list_products.prev_page_url ? _vm.list_products.current_page - 1 : _vm.list_products.current_page, true);
      }
    }
  }, [_c('svg', {
    staticClass: "svg-next-icon svg-next-icon-size-16 svg-next-icon-rotate-180",
    attrs: {
      "role": "img"
    }
  }, [_c('use', {
    attrs: {
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      "xlink:href": "#next-chevron"
    }
  })])]), _vm._v(" "), _c('button', {
    "class": {
      'btn btn-secondary': _vm.list_products.next_page_url,
      'btn btn-secondary disable': !_vm.list_products.next_page_url
    },
    attrs: {
      "type": "button",
      "disabled": !_vm.list_products.next_page_url
    },
    on: {
      "click": function click($event) {
        _vm.loadListProductsAndVariations(_vm.list_products.next_page_url ? _vm.list_products.current_page + 1 : _vm.list_products.current_page, true);
      }
    }
  }, [_c('svg', {
    staticClass: "svg-next-icon svg-next-icon-size-16",
    attrs: {
      "role": "img"
    }
  }, [_c('use', {
    attrs: {
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      "xlink:href": "#next-chevron"
    }
  })])])]), _vm._v(" "), _c('div', {
    staticClass: "clearfix"
  })]) : _vm._e()])])])]), _vm._v(" "), _c('div', {
    staticClass: "pd-all-10-20 p-none-t"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-sm-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "text-title-field",
    attrs: {
      "for": "txt-note"
    }
  }, [_vm._v(_vm._s(_vm.__('Note')))]), _vm._v(" "), _c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.note,
      expression: "note"
    }],
    staticClass: "ui-text-area textarea-auto-height",
    attrs: {
      "id": "txt-note",
      "rows": "2",
      "placeholder": "Note for order..."
    },
    domProps: {
      "value": _vm.note
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.note = $event.target.value;
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6"
  }, [_c('div', {
    staticClass: "table-wrap"
  }, [_c('table', {
    staticClass: "table-normal table-none-border table-color-gray-text text-right"
  }, [_c('tbody', [_c('tr', [_c('td', {
    staticClass: "color-subtext"
  }, [_vm._v(_vm._s(_vm.__('Amount')))]), _vm._v(" "), _c('td', {
    staticClass: "pl10"
  }, [_vm._v(_vm._s(_vm._f("formatPrice")(_vm.child_sub_amount)) + " " + _vm._s(_vm.currency))])]), _vm._v(" "), _c('tr', [_c('td', [_c('a', {
    directives: [{
      name: "b-modal",
      rawName: "v-b-modal.add-discounts",
      modifiers: {
        "add-discounts": true
      }
    }],
    staticClass: "hover-underline",
    attrs: {
      "href": "#"
    }
  }, [!_vm.has_applied_discount ? _c('span', [_c('i', {
    staticClass: "fa fa-plus-circle"
  }), _vm._v(" " + _vm._s(_vm.__('Add discount')))]) : _vm._e(), _vm._v(" "), _vm.has_applied_discount ? _c('span', [_vm._v(_vm._s(_vm.__('Discount')))]) : _vm._e()]), _vm._v(" "), _vm.child_discount_description && _vm.has_applied_discount ? _c('p', {
    staticClass: "mb0 font-size-12px"
  }, [_vm._v(_vm._s(_vm.child_discount_description))]) : _vm._e()]), _vm._v(" "), _c('td', {
    staticClass: "pl10"
  }, [_vm._v(_vm._s(_vm._f("formatPrice")(_vm.has_applied_discount ? _vm.child_discount_amount : 0)) + " " + _vm._s(_vm.currency))])]), _vm._v(" "), _c('tr', [_c('td', [_c('a', {
    directives: [{
      name: "b-modal",
      rawName: "v-b-modal.add-shipping",
      modifiers: {
        "add-shipping": true
      }
    }],
    staticClass: "hover-underline",
    attrs: {
      "href": "#"
    }
  }, [!_vm.child_is_selected_shipping ? _c('span', [_c('i', {
    staticClass: "fa fa-plus-circle"
  }), _vm._v(" " + _vm._s(_vm.__('Add shipping fee')))]) : _vm._e(), _vm._v(" "), _vm.child_is_selected_shipping ? _c('span', [_vm._v(_vm._s(_vm.__('Shipping')))]) : _vm._e()]), _vm._v(" "), _vm.child_shipping_method_name ? _c('p', {
    staticClass: "mb0 font-size-12px"
  }, [_vm._v(_vm._s(_vm.child_shipping_method_name))]) : _vm._e()]), _vm._v(" "), _c('td', {
    staticClass: "pl10"
  }, [_vm._v(_vm._s(_vm._f("formatPrice")(_vm.shipping_amount)) + " " + _vm._s(_vm.currency))])]), _vm._v(" "), _c('tr', {
    staticClass: "text-no-bold"
  }, [_c('td', [_vm._v(_vm._s(_vm.__('Total amount')))]), _vm._v(" "), _c('td', {
    staticClass: "pl10"
  }, [_vm._v(_vm._s(_vm._f("formatPrice")(_vm.child_total_amount)) + " " + _vm._s(_vm.currency))])])])])])])])]), _vm._v(" "), _c('div', {
    staticClass: "pd-all-10-20 border-top-color"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-12 col-sm-6 col-md-12 col-lg-6"
  }, [_c('div', {
    staticClass: "flexbox-grid-default mt5 mb5"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "flexbox-auto-content"
  }, [_c('div', {
    staticClass: "text-upper ws-nm"
  }, [_vm._v(_vm._s(_vm.__('Confirm payment and create order')))])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-12 col-sm-6 col-md-12 col-lg-6 text-right"
  }, [_c('button', {
    directives: [{
      name: "b-modal",
      rawName: "v-b-modal.make-paid",
      modifiers: {
        "make-paid": true
      }
    }],
    staticClass: "btn btn-primary",
    attrs: {
      "disabled": !_vm.child_product_ids.length
    }
  }, [_vm._v(_vm._s(_vm.__('Paid')) + "\n                        ")]), _vm._v(" "), _c('button', {
    directives: [{
      name: "b-modal",
      rawName: "v-b-modal.make-pending",
      modifiers: {
        "make-pending": true
      }
    }],
    staticClass: "btn btn-primary ml15",
    attrs: {
      "disabled": !_vm.child_product_ids.length || _vm.child_total_amount === 0
    }
  }, [_vm._v(_vm._s(_vm.__('Pay later')) + "\n                        ")])])])])])]), _vm._v(" "), _c('div', {
    staticClass: "flexbox-content flexbox-right"
  }, [_c('div', {
    staticClass: "wrapper-content mb20"
  }, [!_vm.child_customer_id || !_vm.child_customer ? _c('div', [_c('div', {
    staticClass: "next-card-section"
  }, [_c('div', {
    staticClass: "flexbox-grid-default mb15"
  }, [_c('div', {
    staticClass: "flexbox-auto-content"
  }, [_c('label', {
    staticClass: "title-product-main"
  }, [_vm._v(_vm._s(_vm.__('Customer information')))])])]), _vm._v(" "), _c('div', {
    staticClass: "findcustomer"
  }, [_c('div', {
    staticClass: "box-search-advance customer"
  }, [_c('div', [_c('input', {
    staticClass: "next-input textbox-advancesearch customer",
    attrs: {
      "type": "text",
      "placeholder": "Search or create a new customer"
    },
    on: {
      "click": function click($event) {
        return _vm.loadListCustomersForSearch();
      },
      "keyup": function keyup($event) {
        return _vm.handleSearchCustomer($event.target.value);
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "panel panel-default",
    "class": {
      active: _vm.customers,
      hidden: _vm.hidden_customer_search_panel
    }
  }, [_c('div', {
    staticClass: "panel-body"
  }, [_c('div', {
    directives: [{
      name: "b-modal",
      rawName: "v-b-modal.add-customer",
      modifiers: {
        "add-customer": true
      }
    }],
    staticClass: "box-search-advance-head"
  }, [_c('div', {
    staticClass: "flexbox-grid-default flexbox-align-items-center"
  }, [_vm._m(1), _vm._v(" "), _c('div', {
    staticClass: "flexbox-auto-content-right"
  }, [_c('span', [_vm._v(_vm._s(_vm.__('Create new customer')))])])])]), _vm._v(" "), _c('div', {
    staticClass: "list-search-data"
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.loading,
      expression: "loading"
    }],
    staticClass: "has-loading"
  }, [_c('i', {
    staticClass: "fa fa-spinner fa-spin"
  })]), _vm._v(" "), _c('ul', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: !_vm.loading,
      expression: "!loading"
    }],
    staticClass: "clearfix"
  }, [_vm._l(_vm.customers.data, function (customer) {
    return _c('li', {
      staticClass: "row",
      on: {
        "click": function click($event) {
          return _vm.selectCustomer(customer);
        }
      }
    }, [_c('div', {
      staticClass: "flexbox-grid-default flexbox-align-items-center"
    }, [_c('div', {
      staticClass: "flexbox-auto-40"
    }, [_c('div', {
      staticClass: "wrap-img inline_block vertical-align-t radius-cycle"
    }, [_c('img', {
      staticClass: "thumb-image radius-cycle",
      attrs: {
        "src": customer.avatar_url
      }
    })])]), _vm._v(" "), _c('div', {
      staticClass: "flexbox-auto-content-right"
    }, [_c('div', {
      staticClass: "overflow-ellipsis"
    }, [_vm._v(_vm._s(customer.name))]), _vm._v(" "), _c('div', {
      staticClass: "overflow-ellipsis"
    }, [_c('a', {
      attrs: {
        "href": 'mailto:' + customer.email
      }
    }, [_c('span', [_vm._v(_vm._s(customer.email ? customer.email : '-'))])])])])])]);
  }), _vm._v(" "), _vm.customers.data.length === 0 ? _c('li', [_c('span', [_vm._v(_vm._s(_vm.__('No customer found!')))])]) : _vm._e()], 2)])]), _vm._v(" "), _vm.customers.next_page_url || _vm.customers.prev_page_url ? _c('div', {
    staticClass: "panel-footer"
  }, [_c('div', {
    staticClass: "btn-group float-right"
  }, [_c('button', {
    "class": {
      'btn btn-secondary': _vm.customers.current_page !== 1,
      'btn btn-secondary disable': _vm.customers.current_page === 1
    },
    attrs: {
      "type": "button",
      "disabled": _vm.customers.current_page === 1
    },
    on: {
      "click": function click($event) {
        _vm.loadListCustomersForSearch(_vm.customers.prev_page_url ? _vm.customers.current_page - 1 : _vm.customers.current_page, true);
      }
    }
  }, [_c('svg', {
    staticClass: "svg-next-icon svg-next-icon-size-16 svg-next-icon-rotate-180",
    attrs: {
      "role": "img"
    }
  }, [_c('use', {
    attrs: {
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      "xlink:href": "#next-chevron"
    }
  })])]), _vm._v(" "), _c('button', {
    "class": {
      'btn btn-secondary': _vm.customers.next_page_url,
      'btn btn-secondary disable': !_vm.customers.next_page_url
    },
    attrs: {
      "type": "button",
      "disabled": !_vm.customers.next_page_url
    },
    on: {
      "click": function click($event) {
        _vm.loadListCustomersForSearch(_vm.customers.next_page_url ? _vm.customers.current_page + 1 : _vm.customers.current_page, true);
      }
    }
  }, [_c('svg', {
    staticClass: "svg-next-icon svg-next-icon-size-16",
    attrs: {
      "role": "img"
    }
  }, [_c('use', {
    attrs: {
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      "xlink:href": "#next-chevron"
    }
  })])])]), _vm._v(" "), _c('div', {
    staticClass: "clearfix"
  })]) : _vm._e()])])])])]) : _vm._e(), _vm._v(" "), _vm.child_customer_id && _vm.child_customer ? _c('div', [_c('div', {
    staticClass: "next-card-section p-none-b"
  }, [_c('div', {
    staticClass: "flexbox-grid-default"
  }, [_c('div', {
    staticClass: "flexbox-auto-content-left"
  }, [_c('label', {
    staticClass: "title-product-main"
  }, [_vm._v(_vm._s(_vm.__('Customer')))])]), _vm._v(" "), _c('div', {
    staticClass: "flexbox-auto-left"
  }, [_c('a', {
    attrs: {
      "href": "#",
      "data-toggle": "tooltip",
      "data-placement": "top",
      "title": "Xóa khách hàng"
    },
    on: {
      "click": function click($event) {
        return _vm.removeCustomer();
      }
    }
  }, [_c('svg', {
    staticClass: "svg-next-icon svg-next-icon-size-12"
  }, [_c('use', {
    attrs: {
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      "xlink:href": "#next-remove"
    }
  })])])])])]), _vm._v(" "), _c('div', {
    staticClass: "next-card-section border-none-t"
  }, [_c('ul', {
    staticClass: "ws-nm"
  }, [_c('li', [_vm.child_customer.avatar_url ? _c('img', {
    staticClass: "width-60-px radius-cycle",
    attrs: {
      "alt": "User Picture",
      "src": _vm.child_customer.avatar_url
    }
  }) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "pull-right color_darkblue mt20"
  }, [_c('i', {
    staticClass: "fas fa-inbox"
  }), _vm._v(" "), _c('span', [_vm._v("\n                                    " + _vm._s(_vm.child_customer_order_numbers) + "\n                                ")]), _vm._v("\n                                " + _vm._s(_vm.__('order(s)')) + "\n                            ")])]), _vm._v(" "), _c('li', {
    staticClass: "mt10"
  }, [_c('a', {
    staticClass: "hover-underline text-capitalize",
    attrs: {
      "href": "#"
    }
  }, [_vm._v(_vm._s(_vm.child_customer.name))])]), _vm._v(" "), _c('li', [_c('div', {
    staticClass: "flexbox-grid-default"
  }, [_c('div', {
    staticClass: "flexbox-auto-content-left overflow-ellipsis"
  }, [_c('a', {
    attrs: {
      "href": 'mailto:' + _vm.child_customer.email
    }
  }, [_c('span', [_vm._v(_vm._s(_vm.child_customer.email ? _vm.child_customer.email : '-'))])])]), _vm._v(" "), _c('div', {
    staticClass: "flexbox-auto-left"
  }, [_c('a', {
    directives: [{
      name: "b-modal",
      rawName: "v-b-modal.edit-email",
      modifiers: {
        "edit-email": true
      }
    }]
  }, [_c('span', {
    attrs: {
      "data-placement": "top",
      "data-toggle": "tooltip",
      "data-original-title": "Edit email"
    }
  }, [_c('svg', {
    staticClass: "svg-next-icon svg-next-icon-size-12"
  }, [_c('use', {
    attrs: {
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      "xlink:href": "#next-edit"
    }
  })])])])])])])])]), _vm._v(" "), _c('div', {
    staticClass: "next-card-section"
  }, [_c('ul', {
    staticClass: "ws-nm"
  }, [_c('li', {
    staticClass: "clearfix"
  }, [_c('div', {
    staticClass: "flexbox-grid-default"
  }, [_c('div', {
    staticClass: "flexbox-auto-content-left"
  }, [_c('label', {
    staticClass: "title-text-second"
  }, [_vm._v(_vm._s(_vm.__('Shipping Address')))])]), _vm._v(" "), _c('div', {
    staticClass: "flexbox-auto-left"
  }, [_c('a', {
    directives: [{
      name: "b-modal",
      rawName: "v-b-modal.edit-address",
      modifiers: {
        "edit-address": true
      }
    }]
  }, [_c('span', {
    attrs: {
      "data-placement": "top",
      "title": "Update address",
      "data-toggle": "tooltip"
    }
  }, [_c('svg', {
    staticClass: "svg-next-icon svg-next-icon-size-12"
  }, [_c('use', {
    attrs: {
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      "xlink:href": "#next-edit"
    }
  })])])])])])]), _vm._v(" "), _c('li', {
    staticClass: "text-infor-subdued mt15"
  }, [_vm.child_customer_addresses.length > 1 ? _c('div', [_c('div', {
    staticClass: "ui-select-wrapper"
  }, [_c('select', {
    staticClass: "ui-select",
    on: {
      "change": function change($event) {
        return _vm.selectCustomerAddress($event);
      }
    }
  }, _vm._l(_vm.child_customer_addresses, function (address_item) {
    return _c('option', {
      domProps: {
        "value": address_item.id,
        "selected": parseInt(address_item.id) === parseInt(_vm.customer_address.email)
      }
    }, [_vm._v("\n                                            " + _vm._s(address_item.address + ', ' + address_item.city + ', ' + address_item.state + ', ' + address_item.country + (_vm.zip_code_enabled ? ', ' + address_item.zip_code : '')) + "\n                                        ")]);
  }), 0), _vm._v(" "), _c('svg', {
    staticClass: "svg-next-icon svg-next-icon-size-16"
  }, [_c('use', {
    attrs: {
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      "xlink:href": "#select-chevron"
    }
  })])]), _vm._v(" "), _c('br')]) : _vm._e(), _vm._v(" "), _c('div', [_vm._v(_vm._s(_vm.child_customer_address.name))]), _vm._v(" "), _c('div', [_vm._v(_vm._s(_vm.child_customer_address.phone))]), _vm._v(" "), _c('div', [_c('a', {
    attrs: {
      "href": 'mailto:' + _vm.child_customer_address.email
    }
  }, [_vm._v(_vm._s(_vm.child_customer_address.email))])]), _vm._v(" "), _c('div', [_vm._v(_vm._s(_vm.child_customer_address.address))]), _vm._v(" "), _c('div', [_vm._v(_vm._s(_vm.child_customer_address.city))]), _vm._v(" "), _c('div', [_vm._v(_vm._s(_vm.child_customer_address.state))]), _vm._v(" "), _c('div', [_vm._v(_vm._s(_vm.child_customer_address.country))]), _vm._v(" "), _vm.zip_code_enabled ? _c('div', [_vm._v(_vm._s(_vm.child_customer_address.zip_code))]) : _vm._e(), _vm._v(" "), _c('div', [_c('a', {
    staticClass: "hover-underline",
    attrs: {
      "target": "_blank",
      "href": 'https://maps.google.com/?q=' + _vm.child_customer_address.address + ', ' + _vm.child_customer_address.city + ', ' + _vm.child_customer_address.state + ', ' + _vm.child_customer_address.country + (_vm.zip_code_enabled ? ', ' + _vm.child_customer_address.zip_code : '')
    }
  }, [_vm._v(_vm._s(_vm.__('See on maps')))])])])])])]) : _vm._e()])]), _vm._v(" "), _c('b-modal', {
    attrs: {
      "id": "add-product-item",
      "title": "Add product",
      "ok-title": "Save",
      "cancel-title": "Cancel"
    },
    on: {
      "shown": function shown($event) {
        return _vm.resetProductData();
      },
      "ok": function ok($event) {
        return _vm.createProduct($event);
      }
    }
  }, [_c('div', {
    staticClass: "form-group mb15"
  }, [_c('label', {
    staticClass: "text-title-field"
  }, [_vm._v(_vm._s(_vm.__('Name')))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.product.name,
      expression: "product.name"
    }],
    staticClass: "next-input",
    attrs: {
      "type": "text"
    },
    domProps: {
      "value": _vm.product.name
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.product, "name", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-group mb15 row"
  }, [_c('div', {
    staticClass: "col-6"
  }, [_c('label', {
    staticClass: "text-title-field"
  }, [_vm._v(_vm._s(_vm.__('Price')))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.product.price,
      expression: "product.price"
    }],
    staticClass: "next-input",
    attrs: {
      "type": "text"
    },
    domProps: {
      "value": _vm.product.price
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.product, "price", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "col-6"
  }, [_c('label', {
    staticClass: "text-title-field"
  }, [_vm._v(_vm._s(_vm.__('SKU (optional)')))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.product.sku,
      expression: "product.sku"
    }],
    staticClass: "next-input",
    attrs: {
      "type": "text"
    },
    domProps: {
      "value": _vm.product.sku
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.product, "sku", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "next-label"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.product.with_storehouse_management,
      expression: "product.with_storehouse_management"
    }],
    staticClass: "hrv-checkbox",
    attrs: {
      "type": "checkbox",
      "value": "1"
    },
    domProps: {
      "checked": Array.isArray(_vm.product.with_storehouse_management) ? _vm._i(_vm.product.with_storehouse_management, "1") > -1 : _vm.product.with_storehouse_management
    },
    on: {
      "change": function change($event) {
        var $$a = _vm.product.with_storehouse_management,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = "1",
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.product, "with_storehouse_management", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.product, "with_storehouse_management", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.product, "with_storehouse_management", $$c);
        }
      }
    }
  }), _vm._v("\n                " + _vm._s(_vm.__('With storehouse management?')) + "\n                ")])]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.product.with_storehouse_management,
      expression: "product.with_storehouse_management"
    }],
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-8"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "text-title-field"
  }, [_vm._v(_vm._s(_vm.__('Quantity')))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.product.quantity,
      expression: "product.quantity"
    }],
    staticClass: "next-input",
    attrs: {
      "type": "number",
      "min": "1"
    },
    domProps: {
      "value": _vm.product.quantity
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.product, "quantity", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "next-label"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.product.allow_checkout_when_out_of_stock,
      expression: "product.allow_checkout_when_out_of_stock"
    }],
    staticClass: "hrv-checkbox",
    attrs: {
      "type": "checkbox",
      "value": "1"
    },
    domProps: {
      "checked": Array.isArray(_vm.product.allow_checkout_when_out_of_stock) ? _vm._i(_vm.product.allow_checkout_when_out_of_stock, "1") > -1 : _vm.product.allow_checkout_when_out_of_stock
    },
    on: {
      "change": function change($event) {
        var $$a = _vm.product.allow_checkout_when_out_of_stock,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = "1",
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.product, "allow_checkout_when_out_of_stock", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.product, "allow_checkout_when_out_of_stock", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.product, "allow_checkout_when_out_of_stock", $$c);
        }
      }
    }
  }), _vm._v("\n                        " + _vm._s(_vm.__('Allow customer checkout when this product out of stock?')))])])])])]), _vm._v(" "), _c('b-modal', {
    attrs: {
      "id": "add-customer",
      "title": "Create a new customer",
      "ok-title": "Save",
      "cancel-title": "Cancel"
    },
    on: {
      "shown": function shown($event) {
        return _vm.loadCountries();
      },
      "ok": function ok($event) {
        return _vm.createNewCustomer($event);
      }
    }
  }, [_c('div', {
    staticClass: "next-form-section"
  }, [_c('div', {
    staticClass: "next-form-grid"
  }, [_c('div', {
    staticClass: "next-form-grid-cell"
  }, [_c('label', {
    staticClass: "text-title-field"
  }, [_vm._v(_vm._s(_vm.__('Name')))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.child_customer_address.name,
      expression: "child_customer_address.name"
    }],
    staticClass: "next-input",
    attrs: {
      "type": "text"
    },
    domProps: {
      "value": _vm.child_customer_address.name
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.child_customer_address, "name", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "next-form-grid-cell"
  }, [_c('label', {
    staticClass: "text-title-field"
  }, [_vm._v(_vm._s(_vm.__('Phone')))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.child_customer_address.phone,
      expression: "child_customer_address.phone"
    }],
    staticClass: "next-input",
    attrs: {
      "type": "text"
    },
    domProps: {
      "value": _vm.child_customer_address.phone
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.child_customer_address, "phone", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "next-form-grid"
  }, [_c('div', {
    staticClass: "next-form-grid-cell"
  }, [_c('label', {
    staticClass: "text-title-field"
  }, [_vm._v(_vm._s(_vm.__('Address')))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.child_customer_address.address,
      expression: "child_customer_address.address"
    }],
    staticClass: "next-input",
    attrs: {
      "type": "text"
    },
    domProps: {
      "value": _vm.child_customer_address.address
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.child_customer_address, "address", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "next-form-grid-cell"
  }, [_c('label', {
    staticClass: "text-title-field"
  }, [_vm._v(_vm._s(_vm.__('Email')))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.child_customer_address.email,
      expression: "child_customer_address.email"
    }],
    staticClass: "next-input",
    attrs: {
      "type": "text"
    },
    domProps: {
      "value": _vm.child_customer_address.email
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.child_customer_address, "email", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "next-form-grid"
  }, [_c('div', {
    staticClass: "next-form-grid-cell"
  }, [_c('label', {
    staticClass: "text-title-field"
  }, [_vm._v(_vm._s(_vm.__('Country')))]), _vm._v(" "), _c('div', {
    staticClass: "ui-select-wrapper"
  }, [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.child_customer_address.country,
      expression: "child_customer_address.country"
    }],
    staticClass: "ui-select",
    on: {
      "change": function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.child_customer_address, "country", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, _vm._l(_vm.countries, function (countryName, countryCode) {
    return _c('option', {
      domProps: {
        "value": countryCode
      }
    }, [_vm._v("\n                                " + _vm._s(countryName) + "\n                            ")]);
  }), 0), _vm._v(" "), _c('svg', {
    staticClass: "svg-next-icon svg-next-icon-size-16"
  }, [_c('use', {
    attrs: {
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      "xlink:href": "#select-chevron"
    }
  })])])])]), _vm._v(" "), _c('div', {
    staticClass: "next-form-grid"
  }, [_c('div', {
    staticClass: "next-form-grid-cell"
  }, [_c('label', {
    staticClass: "text-title-field"
  }, [_vm._v(_vm._s(_vm.__('State')))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.child_customer_address.state,
      expression: "child_customer_address.state"
    }],
    staticClass: "next-input",
    attrs: {
      "type": "text"
    },
    domProps: {
      "value": _vm.child_customer_address.state
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.child_customer_address, "state", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "next-form-grid-cell"
  }, [_c('label', {
    staticClass: "text-title-field"
  }, [_vm._v(_vm._s(_vm.__('City')))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.child_customer_address.city,
      expression: "child_customer_address.city"
    }],
    staticClass: "next-input",
    attrs: {
      "type": "text"
    },
    domProps: {
      "value": _vm.child_customer_address.city
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.child_customer_address, "city", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _vm.zip_code_enabled ? _c('div', {
    staticClass: "next-form-grid"
  }, [_c('div', {
    staticClass: "next-form-grid-cell"
  }, [_c('label', {
    staticClass: "text-title-field"
  }, [_vm._v(_vm._s(_vm.__('Zip code')))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.child_customer_address.zip_code,
      expression: "child_customer_address.zip_code"
    }],
    staticClass: "next-input",
    attrs: {
      "type": "text"
    },
    domProps: {
      "value": _vm.child_customer_address.zip_code
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.child_customer_address, "zip_code", $event.target.value);
      }
    }
  })])]) : _vm._e()])]), _vm._v(" "), _c('b-modal', {
    attrs: {
      "id": "add-discounts",
      "title": "Add discount",
      "ok-title": "Add discount",
      "cancel-title": "Close"
    },
    on: {
      "ok": function ok($event) {
        return _vm.handleAddDiscount($event);
      }
    }
  }, [_c('div', {
    staticClass: "next-form-section"
  }, [_c('div', {
    staticClass: "next-form-grid"
  }, [_c('div', {
    staticClass: "next-form-grid-cell"
  }, [_c('label', {
    staticClass: "text-title-field"
  }, [_vm._v(_vm._s(_vm.__('Discount based on')))]), _vm._v(" "), _c('div', {
    staticClass: "flexbox-grid-default"
  }, [_c('div', {
    staticClass: "flexbox-auto-left"
  }, [_c('div', {
    staticClass: "flexbox-input-group"
  }, [_c('button', {
    staticClass: "item-group btn btn-secondary btn-active",
    "class": {
      active: _vm.discount_type === 'amount'
    },
    attrs: {
      "value": "amount"
    },
    on: {
      "click": function click($event) {
        return _vm.changeDiscountType($event);
      }
    }
  }, [_vm._v("\n                                    " + _vm._s(_vm.currency ? _vm.currency : '$') + "\n                                ")]), _vm._v(" \n                                "), _c('button', {
    staticClass: "item-group border-radius-right-none btn btn-secondary btn-active",
    "class": {
      active: _vm.discount_type === 'percentage'
    },
    attrs: {
      "value": "percentage"
    },
    on: {
      "click": function click($event) {
        return _vm.changeDiscountType($event);
      }
    }
  }, [_vm._v("\n                                    %\n                                ")]), _vm._v(" \n                            ")])]), _vm._v(" "), _c('div', {
    staticClass: "flexbox-auto-content"
  }, [_c('div', {
    staticClass: "next-input--stylized border-radius-left-none"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.discount_custom_value,
      expression: "discount_custom_value"
    }],
    staticClass: "next-input next-input--invisible",
    domProps: {
      "value": _vm.discount_custom_value
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.discount_custom_value = $event.target.value;
      }
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "next-input-add-on next-input__add-on--after"
  }, [_vm._v(_vm._s(_vm.discount_type_unit))])])])])])]), _vm._v(" "), _c('div', {
    staticClass: "next-form-grid"
  }, [_c('div', {
    staticClass: "next-form-grid-cell"
  }, [_c('label', {
    staticClass: "text-title-field"
  }, [_vm._v(_vm._s(_vm.__('Or coupon code')))]), _vm._v(" "), _c('div', {
    staticClass: "next-input--stylized",
    "class": {
      'field-has-error': _vm.has_invalid_coupon
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.coupon_code,
      expression: "coupon_code"
    }],
    staticClass: "next-input next-input--invisible",
    domProps: {
      "value": _vm.coupon_code
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.coupon_code = $event.target.value;
      }
    }
  })])])]), _vm._v(" "), _c('div', {
    staticClass: "next-form-grid"
  }, [_c('div', {
    staticClass: "next-form-grid-cell"
  }, [_c('label', {
    staticClass: "text-title-field"
  }, [_vm._v(_vm._s(_vm.__('Description')))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.child_discount_description,
      expression: "child_discount_description"
    }],
    staticClass: "next-input",
    attrs: {
      "placeholder": "Discount description"
    },
    domProps: {
      "value": _vm.child_discount_description
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.child_discount_description = $event.target.value;
      }
    }
  })])])])]), _vm._v(" "), _c('b-modal', {
    attrs: {
      "id": "add-shipping",
      "title": "Shipping fee",
      "ok-title": "Update",
      "cancel-title": "Close"
    },
    on: {
      "shown": function shown($event) {
        return _vm.loadAvailableShippingMethods();
      },
      "ok": function ok($event) {
        return _vm.selectShippingMethod($event);
      }
    }
  }, [_c('div', {
    staticClass: "next-form-section"
  }, [!_vm.child_customer_id ? _c('div', {
    staticClass: "ui-layout__item mb15 p-none-important"
  }, [_c('div', {
    staticClass: "ui-banner ui-banner--status-info"
  }, [_c('div', {
    staticClass: "ui-banner__ribbon"
  }, [_c('svg', {
    staticClass: "svg-next-icon svg-next-icon-size-20"
  }, [_c('use', {
    attrs: {
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      "xlink:href": "#alert-circle"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "ui-banner__content"
  }, [_c('h2', {
    staticClass: "ui-banner__title"
  }, [_vm._v(_vm._s(_vm.__('How to select configured shipping?')))]), _vm._v(" "), _c('div', {
    staticClass: "ws-nm"
  }, [_vm._v(_vm._s(_vm.__('Please add customer information with the complete shipping address to see the configured shipping rates')) + ".\n                        ")])])])]) : _vm._e(), _vm._v(" "), _c('div', {
    attrs: {
      "data-bind": "foreach:ShippingList"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "next-form-grid"
  }, [_c('div', {
    staticClass: "next-form-grid-cell"
  }, [_c('label', {
    staticClass: "next-label"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.shipping_type,
      expression: "shipping_type"
    }],
    staticClass: "hrv-radio",
    attrs: {
      "type": "radio",
      "value": "free-shipping",
      "name": "shipping_type"
    },
    domProps: {
      "checked": _vm._q(_vm.shipping_type, "free-shipping")
    },
    on: {
      "change": function change($event) {
        _vm.shipping_type = "free-shipping";
      }
    }
  }), _vm._v("\n                        " + _vm._s(_vm.__('Free shipping')))])])]), _vm._v(" "), _c('div', {
    staticClass: "next-form-grid"
  }, [_c('div', {
    staticClass: "next-form-grid-cell"
  }, [_c('label', {
    staticClass: "next-label"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.shipping_type,
      expression: "shipping_type"
    }],
    staticClass: "hrv-radio",
    attrs: {
      "type": "radio",
      "value": "custom",
      "name": "shipping_type",
      "checked": "checked"
    },
    domProps: {
      "checked": _vm._q(_vm.shipping_type, "custom")
    },
    on: {
      "change": function change($event) {
        _vm.shipping_type = "custom";
      }
    }
  }), _vm._v("\n                        " + _vm._s(_vm.__('Custom')))])])]), _vm._v(" "), _c('div', {
    staticClass: "next-form-grid"
  }, [_c('div', {
    staticClass: "next-form-grid-cell"
  }, [_c('div', {
    staticClass: "ui-select-wrapper"
  }, [_c('select', {
    staticClass: "ui-select"
  }, _vm._l(_vm.shipping_methods, function (shipping_method, shipping_method_key) {
    return _c('option', {
      attrs: {
        "data-name": shipping_method.name
      },
      domProps: {
        "value": shipping_method_key,
        "selected": shipping_method_key === shipping_method + ';' + _vm.shipping_option + ';' + _vm.shipping_amount
      }
    }, [_vm._v("\n                                " + _vm._s(shipping_method.name + ' - ' + shipping_method.price) + "\n                            ")]);
  }), 0), _vm._v(" "), _c('svg', {
    staticClass: "svg-next-icon svg-next-icon-size-16"
  }, [_c('use', {
    attrs: {
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      "xlink:href": "#select-chevron"
    }
  })])])])])])]), _vm._v(" "), _c('b-modal', {
    attrs: {
      "id": "edit-email",
      "title": "Update email",
      "ok-title": "Update",
      "cancel-title": "Close"
    },
    on: {
      "ok": function ok($event) {
        return _vm.updateCustomerEmail($event);
      }
    }
  }, [_c('div', {
    staticClass: "next-form-section"
  }, [_c('div', {
    staticClass: "next-form-grid"
  }, [_c('div', {
    staticClass: "next-form-grid-cell"
  }, [_c('label', {
    staticClass: "text-title-field"
  }, [_vm._v(_vm._s(_vm.__('Email')))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.customer.email,
      expression: "customer.email"
    }],
    staticClass: "next-input",
    domProps: {
      "value": _vm.customer.email
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.customer, "email", $event.target.value);
      }
    }
  })])])])]), _vm._v(" "), _c('b-modal', {
    attrs: {
      "id": "edit-address",
      "title": "Update address",
      "ok-title": "Save",
      "cancel-title": "Cancel"
    },
    on: {
      "shown": function shown($event) {
        return _vm.loadCountries();
      },
      "ok": function ok($event) {
        return _vm.updateOrderAddress($event);
      }
    }
  }, [_c('div', {
    staticClass: "next-form-section"
  }, [_c('div', {
    staticClass: "next-form-grid"
  }, [_c('div', {
    staticClass: "next-form-grid-cell"
  }, [_c('label', {
    staticClass: "text-title-field"
  }, [_vm._v(_vm._s(_vm.__('Name')))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.child_customer_address.name,
      expression: "child_customer_address.name"
    }],
    staticClass: "next-input customer-address-name",
    attrs: {
      "type": "text"
    },
    domProps: {
      "value": _vm.child_customer_address.name
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.child_customer_address, "name", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "next-form-grid-cell"
  }, [_c('label', {
    staticClass: "text-title-field"
  }, [_vm._v(_vm._s(_vm.__('Phone')))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.child_customer_address.phone,
      expression: "child_customer_address.phone"
    }],
    staticClass: "next-input customer-address-phone",
    attrs: {
      "type": "text"
    },
    domProps: {
      "value": _vm.child_customer_address.phone
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.child_customer_address, "phone", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "next-form-grid"
  }, [_c('div', {
    staticClass: "next-form-grid-cell"
  }, [_c('label', {
    staticClass: "text-title-field"
  }, [_vm._v(_vm._s(_vm.__('Address')))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.child_customer_address.address,
      expression: "child_customer_address.address"
    }],
    staticClass: "next-input customer-address-address",
    attrs: {
      "type": "text"
    },
    domProps: {
      "value": _vm.child_customer_address.address
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.child_customer_address, "address", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "next-form-grid-cell"
  }, [_c('label', {
    staticClass: "text-title-field"
  }, [_vm._v(_vm._s(_vm.__('Email')))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.child_customer_address.email,
      expression: "child_customer_address.email"
    }],
    staticClass: "next-input customer-address-email",
    attrs: {
      "type": "text"
    },
    domProps: {
      "value": _vm.child_customer_address.email
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.child_customer_address, "email", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "next-form-grid"
  }, [_c('div', {
    staticClass: "next-form-grid-cell"
  }, [_c('label', {
    staticClass: "text-title-field"
  }, [_vm._v(_vm._s(_vm.__('Country')))]), _vm._v(" "), _c('div', {
    staticClass: "ui-select-wrapper"
  }, [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.child_customer_address.country,
      expression: "child_customer_address.country"
    }],
    staticClass: "ui-select customer-address-country",
    on: {
      "change": function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.child_customer_address, "country", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, _vm._l(_vm.countries, function (countryName, countryCode) {
    return _c('option', {
      domProps: {
        "value": countryCode
      }
    }, [_vm._v("\n                                " + _vm._s(countryName) + "\n                            ")]);
  }), 0), _vm._v(" "), _c('svg', {
    staticClass: "svg-next-icon svg-next-icon-size-16"
  }, [_c('use', {
    attrs: {
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      "xlink:href": "#select-chevron"
    }
  })])])])]), _vm._v(" "), _c('div', {
    staticClass: "next-form-grid"
  }, [_c('div', {
    staticClass: "next-form-grid-cell"
  }, [_c('label', {
    staticClass: "text-title-field"
  }, [_vm._v(_vm._s(_vm.__('State')))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.child_customer_address.state,
      expression: "child_customer_address.state"
    }],
    staticClass: "next-input customer-address-state",
    attrs: {
      "type": "text"
    },
    domProps: {
      "value": _vm.child_customer_address.state
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.child_customer_address, "state", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "next-form-grid-cell"
  }, [_c('label', {
    staticClass: "text-title-field"
  }, [_vm._v(_vm._s(_vm.__('City/District')))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.child_customer_address.city,
      expression: "child_customer_address.city"
    }],
    staticClass: "next-input customer-address-city",
    attrs: {
      "type": "text"
    },
    domProps: {
      "value": _vm.child_customer_address.city
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.child_customer_address, "city", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _vm.zip_code_enabled ? _c('div', {
    staticClass: "next-form-grid"
  }, [_c('div', {
    staticClass: "next-form-grid-cell"
  }, [_c('label', {
    staticClass: "text-title-field"
  }, [_vm._v(_vm._s(_vm.__('Zip code')))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.child_customer_address.zip_code,
      expression: "child_customer_address.zip_code"
    }],
    staticClass: "next-input customer-address-zip-code",
    attrs: {
      "type": "text"
    },
    domProps: {
      "value": _vm.child_customer_address.zip_code
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.child_customer_address, "zip_code", $event.target.value);
      }
    }
  })])]) : _vm._e()])]), _vm._v(" "), _c('b-modal', {
    attrs: {
      "id": "make-paid",
      "title": "Create a new order",
      "ok-title": _vm.__('Create order'),
      "cancel-title": _vm.__('Close')
    },
    on: {
      "ok": function ok($event) {
        return _vm.createOrder($event, true);
      }
    }
  }, [_c('label', {
    staticClass: "ws-nm"
  }, [_vm._v(_vm._s(_vm.__('Confirm payment is paid for this order')))]), _vm._v(" "), _c('p', [_vm._v("\n            " + _vm._s(_vm.__('Payment status of the order is Paid. Once the order has been created, you cannot change the payment method or status')) + ".\n        ")]), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.__('Select payment method')))]), _vm._v(" "), _c('div', {
    staticClass: "ui-select-wrapper mb15 next-input--is-focused"
  }, [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.child_payment_method,
      expression: "child_payment_method"
    }],
    staticClass: "ui-select",
    on: {
      "change": function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.child_payment_method = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }
    }
  }, [_c('option', {
    attrs: {
      "value": "cod"
    }
  }, [_vm._v(_vm._s(_vm.__('Cash on delivery')) + " (COD)")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "bank_transfer"
    }
  }, [_vm._v(_vm._s(_vm.__('Bank transfer')))])]), _vm._v(" "), _c('svg', {
    staticClass: "svg-next-icon svg-next-icon-size-16"
  }, [_c('use', {
    attrs: {
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      "xlink:href": "#select-chevron"
    }
  })])]), _vm._v(" "), _c('br'), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.__('Paid amount')) + " : "), _c('span', [_vm._v(_vm._s(_vm._f("formatPrice")(_vm.child_total_amount)) + " " + _vm._s(_vm.currency))])])]), _vm._v(" "), _c('b-modal', {
    attrs: {
      "id": "make-pending",
      "title": "Create a new order",
      "ok-title": _vm.__('Create order'),
      "cancel-title": _vm.__('Close')
    },
    on: {
      "ok": function ok($event) {
        return _vm.createOrder($event);
      }
    }
  }, [_c('label', {
    staticClass: "ws-nm"
  }, [_vm._v(_vm._s(_vm.__('Confirm that payment for this order will be paid later')))]), _vm._v(" "), _c('p', [_vm._v("\n            " + _vm._s(_vm.__('Payment status of the order is Pending. Once the order has been created, you cannot change the payment method or status')) + ".\n        ")]), _vm._v(" "), _c('div', {
    staticClass: "ui-select-wrapper mb15 next-input--is-focused"
  }, [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.child_payment_method,
      expression: "child_payment_method"
    }],
    staticClass: "ui-select",
    on: {
      "change": function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.child_payment_method = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }
    }
  }, [_c('option', {
    attrs: {
      "value": "cod"
    }
  }, [_vm._v(_vm._s(_vm.__('Cash on delivery')) + " (COD)")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "bank_transfer"
    }
  }, [_vm._v(_vm._s(_vm.__('Bank transfer')))])]), _vm._v(" "), _c('svg', {
    staticClass: "svg-next-icon svg-next-icon-size-16"
  }, [_c('use', {
    attrs: {
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      "xlink:href": "#select-chevron"
    }
  })])]), _vm._v(" "), _c('br'), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.__('Pending amount')) + " : "), _c('span', [_vm._v(_vm._s(_vm._f("formatPrice")(_vm.child_total_amount)) + " " + _vm._s(_vm.currency))])])])], 1);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "flexbox-auto-left p-r10"
  }, [_c('i', {
    staticClass: "fa fa-credit-card fa-1-5 color-blue"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "flexbox-auto-40"
  }, [_c('img', {
    attrs: {
      "width": "30",
      "src": "//hstatic.net/0/0/global/design/imgs/next-create-customer.svg",
      "alt": "icon"
    }
  })]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/components/button/button-close.js":
/*!**************************************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/components/button/button-close.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BButtonClose": () => (/* binding */ BButtonClose),
/* harmony export */   "props": () => (/* binding */ props)
/* harmony export */ });
/* harmony import */ var _vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../vue */ "./node_modules/bootstrap-vue/esm/vue.js");
/* harmony import */ var _vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../vue */ "./node_modules/vue-functional-data-merge/dist/lib.esm.js");
/* harmony import */ var _constants_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/components */ "./node_modules/bootstrap-vue/esm/constants/components.js");
/* harmony import */ var _constants_props__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/props */ "./node_modules/bootstrap-vue/esm/constants/props.js");
/* harmony import */ var _constants_slots__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../constants/slots */ "./node_modules/bootstrap-vue/esm/constants/slots.js");
/* harmony import */ var _utils_events__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/events */ "./node_modules/bootstrap-vue/esm/utils/events.js");
/* harmony import */ var _utils_inspect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/inspect */ "./node_modules/bootstrap-vue/esm/utils/inspect.js");
/* harmony import */ var _utils_props__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/props */ "./node_modules/bootstrap-vue/esm/utils/props.js");
/* harmony import */ var _utils_normalize_slot__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/normalize-slot */ "./node_modules/bootstrap-vue/esm/utils/normalize-slot.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








 // --- Props ---

var props = (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.makePropsConfigurable)({
  ariaLabel: (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_STRING, 'Close'),
  content: (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_STRING, '&times;'),
  disabled: (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_BOOLEAN, false),
  textVariant: (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_STRING)
}, _constants_components__WEBPACK_IMPORTED_MODULE_2__.NAME_BUTTON_CLOSE); // --- Main component ---
// @vue/component

var BButtonClose = /*#__PURE__*/(0,_vue__WEBPACK_IMPORTED_MODULE_3__.extend)({
  name: _constants_components__WEBPACK_IMPORTED_MODULE_2__.NAME_BUTTON_CLOSE,
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        slots = _ref.slots,
        scopedSlots = _ref.scopedSlots;
    var $slots = slots();
    var $scopedSlots = scopedSlots || {};
    var componentData = {
      staticClass: 'close',
      class: _defineProperty({}, "text-".concat(props.textVariant), props.textVariant),
      attrs: {
        type: 'button',
        disabled: props.disabled,
        'aria-label': props.ariaLabel ? String(props.ariaLabel) : null
      },
      on: {
        click: function click(event) {
          // Ensure click on button HTML content is also disabled

          /* istanbul ignore if: bug in JSDOM still emits click on inner element */
          if (props.disabled && (0,_utils_inspect__WEBPACK_IMPORTED_MODULE_4__.isEvent)(event)) {
            (0,_utils_events__WEBPACK_IMPORTED_MODULE_5__.stopEvent)(event);
          }
        }
      }
    }; // Careful not to override the default slot with innerHTML

    if (!(0,_utils_normalize_slot__WEBPACK_IMPORTED_MODULE_6__.hasNormalizedSlot)(_constants_slots__WEBPACK_IMPORTED_MODULE_7__.SLOT_NAME_DEFAULT, $scopedSlots, $slots)) {
      componentData.domProps = {
        innerHTML: props.content
      };
    }

    return h('button', (0,_vue__WEBPACK_IMPORTED_MODULE_8__.mergeData)(data, componentData), (0,_utils_normalize_slot__WEBPACK_IMPORTED_MODULE_6__.normalizeSlot)(_constants_slots__WEBPACK_IMPORTED_MODULE_7__.SLOT_NAME_DEFAULT, {}, $scopedSlots, $slots));
  }
});

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/components/button/button.js":
/*!********************************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/components/button/button.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BButton": () => (/* binding */ BButton),
/* harmony export */   "props": () => (/* binding */ props)
/* harmony export */ });
/* harmony import */ var _vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../vue */ "./node_modules/bootstrap-vue/esm/vue.js");
/* harmony import */ var _vue__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../vue */ "./node_modules/vue-functional-data-merge/dist/lib.esm.js");
/* harmony import */ var _constants_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants/components */ "./node_modules/bootstrap-vue/esm/constants/components.js");
/* harmony import */ var _constants_key_codes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../constants/key-codes */ "./node_modules/bootstrap-vue/esm/constants/key-codes.js");
/* harmony import */ var _constants_props__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants/props */ "./node_modules/bootstrap-vue/esm/constants/props.js");
/* harmony import */ var _utils_array__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../utils/array */ "./node_modules/bootstrap-vue/esm/utils/array.js");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/dom */ "./node_modules/bootstrap-vue/esm/utils/dom.js");
/* harmony import */ var _utils_events__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utils/events */ "./node_modules/bootstrap-vue/esm/utils/events.js");
/* harmony import */ var _utils_inspect__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/inspect */ "./node_modules/bootstrap-vue/esm/utils/inspect.js");
/* harmony import */ var _utils_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/object */ "./node_modules/bootstrap-vue/esm/utils/object.js");
/* harmony import */ var _utils_props__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/props */ "./node_modules/bootstrap-vue/esm/utils/props.js");
/* harmony import */ var _utils_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/router */ "./node_modules/bootstrap-vue/esm/utils/router.js");
/* harmony import */ var _link_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../link/link */ "./node_modules/bootstrap-vue/esm/components/link/link.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












 // --- Props ---

var linkProps = (0,_utils_object__WEBPACK_IMPORTED_MODULE_0__.omit)(_link_link__WEBPACK_IMPORTED_MODULE_1__.props, ['event', 'routerTag']);
delete linkProps.href.default;
delete linkProps.to.default;
var props = (0,_utils_props__WEBPACK_IMPORTED_MODULE_2__.makePropsConfigurable)((0,_utils_object__WEBPACK_IMPORTED_MODULE_0__.sortKeys)(_objectSpread(_objectSpread({}, linkProps), {}, {
  block: (0,_utils_props__WEBPACK_IMPORTED_MODULE_2__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_3__.PROP_TYPE_BOOLEAN, false),
  disabled: (0,_utils_props__WEBPACK_IMPORTED_MODULE_2__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_3__.PROP_TYPE_BOOLEAN, false),
  pill: (0,_utils_props__WEBPACK_IMPORTED_MODULE_2__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_3__.PROP_TYPE_BOOLEAN, false),
  // Tri-state: `true`, `false` or `null`
  // => On, off, not a toggle
  pressed: (0,_utils_props__WEBPACK_IMPORTED_MODULE_2__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_3__.PROP_TYPE_BOOLEAN, null),
  size: (0,_utils_props__WEBPACK_IMPORTED_MODULE_2__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_3__.PROP_TYPE_STRING),
  squared: (0,_utils_props__WEBPACK_IMPORTED_MODULE_2__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_3__.PROP_TYPE_BOOLEAN, false),
  tag: (0,_utils_props__WEBPACK_IMPORTED_MODULE_2__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_3__.PROP_TYPE_STRING, 'button'),
  type: (0,_utils_props__WEBPACK_IMPORTED_MODULE_2__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_3__.PROP_TYPE_STRING, 'button'),
  variant: (0,_utils_props__WEBPACK_IMPORTED_MODULE_2__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_3__.PROP_TYPE_STRING, 'secondary')
})), _constants_components__WEBPACK_IMPORTED_MODULE_4__.NAME_BUTTON); // --- Helper methods ---
// Focus handler for toggle buttons
// Needs class of 'focus' when focused

var handleFocus = function handleFocus(event) {
  if (event.type === 'focusin') {
    (0,_utils_dom__WEBPACK_IMPORTED_MODULE_5__.addClass)(event.target, 'focus');
  } else if (event.type === 'focusout') {
    (0,_utils_dom__WEBPACK_IMPORTED_MODULE_5__.removeClass)(event.target, 'focus');
  }
}; // Is the requested button a link?
// If tag prop is set to `a`, we use a <b-link> to get proper disabled handling


var isLink = function isLink(props) {
  return (0,_utils_router__WEBPACK_IMPORTED_MODULE_6__.isLink)(props) || (0,_utils_dom__WEBPACK_IMPORTED_MODULE_5__.isTag)(props.tag, 'a');
}; // Is the button to be a toggle button?


var isToggle = function isToggle(props) {
  return (0,_utils_inspect__WEBPACK_IMPORTED_MODULE_7__.isBoolean)(props.pressed);
}; // Is the button "really" a button?


var isButton = function isButton(props) {
  return !(isLink(props) || props.tag && !(0,_utils_dom__WEBPACK_IMPORTED_MODULE_5__.isTag)(props.tag, 'button'));
}; // Is the requested tag not a button or link?


var isNonStandardTag = function isNonStandardTag(props) {
  return !isLink(props) && !isButton(props);
}; // Compute required classes (non static classes)


var computeClass = function computeClass(props) {
  var _ref;

  return ["btn-".concat(props.variant || 'secondary'), (_ref = {}, _defineProperty(_ref, "btn-".concat(props.size), props.size), _defineProperty(_ref, 'btn-block', props.block), _defineProperty(_ref, 'rounded-pill', props.pill), _defineProperty(_ref, 'rounded-0', props.squared && !props.pill), _defineProperty(_ref, "disabled", props.disabled), _defineProperty(_ref, "active", props.pressed), _ref)];
}; // Compute the link props to pass to b-link (if required)


var computeLinkProps = function computeLinkProps(props) {
  return isLink(props) ? (0,_utils_props__WEBPACK_IMPORTED_MODULE_2__.pluckProps)(linkProps, props) : {};
}; // Compute the attributes for a button


var computeAttrs = function computeAttrs(props, data) {
  var button = isButton(props);
  var link = isLink(props);
  var toggle = isToggle(props);
  var nonStandardTag = isNonStandardTag(props);
  var hashLink = link && props.href === '#';
  var role = data.attrs && data.attrs.role ? data.attrs.role : null;
  var tabindex = data.attrs ? data.attrs.tabindex : null;

  if (nonStandardTag || hashLink) {
    tabindex = '0';
  }

  return {
    // Type only used for "real" buttons
    type: button && !link ? props.type : null,
    // Disabled only set on "real" buttons
    disabled: button ? props.disabled : null,
    // We add a role of button when the tag is not a link or button for ARIA
    // Don't bork any role provided in `data.attrs` when `isLink` or `isButton`
    // Except when link has `href` of `#`
    role: nonStandardTag || hashLink ? 'button' : role,
    // We set the `aria-disabled` state for non-standard tags
    'aria-disabled': nonStandardTag ? String(props.disabled) : null,
    // For toggles, we need to set the pressed state for ARIA
    'aria-pressed': toggle ? String(props.pressed) : null,
    // `autocomplete="off"` is needed in toggle mode to prevent some browsers
    // from remembering the previous setting when using the back button
    autocomplete: toggle ? 'off' : null,
    // `tabindex` is used when the component is not a button
    // Links are tabbable, but don't allow disabled, while non buttons or links
    // are not tabbable, so we mimic that functionality by disabling tabbing
    // when disabled, and adding a `tabindex="0"` to non buttons or non links
    tabindex: props.disabled && !button ? '-1' : tabindex
  };
}; // --- Main component ---
// @vue/component


var BButton = /*#__PURE__*/(0,_vue__WEBPACK_IMPORTED_MODULE_8__.extend)({
  name: _constants_components__WEBPACK_IMPORTED_MODULE_4__.NAME_BUTTON,
  functional: true,
  props: props,
  render: function render(h, _ref2) {
    var props = _ref2.props,
        data = _ref2.data,
        listeners = _ref2.listeners,
        children = _ref2.children;
    var toggle = isToggle(props);
    var link = isLink(props);
    var nonStandardTag = isNonStandardTag(props);
    var hashLink = link && props.href === '#';
    var on = {
      keydown: function keydown(event) {
        // When the link is a `href="#"` or a non-standard tag (has `role="button"`),
        // we add a keydown handlers for CODE_SPACE/CODE_ENTER

        /* istanbul ignore next */
        if (props.disabled || !(nonStandardTag || hashLink)) {
          return;
        }

        var keyCode = event.keyCode; // Add CODE_SPACE handler for `href="#"` and CODE_ENTER handler for non-standard tags

        if (keyCode === _constants_key_codes__WEBPACK_IMPORTED_MODULE_9__.CODE_SPACE || keyCode === _constants_key_codes__WEBPACK_IMPORTED_MODULE_9__.CODE_ENTER && nonStandardTag) {
          var target = event.currentTarget || event.target;
          (0,_utils_events__WEBPACK_IMPORTED_MODULE_10__.stopEvent)(event, {
            propagation: false
          });
          target.click();
        }
      },
      click: function click(event) {
        /* istanbul ignore if: blink/button disabled should handle this */
        if (props.disabled && (0,_utils_inspect__WEBPACK_IMPORTED_MODULE_7__.isEvent)(event)) {
          (0,_utils_events__WEBPACK_IMPORTED_MODULE_10__.stopEvent)(event);
        } else if (toggle && listeners && listeners['update:pressed']) {
          // Send `.sync` updates to any "pressed" prop (if `.sync` listeners)
          // `concat()` will normalize the value to an array without
          // double wrapping an array value in an array
          (0,_utils_array__WEBPACK_IMPORTED_MODULE_11__.concat)(listeners['update:pressed']).forEach(function (fn) {
            if ((0,_utils_inspect__WEBPACK_IMPORTED_MODULE_7__.isFunction)(fn)) {
              fn(!props.pressed);
            }
          });
        }
      }
    };

    if (toggle) {
      on.focusin = handleFocus;
      on.focusout = handleFocus;
    }

    var componentData = {
      staticClass: 'btn',
      class: computeClass(props),
      props: computeLinkProps(props),
      attrs: computeAttrs(props, data),
      on: on
    };
    return h(link ? _link_link__WEBPACK_IMPORTED_MODULE_1__.BLink : props.tag, (0,_vue__WEBPACK_IMPORTED_MODULE_12__.mergeData)(_objectSpread(_objectSpread({}, data), {}, {
      props: undefined
    }), componentData), children);
  }
});

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/components/link/link.js":
/*!****************************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/components/link/link.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BLink": () => (/* binding */ BLink),
/* harmony export */   "nuxtLinkProps": () => (/* binding */ nuxtLinkProps),
/* harmony export */   "props": () => (/* binding */ props),
/* harmony export */   "routerLinkProps": () => (/* binding */ routerLinkProps)
/* harmony export */ });
/* harmony import */ var _vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../vue */ "./node_modules/bootstrap-vue/esm/vue.js");
/* harmony import */ var _constants_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/components */ "./node_modules/bootstrap-vue/esm/constants/components.js");
/* harmony import */ var _constants_events__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../constants/events */ "./node_modules/bootstrap-vue/esm/constants/events.js");
/* harmony import */ var _constants_props__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants/props */ "./node_modules/bootstrap-vue/esm/constants/props.js");
/* harmony import */ var _utils_array__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../utils/array */ "./node_modules/bootstrap-vue/esm/utils/array.js");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../utils/dom */ "./node_modules/bootstrap-vue/esm/utils/dom.js");
/* harmony import */ var _utils_events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/events */ "./node_modules/bootstrap-vue/esm/utils/events.js");
/* harmony import */ var _utils_inspect__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../utils/inspect */ "./node_modules/bootstrap-vue/esm/utils/inspect.js");
/* harmony import */ var _utils_object__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/object */ "./node_modules/bootstrap-vue/esm/utils/object.js");
/* harmony import */ var _utils_props__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/props */ "./node_modules/bootstrap-vue/esm/utils/props.js");
/* harmony import */ var _utils_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utils/router */ "./node_modules/bootstrap-vue/esm/utils/router.js");
/* harmony import */ var _mixins_attrs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../mixins/attrs */ "./node_modules/bootstrap-vue/esm/mixins/attrs.js");
/* harmony import */ var _mixins_listen_on_root__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../mixins/listen-on-root */ "./node_modules/bootstrap-vue/esm/mixins/listen-on-root.js");
/* harmony import */ var _mixins_listeners__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../mixins/listeners */ "./node_modules/bootstrap-vue/esm/mixins/listeners.js");
/* harmony import */ var _mixins_normalize_slot__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../mixins/normalize-slot */ "./node_modules/bootstrap-vue/esm/mixins/normalize-slot.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }















 // --- Constants ---

var ROOT_EVENT_NAME_CLICKED = (0,_utils_events__WEBPACK_IMPORTED_MODULE_0__.getRootEventName)(_constants_components__WEBPACK_IMPORTED_MODULE_1__.NAME_LINK, 'clicked'); // --- Props ---
// `<router-link>` specific props

var routerLinkProps = {
  activeClass: (0,_utils_props__WEBPACK_IMPORTED_MODULE_2__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_3__.PROP_TYPE_STRING),
  append: (0,_utils_props__WEBPACK_IMPORTED_MODULE_2__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_3__.PROP_TYPE_BOOLEAN, false),
  event: (0,_utils_props__WEBPACK_IMPORTED_MODULE_2__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_3__.PROP_TYPE_ARRAY_STRING),
  exact: (0,_utils_props__WEBPACK_IMPORTED_MODULE_2__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_3__.PROP_TYPE_BOOLEAN, false),
  exactActiveClass: (0,_utils_props__WEBPACK_IMPORTED_MODULE_2__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_3__.PROP_TYPE_STRING),
  exactPath: (0,_utils_props__WEBPACK_IMPORTED_MODULE_2__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_3__.PROP_TYPE_BOOLEAN, false),
  exactPathActiveClass: (0,_utils_props__WEBPACK_IMPORTED_MODULE_2__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_3__.PROP_TYPE_STRING),
  replace: (0,_utils_props__WEBPACK_IMPORTED_MODULE_2__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_3__.PROP_TYPE_BOOLEAN, false),
  routerTag: (0,_utils_props__WEBPACK_IMPORTED_MODULE_2__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_3__.PROP_TYPE_STRING),
  to: (0,_utils_props__WEBPACK_IMPORTED_MODULE_2__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_3__.PROP_TYPE_OBJECT_STRING)
}; // `<nuxt-link>` specific props

var nuxtLinkProps = {
  noPrefetch: (0,_utils_props__WEBPACK_IMPORTED_MODULE_2__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_3__.PROP_TYPE_BOOLEAN, false),
  // Must be `null` to fall back to the value defined in the
  // `nuxt.config.js` configuration file for `router.prefetchLinks`
  // We convert `null` to `undefined`, so that Nuxt.js will use the
  // compiled default
  // Vue treats `undefined` as default of `false` for Boolean props,
  // so we must set it as `null` here to be a true tri-state prop
  prefetch: (0,_utils_props__WEBPACK_IMPORTED_MODULE_2__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_3__.PROP_TYPE_BOOLEAN, null)
}; // All `<b-link>` props

var props = (0,_utils_props__WEBPACK_IMPORTED_MODULE_2__.makePropsConfigurable)((0,_utils_object__WEBPACK_IMPORTED_MODULE_4__.sortKeys)(_objectSpread(_objectSpread(_objectSpread({}, nuxtLinkProps), routerLinkProps), {}, {
  active: (0,_utils_props__WEBPACK_IMPORTED_MODULE_2__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_3__.PROP_TYPE_BOOLEAN, false),
  disabled: (0,_utils_props__WEBPACK_IMPORTED_MODULE_2__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_3__.PROP_TYPE_BOOLEAN, false),
  href: (0,_utils_props__WEBPACK_IMPORTED_MODULE_2__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_3__.PROP_TYPE_STRING),
  // Must be `null` if no value provided
  rel: (0,_utils_props__WEBPACK_IMPORTED_MODULE_2__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_3__.PROP_TYPE_STRING, null),
  // To support 3rd party router links based on `<router-link>` (i.e. `g-link` for Gridsome)
  // Default is to auto choose between `<router-link>` and `<nuxt-link>`
  // Gridsome doesn't provide a mechanism to auto detect and has caveats
  // such as not supporting FQDN URLs or hash only URLs
  routerComponentName: (0,_utils_props__WEBPACK_IMPORTED_MODULE_2__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_3__.PROP_TYPE_STRING),
  target: (0,_utils_props__WEBPACK_IMPORTED_MODULE_2__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_3__.PROP_TYPE_STRING, '_self')
})), _constants_components__WEBPACK_IMPORTED_MODULE_1__.NAME_LINK); // --- Main component ---
// @vue/component

var BLink = /*#__PURE__*/(0,_vue__WEBPACK_IMPORTED_MODULE_5__.extend)({
  name: _constants_components__WEBPACK_IMPORTED_MODULE_1__.NAME_LINK,
  // Mixin order is important!
  mixins: [_mixins_attrs__WEBPACK_IMPORTED_MODULE_6__.attrsMixin, _mixins_listeners__WEBPACK_IMPORTED_MODULE_7__.listenersMixin, _mixins_listen_on_root__WEBPACK_IMPORTED_MODULE_8__.listenOnRootMixin, _mixins_normalize_slot__WEBPACK_IMPORTED_MODULE_9__.normalizeSlotMixin],
  inheritAttrs: false,
  props: props,
  computed: {
    computedTag: function computedTag() {
      // We don't pass `this` as the first arg as we need reactivity of the props
      var to = this.to,
          disabled = this.disabled,
          routerComponentName = this.routerComponentName;
      return (0,_utils_router__WEBPACK_IMPORTED_MODULE_10__.computeTag)({
        to: to,
        disabled: disabled,
        routerComponentName: routerComponentName
      }, this);
    },
    isRouterLink: function isRouterLink() {
      return (0,_utils_router__WEBPACK_IMPORTED_MODULE_10__.isRouterLink)(this.computedTag);
    },
    computedRel: function computedRel() {
      // We don't pass `this` as the first arg as we need reactivity of the props
      var target = this.target,
          rel = this.rel;
      return (0,_utils_router__WEBPACK_IMPORTED_MODULE_10__.computeRel)({
        target: target,
        rel: rel
      });
    },
    computedHref: function computedHref() {
      // We don't pass `this` as the first arg as we need reactivity of the props
      var to = this.to,
          href = this.href;
      return (0,_utils_router__WEBPACK_IMPORTED_MODULE_10__.computeHref)({
        to: to,
        href: href
      }, this.computedTag);
    },
    computedProps: function computedProps() {
      var event = this.event,
          prefetch = this.prefetch,
          routerTag = this.routerTag;
      return this.isRouterLink ? _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, (0,_utils_props__WEBPACK_IMPORTED_MODULE_2__.pluckProps)((0,_utils_object__WEBPACK_IMPORTED_MODULE_4__.omit)(_objectSpread(_objectSpread({}, routerLinkProps), this.computedTag === 'nuxt-link' ? nuxtLinkProps : {}), ['event', 'prefetch', 'routerTag']), this)), event ? {
        event: event
      } : {}), (0,_utils_inspect__WEBPACK_IMPORTED_MODULE_11__.isBoolean)(prefetch) ? {
        prefetch: prefetch
      } : {}), routerTag ? {
        tag: routerTag
      } : {}) : {};
    },
    computedAttrs: function computedAttrs() {
      var bvAttrs = this.bvAttrs,
          href = this.computedHref,
          rel = this.computedRel,
          disabled = this.disabled,
          target = this.target,
          routerTag = this.routerTag,
          isRouterLink = this.isRouterLink;
      return _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, bvAttrs), href ? {
        href: href
      } : {}), isRouterLink && routerTag && !(0,_utils_dom__WEBPACK_IMPORTED_MODULE_12__.isTag)(routerTag, 'a') ? {} : {
        rel: rel,
        target: target
      }), {}, {
        tabindex: disabled ? '-1' : (0,_utils_inspect__WEBPACK_IMPORTED_MODULE_11__.isUndefined)(bvAttrs.tabindex) ? null : bvAttrs.tabindex,
        'aria-disabled': disabled ? 'true' : null
      });
    },
    computedListeners: function computedListeners() {
      return _objectSpread(_objectSpread({}, this.bvListeners), {}, {
        // We want to overwrite any click handler since our callback
        // will invoke the user supplied handler(s) if `!this.disabled`
        click: this.onClick
      });
    }
  },
  methods: {
    onClick: function onClick(event) {
      var _arguments = arguments;
      var eventIsEvent = (0,_utils_inspect__WEBPACK_IMPORTED_MODULE_11__.isEvent)(event);
      var isRouterLink = this.isRouterLink;
      var suppliedHandler = this.bvListeners.click;

      if (eventIsEvent && this.disabled) {
        // Stop event from bubbling up
        // Kill the event loop attached to this specific `EventTarget`
        // Needed to prevent `vue-router` for doing its thing
        (0,_utils_events__WEBPACK_IMPORTED_MODULE_0__.stopEvent)(event, {
          immediatePropagation: true
        });
      } else {
        // Router links do not emit instance `click` events, so we
        // add in an `$emit('click', event)` on its Vue instance
        //
        // seems not to be required for Vue3 compat build

        /* istanbul ignore next: difficult to test, but we know it works */
        if (isRouterLink) {
          var _event$currentTarget$;

          (_event$currentTarget$ = event.currentTarget.__vue__) === null || _event$currentTarget$ === void 0 ? void 0 : _event$currentTarget$.$emit(_constants_events__WEBPACK_IMPORTED_MODULE_13__.EVENT_NAME_CLICK, event);
        } // Call the suppliedHandler(s), if any provided


        (0,_utils_array__WEBPACK_IMPORTED_MODULE_14__.concat)(suppliedHandler).filter(function (h) {
          return (0,_utils_inspect__WEBPACK_IMPORTED_MODULE_11__.isFunction)(h);
        }).forEach(function (handler) {
          handler.apply(void 0, _toConsumableArray(_arguments));
        }); // Emit the global `$root` click event

        this.emitOnRoot(ROOT_EVENT_NAME_CLICKED, event); // TODO: Remove deprecated 'clicked::link' event with next major release

        this.emitOnRoot('clicked::link', event);
      } // Stop scroll-to-top behavior or navigation on
      // regular links when href is just '#'


      if (eventIsEvent && !isRouterLink && this.computedHref === '#') {
        (0,_utils_events__WEBPACK_IMPORTED_MODULE_0__.stopEvent)(event, {
          propagation: false
        });
      }
    },
    focus: function focus() {
      (0,_utils_dom__WEBPACK_IMPORTED_MODULE_12__.attemptFocus)(this.$el);
    },
    blur: function blur() {
      (0,_utils_dom__WEBPACK_IMPORTED_MODULE_12__.attemptBlur)(this.$el);
    }
  },
  render: function render(h) {
    var active = this.active,
        disabled = this.disabled;
    return h(this.computedTag, _defineProperty({
      class: {
        active: active,
        disabled: disabled
      },
      attrs: this.computedAttrs,
      props: this.computedProps
    }, this.isRouterLink ? 'nativeOn' : 'on', this.computedListeners), this.normalizeSlot());
  }
});

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/components/modal/helpers/bv-modal-event.class.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/components/modal/helpers/bv-modal-event.class.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BvModalEvent": () => (/* binding */ BvModalEvent)
/* harmony export */ });
/* harmony import */ var _utils_bv_event_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/bv-event.class */ "./node_modules/bootstrap-vue/esm/utils/bv-event.class.js");
/* harmony import */ var _utils_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/object */ "./node_modules/bootstrap-vue/esm/utils/object.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } Object.defineProperty(subClass, "prototype", { value: Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }), writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var BvModalEvent = /*#__PURE__*/function (_BvEvent) {
  _inherits(BvModalEvent, _BvEvent);

  var _super = _createSuper(BvModalEvent);

  function BvModalEvent(type) {
    var _this;

    var eventInit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, BvModalEvent);

    _this = _super.call(this, type, eventInit); // Freeze our new props as readonly, but leave them enumerable

    (0,_utils_object__WEBPACK_IMPORTED_MODULE_0__.defineProperties)(_assertThisInitialized(_this), {
      trigger: (0,_utils_object__WEBPACK_IMPORTED_MODULE_0__.readonlyDescriptor)()
    });
    return _this;
  }

  _createClass(BvModalEvent, null, [{
    key: "Defaults",
    get: function get() {
      return _objectSpread(_objectSpread({}, _get(_getPrototypeOf(BvModalEvent), "Defaults", this)), {}, {
        trigger: null
      });
    }
  }]);

  return BvModalEvent;
}(_utils_bv_event_class__WEBPACK_IMPORTED_MODULE_1__.BvEvent); // Named exports




/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/components/modal/helpers/modal-manager.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/components/modal/helpers/modal-manager.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "modalManager": () => (/* binding */ modalManager)
/* harmony export */ });
/* harmony import */ var _vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../vue */ "./node_modules/bootstrap-vue/esm/vue.js");
/* harmony import */ var _constants_env__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../constants/env */ "./node_modules/bootstrap-vue/esm/constants/env.js");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/dom */ "./node_modules/bootstrap-vue/esm/utils/dom.js");
/* harmony import */ var _utils_inspect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/inspect */ "./node_modules/bootstrap-vue/esm/utils/inspect.js");
/* harmony import */ var _utils_number__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils/number */ "./node_modules/bootstrap-vue/esm/utils/number.js");
/**
 * Private ModalManager helper
 * Handles controlling modal stacking zIndexes and body adjustments/classes
 */




 // --- Constants ---
// Default modal backdrop z-index

var DEFAULT_ZINDEX = 1040; // Selectors for padding/margin adjustments

var SELECTOR_FIXED_CONTENT = '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top';
var SELECTOR_STICKY_CONTENT = '.sticky-top';
var SELECTOR_NAVBAR_TOGGLER = '.navbar-toggler'; // --- Main component ---
// @vue/component

var ModalManager = /*#__PURE__*/(0,_vue__WEBPACK_IMPORTED_MODULE_0__.extend)({
  data: function data() {
    return {
      modals: [],
      baseZIndex: null,
      scrollbarWidth: null,
      isBodyOverflowing: false
    };
  },
  computed: {
    modalCount: function modalCount() {
      return this.modals.length;
    },
    modalsAreOpen: function modalsAreOpen() {
      return this.modalCount > 0;
    }
  },
  watch: {
    modalCount: function modalCount(newCount, oldCount) {
      if (_constants_env__WEBPACK_IMPORTED_MODULE_1__.IS_BROWSER) {
        this.getScrollbarWidth();

        if (newCount > 0 && oldCount === 0) {
          // Transitioning to modal(s) open
          this.checkScrollbar();
          this.setScrollbar();
          (0,_utils_dom__WEBPACK_IMPORTED_MODULE_2__.addClass)(document.body, 'modal-open');
        } else if (newCount === 0 && oldCount > 0) {
          // Transitioning to modal(s) closed
          this.resetScrollbar();
          (0,_utils_dom__WEBPACK_IMPORTED_MODULE_2__.removeClass)(document.body, 'modal-open');
        }

        (0,_utils_dom__WEBPACK_IMPORTED_MODULE_2__.setAttr)(document.body, 'data-modal-open-count', String(newCount));
      }
    },
    modals: function modals(newValue) {
      var _this = this;

      this.checkScrollbar();
      (0,_utils_dom__WEBPACK_IMPORTED_MODULE_2__.requestAF)(function () {
        _this.updateModals(newValue || []);
      });
    }
  },
  methods: {
    // Public methods
    registerModal: function registerModal(modal) {
      // Register the modal if not already registered
      if (modal && this.modals.indexOf(modal) === -1) {
        this.modals.push(modal);
      }
    },
    unregisterModal: function unregisterModal(modal) {
      var index = this.modals.indexOf(modal);

      if (index > -1) {
        // Remove modal from modals array
        this.modals.splice(index, 1); // Reset the modal's data

        if (!modal._isBeingDestroyed && !modal._isDestroyed) {
          this.resetModal(modal);
        }
      }
    },
    getBaseZIndex: function getBaseZIndex() {
      if (_constants_env__WEBPACK_IMPORTED_MODULE_1__.IS_BROWSER && (0,_utils_inspect__WEBPACK_IMPORTED_MODULE_3__.isNull)(this.baseZIndex)) {
        // Create a temporary `div.modal-backdrop` to get computed z-index
        var div = document.createElement('div');
        (0,_utils_dom__WEBPACK_IMPORTED_MODULE_2__.addClass)(div, 'modal-backdrop');
        (0,_utils_dom__WEBPACK_IMPORTED_MODULE_2__.addClass)(div, 'd-none');
        (0,_utils_dom__WEBPACK_IMPORTED_MODULE_2__.setStyle)(div, 'display', 'none');
        document.body.appendChild(div);
        this.baseZIndex = (0,_utils_number__WEBPACK_IMPORTED_MODULE_4__.toInteger)((0,_utils_dom__WEBPACK_IMPORTED_MODULE_2__.getCS)(div).zIndex, DEFAULT_ZINDEX);
        document.body.removeChild(div);
      }

      return this.baseZIndex || DEFAULT_ZINDEX;
    },
    getScrollbarWidth: function getScrollbarWidth() {
      if (_constants_env__WEBPACK_IMPORTED_MODULE_1__.IS_BROWSER && (0,_utils_inspect__WEBPACK_IMPORTED_MODULE_3__.isNull)(this.scrollbarWidth)) {
        // Create a temporary `div.measure-scrollbar` to get computed z-index
        var div = document.createElement('div');
        (0,_utils_dom__WEBPACK_IMPORTED_MODULE_2__.addClass)(div, 'modal-scrollbar-measure');
        document.body.appendChild(div);
        this.scrollbarWidth = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_2__.getBCR)(div).width - div.clientWidth;
        document.body.removeChild(div);
      }

      return this.scrollbarWidth || 0;
    },
    // Private methods
    updateModals: function updateModals(modals) {
      var _this2 = this;

      var baseZIndex = this.getBaseZIndex();
      var scrollbarWidth = this.getScrollbarWidth();
      modals.forEach(function (modal, index) {
        // We update data values on each modal
        modal.zIndex = baseZIndex + index;
        modal.scrollbarWidth = scrollbarWidth;
        modal.isTop = index === _this2.modals.length - 1;
        modal.isBodyOverflowing = _this2.isBodyOverflowing;
      });
    },
    resetModal: function resetModal(modal) {
      if (modal) {
        modal.zIndex = this.getBaseZIndex();
        modal.isTop = true;
        modal.isBodyOverflowing = false;
      }
    },
    checkScrollbar: function checkScrollbar() {
      // Determine if the body element is overflowing
      var _getBCR = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_2__.getBCR)(document.body),
          left = _getBCR.left,
          right = _getBCR.right;

      this.isBodyOverflowing = left + right < window.innerWidth;
    },
    setScrollbar: function setScrollbar() {
      var body = document.body; // Storage place to cache changes to margins and padding
      // Note: This assumes the following element types are not added to the
      // document after the modal has opened.

      body._paddingChangedForModal = body._paddingChangedForModal || [];
      body._marginChangedForModal = body._marginChangedForModal || [];

      if (this.isBodyOverflowing) {
        var scrollbarWidth = this.scrollbarWidth; // Adjust fixed content padding

        /* istanbul ignore next: difficult to test in JSDOM */

        (0,_utils_dom__WEBPACK_IMPORTED_MODULE_2__.selectAll)(SELECTOR_FIXED_CONTENT).forEach(function (el) {
          var actualPadding = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_2__.getStyle)(el, 'paddingRight') || '';
          (0,_utils_dom__WEBPACK_IMPORTED_MODULE_2__.setAttr)(el, 'data-padding-right', actualPadding);
          (0,_utils_dom__WEBPACK_IMPORTED_MODULE_2__.setStyle)(el, 'paddingRight', "".concat((0,_utils_number__WEBPACK_IMPORTED_MODULE_4__.toFloat)((0,_utils_dom__WEBPACK_IMPORTED_MODULE_2__.getCS)(el).paddingRight, 0) + scrollbarWidth, "px"));

          body._paddingChangedForModal.push(el);
        }); // Adjust sticky content margin

        /* istanbul ignore next: difficult to test in JSDOM */

        (0,_utils_dom__WEBPACK_IMPORTED_MODULE_2__.selectAll)(SELECTOR_STICKY_CONTENT).forEach(function (el)
        /* istanbul ignore next */
        {
          var actualMargin = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_2__.getStyle)(el, 'marginRight') || '';
          (0,_utils_dom__WEBPACK_IMPORTED_MODULE_2__.setAttr)(el, 'data-margin-right', actualMargin);
          (0,_utils_dom__WEBPACK_IMPORTED_MODULE_2__.setStyle)(el, 'marginRight', "".concat((0,_utils_number__WEBPACK_IMPORTED_MODULE_4__.toFloat)((0,_utils_dom__WEBPACK_IMPORTED_MODULE_2__.getCS)(el).marginRight, 0) - scrollbarWidth, "px"));

          body._marginChangedForModal.push(el);
        }); // Adjust <b-navbar-toggler> margin

        /* istanbul ignore next: difficult to test in JSDOM */

        (0,_utils_dom__WEBPACK_IMPORTED_MODULE_2__.selectAll)(SELECTOR_NAVBAR_TOGGLER).forEach(function (el)
        /* istanbul ignore next */
        {
          var actualMargin = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_2__.getStyle)(el, 'marginRight') || '';
          (0,_utils_dom__WEBPACK_IMPORTED_MODULE_2__.setAttr)(el, 'data-margin-right', actualMargin);
          (0,_utils_dom__WEBPACK_IMPORTED_MODULE_2__.setStyle)(el, 'marginRight', "".concat((0,_utils_number__WEBPACK_IMPORTED_MODULE_4__.toFloat)((0,_utils_dom__WEBPACK_IMPORTED_MODULE_2__.getCS)(el).marginRight, 0) + scrollbarWidth, "px"));

          body._marginChangedForModal.push(el);
        }); // Adjust body padding

        var actualPadding = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_2__.getStyle)(body, 'paddingRight') || '';
        (0,_utils_dom__WEBPACK_IMPORTED_MODULE_2__.setAttr)(body, 'data-padding-right', actualPadding);
        (0,_utils_dom__WEBPACK_IMPORTED_MODULE_2__.setStyle)(body, 'paddingRight', "".concat((0,_utils_number__WEBPACK_IMPORTED_MODULE_4__.toFloat)((0,_utils_dom__WEBPACK_IMPORTED_MODULE_2__.getCS)(body).paddingRight, 0) + scrollbarWidth, "px"));
      }
    },
    resetScrollbar: function resetScrollbar() {
      var body = document.body;

      if (body._paddingChangedForModal) {
        // Restore fixed content padding
        body._paddingChangedForModal.forEach(function (el) {
          /* istanbul ignore next: difficult to test in JSDOM */
          if ((0,_utils_dom__WEBPACK_IMPORTED_MODULE_2__.hasAttr)(el, 'data-padding-right')) {
            (0,_utils_dom__WEBPACK_IMPORTED_MODULE_2__.setStyle)(el, 'paddingRight', (0,_utils_dom__WEBPACK_IMPORTED_MODULE_2__.getAttr)(el, 'data-padding-right') || '');
            (0,_utils_dom__WEBPACK_IMPORTED_MODULE_2__.removeAttr)(el, 'data-padding-right');
          }
        });
      }

      if (body._marginChangedForModal) {
        // Restore sticky content and navbar-toggler margin
        body._marginChangedForModal.forEach(function (el) {
          /* istanbul ignore next: difficult to test in JSDOM */
          if ((0,_utils_dom__WEBPACK_IMPORTED_MODULE_2__.hasAttr)(el, 'data-margin-right')) {
            (0,_utils_dom__WEBPACK_IMPORTED_MODULE_2__.setStyle)(el, 'marginRight', (0,_utils_dom__WEBPACK_IMPORTED_MODULE_2__.getAttr)(el, 'data-margin-right') || '');
            (0,_utils_dom__WEBPACK_IMPORTED_MODULE_2__.removeAttr)(el, 'data-margin-right');
          }
        });
      }

      body._paddingChangedForModal = null;
      body._marginChangedForModal = null; // Restore body padding

      if ((0,_utils_dom__WEBPACK_IMPORTED_MODULE_2__.hasAttr)(body, 'data-padding-right')) {
        (0,_utils_dom__WEBPACK_IMPORTED_MODULE_2__.setStyle)(body, 'paddingRight', (0,_utils_dom__WEBPACK_IMPORTED_MODULE_2__.getAttr)(body, 'data-padding-right') || '');
        (0,_utils_dom__WEBPACK_IMPORTED_MODULE_2__.removeAttr)(body, 'data-padding-right');
      }
    }
  }
}); // Create and export our modal manager instance

var modalManager = new ModalManager();

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/components/modal/modal.js":
/*!******************************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/components/modal/modal.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BModal": () => (/* binding */ BModal),
/* harmony export */   "props": () => (/* binding */ props)
/* harmony export */ });
/* harmony import */ var _vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../vue */ "./node_modules/bootstrap-vue/esm/vue.js");
/* harmony import */ var _constants_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../constants/components */ "./node_modules/bootstrap-vue/esm/constants/components.js");
/* harmony import */ var _constants_env__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../constants/env */ "./node_modules/bootstrap-vue/esm/constants/env.js");
/* harmony import */ var _constants_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/events */ "./node_modules/bootstrap-vue/esm/constants/events.js");
/* harmony import */ var _constants_key_codes__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../constants/key-codes */ "./node_modules/bootstrap-vue/esm/constants/key-codes.js");
/* harmony import */ var _constants_props__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/props */ "./node_modules/bootstrap-vue/esm/constants/props.js");
/* harmony import */ var _constants_safe_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../constants/safe-types */ "./node_modules/bootstrap-vue/esm/constants/safe-types.js");
/* harmony import */ var _constants_slots__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../constants/slots */ "./node_modules/bootstrap-vue/esm/constants/slots.js");
/* harmony import */ var _utils_array__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/array */ "./node_modules/bootstrap-vue/esm/utils/array.js");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../utils/dom */ "./node_modules/bootstrap-vue/esm/utils/dom.js");
/* harmony import */ var _utils_events__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../utils/events */ "./node_modules/bootstrap-vue/esm/utils/events.js");
/* harmony import */ var _utils_html__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../utils/html */ "./node_modules/bootstrap-vue/esm/utils/html.js");
/* harmony import */ var _utils_identity__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../utils/identity */ "./node_modules/bootstrap-vue/esm/utils/identity.js");
/* harmony import */ var _utils_inspect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/inspect */ "./node_modules/bootstrap-vue/esm/utils/inspect.js");
/* harmony import */ var _utils_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/model */ "./node_modules/bootstrap-vue/esm/utils/model.js");
/* harmony import */ var _utils_object__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/object */ "./node_modules/bootstrap-vue/esm/utils/object.js");
/* harmony import */ var _utils_observe_dom__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../utils/observe-dom */ "./node_modules/bootstrap-vue/esm/utils/observe-dom.js");
/* harmony import */ var _utils_props__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/props */ "./node_modules/bootstrap-vue/esm/utils/props.js");
/* harmony import */ var _mixins_attrs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../mixins/attrs */ "./node_modules/bootstrap-vue/esm/mixins/attrs.js");
/* harmony import */ var _mixins_id__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../mixins/id */ "./node_modules/bootstrap-vue/esm/mixins/id.js");
/* harmony import */ var _mixins_listen_on_document__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../mixins/listen-on-document */ "./node_modules/bootstrap-vue/esm/mixins/listen-on-document.js");
/* harmony import */ var _mixins_listen_on_root__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../mixins/listen-on-root */ "./node_modules/bootstrap-vue/esm/mixins/listen-on-root.js");
/* harmony import */ var _mixins_listen_on_window__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../mixins/listen-on-window */ "./node_modules/bootstrap-vue/esm/mixins/listen-on-window.js");
/* harmony import */ var _mixins_normalize_slot__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../mixins/normalize-slot */ "./node_modules/bootstrap-vue/esm/mixins/normalize-slot.js");
/* harmony import */ var _mixins_scoped_style__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../mixins/scoped-style */ "./node_modules/bootstrap-vue/esm/mixins/scoped-style.js");
/* harmony import */ var _button_button__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../button/button */ "./node_modules/bootstrap-vue/esm/components/button/button.js");
/* harmony import */ var _button_button_close__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../button/button-close */ "./node_modules/bootstrap-vue/esm/components/button/button-close.js");
/* harmony import */ var _transition_bv_transition__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../transition/bv-transition */ "./node_modules/bootstrap-vue/esm/components/transition/bv-transition.js");
/* harmony import */ var _transporter_transporter__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../transporter/transporter */ "./node_modules/bootstrap-vue/esm/components/transporter/transporter.js");
/* harmony import */ var _helpers_bv_modal_event_class__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./helpers/bv-modal-event.class */ "./node_modules/bootstrap-vue/esm/components/modal/helpers/bv-modal-event.class.js");
/* harmony import */ var _helpers_modal_manager__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./helpers/modal-manager */ "./node_modules/bootstrap-vue/esm/components/modal/helpers/modal-manager.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }































 // --- Constants ---

var _makeModelMixin = (0,_utils_model__WEBPACK_IMPORTED_MODULE_0__.makeModelMixin)('visible', {
  type: _constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_BOOLEAN,
  defaultValue: false,
  event: _constants_events__WEBPACK_IMPORTED_MODULE_2__.EVENT_NAME_CHANGE
}),
    modelMixin = _makeModelMixin.mixin,
    modelProps = _makeModelMixin.props,
    MODEL_PROP_NAME = _makeModelMixin.prop,
    MODEL_EVENT_NAME = _makeModelMixin.event;

var TRIGGER_BACKDROP = 'backdrop';
var TRIGGER_ESC = 'esc';
var TRIGGER_FORCE = 'FORCE';
var TRIGGER_TOGGLE = 'toggle';
var BUTTON_CANCEL = 'cancel'; // TODO: This should be renamed to 'close'

var BUTTON_CLOSE = 'headerclose';
var BUTTON_OK = 'ok';
var BUTTONS = [BUTTON_CANCEL, BUTTON_CLOSE, BUTTON_OK]; // `ObserveDom` config to detect changes in modal content
// so that we can adjust the modal padding if needed

var OBSERVER_CONFIG = {
  subtree: true,
  childList: true,
  characterData: true,
  attributes: true,
  attributeFilter: ['style', 'class']
}; // --- Props ---

var props = (0,_utils_props__WEBPACK_IMPORTED_MODULE_3__.makePropsConfigurable)((0,_utils_object__WEBPACK_IMPORTED_MODULE_4__.sortKeys)(_objectSpread(_objectSpread(_objectSpread({}, _mixins_id__WEBPACK_IMPORTED_MODULE_5__.props), modelProps), {}, {
  ariaLabel: (0,_utils_props__WEBPACK_IMPORTED_MODULE_3__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_STRING),
  autoFocusButton: (0,_utils_props__WEBPACK_IMPORTED_MODULE_3__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_STRING, null,
  /* istanbul ignore next */
  function (value) {
    return (0,_utils_inspect__WEBPACK_IMPORTED_MODULE_6__.isUndefinedOrNull)(value) || (0,_utils_array__WEBPACK_IMPORTED_MODULE_7__.arrayIncludes)(BUTTONS, value);
  }),
  bodyBgVariant: (0,_utils_props__WEBPACK_IMPORTED_MODULE_3__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_STRING),
  bodyClass: (0,_utils_props__WEBPACK_IMPORTED_MODULE_3__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_ARRAY_OBJECT_STRING),
  bodyTextVariant: (0,_utils_props__WEBPACK_IMPORTED_MODULE_3__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_STRING),
  busy: (0,_utils_props__WEBPACK_IMPORTED_MODULE_3__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_BOOLEAN, false),
  buttonSize: (0,_utils_props__WEBPACK_IMPORTED_MODULE_3__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_STRING),
  cancelDisabled: (0,_utils_props__WEBPACK_IMPORTED_MODULE_3__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_BOOLEAN, false),
  cancelTitle: (0,_utils_props__WEBPACK_IMPORTED_MODULE_3__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_STRING, 'Cancel'),
  cancelTitleHtml: (0,_utils_props__WEBPACK_IMPORTED_MODULE_3__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_STRING),
  cancelVariant: (0,_utils_props__WEBPACK_IMPORTED_MODULE_3__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_STRING, 'secondary'),
  centered: (0,_utils_props__WEBPACK_IMPORTED_MODULE_3__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_BOOLEAN, false),
  contentClass: (0,_utils_props__WEBPACK_IMPORTED_MODULE_3__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_ARRAY_OBJECT_STRING),
  dialogClass: (0,_utils_props__WEBPACK_IMPORTED_MODULE_3__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_ARRAY_OBJECT_STRING),
  footerBgVariant: (0,_utils_props__WEBPACK_IMPORTED_MODULE_3__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_STRING),
  footerBorderVariant: (0,_utils_props__WEBPACK_IMPORTED_MODULE_3__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_STRING),
  footerClass: (0,_utils_props__WEBPACK_IMPORTED_MODULE_3__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_ARRAY_OBJECT_STRING),
  footerTag: (0,_utils_props__WEBPACK_IMPORTED_MODULE_3__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_STRING, 'footer'),
  footerTextVariant: (0,_utils_props__WEBPACK_IMPORTED_MODULE_3__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_STRING),
  headerBgVariant: (0,_utils_props__WEBPACK_IMPORTED_MODULE_3__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_STRING),
  headerBorderVariant: (0,_utils_props__WEBPACK_IMPORTED_MODULE_3__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_STRING),
  headerClass: (0,_utils_props__WEBPACK_IMPORTED_MODULE_3__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_ARRAY_OBJECT_STRING),
  headerCloseContent: (0,_utils_props__WEBPACK_IMPORTED_MODULE_3__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_STRING, '&times;'),
  headerCloseLabel: (0,_utils_props__WEBPACK_IMPORTED_MODULE_3__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_STRING, 'Close'),
  headerCloseVariant: (0,_utils_props__WEBPACK_IMPORTED_MODULE_3__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_STRING),
  headerTag: (0,_utils_props__WEBPACK_IMPORTED_MODULE_3__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_STRING, 'header'),
  headerTextVariant: (0,_utils_props__WEBPACK_IMPORTED_MODULE_3__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_STRING),
  // TODO: Rename to `noBackdrop` and deprecate `hideBackdrop`
  hideBackdrop: (0,_utils_props__WEBPACK_IMPORTED_MODULE_3__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_BOOLEAN, false),
  // TODO: Rename to `noFooter` and deprecate `hideFooter`
  hideFooter: (0,_utils_props__WEBPACK_IMPORTED_MODULE_3__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_BOOLEAN, false),
  // TODO: Rename to `noHeader` and deprecate `hideHeader`
  hideHeader: (0,_utils_props__WEBPACK_IMPORTED_MODULE_3__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_BOOLEAN, false),
  // TODO: Rename to `noHeaderClose` and deprecate `hideHeaderClose`
  hideHeaderClose: (0,_utils_props__WEBPACK_IMPORTED_MODULE_3__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_BOOLEAN, false),
  ignoreEnforceFocusSelector: (0,_utils_props__WEBPACK_IMPORTED_MODULE_3__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_ARRAY_STRING),
  lazy: (0,_utils_props__WEBPACK_IMPORTED_MODULE_3__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_BOOLEAN, false),
  modalClass: (0,_utils_props__WEBPACK_IMPORTED_MODULE_3__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_ARRAY_OBJECT_STRING),
  noCloseOnBackdrop: (0,_utils_props__WEBPACK_IMPORTED_MODULE_3__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_BOOLEAN, false),
  noCloseOnEsc: (0,_utils_props__WEBPACK_IMPORTED_MODULE_3__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_BOOLEAN, false),
  noEnforceFocus: (0,_utils_props__WEBPACK_IMPORTED_MODULE_3__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_BOOLEAN, false),
  noFade: (0,_utils_props__WEBPACK_IMPORTED_MODULE_3__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_BOOLEAN, false),
  noStacking: (0,_utils_props__WEBPACK_IMPORTED_MODULE_3__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_BOOLEAN, false),
  okDisabled: (0,_utils_props__WEBPACK_IMPORTED_MODULE_3__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_BOOLEAN, false),
  okOnly: (0,_utils_props__WEBPACK_IMPORTED_MODULE_3__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_BOOLEAN, false),
  okTitle: (0,_utils_props__WEBPACK_IMPORTED_MODULE_3__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_STRING, 'OK'),
  okTitleHtml: (0,_utils_props__WEBPACK_IMPORTED_MODULE_3__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_STRING),
  okVariant: (0,_utils_props__WEBPACK_IMPORTED_MODULE_3__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_STRING, 'primary'),
  // HTML Element, CSS selector string or Vue component instance
  returnFocus: (0,_utils_props__WEBPACK_IMPORTED_MODULE_3__.makeProp)([_constants_safe_types__WEBPACK_IMPORTED_MODULE_8__.HTMLElement, _constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_OBJECT, _constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_STRING]),
  scrollable: (0,_utils_props__WEBPACK_IMPORTED_MODULE_3__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_BOOLEAN, false),
  size: (0,_utils_props__WEBPACK_IMPORTED_MODULE_3__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_STRING, 'md'),
  static: (0,_utils_props__WEBPACK_IMPORTED_MODULE_3__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_BOOLEAN, false),
  title: (0,_utils_props__WEBPACK_IMPORTED_MODULE_3__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_STRING),
  titleClass: (0,_utils_props__WEBPACK_IMPORTED_MODULE_3__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_ARRAY_OBJECT_STRING),
  titleHtml: (0,_utils_props__WEBPACK_IMPORTED_MODULE_3__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_STRING),
  titleSrOnly: (0,_utils_props__WEBPACK_IMPORTED_MODULE_3__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_BOOLEAN, false),
  titleTag: (0,_utils_props__WEBPACK_IMPORTED_MODULE_3__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_STRING, 'h5')
})), _constants_components__WEBPACK_IMPORTED_MODULE_9__.NAME_MODAL); // --- Main component ---
// @vue/component

var BModal = /*#__PURE__*/(0,_vue__WEBPACK_IMPORTED_MODULE_10__.extend)({
  name: _constants_components__WEBPACK_IMPORTED_MODULE_9__.NAME_MODAL,
  mixins: [_mixins_attrs__WEBPACK_IMPORTED_MODULE_11__.attrsMixin, _mixins_id__WEBPACK_IMPORTED_MODULE_5__.idMixin, modelMixin, _mixins_listen_on_document__WEBPACK_IMPORTED_MODULE_12__.listenOnDocumentMixin, _mixins_listen_on_root__WEBPACK_IMPORTED_MODULE_13__.listenOnRootMixin, _mixins_listen_on_window__WEBPACK_IMPORTED_MODULE_14__.listenOnWindowMixin, _mixins_normalize_slot__WEBPACK_IMPORTED_MODULE_15__.normalizeSlotMixin, _mixins_scoped_style__WEBPACK_IMPORTED_MODULE_16__.scopedStyleMixin],
  inheritAttrs: false,
  props: props,
  data: function data() {
    return {
      isHidden: true,
      // If modal should not be in document
      isVisible: false,
      // Controls modal visible state
      isTransitioning: false,
      // Used for style control
      isShow: false,
      // Used for style control
      isBlock: false,
      // Used for style control
      isOpening: false,
      // To signal that the modal is in the process of opening
      isClosing: false,
      // To signal that the modal is in the process of closing
      ignoreBackdropClick: false,
      // Used to signify if click out listener should ignore the click
      isModalOverflowing: false,
      // The following items are controlled by the modalManager instance
      scrollbarWidth: 0,
      zIndex: _helpers_modal_manager__WEBPACK_IMPORTED_MODULE_17__.modalManager.getBaseZIndex(),
      isTop: true,
      isBodyOverflowing: false
    };
  },
  computed: {
    modalId: function modalId() {
      return this.safeId();
    },
    modalOuterId: function modalOuterId() {
      return this.safeId('__BV_modal_outer_');
    },
    modalHeaderId: function modalHeaderId() {
      return this.safeId('__BV_modal_header_');
    },
    modalBodyId: function modalBodyId() {
      return this.safeId('__BV_modal_body_');
    },
    modalTitleId: function modalTitleId() {
      return this.safeId('__BV_modal_title_');
    },
    modalContentId: function modalContentId() {
      return this.safeId('__BV_modal_content_');
    },
    modalFooterId: function modalFooterId() {
      return this.safeId('__BV_modal_footer_');
    },
    modalBackdropId: function modalBackdropId() {
      return this.safeId('__BV_modal_backdrop_');
    },
    modalClasses: function modalClasses() {
      return [{
        fade: !this.noFade,
        show: this.isShow
      }, this.modalClass];
    },
    modalStyles: function modalStyles() {
      var sbWidth = "".concat(this.scrollbarWidth, "px");
      return {
        paddingLeft: !this.isBodyOverflowing && this.isModalOverflowing ? sbWidth : '',
        paddingRight: this.isBodyOverflowing && !this.isModalOverflowing ? sbWidth : '',
        // Needed to fix issue https://github.com/bootstrap-vue/bootstrap-vue/issues/3457
        // Even though we are using v-show, we must ensure 'none' is restored in the styles
        display: this.isBlock ? 'block' : 'none'
      };
    },
    dialogClasses: function dialogClasses() {
      var _ref;

      return [(_ref = {}, _defineProperty(_ref, "modal-".concat(this.size), this.size), _defineProperty(_ref, 'modal-dialog-centered', this.centered), _defineProperty(_ref, 'modal-dialog-scrollable', this.scrollable), _ref), this.dialogClass];
    },
    headerClasses: function headerClasses() {
      var _ref2;

      return [(_ref2 = {}, _defineProperty(_ref2, "bg-".concat(this.headerBgVariant), this.headerBgVariant), _defineProperty(_ref2, "text-".concat(this.headerTextVariant), this.headerTextVariant), _defineProperty(_ref2, "border-".concat(this.headerBorderVariant), this.headerBorderVariant), _ref2), this.headerClass];
    },
    titleClasses: function titleClasses() {
      return [{
        'sr-only': this.titleSrOnly
      }, this.titleClass];
    },
    bodyClasses: function bodyClasses() {
      var _ref3;

      return [(_ref3 = {}, _defineProperty(_ref3, "bg-".concat(this.bodyBgVariant), this.bodyBgVariant), _defineProperty(_ref3, "text-".concat(this.bodyTextVariant), this.bodyTextVariant), _ref3), this.bodyClass];
    },
    footerClasses: function footerClasses() {
      var _ref4;

      return [(_ref4 = {}, _defineProperty(_ref4, "bg-".concat(this.footerBgVariant), this.footerBgVariant), _defineProperty(_ref4, "text-".concat(this.footerTextVariant), this.footerTextVariant), _defineProperty(_ref4, "border-".concat(this.footerBorderVariant), this.footerBorderVariant), _ref4), this.footerClass];
    },
    modalOuterStyle: function modalOuterStyle() {
      // Styles needed for proper stacking of modals
      return {
        position: 'absolute',
        zIndex: this.zIndex
      };
    },
    slotScope: function slotScope() {
      return {
        cancel: this.onCancel,
        close: this.onClose,
        hide: this.hide,
        ok: this.onOk,
        visible: this.isVisible
      };
    },
    computeIgnoreEnforceFocusSelector: function computeIgnoreEnforceFocusSelector() {
      // Normalize to an single selector with selectors separated by `,`
      return (0,_utils_array__WEBPACK_IMPORTED_MODULE_7__.concat)(this.ignoreEnforceFocusSelector).filter(_utils_identity__WEBPACK_IMPORTED_MODULE_18__.identity).join(',').trim();
    },
    computedAttrs: function computedAttrs() {
      // If the parent has a scoped style attribute, and the modal
      // is portalled, add the scoped attribute to the modal wrapper
      var scopedStyleAttrs = !this.static ? this.scopedStyleAttrs : {};
      return _objectSpread(_objectSpread(_objectSpread({}, scopedStyleAttrs), this.bvAttrs), {}, {
        id: this.modalOuterId
      });
    },
    computedModalAttrs: function computedModalAttrs() {
      var isVisible = this.isVisible,
          ariaLabel = this.ariaLabel;
      return {
        id: this.modalId,
        role: 'dialog',
        'aria-hidden': isVisible ? null : 'true',
        'aria-modal': isVisible ? 'true' : null,
        'aria-label': ariaLabel,
        'aria-labelledby': this.hideHeader || ariaLabel || // TODO: Rename slot to `title` and deprecate `modal-title`
        !(this.hasNormalizedSlot(_constants_slots__WEBPACK_IMPORTED_MODULE_19__.SLOT_NAME_MODAL_TITLE) || this.titleHtml || this.title) ? null : this.modalTitleId,
        'aria-describedby': this.modalBodyId
      };
    }
  },
  watch: _defineProperty({}, MODEL_PROP_NAME, function (newValue, oldValue) {
    if (newValue !== oldValue) {
      this[newValue ? 'show' : 'hide']();
    }
  }),
  created: function created() {
    // Define non-reactive properties
    this.$_observer = null;
    this.$_returnFocus = this.returnFocus || null;
  },
  mounted: function mounted() {
    // Set initial z-index as queried from the DOM
    this.zIndex = _helpers_modal_manager__WEBPACK_IMPORTED_MODULE_17__.modalManager.getBaseZIndex(); // Listen for events from others to either open or close ourselves
    // and listen to all modals to enable/disable enforce focus

    this.listenOnRoot((0,_utils_events__WEBPACK_IMPORTED_MODULE_20__.getRootActionEventName)(_constants_components__WEBPACK_IMPORTED_MODULE_9__.NAME_MODAL, _constants_events__WEBPACK_IMPORTED_MODULE_2__.EVENT_NAME_SHOW), this.showHandler);
    this.listenOnRoot((0,_utils_events__WEBPACK_IMPORTED_MODULE_20__.getRootActionEventName)(_constants_components__WEBPACK_IMPORTED_MODULE_9__.NAME_MODAL, _constants_events__WEBPACK_IMPORTED_MODULE_2__.EVENT_NAME_HIDE), this.hideHandler);
    this.listenOnRoot((0,_utils_events__WEBPACK_IMPORTED_MODULE_20__.getRootActionEventName)(_constants_components__WEBPACK_IMPORTED_MODULE_9__.NAME_MODAL, _constants_events__WEBPACK_IMPORTED_MODULE_2__.EVENT_NAME_TOGGLE), this.toggleHandler); // Listen for `bv:modal::show events`, and close ourselves if the
    // opening modal not us

    this.listenOnRoot((0,_utils_events__WEBPACK_IMPORTED_MODULE_20__.getRootEventName)(_constants_components__WEBPACK_IMPORTED_MODULE_9__.NAME_MODAL, _constants_events__WEBPACK_IMPORTED_MODULE_2__.EVENT_NAME_SHOW), this.modalListener); // Initially show modal?

    if (this[MODEL_PROP_NAME] === true) {
      this.$nextTick(this.show);
    }
  },
  beforeDestroy: function beforeDestroy() {
    // Ensure everything is back to normal
    _helpers_modal_manager__WEBPACK_IMPORTED_MODULE_17__.modalManager.unregisterModal(this);
    this.setObserver(false);

    if (this.isVisible) {
      this.isVisible = false;
      this.isShow = false;
      this.isTransitioning = false;
    }
  },
  methods: {
    setObserver: function setObserver() {
      var on = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this.$_observer && this.$_observer.disconnect();
      this.$_observer = null;

      if (on) {
        this.$_observer = (0,_utils_observe_dom__WEBPACK_IMPORTED_MODULE_21__.observeDom)(this.$refs.content, this.checkModalOverflow.bind(this), OBSERVER_CONFIG);
      }
    },
    // Private method to update the v-model
    updateModel: function updateModel(value) {
      if (value !== this[MODEL_PROP_NAME]) {
        this.$emit(MODEL_EVENT_NAME, value);
      }
    },
    // Private method to create a BvModalEvent object
    buildEvent: function buildEvent(type) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return new _helpers_bv_modal_event_class__WEBPACK_IMPORTED_MODULE_22__.BvModalEvent(type, _objectSpread(_objectSpread({
        // Default options
        cancelable: false,
        target: this.$refs.modal || this.$el || null,
        relatedTarget: null,
        trigger: null
      }, options), {}, {
        // Options that can't be overridden
        vueTarget: this,
        componentId: this.modalId
      }));
    },
    // Public method to show modal
    show: function show() {
      if (this.isVisible || this.isOpening) {
        // If already open, or in the process of opening, do nothing

        /* istanbul ignore next */
        return;
      }
      /* istanbul ignore next */


      if (this.isClosing) {
        // If we are in the process of closing, wait until hidden before re-opening

        /* istanbul ignore next */
        this.$once(_constants_events__WEBPACK_IMPORTED_MODULE_2__.EVENT_NAME_HIDDEN, this.show);
        /* istanbul ignore next */

        return;
      }

      this.isOpening = true; // Set the element to return focus to when closed

      this.$_returnFocus = this.$_returnFocus || this.getActiveElement();
      var showEvent = this.buildEvent(_constants_events__WEBPACK_IMPORTED_MODULE_2__.EVENT_NAME_SHOW, {
        cancelable: true
      });
      this.emitEvent(showEvent); // Don't show if canceled

      if (showEvent.defaultPrevented || this.isVisible) {
        this.isOpening = false; // Ensure the v-model reflects the current state

        this.updateModel(false);
        return;
      } // Show the modal


      this.doShow();
    },
    // Public method to hide modal
    hide: function hide() {
      var trigger = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

      if (!this.isVisible || this.isClosing) {
        /* istanbul ignore next */
        return;
      }

      this.isClosing = true;
      var hideEvent = this.buildEvent(_constants_events__WEBPACK_IMPORTED_MODULE_2__.EVENT_NAME_HIDE, {
        cancelable: trigger !== TRIGGER_FORCE,
        trigger: trigger || null
      }); // We emit specific event for one of the three built-in buttons

      if (trigger === BUTTON_OK) {
        this.$emit(_constants_events__WEBPACK_IMPORTED_MODULE_2__.EVENT_NAME_OK, hideEvent);
      } else if (trigger === BUTTON_CANCEL) {
        this.$emit(_constants_events__WEBPACK_IMPORTED_MODULE_2__.EVENT_NAME_CANCEL, hideEvent);
      } else if (trigger === BUTTON_CLOSE) {
        this.$emit(_constants_events__WEBPACK_IMPORTED_MODULE_2__.EVENT_NAME_CLOSE, hideEvent);
      }

      this.emitEvent(hideEvent); // Hide if not canceled

      if (hideEvent.defaultPrevented || !this.isVisible) {
        this.isClosing = false; // Ensure v-model reflects current state

        this.updateModel(true);
        return;
      } // Stop observing for content changes


      this.setObserver(false); // Trigger the hide transition

      this.isVisible = false; // Update the v-model

      this.updateModel(false);
    },
    // Public method to toggle modal visibility
    toggle: function toggle(triggerEl) {
      if (triggerEl) {
        this.$_returnFocus = triggerEl;
      }

      if (this.isVisible) {
        this.hide(TRIGGER_TOGGLE);
      } else {
        this.show();
      }
    },
    // Private method to get the current document active element
    getActiveElement: function getActiveElement() {
      // Returning focus to `document.body` may cause unwanted scrolls,
      // so we exclude setting focus on body
      var activeElement = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_23__.getActiveElement)(_constants_env__WEBPACK_IMPORTED_MODULE_24__.IS_BROWSER ? [document.body] : []); // Preset the fallback return focus value if it is not set
      // `document.activeElement` should be the trigger element that was clicked or
      // in the case of using the v-model, which ever element has current focus
      // Will be overridden by some commands such as toggle, etc.
      // Note: On IE 11, `document.activeElement` may be `null`
      // So we test it for truthiness first
      // https://github.com/bootstrap-vue/bootstrap-vue/issues/3206


      return activeElement && activeElement.focus ? activeElement : null;
    },
    // Private method to finish showing modal
    doShow: function doShow() {
      var _this = this;

      /* istanbul ignore next: commenting out for now until we can test stacking */
      if (_helpers_modal_manager__WEBPACK_IMPORTED_MODULE_17__.modalManager.modalsAreOpen && this.noStacking) {
        // If another modal(s) is already open, wait for it(them) to close
        this.listenOnRootOnce((0,_utils_events__WEBPACK_IMPORTED_MODULE_20__.getRootEventName)(_constants_components__WEBPACK_IMPORTED_MODULE_9__.NAME_MODAL, _constants_events__WEBPACK_IMPORTED_MODULE_2__.EVENT_NAME_HIDDEN), this.doShow);
        return;
      }

      _helpers_modal_manager__WEBPACK_IMPORTED_MODULE_17__.modalManager.registerModal(this); // Place modal in DOM

      this.isHidden = false;
      this.$nextTick(function () {
        // We do this in `$nextTick()` to ensure the modal is in DOM first
        // before we show it
        _this.isVisible = true;
        _this.isOpening = false; // Update the v-model

        _this.updateModel(true);

        _this.$nextTick(function () {
          // Observe changes in modal content and adjust if necessary
          // In a `$nextTick()` in case modal content is lazy
          _this.setObserver(true);
        });
      });
    },
    // Transition handlers
    onBeforeEnter: function onBeforeEnter() {
      this.isTransitioning = true;
      this.setResizeEvent(true);
    },
    onEnter: function onEnter() {
      var _this2 = this;

      this.isBlock = true; // We add the `show` class 1 frame later
      // `requestAF()` runs the callback before the next repaint, so we need
      // two calls to guarantee the next frame has been rendered

      (0,_utils_dom__WEBPACK_IMPORTED_MODULE_23__.requestAF)(function () {
        (0,_utils_dom__WEBPACK_IMPORTED_MODULE_23__.requestAF)(function () {
          _this2.isShow = true;
        });
      });
    },
    onAfterEnter: function onAfterEnter() {
      var _this3 = this;

      this.checkModalOverflow();
      this.isTransitioning = false; // We use `requestAF()` to allow transition hooks to complete
      // before passing control over to the other handlers
      // This will allow users to not have to use `$nextTick()` or `requestAF()`
      // when trying to pre-focus an element

      (0,_utils_dom__WEBPACK_IMPORTED_MODULE_23__.requestAF)(function () {
        _this3.emitEvent(_this3.buildEvent(_constants_events__WEBPACK_IMPORTED_MODULE_2__.EVENT_NAME_SHOWN));

        _this3.setEnforceFocus(true);

        _this3.$nextTick(function () {
          // Delayed in a `$nextTick()` to allow users time to pre-focus
          // an element if the wish
          _this3.focusFirst();
        });
      });
    },
    onBeforeLeave: function onBeforeLeave() {
      this.isTransitioning = true;
      this.setResizeEvent(false);
      this.setEnforceFocus(false);
    },
    onLeave: function onLeave() {
      // Remove the 'show' class
      this.isShow = false;
    },
    onAfterLeave: function onAfterLeave() {
      var _this4 = this;

      this.isBlock = false;
      this.isTransitioning = false;
      this.isModalOverflowing = false;
      this.isHidden = true;
      this.$nextTick(function () {
        _this4.isClosing = false;
        _helpers_modal_manager__WEBPACK_IMPORTED_MODULE_17__.modalManager.unregisterModal(_this4);

        _this4.returnFocusTo(); // TODO: Need to find a way to pass the `trigger` property
        //       to the `hidden` event, not just only the `hide` event


        _this4.emitEvent(_this4.buildEvent(_constants_events__WEBPACK_IMPORTED_MODULE_2__.EVENT_NAME_HIDDEN));
      });
    },
    emitEvent: function emitEvent(bvEvent) {
      var type = bvEvent.type; // We emit on `$root` first in case a global listener wants to cancel
      // the event first before the instance emits its event

      this.emitOnRoot((0,_utils_events__WEBPACK_IMPORTED_MODULE_20__.getRootEventName)(_constants_components__WEBPACK_IMPORTED_MODULE_9__.NAME_MODAL, type), bvEvent, bvEvent.componentId);
      this.$emit(type, bvEvent);
    },
    // UI event handlers
    onDialogMousedown: function onDialogMousedown() {
      var _this5 = this;

      // Watch to see if the matching mouseup event occurs outside the dialog
      // And if it does, cancel the clickOut handler
      var modal = this.$refs.modal;

      var onceModalMouseup = function onceModalMouseup(event) {
        (0,_utils_events__WEBPACK_IMPORTED_MODULE_20__.eventOff)(modal, 'mouseup', onceModalMouseup, _constants_events__WEBPACK_IMPORTED_MODULE_2__.EVENT_OPTIONS_NO_CAPTURE);

        if (event.target === modal) {
          _this5.ignoreBackdropClick = true;
        }
      };

      (0,_utils_events__WEBPACK_IMPORTED_MODULE_20__.eventOn)(modal, 'mouseup', onceModalMouseup, _constants_events__WEBPACK_IMPORTED_MODULE_2__.EVENT_OPTIONS_NO_CAPTURE);
    },
    onClickOut: function onClickOut(event) {
      if (this.ignoreBackdropClick) {
        // Click was initiated inside the modal content, but finished outside.
        // Set by the above onDialogMousedown handler
        this.ignoreBackdropClick = false;
        return;
      } // Do nothing if not visible, backdrop click disabled, or element
      // that generated click event is no longer in document body


      if (!this.isVisible || this.noCloseOnBackdrop || !(0,_utils_dom__WEBPACK_IMPORTED_MODULE_23__.contains)(document.body, event.target)) {
        return;
      } // If backdrop clicked, hide modal


      if (!(0,_utils_dom__WEBPACK_IMPORTED_MODULE_23__.contains)(this.$refs.content, event.target)) {
        this.hide(TRIGGER_BACKDROP);
      }
    },
    onOk: function onOk() {
      this.hide(BUTTON_OK);
    },
    onCancel: function onCancel() {
      this.hide(BUTTON_CANCEL);
    },
    onClose: function onClose() {
      this.hide(BUTTON_CLOSE);
    },
    onEsc: function onEsc(event) {
      // If ESC pressed, hide modal
      if (event.keyCode === _constants_key_codes__WEBPACK_IMPORTED_MODULE_25__.CODE_ESC && this.isVisible && !this.noCloseOnEsc) {
        this.hide(TRIGGER_ESC);
      }
    },
    // Document focusin listener
    focusHandler: function focusHandler(event) {
      // If focus leaves modal content, bring it back
      var content = this.$refs.content;
      var target = event.target;

      if (this.noEnforceFocus || !this.isTop || !this.isVisible || !content || document === target || (0,_utils_dom__WEBPACK_IMPORTED_MODULE_23__.contains)(content, target) || this.computeIgnoreEnforceFocusSelector && (0,_utils_dom__WEBPACK_IMPORTED_MODULE_23__.closest)(this.computeIgnoreEnforceFocusSelector, target, true)) {
        return;
      }

      var tabables = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_23__.getTabables)(this.$refs.content);
      var bottomTrap = this.$refs['bottom-trap'];
      var topTrap = this.$refs['top-trap'];

      if (bottomTrap && target === bottomTrap) {
        // If user pressed TAB out of modal into our bottom trab trap element
        // Find the first tabable element in the modal content and focus it
        if ((0,_utils_dom__WEBPACK_IMPORTED_MODULE_23__.attemptFocus)(tabables[0])) {
          // Focus was successful
          return;
        }
      } else if (topTrap && target === topTrap) {
        // If user pressed CTRL-TAB out of modal and into our top tab trap element
        // Find the last tabable element in the modal content and focus it
        if ((0,_utils_dom__WEBPACK_IMPORTED_MODULE_23__.attemptFocus)(tabables[tabables.length - 1])) {
          // Focus was successful
          return;
        }
      } // Otherwise focus the modal content container


      (0,_utils_dom__WEBPACK_IMPORTED_MODULE_23__.attemptFocus)(content, {
        preventScroll: true
      });
    },
    // Turn on/off focusin listener
    setEnforceFocus: function setEnforceFocus(on) {
      this.listenDocument(on, 'focusin', this.focusHandler);
    },
    // Resize listener
    setResizeEvent: function setResizeEvent(on) {
      this.listenWindow(on, 'resize', this.checkModalOverflow);
      this.listenWindow(on, 'orientationchange', this.checkModalOverflow);
    },
    // Root listener handlers
    showHandler: function showHandler(id, triggerEl) {
      if (id === this.modalId) {
        this.$_returnFocus = triggerEl || this.getActiveElement();
        this.show();
      }
    },
    hideHandler: function hideHandler(id) {
      if (id === this.modalId) {
        this.hide('event');
      }
    },
    toggleHandler: function toggleHandler(id, triggerEl) {
      if (id === this.modalId) {
        this.toggle(triggerEl);
      }
    },
    modalListener: function modalListener(bvEvent) {
      // If another modal opens, close this one if stacking not permitted
      if (this.noStacking && bvEvent.vueTarget !== this) {
        this.hide();
      }
    },
    // Focus control handlers
    focusFirst: function focusFirst() {
      var _this6 = this;

      // Don't try and focus if we are SSR
      if (_constants_env__WEBPACK_IMPORTED_MODULE_24__.IS_BROWSER) {
        (0,_utils_dom__WEBPACK_IMPORTED_MODULE_23__.requestAF)(function () {
          var modal = _this6.$refs.modal;
          var content = _this6.$refs.content;

          var activeElement = _this6.getActiveElement(); // If the modal contains the activeElement, we don't do anything


          if (modal && content && !(activeElement && (0,_utils_dom__WEBPACK_IMPORTED_MODULE_23__.contains)(content, activeElement))) {
            var ok = _this6.$refs['ok-button'];
            var cancel = _this6.$refs['cancel-button'];
            var close = _this6.$refs['close-button']; // Focus the appropriate button or modal content wrapper

            var autoFocus = _this6.autoFocusButton;
            /* istanbul ignore next */

            var el = autoFocus === BUTTON_OK && ok ? ok.$el || ok : autoFocus === BUTTON_CANCEL && cancel ? cancel.$el || cancel : autoFocus === BUTTON_CLOSE && close ? close.$el || close : content; // Focus the element

            (0,_utils_dom__WEBPACK_IMPORTED_MODULE_23__.attemptFocus)(el);

            if (el === content) {
              // Make sure top of modal is showing (if longer than the viewport)
              _this6.$nextTick(function () {
                modal.scrollTop = 0;
              });
            }
          }
        });
      }
    },
    returnFocusTo: function returnFocusTo() {
      // Prefer `returnFocus` prop over event specified
      // `return_focus` value
      var el = this.returnFocus || this.$_returnFocus || null;
      this.$_returnFocus = null;
      this.$nextTick(function () {
        // Is el a string CSS selector?
        el = (0,_utils_inspect__WEBPACK_IMPORTED_MODULE_6__.isString)(el) ? (0,_utils_dom__WEBPACK_IMPORTED_MODULE_23__.select)(el) : el;

        if (el) {
          // Possibly could be a component reference
          el = el.$el || el;
          (0,_utils_dom__WEBPACK_IMPORTED_MODULE_23__.attemptFocus)(el);
        }
      });
    },
    checkModalOverflow: function checkModalOverflow() {
      if (this.isVisible) {
        var modal = this.$refs.modal;
        this.isModalOverflowing = modal.scrollHeight > document.documentElement.clientHeight;
      }
    },
    makeModal: function makeModal(h) {
      // Modal header
      var $header = h();

      if (!this.hideHeader) {
        // TODO: Rename slot to `header` and deprecate `modal-header`
        var $modalHeader = this.normalizeSlot(_constants_slots__WEBPACK_IMPORTED_MODULE_19__.SLOT_NAME_MODAL_HEADER, this.slotScope);

        if (!$modalHeader) {
          var $closeButton = h();

          if (!this.hideHeaderClose) {
            $closeButton = h(_button_button_close__WEBPACK_IMPORTED_MODULE_26__.BButtonClose, {
              props: {
                content: this.headerCloseContent,
                disabled: this.isTransitioning,
                ariaLabel: this.headerCloseLabel,
                textVariant: this.headerCloseVariant || this.headerTextVariant
              },
              on: {
                click: this.onClose
              },
              ref: 'close-button'
            }, // TODO: Rename slot to `header-close` and deprecate `modal-header-close`
            [this.normalizeSlot(_constants_slots__WEBPACK_IMPORTED_MODULE_19__.SLOT_NAME_MODAL_HEADER_CLOSE)]);
          }

          $modalHeader = [h(this.titleTag, {
            staticClass: 'modal-title',
            class: this.titleClasses,
            attrs: {
              id: this.modalTitleId
            },
            // TODO: Rename slot to `title` and deprecate `modal-title`
            domProps: this.hasNormalizedSlot(_constants_slots__WEBPACK_IMPORTED_MODULE_19__.SLOT_NAME_MODAL_TITLE) ? {} : (0,_utils_html__WEBPACK_IMPORTED_MODULE_27__.htmlOrText)(this.titleHtml, this.title)
          }, // TODO: Rename slot to `title` and deprecate `modal-title`
          this.normalizeSlot(_constants_slots__WEBPACK_IMPORTED_MODULE_19__.SLOT_NAME_MODAL_TITLE, this.slotScope)), $closeButton];
        }

        $header = h(this.headerTag, {
          staticClass: 'modal-header',
          class: this.headerClasses,
          attrs: {
            id: this.modalHeaderId
          },
          ref: 'header'
        }, [$modalHeader]);
      } // Modal body


      var $body = h('div', {
        staticClass: 'modal-body',
        class: this.bodyClasses,
        attrs: {
          id: this.modalBodyId
        },
        ref: 'body'
      }, this.normalizeSlot(_constants_slots__WEBPACK_IMPORTED_MODULE_19__.SLOT_NAME_DEFAULT, this.slotScope)); // Modal footer

      var $footer = h();

      if (!this.hideFooter) {
        // TODO: Rename slot to `footer` and deprecate `modal-footer`
        var $modalFooter = this.normalizeSlot(_constants_slots__WEBPACK_IMPORTED_MODULE_19__.SLOT_NAME_MODAL_FOOTER, this.slotScope);

        if (!$modalFooter) {
          var $cancelButton = h();

          if (!this.okOnly) {
            $cancelButton = h(_button_button__WEBPACK_IMPORTED_MODULE_28__.BButton, {
              props: {
                variant: this.cancelVariant,
                size: this.buttonSize,
                disabled: this.cancelDisabled || this.busy || this.isTransitioning
              },
              // TODO: Rename slot to `cancel-button` and deprecate `modal-cancel`
              domProps: this.hasNormalizedSlot(_constants_slots__WEBPACK_IMPORTED_MODULE_19__.SLOT_NAME_MODAL_CANCEL) ? {} : (0,_utils_html__WEBPACK_IMPORTED_MODULE_27__.htmlOrText)(this.cancelTitleHtml, this.cancelTitle),
              on: {
                click: this.onCancel
              },
              ref: 'cancel-button'
            }, // TODO: Rename slot to `cancel-button` and deprecate `modal-cancel`
            this.normalizeSlot(_constants_slots__WEBPACK_IMPORTED_MODULE_19__.SLOT_NAME_MODAL_CANCEL));
          }

          var $okButton = h(_button_button__WEBPACK_IMPORTED_MODULE_28__.BButton, {
            props: {
              variant: this.okVariant,
              size: this.buttonSize,
              disabled: this.okDisabled || this.busy || this.isTransitioning
            },
            // TODO: Rename slot to `ok-button` and deprecate `modal-ok`
            domProps: this.hasNormalizedSlot(_constants_slots__WEBPACK_IMPORTED_MODULE_19__.SLOT_NAME_MODAL_OK) ? {} : (0,_utils_html__WEBPACK_IMPORTED_MODULE_27__.htmlOrText)(this.okTitleHtml, this.okTitle),
            on: {
              click: this.onOk
            },
            ref: 'ok-button'
          }, // TODO: Rename slot to `ok-button` and deprecate `modal-ok`
          this.normalizeSlot(_constants_slots__WEBPACK_IMPORTED_MODULE_19__.SLOT_NAME_MODAL_OK));
          $modalFooter = [$cancelButton, $okButton];
        }

        $footer = h(this.footerTag, {
          staticClass: 'modal-footer',
          class: this.footerClasses,
          attrs: {
            id: this.modalFooterId
          },
          ref: 'footer'
        }, [$modalFooter]);
      } // Assemble modal content


      var $modalContent = h('div', {
        staticClass: 'modal-content',
        class: this.contentClass,
        attrs: {
          id: this.modalContentId,
          tabindex: '-1'
        },
        ref: 'content'
      }, [$header, $body, $footer]); // Tab traps to prevent page from scrolling to next element in
      // tab index during enforce-focus tab cycle

      var $tabTrapTop = h();
      var $tabTrapBottom = h();

      if (this.isVisible && !this.noEnforceFocus) {
        $tabTrapTop = h('span', {
          attrs: {
            tabindex: '0'
          },
          ref: 'top-trap'
        });
        $tabTrapBottom = h('span', {
          attrs: {
            tabindex: '0'
          },
          ref: 'bottom-trap'
        });
      } // Modal dialog wrapper


      var $modalDialog = h('div', {
        staticClass: 'modal-dialog',
        class: this.dialogClasses,
        on: {
          mousedown: this.onDialogMousedown
        },
        ref: 'dialog'
      }, [$tabTrapTop, $modalContent, $tabTrapBottom]); // Modal

      var $modal = h('div', {
        staticClass: 'modal',
        class: this.modalClasses,
        style: this.modalStyles,
        attrs: this.computedModalAttrs,
        on: {
          keydown: this.onEsc,
          click: this.onClickOut
        },
        directives: [{
          name: 'show',
          value: this.isVisible
        }],
        ref: 'modal'
      }, [$modalDialog]); // Wrap modal in transition
      // Sadly, we can't use `BVTransition` here due to the differences in
      // transition durations for `.modal` and `.modal-dialog`
      // At least until https://github.com/vuejs/vue/issues/9986 is resolved

      $modal = h('transition', {
        props: {
          enterClass: '',
          enterToClass: '',
          enterActiveClass: '',
          leaveClass: '',
          leaveActiveClass: '',
          leaveToClass: ''
        },
        on: {
          beforeEnter: this.onBeforeEnter,
          enter: this.onEnter,
          afterEnter: this.onAfterEnter,
          beforeLeave: this.onBeforeLeave,
          leave: this.onLeave,
          afterLeave: this.onAfterLeave
        }
      }, [$modal]); // Modal backdrop

      var $backdrop = h();

      if (!this.hideBackdrop && this.isVisible) {
        $backdrop = h('div', {
          staticClass: 'modal-backdrop',
          attrs: {
            id: this.modalBackdropId
          }
        }, // TODO: Rename slot to `backdrop` and deprecate `modal-backdrop`
        this.normalizeSlot(_constants_slots__WEBPACK_IMPORTED_MODULE_19__.SLOT_NAME_MODAL_BACKDROP));
      }

      $backdrop = h(_transition_bv_transition__WEBPACK_IMPORTED_MODULE_29__.BVTransition, {
        props: {
          noFade: this.noFade
        }
      }, [$backdrop]); // Assemble modal and backdrop in an outer <div>

      return h('div', {
        style: this.modalOuterStyle,
        attrs: this.computedAttrs,
        key: "modal-outer-".concat(this[_vue__WEBPACK_IMPORTED_MODULE_10__.COMPONENT_UID_KEY])
      }, [$modal, $backdrop]);
    }
  },
  render: function render(h) {
    if (this.static) {
      return this.lazy && this.isHidden ? h() : this.makeModal(h);
    } else {
      return this.isHidden ? h() : h(_transporter_transporter__WEBPACK_IMPORTED_MODULE_30__.BVTransporter, [this.makeModal(h)]);
    }
  }
});

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/components/transition/bv-transition.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/components/transition/bv-transition.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BVTransition": () => (/* binding */ BVTransition),
/* harmony export */   "props": () => (/* binding */ props)
/* harmony export */ });
/* harmony import */ var _vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../vue */ "./node_modules/bootstrap-vue/esm/vue.js");
/* harmony import */ var _vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../vue */ "./node_modules/vue-functional-data-merge/dist/lib.esm.js");
/* harmony import */ var _constants_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants/components */ "./node_modules/bootstrap-vue/esm/constants/components.js");
/* harmony import */ var _constants_props__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/props */ "./node_modules/bootstrap-vue/esm/constants/props.js");
/* harmony import */ var _utils_inspect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/inspect */ "./node_modules/bootstrap-vue/esm/utils/inspect.js");
/* harmony import */ var _utils_props__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/props */ "./node_modules/bootstrap-vue/esm/utils/props.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Generic Bootstrap v4 fade (no-fade) transition component
//
// Assumes that `show` class is not required when
// the transition has finished the enter transition
// (show and fade classes are only applied during transition)




 // --- Constants ---

var NO_FADE_PROPS = {
  name: '',
  enterClass: '',
  enterActiveClass: '',
  enterToClass: 'show',
  leaveClass: 'show',
  leaveActiveClass: '',
  leaveToClass: ''
};

var FADE_PROPS = _objectSpread(_objectSpread({}, NO_FADE_PROPS), {}, {
  enterActiveClass: 'fade',
  leaveActiveClass: 'fade'
}); // --- Props ---


var props = {
  // Has no effect if `trans-props` provided
  appear: (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_BOOLEAN, false),
  // Can be overridden by user supplied `trans-props`
  mode: (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_STRING),
  // Only applicable to the built in transition
  // Has no effect if `trans-props` provided
  noFade: (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_BOOLEAN, false),
  // For user supplied transitions (if needed)
  transProps: (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_OBJECT)
}; // --- Main component ---
// @vue/component

var BVTransition = /*#__PURE__*/(0,_vue__WEBPACK_IMPORTED_MODULE_2__.extend)({
  name: _constants_components__WEBPACK_IMPORTED_MODULE_3__.NAME_TRANSITION,
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var children = _ref.children,
        data = _ref.data,
        props = _ref.props;
    var transProps = props.transProps;

    if (!(0,_utils_inspect__WEBPACK_IMPORTED_MODULE_4__.isPlainObject)(transProps)) {
      transProps = props.noFade ? NO_FADE_PROPS : FADE_PROPS;

      if (props.appear) {
        // Default the appear classes to equal the enter classes
        transProps = _objectSpread(_objectSpread({}, transProps), {}, {
          appear: true,
          appearClass: transProps.enterClass,
          appearActiveClass: transProps.enterActiveClass,
          appearToClass: transProps.enterToClass
        });
      }
    }

    transProps = _objectSpread(_objectSpread({
      mode: props.mode
    }, transProps), {}, {
      // We always need `css` true
      css: true
    });

    var dataCopy = _objectSpread({}, data);

    delete dataCopy.props;
    return h('transition', // Any transition event listeners will get merged here
    (0,_vue__WEBPACK_IMPORTED_MODULE_5__.mergeData)(dataCopy, {
      props: transProps
    }), children);
  }
});

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/components/transporter/transporter.js":
/*!******************************************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/components/transporter/transporter.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BVTransporter": () => (/* binding */ BVTransporter),
/* harmony export */   "props": () => (/* binding */ props)
/* harmony export */ });
/* harmony import */ var _vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../vue */ "./node_modules/bootstrap-vue/esm/vue.js");
/* harmony import */ var _vue__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var _constants_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/components */ "./node_modules/bootstrap-vue/esm/constants/components.js");
/* harmony import */ var _constants_env__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../constants/env */ "./node_modules/bootstrap-vue/esm/constants/env.js");
/* harmony import */ var _constants_props__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants/props */ "./node_modules/bootstrap-vue/esm/constants/props.js");
/* harmony import */ var _constants_safe_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../constants/safe-types */ "./node_modules/bootstrap-vue/esm/constants/safe-types.js");
/* harmony import */ var _utils_array__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/array */ "./node_modules/bootstrap-vue/esm/utils/array.js");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/dom */ "./node_modules/bootstrap-vue/esm/utils/dom.js");
/* harmony import */ var _utils_identity__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/identity */ "./node_modules/bootstrap-vue/esm/utils/identity.js");
/* harmony import */ var _utils_inspect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/inspect */ "./node_modules/bootstrap-vue/esm/utils/inspect.js");
/* harmony import */ var _mixins_normalize_slot__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../mixins/normalize-slot */ "./node_modules/bootstrap-vue/esm/mixins/normalize-slot.js");
/* harmony import */ var _utils_props__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/props */ "./node_modules/bootstrap-vue/esm/utils/props.js");
/* harmony import */ var _utils_create_new_child_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../utils/create-new-child-component */ "./node_modules/bootstrap-vue/esm/utils/create-new-child-component.js");











 // --- Helper components ---
// BVTransporter/BVTransporterTarget:
//
// Single root node portaling of content, which retains parent/child hierarchy
// Unlike Portal-Vue where portaled content is no longer a descendent of its
// intended parent components
//
// Private components for use by Tooltips, Popovers and Modals
//
// Based on vue-simple-portal
// https://github.com/LinusBorg/vue-simple-portal
// Transporter target used by BVTransporter
// Supports only a single root element
// @vue/component

var BVTransporterTarget = /*#__PURE__*/(0,_vue__WEBPACK_IMPORTED_MODULE_0__.extend)({
  // As an abstract component, it doesn't appear in the $parent chain of
  // components, which means the next parent of any component rendered inside
  // of this one will be the parent from which is was portal'd
  abstract: true,
  name: _constants_components__WEBPACK_IMPORTED_MODULE_1__.NAME_TRANSPORTER_TARGET,
  props: {
    // Even though we only support a single root element,
    // VNodes are always passed as an array
    nodes: (0,_utils_props__WEBPACK_IMPORTED_MODULE_2__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_3__.PROP_TYPE_ARRAY_FUNCTION)
  },
  data: function data(vm) {
    return {
      updatedNodes: vm.nodes
    };
  },
  destroyed: function destroyed() {
    (0,_utils_dom__WEBPACK_IMPORTED_MODULE_4__.removeNode)(this.$el);
  },
  render: function render(h) {
    var updatedNodes = this.updatedNodes;
    var $nodes = (0,_utils_inspect__WEBPACK_IMPORTED_MODULE_5__.isFunction)(updatedNodes) ? updatedNodes({}) : updatedNodes;
    $nodes = (0,_utils_array__WEBPACK_IMPORTED_MODULE_6__.concat)($nodes).filter(_utils_identity__WEBPACK_IMPORTED_MODULE_7__.identity);

    if ($nodes && $nodes.length > 0 && !$nodes[0].text) {
      return $nodes[0];
    }
    /* istanbul ignore next */


    return h();
  }
}); // --- Props ---

var props = {
  // String: CSS selector,
  // HTMLElement: Element reference
  // Mainly needed for tooltips/popovers inside modals
  container: (0,_utils_props__WEBPACK_IMPORTED_MODULE_2__.makeProp)([_constants_safe_types__WEBPACK_IMPORTED_MODULE_8__.HTMLElement, _constants_props__WEBPACK_IMPORTED_MODULE_3__.PROP_TYPE_STRING], 'body'),
  disabled: (0,_utils_props__WEBPACK_IMPORTED_MODULE_2__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_3__.PROP_TYPE_BOOLEAN, false),
  // This should be set to match the root element type
  tag: (0,_utils_props__WEBPACK_IMPORTED_MODULE_2__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_3__.PROP_TYPE_STRING, 'div')
}; // --- Main component ---
// @vue/component

var BVTransporterVue2 = /*#__PURE__*/(0,_vue__WEBPACK_IMPORTED_MODULE_0__.extend)({
  name: _constants_components__WEBPACK_IMPORTED_MODULE_1__.NAME_TRANSPORTER,
  mixins: [_mixins_normalize_slot__WEBPACK_IMPORTED_MODULE_9__.normalizeSlotMixin],
  props: props,
  watch: {
    disabled: {
      immediate: true,
      handler: function handler(disabled) {
        disabled ? this.unmountTarget() : this.$nextTick(this.mountTarget);
      }
    }
  },
  created: function created() {
    // Create private non-reactive props
    this.$_defaultFn = null;
    this.$_target = null;
  },
  beforeMount: function beforeMount() {
    this.mountTarget();
  },
  updated: function updated() {
    // We need to make sure that all children have completed updating
    // before rendering in the target
    // `vue-simple-portal` has the this in a `$nextTick()`,
    // while `portal-vue` doesn't
    // Just trying to see if the `$nextTick()` delay is required or not
    // Since all slots in Vue 2.6.x are always functions
    this.updateTarget();
  },
  beforeDestroy: function beforeDestroy() {
    this.unmountTarget();
    this.$_defaultFn = null;
  },
  methods: {
    // Get the element which the target should be appended to
    getContainer: function getContainer() {
      /* istanbul ignore else */
      if (_constants_env__WEBPACK_IMPORTED_MODULE_10__.IS_BROWSER) {
        var container = this.container;
        return (0,_utils_inspect__WEBPACK_IMPORTED_MODULE_5__.isString)(container) ? (0,_utils_dom__WEBPACK_IMPORTED_MODULE_4__.select)(container) : container;
      } else {
        return null;
      }
    },
    // Mount the target
    mountTarget: function mountTarget() {
      if (!this.$_target) {
        var $container = this.getContainer();

        if ($container) {
          var $el = document.createElement('div');
          $container.appendChild($el);
          this.$_target = (0,_utils_create_new_child_component__WEBPACK_IMPORTED_MODULE_11__.createNewChildComponent)(this, BVTransporterTarget, {
            el: $el,
            propsData: {
              // Initial nodes to be rendered
              nodes: (0,_utils_array__WEBPACK_IMPORTED_MODULE_6__.concat)(this.normalizeSlot())
            }
          });
        }
      }
    },
    // Update the content of the target
    updateTarget: function updateTarget() {
      if (_constants_env__WEBPACK_IMPORTED_MODULE_10__.IS_BROWSER && this.$_target) {
        var defaultFn = this.$scopedSlots.default;

        if (!this.disabled) {
          /* istanbul ignore else: only applicable in Vue 2.5.x */
          if (defaultFn && this.$_defaultFn !== defaultFn) {
            // We only update the target component if the scoped slot
            // function is a fresh one. The new slot syntax (since Vue 2.6)
            // can cache unchanged slot functions and we want to respect that here
            this.$_target.updatedNodes = defaultFn;
          } else if (!defaultFn) {
            // We also need to be back compatible with non-scoped default slot (i.e. 2.5.x)
            this.$_target.updatedNodes = this.$slots.default;
          }
        } // Update the scoped slot function cache


        this.$_defaultFn = defaultFn;
      }
    },
    // Unmount the target
    unmountTarget: function unmountTarget() {
      this.$_target && this.$_target.$destroy();
      this.$_target = null;
    }
  },
  render: function render(h) {
    // This component has no root element, so only a single VNode is allowed
    if (this.disabled) {
      var $nodes = (0,_utils_array__WEBPACK_IMPORTED_MODULE_6__.concat)(this.normalizeSlot()).filter(_utils_identity__WEBPACK_IMPORTED_MODULE_7__.identity);

      if ($nodes.length > 0 && !$nodes[0].text) {
        return $nodes[0];
      }
    }

    return h();
  }
});
var BVTransporterVue3 = /*#__PURE__*/(0,_vue__WEBPACK_IMPORTED_MODULE_0__.extend)({
  name: _constants_components__WEBPACK_IMPORTED_MODULE_1__.NAME_TRANSPORTER,
  mixins: [_mixins_normalize_slot__WEBPACK_IMPORTED_MODULE_9__.normalizeSlotMixin],
  props: props,
  render: function render(h) {
    if (this.disabled) {
      var $nodes = (0,_utils_array__WEBPACK_IMPORTED_MODULE_6__.concat)(this.normalizeSlot()).filter(_utils_identity__WEBPACK_IMPORTED_MODULE_7__.identity);

      if ($nodes.length > 0) {
        return $nodes[0];
      }
    }

    return h(_vue__WEBPACK_IMPORTED_MODULE_12__["default"].Teleport, {
      to: this.container
    }, this.normalizeSlot());
  }
});
var BVTransporter = _vue__WEBPACK_IMPORTED_MODULE_0__.isVue3 ? BVTransporterVue3 : BVTransporterVue2;

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/constants/components.js":
/*!****************************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/constants/components.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NAME_ALERT": () => (/* binding */ NAME_ALERT),
/* harmony export */   "NAME_ASPECT": () => (/* binding */ NAME_ASPECT),
/* harmony export */   "NAME_AVATAR": () => (/* binding */ NAME_AVATAR),
/* harmony export */   "NAME_AVATAR_GROUP": () => (/* binding */ NAME_AVATAR_GROUP),
/* harmony export */   "NAME_BADGE": () => (/* binding */ NAME_BADGE),
/* harmony export */   "NAME_BREADCRUMB": () => (/* binding */ NAME_BREADCRUMB),
/* harmony export */   "NAME_BREADCRUMB_ITEM": () => (/* binding */ NAME_BREADCRUMB_ITEM),
/* harmony export */   "NAME_BREADCRUMB_LINK": () => (/* binding */ NAME_BREADCRUMB_LINK),
/* harmony export */   "NAME_BUTTON": () => (/* binding */ NAME_BUTTON),
/* harmony export */   "NAME_BUTTON_CLOSE": () => (/* binding */ NAME_BUTTON_CLOSE),
/* harmony export */   "NAME_BUTTON_GROUP": () => (/* binding */ NAME_BUTTON_GROUP),
/* harmony export */   "NAME_BUTTON_TOOLBAR": () => (/* binding */ NAME_BUTTON_TOOLBAR),
/* harmony export */   "NAME_CALENDAR": () => (/* binding */ NAME_CALENDAR),
/* harmony export */   "NAME_CARD": () => (/* binding */ NAME_CARD),
/* harmony export */   "NAME_CARD_BODY": () => (/* binding */ NAME_CARD_BODY),
/* harmony export */   "NAME_CARD_FOOTER": () => (/* binding */ NAME_CARD_FOOTER),
/* harmony export */   "NAME_CARD_GROUP": () => (/* binding */ NAME_CARD_GROUP),
/* harmony export */   "NAME_CARD_HEADER": () => (/* binding */ NAME_CARD_HEADER),
/* harmony export */   "NAME_CARD_IMG": () => (/* binding */ NAME_CARD_IMG),
/* harmony export */   "NAME_CARD_IMG_LAZY": () => (/* binding */ NAME_CARD_IMG_LAZY),
/* harmony export */   "NAME_CARD_SUB_TITLE": () => (/* binding */ NAME_CARD_SUB_TITLE),
/* harmony export */   "NAME_CARD_TEXT": () => (/* binding */ NAME_CARD_TEXT),
/* harmony export */   "NAME_CARD_TITLE": () => (/* binding */ NAME_CARD_TITLE),
/* harmony export */   "NAME_CAROUSEL": () => (/* binding */ NAME_CAROUSEL),
/* harmony export */   "NAME_CAROUSEL_SLIDE": () => (/* binding */ NAME_CAROUSEL_SLIDE),
/* harmony export */   "NAME_COL": () => (/* binding */ NAME_COL),
/* harmony export */   "NAME_COLLAPSE": () => (/* binding */ NAME_COLLAPSE),
/* harmony export */   "NAME_COLLAPSE_HELPER": () => (/* binding */ NAME_COLLAPSE_HELPER),
/* harmony export */   "NAME_CONTAINER": () => (/* binding */ NAME_CONTAINER),
/* harmony export */   "NAME_DROPDOWN": () => (/* binding */ NAME_DROPDOWN),
/* harmony export */   "NAME_DROPDOWN_DIVIDER": () => (/* binding */ NAME_DROPDOWN_DIVIDER),
/* harmony export */   "NAME_DROPDOWN_FORM": () => (/* binding */ NAME_DROPDOWN_FORM),
/* harmony export */   "NAME_DROPDOWN_GROUP": () => (/* binding */ NAME_DROPDOWN_GROUP),
/* harmony export */   "NAME_DROPDOWN_HEADER": () => (/* binding */ NAME_DROPDOWN_HEADER),
/* harmony export */   "NAME_DROPDOWN_ITEM": () => (/* binding */ NAME_DROPDOWN_ITEM),
/* harmony export */   "NAME_DROPDOWN_ITEM_BUTTON": () => (/* binding */ NAME_DROPDOWN_ITEM_BUTTON),
/* harmony export */   "NAME_DROPDOWN_TEXT": () => (/* binding */ NAME_DROPDOWN_TEXT),
/* harmony export */   "NAME_EMBED": () => (/* binding */ NAME_EMBED),
/* harmony export */   "NAME_FORM": () => (/* binding */ NAME_FORM),
/* harmony export */   "NAME_FORM_BUTTON_LABEL_CONTROL": () => (/* binding */ NAME_FORM_BUTTON_LABEL_CONTROL),
/* harmony export */   "NAME_FORM_CHECKBOX": () => (/* binding */ NAME_FORM_CHECKBOX),
/* harmony export */   "NAME_FORM_CHECKBOX_GROUP": () => (/* binding */ NAME_FORM_CHECKBOX_GROUP),
/* harmony export */   "NAME_FORM_DATALIST": () => (/* binding */ NAME_FORM_DATALIST),
/* harmony export */   "NAME_FORM_DATEPICKER": () => (/* binding */ NAME_FORM_DATEPICKER),
/* harmony export */   "NAME_FORM_FILE": () => (/* binding */ NAME_FORM_FILE),
/* harmony export */   "NAME_FORM_GROUP": () => (/* binding */ NAME_FORM_GROUP),
/* harmony export */   "NAME_FORM_INPUT": () => (/* binding */ NAME_FORM_INPUT),
/* harmony export */   "NAME_FORM_INVALID_FEEDBACK": () => (/* binding */ NAME_FORM_INVALID_FEEDBACK),
/* harmony export */   "NAME_FORM_RADIO": () => (/* binding */ NAME_FORM_RADIO),
/* harmony export */   "NAME_FORM_RADIO_GROUP": () => (/* binding */ NAME_FORM_RADIO_GROUP),
/* harmony export */   "NAME_FORM_RATING": () => (/* binding */ NAME_FORM_RATING),
/* harmony export */   "NAME_FORM_RATING_STAR": () => (/* binding */ NAME_FORM_RATING_STAR),
/* harmony export */   "NAME_FORM_ROW": () => (/* binding */ NAME_FORM_ROW),
/* harmony export */   "NAME_FORM_SELECT": () => (/* binding */ NAME_FORM_SELECT),
/* harmony export */   "NAME_FORM_SELECT_OPTION": () => (/* binding */ NAME_FORM_SELECT_OPTION),
/* harmony export */   "NAME_FORM_SELECT_OPTION_GROUP": () => (/* binding */ NAME_FORM_SELECT_OPTION_GROUP),
/* harmony export */   "NAME_FORM_SPINBUTTON": () => (/* binding */ NAME_FORM_SPINBUTTON),
/* harmony export */   "NAME_FORM_TAG": () => (/* binding */ NAME_FORM_TAG),
/* harmony export */   "NAME_FORM_TAGS": () => (/* binding */ NAME_FORM_TAGS),
/* harmony export */   "NAME_FORM_TEXT": () => (/* binding */ NAME_FORM_TEXT),
/* harmony export */   "NAME_FORM_TEXTAREA": () => (/* binding */ NAME_FORM_TEXTAREA),
/* harmony export */   "NAME_FORM_TIMEPICKER": () => (/* binding */ NAME_FORM_TIMEPICKER),
/* harmony export */   "NAME_FORM_VALID_FEEDBACK": () => (/* binding */ NAME_FORM_VALID_FEEDBACK),
/* harmony export */   "NAME_ICON": () => (/* binding */ NAME_ICON),
/* harmony export */   "NAME_ICONSTACK": () => (/* binding */ NAME_ICONSTACK),
/* harmony export */   "NAME_ICON_BASE": () => (/* binding */ NAME_ICON_BASE),
/* harmony export */   "NAME_IMG": () => (/* binding */ NAME_IMG),
/* harmony export */   "NAME_IMG_LAZY": () => (/* binding */ NAME_IMG_LAZY),
/* harmony export */   "NAME_INPUT_GROUP": () => (/* binding */ NAME_INPUT_GROUP),
/* harmony export */   "NAME_INPUT_GROUP_ADDON": () => (/* binding */ NAME_INPUT_GROUP_ADDON),
/* harmony export */   "NAME_INPUT_GROUP_APPEND": () => (/* binding */ NAME_INPUT_GROUP_APPEND),
/* harmony export */   "NAME_INPUT_GROUP_PREPEND": () => (/* binding */ NAME_INPUT_GROUP_PREPEND),
/* harmony export */   "NAME_INPUT_GROUP_TEXT": () => (/* binding */ NAME_INPUT_GROUP_TEXT),
/* harmony export */   "NAME_JUMBOTRON": () => (/* binding */ NAME_JUMBOTRON),
/* harmony export */   "NAME_LINK": () => (/* binding */ NAME_LINK),
/* harmony export */   "NAME_LIST_GROUP": () => (/* binding */ NAME_LIST_GROUP),
/* harmony export */   "NAME_LIST_GROUP_ITEM": () => (/* binding */ NAME_LIST_GROUP_ITEM),
/* harmony export */   "NAME_MEDIA": () => (/* binding */ NAME_MEDIA),
/* harmony export */   "NAME_MEDIA_ASIDE": () => (/* binding */ NAME_MEDIA_ASIDE),
/* harmony export */   "NAME_MEDIA_BODY": () => (/* binding */ NAME_MEDIA_BODY),
/* harmony export */   "NAME_MODAL": () => (/* binding */ NAME_MODAL),
/* harmony export */   "NAME_MSG_BOX": () => (/* binding */ NAME_MSG_BOX),
/* harmony export */   "NAME_NAV": () => (/* binding */ NAME_NAV),
/* harmony export */   "NAME_NAVBAR": () => (/* binding */ NAME_NAVBAR),
/* harmony export */   "NAME_NAVBAR_BRAND": () => (/* binding */ NAME_NAVBAR_BRAND),
/* harmony export */   "NAME_NAVBAR_NAV": () => (/* binding */ NAME_NAVBAR_NAV),
/* harmony export */   "NAME_NAVBAR_TOGGLE": () => (/* binding */ NAME_NAVBAR_TOGGLE),
/* harmony export */   "NAME_NAV_FORM": () => (/* binding */ NAME_NAV_FORM),
/* harmony export */   "NAME_NAV_ITEM": () => (/* binding */ NAME_NAV_ITEM),
/* harmony export */   "NAME_NAV_ITEM_DROPDOWN": () => (/* binding */ NAME_NAV_ITEM_DROPDOWN),
/* harmony export */   "NAME_NAV_TEXT": () => (/* binding */ NAME_NAV_TEXT),
/* harmony export */   "NAME_OVERLAY": () => (/* binding */ NAME_OVERLAY),
/* harmony export */   "NAME_PAGINATION": () => (/* binding */ NAME_PAGINATION),
/* harmony export */   "NAME_PAGINATION_NAV": () => (/* binding */ NAME_PAGINATION_NAV),
/* harmony export */   "NAME_POPOVER": () => (/* binding */ NAME_POPOVER),
/* harmony export */   "NAME_POPOVER_HELPER": () => (/* binding */ NAME_POPOVER_HELPER),
/* harmony export */   "NAME_POPOVER_TEMPLATE": () => (/* binding */ NAME_POPOVER_TEMPLATE),
/* harmony export */   "NAME_POPPER": () => (/* binding */ NAME_POPPER),
/* harmony export */   "NAME_PROGRESS": () => (/* binding */ NAME_PROGRESS),
/* harmony export */   "NAME_PROGRESS_BAR": () => (/* binding */ NAME_PROGRESS_BAR),
/* harmony export */   "NAME_ROW": () => (/* binding */ NAME_ROW),
/* harmony export */   "NAME_SIDEBAR": () => (/* binding */ NAME_SIDEBAR),
/* harmony export */   "NAME_SKELETON": () => (/* binding */ NAME_SKELETON),
/* harmony export */   "NAME_SKELETON_ICON": () => (/* binding */ NAME_SKELETON_ICON),
/* harmony export */   "NAME_SKELETON_IMG": () => (/* binding */ NAME_SKELETON_IMG),
/* harmony export */   "NAME_SKELETON_TABLE": () => (/* binding */ NAME_SKELETON_TABLE),
/* harmony export */   "NAME_SKELETON_WRAPPER": () => (/* binding */ NAME_SKELETON_WRAPPER),
/* harmony export */   "NAME_SPINNER": () => (/* binding */ NAME_SPINNER),
/* harmony export */   "NAME_TAB": () => (/* binding */ NAME_TAB),
/* harmony export */   "NAME_TABLE": () => (/* binding */ NAME_TABLE),
/* harmony export */   "NAME_TABLE_CELL": () => (/* binding */ NAME_TABLE_CELL),
/* harmony export */   "NAME_TABLE_LITE": () => (/* binding */ NAME_TABLE_LITE),
/* harmony export */   "NAME_TABLE_SIMPLE": () => (/* binding */ NAME_TABLE_SIMPLE),
/* harmony export */   "NAME_TABS": () => (/* binding */ NAME_TABS),
/* harmony export */   "NAME_TAB_BUTTON_HELPER": () => (/* binding */ NAME_TAB_BUTTON_HELPER),
/* harmony export */   "NAME_TBODY": () => (/* binding */ NAME_TBODY),
/* harmony export */   "NAME_TFOOT": () => (/* binding */ NAME_TFOOT),
/* harmony export */   "NAME_TH": () => (/* binding */ NAME_TH),
/* harmony export */   "NAME_THEAD": () => (/* binding */ NAME_THEAD),
/* harmony export */   "NAME_TIME": () => (/* binding */ NAME_TIME),
/* harmony export */   "NAME_TOAST": () => (/* binding */ NAME_TOAST),
/* harmony export */   "NAME_TOASTER": () => (/* binding */ NAME_TOASTER),
/* harmony export */   "NAME_TOAST_POP": () => (/* binding */ NAME_TOAST_POP),
/* harmony export */   "NAME_TOOLTIP": () => (/* binding */ NAME_TOOLTIP),
/* harmony export */   "NAME_TOOLTIP_HELPER": () => (/* binding */ NAME_TOOLTIP_HELPER),
/* harmony export */   "NAME_TOOLTIP_TEMPLATE": () => (/* binding */ NAME_TOOLTIP_TEMPLATE),
/* harmony export */   "NAME_TR": () => (/* binding */ NAME_TR),
/* harmony export */   "NAME_TRANSITION": () => (/* binding */ NAME_TRANSITION),
/* harmony export */   "NAME_TRANSPORTER": () => (/* binding */ NAME_TRANSPORTER),
/* harmony export */   "NAME_TRANSPORTER_TARGET": () => (/* binding */ NAME_TRANSPORTER_TARGET)
/* harmony export */ });
// Component names
var NAME_ALERT = 'BAlert';
var NAME_ASPECT = 'BAspect';
var NAME_AVATAR = 'BAvatar';
var NAME_AVATAR_GROUP = 'BAvatarGroup';
var NAME_BADGE = 'BBadge';
var NAME_BREADCRUMB = 'BBreadcrumb';
var NAME_BREADCRUMB_ITEM = 'BBreadcrumbItem';
var NAME_BREADCRUMB_LINK = 'BBreadcrumbLink';
var NAME_BUTTON = 'BButton';
var NAME_BUTTON_CLOSE = 'BButtonClose';
var NAME_BUTTON_GROUP = 'BButtonGroup';
var NAME_BUTTON_TOOLBAR = 'BButtonToolbar';
var NAME_CALENDAR = 'BCalendar';
var NAME_CARD = 'BCard';
var NAME_CARD_BODY = 'BCardBody';
var NAME_CARD_FOOTER = 'BCardFooter';
var NAME_CARD_GROUP = 'BCardGroup';
var NAME_CARD_HEADER = 'BCardHeader';
var NAME_CARD_IMG = 'BCardImg';
var NAME_CARD_IMG_LAZY = 'BCardImgLazy';
var NAME_CARD_SUB_TITLE = 'BCardSubTitle';
var NAME_CARD_TEXT = 'BCardText';
var NAME_CARD_TITLE = 'BCardTitle';
var NAME_CAROUSEL = 'BCarousel';
var NAME_CAROUSEL_SLIDE = 'BCarouselSlide';
var NAME_COL = 'BCol';
var NAME_COLLAPSE = 'BCollapse';
var NAME_CONTAINER = 'BContainer';
var NAME_DROPDOWN = 'BDropdown';
var NAME_DROPDOWN_DIVIDER = 'BDropdownDivider';
var NAME_DROPDOWN_FORM = 'BDropdownForm';
var NAME_DROPDOWN_GROUP = 'BDropdownGroup';
var NAME_DROPDOWN_HEADER = 'BDropdownHeader';
var NAME_DROPDOWN_ITEM = 'BDropdownItem';
var NAME_DROPDOWN_ITEM_BUTTON = 'BDropdownItemButton';
var NAME_DROPDOWN_TEXT = 'BDropdownText';
var NAME_EMBED = 'BEmbed';
var NAME_FORM = 'BForm';
var NAME_FORM_CHECKBOX = 'BFormCheckbox';
var NAME_FORM_CHECKBOX_GROUP = 'BFormCheckboxGroup';
var NAME_FORM_DATALIST = 'BFormDatalist';
var NAME_FORM_DATEPICKER = 'BFormDatepicker';
var NAME_FORM_FILE = 'BFormFile';
var NAME_FORM_GROUP = 'BFormGroup';
var NAME_FORM_INPUT = 'BFormInput';
var NAME_FORM_INVALID_FEEDBACK = 'BFormInvalidFeedback';
var NAME_FORM_RADIO = 'BFormRadio';
var NAME_FORM_RADIO_GROUP = 'BFormRadioGroup';
var NAME_FORM_RATING = 'BFormRating';
var NAME_FORM_ROW = 'BFormRow';
var NAME_FORM_SELECT = 'BFormSelect';
var NAME_FORM_SELECT_OPTION = 'BFormSelectOption';
var NAME_FORM_SELECT_OPTION_GROUP = 'BFormSelectOptionGroup';
var NAME_FORM_SPINBUTTON = 'BFormSpinbutton';
var NAME_FORM_TAG = 'BFormTag';
var NAME_FORM_TAGS = 'BFormTags';
var NAME_FORM_TEXT = 'BFormText';
var NAME_FORM_TEXTAREA = 'BFormTextarea';
var NAME_FORM_TIMEPICKER = 'BFormTimepicker';
var NAME_FORM_VALID_FEEDBACK = 'BFormValidFeedback';
var NAME_ICON = 'BIcon';
var NAME_ICONSTACK = 'BIconstack';
var NAME_ICON_BASE = 'BIconBase';
var NAME_IMG = 'BImg';
var NAME_IMG_LAZY = 'BImgLazy';
var NAME_INPUT_GROUP = 'BInputGroup';
var NAME_INPUT_GROUP_ADDON = 'BInputGroupAddon';
var NAME_INPUT_GROUP_APPEND = 'BInputGroupAppend';
var NAME_INPUT_GROUP_PREPEND = 'BInputGroupPrepend';
var NAME_INPUT_GROUP_TEXT = 'BInputGroupText';
var NAME_JUMBOTRON = 'BJumbotron';
var NAME_LINK = 'BLink';
var NAME_LIST_GROUP = 'BListGroup';
var NAME_LIST_GROUP_ITEM = 'BListGroupItem';
var NAME_MEDIA = 'BMedia';
var NAME_MEDIA_ASIDE = 'BMediaAside';
var NAME_MEDIA_BODY = 'BMediaBody';
var NAME_MODAL = 'BModal';
var NAME_MSG_BOX = 'BMsgBox';
var NAME_NAV = 'BNav';
var NAME_NAVBAR = 'BNavbar';
var NAME_NAVBAR_BRAND = 'BNavbarBrand';
var NAME_NAVBAR_NAV = 'BNavbarNav';
var NAME_NAVBAR_TOGGLE = 'BNavbarToggle';
var NAME_NAV_FORM = 'BNavForm';
var NAME_NAV_ITEM = 'BNavItem';
var NAME_NAV_ITEM_DROPDOWN = 'BNavItemDropdown';
var NAME_NAV_TEXT = 'BNavText';
var NAME_OVERLAY = 'BOverlay';
var NAME_PAGINATION = 'BPagination';
var NAME_PAGINATION_NAV = 'BPaginationNav';
var NAME_POPOVER = 'BPopover';
var NAME_PROGRESS = 'BProgress';
var NAME_PROGRESS_BAR = 'BProgressBar';
var NAME_ROW = 'BRow';
var NAME_SIDEBAR = 'BSidebar';
var NAME_SKELETON = 'BSkeleton';
var NAME_SKELETON_ICON = 'BSkeletonIcon';
var NAME_SKELETON_IMG = 'BSkeletonImg';
var NAME_SKELETON_TABLE = 'BSkeletonTable';
var NAME_SKELETON_WRAPPER = 'BSkeletonWrapper';
var NAME_SPINNER = 'BSpinner';
var NAME_TAB = 'BTab';
var NAME_TABLE = 'BTable';
var NAME_TABLE_CELL = 'BTableCell';
var NAME_TABLE_LITE = 'BTableLite';
var NAME_TABLE_SIMPLE = 'BTableSimple';
var NAME_TABS = 'BTabs';
var NAME_TBODY = 'BTbody';
var NAME_TFOOT = 'BTfoot';
var NAME_TH = 'BTh';
var NAME_THEAD = 'BThead';
var NAME_TIME = 'BTime';
var NAME_TOAST = 'BToast';
var NAME_TOASTER = 'BToaster';
var NAME_TOOLTIP = 'BTooltip';
var NAME_TR = 'BTr'; // Helper component names

var NAME_COLLAPSE_HELPER = 'BVCollapse';
var NAME_FORM_BUTTON_LABEL_CONTROL = 'BVFormBtnLabelControl';
var NAME_FORM_RATING_STAR = 'BVFormRatingStar';
var NAME_POPOVER_HELPER = 'BVPopover';
var NAME_POPOVER_TEMPLATE = 'BVPopoverTemplate';
var NAME_POPPER = 'BVPopper';
var NAME_TAB_BUTTON_HELPER = 'BVTabButton';
var NAME_TOAST_POP = 'BVToastPop';
var NAME_TOOLTIP_HELPER = 'BVTooltip';
var NAME_TOOLTIP_TEMPLATE = 'BVTooltipTemplate';
var NAME_TRANSITION = 'BVTransition';
var NAME_TRANSPORTER = 'BVTransporter';
var NAME_TRANSPORTER_TARGET = 'BVTransporterTarget';

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/constants/config.js":
/*!************************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/constants/config.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEFAULT_BREAKPOINT": () => (/* binding */ DEFAULT_BREAKPOINT),
/* harmony export */   "NAME": () => (/* binding */ NAME),
/* harmony export */   "PROP_NAME": () => (/* binding */ PROP_NAME)
/* harmony export */ });
var NAME = 'BvConfig';
var PROP_NAME = '$bvConfig';
var DEFAULT_BREAKPOINT = ['xs', 'sm', 'md', 'lg', 'xl'];

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/constants/env.js":
/*!*********************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/constants/env.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DOCUMENT": () => (/* binding */ DOCUMENT),
/* harmony export */   "HAS_DOCUMENT_SUPPORT": () => (/* binding */ HAS_DOCUMENT_SUPPORT),
/* harmony export */   "HAS_INTERACTION_OBSERVER_SUPPORT": () => (/* binding */ HAS_INTERACTION_OBSERVER_SUPPORT),
/* harmony export */   "HAS_MUTATION_OBSERVER_SUPPORT": () => (/* binding */ HAS_MUTATION_OBSERVER_SUPPORT),
/* harmony export */   "HAS_NAVIGATOR_SUPPORT": () => (/* binding */ HAS_NAVIGATOR_SUPPORT),
/* harmony export */   "HAS_PASSIVE_EVENT_SUPPORT": () => (/* binding */ HAS_PASSIVE_EVENT_SUPPORT),
/* harmony export */   "HAS_POINTER_EVENT_SUPPORT": () => (/* binding */ HAS_POINTER_EVENT_SUPPORT),
/* harmony export */   "HAS_PROMISE_SUPPORT": () => (/* binding */ HAS_PROMISE_SUPPORT),
/* harmony export */   "HAS_TOUCH_SUPPORT": () => (/* binding */ HAS_TOUCH_SUPPORT),
/* harmony export */   "HAS_WINDOW_SUPPORT": () => (/* binding */ HAS_WINDOW_SUPPORT),
/* harmony export */   "IS_BROWSER": () => (/* binding */ IS_BROWSER),
/* harmony export */   "IS_IE": () => (/* binding */ IS_IE),
/* harmony export */   "IS_JSDOM": () => (/* binding */ IS_JSDOM),
/* harmony export */   "NAVIGATOR": () => (/* binding */ NAVIGATOR),
/* harmony export */   "USER_AGENT": () => (/* binding */ USER_AGENT),
/* harmony export */   "WINDOW": () => (/* binding */ WINDOW)
/* harmony export */ });
var HAS_WINDOW_SUPPORT = typeof window !== 'undefined';
var HAS_DOCUMENT_SUPPORT = typeof document !== 'undefined';
var HAS_NAVIGATOR_SUPPORT = typeof navigator !== 'undefined';
var HAS_PROMISE_SUPPORT = typeof Promise !== 'undefined';
/* istanbul ignore next: JSDOM always returns false */

var HAS_MUTATION_OBSERVER_SUPPORT = typeof MutationObserver !== 'undefined' || typeof WebKitMutationObserver !== 'undefined' || typeof MozMutationObserver !== 'undefined';
var IS_BROWSER = HAS_WINDOW_SUPPORT && HAS_DOCUMENT_SUPPORT && HAS_NAVIGATOR_SUPPORT;
var WINDOW = HAS_WINDOW_SUPPORT ? window : {};
var DOCUMENT = HAS_DOCUMENT_SUPPORT ? document : {};
var NAVIGATOR = HAS_NAVIGATOR_SUPPORT ? navigator : {};
var USER_AGENT = (NAVIGATOR.userAgent || '').toLowerCase();
var IS_JSDOM = USER_AGENT.indexOf('jsdom') > 0;
var IS_IE = /msie|trident/.test(USER_AGENT); // Determine if the browser supports the option passive for events

var HAS_PASSIVE_EVENT_SUPPORT = function () {
  var passiveEventSupported = false;

  if (IS_BROWSER) {
    try {
      var options = {
        // This function will be called when the browser
        // attempts to access the passive property
        get passive() {
          /* istanbul ignore next: will never be called in JSDOM */
          passiveEventSupported = true;
        }

      };
      WINDOW.addEventListener('test', options, options);
      WINDOW.removeEventListener('test', options, options);
    } catch (_unused) {
      /* istanbul ignore next: will never be called in JSDOM */
      passiveEventSupported = false;
    }
  }

  return passiveEventSupported;
}();
var HAS_TOUCH_SUPPORT = IS_BROWSER && ('ontouchstart' in DOCUMENT.documentElement || NAVIGATOR.maxTouchPoints > 0);
var HAS_POINTER_EVENT_SUPPORT = IS_BROWSER && Boolean(WINDOW.PointerEvent || WINDOW.MSPointerEvent);
/* istanbul ignore next: JSDOM only checks for 'IntersectionObserver' */

var HAS_INTERACTION_OBSERVER_SUPPORT = IS_BROWSER && 'IntersectionObserver' in WINDOW && 'IntersectionObserverEntry' in WINDOW && // Edge 15 and UC Browser lack support for `isIntersecting`
// but we an use `intersectionRatio > 0` instead
// 'isIntersecting' in window.IntersectionObserverEntry.prototype &&
'intersectionRatio' in WINDOW.IntersectionObserverEntry.prototype;

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/constants/events.js":
/*!************************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/constants/events.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EVENT_NAME_ACTIVATE_TAB": () => (/* binding */ EVENT_NAME_ACTIVATE_TAB),
/* harmony export */   "EVENT_NAME_BLUR": () => (/* binding */ EVENT_NAME_BLUR),
/* harmony export */   "EVENT_NAME_CANCEL": () => (/* binding */ EVENT_NAME_CANCEL),
/* harmony export */   "EVENT_NAME_CHANGE": () => (/* binding */ EVENT_NAME_CHANGE),
/* harmony export */   "EVENT_NAME_CHANGED": () => (/* binding */ EVENT_NAME_CHANGED),
/* harmony export */   "EVENT_NAME_CLICK": () => (/* binding */ EVENT_NAME_CLICK),
/* harmony export */   "EVENT_NAME_CLOSE": () => (/* binding */ EVENT_NAME_CLOSE),
/* harmony export */   "EVENT_NAME_CONTEXT": () => (/* binding */ EVENT_NAME_CONTEXT),
/* harmony export */   "EVENT_NAME_CONTEXT_CHANGED": () => (/* binding */ EVENT_NAME_CONTEXT_CHANGED),
/* harmony export */   "EVENT_NAME_DESTROYED": () => (/* binding */ EVENT_NAME_DESTROYED),
/* harmony export */   "EVENT_NAME_DISABLE": () => (/* binding */ EVENT_NAME_DISABLE),
/* harmony export */   "EVENT_NAME_DISABLED": () => (/* binding */ EVENT_NAME_DISABLED),
/* harmony export */   "EVENT_NAME_DISMISSED": () => (/* binding */ EVENT_NAME_DISMISSED),
/* harmony export */   "EVENT_NAME_DISMISS_COUNT_DOWN": () => (/* binding */ EVENT_NAME_DISMISS_COUNT_DOWN),
/* harmony export */   "EVENT_NAME_ENABLE": () => (/* binding */ EVENT_NAME_ENABLE),
/* harmony export */   "EVENT_NAME_ENABLED": () => (/* binding */ EVENT_NAME_ENABLED),
/* harmony export */   "EVENT_NAME_FILTERED": () => (/* binding */ EVENT_NAME_FILTERED),
/* harmony export */   "EVENT_NAME_FIRST": () => (/* binding */ EVENT_NAME_FIRST),
/* harmony export */   "EVENT_NAME_FOCUS": () => (/* binding */ EVENT_NAME_FOCUS),
/* harmony export */   "EVENT_NAME_FOCUSIN": () => (/* binding */ EVENT_NAME_FOCUSIN),
/* harmony export */   "EVENT_NAME_FOCUSOUT": () => (/* binding */ EVENT_NAME_FOCUSOUT),
/* harmony export */   "EVENT_NAME_HEAD_CLICKED": () => (/* binding */ EVENT_NAME_HEAD_CLICKED),
/* harmony export */   "EVENT_NAME_HIDDEN": () => (/* binding */ EVENT_NAME_HIDDEN),
/* harmony export */   "EVENT_NAME_HIDE": () => (/* binding */ EVENT_NAME_HIDE),
/* harmony export */   "EVENT_NAME_IMG_ERROR": () => (/* binding */ EVENT_NAME_IMG_ERROR),
/* harmony export */   "EVENT_NAME_INPUT": () => (/* binding */ EVENT_NAME_INPUT),
/* harmony export */   "EVENT_NAME_LAST": () => (/* binding */ EVENT_NAME_LAST),
/* harmony export */   "EVENT_NAME_MOUSEENTER": () => (/* binding */ EVENT_NAME_MOUSEENTER),
/* harmony export */   "EVENT_NAME_MOUSELEAVE": () => (/* binding */ EVENT_NAME_MOUSELEAVE),
/* harmony export */   "EVENT_NAME_NEXT": () => (/* binding */ EVENT_NAME_NEXT),
/* harmony export */   "EVENT_NAME_OK": () => (/* binding */ EVENT_NAME_OK),
/* harmony export */   "EVENT_NAME_OPEN": () => (/* binding */ EVENT_NAME_OPEN),
/* harmony export */   "EVENT_NAME_PAGE_CLICK": () => (/* binding */ EVENT_NAME_PAGE_CLICK),
/* harmony export */   "EVENT_NAME_PAUSED": () => (/* binding */ EVENT_NAME_PAUSED),
/* harmony export */   "EVENT_NAME_PREV": () => (/* binding */ EVENT_NAME_PREV),
/* harmony export */   "EVENT_NAME_REFRESH": () => (/* binding */ EVENT_NAME_REFRESH),
/* harmony export */   "EVENT_NAME_REFRESHED": () => (/* binding */ EVENT_NAME_REFRESHED),
/* harmony export */   "EVENT_NAME_REMOVE": () => (/* binding */ EVENT_NAME_REMOVE),
/* harmony export */   "EVENT_NAME_ROW_CLICKED": () => (/* binding */ EVENT_NAME_ROW_CLICKED),
/* harmony export */   "EVENT_NAME_ROW_CONTEXTMENU": () => (/* binding */ EVENT_NAME_ROW_CONTEXTMENU),
/* harmony export */   "EVENT_NAME_ROW_DBLCLICKED": () => (/* binding */ EVENT_NAME_ROW_DBLCLICKED),
/* harmony export */   "EVENT_NAME_ROW_HOVERED": () => (/* binding */ EVENT_NAME_ROW_HOVERED),
/* harmony export */   "EVENT_NAME_ROW_MIDDLE_CLICKED": () => (/* binding */ EVENT_NAME_ROW_MIDDLE_CLICKED),
/* harmony export */   "EVENT_NAME_ROW_SELECTED": () => (/* binding */ EVENT_NAME_ROW_SELECTED),
/* harmony export */   "EVENT_NAME_ROW_UNHOVERED": () => (/* binding */ EVENT_NAME_ROW_UNHOVERED),
/* harmony export */   "EVENT_NAME_SELECTED": () => (/* binding */ EVENT_NAME_SELECTED),
/* harmony export */   "EVENT_NAME_SHOW": () => (/* binding */ EVENT_NAME_SHOW),
/* harmony export */   "EVENT_NAME_SHOWN": () => (/* binding */ EVENT_NAME_SHOWN),
/* harmony export */   "EVENT_NAME_SLIDING_END": () => (/* binding */ EVENT_NAME_SLIDING_END),
/* harmony export */   "EVENT_NAME_SLIDING_START": () => (/* binding */ EVENT_NAME_SLIDING_START),
/* harmony export */   "EVENT_NAME_SORT_CHANGED": () => (/* binding */ EVENT_NAME_SORT_CHANGED),
/* harmony export */   "EVENT_NAME_TAG_STATE": () => (/* binding */ EVENT_NAME_TAG_STATE),
/* harmony export */   "EVENT_NAME_TOGGLE": () => (/* binding */ EVENT_NAME_TOGGLE),
/* harmony export */   "EVENT_NAME_UNPAUSED": () => (/* binding */ EVENT_NAME_UNPAUSED),
/* harmony export */   "EVENT_NAME_UPDATE": () => (/* binding */ EVENT_NAME_UPDATE),
/* harmony export */   "EVENT_OPTIONS_NO_CAPTURE": () => (/* binding */ EVENT_OPTIONS_NO_CAPTURE),
/* harmony export */   "EVENT_OPTIONS_PASSIVE": () => (/* binding */ EVENT_OPTIONS_PASSIVE),
/* harmony export */   "HOOK_EVENT_NAME_BEFORE_DESTROY": () => (/* binding */ HOOK_EVENT_NAME_BEFORE_DESTROY),
/* harmony export */   "HOOK_EVENT_NAME_DESTROYED": () => (/* binding */ HOOK_EVENT_NAME_DESTROYED),
/* harmony export */   "MODEL_EVENT_NAME_PREFIX": () => (/* binding */ MODEL_EVENT_NAME_PREFIX),
/* harmony export */   "ROOT_EVENT_NAME_PREFIX": () => (/* binding */ ROOT_EVENT_NAME_PREFIX),
/* harmony export */   "ROOT_EVENT_NAME_SEPARATOR": () => (/* binding */ ROOT_EVENT_NAME_SEPARATOR)
/* harmony export */ });
/* harmony import */ var _vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vue */ "./node_modules/bootstrap-vue/esm/vue.js");

var EVENT_NAME_ACTIVATE_TAB = 'activate-tab';
var EVENT_NAME_BLUR = 'blur';
var EVENT_NAME_CANCEL = 'cancel';
var EVENT_NAME_CHANGE = 'change';
var EVENT_NAME_CHANGED = 'changed';
var EVENT_NAME_CLICK = 'click';
var EVENT_NAME_CLOSE = 'close';
var EVENT_NAME_CONTEXT = 'context';
var EVENT_NAME_CONTEXT_CHANGED = 'context-changed';
var EVENT_NAME_DESTROYED = 'destroyed';
var EVENT_NAME_DISABLE = 'disable';
var EVENT_NAME_DISABLED = 'disabled';
var EVENT_NAME_DISMISSED = 'dismissed';
var EVENT_NAME_DISMISS_COUNT_DOWN = 'dismiss-count-down';
var EVENT_NAME_ENABLE = 'enable';
var EVENT_NAME_ENABLED = 'enabled';
var EVENT_NAME_FILTERED = 'filtered';
var EVENT_NAME_FIRST = 'first';
var EVENT_NAME_FOCUS = 'focus';
var EVENT_NAME_FOCUSIN = 'focusin';
var EVENT_NAME_FOCUSOUT = 'focusout';
var EVENT_NAME_HEAD_CLICKED = 'head-clicked';
var EVENT_NAME_HIDDEN = 'hidden';
var EVENT_NAME_HIDE = 'hide';
var EVENT_NAME_IMG_ERROR = 'img-error';
var EVENT_NAME_INPUT = 'input';
var EVENT_NAME_LAST = 'last';
var EVENT_NAME_MOUSEENTER = 'mouseenter';
var EVENT_NAME_MOUSELEAVE = 'mouseleave';
var EVENT_NAME_NEXT = 'next';
var EVENT_NAME_OK = 'ok';
var EVENT_NAME_OPEN = 'open';
var EVENT_NAME_PAGE_CLICK = 'page-click';
var EVENT_NAME_PAUSED = 'paused';
var EVENT_NAME_PREV = 'prev';
var EVENT_NAME_REFRESH = 'refresh';
var EVENT_NAME_REFRESHED = 'refreshed';
var EVENT_NAME_REMOVE = 'remove';
var EVENT_NAME_ROW_CLICKED = 'row-clicked';
var EVENT_NAME_ROW_CONTEXTMENU = 'row-contextmenu';
var EVENT_NAME_ROW_DBLCLICKED = 'row-dblclicked';
var EVENT_NAME_ROW_HOVERED = 'row-hovered';
var EVENT_NAME_ROW_MIDDLE_CLICKED = 'row-middle-clicked';
var EVENT_NAME_ROW_SELECTED = 'row-selected';
var EVENT_NAME_ROW_UNHOVERED = 'row-unhovered';
var EVENT_NAME_SELECTED = 'selected';
var EVENT_NAME_SHOW = 'show';
var EVENT_NAME_SHOWN = 'shown';
var EVENT_NAME_SLIDING_END = 'sliding-end';
var EVENT_NAME_SLIDING_START = 'sliding-start';
var EVENT_NAME_SORT_CHANGED = 'sort-changed';
var EVENT_NAME_TAG_STATE = 'tag-state';
var EVENT_NAME_TOGGLE = 'toggle';
var EVENT_NAME_UNPAUSED = 'unpaused';
var EVENT_NAME_UPDATE = 'update';
var HOOK_EVENT_NAME_BEFORE_DESTROY = _vue__WEBPACK_IMPORTED_MODULE_0__.isVue3 ? 'vnodeBeforeUnmount' : 'hook:beforeDestroy';
var HOOK_EVENT_NAME_DESTROYED = _vue__WEBPACK_IMPORTED_MODULE_0__.isVue3 ? 'vNodeUnmounted' : 'hook:destroyed';
var MODEL_EVENT_NAME_PREFIX = 'update:';
var ROOT_EVENT_NAME_PREFIX = 'bv';
var ROOT_EVENT_NAME_SEPARATOR = '::';
var EVENT_OPTIONS_PASSIVE = {
  passive: true
};
var EVENT_OPTIONS_NO_CAPTURE = {
  passive: true,
  capture: false
};

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/constants/key-codes.js":
/*!***************************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/constants/key-codes.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CODE_BACKSPACE": () => (/* binding */ CODE_BACKSPACE),
/* harmony export */   "CODE_BREAK": () => (/* binding */ CODE_BREAK),
/* harmony export */   "CODE_DELETE": () => (/* binding */ CODE_DELETE),
/* harmony export */   "CODE_DOWN": () => (/* binding */ CODE_DOWN),
/* harmony export */   "CODE_END": () => (/* binding */ CODE_END),
/* harmony export */   "CODE_ENTER": () => (/* binding */ CODE_ENTER),
/* harmony export */   "CODE_ESC": () => (/* binding */ CODE_ESC),
/* harmony export */   "CODE_HOME": () => (/* binding */ CODE_HOME),
/* harmony export */   "CODE_LEFT": () => (/* binding */ CODE_LEFT),
/* harmony export */   "CODE_PAGEDOWN": () => (/* binding */ CODE_PAGEDOWN),
/* harmony export */   "CODE_PAGEUP": () => (/* binding */ CODE_PAGEUP),
/* harmony export */   "CODE_RIGHT": () => (/* binding */ CODE_RIGHT),
/* harmony export */   "CODE_SPACE": () => (/* binding */ CODE_SPACE),
/* harmony export */   "CODE_UP": () => (/* binding */ CODE_UP)
/* harmony export */ });
var CODE_BACKSPACE = 8;
var CODE_BREAK = 19;
var CODE_DELETE = 46;
var CODE_DOWN = 40;
var CODE_END = 35;
var CODE_ENTER = 13;
var CODE_ESC = 27;
var CODE_HOME = 36;
var CODE_LEFT = 37;
var CODE_PAGEDOWN = 34;
var CODE_PAGEUP = 33;
var CODE_RIGHT = 39;
var CODE_SPACE = 32;
var CODE_UP = 38;

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/constants/props.js":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/constants/props.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PROP_TYPE_ANY": () => (/* binding */ PROP_TYPE_ANY),
/* harmony export */   "PROP_TYPE_ARRAY": () => (/* binding */ PROP_TYPE_ARRAY),
/* harmony export */   "PROP_TYPE_ARRAY_FUNCTION": () => (/* binding */ PROP_TYPE_ARRAY_FUNCTION),
/* harmony export */   "PROP_TYPE_ARRAY_OBJECT": () => (/* binding */ PROP_TYPE_ARRAY_OBJECT),
/* harmony export */   "PROP_TYPE_ARRAY_OBJECT_STRING": () => (/* binding */ PROP_TYPE_ARRAY_OBJECT_STRING),
/* harmony export */   "PROP_TYPE_ARRAY_STRING": () => (/* binding */ PROP_TYPE_ARRAY_STRING),
/* harmony export */   "PROP_TYPE_BOOLEAN": () => (/* binding */ PROP_TYPE_BOOLEAN),
/* harmony export */   "PROP_TYPE_BOOLEAN_NUMBER": () => (/* binding */ PROP_TYPE_BOOLEAN_NUMBER),
/* harmony export */   "PROP_TYPE_BOOLEAN_NUMBER_STRING": () => (/* binding */ PROP_TYPE_BOOLEAN_NUMBER_STRING),
/* harmony export */   "PROP_TYPE_BOOLEAN_STRING": () => (/* binding */ PROP_TYPE_BOOLEAN_STRING),
/* harmony export */   "PROP_TYPE_DATE": () => (/* binding */ PROP_TYPE_DATE),
/* harmony export */   "PROP_TYPE_DATE_STRING": () => (/* binding */ PROP_TYPE_DATE_STRING),
/* harmony export */   "PROP_TYPE_FUNCTION": () => (/* binding */ PROP_TYPE_FUNCTION),
/* harmony export */   "PROP_TYPE_FUNCTION_STRING": () => (/* binding */ PROP_TYPE_FUNCTION_STRING),
/* harmony export */   "PROP_TYPE_NUMBER": () => (/* binding */ PROP_TYPE_NUMBER),
/* harmony export */   "PROP_TYPE_NUMBER_OBJECT_STRING": () => (/* binding */ PROP_TYPE_NUMBER_OBJECT_STRING),
/* harmony export */   "PROP_TYPE_NUMBER_STRING": () => (/* binding */ PROP_TYPE_NUMBER_STRING),
/* harmony export */   "PROP_TYPE_OBJECT": () => (/* binding */ PROP_TYPE_OBJECT),
/* harmony export */   "PROP_TYPE_OBJECT_FUNCTION": () => (/* binding */ PROP_TYPE_OBJECT_FUNCTION),
/* harmony export */   "PROP_TYPE_OBJECT_STRING": () => (/* binding */ PROP_TYPE_OBJECT_STRING),
/* harmony export */   "PROP_TYPE_REG_EXP": () => (/* binding */ PROP_TYPE_REG_EXP),
/* harmony export */   "PROP_TYPE_STRING": () => (/* binding */ PROP_TYPE_STRING)
/* harmony export */ });
// General types
var PROP_TYPE_ANY = undefined;
var PROP_TYPE_ARRAY = Array;
var PROP_TYPE_BOOLEAN = Boolean;
var PROP_TYPE_DATE = Date;
var PROP_TYPE_FUNCTION = Function;
var PROP_TYPE_NUMBER = Number;
var PROP_TYPE_OBJECT = Object;
var PROP_TYPE_REG_EXP = RegExp;
var PROP_TYPE_STRING = String; // Multiple types

var PROP_TYPE_ARRAY_FUNCTION = [PROP_TYPE_ARRAY, PROP_TYPE_FUNCTION];
var PROP_TYPE_ARRAY_OBJECT = [PROP_TYPE_ARRAY, PROP_TYPE_OBJECT];
var PROP_TYPE_ARRAY_OBJECT_STRING = [PROP_TYPE_ARRAY, PROP_TYPE_OBJECT, PROP_TYPE_STRING];
var PROP_TYPE_ARRAY_STRING = [PROP_TYPE_ARRAY, PROP_TYPE_STRING];
var PROP_TYPE_BOOLEAN_NUMBER = [PROP_TYPE_BOOLEAN, PROP_TYPE_NUMBER];
var PROP_TYPE_BOOLEAN_NUMBER_STRING = [PROP_TYPE_BOOLEAN, PROP_TYPE_NUMBER, PROP_TYPE_STRING];
var PROP_TYPE_BOOLEAN_STRING = [PROP_TYPE_BOOLEAN, PROP_TYPE_STRING];
var PROP_TYPE_DATE_STRING = [PROP_TYPE_DATE, PROP_TYPE_STRING];
var PROP_TYPE_FUNCTION_STRING = [PROP_TYPE_FUNCTION, PROP_TYPE_STRING];
var PROP_TYPE_NUMBER_STRING = [PROP_TYPE_NUMBER, PROP_TYPE_STRING];
var PROP_TYPE_NUMBER_OBJECT_STRING = [PROP_TYPE_NUMBER, PROP_TYPE_OBJECT, PROP_TYPE_STRING];
var PROP_TYPE_OBJECT_FUNCTION = [PROP_TYPE_OBJECT, PROP_TYPE_FUNCTION];
var PROP_TYPE_OBJECT_STRING = [PROP_TYPE_OBJECT, PROP_TYPE_STRING];

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/constants/regex.js":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/constants/regex.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RX_ARRAY_NOTATION": () => (/* binding */ RX_ARRAY_NOTATION),
/* harmony export */   "RX_ASPECT": () => (/* binding */ RX_ASPECT),
/* harmony export */   "RX_ASPECT_SEPARATOR": () => (/* binding */ RX_ASPECT_SEPARATOR),
/* harmony export */   "RX_BV_PREFIX": () => (/* binding */ RX_BV_PREFIX),
/* harmony export */   "RX_COL_CLASS": () => (/* binding */ RX_COL_CLASS),
/* harmony export */   "RX_DATE": () => (/* binding */ RX_DATE),
/* harmony export */   "RX_DATE_SPLIT": () => (/* binding */ RX_DATE_SPLIT),
/* harmony export */   "RX_DIGITS": () => (/* binding */ RX_DIGITS),
/* harmony export */   "RX_ENCODED_COMMA": () => (/* binding */ RX_ENCODED_COMMA),
/* harmony export */   "RX_ENCODE_REVERSE": () => (/* binding */ RX_ENCODE_REVERSE),
/* harmony export */   "RX_EXTENSION": () => (/* binding */ RX_EXTENSION),
/* harmony export */   "RX_HASH": () => (/* binding */ RX_HASH),
/* harmony export */   "RX_HASH_ID": () => (/* binding */ RX_HASH_ID),
/* harmony export */   "RX_HREF": () => (/* binding */ RX_HREF),
/* harmony export */   "RX_HTML_TAGS": () => (/* binding */ RX_HTML_TAGS),
/* harmony export */   "RX_HYPHENATE": () => (/* binding */ RX_HYPHENATE),
/* harmony export */   "RX_ICON_PREFIX": () => (/* binding */ RX_ICON_PREFIX),
/* harmony export */   "RX_LOWER_UPPER": () => (/* binding */ RX_LOWER_UPPER),
/* harmony export */   "RX_NUMBER": () => (/* binding */ RX_NUMBER),
/* harmony export */   "RX_PLUS": () => (/* binding */ RX_PLUS),
/* harmony export */   "RX_QUERY_START": () => (/* binding */ RX_QUERY_START),
/* harmony export */   "RX_REGEXP_REPLACE": () => (/* binding */ RX_REGEXP_REPLACE),
/* harmony export */   "RX_SPACES": () => (/* binding */ RX_SPACES),
/* harmony export */   "RX_SPACE_SPLIT": () => (/* binding */ RX_SPACE_SPLIT),
/* harmony export */   "RX_STAR": () => (/* binding */ RX_STAR),
/* harmony export */   "RX_START_SPACE_WORD": () => (/* binding */ RX_START_SPACE_WORD),
/* harmony export */   "RX_STRIP_LOCALE_MODS": () => (/* binding */ RX_STRIP_LOCALE_MODS),
/* harmony export */   "RX_TIME": () => (/* binding */ RX_TIME),
/* harmony export */   "RX_TRIM_LEFT": () => (/* binding */ RX_TRIM_LEFT),
/* harmony export */   "RX_TRIM_RIGHT": () => (/* binding */ RX_TRIM_RIGHT),
/* harmony export */   "RX_UNDERSCORE": () => (/* binding */ RX_UNDERSCORE),
/* harmony export */   "RX_UN_KEBAB": () => (/* binding */ RX_UN_KEBAB)
/* harmony export */ });
// --- General ---
var RX_ARRAY_NOTATION = /\[(\d+)]/g;
var RX_BV_PREFIX = /^(BV?)/;
var RX_DIGITS = /^\d+$/;
var RX_EXTENSION = /^\..+/;
var RX_HASH = /^#/;
var RX_HASH_ID = /^#[A-Za-z]+[\w\-:.]*$/;
var RX_HTML_TAGS = /(<([^>]+)>)/gi;
var RX_HYPHENATE = /\B([A-Z])/g;
var RX_LOWER_UPPER = /([a-z])([A-Z])/g;
var RX_NUMBER = /^[0-9]*\.?[0-9]+$/;
var RX_PLUS = /\+/g;
var RX_REGEXP_REPLACE = /[-/\\^$*+?.()|[\]{}]/g;
var RX_SPACES = /[\s\uFEFF\xA0]+/g;
var RX_SPACE_SPLIT = /\s+/;
var RX_STAR = /\/\*$/;
var RX_START_SPACE_WORD = /(\s|^)(\w)/g;
var RX_TRIM_LEFT = /^\s+/;
var RX_TRIM_RIGHT = /\s+$/;
var RX_UNDERSCORE = /_/g;
var RX_UN_KEBAB = /-(\w)/g; // --- Date ---
// Loose YYYY-MM-DD matching, ignores any appended time inforation
// Matches '1999-12-20', '1999-1-1', '1999-01-20T22:51:49.118Z', '1999-01-02 13:00:00'

var RX_DATE = /^\d+-\d\d?-\d\d?(?:\s|T|$)/; // Used to split off the date parts of the YYYY-MM-DD string

var RX_DATE_SPLIT = /-|\s|T/; // Time string RegEx (optional seconds)

var RX_TIME = /^([0-1]?[0-9]|2[0-3]):[0-5]?[0-9](:[0-5]?[0-9])?$/; // --- URL ---
// HREFs must end with a hash followed by at least one non-hash character

var RX_HREF = /^.*(#[^#]+)$/;
var RX_ENCODED_COMMA = /%2C/g;
var RX_ENCODE_REVERSE = /[!'()*]/g;
var RX_QUERY_START = /^(\?|#|&)/; // --- Aspect ---

var RX_ASPECT = /^\d+(\.\d*)?[/:]\d+(\.\d*)?$/;
var RX_ASPECT_SEPARATOR = /[/:]/; // --- Grid ---

var RX_COL_CLASS = /^col-/; // --- Icon ---

var RX_ICON_PREFIX = /^BIcon/; // --- Locale ---

var RX_STRIP_LOCALE_MODS = /-u-.+/;

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/constants/safe-types.js":
/*!****************************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/constants/safe-types.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Element": () => (/* binding */ Element),
/* harmony export */   "File": () => (/* binding */ File),
/* harmony export */   "HTMLElement": () => (/* binding */ HTMLElement),
/* harmony export */   "SVGElement": () => (/* binding */ SVGElement)
/* harmony export */ });
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./env */ "./node_modules/bootstrap-vue/esm/constants/env.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } Object.defineProperty(subClass, "prototype", { value: Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }), writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


/* istanbul ignore next */

var Element = _env__WEBPACK_IMPORTED_MODULE_0__.HAS_WINDOW_SUPPORT ? _env__WEBPACK_IMPORTED_MODULE_0__.WINDOW.Element : /*#__PURE__*/function (_Object) {
  _inherits(Element, _Object);

  var _super = _createSuper(Element);

  function Element() {
    _classCallCheck(this, Element);

    return _super.apply(this, arguments);
  }

  return Element;
}( /*#__PURE__*/_wrapNativeSuper(Object));
/* istanbul ignore next */

var HTMLElement = _env__WEBPACK_IMPORTED_MODULE_0__.HAS_WINDOW_SUPPORT ? _env__WEBPACK_IMPORTED_MODULE_0__.WINDOW.HTMLElement : /*#__PURE__*/function (_Element) {
  _inherits(HTMLElement, _Element);

  var _super2 = _createSuper(HTMLElement);

  function HTMLElement() {
    _classCallCheck(this, HTMLElement);

    return _super2.apply(this, arguments);
  }

  return HTMLElement;
}(Element);
/* istanbul ignore next */

var SVGElement = _env__WEBPACK_IMPORTED_MODULE_0__.HAS_WINDOW_SUPPORT ? _env__WEBPACK_IMPORTED_MODULE_0__.WINDOW.SVGElement : /*#__PURE__*/function (_Element2) {
  _inherits(SVGElement, _Element2);

  var _super3 = _createSuper(SVGElement);

  function SVGElement() {
    _classCallCheck(this, SVGElement);

    return _super3.apply(this, arguments);
  }

  return SVGElement;
}(Element);
/* istanbul ignore next */

var File = _env__WEBPACK_IMPORTED_MODULE_0__.HAS_WINDOW_SUPPORT ? _env__WEBPACK_IMPORTED_MODULE_0__.WINDOW.File : /*#__PURE__*/function (_Object2) {
  _inherits(File, _Object2);

  var _super4 = _createSuper(File);

  function File() {
    _classCallCheck(this, File);

    return _super4.apply(this, arguments);
  }

  return File;
}( /*#__PURE__*/_wrapNativeSuper(Object));

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/constants/slots.js":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/constants/slots.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SLOT_NAME_ADD_BUTTON_TEXT": () => (/* binding */ SLOT_NAME_ADD_BUTTON_TEXT),
/* harmony export */   "SLOT_NAME_APPEND": () => (/* binding */ SLOT_NAME_APPEND),
/* harmony export */   "SLOT_NAME_ASIDE": () => (/* binding */ SLOT_NAME_ASIDE),
/* harmony export */   "SLOT_NAME_BADGE": () => (/* binding */ SLOT_NAME_BADGE),
/* harmony export */   "SLOT_NAME_BOTTOM_ROW": () => (/* binding */ SLOT_NAME_BOTTOM_ROW),
/* harmony export */   "SLOT_NAME_BUTTON_CONTENT": () => (/* binding */ SLOT_NAME_BUTTON_CONTENT),
/* harmony export */   "SLOT_NAME_CUSTOM_FOOT": () => (/* binding */ SLOT_NAME_CUSTOM_FOOT),
/* harmony export */   "SLOT_NAME_DECREMENT": () => (/* binding */ SLOT_NAME_DECREMENT),
/* harmony export */   "SLOT_NAME_DEFAULT": () => (/* binding */ SLOT_NAME_DEFAULT),
/* harmony export */   "SLOT_NAME_DESCRIPTION": () => (/* binding */ SLOT_NAME_DESCRIPTION),
/* harmony export */   "SLOT_NAME_DISMISS": () => (/* binding */ SLOT_NAME_DISMISS),
/* harmony export */   "SLOT_NAME_DROP_PLACEHOLDER": () => (/* binding */ SLOT_NAME_DROP_PLACEHOLDER),
/* harmony export */   "SLOT_NAME_ELLIPSIS_TEXT": () => (/* binding */ SLOT_NAME_ELLIPSIS_TEXT),
/* harmony export */   "SLOT_NAME_EMPTY": () => (/* binding */ SLOT_NAME_EMPTY),
/* harmony export */   "SLOT_NAME_EMPTYFILTERED": () => (/* binding */ SLOT_NAME_EMPTYFILTERED),
/* harmony export */   "SLOT_NAME_FILE_NAME": () => (/* binding */ SLOT_NAME_FILE_NAME),
/* harmony export */   "SLOT_NAME_FIRST": () => (/* binding */ SLOT_NAME_FIRST),
/* harmony export */   "SLOT_NAME_FIRST_TEXT": () => (/* binding */ SLOT_NAME_FIRST_TEXT),
/* harmony export */   "SLOT_NAME_FOOTER": () => (/* binding */ SLOT_NAME_FOOTER),
/* harmony export */   "SLOT_NAME_HEADER": () => (/* binding */ SLOT_NAME_HEADER),
/* harmony export */   "SLOT_NAME_HEADER_CLOSE": () => (/* binding */ SLOT_NAME_HEADER_CLOSE),
/* harmony export */   "SLOT_NAME_ICON_CLEAR": () => (/* binding */ SLOT_NAME_ICON_CLEAR),
/* harmony export */   "SLOT_NAME_ICON_EMPTY": () => (/* binding */ SLOT_NAME_ICON_EMPTY),
/* harmony export */   "SLOT_NAME_ICON_FULL": () => (/* binding */ SLOT_NAME_ICON_FULL),
/* harmony export */   "SLOT_NAME_ICON_HALF": () => (/* binding */ SLOT_NAME_ICON_HALF),
/* harmony export */   "SLOT_NAME_IMG": () => (/* binding */ SLOT_NAME_IMG),
/* harmony export */   "SLOT_NAME_INCREMENT": () => (/* binding */ SLOT_NAME_INCREMENT),
/* harmony export */   "SLOT_NAME_INVALID_FEEDBACK": () => (/* binding */ SLOT_NAME_INVALID_FEEDBACK),
/* harmony export */   "SLOT_NAME_LABEL": () => (/* binding */ SLOT_NAME_LABEL),
/* harmony export */   "SLOT_NAME_LAST_TEXT": () => (/* binding */ SLOT_NAME_LAST_TEXT),
/* harmony export */   "SLOT_NAME_LEAD": () => (/* binding */ SLOT_NAME_LEAD),
/* harmony export */   "SLOT_NAME_LOADING": () => (/* binding */ SLOT_NAME_LOADING),
/* harmony export */   "SLOT_NAME_MODAL_BACKDROP": () => (/* binding */ SLOT_NAME_MODAL_BACKDROP),
/* harmony export */   "SLOT_NAME_MODAL_CANCEL": () => (/* binding */ SLOT_NAME_MODAL_CANCEL),
/* harmony export */   "SLOT_NAME_MODAL_FOOTER": () => (/* binding */ SLOT_NAME_MODAL_FOOTER),
/* harmony export */   "SLOT_NAME_MODAL_HEADER": () => (/* binding */ SLOT_NAME_MODAL_HEADER),
/* harmony export */   "SLOT_NAME_MODAL_HEADER_CLOSE": () => (/* binding */ SLOT_NAME_MODAL_HEADER_CLOSE),
/* harmony export */   "SLOT_NAME_MODAL_OK": () => (/* binding */ SLOT_NAME_MODAL_OK),
/* harmony export */   "SLOT_NAME_MODAL_TITLE": () => (/* binding */ SLOT_NAME_MODAL_TITLE),
/* harmony export */   "SLOT_NAME_NAV_NEXT_DECADE": () => (/* binding */ SLOT_NAME_NAV_NEXT_DECADE),
/* harmony export */   "SLOT_NAME_NAV_NEXT_MONTH": () => (/* binding */ SLOT_NAME_NAV_NEXT_MONTH),
/* harmony export */   "SLOT_NAME_NAV_NEXT_YEAR": () => (/* binding */ SLOT_NAME_NAV_NEXT_YEAR),
/* harmony export */   "SLOT_NAME_NAV_PEV_DECADE": () => (/* binding */ SLOT_NAME_NAV_PEV_DECADE),
/* harmony export */   "SLOT_NAME_NAV_PEV_MONTH": () => (/* binding */ SLOT_NAME_NAV_PEV_MONTH),
/* harmony export */   "SLOT_NAME_NAV_PEV_YEAR": () => (/* binding */ SLOT_NAME_NAV_PEV_YEAR),
/* harmony export */   "SLOT_NAME_NAV_THIS_MONTH": () => (/* binding */ SLOT_NAME_NAV_THIS_MONTH),
/* harmony export */   "SLOT_NAME_NEXT_TEXT": () => (/* binding */ SLOT_NAME_NEXT_TEXT),
/* harmony export */   "SLOT_NAME_OVERLAY": () => (/* binding */ SLOT_NAME_OVERLAY),
/* harmony export */   "SLOT_NAME_PAGE": () => (/* binding */ SLOT_NAME_PAGE),
/* harmony export */   "SLOT_NAME_PLACEHOLDER": () => (/* binding */ SLOT_NAME_PLACEHOLDER),
/* harmony export */   "SLOT_NAME_PREPEND": () => (/* binding */ SLOT_NAME_PREPEND),
/* harmony export */   "SLOT_NAME_PREV_TEXT": () => (/* binding */ SLOT_NAME_PREV_TEXT),
/* harmony export */   "SLOT_NAME_ROW_DETAILS": () => (/* binding */ SLOT_NAME_ROW_DETAILS),
/* harmony export */   "SLOT_NAME_TABLE_BUSY": () => (/* binding */ SLOT_NAME_TABLE_BUSY),
/* harmony export */   "SLOT_NAME_TABLE_CAPTION": () => (/* binding */ SLOT_NAME_TABLE_CAPTION),
/* harmony export */   "SLOT_NAME_TABLE_COLGROUP": () => (/* binding */ SLOT_NAME_TABLE_COLGROUP),
/* harmony export */   "SLOT_NAME_TABS_END": () => (/* binding */ SLOT_NAME_TABS_END),
/* harmony export */   "SLOT_NAME_TABS_START": () => (/* binding */ SLOT_NAME_TABS_START),
/* harmony export */   "SLOT_NAME_TEXT": () => (/* binding */ SLOT_NAME_TEXT),
/* harmony export */   "SLOT_NAME_THEAD_TOP": () => (/* binding */ SLOT_NAME_THEAD_TOP),
/* harmony export */   "SLOT_NAME_TITLE": () => (/* binding */ SLOT_NAME_TITLE),
/* harmony export */   "SLOT_NAME_TOAST_TITLE": () => (/* binding */ SLOT_NAME_TOAST_TITLE),
/* harmony export */   "SLOT_NAME_TOP_ROW": () => (/* binding */ SLOT_NAME_TOP_ROW),
/* harmony export */   "SLOT_NAME_VALID_FEEDBACK": () => (/* binding */ SLOT_NAME_VALID_FEEDBACK)
/* harmony export */ });
var SLOT_NAME_ADD_BUTTON_TEXT = 'add-button-text';
var SLOT_NAME_APPEND = 'append';
var SLOT_NAME_ASIDE = 'aside';
var SLOT_NAME_BADGE = 'badge';
var SLOT_NAME_BOTTOM_ROW = 'bottom-row';
var SLOT_NAME_BUTTON_CONTENT = 'button-content';
var SLOT_NAME_CUSTOM_FOOT = 'custom-foot';
var SLOT_NAME_DECREMENT = 'decrement';
var SLOT_NAME_DEFAULT = 'default';
var SLOT_NAME_DESCRIPTION = 'description';
var SLOT_NAME_DISMISS = 'dismiss';
var SLOT_NAME_DROP_PLACEHOLDER = 'drop-placeholder';
var SLOT_NAME_ELLIPSIS_TEXT = 'ellipsis-text';
var SLOT_NAME_EMPTY = 'empty';
var SLOT_NAME_EMPTYFILTERED = 'emptyfiltered';
var SLOT_NAME_FILE_NAME = 'file-name';
var SLOT_NAME_FIRST = 'first';
var SLOT_NAME_FIRST_TEXT = 'first-text';
var SLOT_NAME_FOOTER = 'footer';
var SLOT_NAME_HEADER = 'header';
var SLOT_NAME_HEADER_CLOSE = 'header-close';
var SLOT_NAME_ICON_CLEAR = 'icon-clear';
var SLOT_NAME_ICON_EMPTY = 'icon-empty';
var SLOT_NAME_ICON_FULL = 'icon-full';
var SLOT_NAME_ICON_HALF = 'icon-half';
var SLOT_NAME_IMG = 'img';
var SLOT_NAME_INCREMENT = 'increment';
var SLOT_NAME_INVALID_FEEDBACK = 'invalid-feedback';
var SLOT_NAME_LABEL = 'label';
var SLOT_NAME_LAST_TEXT = 'last-text';
var SLOT_NAME_LEAD = 'lead';
var SLOT_NAME_LOADING = 'loading';
var SLOT_NAME_MODAL_BACKDROP = 'modal-backdrop';
var SLOT_NAME_MODAL_CANCEL = 'modal-cancel';
var SLOT_NAME_MODAL_FOOTER = 'modal-footer';
var SLOT_NAME_MODAL_HEADER = 'modal-header';
var SLOT_NAME_MODAL_HEADER_CLOSE = 'modal-header-close';
var SLOT_NAME_MODAL_OK = 'modal-ok';
var SLOT_NAME_MODAL_TITLE = 'modal-title';
var SLOT_NAME_NAV_NEXT_DECADE = 'nav-next-decade';
var SLOT_NAME_NAV_NEXT_MONTH = 'nav-next-month';
var SLOT_NAME_NAV_NEXT_YEAR = 'nav-next-year';
var SLOT_NAME_NAV_PEV_DECADE = 'nav-prev-decade';
var SLOT_NAME_NAV_PEV_MONTH = 'nav-prev-month';
var SLOT_NAME_NAV_PEV_YEAR = 'nav-prev-year';
var SLOT_NAME_NAV_THIS_MONTH = 'nav-this-month';
var SLOT_NAME_NEXT_TEXT = 'next-text';
var SLOT_NAME_OVERLAY = 'overlay';
var SLOT_NAME_PAGE = 'page';
var SLOT_NAME_PLACEHOLDER = 'placeholder';
var SLOT_NAME_PREPEND = 'prepend';
var SLOT_NAME_PREV_TEXT = 'prev-text';
var SLOT_NAME_ROW_DETAILS = 'row-details';
var SLOT_NAME_TABLE_BUSY = 'table-busy';
var SLOT_NAME_TABLE_CAPTION = 'table-caption';
var SLOT_NAME_TABLE_COLGROUP = 'table-colgroup';
var SLOT_NAME_TABS_END = 'tabs-end';
var SLOT_NAME_TABS_START = 'tabs-start';
var SLOT_NAME_TEXT = 'text';
var SLOT_NAME_THEAD_TOP = 'thead-top';
var SLOT_NAME_TITLE = 'title';
var SLOT_NAME_TOAST_TITLE = 'toast-title';
var SLOT_NAME_TOP_ROW = 'top-row';
var SLOT_NAME_VALID_FEEDBACK = 'valid-feedback';

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/directives/modal/modal.js":
/*!******************************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/directives/modal/modal.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VBModal": () => (/* binding */ VBModal)
/* harmony export */ });
/* harmony import */ var _constants_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/components */ "./node_modules/bootstrap-vue/esm/constants/components.js");
/* harmony import */ var _constants_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/events */ "./node_modules/bootstrap-vue/esm/constants/events.js");
/* harmony import */ var _constants_key_codes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../constants/key-codes */ "./node_modules/bootstrap-vue/esm/constants/key-codes.js");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/dom */ "./node_modules/bootstrap-vue/esm/utils/dom.js");
/* harmony import */ var _utils_events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/events */ "./node_modules/bootstrap-vue/esm/utils/events.js");
/* harmony import */ var _utils_inspect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/inspect */ "./node_modules/bootstrap-vue/esm/utils/inspect.js");
/* harmony import */ var _utils_object__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/object */ "./node_modules/bootstrap-vue/esm/utils/object.js");
/* harmony import */ var _utils_get_event_root__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/get-event-root */ "./node_modules/bootstrap-vue/esm/utils/get-event-root.js");
/* harmony import */ var _utils_get_instance_from_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/get-instance-from-directive */ "./node_modules/bootstrap-vue/esm/utils/get-instance-from-directive.js");








 // Emitted show event for modal

var ROOT_ACTION_EVENT_NAME_SHOW = (0,_utils_events__WEBPACK_IMPORTED_MODULE_0__.getRootActionEventName)(_constants_components__WEBPACK_IMPORTED_MODULE_1__.NAME_MODAL, _constants_events__WEBPACK_IMPORTED_MODULE_2__.EVENT_NAME_SHOW); // Prop name we use to store info on root element

var PROPERTY = '__bv_modal_directive__';

var getTarget = function getTarget(_ref) {
  var _ref$modifiers = _ref.modifiers,
      modifiers = _ref$modifiers === void 0 ? {} : _ref$modifiers,
      arg = _ref.arg,
      value = _ref.value;
  // Try value, then arg, otherwise pick last modifier
  return (0,_utils_inspect__WEBPACK_IMPORTED_MODULE_3__.isString)(value) ? value : (0,_utils_inspect__WEBPACK_IMPORTED_MODULE_3__.isString)(arg) ? arg : (0,_utils_object__WEBPACK_IMPORTED_MODULE_4__.keys)(modifiers).reverse()[0];
};

var getTriggerElement = function getTriggerElement(el) {
  // If root element is a dropdown-item or nav-item, we
  // need to target the inner link or button instead
  return el && (0,_utils_dom__WEBPACK_IMPORTED_MODULE_5__.matches)(el, '.dropdown-menu > li, li.nav-item') ? (0,_utils_dom__WEBPACK_IMPORTED_MODULE_5__.select)('a, button', el) || el : el;
};

var setRole = function setRole(trigger) {
  // Ensure accessibility on non button elements
  if (trigger && trigger.tagName !== 'BUTTON') {
    // Only set a role if the trigger element doesn't have one
    if (!(0,_utils_dom__WEBPACK_IMPORTED_MODULE_5__.hasAttr)(trigger, 'role')) {
      (0,_utils_dom__WEBPACK_IMPORTED_MODULE_5__.setAttr)(trigger, 'role', 'button');
    } // Add a tabindex is not a button or link, and tabindex is not provided


    if (trigger.tagName !== 'A' && !(0,_utils_dom__WEBPACK_IMPORTED_MODULE_5__.hasAttr)(trigger, 'tabindex')) {
      (0,_utils_dom__WEBPACK_IMPORTED_MODULE_5__.setAttr)(trigger, 'tabindex', '0');
    }
  }
};

var bind = function bind(el, binding, vnode) {
  var target = getTarget(binding);
  var trigger = getTriggerElement(el);

  if (target && trigger) {
    var handler = function handler(event) {
      // `currentTarget` is the element with the listener on it
      var currentTarget = event.currentTarget;

      if (!(0,_utils_dom__WEBPACK_IMPORTED_MODULE_5__.isDisabled)(currentTarget)) {
        var type = event.type;
        var key = event.keyCode; // Open modal only if trigger is not disabled

        if (type === 'click' || type === 'keydown' && (key === _constants_key_codes__WEBPACK_IMPORTED_MODULE_6__.CODE_ENTER || key === _constants_key_codes__WEBPACK_IMPORTED_MODULE_6__.CODE_SPACE)) {
          (0,_utils_get_event_root__WEBPACK_IMPORTED_MODULE_7__.getEventRoot)((0,_utils_get_instance_from_directive__WEBPACK_IMPORTED_MODULE_8__.getInstanceFromDirective)(vnode, binding)).$emit(ROOT_ACTION_EVENT_NAME_SHOW, target, currentTarget);
        }
      }
    };

    el[PROPERTY] = {
      handler: handler,
      target: target,
      trigger: trigger
    }; // If element is not a button, we add `role="button"` for accessibility

    setRole(trigger); // Listen for click events

    (0,_utils_events__WEBPACK_IMPORTED_MODULE_0__.eventOn)(trigger, 'click', handler, _constants_events__WEBPACK_IMPORTED_MODULE_2__.EVENT_OPTIONS_PASSIVE);

    if (trigger.tagName !== 'BUTTON' && (0,_utils_dom__WEBPACK_IMPORTED_MODULE_5__.getAttr)(trigger, 'role') === 'button') {
      // If trigger isn't a button but has role button,
      // we also listen for `keydown.space` && `keydown.enter`
      (0,_utils_events__WEBPACK_IMPORTED_MODULE_0__.eventOn)(trigger, 'keydown', handler, _constants_events__WEBPACK_IMPORTED_MODULE_2__.EVENT_OPTIONS_PASSIVE);
    }
  }
};

var unbind = function unbind(el) {
  var oldProp = el[PROPERTY] || {};
  var trigger = oldProp.trigger;
  var handler = oldProp.handler;

  if (trigger && handler) {
    (0,_utils_events__WEBPACK_IMPORTED_MODULE_0__.eventOff)(trigger, 'click', handler, _constants_events__WEBPACK_IMPORTED_MODULE_2__.EVENT_OPTIONS_PASSIVE);
    (0,_utils_events__WEBPACK_IMPORTED_MODULE_0__.eventOff)(trigger, 'keydown', handler, _constants_events__WEBPACK_IMPORTED_MODULE_2__.EVENT_OPTIONS_PASSIVE);
    (0,_utils_events__WEBPACK_IMPORTED_MODULE_0__.eventOff)(el, 'click', handler, _constants_events__WEBPACK_IMPORTED_MODULE_2__.EVENT_OPTIONS_PASSIVE);
    (0,_utils_events__WEBPACK_IMPORTED_MODULE_0__.eventOff)(el, 'keydown', handler, _constants_events__WEBPACK_IMPORTED_MODULE_2__.EVENT_OPTIONS_PASSIVE);
  }

  delete el[PROPERTY];
};

var componentUpdated = function componentUpdated(el, binding, vnode) {
  var oldProp = el[PROPERTY] || {};
  var target = getTarget(binding);
  var trigger = getTriggerElement(el);

  if (target !== oldProp.target || trigger !== oldProp.trigger) {
    // We bind and rebind if the target or trigger changes
    unbind(el, binding, vnode);
    bind(el, binding, vnode);
  } // If trigger element is not a button, ensure `role="button"`
  // is still set for accessibility


  setRole(trigger);
};

var updated = function updated() {};
/*
 * Export our directive
 */


var VBModal = {
  inserted: componentUpdated,
  updated: updated,
  componentUpdated: componentUpdated,
  unbind: unbind
};

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/mixins/attrs.js":
/*!********************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/mixins/attrs.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "attrsMixin": () => (/* binding */ attrsMixin)
/* harmony export */ });
/* harmony import */ var _utils_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/cache */ "./node_modules/bootstrap-vue/esm/utils/cache.js");
/* harmony import */ var _vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../vue */ "./node_modules/bootstrap-vue/esm/vue.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var attrsMixinVue2 = (0,_utils_cache__WEBPACK_IMPORTED_MODULE_0__.makePropCacheMixin)('$attrs', 'bvAttrs');
var attrsMixinVue3 = (0,_vue__WEBPACK_IMPORTED_MODULE_1__.extend)({
  computed: {
    bvAttrs: function bvAttrs() {
      var bvAttrs = _objectSpread({}, this.$attrs);

      Object.keys(bvAttrs).forEach(function (key) {
        if (bvAttrs[key] === undefined) {
          delete bvAttrs[key];
        }
      });
      return bvAttrs;
    }
  }
});
var attrsMixin = _vue__WEBPACK_IMPORTED_MODULE_1__.isVue3 ? attrsMixinVue3 : attrsMixinVue2;

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/mixins/id.js":
/*!*****************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/mixins/id.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "idMixin": () => (/* binding */ idMixin),
/* harmony export */   "props": () => (/* binding */ props)
/* harmony export */ });
/* harmony import */ var _vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../vue */ "./node_modules/bootstrap-vue/esm/vue.js");
/* harmony import */ var _constants_props__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/props */ "./node_modules/bootstrap-vue/esm/constants/props.js");
/* harmony import */ var _utils_props__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/props */ "./node_modules/bootstrap-vue/esm/utils/props.js");
// SSR safe client-side ID attribute generation
// ID's can only be generated client-side, after mount
// `this._uid` is not synched between server and client


 // --- Props ---

var props = {
  id: (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_STRING)
}; // --- Mixin ---
// @vue/component

var idMixin = (0,_vue__WEBPACK_IMPORTED_MODULE_2__.extend)({
  props: props,
  data: function data() {
    return {
      localId_: null
    };
  },
  computed: {
    safeId: function safeId() {
      // Computed property that returns a dynamic function for creating the ID
      // Reacts to changes in both `.id` and `.localId_` and regenerates a new function
      var id = this.id || this.localId_; // We return a function that accepts an optional suffix string
      // So this computed prop looks and works like a method
      // but benefits from Vue's computed prop caching

      var fn = function fn(suffix) {
        if (!id) {
          return null;
        }

        suffix = String(suffix || '').replace(/\s+/g, '_');
        return suffix ? id + '_' + suffix : id;
      };

      return fn;
    }
  },
  mounted: function mounted() {
    var _this = this;

    // `mounted()` only occurs client-side
    this.$nextTick(function () {
      // Update DOM with auto-generated ID after mount
      // to prevent SSR hydration errors
      _this.localId_ = "__BVID__".concat(_this[_vue__WEBPACK_IMPORTED_MODULE_2__.COMPONENT_UID_KEY]);
    });
  }
});

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/mixins/listen-on-document.js":
/*!*********************************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/mixins/listen-on-document.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "listenOnDocumentMixin": () => (/* binding */ listenOnDocumentMixin)
/* harmony export */ });
/* harmony import */ var _vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vue */ "./node_modules/bootstrap-vue/esm/vue.js");
/* harmony import */ var _constants_env__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/env */ "./node_modules/bootstrap-vue/esm/constants/env.js");
/* harmony import */ var _constants_events__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constants/events */ "./node_modules/bootstrap-vue/esm/constants/events.js");
/* harmony import */ var _utils_array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/array */ "./node_modules/bootstrap-vue/esm/utils/array.js");
/* harmony import */ var _utils_events__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/events */ "./node_modules/bootstrap-vue/esm/utils/events.js");
/* harmony import */ var _utils_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/object */ "./node_modules/bootstrap-vue/esm/utils/object.js");





 // --- Constants ---

var PROP = '$_documentListeners'; // --- Mixin ---
// @vue/component

var listenOnDocumentMixin = (0,_vue__WEBPACK_IMPORTED_MODULE_0__.extend)({
  created: function created() {
    // Define non-reactive property
    // Object of arrays, keyed by event name,
    // where value is an array of callbacks
    this[PROP] = {};
  },
  beforeDestroy: function beforeDestroy() {
    var _this = this;

    // Unregister all registered listeners
    (0,_utils_object__WEBPACK_IMPORTED_MODULE_1__.keys)(this[PROP] || {}).forEach(function (event) {
      _this[PROP][event].forEach(function (callback) {
        _this.listenOffDocument(event, callback);
      });
    });
    this[PROP] = null;
  },
  methods: {
    registerDocumentListener: function registerDocumentListener(event, callback) {
      if (this[PROP]) {
        this[PROP][event] = this[PROP][event] || [];

        if (!(0,_utils_array__WEBPACK_IMPORTED_MODULE_2__.arrayIncludes)(this[PROP][event], callback)) {
          this[PROP][event].push(callback);
        }
      }
    },
    unregisterDocumentListener: function unregisterDocumentListener(event, callback) {
      if (this[PROP] && this[PROP][event]) {
        this[PROP][event] = this[PROP][event].filter(function (cb) {
          return cb !== callback;
        });
      }
    },
    listenDocument: function listenDocument(on, event, callback) {
      on ? this.listenOnDocument(event, callback) : this.listenOffDocument(event, callback);
    },
    listenOnDocument: function listenOnDocument(event, callback) {
      if (_constants_env__WEBPACK_IMPORTED_MODULE_3__.IS_BROWSER) {
        (0,_utils_events__WEBPACK_IMPORTED_MODULE_4__.eventOn)(document, event, callback, _constants_events__WEBPACK_IMPORTED_MODULE_5__.EVENT_OPTIONS_NO_CAPTURE);
        this.registerDocumentListener(event, callback);
      }
    },
    listenOffDocument: function listenOffDocument(event, callback) {
      if (_constants_env__WEBPACK_IMPORTED_MODULE_3__.IS_BROWSER) {
        (0,_utils_events__WEBPACK_IMPORTED_MODULE_4__.eventOff)(document, event, callback, _constants_events__WEBPACK_IMPORTED_MODULE_5__.EVENT_OPTIONS_NO_CAPTURE);
      }

      this.unregisterDocumentListener(event, callback);
    }
  }
});

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/mixins/listen-on-root.js":
/*!*****************************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/mixins/listen-on-root.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "listenOnRootMixin": () => (/* binding */ listenOnRootMixin)
/* harmony export */ });
/* harmony import */ var _vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vue */ "./node_modules/bootstrap-vue/esm/vue.js");
/* harmony import */ var _utils_array__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/array */ "./node_modules/bootstrap-vue/esm/utils/array.js");
/* harmony import */ var _utils_object__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/object */ "./node_modules/bootstrap-vue/esm/utils/object.js");
/* harmony import */ var _utils_get_event_root__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/get-event-root */ "./node_modules/bootstrap-vue/esm/utils/get-event-root.js");



 // --- Constants ---

var PROP = '$_rootListeners'; // --- Mixin ---
// @vue/component

var listenOnRootMixin = (0,_vue__WEBPACK_IMPORTED_MODULE_0__.extend)({
  computed: {
    bvEventRoot: function bvEventRoot() {
      return (0,_utils_get_event_root__WEBPACK_IMPORTED_MODULE_1__.getEventRoot)(this);
    }
  },
  created: function created() {
    // Define non-reactive property
    // Object of arrays, keyed by event name,
    // where value is an array of callbacks
    this[PROP] = {};
  },
  beforeDestroy: function beforeDestroy() {
    var _this = this;

    // Unregister all registered listeners
    (0,_utils_object__WEBPACK_IMPORTED_MODULE_2__.keys)(this[PROP] || {}).forEach(function (event) {
      _this[PROP][event].forEach(function (callback) {
        _this.listenOffRoot(event, callback);
      });
    });
    this[PROP] = null;
  },
  methods: {
    registerRootListener: function registerRootListener(event, callback) {
      if (this[PROP]) {
        this[PROP][event] = this[PROP][event] || [];

        if (!(0,_utils_array__WEBPACK_IMPORTED_MODULE_3__.arrayIncludes)(this[PROP][event], callback)) {
          this[PROP][event].push(callback);
        }
      }
    },
    unregisterRootListener: function unregisterRootListener(event, callback) {
      if (this[PROP] && this[PROP][event]) {
        this[PROP][event] = this[PROP][event].filter(function (cb) {
          return cb !== callback;
        });
      }
    },

    /**
     * Safely register event listeners on the root Vue node
     * While Vue automatically removes listeners for individual components,
     * when a component registers a listener on `$root` and is destroyed,
     * this orphans a callback because the node is gone, but the `$root`
     * does not clear the callback
     *
     * When registering a `$root` listener, it also registers the listener
     * to be removed in the component's `beforeDestroy()` hook
     *
     * @param {string} event
     * @param {function} callback
     */
    listenOnRoot: function listenOnRoot(event, callback) {
      if (this.bvEventRoot) {
        this.bvEventRoot.$on(event, callback);
        this.registerRootListener(event, callback);
      }
    },

    /**
     * Safely register a `$once()` event listener on the root Vue node
     * While Vue automatically removes listeners for individual components,
     * when a component registers a listener on `$root` and is destroyed,
     * this orphans a callback because the node is gone, but the `$root`
     * does not clear the callback
     *
     * When registering a `$root` listener, it also registers the listener
     * to be removed in the component's `beforeDestroy()` hook
     *
     * @param {string} event
     * @param {function} callback
     */
    listenOnRootOnce: function listenOnRootOnce(event, callback) {
      var _this2 = this;

      if (this.bvEventRoot) {
        var _callback = function _callback() {
          _this2.unregisterRootListener(_callback); // eslint-disable-next-line node/no-callback-literal


          callback.apply(void 0, arguments);
        };

        this.bvEventRoot.$once(event, _callback);
        this.registerRootListener(event, _callback);
      }
    },

    /**
     * Safely unregister event listeners from the root Vue node
     *
     * @param {string} event
     * @param {function} callback
     */
    listenOffRoot: function listenOffRoot(event, callback) {
      this.unregisterRootListener(event, callback);

      if (this.bvEventRoot) {
        this.bvEventRoot.$off(event, callback);
      }
    },

    /**
     * Convenience method for calling `vm.$emit()` on `$root`
     *
     * @param {string} event
     * @param {*} args
     */
    emitOnRoot: function emitOnRoot(event) {
      if (this.bvEventRoot) {
        var _this$bvEventRoot;

        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        (_this$bvEventRoot = this.bvEventRoot).$emit.apply(_this$bvEventRoot, [event].concat(args));
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/mixins/listen-on-window.js":
/*!*******************************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/mixins/listen-on-window.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "listenOnWindowMixin": () => (/* binding */ listenOnWindowMixin)
/* harmony export */ });
/* harmony import */ var _vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vue */ "./node_modules/bootstrap-vue/esm/vue.js");
/* harmony import */ var _constants_env__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/env */ "./node_modules/bootstrap-vue/esm/constants/env.js");
/* harmony import */ var _constants_events__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constants/events */ "./node_modules/bootstrap-vue/esm/constants/events.js");
/* harmony import */ var _utils_array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/array */ "./node_modules/bootstrap-vue/esm/utils/array.js");
/* harmony import */ var _utils_events__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/events */ "./node_modules/bootstrap-vue/esm/utils/events.js");
/* harmony import */ var _utils_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/object */ "./node_modules/bootstrap-vue/esm/utils/object.js");





 // --- Constants ---

var PROP = '$_windowListeners'; // --- Mixin ---
// @vue/component

var listenOnWindowMixin = (0,_vue__WEBPACK_IMPORTED_MODULE_0__.extend)({
  created: function created() {
    // Define non-reactive property
    // Object of arrays, keyed by event name,
    // where value is an array of callbacks
    this[PROP] = {};
  },
  beforeDestroy: function beforeDestroy() {
    var _this = this;

    // Unregister all registered listeners
    (0,_utils_object__WEBPACK_IMPORTED_MODULE_1__.keys)(this[PROP] || {}).forEach(function (event) {
      _this[PROP][event].forEach(function (callback) {
        _this.listenOffWindow(event, callback);
      });
    });
    this[PROP] = null;
  },
  methods: {
    registerWindowListener: function registerWindowListener(event, callback) {
      if (this[PROP]) {
        this[PROP][event] = this[PROP][event] || [];

        if (!(0,_utils_array__WEBPACK_IMPORTED_MODULE_2__.arrayIncludes)(this[PROP][event], callback)) {
          this[PROP][event].push(callback);
        }
      }
    },
    unregisterWindowListener: function unregisterWindowListener(event, callback) {
      if (this[PROP] && this[PROP][event]) {
        this[PROP][event] = this[PROP][event].filter(function (cb) {
          return cb !== callback;
        });
      }
    },
    listenWindow: function listenWindow(on, event, callback) {
      on ? this.listenOnWindow(event, callback) : this.listenOffWindow(event, callback);
    },
    listenOnWindow: function listenOnWindow(event, callback) {
      if (_constants_env__WEBPACK_IMPORTED_MODULE_3__.IS_BROWSER) {
        (0,_utils_events__WEBPACK_IMPORTED_MODULE_4__.eventOn)(window, event, callback, _constants_events__WEBPACK_IMPORTED_MODULE_5__.EVENT_OPTIONS_NO_CAPTURE);
        this.registerWindowListener(event, callback);
      }
    },
    listenOffWindow: function listenOffWindow(event, callback) {
      if (_constants_env__WEBPACK_IMPORTED_MODULE_3__.IS_BROWSER) {
        (0,_utils_events__WEBPACK_IMPORTED_MODULE_4__.eventOff)(window, event, callback, _constants_events__WEBPACK_IMPORTED_MODULE_5__.EVENT_OPTIONS_NO_CAPTURE);
      }

      this.unregisterWindowListener(event, callback);
    }
  }
});

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/mixins/listeners.js":
/*!************************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/mixins/listeners.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "listenersMixin": () => (/* binding */ listenersMixin)
/* harmony export */ });
/* harmony import */ var _utils_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/cache */ "./node_modules/bootstrap-vue/esm/utils/cache.js");
/* harmony import */ var _vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../vue */ "./node_modules/bootstrap-vue/esm/vue.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var listenersMixinVue2 = (0,_utils_cache__WEBPACK_IMPORTED_MODULE_0__.makePropCacheMixin)('$listeners', 'bvListeners');
var listenersMixinVue3 = (0,_vue__WEBPACK_IMPORTED_MODULE_1__.extend)({
  data: function data() {
    return {
      bvListeners: {}
    };
  },
  created: function created() {
    this.bvListeners = _objectSpread({}, this.$listeners);
  },
  beforeUpdate: function beforeUpdate() {
    this.bvListeners = _objectSpread({}, this.$listeners);
  }
});
var listenersMixin = _vue__WEBPACK_IMPORTED_MODULE_1__.isVue3 ? listenersMixinVue3 : listenersMixinVue2;

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/mixins/normalize-slot.js":
/*!*****************************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/mixins/normalize-slot.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "normalizeSlotMixin": () => (/* binding */ normalizeSlotMixin)
/* harmony export */ });
/* harmony import */ var _vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vue */ "./node_modules/bootstrap-vue/esm/vue.js");
/* harmony import */ var _constants_slots__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/slots */ "./node_modules/bootstrap-vue/esm/constants/slots.js");
/* harmony import */ var _utils_normalize_slot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/normalize-slot */ "./node_modules/bootstrap-vue/esm/utils/normalize-slot.js");
/* harmony import */ var _utils_array__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/array */ "./node_modules/bootstrap-vue/esm/utils/array.js");



 // @vue/component

var normalizeSlotMixin = (0,_vue__WEBPACK_IMPORTED_MODULE_0__.extend)({
  methods: {
    // Returns `true` if the either a `$scopedSlot` or `$slot` exists with the specified name
    // `name` can be a string name or an array of names
    hasNormalizedSlot: function hasNormalizedSlot() {
      var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _constants_slots__WEBPACK_IMPORTED_MODULE_1__.SLOT_NAME_DEFAULT;
      var scopedSlots = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.$scopedSlots;
      var slots = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.$slots;
      return (0,_utils_normalize_slot__WEBPACK_IMPORTED_MODULE_2__.hasNormalizedSlot)(name, scopedSlots, slots);
    },
    // Returns an array of rendered VNodes if slot found, otherwise `undefined`
    // `name` can be a string name or an array of names
    normalizeSlot: function normalizeSlot() {
      var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _constants_slots__WEBPACK_IMPORTED_MODULE_1__.SLOT_NAME_DEFAULT;
      var scope = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var scopedSlots = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.$scopedSlots;
      var slots = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : this.$slots;

      var vNodes = (0,_utils_normalize_slot__WEBPACK_IMPORTED_MODULE_2__.normalizeSlot)(name, scope, scopedSlots, slots);

      return vNodes ? (0,_utils_array__WEBPACK_IMPORTED_MODULE_3__.concat)(vNodes) : vNodes;
    }
  }
});

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/mixins/scoped-style.js":
/*!***************************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/mixins/scoped-style.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "scopedStyleMixin": () => (/* binding */ scopedStyleMixin)
/* harmony export */ });
/* harmony import */ var _vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vue */ "./node_modules/bootstrap-vue/esm/vue.js");
/* harmony import */ var _mixins_use_parent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mixins/use-parent */ "./node_modules/bootstrap-vue/esm/mixins/use-parent.js");
/* harmony import */ var _utils_get_scope_id__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/get-scope-id */ "./node_modules/bootstrap-vue/esm/utils/get-scope-id.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



 // @vue/component

var scopedStyleMixin = (0,_vue__WEBPACK_IMPORTED_MODULE_0__.extend)({
  mixins: [_mixins_use_parent__WEBPACK_IMPORTED_MODULE_1__.useParentMixin],
  computed: {
    scopedStyleAttrs: function scopedStyleAttrs() {
      var scopeId = (0,_utils_get_scope_id__WEBPACK_IMPORTED_MODULE_2__.getScopeId)(this.bvParent);
      return scopeId ? _defineProperty({}, scopeId, '') : {};
    }
  }
});

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/mixins/use-parent.js":
/*!*************************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/mixins/use-parent.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useParentMixin": () => (/* binding */ useParentMixin)
/* harmony export */ });
/* harmony import */ var _vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vue */ "./node_modules/bootstrap-vue/esm/vue.js");
 // --- Mixin ---
// @vue/component

var useParentMixin = (0,_vue__WEBPACK_IMPORTED_MODULE_0__.extend)({
  computed: {
    bvParent: function bvParent() {
      return this.$parent || this.$root === this && this.$options.bvParent;
    }
  }
});

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/utils/array.js":
/*!*******************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/utils/array.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "arrayIncludes": () => (/* binding */ arrayIncludes),
/* harmony export */   "concat": () => (/* binding */ concat),
/* harmony export */   "createArray": () => (/* binding */ createArray),
/* harmony export */   "flatten": () => (/* binding */ flatten),
/* harmony export */   "flattenDeep": () => (/* binding */ flattenDeep),
/* harmony export */   "from": () => (/* binding */ from)
/* harmony export */ });
/* harmony import */ var _inspect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inspect */ "./node_modules/bootstrap-vue/esm/utils/inspect.js");
 // --- Static ---

var from = function from() {
  return Array.from.apply(Array, arguments);
}; // --- Instance ---

var arrayIncludes = function arrayIncludes(array, value) {
  return array.indexOf(value) !== -1;
};
var concat = function concat() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return Array.prototype.concat.apply([], args);
}; // --- Utilities ---

var createArray = function createArray(length, fillFn) {
  var mapFn = (0,_inspect__WEBPACK_IMPORTED_MODULE_0__.isFunction)(fillFn) ? fillFn : function () {
    return fillFn;
  };
  return Array.apply(null, {
    length: length
  }).map(mapFn);
};
var flatten = function flatten(array) {
  return array.reduce(function (result, item) {
    return concat(result, item);
  }, []);
};
var flattenDeep = function flattenDeep(array) {
  return array.reduce(function (result, item) {
    return concat(result, Array.isArray(item) ? flattenDeep(item) : item);
  }, []);
};

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/utils/bv-event.class.js":
/*!****************************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/utils/bv-event.class.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BvEvent": () => (/* binding */ BvEvent)
/* harmony export */ });
/* harmony import */ var _object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./object */ "./node_modules/bootstrap-vue/esm/utils/object.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }


var BvEvent = /*#__PURE__*/function () {
  function BvEvent(type) {
    var eventInit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, BvEvent);

    // Start by emulating native Event constructor
    if (!type) {
      /* istanbul ignore next */
      throw new TypeError("Failed to construct '".concat(this.constructor.name, "'. 1 argument required, ").concat(arguments.length, " given."));
    } // Merge defaults first, the eventInit, and the type last
    // so it can't be overwritten


    (0,_object__WEBPACK_IMPORTED_MODULE_0__.assign)(this, BvEvent.Defaults, this.constructor.Defaults, eventInit, {
      type: type
    }); // Freeze some props as readonly, but leave them enumerable

    (0,_object__WEBPACK_IMPORTED_MODULE_0__.defineProperties)(this, {
      type: (0,_object__WEBPACK_IMPORTED_MODULE_0__.readonlyDescriptor)(),
      cancelable: (0,_object__WEBPACK_IMPORTED_MODULE_0__.readonlyDescriptor)(),
      nativeEvent: (0,_object__WEBPACK_IMPORTED_MODULE_0__.readonlyDescriptor)(),
      target: (0,_object__WEBPACK_IMPORTED_MODULE_0__.readonlyDescriptor)(),
      relatedTarget: (0,_object__WEBPACK_IMPORTED_MODULE_0__.readonlyDescriptor)(),
      vueTarget: (0,_object__WEBPACK_IMPORTED_MODULE_0__.readonlyDescriptor)(),
      componentId: (0,_object__WEBPACK_IMPORTED_MODULE_0__.readonlyDescriptor)()
    }); // Create a private variable using closure scoping

    var defaultPrevented = false; // Recreate preventDefault method. One way setter

    this.preventDefault = function preventDefault() {
      if (this.cancelable) {
        defaultPrevented = true;
      }
    }; // Create `defaultPrevented` publicly accessible prop that
    // can only be altered by the preventDefault method


    (0,_object__WEBPACK_IMPORTED_MODULE_0__.defineProperty)(this, 'defaultPrevented', {
      enumerable: true,
      get: function get() {
        return defaultPrevented;
      }
    });
  }

  _createClass(BvEvent, null, [{
    key: "Defaults",
    get: function get() {
      return {
        type: '',
        cancelable: true,
        nativeEvent: null,
        target: null,
        relatedTarget: null,
        vueTarget: null,
        componentId: null
      };
    }
  }]);

  return BvEvent;
}();

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/utils/cache.js":
/*!*******************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/utils/cache.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makePropCacheMixin": () => (/* binding */ makePropCacheMixin),
/* harmony export */   "makePropWatcher": () => (/* binding */ makePropWatcher)
/* harmony export */ });
/* harmony import */ var _vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../vue */ "./node_modules/bootstrap-vue/esm/vue.js");
/* harmony import */ var _clone_deep__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clone-deep */ "./node_modules/bootstrap-vue/esm/utils/clone-deep.js");
/* harmony import */ var _loose_equal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loose-equal */ "./node_modules/bootstrap-vue/esm/utils/loose-equal.js");
/* harmony import */ var _object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./object */ "./node_modules/bootstrap-vue/esm/utils/object.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var isEmpty = function isEmpty(value) {
  return !value || (0,_object__WEBPACK_IMPORTED_MODULE_0__.keys)(value).length === 0;
};

var makePropWatcher = function makePropWatcher(propName) {
  return {
    handler: function handler(newValue, oldValue) {
      if ((0,_loose_equal__WEBPACK_IMPORTED_MODULE_1__.looseEqual)(newValue, oldValue)) {
        return;
      }

      if (isEmpty(newValue) || isEmpty(oldValue)) {
        this[propName] = (0,_clone_deep__WEBPACK_IMPORTED_MODULE_2__.cloneDeep)(newValue);
        return;
      }

      for (var key in oldValue) {
        if (!(0,_object__WEBPACK_IMPORTED_MODULE_0__.hasOwnProperty)(newValue, key)) {
          this.$delete(this.$data[propName], key);
        }
      }

      for (var _key in newValue) {
        this.$set(this.$data[propName], _key, newValue[_key]);
      }
    }
  };
};
var makePropCacheMixin = function makePropCacheMixin(propName, proxyPropName) {
  return (0,_vue__WEBPACK_IMPORTED_MODULE_3__.extend)({
    data: function data() {
      return _defineProperty({}, proxyPropName, (0,_clone_deep__WEBPACK_IMPORTED_MODULE_2__.cloneDeep)(this[propName]));
    },
    watch: _defineProperty({}, propName, makePropWatcher(proxyPropName))
  });
};

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/utils/clone-deep.js":
/*!************************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/utils/clone-deep.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cloneDeep": () => (/* binding */ cloneDeep)
/* harmony export */ });
/* harmony import */ var _inspect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inspect */ "./node_modules/bootstrap-vue/esm/utils/inspect.js");
/* harmony import */ var _object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./object */ "./node_modules/bootstrap-vue/esm/utils/object.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



var cloneDeep = function cloneDeep(obj) {
  var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : obj;

  if ((0,_inspect__WEBPACK_IMPORTED_MODULE_0__.isArray)(obj)) {
    return obj.reduce(function (result, val) {
      return [].concat(_toConsumableArray(result), [cloneDeep(val, val)]);
    }, []);
  }

  if ((0,_inspect__WEBPACK_IMPORTED_MODULE_0__.isPlainObject)(obj)) {
    return (0,_object__WEBPACK_IMPORTED_MODULE_1__.keys)(obj).reduce(function (result, key) {
      return _objectSpread(_objectSpread({}, result), {}, _defineProperty({}, key, cloneDeep(obj[key], obj[key])));
    }, {});
  }

  return defaultValue;
};

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/utils/config.js":
/*!********************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/utils/config.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getBreakpoints": () => (/* binding */ getBreakpoints),
/* harmony export */   "getBreakpointsCached": () => (/* binding */ getBreakpointsCached),
/* harmony export */   "getBreakpointsDown": () => (/* binding */ getBreakpointsDown),
/* harmony export */   "getBreakpointsDownCached": () => (/* binding */ getBreakpointsDownCached),
/* harmony export */   "getBreakpointsUp": () => (/* binding */ getBreakpointsUp),
/* harmony export */   "getBreakpointsUpCached": () => (/* binding */ getBreakpointsUpCached),
/* harmony export */   "getComponentConfig": () => (/* binding */ getComponentConfig),
/* harmony export */   "getConfig": () => (/* binding */ getConfig),
/* harmony export */   "getConfigValue": () => (/* binding */ getConfigValue)
/* harmony export */ });
/* harmony import */ var _vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var _constants_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/config */ "./node_modules/bootstrap-vue/esm/constants/config.js");
/* harmony import */ var _clone_deep__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clone-deep */ "./node_modules/bootstrap-vue/esm/utils/clone-deep.js");
/* harmony import */ var _memoize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./memoize */ "./node_modules/bootstrap-vue/esm/utils/memoize.js");



 // --- Constants ---

var VueProto = _vue__WEBPACK_IMPORTED_MODULE_0__["default"].prototype; // --- Getter methods ---
// All methods return a deep clone (immutable) copy of the config value,
// to prevent mutation of the user config object
// Get the current config

var getConfig = function getConfig() {
  var bvConfig = VueProto[_constants_config__WEBPACK_IMPORTED_MODULE_1__.PROP_NAME];
  return bvConfig ? bvConfig.getConfig() : {};
}; // Method to grab a config value based on a dotted/array notation key

var getConfigValue = function getConfigValue(key) {
  var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
  var bvConfig = VueProto[_constants_config__WEBPACK_IMPORTED_MODULE_1__.PROP_NAME];
  return bvConfig ? bvConfig.getConfigValue(key, defaultValue) : (0,_clone_deep__WEBPACK_IMPORTED_MODULE_2__.cloneDeep)(defaultValue);
}; // Method to grab a config value for a particular component

var getComponentConfig = function getComponentConfig(key) {
  var propKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var defaultValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
  // Return the particular config value for key if specified,
  // otherwise we return the full config (or an empty object if not found)
  return propKey ? getConfigValue("".concat(key, ".").concat(propKey), defaultValue) : getConfigValue(key, {});
}; // Get all breakpoint names

var getBreakpoints = function getBreakpoints() {
  return getConfigValue('breakpoints', _constants_config__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_BREAKPOINT);
}; // Private method for caching breakpoint names

var _getBreakpointsCached = (0,_memoize__WEBPACK_IMPORTED_MODULE_3__.memoize)(function () {
  return getBreakpoints();
}); // Get all breakpoint names (cached)


var getBreakpointsCached = function getBreakpointsCached() {
  return (0,_clone_deep__WEBPACK_IMPORTED_MODULE_2__.cloneDeep)(_getBreakpointsCached());
}; // Get breakpoints with the smallest breakpoint set as ''
// Useful for components that create breakpoint specific props

var getBreakpointsUp = function getBreakpointsUp() {
  var breakpoints = getBreakpoints();
  breakpoints[0] = '';
  return breakpoints;
}; // Get breakpoints with the smallest breakpoint set as '' (cached)
// Useful for components that create breakpoint specific props

var getBreakpointsUpCached = (0,_memoize__WEBPACK_IMPORTED_MODULE_3__.memoize)(function () {
  var breakpoints = getBreakpointsCached();
  breakpoints[0] = '';
  return breakpoints;
}); // Get breakpoints with the largest breakpoint set as ''

var getBreakpointsDown = function getBreakpointsDown() {
  var breakpoints = getBreakpoints();
  breakpoints[breakpoints.length - 1] = '';
  return breakpoints;
}; // Get breakpoints with the largest breakpoint set as '' (cached)
// Useful for components that create breakpoint specific props

/* istanbul ignore next: we don't use this method anywhere, yet */

var getBreakpointsDownCached = function getBreakpointsDownCached() {
  var breakpoints = getBreakpointsCached();
  breakpoints[breakpoints.length - 1] = '';
  return breakpoints;
};

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/utils/create-new-child-component.js":
/*!****************************************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/utils/create-new-child-component.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createNewChildComponent": () => (/* binding */ createNewChildComponent)
/* harmony export */ });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var createNewChildComponent = function createNewChildComponent(parent, Component) {
  var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var bvEventRoot = parent.$root ? parent.$root.$options.bvEventRoot || parent.$root : null;
  return new Component(_objectSpread(_objectSpread({}, config), {}, {
    parent: parent,
    bvParent: parent,
    bvEventRoot: bvEventRoot
  }));
};

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/utils/dom.js":
/*!*****************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/utils/dom.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MutationObs": () => (/* binding */ MutationObs),
/* harmony export */   "addClass": () => (/* binding */ addClass),
/* harmony export */   "attemptBlur": () => (/* binding */ attemptBlur),
/* harmony export */   "attemptFocus": () => (/* binding */ attemptFocus),
/* harmony export */   "closest": () => (/* binding */ closest),
/* harmony export */   "closestEl": () => (/* binding */ closestEl),
/* harmony export */   "contains": () => (/* binding */ contains),
/* harmony export */   "getActiveElement": () => (/* binding */ getActiveElement),
/* harmony export */   "getAttr": () => (/* binding */ getAttr),
/* harmony export */   "getBCR": () => (/* binding */ getBCR),
/* harmony export */   "getById": () => (/* binding */ getById),
/* harmony export */   "getCS": () => (/* binding */ getCS),
/* harmony export */   "getSel": () => (/* binding */ getSel),
/* harmony export */   "getStyle": () => (/* binding */ getStyle),
/* harmony export */   "getTabables": () => (/* binding */ getTabables),
/* harmony export */   "hasAttr": () => (/* binding */ hasAttr),
/* harmony export */   "hasClass": () => (/* binding */ hasClass),
/* harmony export */   "isActiveElement": () => (/* binding */ isActiveElement),
/* harmony export */   "isDisabled": () => (/* binding */ isDisabled),
/* harmony export */   "isElement": () => (/* binding */ isElement),
/* harmony export */   "isTag": () => (/* binding */ isTag),
/* harmony export */   "isVisible": () => (/* binding */ isVisible),
/* harmony export */   "matches": () => (/* binding */ matches),
/* harmony export */   "matchesEl": () => (/* binding */ matchesEl),
/* harmony export */   "offset": () => (/* binding */ offset),
/* harmony export */   "position": () => (/* binding */ position),
/* harmony export */   "reflow": () => (/* binding */ reflow),
/* harmony export */   "removeAttr": () => (/* binding */ removeAttr),
/* harmony export */   "removeClass": () => (/* binding */ removeClass),
/* harmony export */   "removeNode": () => (/* binding */ removeNode),
/* harmony export */   "removeStyle": () => (/* binding */ removeStyle),
/* harmony export */   "requestAF": () => (/* binding */ requestAF),
/* harmony export */   "select": () => (/* binding */ select),
/* harmony export */   "selectAll": () => (/* binding */ selectAll),
/* harmony export */   "setAttr": () => (/* binding */ setAttr),
/* harmony export */   "setStyle": () => (/* binding */ setStyle)
/* harmony export */ });
/* harmony import */ var _constants_env__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/env */ "./node_modules/bootstrap-vue/esm/constants/env.js");
/* harmony import */ var _constants_safe_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/safe-types */ "./node_modules/bootstrap-vue/esm/constants/safe-types.js");
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./array */ "./node_modules/bootstrap-vue/esm/utils/array.js");
/* harmony import */ var _inspect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inspect */ "./node_modules/bootstrap-vue/esm/utils/inspect.js");
/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./number */ "./node_modules/bootstrap-vue/esm/utils/number.js");
/* harmony import */ var _string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./string */ "./node_modules/bootstrap-vue/esm/utils/string.js");





 // --- Constants ---

var ELEMENT_PROTO = _constants_safe_types__WEBPACK_IMPORTED_MODULE_0__.Element.prototype;
var TABABLE_SELECTOR = ['button', '[href]:not(.disabled)', 'input', 'select', 'textarea', '[tabindex]', '[contenteditable]'].map(function (s) {
  return "".concat(s, ":not(:disabled):not([disabled])");
}).join(', '); // --- Normalization utils ---
// See: https://developer.mozilla.org/en-US/docs/Web/API/Element/matches#Polyfill

/* istanbul ignore next */

var matchesEl = ELEMENT_PROTO.matches || ELEMENT_PROTO.msMatchesSelector || ELEMENT_PROTO.webkitMatchesSelector; // See: https://developer.mozilla.org/en-US/docs/Web/API/Element/closest

/* istanbul ignore next */

var closestEl = ELEMENT_PROTO.closest || function (sel) {
  var el = this;

  do {
    // Use our "patched" matches function
    if (matches(el, sel)) {
      return el;
    }

    el = el.parentElement || el.parentNode;
  } while (!(0,_inspect__WEBPACK_IMPORTED_MODULE_1__.isNull)(el) && el.nodeType === Node.ELEMENT_NODE);

  return null;
}; // `requestAnimationFrame()` convenience method

/* istanbul ignore next: JSDOM always returns the first option */

var requestAF = (_constants_env__WEBPACK_IMPORTED_MODULE_2__.WINDOW.requestAnimationFrame || _constants_env__WEBPACK_IMPORTED_MODULE_2__.WINDOW.webkitRequestAnimationFrame || _constants_env__WEBPACK_IMPORTED_MODULE_2__.WINDOW.mozRequestAnimationFrame || _constants_env__WEBPACK_IMPORTED_MODULE_2__.WINDOW.msRequestAnimationFrame || _constants_env__WEBPACK_IMPORTED_MODULE_2__.WINDOW.oRequestAnimationFrame || // Fallback, but not a true polyfill
// Only needed for Opera Mini

/* istanbul ignore next */
function (cb) {
  return setTimeout(cb, 16);
}).bind(_constants_env__WEBPACK_IMPORTED_MODULE_2__.WINDOW);
var MutationObs = _constants_env__WEBPACK_IMPORTED_MODULE_2__.WINDOW.MutationObserver || _constants_env__WEBPACK_IMPORTED_MODULE_2__.WINDOW.WebKitMutationObserver || _constants_env__WEBPACK_IMPORTED_MODULE_2__.WINDOW.MozMutationObserver || null; // --- Utils ---
// Remove a node from DOM

var removeNode = function removeNode(el) {
  return el && el.parentNode && el.parentNode.removeChild(el);
}; // Determine if an element is an HTML element

var isElement = function isElement(el) {
  return !!(el && el.nodeType === Node.ELEMENT_NODE);
}; // Get the currently active HTML element

var getActiveElement = function getActiveElement() {
  var excludes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var activeElement = _constants_env__WEBPACK_IMPORTED_MODULE_2__.DOCUMENT.activeElement;
  return activeElement && !excludes.some(function (el) {
    return el === activeElement;
  }) ? activeElement : null;
}; // Returns `true` if a tag's name equals `name`

var isTag = function isTag(tag, name) {
  return (0,_string__WEBPACK_IMPORTED_MODULE_3__.toString)(tag).toLowerCase() === (0,_string__WEBPACK_IMPORTED_MODULE_3__.toString)(name).toLowerCase();
}; // Determine if an HTML element is the currently active element

var isActiveElement = function isActiveElement(el) {
  return isElement(el) && el === getActiveElement();
}; // Determine if an HTML element is visible - Faster than CSS check

var isVisible = function isVisible(el) {
  if (!isElement(el) || !el.parentNode || !contains(_constants_env__WEBPACK_IMPORTED_MODULE_2__.DOCUMENT.body, el)) {
    // Note this can fail for shadow dom elements since they
    // are not a direct descendant of document.body
    return false;
  }

  if (getStyle(el, 'display') === 'none') {
    // We do this check to help with vue-test-utils when using v-show

    /* istanbul ignore next */
    return false;
  } // All browsers support getBoundingClientRect(), except JSDOM as it returns all 0's for values :(
  // So any tests that need isVisible will fail in JSDOM
  // Except when we override the getBCR prototype in some tests


  var bcr = getBCR(el);
  return !!(bcr && bcr.height > 0 && bcr.width > 0);
}; // Determine if an element is disabled

var isDisabled = function isDisabled(el) {
  return !isElement(el) || el.disabled || hasAttr(el, 'disabled') || hasClass(el, 'disabled');
}; // Cause/wait-for an element to reflow its content (adjusting its height/width)

var reflow = function reflow(el) {
  // Requesting an elements offsetHight will trigger a reflow of the element content

  /* istanbul ignore next: reflow doesn't happen in JSDOM */
  return isElement(el) && el.offsetHeight;
}; // Select all elements matching selector. Returns `[]` if none found

var selectAll = function selectAll(selector, root) {
  return (0,_array__WEBPACK_IMPORTED_MODULE_4__.from)((isElement(root) ? root : _constants_env__WEBPACK_IMPORTED_MODULE_2__.DOCUMENT).querySelectorAll(selector));
}; // Select a single element, returns `null` if not found

var select = function select(selector, root) {
  return (isElement(root) ? root : _constants_env__WEBPACK_IMPORTED_MODULE_2__.DOCUMENT).querySelector(selector) || null;
}; // Determine if an element matches a selector

var matches = function matches(el, selector) {
  return isElement(el) ? matchesEl.call(el, selector) : false;
}; // Finds closest element matching selector. Returns `null` if not found

var closest = function closest(selector, root) {
  var includeRoot = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  if (!isElement(root)) {
    return null;
  }

  var el = closestEl.call(root, selector); // Native closest behaviour when `includeRoot` is truthy,
  // else emulate jQuery closest and return `null` if match is
  // the passed in root element when `includeRoot` is falsey

  return includeRoot ? el : el === root ? null : el;
}; // Returns true if the parent element contains the child element

var contains = function contains(parent, child) {
  return parent && (0,_inspect__WEBPACK_IMPORTED_MODULE_1__.isFunction)(parent.contains) ? parent.contains(child) : false;
}; // Get an element given an ID

var getById = function getById(id) {
  return _constants_env__WEBPACK_IMPORTED_MODULE_2__.DOCUMENT.getElementById(/^#/.test(id) ? id.slice(1) : id) || null;
}; // Add a class to an element

var addClass = function addClass(el, className) {
  // We are checking for `el.classList` existence here since IE 11
  // returns `undefined` for some elements (e.g. SVG elements)
  // See https://github.com/bootstrap-vue/bootstrap-vue/issues/2713
  if (className && isElement(el) && el.classList) {
    el.classList.add(className);
  }
}; // Remove a class from an element

var removeClass = function removeClass(el, className) {
  // We are checking for `el.classList` existence here since IE 11
  // returns `undefined` for some elements (e.g. SVG elements)
  // See https://github.com/bootstrap-vue/bootstrap-vue/issues/2713
  if (className && isElement(el) && el.classList) {
    el.classList.remove(className);
  }
}; // Test if an element has a class

var hasClass = function hasClass(el, className) {
  // We are checking for `el.classList` existence here since IE 11
  // returns `undefined` for some elements (e.g. SVG elements)
  // See https://github.com/bootstrap-vue/bootstrap-vue/issues/2713
  if (className && isElement(el) && el.classList) {
    return el.classList.contains(className);
  }

  return false;
}; // Set an attribute on an element

var setAttr = function setAttr(el, attr, value) {
  if (attr && isElement(el)) {
    el.setAttribute(attr, value);
  }
}; // Remove an attribute from an element

var removeAttr = function removeAttr(el, attr) {
  if (attr && isElement(el)) {
    el.removeAttribute(attr);
  }
}; // Get an attribute value from an element
// Returns `null` if not found

var getAttr = function getAttr(el, attr) {
  return attr && isElement(el) ? el.getAttribute(attr) : null;
}; // Determine if an attribute exists on an element
// Returns `true` or `false`, or `null` if element not found

var hasAttr = function hasAttr(el, attr) {
  return attr && isElement(el) ? el.hasAttribute(attr) : null;
}; // Set an style property on an element

var setStyle = function setStyle(el, prop, value) {
  if (prop && isElement(el)) {
    el.style[prop] = value;
  }
}; // Remove an style property from an element

var removeStyle = function removeStyle(el, prop) {
  if (prop && isElement(el)) {
    el.style[prop] = '';
  }
}; // Get an style property value from an element
// Returns `null` if not found

var getStyle = function getStyle(el, prop) {
  return prop && isElement(el) ? el.style[prop] || null : null;
}; // Return the Bounding Client Rect of an element
// Returns `null` if not an element

/* istanbul ignore next: getBoundingClientRect() doesn't work in JSDOM */

var getBCR = function getBCR(el) {
  return isElement(el) ? el.getBoundingClientRect() : null;
}; // Get computed style object for an element

/* istanbul ignore next: getComputedStyle() doesn't work in JSDOM */

var getCS = function getCS(el) {
  var getComputedStyle = _constants_env__WEBPACK_IMPORTED_MODULE_2__.WINDOW.getComputedStyle;
  return getComputedStyle && isElement(el) ? getComputedStyle(el) : {};
}; // Returns a `Selection` object representing the range of text selected
// Returns `null` if no window support is given

/* istanbul ignore next: getSelection() doesn't work in JSDOM */

var getSel = function getSel() {
  var getSelection = _constants_env__WEBPACK_IMPORTED_MODULE_2__.WINDOW.getSelection;
  return getSelection ? _constants_env__WEBPACK_IMPORTED_MODULE_2__.WINDOW.getSelection() : null;
}; // Return an element's offset with respect to document element
// https://j11y.io/jquery/#v=git&fn=jQuery.fn.offset

var offset = function offset(el)
/* istanbul ignore next: getBoundingClientRect(), getClientRects() doesn't work in JSDOM */
{
  var _offset = {
    top: 0,
    left: 0
  };

  if (!isElement(el) || el.getClientRects().length === 0) {
    return _offset;
  }

  var bcr = getBCR(el);

  if (bcr) {
    var win = el.ownerDocument.defaultView;
    _offset.top = bcr.top + win.pageYOffset;
    _offset.left = bcr.left + win.pageXOffset;
  }

  return _offset;
}; // Return an element's offset with respect to to its offsetParent
// https://j11y.io/jquery/#v=git&fn=jQuery.fn.position

var position = function position(el)
/* istanbul ignore next: getBoundingClientRect() doesn't work in JSDOM */
{
  var _offset = {
    top: 0,
    left: 0
  };

  if (!isElement(el)) {
    return _offset;
  }

  var parentOffset = {
    top: 0,
    left: 0
  };
  var elStyles = getCS(el);

  if (elStyles.position === 'fixed') {
    _offset = getBCR(el) || _offset;
  } else {
    _offset = offset(el);
    var doc = el.ownerDocument;
    var offsetParent = el.offsetParent || doc.documentElement;

    while (offsetParent && (offsetParent === doc.body || offsetParent === doc.documentElement) && getCS(offsetParent).position === 'static') {
      offsetParent = offsetParent.parentNode;
    }

    if (offsetParent && offsetParent !== el && offsetParent.nodeType === Node.ELEMENT_NODE) {
      parentOffset = offset(offsetParent);
      var offsetParentStyles = getCS(offsetParent);
      parentOffset.top += (0,_number__WEBPACK_IMPORTED_MODULE_5__.toFloat)(offsetParentStyles.borderTopWidth, 0);
      parentOffset.left += (0,_number__WEBPACK_IMPORTED_MODULE_5__.toFloat)(offsetParentStyles.borderLeftWidth, 0);
    }
  }

  return {
    top: _offset.top - parentOffset.top - (0,_number__WEBPACK_IMPORTED_MODULE_5__.toFloat)(elStyles.marginTop, 0),
    left: _offset.left - parentOffset.left - (0,_number__WEBPACK_IMPORTED_MODULE_5__.toFloat)(elStyles.marginLeft, 0)
  };
}; // Find all tabable elements in the given element
// Assumes users have not used `tabindex` > `0` on elements

var getTabables = function getTabables() {
  var rootEl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;
  return selectAll(TABABLE_SELECTOR, rootEl).filter(isVisible).filter(function (el) {
    return el.tabIndex > -1 && !el.disabled;
  });
}; // Attempt to focus an element, and return `true` if successful

var attemptFocus = function attemptFocus(el) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  try {
    el.focus(options);
  } catch (_unused) {}

  return isActiveElement(el);
}; // Attempt to blur an element, and return `true` if successful

var attemptBlur = function attemptBlur(el) {
  try {
    el.blur();
  } catch (_unused2) {}

  return !isActiveElement(el);
};

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/utils/env.js":
false,

/***/ "./node_modules/bootstrap-vue/esm/utils/events.js":
/*!********************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/utils/events.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "eventOff": () => (/* binding */ eventOff),
/* harmony export */   "eventOn": () => (/* binding */ eventOn),
/* harmony export */   "eventOnOff": () => (/* binding */ eventOnOff),
/* harmony export */   "getRootActionEventName": () => (/* binding */ getRootActionEventName),
/* harmony export */   "getRootEventName": () => (/* binding */ getRootEventName),
/* harmony export */   "parseEventOptions": () => (/* binding */ parseEventOptions),
/* harmony export */   "stopEvent": () => (/* binding */ stopEvent)
/* harmony export */ });
/* harmony import */ var _constants_env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/env */ "./node_modules/bootstrap-vue/esm/constants/env.js");
/* harmony import */ var _constants_events__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants/events */ "./node_modules/bootstrap-vue/esm/constants/events.js");
/* harmony import */ var _constants_regex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/regex */ "./node_modules/bootstrap-vue/esm/constants/regex.js");
/* harmony import */ var _inspect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inspect */ "./node_modules/bootstrap-vue/esm/utils/inspect.js");
/* harmony import */ var _string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./string */ "./node_modules/bootstrap-vue/esm/utils/string.js");




 // --- Utils ---
// Normalize event options based on support of passive option
// Exported only for testing purposes

var parseEventOptions = function parseEventOptions(options) {
  /* istanbul ignore else: can't test in JSDOM, as it supports passive */
  if (_constants_env__WEBPACK_IMPORTED_MODULE_0__.HAS_PASSIVE_EVENT_SUPPORT) {
    return (0,_inspect__WEBPACK_IMPORTED_MODULE_1__.isObject)(options) ? options : {
      capture: !!options || false
    };
  } else {
    // Need to translate to actual Boolean value
    return !!((0,_inspect__WEBPACK_IMPORTED_MODULE_1__.isObject)(options) ? options.capture : options);
  }
}; // Attach an event listener to an element

var eventOn = function eventOn(el, eventName, handler, options) {
  if (el && el.addEventListener) {
    el.addEventListener(eventName, handler, parseEventOptions(options));
  }
}; // Remove an event listener from an element

var eventOff = function eventOff(el, eventName, handler, options) {
  if (el && el.removeEventListener) {
    el.removeEventListener(eventName, handler, parseEventOptions(options));
  }
}; // Utility method to add/remove a event listener based on first argument (boolean)
// It passes all other arguments to the `eventOn()` or `eventOff` method

var eventOnOff = function eventOnOff(on) {
  var method = on ? eventOn : eventOff;

  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  method.apply(void 0, args);
}; // Utility method to prevent the default event handling and propagation

var stopEvent = function stopEvent(event) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$preventDefault = _ref.preventDefault,
      preventDefault = _ref$preventDefault === void 0 ? true : _ref$preventDefault,
      _ref$propagation = _ref.propagation,
      propagation = _ref$propagation === void 0 ? true : _ref$propagation,
      _ref$immediatePropaga = _ref.immediatePropagation,
      immediatePropagation = _ref$immediatePropaga === void 0 ? false : _ref$immediatePropaga;

  if (preventDefault) {
    event.preventDefault();
  }

  if (propagation) {
    event.stopPropagation();
  }

  if (immediatePropagation) {
    event.stopImmediatePropagation();
  }
}; // Helper method to convert a component/directive name to a base event name
// `getBaseEventName('BNavigationItem')` => 'navigation-item'
// `getBaseEventName('BVToggle')` => 'toggle'

var getBaseEventName = function getBaseEventName(value) {
  return (0,_string__WEBPACK_IMPORTED_MODULE_2__.kebabCase)(value.replace(_constants_regex__WEBPACK_IMPORTED_MODULE_3__.RX_BV_PREFIX, ''));
}; // Get a root event name by component/directive and event name
// `getBaseEventName('BModal', 'show')` => 'bv::modal::show'


var getRootEventName = function getRootEventName(name, eventName) {
  return [_constants_events__WEBPACK_IMPORTED_MODULE_4__.ROOT_EVENT_NAME_PREFIX, getBaseEventName(name), eventName].join(_constants_events__WEBPACK_IMPORTED_MODULE_4__.ROOT_EVENT_NAME_SEPARATOR);
}; // Get a root action event name by component/directive and action name
// `getRootActionEventName('BModal', 'show')` => 'bv::show::modal'

var getRootActionEventName = function getRootActionEventName(name, actionName) {
  return [_constants_events__WEBPACK_IMPORTED_MODULE_4__.ROOT_EVENT_NAME_PREFIX, actionName, getBaseEventName(name)].join(_constants_events__WEBPACK_IMPORTED_MODULE_4__.ROOT_EVENT_NAME_SEPARATOR);
};

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/utils/get-event-root.js":
/*!****************************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/utils/get-event-root.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getEventRoot": () => (/* binding */ getEventRoot)
/* harmony export */ });
var getEventRoot = function getEventRoot(vm) {
  return vm.$root.$options.bvEventRoot || vm.$root;
};

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/utils/get-instance-from-directive.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/utils/get-instance-from-directive.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getInstanceFromDirective": () => (/* binding */ getInstanceFromDirective)
/* harmony export */ });
/* harmony import */ var _vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vue */ "./node_modules/bootstrap-vue/esm/vue.js");

var getInstanceFromDirective = function getInstanceFromDirective(vnode, bindings) {
  return _vue__WEBPACK_IMPORTED_MODULE_0__.isVue3 ? bindings.instance : vnode.context;
};

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/utils/get-scope-id.js":
/*!**************************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/utils/get-scope-id.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getScopeId": () => (/* binding */ getScopeId)
/* harmony export */ });
// This method returns a component's scoped style attribute name: `data-v-xxxxxxx`
// The `_scopeId` options property is added by vue-loader when using scoped styles
// and will be `undefined` if no scoped styles are in use
var getScopeId = function getScopeId(vm) {
  var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  return vm ? vm.$options._scopeId || defaultValue : defaultValue;
};

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/utils/html.js":
/*!******************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/utils/html.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "htmlOrText": () => (/* binding */ htmlOrText),
/* harmony export */   "stripTags": () => (/* binding */ stripTags)
/* harmony export */ });
/* harmony import */ var _constants_regex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/regex */ "./node_modules/bootstrap-vue/esm/constants/regex.js");
 // Removes anything that looks like an HTML tag from the supplied string

var stripTags = function stripTags() {
  var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return String(text).replace(_constants_regex__WEBPACK_IMPORTED_MODULE_0__.RX_HTML_TAGS, '');
}; // Generate a `domProps` object for either `innerHTML`, `textContent` or an empty object

var htmlOrText = function htmlOrText(innerHTML, textContent) {
  return innerHTML ? {
    innerHTML: innerHTML
  } : textContent ? {
    textContent: textContent
  } : {};
};

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/utils/identity.js":
/*!**********************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/utils/identity.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "identity": () => (/* binding */ identity)
/* harmony export */ });
var identity = function identity(x) {
  return x;
};

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/utils/inspect.js":
/*!*********************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/utils/inspect.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isArray": () => (/* binding */ isArray),
/* harmony export */   "isBoolean": () => (/* binding */ isBoolean),
/* harmony export */   "isDate": () => (/* binding */ isDate),
/* harmony export */   "isEmptyString": () => (/* binding */ isEmptyString),
/* harmony export */   "isEvent": () => (/* binding */ isEvent),
/* harmony export */   "isFile": () => (/* binding */ isFile),
/* harmony export */   "isFunction": () => (/* binding */ isFunction),
/* harmony export */   "isNull": () => (/* binding */ isNull),
/* harmony export */   "isNumber": () => (/* binding */ isNumber),
/* harmony export */   "isNumeric": () => (/* binding */ isNumeric),
/* harmony export */   "isObject": () => (/* binding */ isObject),
/* harmony export */   "isPlainObject": () => (/* binding */ isPlainObject),
/* harmony export */   "isPrimitive": () => (/* binding */ isPrimitive),
/* harmony export */   "isPromise": () => (/* binding */ isPromise),
/* harmony export */   "isRegExp": () => (/* binding */ isRegExp),
/* harmony export */   "isString": () => (/* binding */ isString),
/* harmony export */   "isUndefined": () => (/* binding */ isUndefined),
/* harmony export */   "isUndefinedOrNull": () => (/* binding */ isUndefinedOrNull),
/* harmony export */   "isUndefinedOrNullOrEmpty": () => (/* binding */ isUndefinedOrNullOrEmpty),
/* harmony export */   "toRawType": () => (/* binding */ toRawType),
/* harmony export */   "toRawTypeLC": () => (/* binding */ toRawTypeLC),
/* harmony export */   "toType": () => (/* binding */ toType)
/* harmony export */ });
/* harmony import */ var _constants_regex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/regex */ "./node_modules/bootstrap-vue/esm/constants/regex.js");
/* harmony import */ var _constants_safe_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/safe-types */ "./node_modules/bootstrap-vue/esm/constants/safe-types.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }


 // --- Convenience inspection utilities ---

var toType = function toType(value) {
  return _typeof(value);
};
var toRawType = function toRawType(value) {
  return Object.prototype.toString.call(value).slice(8, -1);
};
var toRawTypeLC = function toRawTypeLC(value) {
  return toRawType(value).toLowerCase();
};
var isUndefined = function isUndefined(value) {
  return value === undefined;
};
var isNull = function isNull(value) {
  return value === null;
};
var isEmptyString = function isEmptyString(value) {
  return value === '';
};
var isUndefinedOrNull = function isUndefinedOrNull(value) {
  return isUndefined(value) || isNull(value);
};
var isUndefinedOrNullOrEmpty = function isUndefinedOrNullOrEmpty(value) {
  return isUndefinedOrNull(value) || isEmptyString(value);
};
var isFunction = function isFunction(value) {
  return toType(value) === 'function';
};
var isBoolean = function isBoolean(value) {
  return toType(value) === 'boolean';
};
var isString = function isString(value) {
  return toType(value) === 'string';
};
var isNumber = function isNumber(value) {
  return toType(value) === 'number';
};
var isNumeric = function isNumeric(value) {
  return _constants_regex__WEBPACK_IMPORTED_MODULE_0__.RX_NUMBER.test(String(value));
};
var isPrimitive = function isPrimitive(value) {
  return isBoolean(value) || isString(value) || isNumber(value);
};
var isArray = function isArray(value) {
  return Array.isArray(value);
}; // Quick object check
// This is primarily used to tell Objects from primitive values
// when we know the value is a JSON-compliant type
// Note object could be a complex type like array, Date, etc.

var isObject = function isObject(obj) {
  return obj !== null && _typeof(obj) === 'object';
}; // Strict object type check
// Only returns true for plain JavaScript objects

var isPlainObject = function isPlainObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]';
};
var isDate = function isDate(value) {
  return value instanceof Date;
};
var isEvent = function isEvent(value) {
  return value instanceof Event;
};
var isFile = function isFile(value) {
  return value instanceof _constants_safe_types__WEBPACK_IMPORTED_MODULE_1__.File;
};
var isRegExp = function isRegExp(value) {
  return toRawType(value) === 'RegExp';
};
var isPromise = function isPromise(value) {
  return !isUndefinedOrNull(value) && isFunction(value.then) && isFunction(value.catch);
};

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/utils/loose-equal.js":
/*!*************************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/utils/loose-equal.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "looseEqual": () => (/* binding */ looseEqual)
/* harmony export */ });
/* harmony import */ var _object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./object */ "./node_modules/bootstrap-vue/esm/utils/object.js");
/* harmony import */ var _inspect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inspect */ "./node_modules/bootstrap-vue/esm/utils/inspect.js");

 // Assumes both a and b are arrays!
// Handles when arrays are "sparse" (array.every(...) doesn't handle sparse)

var compareArrays = function compareArrays(a, b) {
  if (a.length !== b.length) {
    return false;
  }

  var equal = true;

  for (var i = 0; equal && i < a.length; i++) {
    equal = looseEqual(a[i], b[i]);
  }

  return equal;
};
/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 * Returns boolean true or false
 */


var looseEqual = function looseEqual(a, b) {
  if (a === b) {
    return true;
  }

  var aValidType = (0,_inspect__WEBPACK_IMPORTED_MODULE_0__.isDate)(a);
  var bValidType = (0,_inspect__WEBPACK_IMPORTED_MODULE_0__.isDate)(b);

  if (aValidType || bValidType) {
    return aValidType && bValidType ? a.getTime() === b.getTime() : false;
  }

  aValidType = (0,_inspect__WEBPACK_IMPORTED_MODULE_0__.isArray)(a);
  bValidType = (0,_inspect__WEBPACK_IMPORTED_MODULE_0__.isArray)(b);

  if (aValidType || bValidType) {
    return aValidType && bValidType ? compareArrays(a, b) : false;
  }

  aValidType = (0,_inspect__WEBPACK_IMPORTED_MODULE_0__.isObject)(a);
  bValidType = (0,_inspect__WEBPACK_IMPORTED_MODULE_0__.isObject)(b);

  if (aValidType || bValidType) {
    /* istanbul ignore if: this if will probably never be called */
    if (!aValidType || !bValidType) {
      return false;
    }

    var aKeysCount = (0,_object__WEBPACK_IMPORTED_MODULE_1__.keys)(a).length;
    var bKeysCount = (0,_object__WEBPACK_IMPORTED_MODULE_1__.keys)(b).length;

    if (aKeysCount !== bKeysCount) {
      return false;
    }

    for (var key in a) {
      var aHasKey = (0,_object__WEBPACK_IMPORTED_MODULE_1__.hasOwnProperty)(a, key);
      var bHasKey = (0,_object__WEBPACK_IMPORTED_MODULE_1__.hasOwnProperty)(b, key);

      if (aHasKey && !bHasKey || !aHasKey && bHasKey || !looseEqual(a[key], b[key])) {
        return false;
      }
    }
  }

  return String(a) === String(b);
};

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/utils/memoize.js":
/*!*********************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/utils/memoize.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "memoize": () => (/* binding */ memoize)
/* harmony export */ });
/* harmony import */ var _object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./object */ "./node_modules/bootstrap-vue/esm/utils/object.js");

var memoize = function memoize(fn) {
  var cache = (0,_object__WEBPACK_IMPORTED_MODULE_0__.create)(null);
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var argsKey = JSON.stringify(args);
    return cache[argsKey] = cache[argsKey] || fn.apply(null, args);
  };
};

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/utils/model.js":
/*!*******************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/utils/model.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeModelMixin": () => (/* binding */ makeModelMixin)
/* harmony export */ });
/* harmony import */ var _vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../vue */ "./node_modules/bootstrap-vue/esm/vue.js");
/* harmony import */ var _constants_events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/events */ "./node_modules/bootstrap-vue/esm/constants/events.js");
/* harmony import */ var _constants_props__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/props */ "./node_modules/bootstrap-vue/esm/constants/props.js");
/* harmony import */ var _props__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./props */ "./node_modules/bootstrap-vue/esm/utils/props.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var makeModelMixin = function makeModelMixin(prop) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? _constants_props__WEBPACK_IMPORTED_MODULE_0__.PROP_TYPE_ANY : _ref$type,
      _ref$defaultValue = _ref.defaultValue,
      defaultValue = _ref$defaultValue === void 0 ? undefined : _ref$defaultValue,
      _ref$validator = _ref.validator,
      validator = _ref$validator === void 0 ? undefined : _ref$validator,
      _ref$event = _ref.event,
      event = _ref$event === void 0 ? _constants_events__WEBPACK_IMPORTED_MODULE_1__.EVENT_NAME_INPUT : _ref$event;

  var props = _defineProperty({}, prop, (0,_props__WEBPACK_IMPORTED_MODULE_2__.makeProp)(type, defaultValue, validator)); // @vue/component


  var mixin = (0,_vue__WEBPACK_IMPORTED_MODULE_3__.extend)({
    model: {
      prop: prop,
      event: event
    },
    props: props
  });
  return {
    mixin: mixin,
    props: props,
    prop: prop,
    event: event
  };
};

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/utils/normalize-slot.js":
/*!****************************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/utils/normalize-slot.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hasNormalizedSlot": () => (/* binding */ hasNormalizedSlot),
/* harmony export */   "normalizeSlot": () => (/* binding */ normalizeSlot)
/* harmony export */ });
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./array */ "./node_modules/bootstrap-vue/esm/utils/array.js");
/* harmony import */ var _identity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./identity */ "./node_modules/bootstrap-vue/esm/utils/identity.js");
/* harmony import */ var _inspect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inspect */ "./node_modules/bootstrap-vue/esm/utils/inspect.js");


 // Note for functional components:
// In functional components, `slots` is a function so it must be called
// first before passing to the below methods. `scopedSlots` is always an
// object and may be undefined (for Vue < 2.6.x)

/**
 * Returns true if either scoped or unscoped named slot exists
 *
 * @param {String, Array} name or name[]
 * @param {Object} scopedSlots
 * @param {Object} slots
 * @returns {Array|undefined} VNodes
 */

var hasNormalizedSlot = function hasNormalizedSlot(names) {
  var $scopedSlots = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var $slots = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  // Ensure names is an array
  names = (0,_array__WEBPACK_IMPORTED_MODULE_0__.concat)(names).filter(_identity__WEBPACK_IMPORTED_MODULE_1__.identity); // Returns true if the either a $scopedSlot or $slot exists with the specified name

  return names.some(function (name) {
    return $scopedSlots[name] || $slots[name];
  });
};
/**
 * Returns VNodes for named slot either scoped or unscoped
 *
 * @param {String, Array} name or name[]
 * @param {String} scope
 * @param {Object} scopedSlots
 * @param {Object} slots
 * @returns {Array|undefined} VNodes
 */

var normalizeSlot = function normalizeSlot(names) {
  var scope = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var $scopedSlots = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var $slots = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  // Ensure names is an array
  names = (0,_array__WEBPACK_IMPORTED_MODULE_0__.concat)(names).filter(_identity__WEBPACK_IMPORTED_MODULE_1__.identity);
  var slot;

  for (var i = 0; i < names.length && !slot; i++) {
    var name = names[i];
    slot = $scopedSlots[name] || $slots[name];
  } // Note: in Vue 2.6.x, all named slots are also scoped slots


  return (0,_inspect__WEBPACK_IMPORTED_MODULE_2__.isFunction)(slot) ? slot(scope) : slot;
};

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/utils/number.js":
/*!********************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/utils/number.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toFixed": () => (/* binding */ toFixed),
/* harmony export */   "toFloat": () => (/* binding */ toFloat),
/* harmony export */   "toInteger": () => (/* binding */ toInteger)
/* harmony export */ });
// Number utilities
// Converts a value (string, number, etc.) to an integer number
// Assumes radix base 10
var toInteger = function toInteger(value) {
  var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : NaN;
  var integer = parseInt(value, 10);
  return isNaN(integer) ? defaultValue : integer;
}; // Converts a value (string, number, etc.) to a number

var toFloat = function toFloat(value) {
  var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : NaN;
  var float = parseFloat(value);
  return isNaN(float) ? defaultValue : float;
}; // Converts a value (string, number, etc.) to a string
// representation with `precision` digits after the decimal
// Returns the string 'NaN' if the value cannot be converted

var toFixed = function toFixed(val, precision) {
  return toFloat(val).toFixed(toInteger(precision, 0));
};

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/utils/object.js":
/*!********************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/utils/object.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "assign": () => (/* binding */ assign),
/* harmony export */   "clone": () => (/* binding */ clone),
/* harmony export */   "create": () => (/* binding */ create),
/* harmony export */   "defineProperties": () => (/* binding */ defineProperties),
/* harmony export */   "defineProperty": () => (/* binding */ defineProperty),
/* harmony export */   "freeze": () => (/* binding */ freeze),
/* harmony export */   "getOwnPropertyDescriptor": () => (/* binding */ getOwnPropertyDescriptor),
/* harmony export */   "getOwnPropertyNames": () => (/* binding */ getOwnPropertyNames),
/* harmony export */   "getOwnPropertySymbols": () => (/* binding */ getOwnPropertySymbols),
/* harmony export */   "getPrototypeOf": () => (/* binding */ getPrototypeOf),
/* harmony export */   "hasOwnProperty": () => (/* binding */ hasOwnProperty),
/* harmony export */   "is": () => (/* binding */ is),
/* harmony export */   "isFrozen": () => (/* binding */ isFrozen),
/* harmony export */   "keys": () => (/* binding */ keys),
/* harmony export */   "mergeDeep": () => (/* binding */ mergeDeep),
/* harmony export */   "omit": () => (/* binding */ omit),
/* harmony export */   "pick": () => (/* binding */ pick),
/* harmony export */   "readonlyDescriptor": () => (/* binding */ readonlyDescriptor),
/* harmony export */   "sortKeys": () => (/* binding */ sortKeys),
/* harmony export */   "toString": () => (/* binding */ toString)
/* harmony export */ });
/* harmony import */ var _inspect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inspect */ "./node_modules/bootstrap-vue/esm/utils/inspect.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // --- Static ---

var assign = function assign() {
  return Object.assign.apply(Object, arguments);
};
var create = function create(proto, optionalProps) {
  return Object.create(proto, optionalProps);
};
var defineProperties = function defineProperties(obj, props) {
  return Object.defineProperties(obj, props);
};
var defineProperty = function defineProperty(obj, prop, descriptor) {
  return Object.defineProperty(obj, prop, descriptor);
};
var freeze = function freeze(obj) {
  return Object.freeze(obj);
};
var getOwnPropertyNames = function getOwnPropertyNames(obj) {
  return Object.getOwnPropertyNames(obj);
};
var getOwnPropertyDescriptor = function getOwnPropertyDescriptor(obj, prop) {
  return Object.getOwnPropertyDescriptor(obj, prop);
};
var getOwnPropertySymbols = function getOwnPropertySymbols(obj) {
  return Object.getOwnPropertySymbols(obj);
};
var getPrototypeOf = function getPrototypeOf(obj) {
  return Object.getPrototypeOf(obj);
};
var is = function is(value1, value2) {
  return Object.is(value1, value2);
};
var isFrozen = function isFrozen(obj) {
  return Object.isFrozen(obj);
};
var keys = function keys(obj) {
  return Object.keys(obj);
}; // --- "Instance" ---

var hasOwnProperty = function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
};
var toString = function toString(obj) {
  return Object.prototype.toString.call(obj);
}; // --- Utilities ---
// Shallow copy an object

var clone = function clone(obj) {
  return _objectSpread({}, obj);
}; // Return a shallow copy of object with the specified properties only
// See: https://gist.github.com/bisubus/2da8af7e801ffd813fab7ac221aa7afc

var pick = function pick(obj, props) {
  return keys(obj).filter(function (key) {
    return props.indexOf(key) !== -1;
  }).reduce(function (result, key) {
    return _objectSpread(_objectSpread({}, result), {}, _defineProperty({}, key, obj[key]));
  }, {});
}; // Return a shallow copy of object with the specified properties omitted
// See: https://gist.github.com/bisubus/2da8af7e801ffd813fab7ac221aa7afc

var omit = function omit(obj, props) {
  return keys(obj).filter(function (key) {
    return props.indexOf(key) === -1;
  }).reduce(function (result, key) {
    return _objectSpread(_objectSpread({}, result), {}, _defineProperty({}, key, obj[key]));
  }, {});
}; // Merges two object deeply together
// See: https://gist.github.com/Salakar/1d7137de9cb8b704e48a

var mergeDeep = function mergeDeep(target, source) {
  if ((0,_inspect__WEBPACK_IMPORTED_MODULE_0__.isObject)(target) && (0,_inspect__WEBPACK_IMPORTED_MODULE_0__.isObject)(source)) {
    keys(source).forEach(function (key) {
      if ((0,_inspect__WEBPACK_IMPORTED_MODULE_0__.isObject)(source[key])) {
        if (!target[key] || !(0,_inspect__WEBPACK_IMPORTED_MODULE_0__.isObject)(target[key])) {
          target[key] = source[key];
        }

        mergeDeep(target[key], source[key]);
      } else {
        assign(target, _defineProperty({}, key, source[key]));
      }
    });
  }

  return target;
}; // Returns a shallow copy of the object with keys in sorted order

var sortKeys = function sortKeys(obj) {
  return keys(obj).sort().reduce(function (result, key) {
    return _objectSpread(_objectSpread({}, result), {}, _defineProperty({}, key, obj[key]));
  }, {});
}; // Convenience method to create a read-only descriptor

var readonlyDescriptor = function readonlyDescriptor() {
  return {
    enumerable: true,
    configurable: false,
    writable: false
  };
};

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/utils/observe-dom.js":
/*!*************************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/utils/observe-dom.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "observeDom": () => (/* binding */ observeDom)
/* harmony export */ });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./node_modules/bootstrap-vue/esm/utils/dom.js");
/* harmony import */ var _warn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./warn */ "./node_modules/bootstrap-vue/esm/utils/warn.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/**
 * Observe a DOM element changes, falls back to eventListener mode
 * @param {Element} el The DOM element to observe
 * @param {Function} callback callback to be called on change
 * @param {object} [options={childList: true, subtree: true}] observe options
 * @see https://stackoverflow.com/questions/3219758
 */

var observeDom = function observeDom(el, callback, options)
/* istanbul ignore next: difficult to test in JSDOM */
{
  // Handle cases where we might be passed a Vue instance
  el = el ? el.$el || el : null; // Early exit when we have no element

  /* istanbul ignore next: difficult to test in JSDOM */

  if (!(0,_dom__WEBPACK_IMPORTED_MODULE_0__.isElement)(el)) {
    return null;
  } // Exit and throw a warning when `MutationObserver` isn't available


  if ((0,_warn__WEBPACK_IMPORTED_MODULE_1__.warnNoMutationObserverSupport)('observeDom')) {
    return null;
  } // Define a new observer


  var obs = new _dom__WEBPACK_IMPORTED_MODULE_0__.MutationObs(function (mutations) {
    var changed = false; // A mutation can contain several change records, so we loop
    // through them to see what has changed
    // We break out of the loop early if any "significant" change
    // has been detected

    for (var i = 0; i < mutations.length && !changed; i++) {
      // The mutation record
      var mutation = mutations[i]; // Mutation type

      var type = mutation.type; // DOM node (could be any DOM node type - HTMLElement, Text, comment, etc.)

      var target = mutation.target; // Detect whether a change happened based on type and target

      if (type === 'characterData' && target.nodeType === Node.TEXT_NODE) {
        // We ignore nodes that are not TEXT (i.e. comments, etc.)
        // as they don't change layout
        changed = true;
      } else if (type === 'attributes') {
        changed = true;
      } else if (type === 'childList' && (mutation.addedNodes.length > 0 || mutation.removedNodes.length > 0)) {
        // This includes HTMLElement and text nodes being
        // added/removed/re-arranged
        changed = true;
      }
    } // We only call the callback if a change that could affect
    // layout/size truly happened


    if (changed) {
      callback();
    }
  }); // Have the observer observe foo for changes in children, etc

  obs.observe(el, _objectSpread({
    childList: true,
    subtree: true
  }, options)); // We return a reference to the observer so that `obs.disconnect()`
  // can be called if necessary
  // To reduce overhead when the root element is hidden

  return obs;
};

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/utils/props.js":
/*!*******************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/utils/props.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "copyProps": () => (/* binding */ copyProps),
/* harmony export */   "hasPropFunction": () => (/* binding */ hasPropFunction),
/* harmony export */   "makeProp": () => (/* binding */ makeProp),
/* harmony export */   "makePropConfigurable": () => (/* binding */ makePropConfigurable),
/* harmony export */   "makePropsConfigurable": () => (/* binding */ makePropsConfigurable),
/* harmony export */   "pluckProps": () => (/* binding */ pluckProps),
/* harmony export */   "prefixPropName": () => (/* binding */ prefixPropName),
/* harmony export */   "suffixPropName": () => (/* binding */ suffixPropName),
/* harmony export */   "unprefixPropName": () => (/* binding */ unprefixPropName)
/* harmony export */ });
/* harmony import */ var _constants_props__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/props */ "./node_modules/bootstrap-vue/esm/constants/props.js");
/* harmony import */ var _clone_deep__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./clone-deep */ "./node_modules/bootstrap-vue/esm/utils/clone-deep.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./config */ "./node_modules/bootstrap-vue/esm/utils/config.js");
/* harmony import */ var _identity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./identity */ "./node_modules/bootstrap-vue/esm/utils/identity.js");
/* harmony import */ var _inspect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inspect */ "./node_modules/bootstrap-vue/esm/utils/inspect.js");
/* harmony import */ var _object__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./object */ "./node_modules/bootstrap-vue/esm/utils/object.js");
/* harmony import */ var _string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./string */ "./node_modules/bootstrap-vue/esm/utils/string.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







 // Prefix a property

var prefixPropName = function prefixPropName(prefix, value) {
  return prefix + (0,_string__WEBPACK_IMPORTED_MODULE_0__.upperFirst)(value);
}; // Remove a prefix from a property

var unprefixPropName = function unprefixPropName(prefix, value) {
  return (0,_string__WEBPACK_IMPORTED_MODULE_0__.lowerFirst)(value.replace(prefix, ''));
}; // Suffix can be a falsey value so nothing is appended to string
// (helps when looping over props & some shouldn't change)
// Use data last parameters to allow for currying

var suffixPropName = function suffixPropName(suffix, value) {
  return value + (suffix ? (0,_string__WEBPACK_IMPORTED_MODULE_0__.upperFirst)(suffix) : '');
}; // Generates a prop object

var makeProp = function makeProp() {
  var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_ANY;
  var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
  var requiredOrValidator = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
  var validator = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;
  var required = requiredOrValidator === true;
  validator = required ? validator : requiredOrValidator;
  return _objectSpread(_objectSpread(_objectSpread({}, type ? {
    type: type
  } : {}), required ? {
    required: required
  } : (0,_inspect__WEBPACK_IMPORTED_MODULE_2__.isUndefined)(value) ? {} : {
    default: (0,_inspect__WEBPACK_IMPORTED_MODULE_2__.isObject)(value) ? function () {
      return value;
    } : value
  }), (0,_inspect__WEBPACK_IMPORTED_MODULE_2__.isUndefined)(validator) ? {} : {
    validator: validator
  });
}; // Copies props from one array/object to a new array/object
// Prop values are also cloned as new references to prevent possible
// mutation of original prop object values
// Optionally accepts a function to transform the prop name

var copyProps = function copyProps(props) {
  var transformFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _identity__WEBPACK_IMPORTED_MODULE_3__.identity;

  if ((0,_inspect__WEBPACK_IMPORTED_MODULE_2__.isArray)(props)) {
    return props.map(transformFn);
  }

  var copied = {};

  for (var prop in props) {
    /* istanbul ignore else */
    if ((0,_object__WEBPACK_IMPORTED_MODULE_4__.hasOwnProperty)(props, prop)) {
      // If the prop value is an object, do a shallow clone
      // to prevent potential mutations to the original object
      copied[transformFn(prop)] = (0,_inspect__WEBPACK_IMPORTED_MODULE_2__.isObject)(props[prop]) ? (0,_object__WEBPACK_IMPORTED_MODULE_4__.clone)(props[prop]) : props[prop];
    }
  }

  return copied;
}; // Given an array of properties or an object of property keys,
// plucks all the values off the target object, returning a new object
// that has props that reference the original prop values

var pluckProps = function pluckProps(keysToPluck, objToPluck) {
  var transformFn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _identity__WEBPACK_IMPORTED_MODULE_3__.identity;
  return ((0,_inspect__WEBPACK_IMPORTED_MODULE_2__.isArray)(keysToPluck) ? keysToPluck.slice() : (0,_object__WEBPACK_IMPORTED_MODULE_4__.keys)(keysToPluck)).reduce(function (memo, prop) {
    memo[transformFn(prop)] = objToPluck[prop];
    return memo;
  }, {});
}; // Make a prop object configurable by global configuration
// Replaces the current `default` key of each prop with a `getComponentConfig()`
// call that falls back to the current default value of the prop

var makePropConfigurable = function makePropConfigurable(prop, key, componentKey) {
  return _objectSpread(_objectSpread({}, (0,_clone_deep__WEBPACK_IMPORTED_MODULE_5__.cloneDeep)(prop)), {}, {
    default: function bvConfigurablePropDefault() {
      var value = (0,_config__WEBPACK_IMPORTED_MODULE_6__.getComponentConfig)(componentKey, key, prop.default);
      return (0,_inspect__WEBPACK_IMPORTED_MODULE_2__.isFunction)(value) ? value() : value;
    }
  });
}; // Make a props object configurable by global configuration
// Replaces the current `default` key of each prop with a `getComponentConfig()`
// call that falls back to the current default value of the prop

var makePropsConfigurable = function makePropsConfigurable(props, componentKey) {
  return (0,_object__WEBPACK_IMPORTED_MODULE_4__.keys)(props).reduce(function (result, key) {
    return _objectSpread(_objectSpread({}, result), {}, _defineProperty({}, key, makePropConfigurable(props[key], key, componentKey)));
  }, {});
}; // Get function name we use in `makePropConfigurable()`
// for the prop default value override to compare
// against in `hasPropFunction()`

var configurablePropDefaultFnName = makePropConfigurable({}, '', '').default.name; // Detect wether the given value is currently a function
// and isn't the props default function

var hasPropFunction = function hasPropFunction(fn) {
  return (0,_inspect__WEBPACK_IMPORTED_MODULE_2__.isFunction)(fn) && fn.name && fn.name !== configurablePropDefaultFnName;
};

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/utils/router.js":
/*!********************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/utils/router.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "computeHref": () => (/* binding */ computeHref),
/* harmony export */   "computeRel": () => (/* binding */ computeRel),
/* harmony export */   "computeTag": () => (/* binding */ computeTag),
/* harmony export */   "isLink": () => (/* binding */ isLink),
/* harmony export */   "isRouterLink": () => (/* binding */ isRouterLink),
/* harmony export */   "parseQuery": () => (/* binding */ parseQuery),
/* harmony export */   "stringifyQueryObj": () => (/* binding */ stringifyQueryObj)
/* harmony export */ });
/* harmony import */ var _constants_regex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/regex */ "./node_modules/bootstrap-vue/esm/constants/regex.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dom */ "./node_modules/bootstrap-vue/esm/utils/dom.js");
/* harmony import */ var _inspect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inspect */ "./node_modules/bootstrap-vue/esm/utils/inspect.js");
/* harmony import */ var _object__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./object */ "./node_modules/bootstrap-vue/esm/utils/object.js");
/* harmony import */ var _safe_vue_instance__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./safe-vue-instance */ "./node_modules/bootstrap-vue/esm/utils/safe-vue-instance.js");
/* harmony import */ var _string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./string */ "./node_modules/bootstrap-vue/esm/utils/string.js");






var ANCHOR_TAG = 'a'; // Method to replace reserved chars

var encodeReserveReplacer = function encodeReserveReplacer(c) {
  return '%' + c.charCodeAt(0).toString(16);
}; // Fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas


var encode = function encode(str) {
  return encodeURIComponent((0,_string__WEBPACK_IMPORTED_MODULE_0__.toString)(str)).replace(_constants_regex__WEBPACK_IMPORTED_MODULE_1__.RX_ENCODE_REVERSE, encodeReserveReplacer).replace(_constants_regex__WEBPACK_IMPORTED_MODULE_1__.RX_ENCODED_COMMA, ',');
};

var decode = decodeURIComponent; // Stringifies an object of query parameters
// See: https://github.com/vuejs/vue-router/blob/dev/src/util/query.js

var stringifyQueryObj = function stringifyQueryObj(obj) {
  if (!(0,_inspect__WEBPACK_IMPORTED_MODULE_2__.isPlainObject)(obj)) {
    return '';
  }

  var query = (0,_object__WEBPACK_IMPORTED_MODULE_3__.keys)(obj).map(function (key) {
    var value = obj[key];

    if ((0,_inspect__WEBPACK_IMPORTED_MODULE_2__.isUndefined)(value)) {
      return '';
    } else if ((0,_inspect__WEBPACK_IMPORTED_MODULE_2__.isNull)(value)) {
      return encode(key);
    } else if ((0,_inspect__WEBPACK_IMPORTED_MODULE_2__.isArray)(value)) {
      return value.reduce(function (results, value2) {
        if ((0,_inspect__WEBPACK_IMPORTED_MODULE_2__.isNull)(value2)) {
          results.push(encode(key));
        } else if (!(0,_inspect__WEBPACK_IMPORTED_MODULE_2__.isUndefined)(value2)) {
          // Faster than string interpolation
          results.push(encode(key) + '=' + encode(value2));
        }

        return results;
      }, []).join('&');
    } // Faster than string interpolation


    return encode(key) + '=' + encode(value);
  })
  /* must check for length, as we only want to filter empty strings, not things that look falsey! */
  .filter(function (x) {
    return x.length > 0;
  }).join('&');
  return query ? "?".concat(query) : '';
};
var parseQuery = function parseQuery(query) {
  var parsed = {};
  query = (0,_string__WEBPACK_IMPORTED_MODULE_0__.toString)(query).trim().replace(_constants_regex__WEBPACK_IMPORTED_MODULE_1__.RX_QUERY_START, '');

  if (!query) {
    return parsed;
  }

  query.split('&').forEach(function (param) {
    var parts = param.replace(_constants_regex__WEBPACK_IMPORTED_MODULE_1__.RX_PLUS, ' ').split('=');
    var key = decode(parts.shift());
    var value = parts.length > 0 ? decode(parts.join('=')) : null;

    if ((0,_inspect__WEBPACK_IMPORTED_MODULE_2__.isUndefined)(parsed[key])) {
      parsed[key] = value;
    } else if ((0,_inspect__WEBPACK_IMPORTED_MODULE_2__.isArray)(parsed[key])) {
      parsed[key].push(value);
    } else {
      parsed[key] = [parsed[key], value];
    }
  });
  return parsed;
};
var isLink = function isLink(props) {
  return !!(props.href || props.to);
};
var isRouterLink = function isRouterLink(tag) {
  return !!(tag && !(0,_dom__WEBPACK_IMPORTED_MODULE_4__.isTag)(tag, 'a'));
};
var computeTag = function computeTag(_ref, thisOrParent) {
  var to = _ref.to,
      disabled = _ref.disabled,
      routerComponentName = _ref.routerComponentName;
  var hasRouter = !!(0,_safe_vue_instance__WEBPACK_IMPORTED_MODULE_5__.safeVueInstance)(thisOrParent).$router;
  var hasNuxt = !!(0,_safe_vue_instance__WEBPACK_IMPORTED_MODULE_5__.safeVueInstance)(thisOrParent).$nuxt;

  if (!hasRouter || hasRouter && (disabled || !to)) {
    return ANCHOR_TAG;
  } // TODO:
  //   Check registered components for existence of user supplied router link component name
  //   We would need to check PascalCase, kebab-case, and camelCase versions of name:
  //   const name = routerComponentName
  //   const names = [name, PascalCase(name), KebabCase(name), CamelCase(name)]
  //   exists = names.some(name => !!thisOrParent.$options.components[name])
  //   And may want to cache the result for performance or we just let the render fail
  //   if the component is not registered


  return routerComponentName || (hasNuxt ? 'nuxt-link' : 'router-link');
};
var computeRel = function computeRel() {
  var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      target = _ref2.target,
      rel = _ref2.rel;

  return target === '_blank' && (0,_inspect__WEBPACK_IMPORTED_MODULE_2__.isNull)(rel) ? 'noopener' : rel || null;
};
var computeHref = function computeHref() {
  var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      href = _ref3.href,
      to = _ref3.to;

  var tag = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ANCHOR_TAG;
  var fallback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '#';
  var toFallback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '/';

  // Return `href` when explicitly provided
  if (href) {
    return href;
  } // We've checked for `$router` in `computeTag()`, so `isRouterLink()` indicates a live router
  // When deferring to Vue Router's `<router-link>`, don't use the `href` attribute at all
  // We return `null`, and then remove `href` from the attributes passed to `<router-link>`


  if (isRouterLink(tag)) {
    return null;
  } // Fallback to `to` prop (if `to` is a string)


  if ((0,_inspect__WEBPACK_IMPORTED_MODULE_2__.isString)(to)) {
    return to || toFallback;
  } // Fallback to `to.path' + `to.query` + `to.hash` prop (if `to` is an object)


  if ((0,_inspect__WEBPACK_IMPORTED_MODULE_2__.isPlainObject)(to) && (to.path || to.query || to.hash)) {
    var path = (0,_string__WEBPACK_IMPORTED_MODULE_0__.toString)(to.path);
    var query = stringifyQueryObj(to.query);
    var hash = (0,_string__WEBPACK_IMPORTED_MODULE_0__.toString)(to.hash);
    hash = !hash || hash.charAt(0) === '#' ? hash : "#".concat(hash);
    return "".concat(path).concat(query).concat(hash) || toFallback;
  } // If nothing is provided return the fallback


  return fallback;
};

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/utils/safe-vue-instance.js":
/*!*******************************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/utils/safe-vue-instance.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "safeVueInstance": () => (/* binding */ safeVueInstance)
/* harmony export */ });
/* harmony import */ var _vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vue */ "./node_modules/bootstrap-vue/esm/vue.js");

function safeVueInstance(target) {
  if (!_vue__WEBPACK_IMPORTED_MODULE_0__.isVue3) {
    return target;
  }

  return new Proxy(target, {
    get: function get(target, prop) {
      return prop in target ? target[prop] : undefined;
    }
  });
}

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/utils/string.js":
/*!********************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/utils/string.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "escapeRegExp": () => (/* binding */ escapeRegExp),
/* harmony export */   "kebabCase": () => (/* binding */ kebabCase),
/* harmony export */   "lowerCase": () => (/* binding */ lowerCase),
/* harmony export */   "lowerFirst": () => (/* binding */ lowerFirst),
/* harmony export */   "pascalCase": () => (/* binding */ pascalCase),
/* harmony export */   "startCase": () => (/* binding */ startCase),
/* harmony export */   "toString": () => (/* binding */ toString),
/* harmony export */   "trim": () => (/* binding */ trim),
/* harmony export */   "trimLeft": () => (/* binding */ trimLeft),
/* harmony export */   "trimRight": () => (/* binding */ trimRight),
/* harmony export */   "upperCase": () => (/* binding */ upperCase),
/* harmony export */   "upperFirst": () => (/* binding */ upperFirst)
/* harmony export */ });
/* harmony import */ var _constants_regex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/regex */ "./node_modules/bootstrap-vue/esm/constants/regex.js");
/* harmony import */ var _inspect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inspect */ "./node_modules/bootstrap-vue/esm/utils/inspect.js");
// String utilities

 // --- Utilities ---
// Converts PascalCase or camelCase to kebab-case

var kebabCase = function kebabCase(str) {
  return str.replace(_constants_regex__WEBPACK_IMPORTED_MODULE_0__.RX_HYPHENATE, '-$1').toLowerCase();
}; // Converts a kebab-case or camelCase string to PascalCase

var pascalCase = function pascalCase(str) {
  str = kebabCase(str).replace(_constants_regex__WEBPACK_IMPORTED_MODULE_0__.RX_UN_KEBAB, function (_, c) {
    return c ? c.toUpperCase() : '';
  });
  return str.charAt(0).toUpperCase() + str.slice(1);
}; // Converts a string, including strings in camelCase or snake_case, into Start Case
// It keeps original single quote and hyphen in the word
// https://github.com/UrbanCompass/to-start-case

var startCase = function startCase(str) {
  return str.replace(_constants_regex__WEBPACK_IMPORTED_MODULE_0__.RX_UNDERSCORE, ' ').replace(_constants_regex__WEBPACK_IMPORTED_MODULE_0__.RX_LOWER_UPPER, function (str, $1, $2) {
    return $1 + ' ' + $2;
  }).replace(_constants_regex__WEBPACK_IMPORTED_MODULE_0__.RX_START_SPACE_WORD, function (str, $1, $2) {
    return $1 + $2.toUpperCase();
  });
}; // Lowercases the first letter of a string and returns a new string

var lowerFirst = function lowerFirst(str) {
  str = (0,_inspect__WEBPACK_IMPORTED_MODULE_1__.isString)(str) ? str.trim() : String(str);
  return str.charAt(0).toLowerCase() + str.slice(1);
}; // Uppercases the first letter of a string and returns a new string

var upperFirst = function upperFirst(str) {
  str = (0,_inspect__WEBPACK_IMPORTED_MODULE_1__.isString)(str) ? str.trim() : String(str);
  return str.charAt(0).toUpperCase() + str.slice(1);
}; // Escape characters to be used in building a regular expression

var escapeRegExp = function escapeRegExp(str) {
  return str.replace(_constants_regex__WEBPACK_IMPORTED_MODULE_0__.RX_REGEXP_REPLACE, '\\$&');
}; // Convert a value to a string that can be rendered
// `undefined`/`null` will be converted to `''`
// Plain objects and arrays will be JSON stringified

var toString = function toString(val) {
  var spaces = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  return (0,_inspect__WEBPACK_IMPORTED_MODULE_1__.isUndefinedOrNull)(val) ? '' : (0,_inspect__WEBPACK_IMPORTED_MODULE_1__.isArray)(val) || (0,_inspect__WEBPACK_IMPORTED_MODULE_1__.isPlainObject)(val) && val.toString === Object.prototype.toString ? JSON.stringify(val, null, spaces) : String(val);
}; // Remove leading white space from a string

var trimLeft = function trimLeft(str) {
  return toString(str).replace(_constants_regex__WEBPACK_IMPORTED_MODULE_0__.RX_TRIM_LEFT, '');
}; // Remove Trailing white space from a string

var trimRight = function trimRight(str) {
  return toString(str).replace(_constants_regex__WEBPACK_IMPORTED_MODULE_0__.RX_TRIM_RIGHT, '');
}; // Remove leading and trailing white space from a string

var trim = function trim(str) {
  return toString(str).trim();
}; // Lower case a string

var lowerCase = function lowerCase(str) {
  return toString(str).toLowerCase();
}; // Upper case a string

var upperCase = function upperCase(str) {
  return toString(str).toUpperCase();
};

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/utils/warn.js":
/*!******************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/utils/warn.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "warn": () => (/* binding */ warn),
/* harmony export */   "warnNoMutationObserverSupport": () => (/* binding */ warnNoMutationObserverSupport),
/* harmony export */   "warnNoPromiseSupport": () => (/* binding */ warnNoPromiseSupport),
/* harmony export */   "warnNotClient": () => (/* binding */ warnNotClient)
/* harmony export */ });
/* harmony import */ var _constants_env__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/env */ "./node_modules/bootstrap-vue/esm/constants/env.js");
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./env */ "./node_modules/bootstrap-vue/esm/utils/env.js");


/**
 * Log a warning message to the console with BootstrapVue formatting
 * @param {string} message
 */

var warn = function warn(message)
/* istanbul ignore next */
{
  var source = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  if (!(0,_env__WEBPACK_IMPORTED_MODULE_0__.getNoWarn)()) {
    console.warn("[BootstrapVue warn]: ".concat(source ? "".concat(source, " - ") : '').concat(message));
  }
};
/**
 * Warn when no Promise support is given
 * @param {string} source
 * @returns {boolean} warned
 */

var warnNotClient = function warnNotClient(source) {
  /* istanbul ignore else */
  if (_constants_env__WEBPACK_IMPORTED_MODULE_1__.IS_BROWSER) {
    return false;
  } else {
    warn("".concat(source, ": Can not be called during SSR."));
    return true;
  }
};
/**
 * Warn when no Promise support is given
 * @param {string} source
 * @returns {boolean} warned
 */

var warnNoPromiseSupport = function warnNoPromiseSupport(source) {
  /* istanbul ignore else */
  if (_constants_env__WEBPACK_IMPORTED_MODULE_1__.HAS_PROMISE_SUPPORT) {
    return false;
  } else {
    warn("".concat(source, ": Requires Promise support."));
    return true;
  }
};
/**
 * Warn when no MutationObserver support is given
 * @param {string} source
 * @returns {boolean} warned
 */

var warnNoMutationObserverSupport = function warnNoMutationObserverSupport(source) {
  /* istanbul ignore else */
  if (_constants_env__WEBPACK_IMPORTED_MODULE_1__.HAS_MUTATION_OBSERVER_SUPPORT) {
    return false;
  } else {
    warn("".concat(source, ": Requires MutationObserver support."));
    return true;
  }
};

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/vue.js":
/*!***********************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/vue.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "COMPONENT_UID_KEY": () => (/* binding */ COMPONENT_UID_KEY),
/* harmony export */   "REF_FOR_KEY": () => (/* binding */ REF_FOR_KEY),
/* harmony export */   "Vue": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "extend": () => (/* binding */ extend),
/* harmony export */   "isVue3": () => (/* binding */ isVue3),
/* harmony export */   "mergeData": () => (/* reexport safe */ vue_functional_data_merge__WEBPACK_IMPORTED_MODULE_0__.mergeData),
/* harmony export */   "nextTick": () => (/* binding */ nextTick)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var vue_functional_data_merge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-functional-data-merge */ "./node_modules/vue-functional-data-merge/dist/lib.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }


 // --- Constants ---

var COMPONENT_UID_KEY = '_uid';
var isVue3 = vue__WEBPACK_IMPORTED_MODULE_1__["default"].version.startsWith('3');
var REF_FOR_KEY = isVue3 ? 'ref_for' : 'refInFor';
var ALLOWED_FIELDS_IN_DATA = ['class', 'staticClass', 'style', 'attrs', 'props', 'domProps', 'on', 'nativeOn', 'directives', 'scopedSlots', 'slot', 'key', 'ref', 'refInFor'];
var extend = vue__WEBPACK_IMPORTED_MODULE_1__["default"].extend.bind(vue__WEBPACK_IMPORTED_MODULE_1__["default"]);

if (isVue3) {
  var originalExtend = vue__WEBPACK_IMPORTED_MODULE_1__["default"].extend;
  var KNOWN_COMPONENTS = ['router-link', 'transition', 'transition-group'];
  var originalVModelDynamicCreated = vue__WEBPACK_IMPORTED_MODULE_1__["default"].vModelDynamic.created;
  var originalVModelDynamicBeforeUpdate = vue__WEBPACK_IMPORTED_MODULE_1__["default"].vModelDynamic.beforeUpdate; // See https://github.com/vuejs/vue-next/pull/4121 for details

  vue__WEBPACK_IMPORTED_MODULE_1__["default"].vModelDynamic.created = function (el, binding, vnode) {
    originalVModelDynamicCreated.call(this, el, binding, vnode);

    if (!el._assign) {
      el._assign = function () {};
    }
  };

  vue__WEBPACK_IMPORTED_MODULE_1__["default"].vModelDynamic.beforeUpdate = function (el, binding, vnode) {
    originalVModelDynamicBeforeUpdate.call(this, el, binding, vnode);

    if (!el._assign) {
      el._assign = function () {};
    }
  };

  extend = function patchedBootstrapVueExtend(definition) {
    if (_typeof(definition) === 'object' && definition.render && !definition.__alreadyPatched) {
      var originalRender = definition.render;
      definition.__alreadyPatched = true;

      definition.render = function (h) {
        var patchedH = function patchedH(tag, dataObjOrChildren, rawSlots) {
          var slots = rawSlots === undefined ? [] : [Array.isArray(rawSlots) ? rawSlots.filter(Boolean) : rawSlots];
          var isTag = typeof tag === 'string' && !KNOWN_COMPONENTS.includes(tag);
          var isSecondArgumentDataObject = dataObjOrChildren && _typeof(dataObjOrChildren) === 'object' && !Array.isArray(dataObjOrChildren);

          if (!isSecondArgumentDataObject) {
            return h.apply(void 0, [tag, dataObjOrChildren].concat(slots));
          }

          var attrs = dataObjOrChildren.attrs,
              props = dataObjOrChildren.props,
              restData = _objectWithoutProperties(dataObjOrChildren, ["attrs", "props"]);

          var normalizedData = _objectSpread(_objectSpread({}, restData), {}, {
            attrs: attrs,
            props: isTag ? {} : props
          });

          if (tag === 'router-link' && !normalizedData.slots && !normalizedData.scopedSlots) {
            // terrible workaround to fix router-link rendering with compat vue-router
            normalizedData.scopedSlots = {
              $hasNormal: function $hasNormal() {}
            };
          }

          return h.apply(void 0, [tag, normalizedData].concat(slots));
        };

        if (definition.functional) {
          var _ctx$children, _ctx$children$default;

          var ctx = arguments[1];

          var patchedCtx = _objectSpread({}, ctx);

          patchedCtx.data = {
            attrs: _objectSpread({}, ctx.data.attrs || {}),
            props: _objectSpread({}, ctx.data.props || {})
          };
          Object.keys(ctx.data || {}).forEach(function (key) {
            if (ALLOWED_FIELDS_IN_DATA.includes(key)) {
              patchedCtx.data[key] = ctx.data[key];
            } else if (key in ctx.props) {
              patchedCtx.data.props[key] = ctx.data[key];
            } else if (!key.startsWith('on')) {
              patchedCtx.data.attrs[key] = ctx.data[key];
            }
          });
          var IGNORED_CHILDREN_KEYS = ['_ctx'];
          var children = ((_ctx$children = ctx.children) === null || _ctx$children === void 0 ? void 0 : (_ctx$children$default = _ctx$children.default) === null || _ctx$children$default === void 0 ? void 0 : _ctx$children$default.call(_ctx$children)) || ctx.children;

          if (children && Object.keys(patchedCtx.children).filter(function (k) {
            return !IGNORED_CHILDREN_KEYS.includes(k);
          }).length === 0) {
            delete patchedCtx.children;
          } else {
            patchedCtx.children = children;
          }

          patchedCtx.data.on = ctx.listeners;
          return originalRender.call(this, patchedH, patchedCtx);
        }

        return originalRender.call(this, patchedH);
      };
    }

    return originalExtend.call(this, definition);
  }.bind(vue__WEBPACK_IMPORTED_MODULE_1__["default"]);
}

var nextTick = vue__WEBPACK_IMPORTED_MODULE_1__["default"].nextTick;


/***/ }),

/***/ "./node_modules/vue-functional-data-merge/dist/lib.esm.js":
/*!****************************************************************!*\
  !*** ./node_modules/vue-functional-data-merge/dist/lib.esm.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mergeData": () => (/* binding */ a)
/* harmony export */ });
var e=function(){return(e=Object.assign||function(e){for(var t,r=1,s=arguments.length;r<s;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},t={kebab:/-(\w)/g,styleProp:/:(.*)/,styleList:/;(?![^(]*\))/g};function r(e,t){return t?t.toUpperCase():""}function s(e){for(var s,a={},c=0,o=e.split(t.styleList);c<o.length;c++){var n=o[c].split(t.styleProp),i=n[0],l=n[1];(i=i.trim())&&("string"==typeof l&&(l=l.trim()),a[(s=i,s.replace(t.kebab,r))]=l)}return a}function a(){for(var t,r,a={},c=arguments.length;c--;)for(var o=0,n=Object.keys(arguments[c]);o<n.length;o++)switch(t=n[o]){case"class":case"style":case"directives":if(Array.isArray(a[t])||(a[t]=[]),"style"===t){var i=void 0;i=Array.isArray(arguments[c].style)?arguments[c].style:[arguments[c].style];for(var l=0;l<i.length;l++){var y=i[l];"string"==typeof y&&(i[l]=s(y))}arguments[c].style=i}a[t]=a[t].concat(arguments[c][t]);break;case"staticClass":if(!arguments[c][t])break;void 0===a[t]&&(a[t]=""),a[t]&&(a[t]+=" "),a[t]+=arguments[c][t].trim();break;case"on":case"nativeOn":a[t]||(a[t]={});for(var p=0,f=Object.keys(arguments[c][t]||{});p<f.length;p++)r=f[p],a[t][r]?a[t][r]=[].concat(a[t][r],arguments[c][t][r]):a[t][r]=arguments[c][t][r];break;case"attrs":case"props":case"domProps":case"scopedSlots":case"staticStyle":case"hook":case"transition":a[t]||(a[t]={}),a[t]=e({},arguments[c][t],a[t]);break;case"slot":case"key":case"ref":case"tag":case"show":case"keepAlive":default:a[t]||(a[t]=arguments[c][t])}return a}
//# sourceMappingURL=lib.esm.js.map


/***/ }),

/***/ "./platform/plugins/ecommerce/resources/assets/js/components/CreateOrderComponent.vue":
/*!********************************************************************************************!*\
  !*** ./platform/plugins/ecommerce/resources/assets/js/components/CreateOrderComponent.vue ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CreateOrderComponent_vue_vue_type_template_id_78266498___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CreateOrderComponent.vue?vue&type=template&id=78266498& */ "./platform/plugins/ecommerce/resources/assets/js/components/CreateOrderComponent.vue?vue&type=template&id=78266498&");
/* harmony import */ var _CreateOrderComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CreateOrderComponent.vue?vue&type=script&lang=js& */ "./platform/plugins/ecommerce/resources/assets/js/components/CreateOrderComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CreateOrderComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CreateOrderComponent_vue_vue_type_template_id_78266498___WEBPACK_IMPORTED_MODULE_0__.render,
  _CreateOrderComponent_vue_vue_type_template_id_78266498___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "platform/plugins/ecommerce/resources/assets/js/components/CreateOrderComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./platform/plugins/ecommerce/resources/assets/js/components/CreateOrderComponent.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************!*\
  !*** ./platform/plugins/ecommerce/resources/assets/js/components/CreateOrderComponent.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateOrderComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CreateOrderComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./platform/plugins/ecommerce/resources/assets/js/components/CreateOrderComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateOrderComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./platform/plugins/ecommerce/resources/assets/js/components/CreateOrderComponent.vue?vue&type=template&id=78266498&":
/*!***************************************************************************************************************************!*\
  !*** ./platform/plugins/ecommerce/resources/assets/js/components/CreateOrderComponent.vue?vue&type=template&id=78266498& ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateOrderComponent_vue_vue_type_template_id_78266498___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateOrderComponent_vue_vue_type_template_id_78266498___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateOrderComponent_vue_vue_type_template_id_78266498___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CreateOrderComponent.vue?vue&type=template&id=78266498& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./platform/plugins/ecommerce/resources/assets/js/components/CreateOrderComponent.vue?vue&type=template&id=78266498&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ normalizeComponent)
/* harmony export */ });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./node_modules/vue/dist/vue.esm.js":
/*!******************************************!*\
  !*** ./node_modules/vue/dist/vue.esm.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EffectScope": () => (/* binding */ EffectScope),
/* harmony export */   "computed": () => (/* binding */ computed),
/* harmony export */   "customRef": () => (/* binding */ customRef),
/* harmony export */   "default": () => (/* binding */ Vue),
/* harmony export */   "defineAsyncComponent": () => (/* binding */ defineAsyncComponent),
/* harmony export */   "defineComponent": () => (/* binding */ defineComponent),
/* harmony export */   "del": () => (/* binding */ del),
/* harmony export */   "effectScope": () => (/* binding */ effectScope),
/* harmony export */   "getCurrentInstance": () => (/* binding */ getCurrentInstance),
/* harmony export */   "getCurrentScope": () => (/* binding */ getCurrentScope),
/* harmony export */   "h": () => (/* binding */ h),
/* harmony export */   "inject": () => (/* binding */ inject),
/* harmony export */   "isProxy": () => (/* binding */ isProxy),
/* harmony export */   "isReactive": () => (/* binding */ isReactive),
/* harmony export */   "isReadonly": () => (/* binding */ isReadonly),
/* harmony export */   "isRef": () => (/* binding */ isRef),
/* harmony export */   "isShallow": () => (/* binding */ isShallow),
/* harmony export */   "markRaw": () => (/* binding */ markRaw),
/* harmony export */   "mergeDefaults": () => (/* binding */ mergeDefaults),
/* harmony export */   "nextTick": () => (/* binding */ nextTick),
/* harmony export */   "onActivated": () => (/* binding */ onActivated),
/* harmony export */   "onBeforeMount": () => (/* binding */ onBeforeMount),
/* harmony export */   "onBeforeUnmount": () => (/* binding */ onBeforeUnmount),
/* harmony export */   "onBeforeUpdate": () => (/* binding */ onBeforeUpdate),
/* harmony export */   "onDeactivated": () => (/* binding */ onDeactivated),
/* harmony export */   "onErrorCaptured": () => (/* binding */ onErrorCaptured),
/* harmony export */   "onMounted": () => (/* binding */ onMounted),
/* harmony export */   "onRenderTracked": () => (/* binding */ onRenderTracked),
/* harmony export */   "onRenderTriggered": () => (/* binding */ onRenderTriggered),
/* harmony export */   "onScopeDispose": () => (/* binding */ onScopeDispose),
/* harmony export */   "onServerPrefetch": () => (/* binding */ onServerPrefetch),
/* harmony export */   "onUnmounted": () => (/* binding */ onUnmounted),
/* harmony export */   "onUpdated": () => (/* binding */ onUpdated),
/* harmony export */   "provide": () => (/* binding */ provide),
/* harmony export */   "proxyRefs": () => (/* binding */ proxyRefs),
/* harmony export */   "reactive": () => (/* binding */ reactive),
/* harmony export */   "readonly": () => (/* binding */ readonly),
/* harmony export */   "ref": () => (/* binding */ ref$1),
/* harmony export */   "set": () => (/* binding */ set),
/* harmony export */   "shallowReactive": () => (/* binding */ shallowReactive),
/* harmony export */   "shallowReadonly": () => (/* binding */ shallowReadonly),
/* harmony export */   "shallowRef": () => (/* binding */ shallowRef),
/* harmony export */   "toRaw": () => (/* binding */ toRaw),
/* harmony export */   "toRef": () => (/* binding */ toRef),
/* harmony export */   "toRefs": () => (/* binding */ toRefs),
/* harmony export */   "triggerRef": () => (/* binding */ triggerRef),
/* harmony export */   "unref": () => (/* binding */ unref),
/* harmony export */   "useAttrs": () => (/* binding */ useAttrs),
/* harmony export */   "useCssModule": () => (/* binding */ useCssModule),
/* harmony export */   "useCssVars": () => (/* binding */ useCssVars),
/* harmony export */   "useListeners": () => (/* binding */ useListeners),
/* harmony export */   "useSlots": () => (/* binding */ useSlots),
/* harmony export */   "version": () => (/* binding */ version),
/* harmony export */   "watch": () => (/* binding */ watch),
/* harmony export */   "watchEffect": () => (/* binding */ watchEffect),
/* harmony export */   "watchPostEffect": () => (/* binding */ watchPostEffect),
/* harmony export */   "watchSyncEffect": () => (/* binding */ watchSyncEffect)
/* harmony export */ });
/*!
 * Vue.js v2.7.14
 * (c) 2014-2022 Evan You
 * Released under the MIT License.
 */
var emptyObject = Object.freeze({});
var isArray = Array.isArray;
// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef(v) {
    return v === undefined || v === null;
}
function isDef(v) {
    return v !== undefined && v !== null;
}
function isTrue(v) {
    return v === true;
}
function isFalse(v) {
    return v === false;
}
/**
 * Check if value is primitive.
 */
function isPrimitive(value) {
    return (typeof value === 'string' ||
        typeof value === 'number' ||
        // $flow-disable-line
        typeof value === 'symbol' ||
        typeof value === 'boolean');
}
function isFunction(value) {
    return typeof value === 'function';
}
/**
 * Quick object check - this is primarily used to tell
 * objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject(obj) {
    return obj !== null && typeof obj === 'object';
}
/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;
function toRawType(value) {
    return _toString.call(value).slice(8, -1);
}
/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject(obj) {
    return _toString.call(obj) === '[object Object]';
}
function isRegExp(v) {
    return _toString.call(v) === '[object RegExp]';
}
/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex(val) {
    var n = parseFloat(String(val));
    return n >= 0 && Math.floor(n) === n && isFinite(val);
}
function isPromise(val) {
    return (isDef(val) &&
        typeof val.then === 'function' &&
        typeof val.catch === 'function');
}
/**
 * Convert a value to a string that is actually rendered.
 */
function toString(val) {
    return val == null
        ? ''
        : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
            ? JSON.stringify(val, null, 2)
            : String(val);
}
/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber(val) {
    var n = parseFloat(val);
    return isNaN(n) ? val : n;
}
/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap(str, expectsLowerCase) {
    var map = Object.create(null);
    var list = str.split(',');
    for (var i = 0; i < list.length; i++) {
        map[list[i]] = true;
    }
    return expectsLowerCase ? function (val) { return map[val.toLowerCase()]; } : function (val) { return map[val]; };
}
/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);
/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');
/**
 * Remove an item from an array.
 */
function remove$2(arr, item) {
    var len = arr.length;
    if (len) {
        // fast path for the only / last item
        if (item === arr[len - 1]) {
            arr.length = len - 1;
            return;
        }
        var index = arr.indexOf(item);
        if (index > -1) {
            return arr.splice(index, 1);
        }
    }
}
/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn(obj, key) {
    return hasOwnProperty.call(obj, key);
}
/**
 * Create a cached version of a pure function.
 */
function cached(fn) {
    var cache = Object.create(null);
    return function cachedFn(str) {
        var hit = cache[str];
        return hit || (cache[str] = fn(str));
    };
}
/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
    return str.replace(camelizeRE, function (_, c) { return (c ? c.toUpperCase() : ''); });
});
/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
});
/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
    return str.replace(hyphenateRE, '-$1').toLowerCase();
});
/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */
/* istanbul ignore next */
function polyfillBind(fn, ctx) {
    function boundFn(a) {
        var l = arguments.length;
        return l
            ? l > 1
                ? fn.apply(ctx, arguments)
                : fn.call(ctx, a)
            : fn.call(ctx);
    }
    boundFn._length = fn.length;
    return boundFn;
}
function nativeBind(fn, ctx) {
    return fn.bind(ctx);
}
// @ts-expect-error bind cannot be `undefined`
var bind$1 = Function.prototype.bind ? nativeBind : polyfillBind;
/**
 * Convert an Array-like object to a real Array.
 */
function toArray(list, start) {
    start = start || 0;
    var i = list.length - start;
    var ret = new Array(i);
    while (i--) {
        ret[i] = list[i + start];
    }
    return ret;
}
/**
 * Mix properties into target object.
 */
function extend(to, _from) {
    for (var key in _from) {
        to[key] = _from[key];
    }
    return to;
}
/**
 * Merge an Array of Objects into a single Object.
 */
function toObject(arr) {
    var res = {};
    for (var i = 0; i < arr.length; i++) {
        if (arr[i]) {
            extend(res, arr[i]);
        }
    }
    return res;
}
/* eslint-disable no-unused-vars */
/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop(a, b, c) { }
/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };
/* eslint-enable no-unused-vars */
/**
 * Return the same value.
 */
var identity = function (_) { return _; };
/**
 * Generate a string containing static keys from compiler modules.
 */
function genStaticKeys$1(modules) {
    return modules
        .reduce(function (keys, m) {
        return keys.concat(m.staticKeys || []);
    }, [])
        .join(',');
}
/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual(a, b) {
    if (a === b)
        return true;
    var isObjectA = isObject(a);
    var isObjectB = isObject(b);
    if (isObjectA && isObjectB) {
        try {
            var isArrayA = Array.isArray(a);
            var isArrayB = Array.isArray(b);
            if (isArrayA && isArrayB) {
                return (a.length === b.length &&
                    a.every(function (e, i) {
                        return looseEqual(e, b[i]);
                    }));
            }
            else if (a instanceof Date && b instanceof Date) {
                return a.getTime() === b.getTime();
            }
            else if (!isArrayA && !isArrayB) {
                var keysA = Object.keys(a);
                var keysB = Object.keys(b);
                return (keysA.length === keysB.length &&
                    keysA.every(function (key) {
                        return looseEqual(a[key], b[key]);
                    }));
            }
            else {
                /* istanbul ignore next */
                return false;
            }
        }
        catch (e) {
            /* istanbul ignore next */
            return false;
        }
    }
    else if (!isObjectA && !isObjectB) {
        return String(a) === String(b);
    }
    else {
        return false;
    }
}
/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf(arr, val) {
    for (var i = 0; i < arr.length; i++) {
        if (looseEqual(arr[i], val))
            return i;
    }
    return -1;
}
/**
 * Ensure a function is called only once.
 */
function once(fn) {
    var called = false;
    return function () {
        if (!called) {
            called = true;
            fn.apply(this, arguments);
        }
    };
}
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is#polyfill
function hasChanged(x, y) {
    if (x === y) {
        return x === 0 && 1 / x !== 1 / y;
    }
    else {
        return x === x || y === y;
    }
}

var SSR_ATTR = 'data-server-rendered';
var ASSET_TYPES = ['component', 'directive', 'filter'];
var LIFECYCLE_HOOKS = [
    'beforeCreate',
    'created',
    'beforeMount',
    'mounted',
    'beforeUpdate',
    'updated',
    'beforeDestroy',
    'destroyed',
    'activated',
    'deactivated',
    'errorCaptured',
    'serverPrefetch',
    'renderTracked',
    'renderTriggered'
];

var config = {
    /**
     * Option merge strategies (used in core/util/options)
     */
    // $flow-disable-line
    optionMergeStrategies: Object.create(null),
    /**
     * Whether to suppress warnings.
     */
    silent: false,
    /**
     * Show production mode tip message on boot?
     */
    productionTip: "development" !== 'production',
    /**
     * Whether to enable devtools
     */
    devtools: "development" !== 'production',
    /**
     * Whether to record perf
     */
    performance: false,
    /**
     * Error handler for watcher errors
     */
    errorHandler: null,
    /**
     * Warn handler for watcher warns
     */
    warnHandler: null,
    /**
     * Ignore certain custom elements
     */
    ignoredElements: [],
    /**
     * Custom user key aliases for v-on
     */
    // $flow-disable-line
    keyCodes: Object.create(null),
    /**
     * Check if a tag is reserved so that it cannot be registered as a
     * component. This is platform-dependent and may be overwritten.
     */
    isReservedTag: no,
    /**
     * Check if an attribute is reserved so that it cannot be used as a component
     * prop. This is platform-dependent and may be overwritten.
     */
    isReservedAttr: no,
    /**
     * Check if a tag is an unknown element.
     * Platform-dependent.
     */
    isUnknownElement: no,
    /**
     * Get the namespace of an element
     */
    getTagNamespace: noop,
    /**
     * Parse the real tag name for the specific platform.
     */
    parsePlatformTagName: identity,
    /**
     * Check if an attribute must be bound using property, e.g. value
     * Platform-dependent.
     */
    mustUseProp: no,
    /**
     * Perform updates asynchronously. Intended to be used by Vue Test Utils
     * This will significantly reduce performance if set to false.
     */
    async: true,
    /**
     * Exposed for legacy reasons
     */
    _lifecycleHooks: LIFECYCLE_HOOKS
};

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;
/**
 * Check if a string starts with $ or _
 */
function isReserved(str) {
    var c = (str + '').charCodeAt(0);
    return c === 0x24 || c === 0x5f;
}
/**
 * Define a property.
 */
function def(obj, key, val, enumerable) {
    Object.defineProperty(obj, key, {
        value: val,
        enumerable: !!enumerable,
        writable: true,
        configurable: true
    });
}
/**
 * Parse simple path.
 */
var bailRE = new RegExp("[^".concat(unicodeRegExp.source, ".$_\\d]"));
function parsePath(path) {
    if (bailRE.test(path)) {
        return;
    }
    var segments = path.split('.');
    return function (obj) {
        for (var i = 0; i < segments.length; i++) {
            if (!obj)
                return;
            obj = obj[segments[i]];
        }
        return obj;
    };
}

// can we use __proto__?
var hasProto = '__proto__' in {};
// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
UA && UA.indexOf('android') > 0;
var isIOS = UA && /iphone|ipad|ipod|ios/.test(UA);
UA && /chrome\/\d+/.test(UA) && !isEdge;
UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/);
// Firefox has a "watch" function on Object.prototype...
// @ts-expect-error firebox support
var nativeWatch = {}.watch;
var supportsPassive = false;
if (inBrowser) {
    try {
        var opts = {};
        Object.defineProperty(opts, 'passive', {
            get: function () {
                /* istanbul ignore next */
                supportsPassive = true;
            }
        }); // https://github.com/facebook/flow/issues/285
        window.addEventListener('test-passive', null, opts);
    }
    catch (e) { }
}
// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
    if (_isServer === undefined) {
        /* istanbul ignore if */
        if (!inBrowser && typeof __webpack_require__.g !== 'undefined') {
            // detect presence of vue-server-renderer and avoid
            // Webpack shimming the process
            _isServer =
                __webpack_require__.g['process'] && __webpack_require__.g['process'].env.VUE_ENV === 'server';
        }
        else {
            _isServer = false;
        }
    }
    return _isServer;
};
// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;
/* istanbul ignore next */
function isNative(Ctor) {
    return typeof Ctor === 'function' && /native code/.test(Ctor.toString());
}
var hasSymbol = typeof Symbol !== 'undefined' &&
    isNative(Symbol) &&
    typeof Reflect !== 'undefined' &&
    isNative(Reflect.ownKeys);
var _Set; // $flow-disable-line
/* istanbul ignore if */ if (typeof Set !== 'undefined' && isNative(Set)) {
    // use native Set when available.
    _Set = Set;
}
else {
    // a non-standard Set polyfill that only works with primitive keys.
    _Set = /** @class */ (function () {
        function Set() {
            this.set = Object.create(null);
        }
        Set.prototype.has = function (key) {
            return this.set[key] === true;
        };
        Set.prototype.add = function (key) {
            this.set[key] = true;
        };
        Set.prototype.clear = function () {
            this.set = Object.create(null);
        };
        return Set;
    }());
}

var currentInstance = null;
/**
 * This is exposed for compatibility with v3 (e.g. some functions in VueUse
 * relies on it). Do not use this internally, just use `currentInstance`.
 *
 * @internal this function needs manual type declaration because it relies
 * on previously manually authored types from Vue 2
 */
function getCurrentInstance() {
    return currentInstance && { proxy: currentInstance };
}
/**
 * @internal
 */
function setCurrentInstance(vm) {
    if (vm === void 0) { vm = null; }
    if (!vm)
        currentInstance && currentInstance._scope.off();
    currentInstance = vm;
    vm && vm._scope.on();
}

/**
 * @internal
 */
var VNode = /** @class */ (function () {
    function VNode(tag, data, children, text, elm, context, componentOptions, asyncFactory) {
        this.tag = tag;
        this.data = data;
        this.children = children;
        this.text = text;
        this.elm = elm;
        this.ns = undefined;
        this.context = context;
        this.fnContext = undefined;
        this.fnOptions = undefined;
        this.fnScopeId = undefined;
        this.key = data && data.key;
        this.componentOptions = componentOptions;
        this.componentInstance = undefined;
        this.parent = undefined;
        this.raw = false;
        this.isStatic = false;
        this.isRootInsert = true;
        this.isComment = false;
        this.isCloned = false;
        this.isOnce = false;
        this.asyncFactory = asyncFactory;
        this.asyncMeta = undefined;
        this.isAsyncPlaceholder = false;
    }
    Object.defineProperty(VNode.prototype, "child", {
        // DEPRECATED: alias for componentInstance for backwards compat.
        /* istanbul ignore next */
        get: function () {
            return this.componentInstance;
        },
        enumerable: false,
        configurable: true
    });
    return VNode;
}());
var createEmptyVNode = function (text) {
    if (text === void 0) { text = ''; }
    var node = new VNode();
    node.text = text;
    node.isComment = true;
    return node;
};
function createTextVNode(val) {
    return new VNode(undefined, undefined, undefined, String(val));
}
// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode(vnode) {
    var cloned = new VNode(vnode.tag, vnode.data, 
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(), vnode.text, vnode.elm, vnode.context, vnode.componentOptions, vnode.asyncFactory);
    cloned.ns = vnode.ns;
    cloned.isStatic = vnode.isStatic;
    cloned.key = vnode.key;
    cloned.isComment = vnode.isComment;
    cloned.fnContext = vnode.fnContext;
    cloned.fnOptions = vnode.fnOptions;
    cloned.fnScopeId = vnode.fnScopeId;
    cloned.asyncMeta = vnode.asyncMeta;
    cloned.isCloned = true;
    return cloned;
}

/* not type checking this file because flow doesn't play well with Proxy */
var initProxy;
if (true) {
    var allowedGlobals_1 = makeMap('Infinity,undefined,NaN,isFinite,isNaN,' +
        'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
        'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,' +
        'require' // for Webpack/Browserify
    );
    var warnNonPresent_1 = function (target, key) {
        warn$2("Property or method \"".concat(key, "\" is not defined on the instance but ") +
            'referenced during render. Make sure that this property is reactive, ' +
            'either in the data option, or for class-based components, by ' +
            'initializing the property. ' +
            'See: https://v2.vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.', target);
    };
    var warnReservedPrefix_1 = function (target, key) {
        warn$2("Property \"".concat(key, "\" must be accessed with \"$data.").concat(key, "\" because ") +
            'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
            'prevent conflicts with Vue internals. ' +
            'See: https://v2.vuejs.org/v2/api/#data', target);
    };
    var hasProxy_1 = typeof Proxy !== 'undefined' && isNative(Proxy);
    if (hasProxy_1) {
        var isBuiltInModifier_1 = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
        config.keyCodes = new Proxy(config.keyCodes, {
            set: function (target, key, value) {
                if (isBuiltInModifier_1(key)) {
                    warn$2("Avoid overwriting built-in modifier in config.keyCodes: .".concat(key));
                    return false;
                }
                else {
                    target[key] = value;
                    return true;
                }
            }
        });
    }
    var hasHandler_1 = {
        has: function (target, key) {
            var has = key in target;
            var isAllowed = allowedGlobals_1(key) ||
                (typeof key === 'string' &&
                    key.charAt(0) === '_' &&
                    !(key in target.$data));
            if (!has && !isAllowed) {
                if (key in target.$data)
                    warnReservedPrefix_1(target, key);
                else
                    warnNonPresent_1(target, key);
            }
            return has || !isAllowed;
        }
    };
    var getHandler_1 = {
        get: function (target, key) {
            if (typeof key === 'string' && !(key in target)) {
                if (key in target.$data)
                    warnReservedPrefix_1(target, key);
                else
                    warnNonPresent_1(target, key);
            }
            return target[key];
        }
    };
    initProxy = function initProxy(vm) {
        if (hasProxy_1) {
            // determine which proxy handler to use
            var options = vm.$options;
            var handlers = options.render && options.render._withStripped ? getHandler_1 : hasHandler_1;
            vm._renderProxy = new Proxy(vm, handlers);
        }
        else {
            vm._renderProxy = vm;
        }
    };
}

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var uid$2 = 0;
var pendingCleanupDeps = [];
var cleanupDeps = function () {
    for (var i = 0; i < pendingCleanupDeps.length; i++) {
        var dep = pendingCleanupDeps[i];
        dep.subs = dep.subs.filter(function (s) { return s; });
        dep._pending = false;
    }
    pendingCleanupDeps.length = 0;
};
/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 * @internal
 */
var Dep = /** @class */ (function () {
    function Dep() {
        // pending subs cleanup
        this._pending = false;
        this.id = uid$2++;
        this.subs = [];
    }
    Dep.prototype.addSub = function (sub) {
        this.subs.push(sub);
    };
    Dep.prototype.removeSub = function (sub) {
        // #12696 deps with massive amount of subscribers are extremely slow to
        // clean up in Chromium
        // to workaround this, we unset the sub for now, and clear them on
        // next scheduler flush.
        this.subs[this.subs.indexOf(sub)] = null;
        if (!this._pending) {
            this._pending = true;
            pendingCleanupDeps.push(this);
        }
    };
    Dep.prototype.depend = function (info) {
        if (Dep.target) {
            Dep.target.addDep(this);
            if ( true && info && Dep.target.onTrack) {
                Dep.target.onTrack(__assign({ effect: Dep.target }, info));
            }
        }
    };
    Dep.prototype.notify = function (info) {
        // stabilize the subscriber list first
        var subs = this.subs.filter(function (s) { return s; });
        if ( true && !config.async) {
            // subs aren't sorted in scheduler if not running async
            // we need to sort them now to make sure they fire in correct
            // order
            subs.sort(function (a, b) { return a.id - b.id; });
        }
        for (var i = 0, l = subs.length; i < l; i++) {
            var sub = subs[i];
            if ( true && info) {
                sub.onTrigger &&
                    sub.onTrigger(__assign({ effect: subs[i] }, info));
            }
            sub.update();
        }
    };
    return Dep;
}());
// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
Dep.target = null;
var targetStack = [];
function pushTarget(target) {
    targetStack.push(target);
    Dep.target = target;
}
function popTarget() {
    targetStack.pop();
    Dep.target = targetStack[targetStack.length - 1];
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */
var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);
var methodsToPatch = [
    'push',
    'pop',
    'shift',
    'unshift',
    'splice',
    'sort',
    'reverse'
];
/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
    // cache original method
    var original = arrayProto[method];
    def(arrayMethods, method, function mutator() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var result = original.apply(this, args);
        var ob = this.__ob__;
        var inserted;
        switch (method) {
            case 'push':
            case 'unshift':
                inserted = args;
                break;
            case 'splice':
                inserted = args.slice(2);
                break;
        }
        if (inserted)
            ob.observeArray(inserted);
        // notify change
        if (true) {
            ob.dep.notify({
                type: "array mutation" /* TriggerOpTypes.ARRAY_MUTATION */,
                target: this,
                key: method
            });
        }
        else {}
        return result;
    });
});

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);
var NO_INIITIAL_VALUE = {};
/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;
function toggleObserving(value) {
    shouldObserve = value;
}
// ssr mock dep
var mockDep = {
    notify: noop,
    depend: noop,
    addSub: noop,
    removeSub: noop
};
/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = /** @class */ (function () {
    function Observer(value, shallow, mock) {
        if (shallow === void 0) { shallow = false; }
        if (mock === void 0) { mock = false; }
        this.value = value;
        this.shallow = shallow;
        this.mock = mock;
        // this.value = value
        this.dep = mock ? mockDep : new Dep();
        this.vmCount = 0;
        def(value, '__ob__', this);
        if (isArray(value)) {
            if (!mock) {
                if (hasProto) {
                    value.__proto__ = arrayMethods;
                    /* eslint-enable no-proto */
                }
                else {
                    for (var i = 0, l = arrayKeys.length; i < l; i++) {
                        var key = arrayKeys[i];
                        def(value, key, arrayMethods[key]);
                    }
                }
            }
            if (!shallow) {
                this.observeArray(value);
            }
        }
        else {
            /**
             * Walk through all properties and convert them into
             * getter/setters. This method should only be called when
             * value type is Object.
             */
            var keys = Object.keys(value);
            for (var i = 0; i < keys.length; i++) {
                var key = keys[i];
                defineReactive(value, key, NO_INIITIAL_VALUE, undefined, shallow, mock);
            }
        }
    }
    /**
     * Observe a list of Array items.
     */
    Observer.prototype.observeArray = function (value) {
        for (var i = 0, l = value.length; i < l; i++) {
            observe(value[i], false, this.mock);
        }
    };
    return Observer;
}());
// helpers
/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe(value, shallow, ssrMockReactivity) {
    if (value && hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
        return value.__ob__;
    }
    if (shouldObserve &&
        (ssrMockReactivity || !isServerRendering()) &&
        (isArray(value) || isPlainObject(value)) &&
        Object.isExtensible(value) &&
        !value.__v_skip /* ReactiveFlags.SKIP */ &&
        !isRef(value) &&
        !(value instanceof VNode)) {
        return new Observer(value, shallow, ssrMockReactivity);
    }
}
/**
 * Define a reactive property on an Object.
 */
function defineReactive(obj, key, val, customSetter, shallow, mock) {
    var dep = new Dep();
    var property = Object.getOwnPropertyDescriptor(obj, key);
    if (property && property.configurable === false) {
        return;
    }
    // cater for pre-defined getter/setters
    var getter = property && property.get;
    var setter = property && property.set;
    if ((!getter || setter) &&
        (val === NO_INIITIAL_VALUE || arguments.length === 2)) {
        val = obj[key];
    }
    var childOb = !shallow && observe(val, false, mock);
    Object.defineProperty(obj, key, {
        enumerable: true,
        configurable: true,
        get: function reactiveGetter() {
            var value = getter ? getter.call(obj) : val;
            if (Dep.target) {
                if (true) {
                    dep.depend({
                        target: obj,
                        type: "get" /* TrackOpTypes.GET */,
                        key: key
                    });
                }
                else {}
                if (childOb) {
                    childOb.dep.depend();
                    if (isArray(value)) {
                        dependArray(value);
                    }
                }
            }
            return isRef(value) && !shallow ? value.value : value;
        },
        set: function reactiveSetter(newVal) {
            var value = getter ? getter.call(obj) : val;
            if (!hasChanged(value, newVal)) {
                return;
            }
            if ( true && customSetter) {
                customSetter();
            }
            if (setter) {
                setter.call(obj, newVal);
            }
            else if (getter) {
                // #7981: for accessor properties without setter
                return;
            }
            else if (!shallow && isRef(value) && !isRef(newVal)) {
                value.value = newVal;
                return;
            }
            else {
                val = newVal;
            }
            childOb = !shallow && observe(newVal, false, mock);
            if (true) {
                dep.notify({
                    type: "set" /* TriggerOpTypes.SET */,
                    target: obj,
                    key: key,
                    newValue: newVal,
                    oldValue: value
                });
            }
            else {}
        }
    });
    return dep;
}
function set(target, key, val) {
    if ( true && (isUndef(target) || isPrimitive(target))) {
        warn$2("Cannot set reactive property on undefined, null, or primitive value: ".concat(target));
    }
    if (isReadonly(target)) {
         true && warn$2("Set operation on key \"".concat(key, "\" failed: target is readonly."));
        return;
    }
    var ob = target.__ob__;
    if (isArray(target) && isValidArrayIndex(key)) {
        target.length = Math.max(target.length, key);
        target.splice(key, 1, val);
        // when mocking for SSR, array methods are not hijacked
        if (ob && !ob.shallow && ob.mock) {
            observe(val, false, true);
        }
        return val;
    }
    if (key in target && !(key in Object.prototype)) {
        target[key] = val;
        return val;
    }
    if (target._isVue || (ob && ob.vmCount)) {
         true &&
            warn$2('Avoid adding reactive properties to a Vue instance or its root $data ' +
                'at runtime - declare it upfront in the data option.');
        return val;
    }
    if (!ob) {
        target[key] = val;
        return val;
    }
    defineReactive(ob.value, key, val, undefined, ob.shallow, ob.mock);
    if (true) {
        ob.dep.notify({
            type: "add" /* TriggerOpTypes.ADD */,
            target: target,
            key: key,
            newValue: val,
            oldValue: undefined
        });
    }
    else {}
    return val;
}
function del(target, key) {
    if ( true && (isUndef(target) || isPrimitive(target))) {
        warn$2("Cannot delete reactive property on undefined, null, or primitive value: ".concat(target));
    }
    if (isArray(target) && isValidArrayIndex(key)) {
        target.splice(key, 1);
        return;
    }
    var ob = target.__ob__;
    if (target._isVue || (ob && ob.vmCount)) {
         true &&
            warn$2('Avoid deleting properties on a Vue instance or its root $data ' +
                '- just set it to null.');
        return;
    }
    if (isReadonly(target)) {
         true &&
            warn$2("Delete operation on key \"".concat(key, "\" failed: target is readonly."));
        return;
    }
    if (!hasOwn(target, key)) {
        return;
    }
    delete target[key];
    if (!ob) {
        return;
    }
    if (true) {
        ob.dep.notify({
            type: "delete" /* TriggerOpTypes.DELETE */,
            target: target,
            key: key
        });
    }
    else {}
}
/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray(value) {
    for (var e = void 0, i = 0, l = value.length; i < l; i++) {
        e = value[i];
        if (e && e.__ob__) {
            e.__ob__.dep.depend();
        }
        if (isArray(e)) {
            dependArray(e);
        }
    }
}

function reactive(target) {
    makeReactive(target, false);
    return target;
}
/**
 * Return a shallowly-reactive copy of the original object, where only the root
 * level properties are reactive. It also does not auto-unwrap refs (even at the
 * root level).
 */
function shallowReactive(target) {
    makeReactive(target, true);
    def(target, "__v_isShallow" /* ReactiveFlags.IS_SHALLOW */, true);
    return target;
}
function makeReactive(target, shallow) {
    // if trying to observe a readonly proxy, return the readonly version.
    if (!isReadonly(target)) {
        if (true) {
            if (isArray(target)) {
                warn$2("Avoid using Array as root value for ".concat(shallow ? "shallowReactive()" : "reactive()", " as it cannot be tracked in watch() or watchEffect(). Use ").concat(shallow ? "shallowRef()" : "ref()", " instead. This is a Vue-2-only limitation."));
            }
            var existingOb = target && target.__ob__;
            if (existingOb && existingOb.shallow !== shallow) {
                warn$2("Target is already a ".concat(existingOb.shallow ? "" : "non-", "shallow reactive object, and cannot be converted to ").concat(shallow ? "" : "non-", "shallow."));
            }
        }
        var ob = observe(target, shallow, isServerRendering() /* ssr mock reactivity */);
        if ( true && !ob) {
            if (target == null || isPrimitive(target)) {
                warn$2("value cannot be made reactive: ".concat(String(target)));
            }
            if (isCollectionType(target)) {
                warn$2("Vue 2 does not support reactive collection types such as Map or Set.");
            }
        }
    }
}
function isReactive(value) {
    if (isReadonly(value)) {
        return isReactive(value["__v_raw" /* ReactiveFlags.RAW */]);
    }
    return !!(value && value.__ob__);
}
function isShallow(value) {
    return !!(value && value.__v_isShallow);
}
function isReadonly(value) {
    return !!(value && value.__v_isReadonly);
}
function isProxy(value) {
    return isReactive(value) || isReadonly(value);
}
function toRaw(observed) {
    var raw = observed && observed["__v_raw" /* ReactiveFlags.RAW */];
    return raw ? toRaw(raw) : observed;
}
function markRaw(value) {
    // non-extensible objects won't be observed anyway
    if (Object.isExtensible(value)) {
        def(value, "__v_skip" /* ReactiveFlags.SKIP */, true);
    }
    return value;
}
/**
 * @internal
 */
function isCollectionType(value) {
    var type = toRawType(value);
    return (type === 'Map' || type === 'WeakMap' || type === 'Set' || type === 'WeakSet');
}

/**
 * @internal
 */
var RefFlag = "__v_isRef";
function isRef(r) {
    return !!(r && r.__v_isRef === true);
}
function ref$1(value) {
    return createRef(value, false);
}
function shallowRef(value) {
    return createRef(value, true);
}
function createRef(rawValue, shallow) {
    if (isRef(rawValue)) {
        return rawValue;
    }
    var ref = {};
    def(ref, RefFlag, true);
    def(ref, "__v_isShallow" /* ReactiveFlags.IS_SHALLOW */, shallow);
    def(ref, 'dep', defineReactive(ref, 'value', rawValue, null, shallow, isServerRendering()));
    return ref;
}
function triggerRef(ref) {
    if ( true && !ref.dep) {
        warn$2("received object is not a triggerable ref.");
    }
    if (true) {
        ref.dep &&
            ref.dep.notify({
                type: "set" /* TriggerOpTypes.SET */,
                target: ref,
                key: 'value'
            });
    }
    else {}
}
function unref(ref) {
    return isRef(ref) ? ref.value : ref;
}
function proxyRefs(objectWithRefs) {
    if (isReactive(objectWithRefs)) {
        return objectWithRefs;
    }
    var proxy = {};
    var keys = Object.keys(objectWithRefs);
    for (var i = 0; i < keys.length; i++) {
        proxyWithRefUnwrap(proxy, objectWithRefs, keys[i]);
    }
    return proxy;
}
function proxyWithRefUnwrap(target, source, key) {
    Object.defineProperty(target, key, {
        enumerable: true,
        configurable: true,
        get: function () {
            var val = source[key];
            if (isRef(val)) {
                return val.value;
            }
            else {
                var ob = val && val.__ob__;
                if (ob)
                    ob.dep.depend();
                return val;
            }
        },
        set: function (value) {
            var oldValue = source[key];
            if (isRef(oldValue) && !isRef(value)) {
                oldValue.value = value;
            }
            else {
                source[key] = value;
            }
        }
    });
}
function customRef(factory) {
    var dep = new Dep();
    var _a = factory(function () {
        if (true) {
            dep.depend({
                target: ref,
                type: "get" /* TrackOpTypes.GET */,
                key: 'value'
            });
        }
        else {}
    }, function () {
        if (true) {
            dep.notify({
                target: ref,
                type: "set" /* TriggerOpTypes.SET */,
                key: 'value'
            });
        }
        else {}
    }), get = _a.get, set = _a.set;
    var ref = {
        get value() {
            return get();
        },
        set value(newVal) {
            set(newVal);
        }
    };
    def(ref, RefFlag, true);
    return ref;
}
function toRefs(object) {
    if ( true && !isReactive(object)) {
        warn$2("toRefs() expects a reactive object but received a plain one.");
    }
    var ret = isArray(object) ? new Array(object.length) : {};
    for (var key in object) {
        ret[key] = toRef(object, key);
    }
    return ret;
}
function toRef(object, key, defaultValue) {
    var val = object[key];
    if (isRef(val)) {
        return val;
    }
    var ref = {
        get value() {
            var val = object[key];
            return val === undefined ? defaultValue : val;
        },
        set value(newVal) {
            object[key] = newVal;
        }
    };
    def(ref, RefFlag, true);
    return ref;
}

var rawToReadonlyFlag = "__v_rawToReadonly";
var rawToShallowReadonlyFlag = "__v_rawToShallowReadonly";
function readonly(target) {
    return createReadonly(target, false);
}
function createReadonly(target, shallow) {
    if (!isPlainObject(target)) {
        if (true) {
            if (isArray(target)) {
                warn$2("Vue 2 does not support readonly arrays.");
            }
            else if (isCollectionType(target)) {
                warn$2("Vue 2 does not support readonly collection types such as Map or Set.");
            }
            else {
                warn$2("value cannot be made readonly: ".concat(typeof target));
            }
        }
        return target;
    }
    if ( true && !Object.isExtensible(target)) {
        warn$2("Vue 2 does not support creating readonly proxy for non-extensible object.");
    }
    // already a readonly object
    if (isReadonly(target)) {
        return target;
    }
    // already has a readonly proxy
    var existingFlag = shallow ? rawToShallowReadonlyFlag : rawToReadonlyFlag;
    var existingProxy = target[existingFlag];
    if (existingProxy) {
        return existingProxy;
    }
    var proxy = Object.create(Object.getPrototypeOf(target));
    def(target, existingFlag, proxy);
    def(proxy, "__v_isReadonly" /* ReactiveFlags.IS_READONLY */, true);
    def(proxy, "__v_raw" /* ReactiveFlags.RAW */, target);
    if (isRef(target)) {
        def(proxy, RefFlag, true);
    }
    if (shallow || isShallow(target)) {
        def(proxy, "__v_isShallow" /* ReactiveFlags.IS_SHALLOW */, true);
    }
    var keys = Object.keys(target);
    for (var i = 0; i < keys.length; i++) {
        defineReadonlyProperty(proxy, target, keys[i], shallow);
    }
    return proxy;
}
function defineReadonlyProperty(proxy, target, key, shallow) {
    Object.defineProperty(proxy, key, {
        enumerable: true,
        configurable: true,
        get: function () {
            var val = target[key];
            return shallow || !isPlainObject(val) ? val : readonly(val);
        },
        set: function () {
             true &&
                warn$2("Set operation on key \"".concat(key, "\" failed: target is readonly."));
        }
    });
}
/**
 * Returns a reactive-copy of the original object, where only the root level
 * properties are readonly, and does NOT unwrap refs nor recursively convert
 * returned properties.
 * This is used for creating the props proxy object for stateful components.
 */
function shallowReadonly(target) {
    return createReadonly(target, true);
}

function computed(getterOrOptions, debugOptions) {
    var getter;
    var setter;
    var onlyGetter = isFunction(getterOrOptions);
    if (onlyGetter) {
        getter = getterOrOptions;
        setter =  true
            ? function () {
                warn$2('Write operation failed: computed value is readonly');
            }
            : 0;
    }
    else {
        getter = getterOrOptions.get;
        setter = getterOrOptions.set;
    }
    var watcher = isServerRendering()
        ? null
        : new Watcher(currentInstance, getter, noop, { lazy: true });
    if ( true && watcher && debugOptions) {
        watcher.onTrack = debugOptions.onTrack;
        watcher.onTrigger = debugOptions.onTrigger;
    }
    var ref = {
        // some libs rely on the presence effect for checking computed refs
        // from normal refs, but the implementation doesn't matter
        effect: watcher,
        get value() {
            if (watcher) {
                if (watcher.dirty) {
                    watcher.evaluate();
                }
                if (Dep.target) {
                    if ( true && Dep.target.onTrack) {
                        Dep.target.onTrack({
                            effect: Dep.target,
                            target: ref,
                            type: "get" /* TrackOpTypes.GET */,
                            key: 'value'
                        });
                    }
                    watcher.depend();
                }
                return watcher.value;
            }
            else {
                return getter();
            }
        },
        set value(newVal) {
            setter(newVal);
        }
    };
    def(ref, RefFlag, true);
    def(ref, "__v_isReadonly" /* ReactiveFlags.IS_READONLY */, onlyGetter);
    return ref;
}

var mark;
var measure;
if (true) {
    var perf_1 = inBrowser && window.performance;
    /* istanbul ignore if */
    if (perf_1 &&
        // @ts-ignore
        perf_1.mark &&
        // @ts-ignore
        perf_1.measure &&
        // @ts-ignore
        perf_1.clearMarks &&
        // @ts-ignore
        perf_1.clearMeasures) {
        mark = function (tag) { return perf_1.mark(tag); };
        measure = function (name, startTag, endTag) {
            perf_1.measure(name, startTag, endTag);
            perf_1.clearMarks(startTag);
            perf_1.clearMarks(endTag);
            // perf.clearMeasures(name)
        };
    }
}

var normalizeEvent = cached(function (name) {
    var passive = name.charAt(0) === '&';
    name = passive ? name.slice(1) : name;
    var once = name.charAt(0) === '~'; // Prefixed last, checked first
    name = once ? name.slice(1) : name;
    var capture = name.charAt(0) === '!';
    name = capture ? name.slice(1) : name;
    return {
        name: name,
        once: once,
        capture: capture,
        passive: passive
    };
});
function createFnInvoker(fns, vm) {
    function invoker() {
        var fns = invoker.fns;
        if (isArray(fns)) {
            var cloned = fns.slice();
            for (var i = 0; i < cloned.length; i++) {
                invokeWithErrorHandling(cloned[i], null, arguments, vm, "v-on handler");
            }
        }
        else {
            // return handler return value for single handlers
            return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler");
        }
    }
    invoker.fns = fns;
    return invoker;
}
function updateListeners(on, oldOn, add, remove, createOnceHandler, vm) {
    var name, cur, old, event;
    for (name in on) {
        cur = on[name];
        old = oldOn[name];
        event = normalizeEvent(name);
        if (isUndef(cur)) {
             true &&
                warn$2("Invalid handler for event \"".concat(event.name, "\": got ") + String(cur), vm);
        }
        else if (isUndef(old)) {
            if (isUndef(cur.fns)) {
                cur = on[name] = createFnInvoker(cur, vm);
            }
            if (isTrue(event.once)) {
                cur = on[name] = createOnceHandler(event.name, cur, event.capture);
            }
            add(event.name, cur, event.capture, event.passive, event.params);
        }
        else if (cur !== old) {
            old.fns = cur;
            on[name] = old;
        }
    }
    for (name in oldOn) {
        if (isUndef(on[name])) {
            event = normalizeEvent(name);
            remove(event.name, oldOn[name], event.capture);
        }
    }
}

function mergeVNodeHook(def, hookKey, hook) {
    if (def instanceof VNode) {
        def = def.data.hook || (def.data.hook = {});
    }
    var invoker;
    var oldHook = def[hookKey];
    function wrappedHook() {
        hook.apply(this, arguments);
        // important: remove merged hook to ensure it's called only once
        // and prevent memory leak
        remove$2(invoker.fns, wrappedHook);
    }
    if (isUndef(oldHook)) {
        // no existing hook
        invoker = createFnInvoker([wrappedHook]);
    }
    else {
        /* istanbul ignore if */
        if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
            // already a merged invoker
            invoker = oldHook;
            invoker.fns.push(wrappedHook);
        }
        else {
            // existing plain hook
            invoker = createFnInvoker([oldHook, wrappedHook]);
        }
    }
    invoker.merged = true;
    def[hookKey] = invoker;
}

function extractPropsFromVNodeData(data, Ctor, tag) {
    // we are only extracting raw values here.
    // validation and default values are handled in the child
    // component itself.
    var propOptions = Ctor.options.props;
    if (isUndef(propOptions)) {
        return;
    }
    var res = {};
    var attrs = data.attrs, props = data.props;
    if (isDef(attrs) || isDef(props)) {
        for (var key in propOptions) {
            var altKey = hyphenate(key);
            if (true) {
                var keyInLowerCase = key.toLowerCase();
                if (key !== keyInLowerCase && attrs && hasOwn(attrs, keyInLowerCase)) {
                    tip("Prop \"".concat(keyInLowerCase, "\" is passed to component ") +
                        "".concat(formatComponentName(
                        // @ts-expect-error tag is string
                        tag || Ctor), ", but the declared prop name is") +
                        " \"".concat(key, "\". ") +
                        "Note that HTML attributes are case-insensitive and camelCased " +
                        "props need to use their kebab-case equivalents when using in-DOM " +
                        "templates. You should probably use \"".concat(altKey, "\" instead of \"").concat(key, "\"."));
                }
            }
            checkProp(res, props, key, altKey, true) ||
                checkProp(res, attrs, key, altKey, false);
        }
    }
    return res;
}
function checkProp(res, hash, key, altKey, preserve) {
    if (isDef(hash)) {
        if (hasOwn(hash, key)) {
            res[key] = hash[key];
            if (!preserve) {
                delete hash[key];
            }
            return true;
        }
        else if (hasOwn(hash, altKey)) {
            res[key] = hash[altKey];
            if (!preserve) {
                delete hash[altKey];
            }
            return true;
        }
    }
    return false;
}

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:
// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren(children) {
    for (var i = 0; i < children.length; i++) {
        if (isArray(children[i])) {
            return Array.prototype.concat.apply([], children);
        }
    }
    return children;
}
// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren(children) {
    return isPrimitive(children)
        ? [createTextVNode(children)]
        : isArray(children)
            ? normalizeArrayChildren(children)
            : undefined;
}
function isTextNode(node) {
    return isDef(node) && isDef(node.text) && isFalse(node.isComment);
}
function normalizeArrayChildren(children, nestedIndex) {
    var res = [];
    var i, c, lastIndex, last;
    for (i = 0; i < children.length; i++) {
        c = children[i];
        if (isUndef(c) || typeof c === 'boolean')
            continue;
        lastIndex = res.length - 1;
        last = res[lastIndex];
        //  nested
        if (isArray(c)) {
            if (c.length > 0) {
                c = normalizeArrayChildren(c, "".concat(nestedIndex || '', "_").concat(i));
                // merge adjacent text nodes
                if (isTextNode(c[0]) && isTextNode(last)) {
                    res[lastIndex] = createTextVNode(last.text + c[0].text);
                    c.shift();
                }
                res.push.apply(res, c);
            }
        }
        else if (isPrimitive(c)) {
            if (isTextNode(last)) {
                // merge adjacent text nodes
                // this is necessary for SSR hydration because text nodes are
                // essentially merged when rendered to HTML strings
                res[lastIndex] = createTextVNode(last.text + c);
            }
            else if (c !== '') {
                // convert primitive to vnode
                res.push(createTextVNode(c));
            }
        }
        else {
            if (isTextNode(c) && isTextNode(last)) {
                // merge adjacent text nodes
                res[lastIndex] = createTextVNode(last.text + c.text);
            }
            else {
                // default key for nested array children (likely generated by v-for)
                if (isTrue(children._isVList) &&
                    isDef(c.tag) &&
                    isUndef(c.key) &&
                    isDef(nestedIndex)) {
                    c.key = "__vlist".concat(nestedIndex, "_").concat(i, "__");
                }
                res.push(c);
            }
        }
    }
    return res;
}

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;
// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement$1(context, tag, data, children, normalizationType, alwaysNormalize) {
    if (isArray(data) || isPrimitive(data)) {
        normalizationType = children;
        children = data;
        data = undefined;
    }
    if (isTrue(alwaysNormalize)) {
        normalizationType = ALWAYS_NORMALIZE;
    }
    return _createElement(context, tag, data, children, normalizationType);
}
function _createElement(context, tag, data, children, normalizationType) {
    if (isDef(data) && isDef(data.__ob__)) {
         true &&
            warn$2("Avoid using observed data object as vnode data: ".concat(JSON.stringify(data), "\n") + 'Always create fresh vnode data objects in each render!', context);
        return createEmptyVNode();
    }
    // object syntax in v-bind
    if (isDef(data) && isDef(data.is)) {
        tag = data.is;
    }
    if (!tag) {
        // in case of component :is set to falsy value
        return createEmptyVNode();
    }
    // warn against non-primitive key
    if ( true && isDef(data) && isDef(data.key) && !isPrimitive(data.key)) {
        warn$2('Avoid using non-primitive value as key, ' +
            'use string/number value instead.', context);
    }
    // support single function children as default scoped slot
    if (isArray(children) && isFunction(children[0])) {
        data = data || {};
        data.scopedSlots = { default: children[0] };
        children.length = 0;
    }
    if (normalizationType === ALWAYS_NORMALIZE) {
        children = normalizeChildren(children);
    }
    else if (normalizationType === SIMPLE_NORMALIZE) {
        children = simpleNormalizeChildren(children);
    }
    var vnode, ns;
    if (typeof tag === 'string') {
        var Ctor = void 0;
        ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
        if (config.isReservedTag(tag)) {
            // platform built-in elements
            if ( true &&
                isDef(data) &&
                isDef(data.nativeOn) &&
                data.tag !== 'component') {
                warn$2("The .native modifier for v-on is only valid on components but it was used on <".concat(tag, ">."), context);
            }
            vnode = new VNode(config.parsePlatformTagName(tag), data, children, undefined, undefined, context);
        }
        else if ((!data || !data.pre) &&
            isDef((Ctor = resolveAsset(context.$options, 'components', tag)))) {
            // component
            vnode = createComponent(Ctor, data, context, children, tag);
        }
        else {
            // unknown or unlisted namespaced elements
            // check at runtime because it may get assigned a namespace when its
            // parent normalizes children
            vnode = new VNode(tag, data, children, undefined, undefined, context);
        }
    }
    else {
        // direct component options / constructor
        vnode = createComponent(tag, data, context, children);
    }
    if (isArray(vnode)) {
        return vnode;
    }
    else if (isDef(vnode)) {
        if (isDef(ns))
            applyNS(vnode, ns);
        if (isDef(data))
            registerDeepBindings(data);
        return vnode;
    }
    else {
        return createEmptyVNode();
    }
}
function applyNS(vnode, ns, force) {
    vnode.ns = ns;
    if (vnode.tag === 'foreignObject') {
        // use default namespace inside foreignObject
        ns = undefined;
        force = true;
    }
    if (isDef(vnode.children)) {
        for (var i = 0, l = vnode.children.length; i < l; i++) {
            var child = vnode.children[i];
            if (isDef(child.tag) &&
                (isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
                applyNS(child, ns, force);
            }
        }
    }
}
// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings(data) {
    if (isObject(data.style)) {
        traverse(data.style);
    }
    if (isObject(data.class)) {
        traverse(data.class);
    }
}

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList(val, render) {
    var ret = null, i, l, keys, key;
    if (isArray(val) || typeof val === 'string') {
        ret = new Array(val.length);
        for (i = 0, l = val.length; i < l; i++) {
            ret[i] = render(val[i], i);
        }
    }
    else if (typeof val === 'number') {
        ret = new Array(val);
        for (i = 0; i < val; i++) {
            ret[i] = render(i + 1, i);
        }
    }
    else if (isObject(val)) {
        if (hasSymbol && val[Symbol.iterator]) {
            ret = [];
            var iterator = val[Symbol.iterator]();
            var result = iterator.next();
            while (!result.done) {
                ret.push(render(result.value, ret.length));
                result = iterator.next();
            }
        }
        else {
            keys = Object.keys(val);
            ret = new Array(keys.length);
            for (i = 0, l = keys.length; i < l; i++) {
                key = keys[i];
                ret[i] = render(val[key], key, i);
            }
        }
    }
    if (!isDef(ret)) {
        ret = [];
    }
    ret._isVList = true;
    return ret;
}

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot(name, fallbackRender, props, bindObject) {
    var scopedSlotFn = this.$scopedSlots[name];
    var nodes;
    if (scopedSlotFn) {
        // scoped slot
        props = props || {};
        if (bindObject) {
            if ( true && !isObject(bindObject)) {
                warn$2('slot v-bind without argument expects an Object', this);
            }
            props = extend(extend({}, bindObject), props);
        }
        nodes =
            scopedSlotFn(props) ||
                (isFunction(fallbackRender) ? fallbackRender() : fallbackRender);
    }
    else {
        nodes =
            this.$slots[name] ||
                (isFunction(fallbackRender) ? fallbackRender() : fallbackRender);
    }
    var target = props && props.slot;
    if (target) {
        return this.$createElement('template', { slot: target }, nodes);
    }
    else {
        return nodes;
    }
}

/**
 * Runtime helper for resolving filters
 */
function resolveFilter(id) {
    return resolveAsset(this.$options, 'filters', id, true) || identity;
}

function isKeyNotMatch(expect, actual) {
    if (isArray(expect)) {
        return expect.indexOf(actual) === -1;
    }
    else {
        return expect !== actual;
    }
}
/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes(eventKeyCode, key, builtInKeyCode, eventKeyName, builtInKeyName) {
    var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
    if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
        return isKeyNotMatch(builtInKeyName, eventKeyName);
    }
    else if (mappedKeyCode) {
        return isKeyNotMatch(mappedKeyCode, eventKeyCode);
    }
    else if (eventKeyName) {
        return hyphenate(eventKeyName) !== key;
    }
    return eventKeyCode === undefined;
}

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps(data, tag, value, asProp, isSync) {
    if (value) {
        if (!isObject(value)) {
             true &&
                warn$2('v-bind without argument expects an Object or Array value', this);
        }
        else {
            if (isArray(value)) {
                value = toObject(value);
            }
            var hash = void 0;
            var _loop_1 = function (key) {
                if (key === 'class' || key === 'style' || isReservedAttribute(key)) {
                    hash = data;
                }
                else {
                    var type = data.attrs && data.attrs.type;
                    hash =
                        asProp || config.mustUseProp(tag, type, key)
                            ? data.domProps || (data.domProps = {})
                            : data.attrs || (data.attrs = {});
                }
                var camelizedKey = camelize(key);
                var hyphenatedKey = hyphenate(key);
                if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
                    hash[key] = value[key];
                    if (isSync) {
                        var on = data.on || (data.on = {});
                        on["update:".concat(key)] = function ($event) {
                            value[key] = $event;
                        };
                    }
                }
            };
            for (var key in value) {
                _loop_1(key);
            }
        }
    }
    return data;
}

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic(index, isInFor) {
    var cached = this._staticTrees || (this._staticTrees = []);
    var tree = cached[index];
    // if has already-rendered static tree and not inside v-for,
    // we can reuse the same tree.
    if (tree && !isInFor) {
        return tree;
    }
    // otherwise, render a fresh tree.
    tree = cached[index] = this.$options.staticRenderFns[index].call(this._renderProxy, this._c, this // for render fns generated for functional component templates
    );
    markStatic$1(tree, "__static__".concat(index), false);
    return tree;
}
/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce(tree, index, key) {
    markStatic$1(tree, "__once__".concat(index).concat(key ? "_".concat(key) : ""), true);
    return tree;
}
function markStatic$1(tree, key, isOnce) {
    if (isArray(tree)) {
        for (var i = 0; i < tree.length; i++) {
            if (tree[i] && typeof tree[i] !== 'string') {
                markStaticNode(tree[i], "".concat(key, "_").concat(i), isOnce);
            }
        }
    }
    else {
        markStaticNode(tree, key, isOnce);
    }
}
function markStaticNode(node, key, isOnce) {
    node.isStatic = true;
    node.key = key;
    node.isOnce = isOnce;
}

function bindObjectListeners(data, value) {
    if (value) {
        if (!isPlainObject(value)) {
             true && warn$2('v-on without argument expects an Object value', this);
        }
        else {
            var on = (data.on = data.on ? extend({}, data.on) : {});
            for (var key in value) {
                var existing = on[key];
                var ours = value[key];
                on[key] = existing ? [].concat(existing, ours) : ours;
            }
        }
    }
    return data;
}

function resolveScopedSlots(fns, res, 
// the following are added in 2.6
hasDynamicKeys, contentHashKey) {
    res = res || { $stable: !hasDynamicKeys };
    for (var i = 0; i < fns.length; i++) {
        var slot = fns[i];
        if (isArray(slot)) {
            resolveScopedSlots(slot, res, hasDynamicKeys);
        }
        else if (slot) {
            // marker for reverse proxying v-slot without scope on this.$slots
            // @ts-expect-error
            if (slot.proxy) {
                // @ts-expect-error
                slot.fn.proxy = true;
            }
            res[slot.key] = slot.fn;
        }
    }
    if (contentHashKey) {
        res.$key = contentHashKey;
    }
    return res;
}

// helper to process dynamic keys for dynamic arguments in v-bind and v-on.
function bindDynamicKeys(baseObj, values) {
    for (var i = 0; i < values.length; i += 2) {
        var key = values[i];
        if (typeof key === 'string' && key) {
            baseObj[values[i]] = values[i + 1];
        }
        else if ( true && key !== '' && key !== null) {
            // null is a special value for explicitly removing a binding
            warn$2("Invalid value for dynamic directive argument (expected string or null): ".concat(key), this);
        }
    }
    return baseObj;
}
// helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.
function prependModifier(value, symbol) {
    return typeof value === 'string' ? symbol + value : value;
}

function installRenderHelpers(target) {
    target._o = markOnce;
    target._n = toNumber;
    target._s = toString;
    target._l = renderList;
    target._t = renderSlot;
    target._q = looseEqual;
    target._i = looseIndexOf;
    target._m = renderStatic;
    target._f = resolveFilter;
    target._k = checkKeyCodes;
    target._b = bindObjectProps;
    target._v = createTextVNode;
    target._e = createEmptyVNode;
    target._u = resolveScopedSlots;
    target._g = bindObjectListeners;
    target._d = bindDynamicKeys;
    target._p = prependModifier;
}

/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots(children, context) {
    if (!children || !children.length) {
        return {};
    }
    var slots = {};
    for (var i = 0, l = children.length; i < l; i++) {
        var child = children[i];
        var data = child.data;
        // remove slot attribute if the node is resolved as a Vue slot node
        if (data && data.attrs && data.attrs.slot) {
            delete data.attrs.slot;
        }
        // named slots should only be respected if the vnode was rendered in the
        // same context.
        if ((child.context === context || child.fnContext === context) &&
            data &&
            data.slot != null) {
            var name_1 = data.slot;
            var slot = slots[name_1] || (slots[name_1] = []);
            if (child.tag === 'template') {
                slot.push.apply(slot, child.children || []);
            }
            else {
                slot.push(child);
            }
        }
        else {
            (slots.default || (slots.default = [])).push(child);
        }
    }
    // ignore slots that contains only whitespace
    for (var name_2 in slots) {
        if (slots[name_2].every(isWhitespace)) {
            delete slots[name_2];
        }
    }
    return slots;
}
function isWhitespace(node) {
    return (node.isComment && !node.asyncFactory) || node.text === ' ';
}

function isAsyncPlaceholder(node) {
    // @ts-expect-error not really boolean type
    return node.isComment && node.asyncFactory;
}

function normalizeScopedSlots(ownerVm, scopedSlots, normalSlots, prevScopedSlots) {
    var res;
    var hasNormalSlots = Object.keys(normalSlots).length > 0;
    var isStable = scopedSlots ? !!scopedSlots.$stable : !hasNormalSlots;
    var key = scopedSlots && scopedSlots.$key;
    if (!scopedSlots) {
        res = {};
    }
    else if (scopedSlots._normalized) {
        // fast path 1: child component re-render only, parent did not change
        return scopedSlots._normalized;
    }
    else if (isStable &&
        prevScopedSlots &&
        prevScopedSlots !== emptyObject &&
        key === prevScopedSlots.$key &&
        !hasNormalSlots &&
        !prevScopedSlots.$hasNormal) {
        // fast path 2: stable scoped slots w/ no normal slots to proxy,
        // only need to normalize once
        return prevScopedSlots;
    }
    else {
        res = {};
        for (var key_1 in scopedSlots) {
            if (scopedSlots[key_1] && key_1[0] !== '$') {
                res[key_1] = normalizeScopedSlot(ownerVm, normalSlots, key_1, scopedSlots[key_1]);
            }
        }
    }
    // expose normal slots on scopedSlots
    for (var key_2 in normalSlots) {
        if (!(key_2 in res)) {
            res[key_2] = proxyNormalSlot(normalSlots, key_2);
        }
    }
    // avoriaz seems to mock a non-extensible $scopedSlots object
    // and when that is passed down this would cause an error
    if (scopedSlots && Object.isExtensible(scopedSlots)) {
        scopedSlots._normalized = res;
    }
    def(res, '$stable', isStable);
    def(res, '$key', key);
    def(res, '$hasNormal', hasNormalSlots);
    return res;
}
function normalizeScopedSlot(vm, normalSlots, key, fn) {
    var normalized = function () {
        var cur = currentInstance;
        setCurrentInstance(vm);
        var res = arguments.length ? fn.apply(null, arguments) : fn({});
        res =
            res && typeof res === 'object' && !isArray(res)
                ? [res] // single vnode
                : normalizeChildren(res);
        var vnode = res && res[0];
        setCurrentInstance(cur);
        return res &&
            (!vnode ||
                (res.length === 1 && vnode.isComment && !isAsyncPlaceholder(vnode))) // #9658, #10391
            ? undefined
            : res;
    };
    // this is a slot using the new v-slot syntax without scope. although it is
    // compiled as a scoped slot, render fn users would expect it to be present
    // on this.$slots because the usage is semantically a normal slot.
    if (fn.proxy) {
        Object.defineProperty(normalSlots, key, {
            get: normalized,
            enumerable: true,
            configurable: true
        });
    }
    return normalized;
}
function proxyNormalSlot(slots, key) {
    return function () { return slots[key]; };
}

function initSetup(vm) {
    var options = vm.$options;
    var setup = options.setup;
    if (setup) {
        var ctx = (vm._setupContext = createSetupContext(vm));
        setCurrentInstance(vm);
        pushTarget();
        var setupResult = invokeWithErrorHandling(setup, null, [vm._props || shallowReactive({}), ctx], vm, "setup");
        popTarget();
        setCurrentInstance();
        if (isFunction(setupResult)) {
            // render function
            // @ts-ignore
            options.render = setupResult;
        }
        else if (isObject(setupResult)) {
            // bindings
            if ( true && setupResult instanceof VNode) {
                warn$2("setup() should not return VNodes directly - " +
                    "return a render function instead.");
            }
            vm._setupState = setupResult;
            // __sfc indicates compiled bindings from <script setup>
            if (!setupResult.__sfc) {
                for (var key in setupResult) {
                    if (!isReserved(key)) {
                        proxyWithRefUnwrap(vm, setupResult, key);
                    }
                    else if (true) {
                        warn$2("Avoid using variables that start with _ or $ in setup().");
                    }
                }
            }
            else {
                // exposed for compiled render fn
                var proxy = (vm._setupProxy = {});
                for (var key in setupResult) {
                    if (key !== '__sfc') {
                        proxyWithRefUnwrap(proxy, setupResult, key);
                    }
                }
            }
        }
        else if ( true && setupResult !== undefined) {
            warn$2("setup() should return an object. Received: ".concat(setupResult === null ? 'null' : typeof setupResult));
        }
    }
}
function createSetupContext(vm) {
    var exposeCalled = false;
    return {
        get attrs() {
            if (!vm._attrsProxy) {
                var proxy = (vm._attrsProxy = {});
                def(proxy, '_v_attr_proxy', true);
                syncSetupProxy(proxy, vm.$attrs, emptyObject, vm, '$attrs');
            }
            return vm._attrsProxy;
        },
        get listeners() {
            if (!vm._listenersProxy) {
                var proxy = (vm._listenersProxy = {});
                syncSetupProxy(proxy, vm.$listeners, emptyObject, vm, '$listeners');
            }
            return vm._listenersProxy;
        },
        get slots() {
            return initSlotsProxy(vm);
        },
        emit: bind$1(vm.$emit, vm),
        expose: function (exposed) {
            if (true) {
                if (exposeCalled) {
                    warn$2("expose() should be called only once per setup().", vm);
                }
                exposeCalled = true;
            }
            if (exposed) {
                Object.keys(exposed).forEach(function (key) {
                    return proxyWithRefUnwrap(vm, exposed, key);
                });
            }
        }
    };
}
function syncSetupProxy(to, from, prev, instance, type) {
    var changed = false;
    for (var key in from) {
        if (!(key in to)) {
            changed = true;
            defineProxyAttr(to, key, instance, type);
        }
        else if (from[key] !== prev[key]) {
            changed = true;
        }
    }
    for (var key in to) {
        if (!(key in from)) {
            changed = true;
            delete to[key];
        }
    }
    return changed;
}
function defineProxyAttr(proxy, key, instance, type) {
    Object.defineProperty(proxy, key, {
        enumerable: true,
        configurable: true,
        get: function () {
            return instance[type][key];
        }
    });
}
function initSlotsProxy(vm) {
    if (!vm._slotsProxy) {
        syncSetupSlots((vm._slotsProxy = {}), vm.$scopedSlots);
    }
    return vm._slotsProxy;
}
function syncSetupSlots(to, from) {
    for (var key in from) {
        to[key] = from[key];
    }
    for (var key in to) {
        if (!(key in from)) {
            delete to[key];
        }
    }
}
/**
 * @internal use manual type def because public setup context type relies on
 * legacy VNode types
 */
function useSlots() {
    return getContext().slots;
}
/**
 * @internal use manual type def because public setup context type relies on
 * legacy VNode types
 */
function useAttrs() {
    return getContext().attrs;
}
/**
 * Vue 2 only
 * @internal use manual type def because public setup context type relies on
 * legacy VNode types
 */
function useListeners() {
    return getContext().listeners;
}
function getContext() {
    if ( true && !currentInstance) {
        warn$2("useContext() called without active instance.");
    }
    var vm = currentInstance;
    return vm._setupContext || (vm._setupContext = createSetupContext(vm));
}
/**
 * Runtime helper for merging default declarations. Imported by compiled code
 * only.
 * @internal
 */
function mergeDefaults(raw, defaults) {
    var props = isArray(raw)
        ? raw.reduce(function (normalized, p) { return ((normalized[p] = {}), normalized); }, {})
        : raw;
    for (var key in defaults) {
        var opt = props[key];
        if (opt) {
            if (isArray(opt) || isFunction(opt)) {
                props[key] = { type: opt, default: defaults[key] };
            }
            else {
                opt.default = defaults[key];
            }
        }
        else if (opt === null) {
            props[key] = { default: defaults[key] };
        }
        else if (true) {
            warn$2("props default key \"".concat(key, "\" has no corresponding declaration."));
        }
    }
    return props;
}

function initRender(vm) {
    vm._vnode = null; // the root of the child tree
    vm._staticTrees = null; // v-once cached trees
    var options = vm.$options;
    var parentVnode = (vm.$vnode = options._parentVnode); // the placeholder node in parent tree
    var renderContext = parentVnode && parentVnode.context;
    vm.$slots = resolveSlots(options._renderChildren, renderContext);
    vm.$scopedSlots = parentVnode
        ? normalizeScopedSlots(vm.$parent, parentVnode.data.scopedSlots, vm.$slots)
        : emptyObject;
    // bind the createElement fn to this instance
    // so that we get proper render context inside it.
    // args order: tag, data, children, normalizationType, alwaysNormalize
    // internal version is used by render functions compiled from templates
    // @ts-expect-error
    vm._c = function (a, b, c, d) { return createElement$1(vm, a, b, c, d, false); };
    // normalization is always applied for the public version, used in
    // user-written render functions.
    // @ts-expect-error
    vm.$createElement = function (a, b, c, d) { return createElement$1(vm, a, b, c, d, true); };
    // $attrs & $listeners are exposed for easier HOC creation.
    // they need to be reactive so that HOCs using them are always updated
    var parentData = parentVnode && parentVnode.data;
    /* istanbul ignore else */
    if (true) {
        defineReactive(vm, '$attrs', (parentData && parentData.attrs) || emptyObject, function () {
            !isUpdatingChildComponent && warn$2("$attrs is readonly.", vm);
        }, true);
        defineReactive(vm, '$listeners', options._parentListeners || emptyObject, function () {
            !isUpdatingChildComponent && warn$2("$listeners is readonly.", vm);
        }, true);
    }
    else {}
}
var currentRenderingInstance = null;
function renderMixin(Vue) {
    // install runtime convenience helpers
    installRenderHelpers(Vue.prototype);
    Vue.prototype.$nextTick = function (fn) {
        return nextTick(fn, this);
    };
    Vue.prototype._render = function () {
        var vm = this;
        var _a = vm.$options, render = _a.render, _parentVnode = _a._parentVnode;
        if (_parentVnode && vm._isMounted) {
            vm.$scopedSlots = normalizeScopedSlots(vm.$parent, _parentVnode.data.scopedSlots, vm.$slots, vm.$scopedSlots);
            if (vm._slotsProxy) {
                syncSetupSlots(vm._slotsProxy, vm.$scopedSlots);
            }
        }
        // set parent vnode. this allows render functions to have access
        // to the data on the placeholder node.
        vm.$vnode = _parentVnode;
        // render self
        var vnode;
        try {
            // There's no need to maintain a stack because all render fns are called
            // separately from one another. Nested component's render fns are called
            // when parent component is patched.
            setCurrentInstance(vm);
            currentRenderingInstance = vm;
            vnode = render.call(vm._renderProxy, vm.$createElement);
        }
        catch (e) {
            handleError(e, vm, "render");
            // return error render result,
            // or previous vnode to prevent render error causing blank component
            /* istanbul ignore else */
            if ( true && vm.$options.renderError) {
                try {
                    vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
                }
                catch (e) {
                    handleError(e, vm, "renderError");
                    vnode = vm._vnode;
                }
            }
            else {
                vnode = vm._vnode;
            }
        }
        finally {
            currentRenderingInstance = null;
            setCurrentInstance();
        }
        // if the returned array contains only a single node, allow it
        if (isArray(vnode) && vnode.length === 1) {
            vnode = vnode[0];
        }
        // return empty vnode in case the render function errored out
        if (!(vnode instanceof VNode)) {
            if ( true && isArray(vnode)) {
                warn$2('Multiple root nodes returned from render function. Render function ' +
                    'should return a single root node.', vm);
            }
            vnode = createEmptyVNode();
        }
        // set parent
        vnode.parent = _parentVnode;
        return vnode;
    };
}

function ensureCtor(comp, base) {
    if (comp.__esModule || (hasSymbol && comp[Symbol.toStringTag] === 'Module')) {
        comp = comp.default;
    }
    return isObject(comp) ? base.extend(comp) : comp;
}
function createAsyncPlaceholder(factory, data, context, children, tag) {
    var node = createEmptyVNode();
    node.asyncFactory = factory;
    node.asyncMeta = { data: data, context: context, children: children, tag: tag };
    return node;
}
function resolveAsyncComponent(factory, baseCtor) {
    if (isTrue(factory.error) && isDef(factory.errorComp)) {
        return factory.errorComp;
    }
    if (isDef(factory.resolved)) {
        return factory.resolved;
    }
    var owner = currentRenderingInstance;
    if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
        // already pending
        factory.owners.push(owner);
    }
    if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
        return factory.loadingComp;
    }
    if (owner && !isDef(factory.owners)) {
        var owners_1 = (factory.owners = [owner]);
        var sync_1 = true;
        var timerLoading_1 = null;
        var timerTimeout_1 = null;
        owner.$on('hook:destroyed', function () { return remove$2(owners_1, owner); });
        var forceRender_1 = function (renderCompleted) {
            for (var i = 0, l = owners_1.length; i < l; i++) {
                owners_1[i].$forceUpdate();
            }
            if (renderCompleted) {
                owners_1.length = 0;
                if (timerLoading_1 !== null) {
                    clearTimeout(timerLoading_1);
                    timerLoading_1 = null;
                }
                if (timerTimeout_1 !== null) {
                    clearTimeout(timerTimeout_1);
                    timerTimeout_1 = null;
                }
            }
        };
        var resolve = once(function (res) {
            // cache resolved
            factory.resolved = ensureCtor(res, baseCtor);
            // invoke callbacks only if this is not a synchronous resolve
            // (async resolves are shimmed as synchronous during SSR)
            if (!sync_1) {
                forceRender_1(true);
            }
            else {
                owners_1.length = 0;
            }
        });
        var reject_1 = once(function (reason) {
             true &&
                warn$2("Failed to resolve async component: ".concat(String(factory)) +
                    (reason ? "\nReason: ".concat(reason) : ''));
            if (isDef(factory.errorComp)) {
                factory.error = true;
                forceRender_1(true);
            }
        });
        var res_1 = factory(resolve, reject_1);
        if (isObject(res_1)) {
            if (isPromise(res_1)) {
                // () => Promise
                if (isUndef(factory.resolved)) {
                    res_1.then(resolve, reject_1);
                }
            }
            else if (isPromise(res_1.component)) {
                res_1.component.then(resolve, reject_1);
                if (isDef(res_1.error)) {
                    factory.errorComp = ensureCtor(res_1.error, baseCtor);
                }
                if (isDef(res_1.loading)) {
                    factory.loadingComp = ensureCtor(res_1.loading, baseCtor);
                    if (res_1.delay === 0) {
                        factory.loading = true;
                    }
                    else {
                        // @ts-expect-error NodeJS timeout type
                        timerLoading_1 = setTimeout(function () {
                            timerLoading_1 = null;
                            if (isUndef(factory.resolved) && isUndef(factory.error)) {
                                factory.loading = true;
                                forceRender_1(false);
                            }
                        }, res_1.delay || 200);
                    }
                }
                if (isDef(res_1.timeout)) {
                    // @ts-expect-error NodeJS timeout type
                    timerTimeout_1 = setTimeout(function () {
                        timerTimeout_1 = null;
                        if (isUndef(factory.resolved)) {
                            reject_1( true ? "timeout (".concat(res_1.timeout, "ms)") : 0);
                        }
                    }, res_1.timeout);
                }
            }
        }
        sync_1 = false;
        // return in case resolved synchronously
        return factory.loading ? factory.loadingComp : factory.resolved;
    }
}

function getFirstComponentChild(children) {
    if (isArray(children)) {
        for (var i = 0; i < children.length; i++) {
            var c = children[i];
            if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
                return c;
            }
        }
    }
}

function initEvents(vm) {
    vm._events = Object.create(null);
    vm._hasHookEvent = false;
    // init parent attached events
    var listeners = vm.$options._parentListeners;
    if (listeners) {
        updateComponentListeners(vm, listeners);
    }
}
var target$1;
function add$1(event, fn) {
    target$1.$on(event, fn);
}
function remove$1(event, fn) {
    target$1.$off(event, fn);
}
function createOnceHandler$1(event, fn) {
    var _target = target$1;
    return function onceHandler() {
        var res = fn.apply(null, arguments);
        if (res !== null) {
            _target.$off(event, onceHandler);
        }
    };
}
function updateComponentListeners(vm, listeners, oldListeners) {
    target$1 = vm;
    updateListeners(listeners, oldListeners || {}, add$1, remove$1, createOnceHandler$1, vm);
    target$1 = undefined;
}
function eventsMixin(Vue) {
    var hookRE = /^hook:/;
    Vue.prototype.$on = function (event, fn) {
        var vm = this;
        if (isArray(event)) {
            for (var i = 0, l = event.length; i < l; i++) {
                vm.$on(event[i], fn);
            }
        }
        else {
            (vm._events[event] || (vm._events[event] = [])).push(fn);
            // optimize hook:event cost by using a boolean flag marked at registration
            // instead of a hash lookup
            if (hookRE.test(event)) {
                vm._hasHookEvent = true;
            }
        }
        return vm;
    };
    Vue.prototype.$once = function (event, fn) {
        var vm = this;
        function on() {
            vm.$off(event, on);
            fn.apply(vm, arguments);
        }
        on.fn = fn;
        vm.$on(event, on);
        return vm;
    };
    Vue.prototype.$off = function (event, fn) {
        var vm = this;
        // all
        if (!arguments.length) {
            vm._events = Object.create(null);
            return vm;
        }
        // array of events
        if (isArray(event)) {
            for (var i_1 = 0, l = event.length; i_1 < l; i_1++) {
                vm.$off(event[i_1], fn);
            }
            return vm;
        }
        // specific event
        var cbs = vm._events[event];
        if (!cbs) {
            return vm;
        }
        if (!fn) {
            vm._events[event] = null;
            return vm;
        }
        // specific handler
        var cb;
        var i = cbs.length;
        while (i--) {
            cb = cbs[i];
            if (cb === fn || cb.fn === fn) {
                cbs.splice(i, 1);
                break;
            }
        }
        return vm;
    };
    Vue.prototype.$emit = function (event) {
        var vm = this;
        if (true) {
            var lowerCaseEvent = event.toLowerCase();
            if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
                tip("Event \"".concat(lowerCaseEvent, "\" is emitted in component ") +
                    "".concat(formatComponentName(vm), " but the handler is registered for \"").concat(event, "\". ") +
                    "Note that HTML attributes are case-insensitive and you cannot use " +
                    "v-on to listen to camelCase events when using in-DOM templates. " +
                    "You should probably use \"".concat(hyphenate(event), "\" instead of \"").concat(event, "\"."));
            }
        }
        var cbs = vm._events[event];
        if (cbs) {
            cbs = cbs.length > 1 ? toArray(cbs) : cbs;
            var args = toArray(arguments, 1);
            var info = "event handler for \"".concat(event, "\"");
            for (var i = 0, l = cbs.length; i < l; i++) {
                invokeWithErrorHandling(cbs[i], vm, args, vm, info);
            }
        }
        return vm;
    };
}

var activeInstance = null;
var isUpdatingChildComponent = false;
function setActiveInstance(vm) {
    var prevActiveInstance = activeInstance;
    activeInstance = vm;
    return function () {
        activeInstance = prevActiveInstance;
    };
}
function initLifecycle(vm) {
    var options = vm.$options;
    // locate first non-abstract parent
    var parent = options.parent;
    if (parent && !options.abstract) {
        while (parent.$options.abstract && parent.$parent) {
            parent = parent.$parent;
        }
        parent.$children.push(vm);
    }
    vm.$parent = parent;
    vm.$root = parent ? parent.$root : vm;
    vm.$children = [];
    vm.$refs = {};
    vm._provided = parent ? parent._provided : Object.create(null);
    vm._watcher = null;
    vm._inactive = null;
    vm._directInactive = false;
    vm._isMounted = false;
    vm._isDestroyed = false;
    vm._isBeingDestroyed = false;
}
function lifecycleMixin(Vue) {
    Vue.prototype._update = function (vnode, hydrating) {
        var vm = this;
        var prevEl = vm.$el;
        var prevVnode = vm._vnode;
        var restoreActiveInstance = setActiveInstance(vm);
        vm._vnode = vnode;
        // Vue.prototype.__patch__ is injected in entry points
        // based on the rendering backend used.
        if (!prevVnode) {
            // initial render
            vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
        }
        else {
            // updates
            vm.$el = vm.__patch__(prevVnode, vnode);
        }
        restoreActiveInstance();
        // update __vue__ reference
        if (prevEl) {
            prevEl.__vue__ = null;
        }
        if (vm.$el) {
            vm.$el.__vue__ = vm;
        }
        // if parent is an HOC, update its $el as well
        var wrapper = vm;
        while (wrapper &&
            wrapper.$vnode &&
            wrapper.$parent &&
            wrapper.$vnode === wrapper.$parent._vnode) {
            wrapper.$parent.$el = wrapper.$el;
            wrapper = wrapper.$parent;
        }
        // updated hook is called by the scheduler to ensure that children are
        // updated in a parent's updated hook.
    };
    Vue.prototype.$forceUpdate = function () {
        var vm = this;
        if (vm._watcher) {
            vm._watcher.update();
        }
    };
    Vue.prototype.$destroy = function () {
        var vm = this;
        if (vm._isBeingDestroyed) {
            return;
        }
        callHook$1(vm, 'beforeDestroy');
        vm._isBeingDestroyed = true;
        // remove self from parent
        var parent = vm.$parent;
        if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
            remove$2(parent.$children, vm);
        }
        // teardown scope. this includes both the render watcher and other
        // watchers created
        vm._scope.stop();
        // remove reference from data ob
        // frozen object may not have observer.
        if (vm._data.__ob__) {
            vm._data.__ob__.vmCount--;
        }
        // call the last hook...
        vm._isDestroyed = true;
        // invoke destroy hooks on current rendered tree
        vm.__patch__(vm._vnode, null);
        // fire destroyed hook
        callHook$1(vm, 'destroyed');
        // turn off all instance listeners.
        vm.$off();
        // remove __vue__ reference
        if (vm.$el) {
            vm.$el.__vue__ = null;
        }
        // release circular reference (#6759)
        if (vm.$vnode) {
            vm.$vnode.parent = null;
        }
    };
}
function mountComponent(vm, el, hydrating) {
    vm.$el = el;
    if (!vm.$options.render) {
        // @ts-expect-error invalid type
        vm.$options.render = createEmptyVNode;
        if (true) {
            /* istanbul ignore if */
            if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
                vm.$options.el ||
                el) {
                warn$2('You are using the runtime-only build of Vue where the template ' +
                    'compiler is not available. Either pre-compile the templates into ' +
                    'render functions, or use the compiler-included build.', vm);
            }
            else {
                warn$2('Failed to mount component: template or render function not defined.', vm);
            }
        }
    }
    callHook$1(vm, 'beforeMount');
    var updateComponent;
    /* istanbul ignore if */
    if ( true && config.performance && mark) {
        updateComponent = function () {
            var name = vm._name;
            var id = vm._uid;
            var startTag = "vue-perf-start:".concat(id);
            var endTag = "vue-perf-end:".concat(id);
            mark(startTag);
            var vnode = vm._render();
            mark(endTag);
            measure("vue ".concat(name, " render"), startTag, endTag);
            mark(startTag);
            vm._update(vnode, hydrating);
            mark(endTag);
            measure("vue ".concat(name, " patch"), startTag, endTag);
        };
    }
    else {
        updateComponent = function () {
            vm._update(vm._render(), hydrating);
        };
    }
    var watcherOptions = {
        before: function () {
            if (vm._isMounted && !vm._isDestroyed) {
                callHook$1(vm, 'beforeUpdate');
            }
        }
    };
    if (true) {
        watcherOptions.onTrack = function (e) { return callHook$1(vm, 'renderTracked', [e]); };
        watcherOptions.onTrigger = function (e) { return callHook$1(vm, 'renderTriggered', [e]); };
    }
    // we set this to vm._watcher inside the watcher's constructor
    // since the watcher's initial patch may call $forceUpdate (e.g. inside child
    // component's mounted hook), which relies on vm._watcher being already defined
    new Watcher(vm, updateComponent, noop, watcherOptions, true /* isRenderWatcher */);
    hydrating = false;
    // flush buffer for flush: "pre" watchers queued in setup()
    var preWatchers = vm._preWatchers;
    if (preWatchers) {
        for (var i = 0; i < preWatchers.length; i++) {
            preWatchers[i].run();
        }
    }
    // manually mounted instance, call mounted on self
    // mounted is called for render-created child components in its inserted hook
    if (vm.$vnode == null) {
        vm._isMounted = true;
        callHook$1(vm, 'mounted');
    }
    return vm;
}
function updateChildComponent(vm, propsData, listeners, parentVnode, renderChildren) {
    if (true) {
        isUpdatingChildComponent = true;
    }
    // determine whether component has slot children
    // we need to do this before overwriting $options._renderChildren.
    // check if there are dynamic scopedSlots (hand-written or compiled but with
    // dynamic slot names). Static scoped slots compiled from template has the
    // "$stable" marker.
    var newScopedSlots = parentVnode.data.scopedSlots;
    var oldScopedSlots = vm.$scopedSlots;
    var hasDynamicScopedSlot = !!((newScopedSlots && !newScopedSlots.$stable) ||
        (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
        (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key) ||
        (!newScopedSlots && vm.$scopedSlots.$key));
    // Any static slot children from the parent may have changed during parent's
    // update. Dynamic scoped slots may also have changed. In such cases, a forced
    // update is necessary to ensure correctness.
    var needsForceUpdate = !!(renderChildren || // has new static slots
        vm.$options._renderChildren || // has old static slots
        hasDynamicScopedSlot);
    var prevVNode = vm.$vnode;
    vm.$options._parentVnode = parentVnode;
    vm.$vnode = parentVnode; // update vm's placeholder node without re-render
    if (vm._vnode) {
        // update child tree's parent
        vm._vnode.parent = parentVnode;
    }
    vm.$options._renderChildren = renderChildren;
    // update $attrs and $listeners hash
    // these are also reactive so they may trigger child update if the child
    // used them during render
    var attrs = parentVnode.data.attrs || emptyObject;
    if (vm._attrsProxy) {
        // force update if attrs are accessed and has changed since it may be
        // passed to a child component.
        if (syncSetupProxy(vm._attrsProxy, attrs, (prevVNode.data && prevVNode.data.attrs) || emptyObject, vm, '$attrs')) {
            needsForceUpdate = true;
        }
    }
    vm.$attrs = attrs;
    // update listeners
    listeners = listeners || emptyObject;
    var prevListeners = vm.$options._parentListeners;
    if (vm._listenersProxy) {
        syncSetupProxy(vm._listenersProxy, listeners, prevListeners || emptyObject, vm, '$listeners');
    }
    vm.$listeners = vm.$options._parentListeners = listeners;
    updateComponentListeners(vm, listeners, prevListeners);
    // update props
    if (propsData && vm.$options.props) {
        toggleObserving(false);
        var props = vm._props;
        var propKeys = vm.$options._propKeys || [];
        for (var i = 0; i < propKeys.length; i++) {
            var key = propKeys[i];
            var propOptions = vm.$options.props; // wtf flow?
            props[key] = validateProp(key, propOptions, propsData, vm);
        }
        toggleObserving(true);
        // keep a copy of raw propsData
        vm.$options.propsData = propsData;
    }
    // resolve slots + force update if has children
    if (needsForceUpdate) {
        vm.$slots = resolveSlots(renderChildren, parentVnode.context);
        vm.$forceUpdate();
    }
    if (true) {
        isUpdatingChildComponent = false;
    }
}
function isInInactiveTree(vm) {
    while (vm && (vm = vm.$parent)) {
        if (vm._inactive)
            return true;
    }
    return false;
}
function activateChildComponent(vm, direct) {
    if (direct) {
        vm._directInactive = false;
        if (isInInactiveTree(vm)) {
            return;
        }
    }
    else if (vm._directInactive) {
        return;
    }
    if (vm._inactive || vm._inactive === null) {
        vm._inactive = false;
        for (var i = 0; i < vm.$children.length; i++) {
            activateChildComponent(vm.$children[i]);
        }
        callHook$1(vm, 'activated');
    }
}
function deactivateChildComponent(vm, direct) {
    if (direct) {
        vm._directInactive = true;
        if (isInInactiveTree(vm)) {
            return;
        }
    }
    if (!vm._inactive) {
        vm._inactive = true;
        for (var i = 0; i < vm.$children.length; i++) {
            deactivateChildComponent(vm.$children[i]);
        }
        callHook$1(vm, 'deactivated');
    }
}
function callHook$1(vm, hook, args, setContext) {
    if (setContext === void 0) { setContext = true; }
    // #7573 disable dep collection when invoking lifecycle hooks
    pushTarget();
    var prev = currentInstance;
    setContext && setCurrentInstance(vm);
    var handlers = vm.$options[hook];
    var info = "".concat(hook, " hook");
    if (handlers) {
        for (var i = 0, j = handlers.length; i < j; i++) {
            invokeWithErrorHandling(handlers[i], vm, args || null, vm, info);
        }
    }
    if (vm._hasHookEvent) {
        vm.$emit('hook:' + hook);
    }
    setContext && setCurrentInstance(prev);
    popTarget();
}

var MAX_UPDATE_COUNT = 100;
var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index$1 = 0;
/**
 * Reset the scheduler's state.
 */
function resetSchedulerState() {
    index$1 = queue.length = activatedChildren.length = 0;
    has = {};
    if (true) {
        circular = {};
    }
    waiting = flushing = false;
}
// Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.
var currentFlushTimestamp = 0;
// Async edge case fix requires storing an event listener's attach timestamp.
var getNow = Date.now;
// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)
if (inBrowser && !isIE) {
    var performance_1 = window.performance;
    if (performance_1 &&
        typeof performance_1.now === 'function' &&
        getNow() > document.createEvent('Event').timeStamp) {
        // if the event timestamp, although evaluated AFTER the Date.now(), is
        // smaller than it, it means the event is using a hi-res timestamp,
        // and we need to use the hi-res version for event listener timestamps as
        // well.
        getNow = function () { return performance_1.now(); };
    }
}
var sortCompareFn = function (a, b) {
    if (a.post) {
        if (!b.post)
            return 1;
    }
    else if (b.post) {
        return -1;
    }
    return a.id - b.id;
};
/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue() {
    currentFlushTimestamp = getNow();
    flushing = true;
    var watcher, id;
    // Sort queue before flush.
    // This ensures that:
    // 1. Components are updated from parent to child. (because parent is always
    //    created before the child)
    // 2. A component's user watchers are run before its render watcher (because
    //    user watchers are created before the render watcher)
    // 3. If a component is destroyed during a parent component's watcher run,
    //    its watchers can be skipped.
    queue.sort(sortCompareFn);
    // do not cache length because more watchers might be pushed
    // as we run existing watchers
    for (index$1 = 0; index$1 < queue.length; index$1++) {
        watcher = queue[index$1];
        if (watcher.before) {
            watcher.before();
        }
        id = watcher.id;
        has[id] = null;
        watcher.run();
        // in dev build, check and stop circular updates.
        if ( true && has[id] != null) {
            circular[id] = (circular[id] || 0) + 1;
            if (circular[id] > MAX_UPDATE_COUNT) {
                warn$2('You may have an infinite update loop ' +
                    (watcher.user
                        ? "in watcher with expression \"".concat(watcher.expression, "\"")
                        : "in a component render function."), watcher.vm);
                break;
            }
        }
    }
    // keep copies of post queues before resetting state
    var activatedQueue = activatedChildren.slice();
    var updatedQueue = queue.slice();
    resetSchedulerState();
    // call component updated and activated hooks
    callActivatedHooks(activatedQueue);
    callUpdatedHooks(updatedQueue);
    cleanupDeps();
    // devtool hook
    /* istanbul ignore if */
    if (devtools && config.devtools) {
        devtools.emit('flush');
    }
}
function callUpdatedHooks(queue) {
    var i = queue.length;
    while (i--) {
        var watcher = queue[i];
        var vm = watcher.vm;
        if (vm && vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
            callHook$1(vm, 'updated');
        }
    }
}
/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent(vm) {
    // setting _inactive to false here so that a render function can
    // rely on checking whether it's in an inactive tree (e.g. router-view)
    vm._inactive = false;
    activatedChildren.push(vm);
}
function callActivatedHooks(queue) {
    for (var i = 0; i < queue.length; i++) {
        queue[i]._inactive = true;
        activateChildComponent(queue[i], true /* true */);
    }
}
/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher(watcher) {
    var id = watcher.id;
    if (has[id] != null) {
        return;
    }
    if (watcher === Dep.target && watcher.noRecurse) {
        return;
    }
    has[id] = true;
    if (!flushing) {
        queue.push(watcher);
    }
    else {
        // if already flushing, splice the watcher based on its id
        // if already past its id, it will be run next immediately.
        var i = queue.length - 1;
        while (i > index$1 && queue[i].id > watcher.id) {
            i--;
        }
        queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
        waiting = true;
        if ( true && !config.async) {
            flushSchedulerQueue();
            return;
        }
        nextTick(flushSchedulerQueue);
    }
}

var WATCHER = "watcher";
var WATCHER_CB = "".concat(WATCHER, " callback");
var WATCHER_GETTER = "".concat(WATCHER, " getter");
var WATCHER_CLEANUP = "".concat(WATCHER, " cleanup");
// Simple effect.
function watchEffect(effect, options) {
    return doWatch(effect, null, options);
}
function watchPostEffect(effect, options) {
    return doWatch(effect, null, ( true
        ? __assign(__assign({}, options), { flush: 'post' }) : 0));
}
function watchSyncEffect(effect, options) {
    return doWatch(effect, null, ( true
        ? __assign(__assign({}, options), { flush: 'sync' }) : 0));
}
// initial value for watchers to trigger on undefined initial values
var INITIAL_WATCHER_VALUE = {};
// implementation
function watch(source, cb, options) {
    if ( true && typeof cb !== 'function') {
        warn$2("`watch(fn, options?)` signature has been moved to a separate API. " +
            "Use `watchEffect(fn, options?)` instead. `watch` now only " +
            "supports `watch(source, cb, options?) signature.");
    }
    return doWatch(source, cb, options);
}
function doWatch(source, cb, _a) {
    var _b = _a === void 0 ? emptyObject : _a, immediate = _b.immediate, deep = _b.deep, _c = _b.flush, flush = _c === void 0 ? 'pre' : _c, onTrack = _b.onTrack, onTrigger = _b.onTrigger;
    if ( true && !cb) {
        if (immediate !== undefined) {
            warn$2("watch() \"immediate\" option is only respected when using the " +
                "watch(source, callback, options?) signature.");
        }
        if (deep !== undefined) {
            warn$2("watch() \"deep\" option is only respected when using the " +
                "watch(source, callback, options?) signature.");
        }
    }
    var warnInvalidSource = function (s) {
        warn$2("Invalid watch source: ".concat(s, ". A watch source can only be a getter/effect ") +
            "function, a ref, a reactive object, or an array of these types.");
    };
    var instance = currentInstance;
    var call = function (fn, type, args) {
        if (args === void 0) { args = null; }
        return invokeWithErrorHandling(fn, null, args, instance, type);
    };
    var getter;
    var forceTrigger = false;
    var isMultiSource = false;
    if (isRef(source)) {
        getter = function () { return source.value; };
        forceTrigger = isShallow(source);
    }
    else if (isReactive(source)) {
        getter = function () {
            source.__ob__.dep.depend();
            return source;
        };
        deep = true;
    }
    else if (isArray(source)) {
        isMultiSource = true;
        forceTrigger = source.some(function (s) { return isReactive(s) || isShallow(s); });
        getter = function () {
            return source.map(function (s) {
                if (isRef(s)) {
                    return s.value;
                }
                else if (isReactive(s)) {
                    return traverse(s);
                }
                else if (isFunction(s)) {
                    return call(s, WATCHER_GETTER);
                }
                else {
                     true && warnInvalidSource(s);
                }
            });
        };
    }
    else if (isFunction(source)) {
        if (cb) {
            // getter with cb
            getter = function () { return call(source, WATCHER_GETTER); };
        }
        else {
            // no cb -> simple effect
            getter = function () {
                if (instance && instance._isDestroyed) {
                    return;
                }
                if (cleanup) {
                    cleanup();
                }
                return call(source, WATCHER, [onCleanup]);
            };
        }
    }
    else {
        getter = noop;
         true && warnInvalidSource(source);
    }
    if (cb && deep) {
        var baseGetter_1 = getter;
        getter = function () { return traverse(baseGetter_1()); };
    }
    var cleanup;
    var onCleanup = function (fn) {
        cleanup = watcher.onStop = function () {
            call(fn, WATCHER_CLEANUP);
        };
    };
    // in SSR there is no need to setup an actual effect, and it should be noop
    // unless it's eager
    if (isServerRendering()) {
        // we will also not call the invalidate callback (+ runner is not set up)
        onCleanup = noop;
        if (!cb) {
            getter();
        }
        else if (immediate) {
            call(cb, WATCHER_CB, [
                getter(),
                isMultiSource ? [] : undefined,
                onCleanup
            ]);
        }
        return noop;
    }
    var watcher = new Watcher(currentInstance, getter, noop, {
        lazy: true
    });
    watcher.noRecurse = !cb;
    var oldValue = isMultiSource ? [] : INITIAL_WATCHER_VALUE;
    // overwrite default run
    watcher.run = function () {
        if (!watcher.active) {
            return;
        }
        if (cb) {
            // watch(source, cb)
            var newValue = watcher.get();
            if (deep ||
                forceTrigger ||
                (isMultiSource
                    ? newValue.some(function (v, i) {
                        return hasChanged(v, oldValue[i]);
                    })
                    : hasChanged(newValue, oldValue))) {
                // cleanup before running cb again
                if (cleanup) {
                    cleanup();
                }
                call(cb, WATCHER_CB, [
                    newValue,
                    // pass undefined as the old value when it's changed for the first time
                    oldValue === INITIAL_WATCHER_VALUE ? undefined : oldValue,
                    onCleanup
                ]);
                oldValue = newValue;
            }
        }
        else {
            // watchEffect
            watcher.get();
        }
    };
    if (flush === 'sync') {
        watcher.update = watcher.run;
    }
    else if (flush === 'post') {
        watcher.post = true;
        watcher.update = function () { return queueWatcher(watcher); };
    }
    else {
        // pre
        watcher.update = function () {
            if (instance && instance === currentInstance && !instance._isMounted) {
                // pre-watcher triggered before
                var buffer = instance._preWatchers || (instance._preWatchers = []);
                if (buffer.indexOf(watcher) < 0)
                    buffer.push(watcher);
            }
            else {
                queueWatcher(watcher);
            }
        };
    }
    if (true) {
        watcher.onTrack = onTrack;
        watcher.onTrigger = onTrigger;
    }
    // initial run
    if (cb) {
        if (immediate) {
            watcher.run();
        }
        else {
            oldValue = watcher.get();
        }
    }
    else if (flush === 'post' && instance) {
        instance.$once('hook:mounted', function () { return watcher.get(); });
    }
    else {
        watcher.get();
    }
    return function () {
        watcher.teardown();
    };
}

var activeEffectScope;
var EffectScope = /** @class */ (function () {
    function EffectScope(detached) {
        if (detached === void 0) { detached = false; }
        this.detached = detached;
        /**
         * @internal
         */
        this.active = true;
        /**
         * @internal
         */
        this.effects = [];
        /**
         * @internal
         */
        this.cleanups = [];
        this.parent = activeEffectScope;
        if (!detached && activeEffectScope) {
            this.index =
                (activeEffectScope.scopes || (activeEffectScope.scopes = [])).push(this) - 1;
        }
    }
    EffectScope.prototype.run = function (fn) {
        if (this.active) {
            var currentEffectScope = activeEffectScope;
            try {
                activeEffectScope = this;
                return fn();
            }
            finally {
                activeEffectScope = currentEffectScope;
            }
        }
        else if (true) {
            warn$2("cannot run an inactive effect scope.");
        }
    };
    /**
     * This should only be called on non-detached scopes
     * @internal
     */
    EffectScope.prototype.on = function () {
        activeEffectScope = this;
    };
    /**
     * This should only be called on non-detached scopes
     * @internal
     */
    EffectScope.prototype.off = function () {
        activeEffectScope = this.parent;
    };
    EffectScope.prototype.stop = function (fromParent) {
        if (this.active) {
            var i = void 0, l = void 0;
            for (i = 0, l = this.effects.length; i < l; i++) {
                this.effects[i].teardown();
            }
            for (i = 0, l = this.cleanups.length; i < l; i++) {
                this.cleanups[i]();
            }
            if (this.scopes) {
                for (i = 0, l = this.scopes.length; i < l; i++) {
                    this.scopes[i].stop(true);
                }
            }
            // nested scope, dereference from parent to avoid memory leaks
            if (!this.detached && this.parent && !fromParent) {
                // optimized O(1) removal
                var last = this.parent.scopes.pop();
                if (last && last !== this) {
                    this.parent.scopes[this.index] = last;
                    last.index = this.index;
                }
            }
            this.parent = undefined;
            this.active = false;
        }
    };
    return EffectScope;
}());
function effectScope(detached) {
    return new EffectScope(detached);
}
/**
 * @internal
 */
function recordEffectScope(effect, scope) {
    if (scope === void 0) { scope = activeEffectScope; }
    if (scope && scope.active) {
        scope.effects.push(effect);
    }
}
function getCurrentScope() {
    return activeEffectScope;
}
function onScopeDispose(fn) {
    if (activeEffectScope) {
        activeEffectScope.cleanups.push(fn);
    }
    else if (true) {
        warn$2("onScopeDispose() is called when there is no active effect scope" +
            " to be associated with.");
    }
}

function provide(key, value) {
    if (!currentInstance) {
        if (true) {
            warn$2("provide() can only be used inside setup().");
        }
    }
    else {
        // TS doesn't allow symbol as index type
        resolveProvided(currentInstance)[key] = value;
    }
}
function resolveProvided(vm) {
    // by default an instance inherits its parent's provides object
    // but when it needs to provide values of its own, it creates its
    // own provides object using parent provides object as prototype.
    // this way in `inject` we can simply look up injections from direct
    // parent and let the prototype chain do the work.
    var existing = vm._provided;
    var parentProvides = vm.$parent && vm.$parent._provided;
    if (parentProvides === existing) {
        return (vm._provided = Object.create(parentProvides));
    }
    else {
        return existing;
    }
}
function inject(key, defaultValue, treatDefaultAsFactory) {
    if (treatDefaultAsFactory === void 0) { treatDefaultAsFactory = false; }
    // fallback to `currentRenderingInstance` so that this can be called in
    // a functional component
    var instance = currentInstance;
    if (instance) {
        // #2400
        // to support `app.use` plugins,
        // fallback to appContext's `provides` if the instance is at root
        var provides = instance.$parent && instance.$parent._provided;
        if (provides && key in provides) {
            // TS doesn't allow symbol as index type
            return provides[key];
        }
        else if (arguments.length > 1) {
            return treatDefaultAsFactory && isFunction(defaultValue)
                ? defaultValue.call(instance)
                : defaultValue;
        }
        else if (true) {
            warn$2("injection \"".concat(String(key), "\" not found."));
        }
    }
    else if (true) {
        warn$2("inject() can only be used inside setup() or functional components.");
    }
}

/**
 * @internal this function needs manual public type declaration because it relies
 * on previously manually authored types from Vue 2
 */
function h(type, props, children) {
    if (!currentInstance) {
         true &&
            warn$2("globally imported h() can only be invoked when there is an active " +
                "component instance, e.g. synchronously in a component's render or setup function.");
    }
    return createElement$1(currentInstance, type, props, children, 2, true);
}

function handleError(err, vm, info) {
    // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
    // See: https://github.com/vuejs/vuex/issues/1505
    pushTarget();
    try {
        if (vm) {
            var cur = vm;
            while ((cur = cur.$parent)) {
                var hooks = cur.$options.errorCaptured;
                if (hooks) {
                    for (var i = 0; i < hooks.length; i++) {
                        try {
                            var capture = hooks[i].call(cur, err, vm, info) === false;
                            if (capture)
                                return;
                        }
                        catch (e) {
                            globalHandleError(e, cur, 'errorCaptured hook');
                        }
                    }
                }
            }
        }
        globalHandleError(err, vm, info);
    }
    finally {
        popTarget();
    }
}
function invokeWithErrorHandling(handler, context, args, vm, info) {
    var res;
    try {
        res = args ? handler.apply(context, args) : handler.call(context);
        if (res && !res._isVue && isPromise(res) && !res._handled) {
            res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
            res._handled = true;
        }
    }
    catch (e) {
        handleError(e, vm, info);
    }
    return res;
}
function globalHandleError(err, vm, info) {
    if (config.errorHandler) {
        try {
            return config.errorHandler.call(null, err, vm, info);
        }
        catch (e) {
            // if the user intentionally throws the original error in the handler,
            // do not log it twice
            if (e !== err) {
                logError(e, null, 'config.errorHandler');
            }
        }
    }
    logError(err, vm, info);
}
function logError(err, vm, info) {
    if (true) {
        warn$2("Error in ".concat(info, ": \"").concat(err.toString(), "\""), vm);
    }
    /* istanbul ignore else */
    if (inBrowser && typeof console !== 'undefined') {
        console.error(err);
    }
    else {
        throw err;
    }
}

/* globals MutationObserver */
var isUsingMicroTask = false;
var callbacks = [];
var pending = false;
function flushCallbacks() {
    pending = false;
    var copies = callbacks.slice(0);
    callbacks.length = 0;
    for (var i = 0; i < copies.length; i++) {
        copies[i]();
    }
}
// Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).
var timerFunc;
// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
    var p_1 = Promise.resolve();
    timerFunc = function () {
        p_1.then(flushCallbacks);
        // In problematic UIWebViews, Promise.then doesn't completely break, but
        // it can get stuck in a weird state where callbacks are pushed into the
        // microtask queue but the queue isn't being flushed, until the browser
        // needs to do some other work, e.g. handle a timer. Therefore we can
        // "force" the microtask queue to be flushed by adding an empty timer.
        if (isIOS)
            setTimeout(noop);
    };
    isUsingMicroTask = true;
}
else if (!isIE &&
    typeof MutationObserver !== 'undefined' &&
    (isNative(MutationObserver) ||
        // PhantomJS and iOS 7.x
        MutationObserver.toString() === '[object MutationObserverConstructor]')) {
    // Use MutationObserver where native Promise is not available,
    // e.g. PhantomJS, iOS7, Android 4.4
    // (#6466 MutationObserver is unreliable in IE11)
    var counter_1 = 1;
    var observer = new MutationObserver(flushCallbacks);
    var textNode_1 = document.createTextNode(String(counter_1));
    observer.observe(textNode_1, {
        characterData: true
    });
    timerFunc = function () {
        counter_1 = (counter_1 + 1) % 2;
        textNode_1.data = String(counter_1);
    };
    isUsingMicroTask = true;
}
else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
    // Fallback to setImmediate.
    // Technically it leverages the (macro) task queue,
    // but it is still a better choice than setTimeout.
    timerFunc = function () {
        setImmediate(flushCallbacks);
    };
}
else {
    // Fallback to setTimeout.
    timerFunc = function () {
        setTimeout(flushCallbacks, 0);
    };
}
/**
 * @internal
 */
function nextTick(cb, ctx) {
    var _resolve;
    callbacks.push(function () {
        if (cb) {
            try {
                cb.call(ctx);
            }
            catch (e) {
                handleError(e, ctx, 'nextTick');
            }
        }
        else if (_resolve) {
            _resolve(ctx);
        }
    });
    if (!pending) {
        pending = true;
        timerFunc();
    }
    // $flow-disable-line
    if (!cb && typeof Promise !== 'undefined') {
        return new Promise(function (resolve) {
            _resolve = resolve;
        });
    }
}

function useCssModule(name) {
    if (name === void 0) { name = '$style'; }
    /* istanbul ignore else */
    {
        if (!currentInstance) {
             true && warn$2("useCssModule must be called inside setup()");
            return emptyObject;
        }
        var mod = currentInstance[name];
        if (!mod) {
             true &&
                warn$2("Current instance does not have CSS module named \"".concat(name, "\"."));
            return emptyObject;
        }
        return mod;
    }
}

/**
 * Runtime helper for SFC's CSS variable injection feature.
 * @private
 */
function useCssVars(getter) {
    if (!inBrowser && !false)
        return;
    var instance = currentInstance;
    if (!instance) {
         true &&
            warn$2("useCssVars is called without current active component instance.");
        return;
    }
    watchPostEffect(function () {
        var el = instance.$el;
        var vars = getter(instance, instance._setupProxy);
        if (el && el.nodeType === 1) {
            var style = el.style;
            for (var key in vars) {
                style.setProperty("--".concat(key), vars[key]);
            }
        }
    });
}

/**
 * v3-compatible async component API.
 * @internal the type is manually declared in <root>/types/v3-define-async-component.d.ts
 * because it relies on existing manual types
 */
function defineAsyncComponent(source) {
    if (isFunction(source)) {
        source = { loader: source };
    }
    var loader = source.loader, loadingComponent = source.loadingComponent, errorComponent = source.errorComponent, _a = source.delay, delay = _a === void 0 ? 200 : _a, timeout = source.timeout, // undefined = never times out
    _b = source.suspensible, // undefined = never times out
    suspensible = _b === void 0 ? false : _b, // in Vue 3 default is true
    userOnError = source.onError;
    if ( true && suspensible) {
        warn$2("The suspensiblbe option for async components is not supported in Vue2. It is ignored.");
    }
    var pendingRequest = null;
    var retries = 0;
    var retry = function () {
        retries++;
        pendingRequest = null;
        return load();
    };
    var load = function () {
        var thisRequest;
        return (pendingRequest ||
            (thisRequest = pendingRequest =
                loader()
                    .catch(function (err) {
                    err = err instanceof Error ? err : new Error(String(err));
                    if (userOnError) {
                        return new Promise(function (resolve, reject) {
                            var userRetry = function () { return resolve(retry()); };
                            var userFail = function () { return reject(err); };
                            userOnError(err, userRetry, userFail, retries + 1);
                        });
                    }
                    else {
                        throw err;
                    }
                })
                    .then(function (comp) {
                    if (thisRequest !== pendingRequest && pendingRequest) {
                        return pendingRequest;
                    }
                    if ( true && !comp) {
                        warn$2("Async component loader resolved to undefined. " +
                            "If you are using retry(), make sure to return its return value.");
                    }
                    // interop module default
                    if (comp &&
                        (comp.__esModule || comp[Symbol.toStringTag] === 'Module')) {
                        comp = comp.default;
                    }
                    if ( true && comp && !isObject(comp) && !isFunction(comp)) {
                        throw new Error("Invalid async component load result: ".concat(comp));
                    }
                    return comp;
                })));
    };
    return function () {
        var component = load();
        return {
            component: component,
            delay: delay,
            timeout: timeout,
            error: errorComponent,
            loading: loadingComponent
        };
    };
}

function createLifeCycle(hookName) {
    return function (fn, target) {
        if (target === void 0) { target = currentInstance; }
        if (!target) {
             true &&
                warn$2("".concat(formatName(hookName), " is called when there is no active component instance to be ") +
                    "associated with. " +
                    "Lifecycle injection APIs can only be used during execution of setup().");
            return;
        }
        return injectHook(target, hookName, fn);
    };
}
function formatName(name) {
    if (name === 'beforeDestroy') {
        name = 'beforeUnmount';
    }
    else if (name === 'destroyed') {
        name = 'unmounted';
    }
    return "on".concat(name[0].toUpperCase() + name.slice(1));
}
function injectHook(instance, hookName, fn) {
    var options = instance.$options;
    options[hookName] = mergeLifecycleHook(options[hookName], fn);
}
var onBeforeMount = createLifeCycle('beforeMount');
var onMounted = createLifeCycle('mounted');
var onBeforeUpdate = createLifeCycle('beforeUpdate');
var onUpdated = createLifeCycle('updated');
var onBeforeUnmount = createLifeCycle('beforeDestroy');
var onUnmounted = createLifeCycle('destroyed');
var onActivated = createLifeCycle('activated');
var onDeactivated = createLifeCycle('deactivated');
var onServerPrefetch = createLifeCycle('serverPrefetch');
var onRenderTracked = createLifeCycle('renderTracked');
var onRenderTriggered = createLifeCycle('renderTriggered');
var injectErrorCapturedHook = createLifeCycle('errorCaptured');
function onErrorCaptured(hook, target) {
    if (target === void 0) { target = currentInstance; }
    injectErrorCapturedHook(hook, target);
}

/**
 * Note: also update dist/vue.runtime.mjs when adding new exports to this file.
 */
var version = '2.7.14';
/**
 * @internal type is manually declared in <root>/types/v3-define-component.d.ts
 */
function defineComponent(options) {
    return options;
}

var seenObjects = new _Set();
/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse(val) {
    _traverse(val, seenObjects);
    seenObjects.clear();
    return val;
}
function _traverse(val, seen) {
    var i, keys;
    var isA = isArray(val);
    if ((!isA && !isObject(val)) ||
        val.__v_skip /* ReactiveFlags.SKIP */ ||
        Object.isFrozen(val) ||
        val instanceof VNode) {
        return;
    }
    if (val.__ob__) {
        var depId = val.__ob__.dep.id;
        if (seen.has(depId)) {
            return;
        }
        seen.add(depId);
    }
    if (isA) {
        i = val.length;
        while (i--)
            _traverse(val[i], seen);
    }
    else if (isRef(val)) {
        _traverse(val.value, seen);
    }
    else {
        keys = Object.keys(val);
        i = keys.length;
        while (i--)
            _traverse(val[keys[i]], seen);
    }
}

var uid$1 = 0;
/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 * @internal
 */
var Watcher = /** @class */ (function () {
    function Watcher(vm, expOrFn, cb, options, isRenderWatcher) {
        recordEffectScope(this, 
        // if the active effect scope is manually created (not a component scope),
        // prioritize it
        activeEffectScope && !activeEffectScope._vm
            ? activeEffectScope
            : vm
                ? vm._scope
                : undefined);
        if ((this.vm = vm) && isRenderWatcher) {
            vm._watcher = this;
        }
        // options
        if (options) {
            this.deep = !!options.deep;
            this.user = !!options.user;
            this.lazy = !!options.lazy;
            this.sync = !!options.sync;
            this.before = options.before;
            if (true) {
                this.onTrack = options.onTrack;
                this.onTrigger = options.onTrigger;
            }
        }
        else {
            this.deep = this.user = this.lazy = this.sync = false;
        }
        this.cb = cb;
        this.id = ++uid$1; // uid for batching
        this.active = true;
        this.post = false;
        this.dirty = this.lazy; // for lazy watchers
        this.deps = [];
        this.newDeps = [];
        this.depIds = new _Set();
        this.newDepIds = new _Set();
        this.expression =  true ? expOrFn.toString() : 0;
        // parse expression for getter
        if (isFunction(expOrFn)) {
            this.getter = expOrFn;
        }
        else {
            this.getter = parsePath(expOrFn);
            if (!this.getter) {
                this.getter = noop;
                 true &&
                    warn$2("Failed watching path: \"".concat(expOrFn, "\" ") +
                        'Watcher only accepts simple dot-delimited paths. ' +
                        'For full control, use a function instead.', vm);
            }
        }
        this.value = this.lazy ? undefined : this.get();
    }
    /**
     * Evaluate the getter, and re-collect dependencies.
     */
    Watcher.prototype.get = function () {
        pushTarget(this);
        var value;
        var vm = this.vm;
        try {
            value = this.getter.call(vm, vm);
        }
        catch (e) {
            if (this.user) {
                handleError(e, vm, "getter for watcher \"".concat(this.expression, "\""));
            }
            else {
                throw e;
            }
        }
        finally {
            // "touch" every property so they are all tracked as
            // dependencies for deep watching
            if (this.deep) {
                traverse(value);
            }
            popTarget();
            this.cleanupDeps();
        }
        return value;
    };
    /**
     * Add a dependency to this directive.
     */
    Watcher.prototype.addDep = function (dep) {
        var id = dep.id;
        if (!this.newDepIds.has(id)) {
            this.newDepIds.add(id);
            this.newDeps.push(dep);
            if (!this.depIds.has(id)) {
                dep.addSub(this);
            }
        }
    };
    /**
     * Clean up for dependency collection.
     */
    Watcher.prototype.cleanupDeps = function () {
        var i = this.deps.length;
        while (i--) {
            var dep = this.deps[i];
            if (!this.newDepIds.has(dep.id)) {
                dep.removeSub(this);
            }
        }
        var tmp = this.depIds;
        this.depIds = this.newDepIds;
        this.newDepIds = tmp;
        this.newDepIds.clear();
        tmp = this.deps;
        this.deps = this.newDeps;
        this.newDeps = tmp;
        this.newDeps.length = 0;
    };
    /**
     * Subscriber interface.
     * Will be called when a dependency changes.
     */
    Watcher.prototype.update = function () {
        /* istanbul ignore else */
        if (this.lazy) {
            this.dirty = true;
        }
        else if (this.sync) {
            this.run();
        }
        else {
            queueWatcher(this);
        }
    };
    /**
     * Scheduler job interface.
     * Will be called by the scheduler.
     */
    Watcher.prototype.run = function () {
        if (this.active) {
            var value = this.get();
            if (value !== this.value ||
                // Deep watchers and watchers on Object/Arrays should fire even
                // when the value is the same, because the value may
                // have mutated.
                isObject(value) ||
                this.deep) {
                // set new value
                var oldValue = this.value;
                this.value = value;
                if (this.user) {
                    var info = "callback for watcher \"".concat(this.expression, "\"");
                    invokeWithErrorHandling(this.cb, this.vm, [value, oldValue], this.vm, info);
                }
                else {
                    this.cb.call(this.vm, value, oldValue);
                }
            }
        }
    };
    /**
     * Evaluate the value of the watcher.
     * This only gets called for lazy watchers.
     */
    Watcher.prototype.evaluate = function () {
        this.value = this.get();
        this.dirty = false;
    };
    /**
     * Depend on all deps collected by this watcher.
     */
    Watcher.prototype.depend = function () {
        var i = this.deps.length;
        while (i--) {
            this.deps[i].depend();
        }
    };
    /**
     * Remove self from all dependencies' subscriber list.
     */
    Watcher.prototype.teardown = function () {
        if (this.vm && !this.vm._isBeingDestroyed) {
            remove$2(this.vm._scope.effects, this);
        }
        if (this.active) {
            var i = this.deps.length;
            while (i--) {
                this.deps[i].removeSub(this);
            }
            this.active = false;
            if (this.onStop) {
                this.onStop();
            }
        }
    };
    return Watcher;
}());

var sharedPropertyDefinition = {
    enumerable: true,
    configurable: true,
    get: noop,
    set: noop
};
function proxy(target, sourceKey, key) {
    sharedPropertyDefinition.get = function proxyGetter() {
        return this[sourceKey][key];
    };
    sharedPropertyDefinition.set = function proxySetter(val) {
        this[sourceKey][key] = val;
    };
    Object.defineProperty(target, key, sharedPropertyDefinition);
}
function initState(vm) {
    var opts = vm.$options;
    if (opts.props)
        initProps$1(vm, opts.props);
    // Composition API
    initSetup(vm);
    if (opts.methods)
        initMethods(vm, opts.methods);
    if (opts.data) {
        initData(vm);
    }
    else {
        var ob = observe((vm._data = {}));
        ob && ob.vmCount++;
    }
    if (opts.computed)
        initComputed$1(vm, opts.computed);
    if (opts.watch && opts.watch !== nativeWatch) {
        initWatch(vm, opts.watch);
    }
}
function initProps$1(vm, propsOptions) {
    var propsData = vm.$options.propsData || {};
    var props = (vm._props = shallowReactive({}));
    // cache prop keys so that future props updates can iterate using Array
    // instead of dynamic object key enumeration.
    var keys = (vm.$options._propKeys = []);
    var isRoot = !vm.$parent;
    // root instance props should be converted
    if (!isRoot) {
        toggleObserving(false);
    }
    var _loop_1 = function (key) {
        keys.push(key);
        var value = validateProp(key, propsOptions, propsData, vm);
        /* istanbul ignore else */
        if (true) {
            var hyphenatedKey = hyphenate(key);
            if (isReservedAttribute(hyphenatedKey) ||
                config.isReservedAttr(hyphenatedKey)) {
                warn$2("\"".concat(hyphenatedKey, "\" is a reserved attribute and cannot be used as component prop."), vm);
            }
            defineReactive(props, key, value, function () {
                if (!isRoot && !isUpdatingChildComponent) {
                    warn$2("Avoid mutating a prop directly since the value will be " +
                        "overwritten whenever the parent component re-renders. " +
                        "Instead, use a data or computed property based on the prop's " +
                        "value. Prop being mutated: \"".concat(key, "\""), vm);
                }
            });
        }
        else {}
        // static props are already proxied on the component's prototype
        // during Vue.extend(). We only need to proxy props defined at
        // instantiation here.
        if (!(key in vm)) {
            proxy(vm, "_props", key);
        }
    };
    for (var key in propsOptions) {
        _loop_1(key);
    }
    toggleObserving(true);
}
function initData(vm) {
    var data = vm.$options.data;
    data = vm._data = isFunction(data) ? getData(data, vm) : data || {};
    if (!isPlainObject(data)) {
        data = {};
         true &&
            warn$2('data functions should return an object:\n' +
                'https://v2.vuejs.org/v2/guide/components.html#data-Must-Be-a-Function', vm);
    }
    // proxy data on instance
    var keys = Object.keys(data);
    var props = vm.$options.props;
    var methods = vm.$options.methods;
    var i = keys.length;
    while (i--) {
        var key = keys[i];
        if (true) {
            if (methods && hasOwn(methods, key)) {
                warn$2("Method \"".concat(key, "\" has already been defined as a data property."), vm);
            }
        }
        if (props && hasOwn(props, key)) {
             true &&
                warn$2("The data property \"".concat(key, "\" is already declared as a prop. ") +
                    "Use prop default value instead.", vm);
        }
        else if (!isReserved(key)) {
            proxy(vm, "_data", key);
        }
    }
    // observe data
    var ob = observe(data);
    ob && ob.vmCount++;
}
function getData(data, vm) {
    // #7573 disable dep collection when invoking data getters
    pushTarget();
    try {
        return data.call(vm, vm);
    }
    catch (e) {
        handleError(e, vm, "data()");
        return {};
    }
    finally {
        popTarget();
    }
}
var computedWatcherOptions = { lazy: true };
function initComputed$1(vm, computed) {
    // $flow-disable-line
    var watchers = (vm._computedWatchers = Object.create(null));
    // computed properties are just getters during SSR
    var isSSR = isServerRendering();
    for (var key in computed) {
        var userDef = computed[key];
        var getter = isFunction(userDef) ? userDef : userDef.get;
        if ( true && getter == null) {
            warn$2("Getter is missing for computed property \"".concat(key, "\"."), vm);
        }
        if (!isSSR) {
            // create internal watcher for the computed property.
            watchers[key] = new Watcher(vm, getter || noop, noop, computedWatcherOptions);
        }
        // component-defined computed properties are already defined on the
        // component prototype. We only need to define computed properties defined
        // at instantiation here.
        if (!(key in vm)) {
            defineComputed(vm, key, userDef);
        }
        else if (true) {
            if (key in vm.$data) {
                warn$2("The computed property \"".concat(key, "\" is already defined in data."), vm);
            }
            else if (vm.$options.props && key in vm.$options.props) {
                warn$2("The computed property \"".concat(key, "\" is already defined as a prop."), vm);
            }
            else if (vm.$options.methods && key in vm.$options.methods) {
                warn$2("The computed property \"".concat(key, "\" is already defined as a method."), vm);
            }
        }
    }
}
function defineComputed(target, key, userDef) {
    var shouldCache = !isServerRendering();
    if (isFunction(userDef)) {
        sharedPropertyDefinition.get = shouldCache
            ? createComputedGetter(key)
            : createGetterInvoker(userDef);
        sharedPropertyDefinition.set = noop;
    }
    else {
        sharedPropertyDefinition.get = userDef.get
            ? shouldCache && userDef.cache !== false
                ? createComputedGetter(key)
                : createGetterInvoker(userDef.get)
            : noop;
        sharedPropertyDefinition.set = userDef.set || noop;
    }
    if ( true && sharedPropertyDefinition.set === noop) {
        sharedPropertyDefinition.set = function () {
            warn$2("Computed property \"".concat(key, "\" was assigned to but it has no setter."), this);
        };
    }
    Object.defineProperty(target, key, sharedPropertyDefinition);
}
function createComputedGetter(key) {
    return function computedGetter() {
        var watcher = this._computedWatchers && this._computedWatchers[key];
        if (watcher) {
            if (watcher.dirty) {
                watcher.evaluate();
            }
            if (Dep.target) {
                if ( true && Dep.target.onTrack) {
                    Dep.target.onTrack({
                        effect: Dep.target,
                        target: this,
                        type: "get" /* TrackOpTypes.GET */,
                        key: key
                    });
                }
                watcher.depend();
            }
            return watcher.value;
        }
    };
}
function createGetterInvoker(fn) {
    return function computedGetter() {
        return fn.call(this, this);
    };
}
function initMethods(vm, methods) {
    var props = vm.$options.props;
    for (var key in methods) {
        if (true) {
            if (typeof methods[key] !== 'function') {
                warn$2("Method \"".concat(key, "\" has type \"").concat(typeof methods[key], "\" in the component definition. ") +
                    "Did you reference the function correctly?", vm);
            }
            if (props && hasOwn(props, key)) {
                warn$2("Method \"".concat(key, "\" has already been defined as a prop."), vm);
            }
            if (key in vm && isReserved(key)) {
                warn$2("Method \"".concat(key, "\" conflicts with an existing Vue instance method. ") +
                    "Avoid defining component methods that start with _ or $.");
            }
        }
        vm[key] = typeof methods[key] !== 'function' ? noop : bind$1(methods[key], vm);
    }
}
function initWatch(vm, watch) {
    for (var key in watch) {
        var handler = watch[key];
        if (isArray(handler)) {
            for (var i = 0; i < handler.length; i++) {
                createWatcher(vm, key, handler[i]);
            }
        }
        else {
            createWatcher(vm, key, handler);
        }
    }
}
function createWatcher(vm, expOrFn, handler, options) {
    if (isPlainObject(handler)) {
        options = handler;
        handler = handler.handler;
    }
    if (typeof handler === 'string') {
        handler = vm[handler];
    }
    return vm.$watch(expOrFn, handler, options);
}
function stateMixin(Vue) {
    // flow somehow has problems with directly declared definition object
    // when using Object.defineProperty, so we have to procedurally build up
    // the object here.
    var dataDef = {};
    dataDef.get = function () {
        return this._data;
    };
    var propsDef = {};
    propsDef.get = function () {
        return this._props;
    };
    if (true) {
        dataDef.set = function () {
            warn$2('Avoid replacing instance root $data. ' +
                'Use nested data properties instead.', this);
        };
        propsDef.set = function () {
            warn$2("$props is readonly.", this);
        };
    }
    Object.defineProperty(Vue.prototype, '$data', dataDef);
    Object.defineProperty(Vue.prototype, '$props', propsDef);
    Vue.prototype.$set = set;
    Vue.prototype.$delete = del;
    Vue.prototype.$watch = function (expOrFn, cb, options) {
        var vm = this;
        if (isPlainObject(cb)) {
            return createWatcher(vm, expOrFn, cb, options);
        }
        options = options || {};
        options.user = true;
        var watcher = new Watcher(vm, expOrFn, cb, options);
        if (options.immediate) {
            var info = "callback for immediate watcher \"".concat(watcher.expression, "\"");
            pushTarget();
            invokeWithErrorHandling(cb, vm, [watcher.value], vm, info);
            popTarget();
        }
        return function unwatchFn() {
            watcher.teardown();
        };
    };
}

function initProvide(vm) {
    var provideOption = vm.$options.provide;
    if (provideOption) {
        var provided = isFunction(provideOption)
            ? provideOption.call(vm)
            : provideOption;
        if (!isObject(provided)) {
            return;
        }
        var source = resolveProvided(vm);
        // IE9 doesn't support Object.getOwnPropertyDescriptors so we have to
        // iterate the keys ourselves.
        var keys = hasSymbol ? Reflect.ownKeys(provided) : Object.keys(provided);
        for (var i = 0; i < keys.length; i++) {
            var key = keys[i];
            Object.defineProperty(source, key, Object.getOwnPropertyDescriptor(provided, key));
        }
    }
}
function initInjections(vm) {
    var result = resolveInject(vm.$options.inject, vm);
    if (result) {
        toggleObserving(false);
        Object.keys(result).forEach(function (key) {
            /* istanbul ignore else */
            if (true) {
                defineReactive(vm, key, result[key], function () {
                    warn$2("Avoid mutating an injected value directly since the changes will be " +
                        "overwritten whenever the provided component re-renders. " +
                        "injection being mutated: \"".concat(key, "\""), vm);
                });
            }
            else {}
        });
        toggleObserving(true);
    }
}
function resolveInject(inject, vm) {
    if (inject) {
        // inject is :any because flow is not smart enough to figure out cached
        var result = Object.create(null);
        var keys = hasSymbol ? Reflect.ownKeys(inject) : Object.keys(inject);
        for (var i = 0; i < keys.length; i++) {
            var key = keys[i];
            // #6574 in case the inject object is observed...
            if (key === '__ob__')
                continue;
            var provideKey = inject[key].from;
            if (provideKey in vm._provided) {
                result[key] = vm._provided[provideKey];
            }
            else if ('default' in inject[key]) {
                var provideDefault = inject[key].default;
                result[key] = isFunction(provideDefault)
                    ? provideDefault.call(vm)
                    : provideDefault;
            }
            else if (true) {
                warn$2("Injection \"".concat(key, "\" not found"), vm);
            }
        }
        return result;
    }
}

var uid = 0;
function initMixin$1(Vue) {
    Vue.prototype._init = function (options) {
        var vm = this;
        // a uid
        vm._uid = uid++;
        var startTag, endTag;
        /* istanbul ignore if */
        if ( true && config.performance && mark) {
            startTag = "vue-perf-start:".concat(vm._uid);
            endTag = "vue-perf-end:".concat(vm._uid);
            mark(startTag);
        }
        // a flag to mark this as a Vue instance without having to do instanceof
        // check
        vm._isVue = true;
        // avoid instances from being observed
        vm.__v_skip = true;
        // effect scope
        vm._scope = new EffectScope(true /* detached */);
        vm._scope._vm = true;
        // merge options
        if (options && options._isComponent) {
            // optimize internal component instantiation
            // since dynamic options merging is pretty slow, and none of the
            // internal component options needs special treatment.
            initInternalComponent(vm, options);
        }
        else {
            vm.$options = mergeOptions(resolveConstructorOptions(vm.constructor), options || {}, vm);
        }
        /* istanbul ignore else */
        if (true) {
            initProxy(vm);
        }
        else {}
        // expose real self
        vm._self = vm;
        initLifecycle(vm);
        initEvents(vm);
        initRender(vm);
        callHook$1(vm, 'beforeCreate', undefined, false /* setContext */);
        initInjections(vm); // resolve injections before data/props
        initState(vm);
        initProvide(vm); // resolve provide after data/props
        callHook$1(vm, 'created');
        /* istanbul ignore if */
        if ( true && config.performance && mark) {
            vm._name = formatComponentName(vm, false);
            mark(endTag);
            measure("vue ".concat(vm._name, " init"), startTag, endTag);
        }
        if (vm.$options.el) {
            vm.$mount(vm.$options.el);
        }
    };
}
function initInternalComponent(vm, options) {
    var opts = (vm.$options = Object.create(vm.constructor.options));
    // doing this because it's faster than dynamic enumeration.
    var parentVnode = options._parentVnode;
    opts.parent = options.parent;
    opts._parentVnode = parentVnode;
    var vnodeComponentOptions = parentVnode.componentOptions;
    opts.propsData = vnodeComponentOptions.propsData;
    opts._parentListeners = vnodeComponentOptions.listeners;
    opts._renderChildren = vnodeComponentOptions.children;
    opts._componentTag = vnodeComponentOptions.tag;
    if (options.render) {
        opts.render = options.render;
        opts.staticRenderFns = options.staticRenderFns;
    }
}
function resolveConstructorOptions(Ctor) {
    var options = Ctor.options;
    if (Ctor.super) {
        var superOptions = resolveConstructorOptions(Ctor.super);
        var cachedSuperOptions = Ctor.superOptions;
        if (superOptions !== cachedSuperOptions) {
            // super option changed,
            // need to resolve new options.
            Ctor.superOptions = superOptions;
            // check if there are any late-modified/attached options (#4976)
            var modifiedOptions = resolveModifiedOptions(Ctor);
            // update base extend options
            if (modifiedOptions) {
                extend(Ctor.extendOptions, modifiedOptions);
            }
            options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
            if (options.name) {
                options.components[options.name] = Ctor;
            }
        }
    }
    return options;
}
function resolveModifiedOptions(Ctor) {
    var modified;
    var latest = Ctor.options;
    var sealed = Ctor.sealedOptions;
    for (var key in latest) {
        if (latest[key] !== sealed[key]) {
            if (!modified)
                modified = {};
            modified[key] = latest[key];
        }
    }
    return modified;
}

function FunctionalRenderContext(data, props, children, parent, Ctor) {
    var _this = this;
    var options = Ctor.options;
    // ensure the createElement function in functional components
    // gets a unique context - this is necessary for correct named slot check
    var contextVm;
    if (hasOwn(parent, '_uid')) {
        contextVm = Object.create(parent);
        contextVm._original = parent;
    }
    else {
        // the context vm passed in is a functional context as well.
        // in this case we want to make sure we are able to get a hold to the
        // real context instance.
        contextVm = parent;
        // @ts-ignore
        parent = parent._original;
    }
    var isCompiled = isTrue(options._compiled);
    var needNormalization = !isCompiled;
    this.data = data;
    this.props = props;
    this.children = children;
    this.parent = parent;
    this.listeners = data.on || emptyObject;
    this.injections = resolveInject(options.inject, parent);
    this.slots = function () {
        if (!_this.$slots) {
            normalizeScopedSlots(parent, data.scopedSlots, (_this.$slots = resolveSlots(children, parent)));
        }
        return _this.$slots;
    };
    Object.defineProperty(this, 'scopedSlots', {
        enumerable: true,
        get: function () {
            return normalizeScopedSlots(parent, data.scopedSlots, this.slots());
        }
    });
    // support for compiled functional template
    if (isCompiled) {
        // exposing $options for renderStatic()
        this.$options = options;
        // pre-resolve slots for renderSlot()
        this.$slots = this.slots();
        this.$scopedSlots = normalizeScopedSlots(parent, data.scopedSlots, this.$slots);
    }
    if (options._scopeId) {
        this._c = function (a, b, c, d) {
            var vnode = createElement$1(contextVm, a, b, c, d, needNormalization);
            if (vnode && !isArray(vnode)) {
                vnode.fnScopeId = options._scopeId;
                vnode.fnContext = parent;
            }
            return vnode;
        };
    }
    else {
        this._c = function (a, b, c, d) {
            return createElement$1(contextVm, a, b, c, d, needNormalization);
        };
    }
}
installRenderHelpers(FunctionalRenderContext.prototype);
function createFunctionalComponent(Ctor, propsData, data, contextVm, children) {
    var options = Ctor.options;
    var props = {};
    var propOptions = options.props;
    if (isDef(propOptions)) {
        for (var key in propOptions) {
            props[key] = validateProp(key, propOptions, propsData || emptyObject);
        }
    }
    else {
        if (isDef(data.attrs))
            mergeProps(props, data.attrs);
        if (isDef(data.props))
            mergeProps(props, data.props);
    }
    var renderContext = new FunctionalRenderContext(data, props, children, contextVm, Ctor);
    var vnode = options.render.call(null, renderContext._c, renderContext);
    if (vnode instanceof VNode) {
        return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext);
    }
    else if (isArray(vnode)) {
        var vnodes = normalizeChildren(vnode) || [];
        var res = new Array(vnodes.length);
        for (var i = 0; i < vnodes.length; i++) {
            res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
        }
        return res;
    }
}
function cloneAndMarkFunctionalResult(vnode, data, contextVm, options, renderContext) {
    // #7817 clone node before setting fnContext, otherwise if the node is reused
    // (e.g. it was from a cached normal slot) the fnContext causes named slots
    // that should not be matched to match.
    var clone = cloneVNode(vnode);
    clone.fnContext = contextVm;
    clone.fnOptions = options;
    if (true) {
        (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext =
            renderContext;
    }
    if (data.slot) {
        (clone.data || (clone.data = {})).slot = data.slot;
    }
    return clone;
}
function mergeProps(to, from) {
    for (var key in from) {
        to[camelize(key)] = from[key];
    }
}

function getComponentName(options) {
    return options.name || options.__name || options._componentTag;
}
// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
    init: function (vnode, hydrating) {
        if (vnode.componentInstance &&
            !vnode.componentInstance._isDestroyed &&
            vnode.data.keepAlive) {
            // kept-alive components, treat as a patch
            var mountedNode = vnode; // work around flow
            componentVNodeHooks.prepatch(mountedNode, mountedNode);
        }
        else {
            var child = (vnode.componentInstance = createComponentInstanceForVnode(vnode, activeInstance));
            child.$mount(hydrating ? vnode.elm : undefined, hydrating);
        }
    },
    prepatch: function (oldVnode, vnode) {
        var options = vnode.componentOptions;
        var child = (vnode.componentInstance = oldVnode.componentInstance);
        updateChildComponent(child, options.propsData, // updated props
        options.listeners, // updated listeners
        vnode, // new parent vnode
        options.children // new children
        );
    },
    insert: function (vnode) {
        var context = vnode.context, componentInstance = vnode.componentInstance;
        if (!componentInstance._isMounted) {
            componentInstance._isMounted = true;
            callHook$1(componentInstance, 'mounted');
        }
        if (vnode.data.keepAlive) {
            if (context._isMounted) {
                // vue-router#1212
                // During updates, a kept-alive component's child components may
                // change, so directly walking the tree here may call activated hooks
                // on incorrect children. Instead we push them into a queue which will
                // be processed after the whole patch process ended.
                queueActivatedComponent(componentInstance);
            }
            else {
                activateChildComponent(componentInstance, true /* direct */);
            }
        }
    },
    destroy: function (vnode) {
        var componentInstance = vnode.componentInstance;
        if (!componentInstance._isDestroyed) {
            if (!vnode.data.keepAlive) {
                componentInstance.$destroy();
            }
            else {
                deactivateChildComponent(componentInstance, true /* direct */);
            }
        }
    }
};
var hooksToMerge = Object.keys(componentVNodeHooks);
function createComponent(Ctor, data, context, children, tag) {
    if (isUndef(Ctor)) {
        return;
    }
    var baseCtor = context.$options._base;
    // plain options object: turn it into a constructor
    if (isObject(Ctor)) {
        Ctor = baseCtor.extend(Ctor);
    }
    // if at this stage it's not a constructor or an async component factory,
    // reject.
    if (typeof Ctor !== 'function') {
        if (true) {
            warn$2("Invalid Component definition: ".concat(String(Ctor)), context);
        }
        return;
    }
    // async component
    var asyncFactory;
    // @ts-expect-error
    if (isUndef(Ctor.cid)) {
        asyncFactory = Ctor;
        Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
        if (Ctor === undefined) {
            // return a placeholder node for async component, which is rendered
            // as a comment node but preserves all the raw information for the node.
            // the information will be used for async server-rendering and hydration.
            return createAsyncPlaceholder(asyncFactory, data, context, children, tag);
        }
    }
    data = data || {};
    // resolve constructor options in case global mixins are applied after
    // component constructor creation
    resolveConstructorOptions(Ctor);
    // transform component v-model data into props & events
    if (isDef(data.model)) {
        // @ts-expect-error
        transformModel(Ctor.options, data);
    }
    // extract props
    // @ts-expect-error
    var propsData = extractPropsFromVNodeData(data, Ctor, tag);
    // functional component
    // @ts-expect-error
    if (isTrue(Ctor.options.functional)) {
        return createFunctionalComponent(Ctor, propsData, data, context, children);
    }
    // extract listeners, since these needs to be treated as
    // child component listeners instead of DOM listeners
    var listeners = data.on;
    // replace with listeners with .native modifier
    // so it gets processed during parent component patch.
    data.on = data.nativeOn;
    // @ts-expect-error
    if (isTrue(Ctor.options.abstract)) {
        // abstract components do not keep anything
        // other than props & listeners & slot
        // work around flow
        var slot = data.slot;
        data = {};
        if (slot) {
            data.slot = slot;
        }
    }
    // install component management hooks onto the placeholder node
    installComponentHooks(data);
    // return a placeholder vnode
    // @ts-expect-error
    var name = getComponentName(Ctor.options) || tag;
    var vnode = new VNode(
    // @ts-expect-error
    "vue-component-".concat(Ctor.cid).concat(name ? "-".concat(name) : ''), data, undefined, undefined, undefined, context, 
    // @ts-expect-error
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children }, asyncFactory);
    return vnode;
}
function createComponentInstanceForVnode(
// we know it's MountedComponentVNode but flow doesn't
vnode, 
// activeInstance in lifecycle state
parent) {
    var options = {
        _isComponent: true,
        _parentVnode: vnode,
        parent: parent
    };
    // check inline-template render functions
    var inlineTemplate = vnode.data.inlineTemplate;
    if (isDef(inlineTemplate)) {
        options.render = inlineTemplate.render;
        options.staticRenderFns = inlineTemplate.staticRenderFns;
    }
    return new vnode.componentOptions.Ctor(options);
}
function installComponentHooks(data) {
    var hooks = data.hook || (data.hook = {});
    for (var i = 0; i < hooksToMerge.length; i++) {
        var key = hooksToMerge[i];
        var existing = hooks[key];
        var toMerge = componentVNodeHooks[key];
        // @ts-expect-error
        if (existing !== toMerge && !(existing && existing._merged)) {
            hooks[key] = existing ? mergeHook(toMerge, existing) : toMerge;
        }
    }
}
function mergeHook(f1, f2) {
    var merged = function (a, b) {
        // flow complains about extra args which is why we use any
        f1(a, b);
        f2(a, b);
    };
    merged._merged = true;
    return merged;
}
// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel(options, data) {
    var prop = (options.model && options.model.prop) || 'value';
    var event = (options.model && options.model.event) || 'input';
    (data.attrs || (data.attrs = {}))[prop] = data.model.value;
    var on = data.on || (data.on = {});
    var existing = on[event];
    var callback = data.model.callback;
    if (isDef(existing)) {
        if (isArray(existing)
            ? existing.indexOf(callback) === -1
            : existing !== callback) {
            on[event] = [callback].concat(existing);
        }
    }
    else {
        on[event] = callback;
    }
}

var warn$2 = noop;
var tip = noop;
var generateComponentTrace; // work around flow check
var formatComponentName;
if (true) {
    var hasConsole_1 = typeof console !== 'undefined';
    var classifyRE_1 = /(?:^|[-_])(\w)/g;
    var classify_1 = function (str) {
        return str.replace(classifyRE_1, function (c) { return c.toUpperCase(); }).replace(/[-_]/g, '');
    };
    warn$2 = function (msg, vm) {
        if (vm === void 0) { vm = currentInstance; }
        var trace = vm ? generateComponentTrace(vm) : '';
        if (config.warnHandler) {
            config.warnHandler.call(null, msg, vm, trace);
        }
        else if (hasConsole_1 && !config.silent) {
            console.error("[Vue warn]: ".concat(msg).concat(trace));
        }
    };
    tip = function (msg, vm) {
        if (hasConsole_1 && !config.silent) {
            console.warn("[Vue tip]: ".concat(msg) + (vm ? generateComponentTrace(vm) : ''));
        }
    };
    formatComponentName = function (vm, includeFile) {
        if (vm.$root === vm) {
            return '<Root>';
        }
        var options = isFunction(vm) && vm.cid != null
            ? vm.options
            : vm._isVue
                ? vm.$options || vm.constructor.options
                : vm;
        var name = getComponentName(options);
        var file = options.__file;
        if (!name && file) {
            var match = file.match(/([^/\\]+)\.vue$/);
            name = match && match[1];
        }
        return ((name ? "<".concat(classify_1(name), ">") : "<Anonymous>") +
            (file && includeFile !== false ? " at ".concat(file) : ''));
    };
    var repeat_1 = function (str, n) {
        var res = '';
        while (n) {
            if (n % 2 === 1)
                res += str;
            if (n > 1)
                str += str;
            n >>= 1;
        }
        return res;
    };
    generateComponentTrace = function (vm) {
        if (vm._isVue && vm.$parent) {
            var tree = [];
            var currentRecursiveSequence = 0;
            while (vm) {
                if (tree.length > 0) {
                    var last = tree[tree.length - 1];
                    if (last.constructor === vm.constructor) {
                        currentRecursiveSequence++;
                        vm = vm.$parent;
                        continue;
                    }
                    else if (currentRecursiveSequence > 0) {
                        tree[tree.length - 1] = [last, currentRecursiveSequence];
                        currentRecursiveSequence = 0;
                    }
                }
                tree.push(vm);
                vm = vm.$parent;
            }
            return ('\n\nfound in\n\n' +
                tree
                    .map(function (vm, i) {
                    return "".concat(i === 0 ? '---> ' : repeat_1(' ', 5 + i * 2)).concat(isArray(vm)
                        ? "".concat(formatComponentName(vm[0]), "... (").concat(vm[1], " recursive calls)")
                        : formatComponentName(vm));
                })
                    .join('\n'));
        }
        else {
            return "\n\n(found in ".concat(formatComponentName(vm), ")");
        }
    };
}

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;
/**
 * Options with restrictions
 */
if (true) {
    strats.el = strats.propsData = function (parent, child, vm, key) {
        if (!vm) {
            warn$2("option \"".concat(key, "\" can only be used during instance ") +
                'creation with the `new` keyword.');
        }
        return defaultStrat(parent, child);
    };
}
/**
 * Helper that recursively merges two data objects together.
 */
function mergeData(to, from, recursive) {
    if (recursive === void 0) { recursive = true; }
    if (!from)
        return to;
    var key, toVal, fromVal;
    var keys = hasSymbol
        ? Reflect.ownKeys(from)
        : Object.keys(from);
    for (var i = 0; i < keys.length; i++) {
        key = keys[i];
        // in case the object is already observed...
        if (key === '__ob__')
            continue;
        toVal = to[key];
        fromVal = from[key];
        if (!recursive || !hasOwn(to, key)) {
            set(to, key, fromVal);
        }
        else if (toVal !== fromVal &&
            isPlainObject(toVal) &&
            isPlainObject(fromVal)) {
            mergeData(toVal, fromVal);
        }
    }
    return to;
}
/**
 * Data
 */
function mergeDataOrFn(parentVal, childVal, vm) {
    if (!vm) {
        // in a Vue.extend merge, both should be functions
        if (!childVal) {
            return parentVal;
        }
        if (!parentVal) {
            return childVal;
        }
        // when parentVal & childVal are both present,
        // we need to return a function that returns the
        // merged result of both functions... no need to
        // check if parentVal is a function here because
        // it has to be a function to pass previous merges.
        return function mergedDataFn() {
            return mergeData(isFunction(childVal) ? childVal.call(this, this) : childVal, isFunction(parentVal) ? parentVal.call(this, this) : parentVal);
        };
    }
    else {
        return function mergedInstanceDataFn() {
            // instance merge
            var instanceData = isFunction(childVal)
                ? childVal.call(vm, vm)
                : childVal;
            var defaultData = isFunction(parentVal)
                ? parentVal.call(vm, vm)
                : parentVal;
            if (instanceData) {
                return mergeData(instanceData, defaultData);
            }
            else {
                return defaultData;
            }
        };
    }
}
strats.data = function (parentVal, childVal, vm) {
    if (!vm) {
        if (childVal && typeof childVal !== 'function') {
             true &&
                warn$2('The "data" option should be a function ' +
                    'that returns a per-instance value in component ' +
                    'definitions.', vm);
            return parentVal;
        }
        return mergeDataOrFn(parentVal, childVal);
    }
    return mergeDataOrFn(parentVal, childVal, vm);
};
/**
 * Hooks and props are merged as arrays.
 */
function mergeLifecycleHook(parentVal, childVal) {
    var res = childVal
        ? parentVal
            ? parentVal.concat(childVal)
            : isArray(childVal)
                ? childVal
                : [childVal]
        : parentVal;
    return res ? dedupeHooks(res) : res;
}
function dedupeHooks(hooks) {
    var res = [];
    for (var i = 0; i < hooks.length; i++) {
        if (res.indexOf(hooks[i]) === -1) {
            res.push(hooks[i]);
        }
    }
    return res;
}
LIFECYCLE_HOOKS.forEach(function (hook) {
    strats[hook] = mergeLifecycleHook;
});
/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets(parentVal, childVal, vm, key) {
    var res = Object.create(parentVal || null);
    if (childVal) {
         true && assertObjectType(key, childVal, vm);
        return extend(res, childVal);
    }
    else {
        return res;
    }
}
ASSET_TYPES.forEach(function (type) {
    strats[type + 's'] = mergeAssets;
});
/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (parentVal, childVal, vm, key) {
    // work around Firefox's Object.prototype.watch...
    //@ts-expect-error work around
    if (parentVal === nativeWatch)
        parentVal = undefined;
    //@ts-expect-error work around
    if (childVal === nativeWatch)
        childVal = undefined;
    /* istanbul ignore if */
    if (!childVal)
        return Object.create(parentVal || null);
    if (true) {
        assertObjectType(key, childVal, vm);
    }
    if (!parentVal)
        return childVal;
    var ret = {};
    extend(ret, parentVal);
    for (var key_1 in childVal) {
        var parent_1 = ret[key_1];
        var child = childVal[key_1];
        if (parent_1 && !isArray(parent_1)) {
            parent_1 = [parent_1];
        }
        ret[key_1] = parent_1 ? parent_1.concat(child) : isArray(child) ? child : [child];
    }
    return ret;
};
/**
 * Other object hashes.
 */
strats.props =
    strats.methods =
        strats.inject =
            strats.computed =
                function (parentVal, childVal, vm, key) {
                    if (childVal && "development" !== 'production') {
                        assertObjectType(key, childVal, vm);
                    }
                    if (!parentVal)
                        return childVal;
                    var ret = Object.create(null);
                    extend(ret, parentVal);
                    if (childVal)
                        extend(ret, childVal);
                    return ret;
                };
strats.provide = function (parentVal, childVal) {
    if (!parentVal)
        return childVal;
    return function () {
        var ret = Object.create(null);
        mergeData(ret, isFunction(parentVal) ? parentVal.call(this) : parentVal);
        if (childVal) {
            mergeData(ret, isFunction(childVal) ? childVal.call(this) : childVal, false // non-recursive
            );
        }
        return ret;
    };
};
/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
    return childVal === undefined ? parentVal : childVal;
};
/**
 * Validate component names
 */
function checkComponents(options) {
    for (var key in options.components) {
        validateComponentName(key);
    }
}
function validateComponentName(name) {
    if (!new RegExp("^[a-zA-Z][\\-\\.0-9_".concat(unicodeRegExp.source, "]*$")).test(name)) {
        warn$2('Invalid component name: "' +
            name +
            '". Component names ' +
            'should conform to valid custom element name in html5 specification.');
    }
    if (isBuiltInTag(name) || config.isReservedTag(name)) {
        warn$2('Do not use built-in or reserved HTML elements as component ' +
            'id: ' +
            name);
    }
}
/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps(options, vm) {
    var props = options.props;
    if (!props)
        return;
    var res = {};
    var i, val, name;
    if (isArray(props)) {
        i = props.length;
        while (i--) {
            val = props[i];
            if (typeof val === 'string') {
                name = camelize(val);
                res[name] = { type: null };
            }
            else if (true) {
                warn$2('props must be strings when using array syntax.');
            }
        }
    }
    else if (isPlainObject(props)) {
        for (var key in props) {
            val = props[key];
            name = camelize(key);
            res[name] = isPlainObject(val) ? val : { type: val };
        }
    }
    else if (true) {
        warn$2("Invalid value for option \"props\": expected an Array or an Object, " +
            "but got ".concat(toRawType(props), "."), vm);
    }
    options.props = res;
}
/**
 * Normalize all injections into Object-based format
 */
function normalizeInject(options, vm) {
    var inject = options.inject;
    if (!inject)
        return;
    var normalized = (options.inject = {});
    if (isArray(inject)) {
        for (var i = 0; i < inject.length; i++) {
            normalized[inject[i]] = { from: inject[i] };
        }
    }
    else if (isPlainObject(inject)) {
        for (var key in inject) {
            var val = inject[key];
            normalized[key] = isPlainObject(val)
                ? extend({ from: key }, val)
                : { from: val };
        }
    }
    else if (true) {
        warn$2("Invalid value for option \"inject\": expected an Array or an Object, " +
            "but got ".concat(toRawType(inject), "."), vm);
    }
}
/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives$1(options) {
    var dirs = options.directives;
    if (dirs) {
        for (var key in dirs) {
            var def = dirs[key];
            if (isFunction(def)) {
                dirs[key] = { bind: def, update: def };
            }
        }
    }
}
function assertObjectType(name, value, vm) {
    if (!isPlainObject(value)) {
        warn$2("Invalid value for option \"".concat(name, "\": expected an Object, ") +
            "but got ".concat(toRawType(value), "."), vm);
    }
}
/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions(parent, child, vm) {
    if (true) {
        checkComponents(child);
    }
    if (isFunction(child)) {
        // @ts-expect-error
        child = child.options;
    }
    normalizeProps(child, vm);
    normalizeInject(child, vm);
    normalizeDirectives$1(child);
    // Apply extends and mixins on the child options,
    // but only if it is a raw options object that isn't
    // the result of another mergeOptions call.
    // Only merged options has the _base property.
    if (!child._base) {
        if (child.extends) {
            parent = mergeOptions(parent, child.extends, vm);
        }
        if (child.mixins) {
            for (var i = 0, l = child.mixins.length; i < l; i++) {
                parent = mergeOptions(parent, child.mixins[i], vm);
            }
        }
    }
    var options = {};
    var key;
    for (key in parent) {
        mergeField(key);
    }
    for (key in child) {
        if (!hasOwn(parent, key)) {
            mergeField(key);
        }
    }
    function mergeField(key) {
        var strat = strats[key] || defaultStrat;
        options[key] = strat(parent[key], child[key], vm, key);
    }
    return options;
}
/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset(options, type, id, warnMissing) {
    /* istanbul ignore if */
    if (typeof id !== 'string') {
        return;
    }
    var assets = options[type];
    // check local registration variations first
    if (hasOwn(assets, id))
        return assets[id];
    var camelizedId = camelize(id);
    if (hasOwn(assets, camelizedId))
        return assets[camelizedId];
    var PascalCaseId = capitalize(camelizedId);
    if (hasOwn(assets, PascalCaseId))
        return assets[PascalCaseId];
    // fallback to prototype chain
    var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
    if ( true && warnMissing && !res) {
        warn$2('Failed to resolve ' + type.slice(0, -1) + ': ' + id);
    }
    return res;
}

function validateProp(key, propOptions, propsData, vm) {
    var prop = propOptions[key];
    var absent = !hasOwn(propsData, key);
    var value = propsData[key];
    // boolean casting
    var booleanIndex = getTypeIndex(Boolean, prop.type);
    if (booleanIndex > -1) {
        if (absent && !hasOwn(prop, 'default')) {
            value = false;
        }
        else if (value === '' || value === hyphenate(key)) {
            // only cast empty string / same name to boolean if
            // boolean has higher priority
            var stringIndex = getTypeIndex(String, prop.type);
            if (stringIndex < 0 || booleanIndex < stringIndex) {
                value = true;
            }
        }
    }
    // check default value
    if (value === undefined) {
        value = getPropDefaultValue(vm, prop, key);
        // since the default value is a fresh copy,
        // make sure to observe it.
        var prevShouldObserve = shouldObserve;
        toggleObserving(true);
        observe(value);
        toggleObserving(prevShouldObserve);
    }
    if (true) {
        assertProp(prop, key, value, vm, absent);
    }
    return value;
}
/**
 * Get the default value of a prop.
 */
function getPropDefaultValue(vm, prop, key) {
    // no default, return undefined
    if (!hasOwn(prop, 'default')) {
        return undefined;
    }
    var def = prop.default;
    // warn against non-factory defaults for Object & Array
    if ( true && isObject(def)) {
        warn$2('Invalid default value for prop "' +
            key +
            '": ' +
            'Props with type Object/Array must use a factory function ' +
            'to return the default value.', vm);
    }
    // the raw prop value was also undefined from previous render,
    // return previous default value to avoid unnecessary watcher trigger
    if (vm &&
        vm.$options.propsData &&
        vm.$options.propsData[key] === undefined &&
        vm._props[key] !== undefined) {
        return vm._props[key];
    }
    // call factory function for non-Function types
    // a value is Function if its prototype is function even across different execution context
    return isFunction(def) && getType(prop.type) !== 'Function'
        ? def.call(vm)
        : def;
}
/**
 * Assert whether a prop is valid.
 */
function assertProp(prop, name, value, vm, absent) {
    if (prop.required && absent) {
        warn$2('Missing required prop: "' + name + '"', vm);
        return;
    }
    if (value == null && !prop.required) {
        return;
    }
    var type = prop.type;
    var valid = !type || type === true;
    var expectedTypes = [];
    if (type) {
        if (!isArray(type)) {
            type = [type];
        }
        for (var i = 0; i < type.length && !valid; i++) {
            var assertedType = assertType(value, type[i], vm);
            expectedTypes.push(assertedType.expectedType || '');
            valid = assertedType.valid;
        }
    }
    var haveExpectedTypes = expectedTypes.some(function (t) { return t; });
    if (!valid && haveExpectedTypes) {
        warn$2(getInvalidTypeMessage(name, value, expectedTypes), vm);
        return;
    }
    var validator = prop.validator;
    if (validator) {
        if (!validator(value)) {
            warn$2('Invalid prop: custom validator check failed for prop "' + name + '".', vm);
        }
    }
}
var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol|BigInt)$/;
function assertType(value, type, vm) {
    var valid;
    var expectedType = getType(type);
    if (simpleCheckRE.test(expectedType)) {
        var t = typeof value;
        valid = t === expectedType.toLowerCase();
        // for primitive wrapper objects
        if (!valid && t === 'object') {
            valid = value instanceof type;
        }
    }
    else if (expectedType === 'Object') {
        valid = isPlainObject(value);
    }
    else if (expectedType === 'Array') {
        valid = isArray(value);
    }
    else {
        try {
            valid = value instanceof type;
        }
        catch (e) {
            warn$2('Invalid prop type: "' + String(type) + '" is not a constructor', vm);
            valid = false;
        }
    }
    return {
        valid: valid,
        expectedType: expectedType
    };
}
var functionTypeCheckRE = /^\s*function (\w+)/;
/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType(fn) {
    var match = fn && fn.toString().match(functionTypeCheckRE);
    return match ? match[1] : '';
}
function isSameType(a, b) {
    return getType(a) === getType(b);
}
function getTypeIndex(type, expectedTypes) {
    if (!isArray(expectedTypes)) {
        return isSameType(expectedTypes, type) ? 0 : -1;
    }
    for (var i = 0, len = expectedTypes.length; i < len; i++) {
        if (isSameType(expectedTypes[i], type)) {
            return i;
        }
    }
    return -1;
}
function getInvalidTypeMessage(name, value, expectedTypes) {
    var message = "Invalid prop: type check failed for prop \"".concat(name, "\".") +
        " Expected ".concat(expectedTypes.map(capitalize).join(', '));
    var expectedType = expectedTypes[0];
    var receivedType = toRawType(value);
    // check if we need to specify expected value
    if (expectedTypes.length === 1 &&
        isExplicable(expectedType) &&
        isExplicable(typeof value) &&
        !isBoolean(expectedType, receivedType)) {
        message += " with value ".concat(styleValue(value, expectedType));
    }
    message += ", got ".concat(receivedType, " ");
    // check if we need to specify received value
    if (isExplicable(receivedType)) {
        message += "with value ".concat(styleValue(value, receivedType), ".");
    }
    return message;
}
function styleValue(value, type) {
    if (type === 'String') {
        return "\"".concat(value, "\"");
    }
    else if (type === 'Number') {
        return "".concat(Number(value));
    }
    else {
        return "".concat(value);
    }
}
var EXPLICABLE_TYPES = ['string', 'number', 'boolean'];
function isExplicable(value) {
    return EXPLICABLE_TYPES.some(function (elem) { return value.toLowerCase() === elem; });
}
function isBoolean() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; });
}

function Vue(options) {
    if ( true && !(this instanceof Vue)) {
        warn$2('Vue is a constructor and should be called with the `new` keyword');
    }
    this._init(options);
}
//@ts-expect-error Vue has function type
initMixin$1(Vue);
//@ts-expect-error Vue has function type
stateMixin(Vue);
//@ts-expect-error Vue has function type
eventsMixin(Vue);
//@ts-expect-error Vue has function type
lifecycleMixin(Vue);
//@ts-expect-error Vue has function type
renderMixin(Vue);

function initUse(Vue) {
    Vue.use = function (plugin) {
        var installedPlugins = this._installedPlugins || (this._installedPlugins = []);
        if (installedPlugins.indexOf(plugin) > -1) {
            return this;
        }
        // additional parameters
        var args = toArray(arguments, 1);
        args.unshift(this);
        if (isFunction(plugin.install)) {
            plugin.install.apply(plugin, args);
        }
        else if (isFunction(plugin)) {
            plugin.apply(null, args);
        }
        installedPlugins.push(plugin);
        return this;
    };
}

function initMixin(Vue) {
    Vue.mixin = function (mixin) {
        this.options = mergeOptions(this.options, mixin);
        return this;
    };
}

function initExtend(Vue) {
    /**
     * Each instance constructor, including Vue, has a unique
     * cid. This enables us to create wrapped "child
     * constructors" for prototypal inheritance and cache them.
     */
    Vue.cid = 0;
    var cid = 1;
    /**
     * Class inheritance
     */
    Vue.extend = function (extendOptions) {
        extendOptions = extendOptions || {};
        var Super = this;
        var SuperId = Super.cid;
        var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
        if (cachedCtors[SuperId]) {
            return cachedCtors[SuperId];
        }
        var name = getComponentName(extendOptions) || getComponentName(Super.options);
        if ( true && name) {
            validateComponentName(name);
        }
        var Sub = function VueComponent(options) {
            this._init(options);
        };
        Sub.prototype = Object.create(Super.prototype);
        Sub.prototype.constructor = Sub;
        Sub.cid = cid++;
        Sub.options = mergeOptions(Super.options, extendOptions);
        Sub['super'] = Super;
        // For props and computed properties, we define the proxy getters on
        // the Vue instances at extension time, on the extended prototype. This
        // avoids Object.defineProperty calls for each instance created.
        if (Sub.options.props) {
            initProps(Sub);
        }
        if (Sub.options.computed) {
            initComputed(Sub);
        }
        // allow further extension/mixin/plugin usage
        Sub.extend = Super.extend;
        Sub.mixin = Super.mixin;
        Sub.use = Super.use;
        // create asset registers, so extended classes
        // can have their private assets too.
        ASSET_TYPES.forEach(function (type) {
            Sub[type] = Super[type];
        });
        // enable recursive self-lookup
        if (name) {
            Sub.options.components[name] = Sub;
        }
        // keep a reference to the super options at extension time.
        // later at instantiation we can check if Super's options have
        // been updated.
        Sub.superOptions = Super.options;
        Sub.extendOptions = extendOptions;
        Sub.sealedOptions = extend({}, Sub.options);
        // cache constructor
        cachedCtors[SuperId] = Sub;
        return Sub;
    };
}
function initProps(Comp) {
    var props = Comp.options.props;
    for (var key in props) {
        proxy(Comp.prototype, "_props", key);
    }
}
function initComputed(Comp) {
    var computed = Comp.options.computed;
    for (var key in computed) {
        defineComputed(Comp.prototype, key, computed[key]);
    }
}

function initAssetRegisters(Vue) {
    /**
     * Create asset registration methods.
     */
    ASSET_TYPES.forEach(function (type) {
        // @ts-expect-error function is not exact same type
        Vue[type] = function (id, definition) {
            if (!definition) {
                return this.options[type + 's'][id];
            }
            else {
                /* istanbul ignore if */
                if ( true && type === 'component') {
                    validateComponentName(id);
                }
                if (type === 'component' && isPlainObject(definition)) {
                    // @ts-expect-error
                    definition.name = definition.name || id;
                    definition = this.options._base.extend(definition);
                }
                if (type === 'directive' && isFunction(definition)) {
                    definition = { bind: definition, update: definition };
                }
                this.options[type + 's'][id] = definition;
                return definition;
            }
        };
    });
}

function _getComponentName(opts) {
    return opts && (getComponentName(opts.Ctor.options) || opts.tag);
}
function matches(pattern, name) {
    if (isArray(pattern)) {
        return pattern.indexOf(name) > -1;
    }
    else if (typeof pattern === 'string') {
        return pattern.split(',').indexOf(name) > -1;
    }
    else if (isRegExp(pattern)) {
        return pattern.test(name);
    }
    /* istanbul ignore next */
    return false;
}
function pruneCache(keepAliveInstance, filter) {
    var cache = keepAliveInstance.cache, keys = keepAliveInstance.keys, _vnode = keepAliveInstance._vnode;
    for (var key in cache) {
        var entry = cache[key];
        if (entry) {
            var name_1 = entry.name;
            if (name_1 && !filter(name_1)) {
                pruneCacheEntry(cache, key, keys, _vnode);
            }
        }
    }
}
function pruneCacheEntry(cache, key, keys, current) {
    var entry = cache[key];
    if (entry && (!current || entry.tag !== current.tag)) {
        // @ts-expect-error can be undefined
        entry.componentInstance.$destroy();
    }
    cache[key] = null;
    remove$2(keys, key);
}
var patternTypes = [String, RegExp, Array];
// TODO defineComponent
var KeepAlive = {
    name: 'keep-alive',
    abstract: true,
    props: {
        include: patternTypes,
        exclude: patternTypes,
        max: [String, Number]
    },
    methods: {
        cacheVNode: function () {
            var _a = this, cache = _a.cache, keys = _a.keys, vnodeToCache = _a.vnodeToCache, keyToCache = _a.keyToCache;
            if (vnodeToCache) {
                var tag = vnodeToCache.tag, componentInstance = vnodeToCache.componentInstance, componentOptions = vnodeToCache.componentOptions;
                cache[keyToCache] = {
                    name: _getComponentName(componentOptions),
                    tag: tag,
                    componentInstance: componentInstance
                };
                keys.push(keyToCache);
                // prune oldest entry
                if (this.max && keys.length > parseInt(this.max)) {
                    pruneCacheEntry(cache, keys[0], keys, this._vnode);
                }
                this.vnodeToCache = null;
            }
        }
    },
    created: function () {
        this.cache = Object.create(null);
        this.keys = [];
    },
    destroyed: function () {
        for (var key in this.cache) {
            pruneCacheEntry(this.cache, key, this.keys);
        }
    },
    mounted: function () {
        var _this = this;
        this.cacheVNode();
        this.$watch('include', function (val) {
            pruneCache(_this, function (name) { return matches(val, name); });
        });
        this.$watch('exclude', function (val) {
            pruneCache(_this, function (name) { return !matches(val, name); });
        });
    },
    updated: function () {
        this.cacheVNode();
    },
    render: function () {
        var slot = this.$slots.default;
        var vnode = getFirstComponentChild(slot);
        var componentOptions = vnode && vnode.componentOptions;
        if (componentOptions) {
            // check pattern
            var name_2 = _getComponentName(componentOptions);
            var _a = this, include = _a.include, exclude = _a.exclude;
            if (
            // not included
            (include && (!name_2 || !matches(include, name_2))) ||
                // excluded
                (exclude && name_2 && matches(exclude, name_2))) {
                return vnode;
            }
            var _b = this, cache = _b.cache, keys = _b.keys;
            var key = vnode.key == null
                ? // same constructor may get registered as different local components
                    // so cid alone is not enough (#3269)
                    componentOptions.Ctor.cid +
                        (componentOptions.tag ? "::".concat(componentOptions.tag) : '')
                : vnode.key;
            if (cache[key]) {
                vnode.componentInstance = cache[key].componentInstance;
                // make current key freshest
                remove$2(keys, key);
                keys.push(key);
            }
            else {
                // delay setting the cache until update
                this.vnodeToCache = vnode;
                this.keyToCache = key;
            }
            // @ts-expect-error can vnode.data can be undefined
            vnode.data.keepAlive = true;
        }
        return vnode || (slot && slot[0]);
    }
};

var builtInComponents = {
    KeepAlive: KeepAlive
};

function initGlobalAPI(Vue) {
    // config
    var configDef = {};
    configDef.get = function () { return config; };
    if (true) {
        configDef.set = function () {
            warn$2('Do not replace the Vue.config object, set individual fields instead.');
        };
    }
    Object.defineProperty(Vue, 'config', configDef);
    // exposed util methods.
    // NOTE: these are not considered part of the public API - avoid relying on
    // them unless you are aware of the risk.
    Vue.util = {
        warn: warn$2,
        extend: extend,
        mergeOptions: mergeOptions,
        defineReactive: defineReactive
    };
    Vue.set = set;
    Vue.delete = del;
    Vue.nextTick = nextTick;
    // 2.6 explicit observable API
    Vue.observable = function (obj) {
        observe(obj);
        return obj;
    };
    Vue.options = Object.create(null);
    ASSET_TYPES.forEach(function (type) {
        Vue.options[type + 's'] = Object.create(null);
    });
    // this is used to identify the "base" constructor to extend all plain-object
    // components with in Weex's multi-instance scenarios.
    Vue.options._base = Vue;
    extend(Vue.options.components, builtInComponents);
    initUse(Vue);
    initMixin(Vue);
    initExtend(Vue);
    initAssetRegisters(Vue);
}

initGlobalAPI(Vue);
Object.defineProperty(Vue.prototype, '$isServer', {
    get: isServerRendering
});
Object.defineProperty(Vue.prototype, '$ssrContext', {
    get: function () {
        /* istanbul ignore next */
        return this.$vnode && this.$vnode.ssrContext;
    }
});
// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
    value: FunctionalRenderContext
});
Vue.version = version;

// these are reserved for web because they are directly compiled away
// during template compilation
var isReservedAttr = makeMap('style,class');
// attributes that should be using props for binding
var acceptValue = makeMap('input,textarea,option,select,progress');
var mustUseProp = function (tag, type, attr) {
    return ((attr === 'value' && acceptValue(tag) && type !== 'button') ||
        (attr === 'selected' && tag === 'option') ||
        (attr === 'checked' && tag === 'input') ||
        (attr === 'muted' && tag === 'video'));
};
var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');
var isValidContentEditableValue = makeMap('events,caret,typing,plaintext-only');
var convertEnumeratedValue = function (key, value) {
    return isFalsyAttrValue(value) || value === 'false'
        ? 'false'
        : // allow arbitrary string value for contenteditable
            key === 'contenteditable' && isValidContentEditableValue(value)
                ? value
                : 'true';
};
var isBooleanAttr = makeMap('allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
    'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
    'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
    'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
    'required,reversed,scoped,seamless,selected,sortable,' +
    'truespeed,typemustmatch,visible');
var xlinkNS = 'http://www.w3.org/1999/xlink';
var isXlink = function (name) {
    return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink';
};
var getXlinkProp = function (name) {
    return isXlink(name) ? name.slice(6, name.length) : '';
};
var isFalsyAttrValue = function (val) {
    return val == null || val === false;
};

function genClassForVnode(vnode) {
    var data = vnode.data;
    var parentNode = vnode;
    var childNode = vnode;
    while (isDef(childNode.componentInstance)) {
        childNode = childNode.componentInstance._vnode;
        if (childNode && childNode.data) {
            data = mergeClassData(childNode.data, data);
        }
    }
    // @ts-expect-error parentNode.parent not VNodeWithData
    while (isDef((parentNode = parentNode.parent))) {
        if (parentNode && parentNode.data) {
            data = mergeClassData(data, parentNode.data);
        }
    }
    return renderClass(data.staticClass, data.class);
}
function mergeClassData(child, parent) {
    return {
        staticClass: concat(child.staticClass, parent.staticClass),
        class: isDef(child.class) ? [child.class, parent.class] : parent.class
    };
}
function renderClass(staticClass, dynamicClass) {
    if (isDef(staticClass) || isDef(dynamicClass)) {
        return concat(staticClass, stringifyClass(dynamicClass));
    }
    /* istanbul ignore next */
    return '';
}
function concat(a, b) {
    return a ? (b ? a + ' ' + b : a) : b || '';
}
function stringifyClass(value) {
    if (Array.isArray(value)) {
        return stringifyArray(value);
    }
    if (isObject(value)) {
        return stringifyObject(value);
    }
    if (typeof value === 'string') {
        return value;
    }
    /* istanbul ignore next */
    return '';
}
function stringifyArray(value) {
    var res = '';
    var stringified;
    for (var i = 0, l = value.length; i < l; i++) {
        if (isDef((stringified = stringifyClass(value[i]))) && stringified !== '') {
            if (res)
                res += ' ';
            res += stringified;
        }
    }
    return res;
}
function stringifyObject(value) {
    var res = '';
    for (var key in value) {
        if (value[key]) {
            if (res)
                res += ' ';
            res += key;
        }
    }
    return res;
}

var namespaceMap = {
    svg: 'http://www.w3.org/2000/svg',
    math: 'http://www.w3.org/1998/Math/MathML'
};
var isHTMLTag = makeMap('html,body,base,head,link,meta,style,title,' +
    'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
    'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' +
    'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
    's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
    'embed,object,param,source,canvas,script,noscript,del,ins,' +
    'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
    'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
    'output,progress,select,textarea,' +
    'details,dialog,menu,menuitem,summary,' +
    'content,element,shadow,template,blockquote,iframe,tfoot');
// this map is intentionally selective, only covering SVG elements that may
// contain child elements.
var isSVG = makeMap('svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
    'foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
    'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view', true);
var isPreTag = function (tag) { return tag === 'pre'; };
var isReservedTag = function (tag) {
    return isHTMLTag(tag) || isSVG(tag);
};
function getTagNamespace(tag) {
    if (isSVG(tag)) {
        return 'svg';
    }
    // basic support for MathML
    // note it doesn't support other MathML elements being component roots
    if (tag === 'math') {
        return 'math';
    }
}
var unknownElementCache = Object.create(null);
function isUnknownElement(tag) {
    /* istanbul ignore if */
    if (!inBrowser) {
        return true;
    }
    if (isReservedTag(tag)) {
        return false;
    }
    tag = tag.toLowerCase();
    /* istanbul ignore if */
    if (unknownElementCache[tag] != null) {
        return unknownElementCache[tag];
    }
    var el = document.createElement(tag);
    if (tag.indexOf('-') > -1) {
        // http://stackoverflow.com/a/28210364/1070244
        return (unknownElementCache[tag] =
            el.constructor === window.HTMLUnknownElement ||
                el.constructor === window.HTMLElement);
    }
    else {
        return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()));
    }
}
var isTextInputType = makeMap('text,number,password,search,email,tel,url');

/**
 * Query an element selector if it's not an element already.
 */
function query(el) {
    if (typeof el === 'string') {
        var selected = document.querySelector(el);
        if (!selected) {
             true && warn$2('Cannot find element: ' + el);
            return document.createElement('div');
        }
        return selected;
    }
    else {
        return el;
    }
}

function createElement(tagName, vnode) {
    var elm = document.createElement(tagName);
    if (tagName !== 'select') {
        return elm;
    }
    // false or null will remove the attribute but undefined will not
    if (vnode.data &&
        vnode.data.attrs &&
        vnode.data.attrs.multiple !== undefined) {
        elm.setAttribute('multiple', 'multiple');
    }
    return elm;
}
function createElementNS(namespace, tagName) {
    return document.createElementNS(namespaceMap[namespace], tagName);
}
function createTextNode(text) {
    return document.createTextNode(text);
}
function createComment(text) {
    return document.createComment(text);
}
function insertBefore(parentNode, newNode, referenceNode) {
    parentNode.insertBefore(newNode, referenceNode);
}
function removeChild(node, child) {
    node.removeChild(child);
}
function appendChild(node, child) {
    node.appendChild(child);
}
function parentNode(node) {
    return node.parentNode;
}
function nextSibling(node) {
    return node.nextSibling;
}
function tagName(node) {
    return node.tagName;
}
function setTextContent(node, text) {
    node.textContent = text;
}
function setStyleScope(node, scopeId) {
    node.setAttribute(scopeId, '');
}

var nodeOps = /*#__PURE__*/Object.freeze({
  __proto__: null,
  createElement: createElement,
  createElementNS: createElementNS,
  createTextNode: createTextNode,
  createComment: createComment,
  insertBefore: insertBefore,
  removeChild: removeChild,
  appendChild: appendChild,
  parentNode: parentNode,
  nextSibling: nextSibling,
  tagName: tagName,
  setTextContent: setTextContent,
  setStyleScope: setStyleScope
});

var ref = {
    create: function (_, vnode) {
        registerRef(vnode);
    },
    update: function (oldVnode, vnode) {
        if (oldVnode.data.ref !== vnode.data.ref) {
            registerRef(oldVnode, true);
            registerRef(vnode);
        }
    },
    destroy: function (vnode) {
        registerRef(vnode, true);
    }
};
function registerRef(vnode, isRemoval) {
    var ref = vnode.data.ref;
    if (!isDef(ref))
        return;
    var vm = vnode.context;
    var refValue = vnode.componentInstance || vnode.elm;
    var value = isRemoval ? null : refValue;
    var $refsValue = isRemoval ? undefined : refValue;
    if (isFunction(ref)) {
        invokeWithErrorHandling(ref, vm, [value], vm, "template ref function");
        return;
    }
    var isFor = vnode.data.refInFor;
    var _isString = typeof ref === 'string' || typeof ref === 'number';
    var _isRef = isRef(ref);
    var refs = vm.$refs;
    if (_isString || _isRef) {
        if (isFor) {
            var existing = _isString ? refs[ref] : ref.value;
            if (isRemoval) {
                isArray(existing) && remove$2(existing, refValue);
            }
            else {
                if (!isArray(existing)) {
                    if (_isString) {
                        refs[ref] = [refValue];
                        setSetupRef(vm, ref, refs[ref]);
                    }
                    else {
                        ref.value = [refValue];
                    }
                }
                else if (!existing.includes(refValue)) {
                    existing.push(refValue);
                }
            }
        }
        else if (_isString) {
            if (isRemoval && refs[ref] !== refValue) {
                return;
            }
            refs[ref] = $refsValue;
            setSetupRef(vm, ref, value);
        }
        else if (_isRef) {
            if (isRemoval && ref.value !== refValue) {
                return;
            }
            ref.value = value;
        }
        else if (true) {
            warn$2("Invalid template ref type: ".concat(typeof ref));
        }
    }
}
function setSetupRef(_a, key, val) {
    var _setupState = _a._setupState;
    if (_setupState && hasOwn(_setupState, key)) {
        if (isRef(_setupState[key])) {
            _setupState[key].value = val;
        }
        else {
            _setupState[key] = val;
        }
    }
}

/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
 *
 * modified by Evan You (@yyx990803)
 *
 * Not type-checking this because this file is perf-critical and the cost
 * of making flow understand it is not worth it.
 */
var emptyNode = new VNode('', {}, []);
var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];
function sameVnode(a, b) {
    return (a.key === b.key &&
        a.asyncFactory === b.asyncFactory &&
        ((a.tag === b.tag &&
            a.isComment === b.isComment &&
            isDef(a.data) === isDef(b.data) &&
            sameInputType(a, b)) ||
            (isTrue(a.isAsyncPlaceholder) && isUndef(b.asyncFactory.error))));
}
function sameInputType(a, b) {
    if (a.tag !== 'input')
        return true;
    var i;
    var typeA = isDef((i = a.data)) && isDef((i = i.attrs)) && i.type;
    var typeB = isDef((i = b.data)) && isDef((i = i.attrs)) && i.type;
    return typeA === typeB || (isTextInputType(typeA) && isTextInputType(typeB));
}
function createKeyToOldIdx(children, beginIdx, endIdx) {
    var i, key;
    var map = {};
    for (i = beginIdx; i <= endIdx; ++i) {
        key = children[i].key;
        if (isDef(key))
            map[key] = i;
    }
    return map;
}
function createPatchFunction(backend) {
    var i, j;
    var cbs = {};
    var modules = backend.modules, nodeOps = backend.nodeOps;
    for (i = 0; i < hooks.length; ++i) {
        cbs[hooks[i]] = [];
        for (j = 0; j < modules.length; ++j) {
            if (isDef(modules[j][hooks[i]])) {
                cbs[hooks[i]].push(modules[j][hooks[i]]);
            }
        }
    }
    function emptyNodeAt(elm) {
        return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm);
    }
    function createRmCb(childElm, listeners) {
        function remove() {
            if (--remove.listeners === 0) {
                removeNode(childElm);
            }
        }
        remove.listeners = listeners;
        return remove;
    }
    function removeNode(el) {
        var parent = nodeOps.parentNode(el);
        // element may have already been removed due to v-html / v-text
        if (isDef(parent)) {
            nodeOps.removeChild(parent, el);
        }
    }
    function isUnknownElement(vnode, inVPre) {
        return (!inVPre &&
            !vnode.ns &&
            !(config.ignoredElements.length &&
                config.ignoredElements.some(function (ignore) {
                    return isRegExp(ignore)
                        ? ignore.test(vnode.tag)
                        : ignore === vnode.tag;
                })) &&
            config.isUnknownElement(vnode.tag));
    }
    var creatingElmInVPre = 0;
    function createElm(vnode, insertedVnodeQueue, parentElm, refElm, nested, ownerArray, index) {
        if (isDef(vnode.elm) && isDef(ownerArray)) {
            // This vnode was used in a previous render!
            // now it's used as a new node, overwriting its elm would cause
            // potential patch errors down the road when it's used as an insertion
            // reference node. Instead, we clone the node on-demand before creating
            // associated DOM element for it.
            vnode = ownerArray[index] = cloneVNode(vnode);
        }
        vnode.isRootInsert = !nested; // for transition enter check
        if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
            return;
        }
        var data = vnode.data;
        var children = vnode.children;
        var tag = vnode.tag;
        if (isDef(tag)) {
            if (true) {
                if (data && data.pre) {
                    creatingElmInVPre++;
                }
                if (isUnknownElement(vnode, creatingElmInVPre)) {
                    warn$2('Unknown custom element: <' +
                        tag +
                        '> - did you ' +
                        'register the component correctly? For recursive components, ' +
                        'make sure to provide the "name" option.', vnode.context);
                }
            }
            vnode.elm = vnode.ns
                ? nodeOps.createElementNS(vnode.ns, tag)
                : nodeOps.createElement(tag, vnode);
            setScope(vnode);
            createChildren(vnode, children, insertedVnodeQueue);
            if (isDef(data)) {
                invokeCreateHooks(vnode, insertedVnodeQueue);
            }
            insert(parentElm, vnode.elm, refElm);
            if ( true && data && data.pre) {
                creatingElmInVPre--;
            }
        }
        else if (isTrue(vnode.isComment)) {
            vnode.elm = nodeOps.createComment(vnode.text);
            insert(parentElm, vnode.elm, refElm);
        }
        else {
            vnode.elm = nodeOps.createTextNode(vnode.text);
            insert(parentElm, vnode.elm, refElm);
        }
    }
    function createComponent(vnode, insertedVnodeQueue, parentElm, refElm) {
        var i = vnode.data;
        if (isDef(i)) {
            var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
            if (isDef((i = i.hook)) && isDef((i = i.init))) {
                i(vnode, false /* hydrating */);
            }
            // after calling the init hook, if the vnode is a child component
            // it should've created a child instance and mounted it. the child
            // component also has set the placeholder vnode's elm.
            // in that case we can just return the element and be done.
            if (isDef(vnode.componentInstance)) {
                initComponent(vnode, insertedVnodeQueue);
                insert(parentElm, vnode.elm, refElm);
                if (isTrue(isReactivated)) {
                    reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
                }
                return true;
            }
        }
    }
    function initComponent(vnode, insertedVnodeQueue) {
        if (isDef(vnode.data.pendingInsert)) {
            insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
            vnode.data.pendingInsert = null;
        }
        vnode.elm = vnode.componentInstance.$el;
        if (isPatchable(vnode)) {
            invokeCreateHooks(vnode, insertedVnodeQueue);
            setScope(vnode);
        }
        else {
            // empty component root.
            // skip all element-related modules except for ref (#3455)
            registerRef(vnode);
            // make sure to invoke the insert hook
            insertedVnodeQueue.push(vnode);
        }
    }
    function reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm) {
        var i;
        // hack for #4339: a reactivated component with inner transition
        // does not trigger because the inner node's created hooks are not called
        // again. It's not ideal to involve module-specific logic in here but
        // there doesn't seem to be a better way to do it.
        var innerNode = vnode;
        while (innerNode.componentInstance) {
            innerNode = innerNode.componentInstance._vnode;
            if (isDef((i = innerNode.data)) && isDef((i = i.transition))) {
                for (i = 0; i < cbs.activate.length; ++i) {
                    cbs.activate[i](emptyNode, innerNode);
                }
                insertedVnodeQueue.push(innerNode);
                break;
            }
        }
        // unlike a newly created component,
        // a reactivated keep-alive component doesn't insert itself
        insert(parentElm, vnode.elm, refElm);
    }
    function insert(parent, elm, ref) {
        if (isDef(parent)) {
            if (isDef(ref)) {
                if (nodeOps.parentNode(ref) === parent) {
                    nodeOps.insertBefore(parent, elm, ref);
                }
            }
            else {
                nodeOps.appendChild(parent, elm);
            }
        }
    }
    function createChildren(vnode, children, insertedVnodeQueue) {
        if (isArray(children)) {
            if (true) {
                checkDuplicateKeys(children);
            }
            for (var i_1 = 0; i_1 < children.length; ++i_1) {
                createElm(children[i_1], insertedVnodeQueue, vnode.elm, null, true, children, i_1);
            }
        }
        else if (isPrimitive(vnode.text)) {
            nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(String(vnode.text)));
        }
    }
    function isPatchable(vnode) {
        while (vnode.componentInstance) {
            vnode = vnode.componentInstance._vnode;
        }
        return isDef(vnode.tag);
    }
    function invokeCreateHooks(vnode, insertedVnodeQueue) {
        for (var i_2 = 0; i_2 < cbs.create.length; ++i_2) {
            cbs.create[i_2](emptyNode, vnode);
        }
        i = vnode.data.hook; // Reuse variable
        if (isDef(i)) {
            if (isDef(i.create))
                i.create(emptyNode, vnode);
            if (isDef(i.insert))
                insertedVnodeQueue.push(vnode);
        }
    }
    // set scope id attribute for scoped CSS.
    // this is implemented as a special case to avoid the overhead
    // of going through the normal attribute patching process.
    function setScope(vnode) {
        var i;
        if (isDef((i = vnode.fnScopeId))) {
            nodeOps.setStyleScope(vnode.elm, i);
        }
        else {
            var ancestor = vnode;
            while (ancestor) {
                if (isDef((i = ancestor.context)) && isDef((i = i.$options._scopeId))) {
                    nodeOps.setStyleScope(vnode.elm, i);
                }
                ancestor = ancestor.parent;
            }
        }
        // for slot content they should also get the scopeId from the host instance.
        if (isDef((i = activeInstance)) &&
            i !== vnode.context &&
            i !== vnode.fnContext &&
            isDef((i = i.$options._scopeId))) {
            nodeOps.setStyleScope(vnode.elm, i);
        }
    }
    function addVnodes(parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
        for (; startIdx <= endIdx; ++startIdx) {
            createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm, false, vnodes, startIdx);
        }
    }
    function invokeDestroyHook(vnode) {
        var i, j;
        var data = vnode.data;
        if (isDef(data)) {
            if (isDef((i = data.hook)) && isDef((i = i.destroy)))
                i(vnode);
            for (i = 0; i < cbs.destroy.length; ++i)
                cbs.destroy[i](vnode);
        }
        if (isDef((i = vnode.children))) {
            for (j = 0; j < vnode.children.length; ++j) {
                invokeDestroyHook(vnode.children[j]);
            }
        }
    }
    function removeVnodes(vnodes, startIdx, endIdx) {
        for (; startIdx <= endIdx; ++startIdx) {
            var ch = vnodes[startIdx];
            if (isDef(ch)) {
                if (isDef(ch.tag)) {
                    removeAndInvokeRemoveHook(ch);
                    invokeDestroyHook(ch);
                }
                else {
                    // Text node
                    removeNode(ch.elm);
                }
            }
        }
    }
    function removeAndInvokeRemoveHook(vnode, rm) {
        if (isDef(rm) || isDef(vnode.data)) {
            var i_3;
            var listeners = cbs.remove.length + 1;
            if (isDef(rm)) {
                // we have a recursively passed down rm callback
                // increase the listeners count
                rm.listeners += listeners;
            }
            else {
                // directly removing
                rm = createRmCb(vnode.elm, listeners);
            }
            // recursively invoke hooks on child component root node
            if (isDef((i_3 = vnode.componentInstance)) &&
                isDef((i_3 = i_3._vnode)) &&
                isDef(i_3.data)) {
                removeAndInvokeRemoveHook(i_3, rm);
            }
            for (i_3 = 0; i_3 < cbs.remove.length; ++i_3) {
                cbs.remove[i_3](vnode, rm);
            }
            if (isDef((i_3 = vnode.data.hook)) && isDef((i_3 = i_3.remove))) {
                i_3(vnode, rm);
            }
            else {
                rm();
            }
        }
        else {
            removeNode(vnode.elm);
        }
    }
    function updateChildren(parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
        var oldStartIdx = 0;
        var newStartIdx = 0;
        var oldEndIdx = oldCh.length - 1;
        var oldStartVnode = oldCh[0];
        var oldEndVnode = oldCh[oldEndIdx];
        var newEndIdx = newCh.length - 1;
        var newStartVnode = newCh[0];
        var newEndVnode = newCh[newEndIdx];
        var oldKeyToIdx, idxInOld, vnodeToMove, refElm;
        // removeOnly is a special flag used only by <transition-group>
        // to ensure removed elements stay in correct relative positions
        // during leaving transitions
        var canMove = !removeOnly;
        if (true) {
            checkDuplicateKeys(newCh);
        }
        while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
            if (isUndef(oldStartVnode)) {
                oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
            }
            else if (isUndef(oldEndVnode)) {
                oldEndVnode = oldCh[--oldEndIdx];
            }
            else if (sameVnode(oldStartVnode, newStartVnode)) {
                patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
                oldStartVnode = oldCh[++oldStartIdx];
                newStartVnode = newCh[++newStartIdx];
            }
            else if (sameVnode(oldEndVnode, newEndVnode)) {
                patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
                oldEndVnode = oldCh[--oldEndIdx];
                newEndVnode = newCh[--newEndIdx];
            }
            else if (sameVnode(oldStartVnode, newEndVnode)) {
                // Vnode moved right
                patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
                canMove &&
                    nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
                oldStartVnode = oldCh[++oldStartIdx];
                newEndVnode = newCh[--newEndIdx];
            }
            else if (sameVnode(oldEndVnode, newStartVnode)) {
                // Vnode moved left
                patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
                canMove &&
                    nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
                oldEndVnode = oldCh[--oldEndIdx];
                newStartVnode = newCh[++newStartIdx];
            }
            else {
                if (isUndef(oldKeyToIdx))
                    oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx);
                idxInOld = isDef(newStartVnode.key)
                    ? oldKeyToIdx[newStartVnode.key]
                    : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);
                if (isUndef(idxInOld)) {
                    // New element
                    createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
                }
                else {
                    vnodeToMove = oldCh[idxInOld];
                    if (sameVnode(vnodeToMove, newStartVnode)) {
                        patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
                        oldCh[idxInOld] = undefined;
                        canMove &&
                            nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
                    }
                    else {
                        // same key but different element. treat as new element
                        createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
                    }
                }
                newStartVnode = newCh[++newStartIdx];
            }
        }
        if (oldStartIdx > oldEndIdx) {
            refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
            addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
        }
        else if (newStartIdx > newEndIdx) {
            removeVnodes(oldCh, oldStartIdx, oldEndIdx);
        }
    }
    function checkDuplicateKeys(children) {
        var seenKeys = {};
        for (var i_4 = 0; i_4 < children.length; i_4++) {
            var vnode = children[i_4];
            var key = vnode.key;
            if (isDef(key)) {
                if (seenKeys[key]) {
                    warn$2("Duplicate keys detected: '".concat(key, "'. This may cause an update error."), vnode.context);
                }
                else {
                    seenKeys[key] = true;
                }
            }
        }
    }
    function findIdxInOld(node, oldCh, start, end) {
        for (var i_5 = start; i_5 < end; i_5++) {
            var c = oldCh[i_5];
            if (isDef(c) && sameVnode(node, c))
                return i_5;
        }
    }
    function patchVnode(oldVnode, vnode, insertedVnodeQueue, ownerArray, index, removeOnly) {
        if (oldVnode === vnode) {
            return;
        }
        if (isDef(vnode.elm) && isDef(ownerArray)) {
            // clone reused vnode
            vnode = ownerArray[index] = cloneVNode(vnode);
        }
        var elm = (vnode.elm = oldVnode.elm);
        if (isTrue(oldVnode.isAsyncPlaceholder)) {
            if (isDef(vnode.asyncFactory.resolved)) {
                hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
            }
            else {
                vnode.isAsyncPlaceholder = true;
            }
            return;
        }
        // reuse element for static trees.
        // note we only do this if the vnode is cloned -
        // if the new node is not cloned it means the render functions have been
        // reset by the hot-reload-api and we need to do a proper re-render.
        if (isTrue(vnode.isStatic) &&
            isTrue(oldVnode.isStatic) &&
            vnode.key === oldVnode.key &&
            (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))) {
            vnode.componentInstance = oldVnode.componentInstance;
            return;
        }
        var i;
        var data = vnode.data;
        if (isDef(data) && isDef((i = data.hook)) && isDef((i = i.prepatch))) {
            i(oldVnode, vnode);
        }
        var oldCh = oldVnode.children;
        var ch = vnode.children;
        if (isDef(data) && isPatchable(vnode)) {
            for (i = 0; i < cbs.update.length; ++i)
                cbs.update[i](oldVnode, vnode);
            if (isDef((i = data.hook)) && isDef((i = i.update)))
                i(oldVnode, vnode);
        }
        if (isUndef(vnode.text)) {
            if (isDef(oldCh) && isDef(ch)) {
                if (oldCh !== ch)
                    updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly);
            }
            else if (isDef(ch)) {
                if (true) {
                    checkDuplicateKeys(ch);
                }
                if (isDef(oldVnode.text))
                    nodeOps.setTextContent(elm, '');
                addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
            }
            else if (isDef(oldCh)) {
                removeVnodes(oldCh, 0, oldCh.length - 1);
            }
            else if (isDef(oldVnode.text)) {
                nodeOps.setTextContent(elm, '');
            }
        }
        else if (oldVnode.text !== vnode.text) {
            nodeOps.setTextContent(elm, vnode.text);
        }
        if (isDef(data)) {
            if (isDef((i = data.hook)) && isDef((i = i.postpatch)))
                i(oldVnode, vnode);
        }
    }
    function invokeInsertHook(vnode, queue, initial) {
        // delay insert hooks for component root nodes, invoke them after the
        // element is really inserted
        if (isTrue(initial) && isDef(vnode.parent)) {
            vnode.parent.data.pendingInsert = queue;
        }
        else {
            for (var i_6 = 0; i_6 < queue.length; ++i_6) {
                queue[i_6].data.hook.insert(queue[i_6]);
            }
        }
    }
    var hydrationBailed = false;
    // list of modules that can skip create hook during hydration because they
    // are already rendered on the client or has no need for initialization
    // Note: style is excluded because it relies on initial clone for future
    // deep updates (#7063).
    var isRenderedModule = makeMap('attrs,class,staticClass,staticStyle,key');
    // Note: this is a browser-only function so we can assume elms are DOM nodes.
    function hydrate(elm, vnode, insertedVnodeQueue, inVPre) {
        var i;
        var tag = vnode.tag, data = vnode.data, children = vnode.children;
        inVPre = inVPre || (data && data.pre);
        vnode.elm = elm;
        if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
            vnode.isAsyncPlaceholder = true;
            return true;
        }
        // assert node match
        if (true) {
            if (!assertNodeMatch(elm, vnode, inVPre)) {
                return false;
            }
        }
        if (isDef(data)) {
            if (isDef((i = data.hook)) && isDef((i = i.init)))
                i(vnode, true /* hydrating */);
            if (isDef((i = vnode.componentInstance))) {
                // child component. it should have hydrated its own tree.
                initComponent(vnode, insertedVnodeQueue);
                return true;
            }
        }
        if (isDef(tag)) {
            if (isDef(children)) {
                // empty element, allow client to pick up and populate children
                if (!elm.hasChildNodes()) {
                    createChildren(vnode, children, insertedVnodeQueue);
                }
                else {
                    // v-html and domProps: innerHTML
                    if (isDef((i = data)) &&
                        isDef((i = i.domProps)) &&
                        isDef((i = i.innerHTML))) {
                        if (i !== elm.innerHTML) {
                            /* istanbul ignore if */
                            if ( true &&
                                typeof console !== 'undefined' &&
                                !hydrationBailed) {
                                hydrationBailed = true;
                                console.warn('Parent: ', elm);
                                console.warn('server innerHTML: ', i);
                                console.warn('client innerHTML: ', elm.innerHTML);
                            }
                            return false;
                        }
                    }
                    else {
                        // iterate and compare children lists
                        var childrenMatch = true;
                        var childNode = elm.firstChild;
                        for (var i_7 = 0; i_7 < children.length; i_7++) {
                            if (!childNode ||
                                !hydrate(childNode, children[i_7], insertedVnodeQueue, inVPre)) {
                                childrenMatch = false;
                                break;
                            }
                            childNode = childNode.nextSibling;
                        }
                        // if childNode is not null, it means the actual childNodes list is
                        // longer than the virtual children list.
                        if (!childrenMatch || childNode) {
                            /* istanbul ignore if */
                            if ( true &&
                                typeof console !== 'undefined' &&
                                !hydrationBailed) {
                                hydrationBailed = true;
                                console.warn('Parent: ', elm);
                                console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
                            }
                            return false;
                        }
                    }
                }
            }
            if (isDef(data)) {
                var fullInvoke = false;
                for (var key in data) {
                    if (!isRenderedModule(key)) {
                        fullInvoke = true;
                        invokeCreateHooks(vnode, insertedVnodeQueue);
                        break;
                    }
                }
                if (!fullInvoke && data['class']) {
                    // ensure collecting deps for deep class bindings for future updates
                    traverse(data['class']);
                }
            }
        }
        else if (elm.data !== vnode.text) {
            elm.data = vnode.text;
        }
        return true;
    }
    function assertNodeMatch(node, vnode, inVPre) {
        if (isDef(vnode.tag)) {
            return (vnode.tag.indexOf('vue-component') === 0 ||
                (!isUnknownElement(vnode, inVPre) &&
                    vnode.tag.toLowerCase() ===
                        (node.tagName && node.tagName.toLowerCase())));
        }
        else {
            return node.nodeType === (vnode.isComment ? 8 : 3);
        }
    }
    return function patch(oldVnode, vnode, hydrating, removeOnly) {
        if (isUndef(vnode)) {
            if (isDef(oldVnode))
                invokeDestroyHook(oldVnode);
            return;
        }
        var isInitialPatch = false;
        var insertedVnodeQueue = [];
        if (isUndef(oldVnode)) {
            // empty mount (likely as component), create new root element
            isInitialPatch = true;
            createElm(vnode, insertedVnodeQueue);
        }
        else {
            var isRealElement = isDef(oldVnode.nodeType);
            if (!isRealElement && sameVnode(oldVnode, vnode)) {
                // patch existing root node
                patchVnode(oldVnode, vnode, insertedVnodeQueue, null, null, removeOnly);
            }
            else {
                if (isRealElement) {
                    // mounting to a real element
                    // check if this is server-rendered content and if we can perform
                    // a successful hydration.
                    if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
                        oldVnode.removeAttribute(SSR_ATTR);
                        hydrating = true;
                    }
                    if (isTrue(hydrating)) {
                        if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
                            invokeInsertHook(vnode, insertedVnodeQueue, true);
                            return oldVnode;
                        }
                        else if (true) {
                            warn$2('The client-side rendered virtual DOM tree is not matching ' +
                                'server-rendered content. This is likely caused by incorrect ' +
                                'HTML markup, for example nesting block-level elements inside ' +
                                '<p>, or missing <tbody>. Bailing hydration and performing ' +
                                'full client-side render.');
                        }
                    }
                    // either not server-rendered, or hydration failed.
                    // create an empty node and replace it
                    oldVnode = emptyNodeAt(oldVnode);
                }
                // replacing existing element
                var oldElm = oldVnode.elm;
                var parentElm = nodeOps.parentNode(oldElm);
                // create new node
                createElm(vnode, insertedVnodeQueue, 
                // extremely rare edge case: do not insert if old element is in a
                // leaving transition. Only happens when combining transition +
                // keep-alive + HOCs. (#4590)
                oldElm._leaveCb ? null : parentElm, nodeOps.nextSibling(oldElm));
                // update parent placeholder node element, recursively
                if (isDef(vnode.parent)) {
                    var ancestor = vnode.parent;
                    var patchable = isPatchable(vnode);
                    while (ancestor) {
                        for (var i_8 = 0; i_8 < cbs.destroy.length; ++i_8) {
                            cbs.destroy[i_8](ancestor);
                        }
                        ancestor.elm = vnode.elm;
                        if (patchable) {
                            for (var i_9 = 0; i_9 < cbs.create.length; ++i_9) {
                                cbs.create[i_9](emptyNode, ancestor);
                            }
                            // #6513
                            // invoke insert hooks that may have been merged by create hooks.
                            // e.g. for directives that uses the "inserted" hook.
                            var insert_1 = ancestor.data.hook.insert;
                            if (insert_1.merged) {
                                // start at index 1 to avoid re-invoking component mounted hook
                                for (var i_10 = 1; i_10 < insert_1.fns.length; i_10++) {
                                    insert_1.fns[i_10]();
                                }
                            }
                        }
                        else {
                            registerRef(ancestor);
                        }
                        ancestor = ancestor.parent;
                    }
                }
                // destroy old node
                if (isDef(parentElm)) {
                    removeVnodes([oldVnode], 0, 0);
                }
                else if (isDef(oldVnode.tag)) {
                    invokeDestroyHook(oldVnode);
                }
            }
        }
        invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
        return vnode.elm;
    };
}

var directives$1 = {
    create: updateDirectives,
    update: updateDirectives,
    destroy: function unbindDirectives(vnode) {
        // @ts-expect-error emptyNode is not VNodeWithData
        updateDirectives(vnode, emptyNode);
    }
};
function updateDirectives(oldVnode, vnode) {
    if (oldVnode.data.directives || vnode.data.directives) {
        _update(oldVnode, vnode);
    }
}
function _update(oldVnode, vnode) {
    var isCreate = oldVnode === emptyNode;
    var isDestroy = vnode === emptyNode;
    var oldDirs = normalizeDirectives(oldVnode.data.directives, oldVnode.context);
    var newDirs = normalizeDirectives(vnode.data.directives, vnode.context);
    var dirsWithInsert = [];
    var dirsWithPostpatch = [];
    var key, oldDir, dir;
    for (key in newDirs) {
        oldDir = oldDirs[key];
        dir = newDirs[key];
        if (!oldDir) {
            // new directive, bind
            callHook(dir, 'bind', vnode, oldVnode);
            if (dir.def && dir.def.inserted) {
                dirsWithInsert.push(dir);
            }
        }
        else {
            // existing directive, update
            dir.oldValue = oldDir.value;
            dir.oldArg = oldDir.arg;
            callHook(dir, 'update', vnode, oldVnode);
            if (dir.def && dir.def.componentUpdated) {
                dirsWithPostpatch.push(dir);
            }
        }
    }
    if (dirsWithInsert.length) {
        var callInsert = function () {
            for (var i = 0; i < dirsWithInsert.length; i++) {
                callHook(dirsWithInsert[i], 'inserted', vnode, oldVnode);
            }
        };
        if (isCreate) {
            mergeVNodeHook(vnode, 'insert', callInsert);
        }
        else {
            callInsert();
        }
    }
    if (dirsWithPostpatch.length) {
        mergeVNodeHook(vnode, 'postpatch', function () {
            for (var i = 0; i < dirsWithPostpatch.length; i++) {
                callHook(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
            }
        });
    }
    if (!isCreate) {
        for (key in oldDirs) {
            if (!newDirs[key]) {
                // no longer present, unbind
                callHook(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
            }
        }
    }
}
var emptyModifiers = Object.create(null);
function normalizeDirectives(dirs, vm) {
    var res = Object.create(null);
    if (!dirs) {
        // $flow-disable-line
        return res;
    }
    var i, dir;
    for (i = 0; i < dirs.length; i++) {
        dir = dirs[i];
        if (!dir.modifiers) {
            // $flow-disable-line
            dir.modifiers = emptyModifiers;
        }
        res[getRawDirName(dir)] = dir;
        if (vm._setupState && vm._setupState.__sfc) {
            var setupDef = dir.def || resolveAsset(vm, '_setupState', 'v-' + dir.name);
            if (typeof setupDef === 'function') {
                dir.def = {
                    bind: setupDef,
                    update: setupDef,
                };
            }
            else {
                dir.def = setupDef;
            }
        }
        dir.def = dir.def || resolveAsset(vm.$options, 'directives', dir.name, true);
    }
    // $flow-disable-line
    return res;
}
function getRawDirName(dir) {
    return (dir.rawName || "".concat(dir.name, ".").concat(Object.keys(dir.modifiers || {}).join('.')));
}
function callHook(dir, hook, vnode, oldVnode, isDestroy) {
    var fn = dir.def && dir.def[hook];
    if (fn) {
        try {
            fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
        }
        catch (e) {
            handleError(e, vnode.context, "directive ".concat(dir.name, " ").concat(hook, " hook"));
        }
    }
}

var baseModules = [ref, directives$1];

function updateAttrs(oldVnode, vnode) {
    var opts = vnode.componentOptions;
    if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
        return;
    }
    if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
        return;
    }
    var key, cur, old;
    var elm = vnode.elm;
    var oldAttrs = oldVnode.data.attrs || {};
    var attrs = vnode.data.attrs || {};
    // clone observed objects, as the user probably wants to mutate it
    if (isDef(attrs.__ob__) || isTrue(attrs._v_attr_proxy)) {
        attrs = vnode.data.attrs = extend({}, attrs);
    }
    for (key in attrs) {
        cur = attrs[key];
        old = oldAttrs[key];
        if (old !== cur) {
            setAttr(elm, key, cur, vnode.data.pre);
        }
    }
    // #4391: in IE9, setting type can reset value for input[type=radio]
    // #6666: IE/Edge forces progress value down to 1 before setting a max
    /* istanbul ignore if */
    if ((isIE || isEdge) && attrs.value !== oldAttrs.value) {
        setAttr(elm, 'value', attrs.value);
    }
    for (key in oldAttrs) {
        if (isUndef(attrs[key])) {
            if (isXlink(key)) {
                elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
            }
            else if (!isEnumeratedAttr(key)) {
                elm.removeAttribute(key);
            }
        }
    }
}
function setAttr(el, key, value, isInPre) {
    if (isInPre || el.tagName.indexOf('-') > -1) {
        baseSetAttr(el, key, value);
    }
    else if (isBooleanAttr(key)) {
        // set attribute for blank value
        // e.g. <option disabled>Select one</option>
        if (isFalsyAttrValue(value)) {
            el.removeAttribute(key);
        }
        else {
            // technically allowfullscreen is a boolean attribute for <iframe>,
            // but Flash expects a value of "true" when used on <embed> tag
            value = key === 'allowfullscreen' && el.tagName === 'EMBED' ? 'true' : key;
            el.setAttribute(key, value);
        }
    }
    else if (isEnumeratedAttr(key)) {
        el.setAttribute(key, convertEnumeratedValue(key, value));
    }
    else if (isXlink(key)) {
        if (isFalsyAttrValue(value)) {
            el.removeAttributeNS(xlinkNS, getXlinkProp(key));
        }
        else {
            el.setAttributeNS(xlinkNS, key, value);
        }
    }
    else {
        baseSetAttr(el, key, value);
    }
}
function baseSetAttr(el, key, value) {
    if (isFalsyAttrValue(value)) {
        el.removeAttribute(key);
    }
    else {
        // #7138: IE10 & 11 fires input event when setting placeholder on
        // <textarea>... block the first input event and remove the blocker
        // immediately.
        /* istanbul ignore if */
        if (isIE &&
            !isIE9 &&
            el.tagName === 'TEXTAREA' &&
            key === 'placeholder' &&
            value !== '' &&
            !el.__ieph) {
            var blocker_1 = function (e) {
                e.stopImmediatePropagation();
                el.removeEventListener('input', blocker_1);
            };
            el.addEventListener('input', blocker_1);
            // $flow-disable-line
            el.__ieph = true; /* IE placeholder patched */
        }
        el.setAttribute(key, value);
    }
}
var attrs = {
    create: updateAttrs,
    update: updateAttrs
};

function updateClass(oldVnode, vnode) {
    var el = vnode.elm;
    var data = vnode.data;
    var oldData = oldVnode.data;
    if (isUndef(data.staticClass) &&
        isUndef(data.class) &&
        (isUndef(oldData) ||
            (isUndef(oldData.staticClass) && isUndef(oldData.class)))) {
        return;
    }
    var cls = genClassForVnode(vnode);
    // handle transition classes
    var transitionClass = el._transitionClasses;
    if (isDef(transitionClass)) {
        cls = concat(cls, stringifyClass(transitionClass));
    }
    // set the class
    if (cls !== el._prevClass) {
        el.setAttribute('class', cls);
        el._prevClass = cls;
    }
}
var klass$1 = {
    create: updateClass,
    update: updateClass
};

var validDivisionCharRE = /[\w).+\-_$\]]/;
function parseFilters(exp) {
    var inSingle = false;
    var inDouble = false;
    var inTemplateString = false;
    var inRegex = false;
    var curly = 0;
    var square = 0;
    var paren = 0;
    var lastFilterIndex = 0;
    var c, prev, i, expression, filters;
    for (i = 0; i < exp.length; i++) {
        prev = c;
        c = exp.charCodeAt(i);
        if (inSingle) {
            if (c === 0x27 && prev !== 0x5c)
                inSingle = false;
        }
        else if (inDouble) {
            if (c === 0x22 && prev !== 0x5c)
                inDouble = false;
        }
        else if (inTemplateString) {
            if (c === 0x60 && prev !== 0x5c)
                inTemplateString = false;
        }
        else if (inRegex) {
            if (c === 0x2f && prev !== 0x5c)
                inRegex = false;
        }
        else if (c === 0x7c && // pipe
            exp.charCodeAt(i + 1) !== 0x7c &&
            exp.charCodeAt(i - 1) !== 0x7c &&
            !curly &&
            !square &&
            !paren) {
            if (expression === undefined) {
                // first filter, end of expression
                lastFilterIndex = i + 1;
                expression = exp.slice(0, i).trim();
            }
            else {
                pushFilter();
            }
        }
        else {
            switch (c) {
                case 0x22:
                    inDouble = true;
                    break; // "
                case 0x27:
                    inSingle = true;
                    break; // '
                case 0x60:
                    inTemplateString = true;
                    break; // `
                case 0x28:
                    paren++;
                    break; // (
                case 0x29:
                    paren--;
                    break; // )
                case 0x5b:
                    square++;
                    break; // [
                case 0x5d:
                    square--;
                    break; // ]
                case 0x7b:
                    curly++;
                    break; // {
                case 0x7d:
                    curly--;
                    break; // }
            }
            if (c === 0x2f) {
                // /
                var j = i - 1;
                var p 
                // find first non-whitespace prev char
                = void 0;
                // find first non-whitespace prev char
                for (; j >= 0; j--) {
                    p = exp.charAt(j);
                    if (p !== ' ')
                        break;
                }
                if (!p || !validDivisionCharRE.test(p)) {
                    inRegex = true;
                }
            }
        }
    }
    if (expression === undefined) {
        expression = exp.slice(0, i).trim();
    }
    else if (lastFilterIndex !== 0) {
        pushFilter();
    }
    function pushFilter() {
        (filters || (filters = [])).push(exp.slice(lastFilterIndex, i).trim());
        lastFilterIndex = i + 1;
    }
    if (filters) {
        for (i = 0; i < filters.length; i++) {
            expression = wrapFilter(expression, filters[i]);
        }
    }
    return expression;
}
function wrapFilter(exp, filter) {
    var i = filter.indexOf('(');
    if (i < 0) {
        // _f: resolveFilter
        return "_f(\"".concat(filter, "\")(").concat(exp, ")");
    }
    else {
        var name_1 = filter.slice(0, i);
        var args = filter.slice(i + 1);
        return "_f(\"".concat(name_1, "\")(").concat(exp).concat(args !== ')' ? ',' + args : args);
    }
}

/* eslint-disable no-unused-vars */
function baseWarn(msg, range) {
    console.error("[Vue compiler]: ".concat(msg));
}
/* eslint-enable no-unused-vars */
function pluckModuleFunction(modules, key) {
    return modules ? modules.map(function (m) { return m[key]; }).filter(function (_) { return _; }) : [];
}
function addProp(el, name, value, range, dynamic) {
    (el.props || (el.props = [])).push(rangeSetItem({ name: name, value: value, dynamic: dynamic }, range));
    el.plain = false;
}
function addAttr(el, name, value, range, dynamic) {
    var attrs = dynamic
        ? el.dynamicAttrs || (el.dynamicAttrs = [])
        : el.attrs || (el.attrs = []);
    attrs.push(rangeSetItem({ name: name, value: value, dynamic: dynamic }, range));
    el.plain = false;
}
// add a raw attr (use this in preTransforms)
function addRawAttr(el, name, value, range) {
    el.attrsMap[name] = value;
    el.attrsList.push(rangeSetItem({ name: name, value: value }, range));
}
function addDirective(el, name, rawName, value, arg, isDynamicArg, modifiers, range) {
    (el.directives || (el.directives = [])).push(rangeSetItem({
        name: name,
        rawName: rawName,
        value: value,
        arg: arg,
        isDynamicArg: isDynamicArg,
        modifiers: modifiers
    }, range));
    el.plain = false;
}
function prependModifierMarker(symbol, name, dynamic) {
    return dynamic ? "_p(".concat(name, ",\"").concat(symbol, "\")") : symbol + name; // mark the event as captured
}
function addHandler(el, name, value, modifiers, important, warn, range, dynamic) {
    modifiers = modifiers || emptyObject;
    // warn prevent and passive modifier
    /* istanbul ignore if */
    if ( true && warn && modifiers.prevent && modifiers.passive) {
        warn("passive and prevent can't be used together. " +
            "Passive handler can't prevent default event.", range);
    }
    // normalize click.right and click.middle since they don't actually fire
    // this is technically browser-specific, but at least for now browsers are
    // the only target envs that have right/middle clicks.
    if (modifiers.right) {
        if (dynamic) {
            name = "(".concat(name, ")==='click'?'contextmenu':(").concat(name, ")");
        }
        else if (name === 'click') {
            name = 'contextmenu';
            delete modifiers.right;
        }
    }
    else if (modifiers.middle) {
        if (dynamic) {
            name = "(".concat(name, ")==='click'?'mouseup':(").concat(name, ")");
        }
        else if (name === 'click') {
            name = 'mouseup';
        }
    }
    // check capture modifier
    if (modifiers.capture) {
        delete modifiers.capture;
        name = prependModifierMarker('!', name, dynamic);
    }
    if (modifiers.once) {
        delete modifiers.once;
        name = prependModifierMarker('~', name, dynamic);
    }
    /* istanbul ignore if */
    if (modifiers.passive) {
        delete modifiers.passive;
        name = prependModifierMarker('&', name, dynamic);
    }
    var events;
    if (modifiers.native) {
        delete modifiers.native;
        events = el.nativeEvents || (el.nativeEvents = {});
    }
    else {
        events = el.events || (el.events = {});
    }
    var newHandler = rangeSetItem({ value: value.trim(), dynamic: dynamic }, range);
    if (modifiers !== emptyObject) {
        newHandler.modifiers = modifiers;
    }
    var handlers = events[name];
    /* istanbul ignore if */
    if (Array.isArray(handlers)) {
        important ? handlers.unshift(newHandler) : handlers.push(newHandler);
    }
    else if (handlers) {
        events[name] = important ? [newHandler, handlers] : [handlers, newHandler];
    }
    else {
        events[name] = newHandler;
    }
    el.plain = false;
}
function getRawBindingAttr(el, name) {
    return (el.rawAttrsMap[':' + name] ||
        el.rawAttrsMap['v-bind:' + name] ||
        el.rawAttrsMap[name]);
}
function getBindingAttr(el, name, getStatic) {
    var dynamicValue = getAndRemoveAttr(el, ':' + name) || getAndRemoveAttr(el, 'v-bind:' + name);
    if (dynamicValue != null) {
        return parseFilters(dynamicValue);
    }
    else if (getStatic !== false) {
        var staticValue = getAndRemoveAttr(el, name);
        if (staticValue != null) {
            return JSON.stringify(staticValue);
        }
    }
}
// note: this only removes the attr from the Array (attrsList) so that it
// doesn't get processed by processAttrs.
// By default it does NOT remove it from the map (attrsMap) because the map is
// needed during codegen.
function getAndRemoveAttr(el, name, removeFromMap) {
    var val;
    if ((val = el.attrsMap[name]) != null) {
        var list = el.attrsList;
        for (var i = 0, l = list.length; i < l; i++) {
            if (list[i].name === name) {
                list.splice(i, 1);
                break;
            }
        }
    }
    if (removeFromMap) {
        delete el.attrsMap[name];
    }
    return val;
}
function getAndRemoveAttrByRegex(el, name) {
    var list = el.attrsList;
    for (var i = 0, l = list.length; i < l; i++) {
        var attr = list[i];
        if (name.test(attr.name)) {
            list.splice(i, 1);
            return attr;
        }
    }
}
function rangeSetItem(item, range) {
    if (range) {
        if (range.start != null) {
            item.start = range.start;
        }
        if (range.end != null) {
            item.end = range.end;
        }
    }
    return item;
}

/**
 * Cross-platform code generation for component v-model
 */
function genComponentModel(el, value, modifiers) {
    var _a = modifiers || {}, number = _a.number, trim = _a.trim;
    var baseValueExpression = '$$v';
    var valueExpression = baseValueExpression;
    if (trim) {
        valueExpression =
            "(typeof ".concat(baseValueExpression, " === 'string'") +
                "? ".concat(baseValueExpression, ".trim()") +
                ": ".concat(baseValueExpression, ")");
    }
    if (number) {
        valueExpression = "_n(".concat(valueExpression, ")");
    }
    var assignment = genAssignmentCode(value, valueExpression);
    el.model = {
        value: "(".concat(value, ")"),
        expression: JSON.stringify(value),
        callback: "function (".concat(baseValueExpression, ") {").concat(assignment, "}")
    };
}
/**
 * Cross-platform codegen helper for generating v-model value assignment code.
 */
function genAssignmentCode(value, assignment) {
    var res = parseModel(value);
    if (res.key === null) {
        return "".concat(value, "=").concat(assignment);
    }
    else {
        return "$set(".concat(res.exp, ", ").concat(res.key, ", ").concat(assignment, ")");
    }
}
/**
 * Parse a v-model expression into a base path and a final key segment.
 * Handles both dot-path and possible square brackets.
 *
 * Possible cases:
 *
 * - test
 * - test[key]
 * - test[test1[key]]
 * - test["a"][key]
 * - xxx.test[a[a].test1[key]]
 * - test.xxx.a["asa"][test1[key]]
 *
 */
var len, str, chr, index, expressionPos, expressionEndPos;
function parseModel(val) {
    // Fix https://github.com/vuejs/vue/pull/7730
    // allow v-model="obj.val " (trailing whitespace)
    val = val.trim();
    len = val.length;
    if (val.indexOf('[') < 0 || val.lastIndexOf(']') < len - 1) {
        index = val.lastIndexOf('.');
        if (index > -1) {
            return {
                exp: val.slice(0, index),
                key: '"' + val.slice(index + 1) + '"'
            };
        }
        else {
            return {
                exp: val,
                key: null
            };
        }
    }
    str = val;
    index = expressionPos = expressionEndPos = 0;
    while (!eof()) {
        chr = next();
        /* istanbul ignore if */
        if (isStringStart(chr)) {
            parseString(chr);
        }
        else if (chr === 0x5b) {
            parseBracket(chr);
        }
    }
    return {
        exp: val.slice(0, expressionPos),
        key: val.slice(expressionPos + 1, expressionEndPos)
    };
}
function next() {
    return str.charCodeAt(++index);
}
function eof() {
    return index >= len;
}
function isStringStart(chr) {
    return chr === 0x22 || chr === 0x27;
}
function parseBracket(chr) {
    var inBracket = 1;
    expressionPos = index;
    while (!eof()) {
        chr = next();
        if (isStringStart(chr)) {
            parseString(chr);
            continue;
        }
        if (chr === 0x5b)
            inBracket++;
        if (chr === 0x5d)
            inBracket--;
        if (inBracket === 0) {
            expressionEndPos = index;
            break;
        }
    }
}
function parseString(chr) {
    var stringQuote = chr;
    while (!eof()) {
        chr = next();
        if (chr === stringQuote) {
            break;
        }
    }
}

var warn$1;
// in some cases, the event used has to be determined at runtime
// so we used some reserved tokens during compile.
var RANGE_TOKEN = '__r';
var CHECKBOX_RADIO_TOKEN = '__c';
function model$1(el, dir, _warn) {
    warn$1 = _warn;
    var value = dir.value;
    var modifiers = dir.modifiers;
    var tag = el.tag;
    var type = el.attrsMap.type;
    if (true) {
        // inputs with type="file" are read only and setting the input's
        // value will throw an error.
        if (tag === 'input' && type === 'file') {
            warn$1("<".concat(el.tag, " v-model=\"").concat(value, "\" type=\"file\">:\n") +
                "File inputs are read only. Use a v-on:change listener instead.", el.rawAttrsMap['v-model']);
        }
    }
    if (el.component) {
        genComponentModel(el, value, modifiers);
        // component v-model doesn't need extra runtime
        return false;
    }
    else if (tag === 'select') {
        genSelect(el, value, modifiers);
    }
    else if (tag === 'input' && type === 'checkbox') {
        genCheckboxModel(el, value, modifiers);
    }
    else if (tag === 'input' && type === 'radio') {
        genRadioModel(el, value, modifiers);
    }
    else if (tag === 'input' || tag === 'textarea') {
        genDefaultModel(el, value, modifiers);
    }
    else if (!config.isReservedTag(tag)) {
        genComponentModel(el, value, modifiers);
        // component v-model doesn't need extra runtime
        return false;
    }
    else if (true) {
        warn$1("<".concat(el.tag, " v-model=\"").concat(value, "\">: ") +
            "v-model is not supported on this element type. " +
            "If you are working with contenteditable, it's recommended to " +
            'wrap a library dedicated for that purpose inside a custom component.', el.rawAttrsMap['v-model']);
    }
    // ensure runtime directive metadata
    return true;
}
function genCheckboxModel(el, value, modifiers) {
    var number = modifiers && modifiers.number;
    var valueBinding = getBindingAttr(el, 'value') || 'null';
    var trueValueBinding = getBindingAttr(el, 'true-value') || 'true';
    var falseValueBinding = getBindingAttr(el, 'false-value') || 'false';
    addProp(el, 'checked', "Array.isArray(".concat(value, ")") +
        "?_i(".concat(value, ",").concat(valueBinding, ")>-1") +
        (trueValueBinding === 'true'
            ? ":(".concat(value, ")")
            : ":_q(".concat(value, ",").concat(trueValueBinding, ")")));
    addHandler(el, 'change', "var $$a=".concat(value, ",") +
        '$$el=$event.target,' +
        "$$c=$$el.checked?(".concat(trueValueBinding, "):(").concat(falseValueBinding, ");") +
        'if(Array.isArray($$a)){' +
        "var $$v=".concat(number ? '_n(' + valueBinding + ')' : valueBinding, ",") +
        '$$i=_i($$a,$$v);' +
        "if($$el.checked){$$i<0&&(".concat(genAssignmentCode(value, '$$a.concat([$$v])'), ")}") +
        "else{$$i>-1&&(".concat(genAssignmentCode(value, '$$a.slice(0,$$i).concat($$a.slice($$i+1))'), ")}") +
        "}else{".concat(genAssignmentCode(value, '$$c'), "}"), null, true);
}
function genRadioModel(el, value, modifiers) {
    var number = modifiers && modifiers.number;
    var valueBinding = getBindingAttr(el, 'value') || 'null';
    valueBinding = number ? "_n(".concat(valueBinding, ")") : valueBinding;
    addProp(el, 'checked', "_q(".concat(value, ",").concat(valueBinding, ")"));
    addHandler(el, 'change', genAssignmentCode(value, valueBinding), null, true);
}
function genSelect(el, value, modifiers) {
    var number = modifiers && modifiers.number;
    var selectedVal = "Array.prototype.filter" +
        ".call($event.target.options,function(o){return o.selected})" +
        ".map(function(o){var val = \"_value\" in o ? o._value : o.value;" +
        "return ".concat(number ? '_n(val)' : 'val', "})");
    var assignment = '$event.target.multiple ? $$selectedVal : $$selectedVal[0]';
    var code = "var $$selectedVal = ".concat(selectedVal, ";");
    code = "".concat(code, " ").concat(genAssignmentCode(value, assignment));
    addHandler(el, 'change', code, null, true);
}
function genDefaultModel(el, value, modifiers) {
    var type = el.attrsMap.type;
    // warn if v-bind:value conflicts with v-model
    // except for inputs with v-bind:type
    if (true) {
        var value_1 = el.attrsMap['v-bind:value'] || el.attrsMap[':value'];
        var typeBinding = el.attrsMap['v-bind:type'] || el.attrsMap[':type'];
        if (value_1 && !typeBinding) {
            var binding = el.attrsMap['v-bind:value'] ? 'v-bind:value' : ':value';
            warn$1("".concat(binding, "=\"").concat(value_1, "\" conflicts with v-model on the same element ") +
                'because the latter already expands to a value binding internally', el.rawAttrsMap[binding]);
        }
    }
    var _a = modifiers || {}, lazy = _a.lazy, number = _a.number, trim = _a.trim;
    var needCompositionGuard = !lazy && type !== 'range';
    var event = lazy ? 'change' : type === 'range' ? RANGE_TOKEN : 'input';
    var valueExpression = '$event.target.value';
    if (trim) {
        valueExpression = "$event.target.value.trim()";
    }
    if (number) {
        valueExpression = "_n(".concat(valueExpression, ")");
    }
    var code = genAssignmentCode(value, valueExpression);
    if (needCompositionGuard) {
        code = "if($event.target.composing)return;".concat(code);
    }
    addProp(el, 'value', "(".concat(value, ")"));
    addHandler(el, event, code, null, true);
    if (trim || number) {
        addHandler(el, 'blur', '$forceUpdate()');
    }
}

// normalize v-model event tokens that can only be determined at runtime.
// it's important to place the event as the first in the array because
// the whole point is ensuring the v-model callback gets called before
// user-attached handlers.
function normalizeEvents(on) {
    /* istanbul ignore if */
    if (isDef(on[RANGE_TOKEN])) {
        // IE input[type=range] only supports `change` event
        var event_1 = isIE ? 'change' : 'input';
        on[event_1] = [].concat(on[RANGE_TOKEN], on[event_1] || []);
        delete on[RANGE_TOKEN];
    }
    // This was originally intended to fix #4521 but no longer necessary
    // after 2.5. Keeping it for backwards compat with generated code from < 2.4
    /* istanbul ignore if */
    if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
        on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []);
        delete on[CHECKBOX_RADIO_TOKEN];
    }
}
var target;
function createOnceHandler(event, handler, capture) {
    var _target = target; // save current target element in closure
    return function onceHandler() {
        var res = handler.apply(null, arguments);
        if (res !== null) {
            remove(event, onceHandler, capture, _target);
        }
    };
}
// #9446: Firefox <= 53 (in particular, ESR 52) has incorrect Event.timeStamp
// implementation and does not fire microtasks in between event propagation, so
// safe to exclude.
var useMicrotaskFix = isUsingMicroTask && !(isFF && Number(isFF[1]) <= 53);
function add(name, handler, capture, passive) {
    // async edge case #6566: inner click event triggers patch, event handler
    // attached to outer element during patch, and triggered again. This
    // happens because browsers fire microtask ticks between event propagation.
    // the solution is simple: we save the timestamp when a handler is attached,
    // and the handler would only fire if the event passed to it was fired
    // AFTER it was attached.
    if (useMicrotaskFix) {
        var attachedTimestamp_1 = currentFlushTimestamp;
        var original_1 = handler;
        //@ts-expect-error
        handler = original_1._wrapper = function (e) {
            if (
            // no bubbling, should always fire.
            // this is just a safety net in case event.timeStamp is unreliable in
            // certain weird environments...
            e.target === e.currentTarget ||
                // event is fired after handler attachment
                e.timeStamp >= attachedTimestamp_1 ||
                // bail for environments that have buggy event.timeStamp implementations
                // #9462 iOS 9 bug: event.timeStamp is 0 after history.pushState
                // #9681 QtWebEngine event.timeStamp is negative value
                e.timeStamp <= 0 ||
                // #9448 bail if event is fired in another document in a multi-page
                // electron/nw.js app, since event.timeStamp will be using a different
                // starting reference
                e.target.ownerDocument !== document) {
                return original_1.apply(this, arguments);
            }
        };
    }
    target.addEventListener(name, handler, supportsPassive ? { capture: capture, passive: passive } : capture);
}
function remove(name, handler, capture, _target) {
    (_target || target).removeEventListener(name, 
    //@ts-expect-error
    handler._wrapper || handler, capture);
}
function updateDOMListeners(oldVnode, vnode) {
    if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
        return;
    }
    var on = vnode.data.on || {};
    var oldOn = oldVnode.data.on || {};
    // vnode is empty when removing all listeners,
    // and use old vnode dom element
    target = vnode.elm || oldVnode.elm;
    normalizeEvents(on);
    updateListeners(on, oldOn, add, remove, createOnceHandler, vnode.context);
    target = undefined;
}
var events = {
    create: updateDOMListeners,
    update: updateDOMListeners,
    // @ts-expect-error emptyNode has actually data
    destroy: function (vnode) { return updateDOMListeners(vnode, emptyNode); }
};

var svgContainer;
function updateDOMProps(oldVnode, vnode) {
    if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
        return;
    }
    var key, cur;
    var elm = vnode.elm;
    var oldProps = oldVnode.data.domProps || {};
    var props = vnode.data.domProps || {};
    // clone observed objects, as the user probably wants to mutate it
    if (isDef(props.__ob__) || isTrue(props._v_attr_proxy)) {
        props = vnode.data.domProps = extend({}, props);
    }
    for (key in oldProps) {
        if (!(key in props)) {
            elm[key] = '';
        }
    }
    for (key in props) {
        cur = props[key];
        // ignore children if the node has textContent or innerHTML,
        // as these will throw away existing DOM nodes and cause removal errors
        // on subsequent patches (#3360)
        if (key === 'textContent' || key === 'innerHTML') {
            if (vnode.children)
                vnode.children.length = 0;
            if (cur === oldProps[key])
                continue;
            // #6601 work around Chrome version <= 55 bug where single textNode
            // replaced by innerHTML/textContent retains its parentNode property
            if (elm.childNodes.length === 1) {
                elm.removeChild(elm.childNodes[0]);
            }
        }
        if (key === 'value' && elm.tagName !== 'PROGRESS') {
            // store value as _value as well since
            // non-string values will be stringified
            elm._value = cur;
            // avoid resetting cursor position when value is the same
            var strCur = isUndef(cur) ? '' : String(cur);
            if (shouldUpdateValue(elm, strCur)) {
                elm.value = strCur;
            }
        }
        else if (key === 'innerHTML' &&
            isSVG(elm.tagName) &&
            isUndef(elm.innerHTML)) {
            // IE doesn't support innerHTML for SVG elements
            svgContainer = svgContainer || document.createElement('div');
            svgContainer.innerHTML = "<svg>".concat(cur, "</svg>");
            var svg = svgContainer.firstChild;
            while (elm.firstChild) {
                elm.removeChild(elm.firstChild);
            }
            while (svg.firstChild) {
                elm.appendChild(svg.firstChild);
            }
        }
        else if (
        // skip the update if old and new VDOM state is the same.
        // `value` is handled separately because the DOM value may be temporarily
        // out of sync with VDOM state due to focus, composition and modifiers.
        // This  #4521 by skipping the unnecessary `checked` update.
        cur !== oldProps[key]) {
            // some property updates can throw
            // e.g. `value` on <progress> w/ non-finite value
            try {
                elm[key] = cur;
            }
            catch (e) { }
        }
    }
}
function shouldUpdateValue(elm, checkVal) {
    return (
    //@ts-expect-error
    !elm.composing &&
        (elm.tagName === 'OPTION' ||
            isNotInFocusAndDirty(elm, checkVal) ||
            isDirtyWithModifiers(elm, checkVal)));
}
function isNotInFocusAndDirty(elm, checkVal) {
    // return true when textbox (.number and .trim) loses focus and its value is
    // not equal to the updated value
    var notInFocus = true;
    // #6157
    // work around IE bug when accessing document.activeElement in an iframe
    try {
        notInFocus = document.activeElement !== elm;
    }
    catch (e) { }
    return notInFocus && elm.value !== checkVal;
}
function isDirtyWithModifiers(elm, newVal) {
    var value = elm.value;
    var modifiers = elm._vModifiers; // injected by v-model runtime
    if (isDef(modifiers)) {
        if (modifiers.number) {
            return toNumber(value) !== toNumber(newVal);
        }
        if (modifiers.trim) {
            return value.trim() !== newVal.trim();
        }
    }
    return value !== newVal;
}
var domProps = {
    create: updateDOMProps,
    update: updateDOMProps
};

var parseStyleText = cached(function (cssText) {
    var res = {};
    var listDelimiter = /;(?![^(]*\))/g;
    var propertyDelimiter = /:(.+)/;
    cssText.split(listDelimiter).forEach(function (item) {
        if (item) {
            var tmp = item.split(propertyDelimiter);
            tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
        }
    });
    return res;
});
// merge static and dynamic style data on the same vnode
function normalizeStyleData(data) {
    var style = normalizeStyleBinding(data.style);
    // static style is pre-processed into an object during compilation
    // and is always a fresh object, so it's safe to merge into it
    return data.staticStyle ? extend(data.staticStyle, style) : style;
}
// normalize possible array / string values into Object
function normalizeStyleBinding(bindingStyle) {
    if (Array.isArray(bindingStyle)) {
        return toObject(bindingStyle);
    }
    if (typeof bindingStyle === 'string') {
        return parseStyleText(bindingStyle);
    }
    return bindingStyle;
}
/**
 * parent component style should be after child's
 * so that parent component's style could override it
 */
function getStyle(vnode, checkChild) {
    var res = {};
    var styleData;
    if (checkChild) {
        var childNode = vnode;
        while (childNode.componentInstance) {
            childNode = childNode.componentInstance._vnode;
            if (childNode &&
                childNode.data &&
                (styleData = normalizeStyleData(childNode.data))) {
                extend(res, styleData);
            }
        }
    }
    if ((styleData = normalizeStyleData(vnode.data))) {
        extend(res, styleData);
    }
    var parentNode = vnode;
    // @ts-expect-error parentNode.parent not VNodeWithData
    while ((parentNode = parentNode.parent)) {
        if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
            extend(res, styleData);
        }
    }
    return res;
}

var cssVarRE = /^--/;
var importantRE = /\s*!important$/;
var setProp = function (el, name, val) {
    /* istanbul ignore if */
    if (cssVarRE.test(name)) {
        el.style.setProperty(name, val);
    }
    else if (importantRE.test(val)) {
        el.style.setProperty(hyphenate(name), val.replace(importantRE, ''), 'important');
    }
    else {
        var normalizedName = normalize(name);
        if (Array.isArray(val)) {
            // Support values array created by autoprefixer, e.g.
            // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
            // Set them one by one, and the browser will only set those it can recognize
            for (var i = 0, len = val.length; i < len; i++) {
                el.style[normalizedName] = val[i];
            }
        }
        else {
            el.style[normalizedName] = val;
        }
    }
};
var vendorNames = ['Webkit', 'Moz', 'ms'];
var emptyStyle;
var normalize = cached(function (prop) {
    emptyStyle = emptyStyle || document.createElement('div').style;
    prop = camelize(prop);
    if (prop !== 'filter' && prop in emptyStyle) {
        return prop;
    }
    var capName = prop.charAt(0).toUpperCase() + prop.slice(1);
    for (var i = 0; i < vendorNames.length; i++) {
        var name_1 = vendorNames[i] + capName;
        if (name_1 in emptyStyle) {
            return name_1;
        }
    }
});
function updateStyle(oldVnode, vnode) {
    var data = vnode.data;
    var oldData = oldVnode.data;
    if (isUndef(data.staticStyle) &&
        isUndef(data.style) &&
        isUndef(oldData.staticStyle) &&
        isUndef(oldData.style)) {
        return;
    }
    var cur, name;
    var el = vnode.elm;
    var oldStaticStyle = oldData.staticStyle;
    var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};
    // if static style exists, stylebinding already merged into it when doing normalizeStyleData
    var oldStyle = oldStaticStyle || oldStyleBinding;
    var style = normalizeStyleBinding(vnode.data.style) || {};
    // store normalized style under a different key for next diff
    // make sure to clone it if it's reactive, since the user likely wants
    // to mutate it.
    vnode.data.normalizedStyle = isDef(style.__ob__) ? extend({}, style) : style;
    var newStyle = getStyle(vnode, true);
    for (name in oldStyle) {
        if (isUndef(newStyle[name])) {
            setProp(el, name, '');
        }
    }
    for (name in newStyle) {
        cur = newStyle[name];
        if (cur !== oldStyle[name]) {
            // ie9 setting to null has no effect, must use empty string
            setProp(el, name, cur == null ? '' : cur);
        }
    }
}
var style$1 = {
    create: updateStyle,
    update: updateStyle
};

var whitespaceRE$1 = /\s+/;
/**
 * Add class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function addClass(el, cls) {
    /* istanbul ignore if */
    if (!cls || !(cls = cls.trim())) {
        return;
    }
    /* istanbul ignore else */
    if (el.classList) {
        if (cls.indexOf(' ') > -1) {
            cls.split(whitespaceRE$1).forEach(function (c) { return el.classList.add(c); });
        }
        else {
            el.classList.add(cls);
        }
    }
    else {
        var cur = " ".concat(el.getAttribute('class') || '', " ");
        if (cur.indexOf(' ' + cls + ' ') < 0) {
            el.setAttribute('class', (cur + cls).trim());
        }
    }
}
/**
 * Remove class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function removeClass(el, cls) {
    /* istanbul ignore if */
    if (!cls || !(cls = cls.trim())) {
        return;
    }
    /* istanbul ignore else */
    if (el.classList) {
        if (cls.indexOf(' ') > -1) {
            cls.split(whitespaceRE$1).forEach(function (c) { return el.classList.remove(c); });
        }
        else {
            el.classList.remove(cls);
        }
        if (!el.classList.length) {
            el.removeAttribute('class');
        }
    }
    else {
        var cur = " ".concat(el.getAttribute('class') || '', " ");
        var tar = ' ' + cls + ' ';
        while (cur.indexOf(tar) >= 0) {
            cur = cur.replace(tar, ' ');
        }
        cur = cur.trim();
        if (cur) {
            el.setAttribute('class', cur);
        }
        else {
            el.removeAttribute('class');
        }
    }
}

function resolveTransition(def) {
    if (!def) {
        return;
    }
    /* istanbul ignore else */
    if (typeof def === 'object') {
        var res = {};
        if (def.css !== false) {
            extend(res, autoCssTransition(def.name || 'v'));
        }
        extend(res, def);
        return res;
    }
    else if (typeof def === 'string') {
        return autoCssTransition(def);
    }
}
var autoCssTransition = cached(function (name) {
    return {
        enterClass: "".concat(name, "-enter"),
        enterToClass: "".concat(name, "-enter-to"),
        enterActiveClass: "".concat(name, "-enter-active"),
        leaveClass: "".concat(name, "-leave"),
        leaveToClass: "".concat(name, "-leave-to"),
        leaveActiveClass: "".concat(name, "-leave-active")
    };
});
var hasTransition = inBrowser && !isIE9;
var TRANSITION = 'transition';
var ANIMATION = 'animation';
// Transition property/event sniffing
var transitionProp = 'transition';
var transitionEndEvent = 'transitionend';
var animationProp = 'animation';
var animationEndEvent = 'animationend';
if (hasTransition) {
    /* istanbul ignore if */
    if (window.ontransitionend === undefined &&
        window.onwebkittransitionend !== undefined) {
        transitionProp = 'WebkitTransition';
        transitionEndEvent = 'webkitTransitionEnd';
    }
    if (window.onanimationend === undefined &&
        window.onwebkitanimationend !== undefined) {
        animationProp = 'WebkitAnimation';
        animationEndEvent = 'webkitAnimationEnd';
    }
}
// binding to window is necessary to make hot reload work in IE in strict mode
var raf = inBrowser
    ? window.requestAnimationFrame
        ? window.requestAnimationFrame.bind(window)
        : setTimeout
    : /* istanbul ignore next */ function (/* istanbul ignore next */ fn) { return fn(); };
function nextFrame(fn) {
    raf(function () {
        // @ts-expect-error
        raf(fn);
    });
}
function addTransitionClass(el, cls) {
    var transitionClasses = el._transitionClasses || (el._transitionClasses = []);
    if (transitionClasses.indexOf(cls) < 0) {
        transitionClasses.push(cls);
        addClass(el, cls);
    }
}
function removeTransitionClass(el, cls) {
    if (el._transitionClasses) {
        remove$2(el._transitionClasses, cls);
    }
    removeClass(el, cls);
}
function whenTransitionEnds(el, expectedType, cb) {
    var _a = getTransitionInfo(el, expectedType), type = _a.type, timeout = _a.timeout, propCount = _a.propCount;
    if (!type)
        return cb();
    var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
    var ended = 0;
    var end = function () {
        el.removeEventListener(event, onEnd);
        cb();
    };
    var onEnd = function (e) {
        if (e.target === el) {
            if (++ended >= propCount) {
                end();
            }
        }
    };
    setTimeout(function () {
        if (ended < propCount) {
            end();
        }
    }, timeout + 1);
    el.addEventListener(event, onEnd);
}
var transformRE = /\b(transform|all)(,|$)/;
function getTransitionInfo(el, expectedType) {
    var styles = window.getComputedStyle(el);
    // JSDOM may return undefined for transition properties
    var transitionDelays = (styles[transitionProp + 'Delay'] || '').split(', ');
    var transitionDurations = (styles[transitionProp + 'Duration'] || '').split(', ');
    var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
    var animationDelays = (styles[animationProp + 'Delay'] || '').split(', ');
    var animationDurations = (styles[animationProp + 'Duration'] || '').split(', ');
    var animationTimeout = getTimeout(animationDelays, animationDurations);
    var type;
    var timeout = 0;
    var propCount = 0;
    /* istanbul ignore if */
    if (expectedType === TRANSITION) {
        if (transitionTimeout > 0) {
            type = TRANSITION;
            timeout = transitionTimeout;
            propCount = transitionDurations.length;
        }
    }
    else if (expectedType === ANIMATION) {
        if (animationTimeout > 0) {
            type = ANIMATION;
            timeout = animationTimeout;
            propCount = animationDurations.length;
        }
    }
    else {
        timeout = Math.max(transitionTimeout, animationTimeout);
        type =
            timeout > 0
                ? transitionTimeout > animationTimeout
                    ? TRANSITION
                    : ANIMATION
                : null;
        propCount = type
            ? type === TRANSITION
                ? transitionDurations.length
                : animationDurations.length
            : 0;
    }
    var hasTransform = type === TRANSITION && transformRE.test(styles[transitionProp + 'Property']);
    return {
        type: type,
        timeout: timeout,
        propCount: propCount,
        hasTransform: hasTransform
    };
}
function getTimeout(delays, durations) {
    /* istanbul ignore next */
    while (delays.length < durations.length) {
        delays = delays.concat(delays);
    }
    return Math.max.apply(null, durations.map(function (d, i) {
        return toMs(d) + toMs(delays[i]);
    }));
}
// Old versions of Chromium (below 61.0.3163.100) formats floating pointer numbers
// in a locale-dependent way, using a comma instead of a dot.
// If comma is not replaced with a dot, the input will be rounded down (i.e. acting
// as a floor function) causing unexpected behaviors
function toMs(s) {
    return Number(s.slice(0, -1).replace(',', '.')) * 1000;
}

function enter(vnode, toggleDisplay) {
    var el = vnode.elm;
    // call leave callback now
    if (isDef(el._leaveCb)) {
        el._leaveCb.cancelled = true;
        el._leaveCb();
    }
    var data = resolveTransition(vnode.data.transition);
    if (isUndef(data)) {
        return;
    }
    /* istanbul ignore if */
    if (isDef(el._enterCb) || el.nodeType !== 1) {
        return;
    }
    var css = data.css, type = data.type, enterClass = data.enterClass, enterToClass = data.enterToClass, enterActiveClass = data.enterActiveClass, appearClass = data.appearClass, appearToClass = data.appearToClass, appearActiveClass = data.appearActiveClass, beforeEnter = data.beforeEnter, enter = data.enter, afterEnter = data.afterEnter, enterCancelled = data.enterCancelled, beforeAppear = data.beforeAppear, appear = data.appear, afterAppear = data.afterAppear, appearCancelled = data.appearCancelled, duration = data.duration;
    // activeInstance will always be the <transition> component managing this
    // transition. One edge case to check is when the <transition> is placed
    // as the root node of a child component. In that case we need to check
    // <transition>'s parent for appear check.
    var context = activeInstance;
    var transitionNode = activeInstance.$vnode;
    while (transitionNode && transitionNode.parent) {
        context = transitionNode.context;
        transitionNode = transitionNode.parent;
    }
    var isAppear = !context._isMounted || !vnode.isRootInsert;
    if (isAppear && !appear && appear !== '') {
        return;
    }
    var startClass = isAppear && appearClass ? appearClass : enterClass;
    var activeClass = isAppear && appearActiveClass ? appearActiveClass : enterActiveClass;
    var toClass = isAppear && appearToClass ? appearToClass : enterToClass;
    var beforeEnterHook = isAppear ? beforeAppear || beforeEnter : beforeEnter;
    var enterHook = isAppear ? (isFunction(appear) ? appear : enter) : enter;
    var afterEnterHook = isAppear ? afterAppear || afterEnter : afterEnter;
    var enterCancelledHook = isAppear
        ? appearCancelled || enterCancelled
        : enterCancelled;
    var explicitEnterDuration = toNumber(isObject(duration) ? duration.enter : duration);
    if ( true && explicitEnterDuration != null) {
        checkDuration(explicitEnterDuration, 'enter', vnode);
    }
    var expectsCSS = css !== false && !isIE9;
    var userWantsControl = getHookArgumentsLength(enterHook);
    var cb = (el._enterCb = once(function () {
        if (expectsCSS) {
            removeTransitionClass(el, toClass);
            removeTransitionClass(el, activeClass);
        }
        // @ts-expect-error
        if (cb.cancelled) {
            if (expectsCSS) {
                removeTransitionClass(el, startClass);
            }
            enterCancelledHook && enterCancelledHook(el);
        }
        else {
            afterEnterHook && afterEnterHook(el);
        }
        el._enterCb = null;
    }));
    if (!vnode.data.show) {
        // remove pending leave element on enter by injecting an insert hook
        mergeVNodeHook(vnode, 'insert', function () {
            var parent = el.parentNode;
            var pendingNode = parent && parent._pending && parent._pending[vnode.key];
            if (pendingNode &&
                pendingNode.tag === vnode.tag &&
                pendingNode.elm._leaveCb) {
                pendingNode.elm._leaveCb();
            }
            enterHook && enterHook(el, cb);
        });
    }
    // start enter transition
    beforeEnterHook && beforeEnterHook(el);
    if (expectsCSS) {
        addTransitionClass(el, startClass);
        addTransitionClass(el, activeClass);
        nextFrame(function () {
            removeTransitionClass(el, startClass);
            // @ts-expect-error
            if (!cb.cancelled) {
                addTransitionClass(el, toClass);
                if (!userWantsControl) {
                    if (isValidDuration(explicitEnterDuration)) {
                        setTimeout(cb, explicitEnterDuration);
                    }
                    else {
                        whenTransitionEnds(el, type, cb);
                    }
                }
            }
        });
    }
    if (vnode.data.show) {
        toggleDisplay && toggleDisplay();
        enterHook && enterHook(el, cb);
    }
    if (!expectsCSS && !userWantsControl) {
        cb();
    }
}
function leave(vnode, rm) {
    var el = vnode.elm;
    // call enter callback now
    if (isDef(el._enterCb)) {
        el._enterCb.cancelled = true;
        el._enterCb();
    }
    var data = resolveTransition(vnode.data.transition);
    if (isUndef(data) || el.nodeType !== 1) {
        return rm();
    }
    /* istanbul ignore if */
    if (isDef(el._leaveCb)) {
        return;
    }
    var css = data.css, type = data.type, leaveClass = data.leaveClass, leaveToClass = data.leaveToClass, leaveActiveClass = data.leaveActiveClass, beforeLeave = data.beforeLeave, leave = data.leave, afterLeave = data.afterLeave, leaveCancelled = data.leaveCancelled, delayLeave = data.delayLeave, duration = data.duration;
    var expectsCSS = css !== false && !isIE9;
    var userWantsControl = getHookArgumentsLength(leave);
    var explicitLeaveDuration = toNumber(isObject(duration) ? duration.leave : duration);
    if ( true && isDef(explicitLeaveDuration)) {
        checkDuration(explicitLeaveDuration, 'leave', vnode);
    }
    var cb = (el._leaveCb = once(function () {
        if (el.parentNode && el.parentNode._pending) {
            el.parentNode._pending[vnode.key] = null;
        }
        if (expectsCSS) {
            removeTransitionClass(el, leaveToClass);
            removeTransitionClass(el, leaveActiveClass);
        }
        // @ts-expect-error
        if (cb.cancelled) {
            if (expectsCSS) {
                removeTransitionClass(el, leaveClass);
            }
            leaveCancelled && leaveCancelled(el);
        }
        else {
            rm();
            afterLeave && afterLeave(el);
        }
        el._leaveCb = null;
    }));
    if (delayLeave) {
        delayLeave(performLeave);
    }
    else {
        performLeave();
    }
    function performLeave() {
        // the delayed leave may have already been cancelled
        // @ts-expect-error
        if (cb.cancelled) {
            return;
        }
        // record leaving element
        if (!vnode.data.show && el.parentNode) {
            (el.parentNode._pending || (el.parentNode._pending = {}))[vnode.key] =
                vnode;
        }
        beforeLeave && beforeLeave(el);
        if (expectsCSS) {
            addTransitionClass(el, leaveClass);
            addTransitionClass(el, leaveActiveClass);
            nextFrame(function () {
                removeTransitionClass(el, leaveClass);
                // @ts-expect-error
                if (!cb.cancelled) {
                    addTransitionClass(el, leaveToClass);
                    if (!userWantsControl) {
                        if (isValidDuration(explicitLeaveDuration)) {
                            setTimeout(cb, explicitLeaveDuration);
                        }
                        else {
                            whenTransitionEnds(el, type, cb);
                        }
                    }
                }
            });
        }
        leave && leave(el, cb);
        if (!expectsCSS && !userWantsControl) {
            cb();
        }
    }
}
// only used in dev mode
function checkDuration(val, name, vnode) {
    if (typeof val !== 'number') {
        warn$2("<transition> explicit ".concat(name, " duration is not a valid number - ") +
            "got ".concat(JSON.stringify(val), "."), vnode.context);
    }
    else if (isNaN(val)) {
        warn$2("<transition> explicit ".concat(name, " duration is NaN - ") +
            'the duration expression might be incorrect.', vnode.context);
    }
}
function isValidDuration(val) {
    return typeof val === 'number' && !isNaN(val);
}
/**
 * Normalize a transition hook's argument length. The hook may be:
 * - a merged hook (invoker) with the original in .fns
 * - a wrapped component method (check ._length)
 * - a plain function (.length)
 */
function getHookArgumentsLength(fn) {
    if (isUndef(fn)) {
        return false;
    }
    // @ts-expect-error
    var invokerFns = fn.fns;
    if (isDef(invokerFns)) {
        // invoker
        return getHookArgumentsLength(Array.isArray(invokerFns) ? invokerFns[0] : invokerFns);
    }
    else {
        // @ts-expect-error
        return (fn._length || fn.length) > 1;
    }
}
function _enter(_, vnode) {
    if (vnode.data.show !== true) {
        enter(vnode);
    }
}
var transition = inBrowser
    ? {
        create: _enter,
        activate: _enter,
        remove: function (vnode, rm) {
            /* istanbul ignore else */
            if (vnode.data.show !== true) {
                // @ts-expect-error
                leave(vnode, rm);
            }
            else {
                rm();
            }
        }
    }
    : {};

var platformModules = [attrs, klass$1, events, domProps, style$1, transition];

// the directive module should be applied last, after all
// built-in modules have been applied.
var modules$1 = platformModules.concat(baseModules);
var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules$1 });

/**
 * Not type checking this file because flow doesn't like attaching
 * properties to Elements.
 */
/* istanbul ignore if */
if (isIE9) {
    // http://www.matts411.com/post/internet-explorer-9-oninput/
    document.addEventListener('selectionchange', function () {
        var el = document.activeElement;
        // @ts-expect-error
        if (el && el.vmodel) {
            trigger(el, 'input');
        }
    });
}
var directive = {
    inserted: function (el, binding, vnode, oldVnode) {
        if (vnode.tag === 'select') {
            // #6903
            if (oldVnode.elm && !oldVnode.elm._vOptions) {
                mergeVNodeHook(vnode, 'postpatch', function () {
                    directive.componentUpdated(el, binding, vnode);
                });
            }
            else {
                setSelected(el, binding, vnode.context);
            }
            el._vOptions = [].map.call(el.options, getValue);
        }
        else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
            el._vModifiers = binding.modifiers;
            if (!binding.modifiers.lazy) {
                el.addEventListener('compositionstart', onCompositionStart);
                el.addEventListener('compositionend', onCompositionEnd);
                // Safari < 10.2 & UIWebView doesn't fire compositionend when
                // switching focus before confirming composition choice
                // this also fixes the issue where some browsers e.g. iOS Chrome
                // fires "change" instead of "input" on autocomplete.
                el.addEventListener('change', onCompositionEnd);
                /* istanbul ignore if */
                if (isIE9) {
                    el.vmodel = true;
                }
            }
        }
    },
    componentUpdated: function (el, binding, vnode) {
        if (vnode.tag === 'select') {
            setSelected(el, binding, vnode.context);
            // in case the options rendered by v-for have changed,
            // it's possible that the value is out-of-sync with the rendered options.
            // detect such cases and filter out values that no longer has a matching
            // option in the DOM.
            var prevOptions_1 = el._vOptions;
            var curOptions_1 = (el._vOptions = [].map.call(el.options, getValue));
            if (curOptions_1.some(function (o, i) { return !looseEqual(o, prevOptions_1[i]); })) {
                // trigger change event if
                // no matching option found for at least one value
                var needReset = el.multiple
                    ? binding.value.some(function (v) { return hasNoMatchingOption(v, curOptions_1); })
                    : binding.value !== binding.oldValue &&
                        hasNoMatchingOption(binding.value, curOptions_1);
                if (needReset) {
                    trigger(el, 'change');
                }
            }
        }
    }
};
function setSelected(el, binding, vm) {
    actuallySetSelected(el, binding, vm);
    /* istanbul ignore if */
    if (isIE || isEdge) {
        setTimeout(function () {
            actuallySetSelected(el, binding, vm);
        }, 0);
    }
}
function actuallySetSelected(el, binding, vm) {
    var value = binding.value;
    var isMultiple = el.multiple;
    if (isMultiple && !Array.isArray(value)) {
         true &&
            warn$2("<select multiple v-model=\"".concat(binding.expression, "\"> ") +
                "expects an Array value for its binding, but got ".concat(Object.prototype.toString
                    .call(value)
                    .slice(8, -1)), vm);
        return;
    }
    var selected, option;
    for (var i = 0, l = el.options.length; i < l; i++) {
        option = el.options[i];
        if (isMultiple) {
            selected = looseIndexOf(value, getValue(option)) > -1;
            if (option.selected !== selected) {
                option.selected = selected;
            }
        }
        else {
            if (looseEqual(getValue(option), value)) {
                if (el.selectedIndex !== i) {
                    el.selectedIndex = i;
                }
                return;
            }
        }
    }
    if (!isMultiple) {
        el.selectedIndex = -1;
    }
}
function hasNoMatchingOption(value, options) {
    return options.every(function (o) { return !looseEqual(o, value); });
}
function getValue(option) {
    return '_value' in option ? option._value : option.value;
}
function onCompositionStart(e) {
    e.target.composing = true;
}
function onCompositionEnd(e) {
    // prevent triggering an input event for no reason
    if (!e.target.composing)
        return;
    e.target.composing = false;
    trigger(e.target, 'input');
}
function trigger(el, type) {
    var e = document.createEvent('HTMLEvents');
    e.initEvent(type, true, true);
    el.dispatchEvent(e);
}

// recursively search for possible transition defined inside the component root
function locateNode(vnode) {
    // @ts-expect-error
    return vnode.componentInstance && (!vnode.data || !vnode.data.transition)
        ? locateNode(vnode.componentInstance._vnode)
        : vnode;
}
var show = {
    bind: function (el, _a, vnode) {
        var value = _a.value;
        vnode = locateNode(vnode);
        var transition = vnode.data && vnode.data.transition;
        var originalDisplay = (el.__vOriginalDisplay =
            el.style.display === 'none' ? '' : el.style.display);
        if (value && transition) {
            vnode.data.show = true;
            enter(vnode, function () {
                el.style.display = originalDisplay;
            });
        }
        else {
            el.style.display = value ? originalDisplay : 'none';
        }
    },
    update: function (el, _a, vnode) {
        var value = _a.value, oldValue = _a.oldValue;
        /* istanbul ignore if */
        if (!value === !oldValue)
            return;
        vnode = locateNode(vnode);
        var transition = vnode.data && vnode.data.transition;
        if (transition) {
            vnode.data.show = true;
            if (value) {
                enter(vnode, function () {
                    el.style.display = el.__vOriginalDisplay;
                });
            }
            else {
                leave(vnode, function () {
                    el.style.display = 'none';
                });
            }
        }
        else {
            el.style.display = value ? el.__vOriginalDisplay : 'none';
        }
    },
    unbind: function (el, binding, vnode, oldVnode, isDestroy) {
        if (!isDestroy) {
            el.style.display = el.__vOriginalDisplay;
        }
    }
};

var platformDirectives = {
    model: directive,
    show: show
};

// Provides transition support for a single element/component.
var transitionProps = {
    name: String,
    appear: Boolean,
    css: Boolean,
    mode: String,
    type: String,
    enterClass: String,
    leaveClass: String,
    enterToClass: String,
    leaveToClass: String,
    enterActiveClass: String,
    leaveActiveClass: String,
    appearClass: String,
    appearActiveClass: String,
    appearToClass: String,
    duration: [Number, String, Object]
};
// in case the child is also an abstract component, e.g. <keep-alive>
// we want to recursively retrieve the real component to be rendered
function getRealChild(vnode) {
    var compOptions = vnode && vnode.componentOptions;
    if (compOptions && compOptions.Ctor.options.abstract) {
        return getRealChild(getFirstComponentChild(compOptions.children));
    }
    else {
        return vnode;
    }
}
function extractTransitionData(comp) {
    var data = {};
    var options = comp.$options;
    // props
    for (var key in options.propsData) {
        data[key] = comp[key];
    }
    // events.
    // extract listeners and pass them directly to the transition methods
    var listeners = options._parentListeners;
    for (var key in listeners) {
        data[camelize(key)] = listeners[key];
    }
    return data;
}
function placeholder(h, rawChild) {
    // @ts-expect-error
    if (/\d-keep-alive$/.test(rawChild.tag)) {
        return h('keep-alive', {
            props: rawChild.componentOptions.propsData
        });
    }
}
function hasParentTransition(vnode) {
    while ((vnode = vnode.parent)) {
        if (vnode.data.transition) {
            return true;
        }
    }
}
function isSameChild(child, oldChild) {
    return oldChild.key === child.key && oldChild.tag === child.tag;
}
var isNotTextNode = function (c) { return c.tag || isAsyncPlaceholder(c); };
var isVShowDirective = function (d) { return d.name === 'show'; };
var Transition = {
    name: 'transition',
    props: transitionProps,
    abstract: true,
    render: function (h) {
        var _this = this;
        var children = this.$slots.default;
        if (!children) {
            return;
        }
        // filter out text nodes (possible whitespaces)
        children = children.filter(isNotTextNode);
        /* istanbul ignore if */
        if (!children.length) {
            return;
        }
        // warn multiple elements
        if ( true && children.length > 1) {
            warn$2('<transition> can only be used on a single element. Use ' +
                '<transition-group> for lists.', this.$parent);
        }
        var mode = this.mode;
        // warn invalid mode
        if ( true && mode && mode !== 'in-out' && mode !== 'out-in') {
            warn$2('invalid <transition> mode: ' + mode, this.$parent);
        }
        var rawChild = children[0];
        // if this is a component root node and the component's
        // parent container node also has transition, skip.
        if (hasParentTransition(this.$vnode)) {
            return rawChild;
        }
        // apply transition data to child
        // use getRealChild() to ignore abstract components e.g. keep-alive
        var child = getRealChild(rawChild);
        /* istanbul ignore if */
        if (!child) {
            return rawChild;
        }
        if (this._leaving) {
            return placeholder(h, rawChild);
        }
        // ensure a key that is unique to the vnode type and to this transition
        // component instance. This key will be used to remove pending leaving nodes
        // during entering.
        var id = "__transition-".concat(this._uid, "-");
        child.key =
            child.key == null
                ? child.isComment
                    ? id + 'comment'
                    : id + child.tag
                : isPrimitive(child.key)
                    ? String(child.key).indexOf(id) === 0
                        ? child.key
                        : id + child.key
                    : child.key;
        var data = ((child.data || (child.data = {})).transition =
            extractTransitionData(this));
        var oldRawChild = this._vnode;
        var oldChild = getRealChild(oldRawChild);
        // mark v-show
        // so that the transition module can hand over the control to the directive
        if (child.data.directives && child.data.directives.some(isVShowDirective)) {
            child.data.show = true;
        }
        if (oldChild &&
            oldChild.data &&
            !isSameChild(child, oldChild) &&
            !isAsyncPlaceholder(oldChild) &&
            // #6687 component root is a comment node
            !(oldChild.componentInstance &&
                oldChild.componentInstance._vnode.isComment)) {
            // replace old child transition data with fresh one
            // important for dynamic transitions!
            var oldData = (oldChild.data.transition = extend({}, data));
            // handle transition mode
            if (mode === 'out-in') {
                // return placeholder node and queue update when leave finishes
                this._leaving = true;
                mergeVNodeHook(oldData, 'afterLeave', function () {
                    _this._leaving = false;
                    _this.$forceUpdate();
                });
                return placeholder(h, rawChild);
            }
            else if (mode === 'in-out') {
                if (isAsyncPlaceholder(child)) {
                    return oldRawChild;
                }
                var delayedLeave_1;
                var performLeave = function () {
                    delayedLeave_1();
                };
                mergeVNodeHook(data, 'afterEnter', performLeave);
                mergeVNodeHook(data, 'enterCancelled', performLeave);
                mergeVNodeHook(oldData, 'delayLeave', function (leave) {
                    delayedLeave_1 = leave;
                });
            }
        }
        return rawChild;
    }
};

// Provides transition support for list items.
var props = extend({
    tag: String,
    moveClass: String
}, transitionProps);
delete props.mode;
var TransitionGroup = {
    props: props,
    beforeMount: function () {
        var _this = this;
        var update = this._update;
        this._update = function (vnode, hydrating) {
            var restoreActiveInstance = setActiveInstance(_this);
            // force removing pass
            _this.__patch__(_this._vnode, _this.kept, false, // hydrating
            true // removeOnly (!important, avoids unnecessary moves)
            );
            _this._vnode = _this.kept;
            restoreActiveInstance();
            update.call(_this, vnode, hydrating);
        };
    },
    render: function (h) {
        var tag = this.tag || this.$vnode.data.tag || 'span';
        var map = Object.create(null);
        var prevChildren = (this.prevChildren = this.children);
        var rawChildren = this.$slots.default || [];
        var children = (this.children = []);
        var transitionData = extractTransitionData(this);
        for (var i = 0; i < rawChildren.length; i++) {
            var c = rawChildren[i];
            if (c.tag) {
                if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
                    children.push(c);
                    map[c.key] = c;
                    (c.data || (c.data = {})).transition = transitionData;
                }
                else if (true) {
                    var opts = c.componentOptions;
                    var name_1 = opts
                        ? getComponentName(opts.Ctor.options) || opts.tag || ''
                        : c.tag;
                    warn$2("<transition-group> children must be keyed: <".concat(name_1, ">"));
                }
            }
        }
        if (prevChildren) {
            var kept = [];
            var removed = [];
            for (var i = 0; i < prevChildren.length; i++) {
                var c = prevChildren[i];
                c.data.transition = transitionData;
                // @ts-expect-error .getBoundingClientRect is not typed in Node
                c.data.pos = c.elm.getBoundingClientRect();
                if (map[c.key]) {
                    kept.push(c);
                }
                else {
                    removed.push(c);
                }
            }
            this.kept = h(tag, null, kept);
            this.removed = removed;
        }
        return h(tag, null, children);
    },
    updated: function () {
        var children = this.prevChildren;
        var moveClass = this.moveClass || (this.name || 'v') + '-move';
        if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
            return;
        }
        // we divide the work into three loops to avoid mixing DOM reads and writes
        // in each iteration - which helps prevent layout thrashing.
        children.forEach(callPendingCbs);
        children.forEach(recordPosition);
        children.forEach(applyTranslation);
        // force reflow to put everything in position
        // assign to this to avoid being removed in tree-shaking
        // $flow-disable-line
        this._reflow = document.body.offsetHeight;
        children.forEach(function (c) {
            if (c.data.moved) {
                var el_1 = c.elm;
                var s = el_1.style;
                addTransitionClass(el_1, moveClass);
                s.transform = s.WebkitTransform = s.transitionDuration = '';
                el_1.addEventListener(transitionEndEvent, (el_1._moveCb = function cb(e) {
                    if (e && e.target !== el_1) {
                        return;
                    }
                    if (!e || /transform$/.test(e.propertyName)) {
                        el_1.removeEventListener(transitionEndEvent, cb);
                        el_1._moveCb = null;
                        removeTransitionClass(el_1, moveClass);
                    }
                }));
            }
        });
    },
    methods: {
        hasMove: function (el, moveClass) {
            /* istanbul ignore if */
            if (!hasTransition) {
                return false;
            }
            /* istanbul ignore if */
            if (this._hasMove) {
                return this._hasMove;
            }
            // Detect whether an element with the move class applied has
            // CSS transitions. Since the element may be inside an entering
            // transition at this very moment, we make a clone of it and remove
            // all other transition classes applied to ensure only the move class
            // is applied.
            var clone = el.cloneNode();
            if (el._transitionClasses) {
                el._transitionClasses.forEach(function (cls) {
                    removeClass(clone, cls);
                });
            }
            addClass(clone, moveClass);
            clone.style.display = 'none';
            this.$el.appendChild(clone);
            var info = getTransitionInfo(clone);
            this.$el.removeChild(clone);
            return (this._hasMove = info.hasTransform);
        }
    }
};
function callPendingCbs(c) {
    /* istanbul ignore if */
    if (c.elm._moveCb) {
        c.elm._moveCb();
    }
    /* istanbul ignore if */
    if (c.elm._enterCb) {
        c.elm._enterCb();
    }
}
function recordPosition(c) {
    c.data.newPos = c.elm.getBoundingClientRect();
}
function applyTranslation(c) {
    var oldPos = c.data.pos;
    var newPos = c.data.newPos;
    var dx = oldPos.left - newPos.left;
    var dy = oldPos.top - newPos.top;
    if (dx || dy) {
        c.data.moved = true;
        var s = c.elm.style;
        s.transform = s.WebkitTransform = "translate(".concat(dx, "px,").concat(dy, "px)");
        s.transitionDuration = '0s';
    }
}

var platformComponents = {
    Transition: Transition,
    TransitionGroup: TransitionGroup
};

// install platform specific utils
Vue.config.mustUseProp = mustUseProp;
Vue.config.isReservedTag = isReservedTag;
Vue.config.isReservedAttr = isReservedAttr;
Vue.config.getTagNamespace = getTagNamespace;
Vue.config.isUnknownElement = isUnknownElement;
// install platform runtime directives & components
extend(Vue.options.directives, platformDirectives);
extend(Vue.options.components, platformComponents);
// install platform patch function
Vue.prototype.__patch__ = inBrowser ? patch : noop;
// public mount method
Vue.prototype.$mount = function (el, hydrating) {
    el = el && inBrowser ? query(el) : undefined;
    return mountComponent(this, el, hydrating);
};
// devtools global hook
/* istanbul ignore next */
if (inBrowser) {
    setTimeout(function () {
        if (config.devtools) {
            if (devtools) {
                devtools.emit('init', Vue);
            }
            else if (true) {
                // @ts-expect-error
                console[console.info ? 'info' : 'log']('Download the Vue Devtools extension for a better development experience:\n' +
                    'https://github.com/vuejs/vue-devtools');
            }
        }
        if ( true &&
            config.productionTip !== false &&
            typeof console !== 'undefined') {
            // @ts-expect-error
            console[console.info ? 'info' : 'log']("You are running Vue in development mode.\n" +
                "Make sure to turn on production mode when deploying for production.\n" +
                "See more tips at https://vuejs.org/guide/deployment.html");
        }
    }, 0);
}

var defaultTagRE = /\{\{((?:.|\r?\n)+?)\}\}/g;
var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;
var buildRegex = cached(function (delimiters) {
    var open = delimiters[0].replace(regexEscapeRE, '\\$&');
    var close = delimiters[1].replace(regexEscapeRE, '\\$&');
    return new RegExp(open + '((?:.|\\n)+?)' + close, 'g');
});
function parseText(text, delimiters) {
    //@ts-expect-error
    var tagRE = delimiters ? buildRegex(delimiters) : defaultTagRE;
    if (!tagRE.test(text)) {
        return;
    }
    var tokens = [];
    var rawTokens = [];
    var lastIndex = (tagRE.lastIndex = 0);
    var match, index, tokenValue;
    while ((match = tagRE.exec(text))) {
        index = match.index;
        // push text token
        if (index > lastIndex) {
            rawTokens.push((tokenValue = text.slice(lastIndex, index)));
            tokens.push(JSON.stringify(tokenValue));
        }
        // tag token
        var exp = parseFilters(match[1].trim());
        tokens.push("_s(".concat(exp, ")"));
        rawTokens.push({ '@binding': exp });
        lastIndex = index + match[0].length;
    }
    if (lastIndex < text.length) {
        rawTokens.push((tokenValue = text.slice(lastIndex)));
        tokens.push(JSON.stringify(tokenValue));
    }
    return {
        expression: tokens.join('+'),
        tokens: rawTokens
    };
}

function transformNode$1(el, options) {
    var warn = options.warn || baseWarn;
    var staticClass = getAndRemoveAttr(el, 'class');
    if ( true && staticClass) {
        var res = parseText(staticClass, options.delimiters);
        if (res) {
            warn("class=\"".concat(staticClass, "\": ") +
                'Interpolation inside attributes has been removed. ' +
                'Use v-bind or the colon shorthand instead. For example, ' +
                'instead of <div class="{{ val }}">, use <div :class="val">.', el.rawAttrsMap['class']);
        }
    }
    if (staticClass) {
        el.staticClass = JSON.stringify(staticClass.replace(/\s+/g, ' ').trim());
    }
    var classBinding = getBindingAttr(el, 'class', false /* getStatic */);
    if (classBinding) {
        el.classBinding = classBinding;
    }
}
function genData$2(el) {
    var data = '';
    if (el.staticClass) {
        data += "staticClass:".concat(el.staticClass, ",");
    }
    if (el.classBinding) {
        data += "class:".concat(el.classBinding, ",");
    }
    return data;
}
var klass = {
    staticKeys: ['staticClass'],
    transformNode: transformNode$1,
    genData: genData$2
};

function transformNode(el, options) {
    var warn = options.warn || baseWarn;
    var staticStyle = getAndRemoveAttr(el, 'style');
    if (staticStyle) {
        /* istanbul ignore if */
        if (true) {
            var res = parseText(staticStyle, options.delimiters);
            if (res) {
                warn("style=\"".concat(staticStyle, "\": ") +
                    'Interpolation inside attributes has been removed. ' +
                    'Use v-bind or the colon shorthand instead. For example, ' +
                    'instead of <div style="{{ val }}">, use <div :style="val">.', el.rawAttrsMap['style']);
            }
        }
        el.staticStyle = JSON.stringify(parseStyleText(staticStyle));
    }
    var styleBinding = getBindingAttr(el, 'style', false /* getStatic */);
    if (styleBinding) {
        el.styleBinding = styleBinding;
    }
}
function genData$1(el) {
    var data = '';
    if (el.staticStyle) {
        data += "staticStyle:".concat(el.staticStyle, ",");
    }
    if (el.styleBinding) {
        data += "style:(".concat(el.styleBinding, "),");
    }
    return data;
}
var style = {
    staticKeys: ['staticStyle'],
    transformNode: transformNode,
    genData: genData$1
};

var decoder;
var he = {
    decode: function (html) {
        decoder = decoder || document.createElement('div');
        decoder.innerHTML = html;
        return decoder.textContent;
    }
};

var isUnaryTag = makeMap('area,base,br,col,embed,frame,hr,img,input,isindex,keygen,' +
    'link,meta,param,source,track,wbr');
// Elements that you can, intentionally, leave open
// (and which close themselves)
var canBeLeftOpenTag = makeMap('colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source');
// HTML5 tags https://html.spec.whatwg.org/multipage/indices.html#elements-3
// Phrasing Content https://html.spec.whatwg.org/multipage/dom.html#phrasing-content
var isNonPhrasingTag = makeMap('address,article,aside,base,blockquote,body,caption,col,colgroup,dd,' +
    'details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,' +
    'h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,' +
    'optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,' +
    'title,tr,track');

/**
 * Not type-checking this file because it's mostly vendor code.
 */
// Regular Expressions for parsing tags and attributes
var attribute = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
var dynamicArgAttribute = /^\s*((?:v-[\w-]+:|@|:|#)\[[^=]+?\][^\s"'<>\/=]*)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
var ncname = "[a-zA-Z_][\\-\\.0-9_a-zA-Z".concat(unicodeRegExp.source, "]*");
var qnameCapture = "((?:".concat(ncname, "\\:)?").concat(ncname, ")");
var startTagOpen = new RegExp("^<".concat(qnameCapture));
var startTagClose = /^\s*(\/?)>/;
var endTag = new RegExp("^<\\/".concat(qnameCapture, "[^>]*>"));
var doctype = /^<!DOCTYPE [^>]+>/i;
// #7298: escape - to avoid being passed as HTML comment when inlined in page
var comment = /^<!\--/;
var conditionalComment = /^<!\[/;
// Special Elements (can contain anything)
var isPlainTextElement = makeMap('script,style,textarea', true);
var reCache = {};
var decodingMap = {
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&amp;': '&',
    '&#10;': '\n',
    '&#9;': '\t',
    '&#39;': "'"
};
var encodedAttr = /&(?:lt|gt|quot|amp|#39);/g;
var encodedAttrWithNewLines = /&(?:lt|gt|quot|amp|#39|#10|#9);/g;
// #5992
var isIgnoreNewlineTag = makeMap('pre,textarea', true);
var shouldIgnoreFirstNewline = function (tag, html) {
    return tag && isIgnoreNewlineTag(tag) && html[0] === '\n';
};
function decodeAttr(value, shouldDecodeNewlines) {
    var re = shouldDecodeNewlines ? encodedAttrWithNewLines : encodedAttr;
    return value.replace(re, function (match) { return decodingMap[match]; });
}
function parseHTML(html, options) {
    var stack = [];
    var expectHTML = options.expectHTML;
    var isUnaryTag = options.isUnaryTag || no;
    var canBeLeftOpenTag = options.canBeLeftOpenTag || no;
    var index = 0;
    var last, lastTag;
    var _loop_1 = function () {
        last = html;
        // Make sure we're not in a plaintext content element like script/style
        if (!lastTag || !isPlainTextElement(lastTag)) {
            var textEnd = html.indexOf('<');
            if (textEnd === 0) {
                // Comment:
                if (comment.test(html)) {
                    var commentEnd = html.indexOf('-->');
                    if (commentEnd >= 0) {
                        if (options.shouldKeepComment && options.comment) {
                            options.comment(html.substring(4, commentEnd), index, index + commentEnd + 3);
                        }
                        advance(commentEnd + 3);
                        return "continue";
                    }
                }
                // http://en.wikipedia.org/wiki/Conditional_comment#Downlevel-revealed_conditional_comment
                if (conditionalComment.test(html)) {
                    var conditionalEnd = html.indexOf(']>');
                    if (conditionalEnd >= 0) {
                        advance(conditionalEnd + 2);
                        return "continue";
                    }
                }
                // Doctype:
                var doctypeMatch = html.match(doctype);
                if (doctypeMatch) {
                    advance(doctypeMatch[0].length);
                    return "continue";
                }
                // End tag:
                var endTagMatch = html.match(endTag);
                if (endTagMatch) {
                    var curIndex = index;
                    advance(endTagMatch[0].length);
                    parseEndTag(endTagMatch[1], curIndex, index);
                    return "continue";
                }
                // Start tag:
                var startTagMatch = parseStartTag();
                if (startTagMatch) {
                    handleStartTag(startTagMatch);
                    if (shouldIgnoreFirstNewline(startTagMatch.tagName, html)) {
                        advance(1);
                    }
                    return "continue";
                }
            }
            var text = void 0, rest = void 0, next = void 0;
            if (textEnd >= 0) {
                rest = html.slice(textEnd);
                while (!endTag.test(rest) &&
                    !startTagOpen.test(rest) &&
                    !comment.test(rest) &&
                    !conditionalComment.test(rest)) {
                    // < in plain text, be forgiving and treat it as text
                    next = rest.indexOf('<', 1);
                    if (next < 0)
                        break;
                    textEnd += next;
                    rest = html.slice(textEnd);
                }
                text = html.substring(0, textEnd);
            }
            if (textEnd < 0) {
                text = html;
            }
            if (text) {
                advance(text.length);
            }
            if (options.chars && text) {
                options.chars(text, index - text.length, index);
            }
        }
        else {
            var endTagLength_1 = 0;
            var stackedTag_1 = lastTag.toLowerCase();
            var reStackedTag = reCache[stackedTag_1] ||
                (reCache[stackedTag_1] = new RegExp('([\\s\\S]*?)(</' + stackedTag_1 + '[^>]*>)', 'i'));
            var rest = html.replace(reStackedTag, function (all, text, endTag) {
                endTagLength_1 = endTag.length;
                if (!isPlainTextElement(stackedTag_1) && stackedTag_1 !== 'noscript') {
                    text = text
                        .replace(/<!\--([\s\S]*?)-->/g, '$1') // #7298
                        .replace(/<!\[CDATA\[([\s\S]*?)]]>/g, '$1');
                }
                if (shouldIgnoreFirstNewline(stackedTag_1, text)) {
                    text = text.slice(1);
                }
                if (options.chars) {
                    options.chars(text);
                }
                return '';
            });
            index += html.length - rest.length;
            html = rest;
            parseEndTag(stackedTag_1, index - endTagLength_1, index);
        }
        if (html === last) {
            options.chars && options.chars(html);
            if ( true && !stack.length && options.warn) {
                options.warn("Mal-formatted tag at end of template: \"".concat(html, "\""), {
                    start: index + html.length
                });
            }
            return "break";
        }
    };
    while (html) {
        var state_1 = _loop_1();
        if (state_1 === "break")
            break;
    }
    // Clean up any remaining tags
    parseEndTag();
    function advance(n) {
        index += n;
        html = html.substring(n);
    }
    function parseStartTag() {
        var start = html.match(startTagOpen);
        if (start) {
            var match = {
                tagName: start[1],
                attrs: [],
                start: index
            };
            advance(start[0].length);
            var end = void 0, attr = void 0;
            while (!(end = html.match(startTagClose)) &&
                (attr = html.match(dynamicArgAttribute) || html.match(attribute))) {
                attr.start = index;
                advance(attr[0].length);
                attr.end = index;
                match.attrs.push(attr);
            }
            if (end) {
                match.unarySlash = end[1];
                advance(end[0].length);
                match.end = index;
                return match;
            }
        }
    }
    function handleStartTag(match) {
        var tagName = match.tagName;
        var unarySlash = match.unarySlash;
        if (expectHTML) {
            if (lastTag === 'p' && isNonPhrasingTag(tagName)) {
                parseEndTag(lastTag);
            }
            if (canBeLeftOpenTag(tagName) && lastTag === tagName) {
                parseEndTag(tagName);
            }
        }
        var unary = isUnaryTag(tagName) || !!unarySlash;
        var l = match.attrs.length;
        var attrs = new Array(l);
        for (var i = 0; i < l; i++) {
            var args = match.attrs[i];
            var value = args[3] || args[4] || args[5] || '';
            var shouldDecodeNewlines = tagName === 'a' && args[1] === 'href'
                ? options.shouldDecodeNewlinesForHref
                : options.shouldDecodeNewlines;
            attrs[i] = {
                name: args[1],
                value: decodeAttr(value, shouldDecodeNewlines)
            };
            if ( true && options.outputSourceRange) {
                attrs[i].start = args.start + args[0].match(/^\s*/).length;
                attrs[i].end = args.end;
            }
        }
        if (!unary) {
            stack.push({
                tag: tagName,
                lowerCasedTag: tagName.toLowerCase(),
                attrs: attrs,
                start: match.start,
                end: match.end
            });
            lastTag = tagName;
        }
        if (options.start) {
            options.start(tagName, attrs, unary, match.start, match.end);
        }
    }
    function parseEndTag(tagName, start, end) {
        var pos, lowerCasedTagName;
        if (start == null)
            start = index;
        if (end == null)
            end = index;
        // Find the closest opened tag of the same type
        if (tagName) {
            lowerCasedTagName = tagName.toLowerCase();
            for (pos = stack.length - 1; pos >= 0; pos--) {
                if (stack[pos].lowerCasedTag === lowerCasedTagName) {
                    break;
                }
            }
        }
        else {
            // If no tag name is provided, clean shop
            pos = 0;
        }
        if (pos >= 0) {
            // Close all the open elements, up the stack
            for (var i = stack.length - 1; i >= pos; i--) {
                if ( true && (i > pos || !tagName) && options.warn) {
                    options.warn("tag <".concat(stack[i].tag, "> has no matching end tag."), {
                        start: stack[i].start,
                        end: stack[i].end
                    });
                }
                if (options.end) {
                    options.end(stack[i].tag, start, end);
                }
            }
            // Remove the open elements from the stack
            stack.length = pos;
            lastTag = pos && stack[pos - 1].tag;
        }
        else if (lowerCasedTagName === 'br') {
            if (options.start) {
                options.start(tagName, [], true, start, end);
            }
        }
        else if (lowerCasedTagName === 'p') {
            if (options.start) {
                options.start(tagName, [], false, start, end);
            }
            if (options.end) {
                options.end(tagName, start, end);
            }
        }
    }
}

var onRE = /^@|^v-on:/;
var dirRE = /^v-|^@|^:|^#/;
var forAliasRE = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/;
var forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
var stripParensRE = /^\(|\)$/g;
var dynamicArgRE = /^\[.*\]$/;
var argRE = /:(.*)$/;
var bindRE = /^:|^\.|^v-bind:/;
var modifierRE = /\.[^.\]]+(?=[^\]]*$)/g;
var slotRE = /^v-slot(:|$)|^#/;
var lineBreakRE = /[\r\n]/;
var whitespaceRE = /[ \f\t\r\n]+/g;
var invalidAttributeRE = /[\s"'<>\/=]/;
var decodeHTMLCached = cached(he.decode);
var emptySlotScopeToken = "_empty_";
// configurable state
var warn;
var delimiters;
var transforms;
var preTransforms;
var postTransforms;
var platformIsPreTag;
var platformMustUseProp;
var platformGetTagNamespace;
var maybeComponent;
function createASTElement(tag, attrs, parent) {
    return {
        type: 1,
        tag: tag,
        attrsList: attrs,
        attrsMap: makeAttrsMap(attrs),
        rawAttrsMap: {},
        parent: parent,
        children: []
    };
}
/**
 * Convert HTML string to AST.
 */
function parse(template, options) {
    warn = options.warn || baseWarn;
    platformIsPreTag = options.isPreTag || no;
    platformMustUseProp = options.mustUseProp || no;
    platformGetTagNamespace = options.getTagNamespace || no;
    var isReservedTag = options.isReservedTag || no;
    maybeComponent = function (el) {
        return !!(el.component ||
            el.attrsMap[':is'] ||
            el.attrsMap['v-bind:is'] ||
            !(el.attrsMap.is ? isReservedTag(el.attrsMap.is) : isReservedTag(el.tag)));
    };
    transforms = pluckModuleFunction(options.modules, 'transformNode');
    preTransforms = pluckModuleFunction(options.modules, 'preTransformNode');
    postTransforms = pluckModuleFunction(options.modules, 'postTransformNode');
    delimiters = options.delimiters;
    var stack = [];
    var preserveWhitespace = options.preserveWhitespace !== false;
    var whitespaceOption = options.whitespace;
    var root;
    var currentParent;
    var inVPre = false;
    var inPre = false;
    var warned = false;
    function warnOnce(msg, range) {
        if (!warned) {
            warned = true;
            warn(msg, range);
        }
    }
    function closeElement(element) {
        trimEndingWhitespace(element);
        if (!inVPre && !element.processed) {
            element = processElement(element, options);
        }
        // tree management
        if (!stack.length && element !== root) {
            // allow root elements with v-if, v-else-if and v-else
            if (root.if && (element.elseif || element.else)) {
                if (true) {
                    checkRootConstraints(element);
                }
                addIfCondition(root, {
                    exp: element.elseif,
                    block: element
                });
            }
            else if (true) {
                warnOnce("Component template should contain exactly one root element. " +
                    "If you are using v-if on multiple elements, " +
                    "use v-else-if to chain them instead.", { start: element.start });
            }
        }
        if (currentParent && !element.forbidden) {
            if (element.elseif || element.else) {
                processIfConditions(element, currentParent);
            }
            else {
                if (element.slotScope) {
                    // scoped slot
                    // keep it in the children list so that v-else(-if) conditions can
                    // find it as the prev node.
                    var name_1 = element.slotTarget || '"default"';
                    (currentParent.scopedSlots || (currentParent.scopedSlots = {}))[name_1] = element;
                }
                currentParent.children.push(element);
                element.parent = currentParent;
            }
        }
        // final children cleanup
        // filter out scoped slots
        element.children = element.children.filter(function (c) { return !c.slotScope; });
        // remove trailing whitespace node again
        trimEndingWhitespace(element);
        // check pre state
        if (element.pre) {
            inVPre = false;
        }
        if (platformIsPreTag(element.tag)) {
            inPre = false;
        }
        // apply post-transforms
        for (var i = 0; i < postTransforms.length; i++) {
            postTransforms[i](element, options);
        }
    }
    function trimEndingWhitespace(el) {
        // remove trailing whitespace node
        if (!inPre) {
            var lastNode = void 0;
            while ((lastNode = el.children[el.children.length - 1]) &&
                lastNode.type === 3 &&
                lastNode.text === ' ') {
                el.children.pop();
            }
        }
    }
    function checkRootConstraints(el) {
        if (el.tag === 'slot' || el.tag === 'template') {
            warnOnce("Cannot use <".concat(el.tag, "> as component root element because it may ") +
                'contain multiple nodes.', { start: el.start });
        }
        if (el.attrsMap.hasOwnProperty('v-for')) {
            warnOnce('Cannot use v-for on stateful component root element because ' +
                'it renders multiple elements.', el.rawAttrsMap['v-for']);
        }
    }
    parseHTML(template, {
        warn: warn,
        expectHTML: options.expectHTML,
        isUnaryTag: options.isUnaryTag,
        canBeLeftOpenTag: options.canBeLeftOpenTag,
        shouldDecodeNewlines: options.shouldDecodeNewlines,
        shouldDecodeNewlinesForHref: options.shouldDecodeNewlinesForHref,
        shouldKeepComment: options.comments,
        outputSourceRange: options.outputSourceRange,
        start: function (tag, attrs, unary, start, end) {
            // check namespace.
            // inherit parent ns if there is one
            var ns = (currentParent && currentParent.ns) || platformGetTagNamespace(tag);
            // handle IE svg bug
            /* istanbul ignore if */
            if (isIE && ns === 'svg') {
                attrs = guardIESVGBug(attrs);
            }
            var element = createASTElement(tag, attrs, currentParent);
            if (ns) {
                element.ns = ns;
            }
            if (true) {
                if (options.outputSourceRange) {
                    element.start = start;
                    element.end = end;
                    element.rawAttrsMap = element.attrsList.reduce(function (cumulated, attr) {
                        cumulated[attr.name] = attr;
                        return cumulated;
                    }, {});
                }
                attrs.forEach(function (attr) {
                    if (invalidAttributeRE.test(attr.name)) {
                        warn("Invalid dynamic argument expression: attribute names cannot contain " +
                            "spaces, quotes, <, >, / or =.", options.outputSourceRange
                            ? {
                                start: attr.start + attr.name.indexOf("["),
                                end: attr.start + attr.name.length
                            }
                            : undefined);
                    }
                });
            }
            if (isForbiddenTag(element) && !isServerRendering()) {
                element.forbidden = true;
                 true &&
                    warn('Templates should only be responsible for mapping the state to the ' +
                        'UI. Avoid placing tags with side-effects in your templates, such as ' +
                        "<".concat(tag, ">") +
                        ', as they will not be parsed.', { start: element.start });
            }
            // apply pre-transforms
            for (var i = 0; i < preTransforms.length; i++) {
                element = preTransforms[i](element, options) || element;
            }
            if (!inVPre) {
                processPre(element);
                if (element.pre) {
                    inVPre = true;
                }
            }
            if (platformIsPreTag(element.tag)) {
                inPre = true;
            }
            if (inVPre) {
                processRawAttrs(element);
            }
            else if (!element.processed) {
                // structural directives
                processFor(element);
                processIf(element);
                processOnce(element);
            }
            if (!root) {
                root = element;
                if (true) {
                    checkRootConstraints(root);
                }
            }
            if (!unary) {
                currentParent = element;
                stack.push(element);
            }
            else {
                closeElement(element);
            }
        },
        end: function (tag, start, end) {
            var element = stack[stack.length - 1];
            // pop stack
            stack.length -= 1;
            currentParent = stack[stack.length - 1];
            if ( true && options.outputSourceRange) {
                element.end = end;
            }
            closeElement(element);
        },
        chars: function (text, start, end) {
            if (!currentParent) {
                if (true) {
                    if (text === template) {
                        warnOnce('Component template requires a root element, rather than just text.', { start: start });
                    }
                    else if ((text = text.trim())) {
                        warnOnce("text \"".concat(text, "\" outside root element will be ignored."), {
                            start: start
                        });
                    }
                }
                return;
            }
            // IE textarea placeholder bug
            /* istanbul ignore if */
            if (isIE &&
                currentParent.tag === 'textarea' &&
                currentParent.attrsMap.placeholder === text) {
                return;
            }
            var children = currentParent.children;
            if (inPre || text.trim()) {
                text = isTextTag(currentParent)
                    ? text
                    : decodeHTMLCached(text);
            }
            else if (!children.length) {
                // remove the whitespace-only node right after an opening tag
                text = '';
            }
            else if (whitespaceOption) {
                if (whitespaceOption === 'condense') {
                    // in condense mode, remove the whitespace node if it contains
                    // line break, otherwise condense to a single space
                    text = lineBreakRE.test(text) ? '' : ' ';
                }
                else {
                    text = ' ';
                }
            }
            else {
                text = preserveWhitespace ? ' ' : '';
            }
            if (text) {
                if (!inPre && whitespaceOption === 'condense') {
                    // condense consecutive whitespaces into single space
                    text = text.replace(whitespaceRE, ' ');
                }
                var res = void 0;
                var child = void 0;
                if (!inVPre && text !== ' ' && (res = parseText(text, delimiters))) {
                    child = {
                        type: 2,
                        expression: res.expression,
                        tokens: res.tokens,
                        text: text
                    };
                }
                else if (text !== ' ' ||
                    !children.length ||
                    children[children.length - 1].text !== ' ') {
                    child = {
                        type: 3,
                        text: text
                    };
                }
                if (child) {
                    if ( true && options.outputSourceRange) {
                        child.start = start;
                        child.end = end;
                    }
                    children.push(child);
                }
            }
        },
        comment: function (text, start, end) {
            // adding anything as a sibling to the root node is forbidden
            // comments should still be allowed, but ignored
            if (currentParent) {
                var child = {
                    type: 3,
                    text: text,
                    isComment: true
                };
                if ( true && options.outputSourceRange) {
                    child.start = start;
                    child.end = end;
                }
                currentParent.children.push(child);
            }
        }
    });
    return root;
}
function processPre(el) {
    if (getAndRemoveAttr(el, 'v-pre') != null) {
        el.pre = true;
    }
}
function processRawAttrs(el) {
    var list = el.attrsList;
    var len = list.length;
    if (len) {
        var attrs = (el.attrs = new Array(len));
        for (var i = 0; i < len; i++) {
            attrs[i] = {
                name: list[i].name,
                value: JSON.stringify(list[i].value)
            };
            if (list[i].start != null) {
                attrs[i].start = list[i].start;
                attrs[i].end = list[i].end;
            }
        }
    }
    else if (!el.pre) {
        // non root node in pre blocks with no attributes
        el.plain = true;
    }
}
function processElement(element, options) {
    processKey(element);
    // determine whether this is a plain element after
    // removing structural attributes
    element.plain =
        !element.key && !element.scopedSlots && !element.attrsList.length;
    processRef(element);
    processSlotContent(element);
    processSlotOutlet(element);
    processComponent(element);
    for (var i = 0; i < transforms.length; i++) {
        element = transforms[i](element, options) || element;
    }
    processAttrs(element);
    return element;
}
function processKey(el) {
    var exp = getBindingAttr(el, 'key');
    if (exp) {
        if (true) {
            if (el.tag === 'template') {
                warn("<template> cannot be keyed. Place the key on real elements instead.", getRawBindingAttr(el, 'key'));
            }
            if (el.for) {
                var iterator = el.iterator2 || el.iterator1;
                var parent_1 = el.parent;
                if (iterator &&
                    iterator === exp &&
                    parent_1 &&
                    parent_1.tag === 'transition-group') {
                    warn("Do not use v-for index as key on <transition-group> children, " +
                        "this is the same as not using keys.", getRawBindingAttr(el, 'key'), true /* tip */);
                }
            }
        }
        el.key = exp;
    }
}
function processRef(el) {
    var ref = getBindingAttr(el, 'ref');
    if (ref) {
        el.ref = ref;
        el.refInFor = checkInFor(el);
    }
}
function processFor(el) {
    var exp;
    if ((exp = getAndRemoveAttr(el, 'v-for'))) {
        var res = parseFor(exp);
        if (res) {
            extend(el, res);
        }
        else if (true) {
            warn("Invalid v-for expression: ".concat(exp), el.rawAttrsMap['v-for']);
        }
    }
}
function parseFor(exp) {
    var inMatch = exp.match(forAliasRE);
    if (!inMatch)
        return;
    var res = {};
    res.for = inMatch[2].trim();
    var alias = inMatch[1].trim().replace(stripParensRE, '');
    var iteratorMatch = alias.match(forIteratorRE);
    if (iteratorMatch) {
        res.alias = alias.replace(forIteratorRE, '').trim();
        res.iterator1 = iteratorMatch[1].trim();
        if (iteratorMatch[2]) {
            res.iterator2 = iteratorMatch[2].trim();
        }
    }
    else {
        res.alias = alias;
    }
    return res;
}
function processIf(el) {
    var exp = getAndRemoveAttr(el, 'v-if');
    if (exp) {
        el.if = exp;
        addIfCondition(el, {
            exp: exp,
            block: el
        });
    }
    else {
        if (getAndRemoveAttr(el, 'v-else') != null) {
            el.else = true;
        }
        var elseif = getAndRemoveAttr(el, 'v-else-if');
        if (elseif) {
            el.elseif = elseif;
        }
    }
}
function processIfConditions(el, parent) {
    var prev = findPrevElement(parent.children);
    if (prev && prev.if) {
        addIfCondition(prev, {
            exp: el.elseif,
            block: el
        });
    }
    else if (true) {
        warn("v-".concat(el.elseif ? 'else-if="' + el.elseif + '"' : 'else', " ") +
            "used on element <".concat(el.tag, "> without corresponding v-if."), el.rawAttrsMap[el.elseif ? 'v-else-if' : 'v-else']);
    }
}
function findPrevElement(children) {
    var i = children.length;
    while (i--) {
        if (children[i].type === 1) {
            return children[i];
        }
        else {
            if ( true && children[i].text !== ' ') {
                warn("text \"".concat(children[i].text.trim(), "\" between v-if and v-else(-if) ") +
                    "will be ignored.", children[i]);
            }
            children.pop();
        }
    }
}
function addIfCondition(el, condition) {
    if (!el.ifConditions) {
        el.ifConditions = [];
    }
    el.ifConditions.push(condition);
}
function processOnce(el) {
    var once = getAndRemoveAttr(el, 'v-once');
    if (once != null) {
        el.once = true;
    }
}
// handle content being passed to a component as slot,
// e.g. <template slot="xxx">, <div slot-scope="xxx">
function processSlotContent(el) {
    var slotScope;
    if (el.tag === 'template') {
        slotScope = getAndRemoveAttr(el, 'scope');
        /* istanbul ignore if */
        if ( true && slotScope) {
            warn("the \"scope\" attribute for scoped slots have been deprecated and " +
                "replaced by \"slot-scope\" since 2.5. The new \"slot-scope\" attribute " +
                "can also be used on plain elements in addition to <template> to " +
                "denote scoped slots.", el.rawAttrsMap['scope'], true);
        }
        el.slotScope = slotScope || getAndRemoveAttr(el, 'slot-scope');
    }
    else if ((slotScope = getAndRemoveAttr(el, 'slot-scope'))) {
        /* istanbul ignore if */
        if ( true && el.attrsMap['v-for']) {
            warn("Ambiguous combined usage of slot-scope and v-for on <".concat(el.tag, "> ") +
                "(v-for takes higher priority). Use a wrapper <template> for the " +
                "scoped slot to make it clearer.", el.rawAttrsMap['slot-scope'], true);
        }
        el.slotScope = slotScope;
    }
    // slot="xxx"
    var slotTarget = getBindingAttr(el, 'slot');
    if (slotTarget) {
        el.slotTarget = slotTarget === '""' ? '"default"' : slotTarget;
        el.slotTargetDynamic = !!(el.attrsMap[':slot'] || el.attrsMap['v-bind:slot']);
        // preserve slot as an attribute for native shadow DOM compat
        // only for non-scoped slots.
        if (el.tag !== 'template' && !el.slotScope) {
            addAttr(el, 'slot', slotTarget, getRawBindingAttr(el, 'slot'));
        }
    }
    // 2.6 v-slot syntax
    {
        if (el.tag === 'template') {
            // v-slot on <template>
            var slotBinding = getAndRemoveAttrByRegex(el, slotRE);
            if (slotBinding) {
                if (true) {
                    if (el.slotTarget || el.slotScope) {
                        warn("Unexpected mixed usage of different slot syntaxes.", el);
                    }
                    if (el.parent && !maybeComponent(el.parent)) {
                        warn("<template v-slot> can only appear at the root level inside " +
                            "the receiving component", el);
                    }
                }
                var _a = getSlotName(slotBinding), name_2 = _a.name, dynamic = _a.dynamic;
                el.slotTarget = name_2;
                el.slotTargetDynamic = dynamic;
                el.slotScope = slotBinding.value || emptySlotScopeToken; // force it into a scoped slot for perf
            }
        }
        else {
            // v-slot on component, denotes default slot
            var slotBinding = getAndRemoveAttrByRegex(el, slotRE);
            if (slotBinding) {
                if (true) {
                    if (!maybeComponent(el)) {
                        warn("v-slot can only be used on components or <template>.", slotBinding);
                    }
                    if (el.slotScope || el.slotTarget) {
                        warn("Unexpected mixed usage of different slot syntaxes.", el);
                    }
                    if (el.scopedSlots) {
                        warn("To avoid scope ambiguity, the default slot should also use " +
                            "<template> syntax when there are other named slots.", slotBinding);
                    }
                }
                // add the component's children to its default slot
                var slots = el.scopedSlots || (el.scopedSlots = {});
                var _b = getSlotName(slotBinding), name_3 = _b.name, dynamic = _b.dynamic;
                var slotContainer_1 = (slots[name_3] = createASTElement('template', [], el));
                slotContainer_1.slotTarget = name_3;
                slotContainer_1.slotTargetDynamic = dynamic;
                slotContainer_1.children = el.children.filter(function (c) {
                    if (!c.slotScope) {
                        c.parent = slotContainer_1;
                        return true;
                    }
                });
                slotContainer_1.slotScope = slotBinding.value || emptySlotScopeToken;
                // remove children as they are returned from scopedSlots now
                el.children = [];
                // mark el non-plain so data gets generated
                el.plain = false;
            }
        }
    }
}
function getSlotName(binding) {
    var name = binding.name.replace(slotRE, '');
    if (!name) {
        if (binding.name[0] !== '#') {
            name = 'default';
        }
        else if (true) {
            warn("v-slot shorthand syntax requires a slot name.", binding);
        }
    }
    return dynamicArgRE.test(name)
        ? // dynamic [name]
            { name: name.slice(1, -1), dynamic: true }
        : // static name
            { name: "\"".concat(name, "\""), dynamic: false };
}
// handle <slot/> outlets
function processSlotOutlet(el) {
    if (el.tag === 'slot') {
        el.slotName = getBindingAttr(el, 'name');
        if ( true && el.key) {
            warn("`key` does not work on <slot> because slots are abstract outlets " +
                "and can possibly expand into multiple elements. " +
                "Use the key on a wrapping element instead.", getRawBindingAttr(el, 'key'));
        }
    }
}
function processComponent(el) {
    var binding;
    if ((binding = getBindingAttr(el, 'is'))) {
        el.component = binding;
    }
    if (getAndRemoveAttr(el, 'inline-template') != null) {
        el.inlineTemplate = true;
    }
}
function processAttrs(el) {
    var list = el.attrsList;
    var i, l, name, rawName, value, modifiers, syncGen, isDynamic;
    for (i = 0, l = list.length; i < l; i++) {
        name = rawName = list[i].name;
        value = list[i].value;
        if (dirRE.test(name)) {
            // mark element as dynamic
            el.hasBindings = true;
            // modifiers
            modifiers = parseModifiers(name.replace(dirRE, ''));
            // support .foo shorthand syntax for the .prop modifier
            if (modifiers) {
                name = name.replace(modifierRE, '');
            }
            if (bindRE.test(name)) {
                // v-bind
                name = name.replace(bindRE, '');
                value = parseFilters(value);
                isDynamic = dynamicArgRE.test(name);
                if (isDynamic) {
                    name = name.slice(1, -1);
                }
                if ( true && value.trim().length === 0) {
                    warn("The value for a v-bind expression cannot be empty. Found in \"v-bind:".concat(name, "\""));
                }
                if (modifiers) {
                    if (modifiers.prop && !isDynamic) {
                        name = camelize(name);
                        if (name === 'innerHtml')
                            name = 'innerHTML';
                    }
                    if (modifiers.camel && !isDynamic) {
                        name = camelize(name);
                    }
                    if (modifiers.sync) {
                        syncGen = genAssignmentCode(value, "$event");
                        if (!isDynamic) {
                            addHandler(el, "update:".concat(camelize(name)), syncGen, null, false, warn, list[i]);
                            if (hyphenate(name) !== camelize(name)) {
                                addHandler(el, "update:".concat(hyphenate(name)), syncGen, null, false, warn, list[i]);
                            }
                        }
                        else {
                            // handler w/ dynamic event name
                            addHandler(el, "\"update:\"+(".concat(name, ")"), syncGen, null, false, warn, list[i], true // dynamic
                            );
                        }
                    }
                }
                if ((modifiers && modifiers.prop) ||
                    (!el.component && platformMustUseProp(el.tag, el.attrsMap.type, name))) {
                    addProp(el, name, value, list[i], isDynamic);
                }
                else {
                    addAttr(el, name, value, list[i], isDynamic);
                }
            }
            else if (onRE.test(name)) {
                // v-on
                name = name.replace(onRE, '');
                isDynamic = dynamicArgRE.test(name);
                if (isDynamic) {
                    name = name.slice(1, -1);
                }
                addHandler(el, name, value, modifiers, false, warn, list[i], isDynamic);
            }
            else {
                // normal directives
                name = name.replace(dirRE, '');
                // parse arg
                var argMatch = name.match(argRE);
                var arg = argMatch && argMatch[1];
                isDynamic = false;
                if (arg) {
                    name = name.slice(0, -(arg.length + 1));
                    if (dynamicArgRE.test(arg)) {
                        arg = arg.slice(1, -1);
                        isDynamic = true;
                    }
                }
                addDirective(el, name, rawName, value, arg, isDynamic, modifiers, list[i]);
                if ( true && name === 'model') {
                    checkForAliasModel(el, value);
                }
            }
        }
        else {
            // literal attribute
            if (true) {
                var res = parseText(value, delimiters);
                if (res) {
                    warn("".concat(name, "=\"").concat(value, "\": ") +
                        'Interpolation inside attributes has been removed. ' +
                        'Use v-bind or the colon shorthand instead. For example, ' +
                        'instead of <div id="{{ val }}">, use <div :id="val">.', list[i]);
                }
            }
            addAttr(el, name, JSON.stringify(value), list[i]);
            // #6887 firefox doesn't update muted state if set via attribute
            // even immediately after element creation
            if (!el.component &&
                name === 'muted' &&
                platformMustUseProp(el.tag, el.attrsMap.type, name)) {
                addProp(el, name, 'true', list[i]);
            }
        }
    }
}
function checkInFor(el) {
    var parent = el;
    while (parent) {
        if (parent.for !== undefined) {
            return true;
        }
        parent = parent.parent;
    }
    return false;
}
function parseModifiers(name) {
    var match = name.match(modifierRE);
    if (match) {
        var ret_1 = {};
        match.forEach(function (m) {
            ret_1[m.slice(1)] = true;
        });
        return ret_1;
    }
}
function makeAttrsMap(attrs) {
    var map = {};
    for (var i = 0, l = attrs.length; i < l; i++) {
        if ( true && map[attrs[i].name] && !isIE && !isEdge) {
            warn('duplicate attribute: ' + attrs[i].name, attrs[i]);
        }
        map[attrs[i].name] = attrs[i].value;
    }
    return map;
}
// for script (e.g. type="x/template") or style, do not decode content
function isTextTag(el) {
    return el.tag === 'script' || el.tag === 'style';
}
function isForbiddenTag(el) {
    return (el.tag === 'style' ||
        (el.tag === 'script' &&
            (!el.attrsMap.type || el.attrsMap.type === 'text/javascript')));
}
var ieNSBug = /^xmlns:NS\d+/;
var ieNSPrefix = /^NS\d+:/;
/* istanbul ignore next */
function guardIESVGBug(attrs) {
    var res = [];
    for (var i = 0; i < attrs.length; i++) {
        var attr = attrs[i];
        if (!ieNSBug.test(attr.name)) {
            attr.name = attr.name.replace(ieNSPrefix, '');
            res.push(attr);
        }
    }
    return res;
}
function checkForAliasModel(el, value) {
    var _el = el;
    while (_el) {
        if (_el.for && _el.alias === value) {
            warn("<".concat(el.tag, " v-model=\"").concat(value, "\">: ") +
                "You are binding v-model directly to a v-for iteration alias. " +
                "This will not be able to modify the v-for source array because " +
                "writing to the alias is like modifying a function local variable. " +
                "Consider using an array of objects and use v-model on an object property instead.", el.rawAttrsMap['v-model']);
        }
        _el = _el.parent;
    }
}

/**
 * Expand input[v-model] with dynamic type bindings into v-if-else chains
 * Turn this:
 *   <input v-model="data[type]" :type="type">
 * into this:
 *   <input v-if="type === 'checkbox'" type="checkbox" v-model="data[type]">
 *   <input v-else-if="type === 'radio'" type="radio" v-model="data[type]">
 *   <input v-else :type="type" v-model="data[type]">
 */
function preTransformNode(el, options) {
    if (el.tag === 'input') {
        var map = el.attrsMap;
        if (!map['v-model']) {
            return;
        }
        var typeBinding = void 0;
        if (map[':type'] || map['v-bind:type']) {
            typeBinding = getBindingAttr(el, 'type');
        }
        if (!map.type && !typeBinding && map['v-bind']) {
            typeBinding = "(".concat(map['v-bind'], ").type");
        }
        if (typeBinding) {
            var ifCondition = getAndRemoveAttr(el, 'v-if', true);
            var ifConditionExtra = ifCondition ? "&&(".concat(ifCondition, ")") : "";
            var hasElse = getAndRemoveAttr(el, 'v-else', true) != null;
            var elseIfCondition = getAndRemoveAttr(el, 'v-else-if', true);
            // 1. checkbox
            var branch0 = cloneASTElement(el);
            // process for on the main node
            processFor(branch0);
            addRawAttr(branch0, 'type', 'checkbox');
            processElement(branch0, options);
            branch0.processed = true; // prevent it from double-processed
            branch0.if = "(".concat(typeBinding, ")==='checkbox'") + ifConditionExtra;
            addIfCondition(branch0, {
                exp: branch0.if,
                block: branch0
            });
            // 2. add radio else-if condition
            var branch1 = cloneASTElement(el);
            getAndRemoveAttr(branch1, 'v-for', true);
            addRawAttr(branch1, 'type', 'radio');
            processElement(branch1, options);
            addIfCondition(branch0, {
                exp: "(".concat(typeBinding, ")==='radio'") + ifConditionExtra,
                block: branch1
            });
            // 3. other
            var branch2 = cloneASTElement(el);
            getAndRemoveAttr(branch2, 'v-for', true);
            addRawAttr(branch2, ':type', typeBinding);
            processElement(branch2, options);
            addIfCondition(branch0, {
                exp: ifCondition,
                block: branch2
            });
            if (hasElse) {
                branch0.else = true;
            }
            else if (elseIfCondition) {
                branch0.elseif = elseIfCondition;
            }
            return branch0;
        }
    }
}
function cloneASTElement(el) {
    return createASTElement(el.tag, el.attrsList.slice(), el.parent);
}
var model = {
    preTransformNode: preTransformNode
};

var modules = [klass, style, model];

function text(el, dir) {
    if (dir.value) {
        addProp(el, 'textContent', "_s(".concat(dir.value, ")"), dir);
    }
}

function html(el, dir) {
    if (dir.value) {
        addProp(el, 'innerHTML', "_s(".concat(dir.value, ")"), dir);
    }
}

var directives = {
    model: model$1,
    text: text,
    html: html
};

var baseOptions = {
    expectHTML: true,
    modules: modules,
    directives: directives,
    isPreTag: isPreTag,
    isUnaryTag: isUnaryTag,
    mustUseProp: mustUseProp,
    canBeLeftOpenTag: canBeLeftOpenTag,
    isReservedTag: isReservedTag,
    getTagNamespace: getTagNamespace,
    staticKeys: genStaticKeys$1(modules)
};

var isStaticKey;
var isPlatformReservedTag;
var genStaticKeysCached = cached(genStaticKeys);
/**
 * Goal of the optimizer: walk the generated template AST tree
 * and detect sub-trees that are purely static, i.e. parts of
 * the DOM that never needs to change.
 *
 * Once we detect these sub-trees, we can:
 *
 * 1. Hoist them into constants, so that we no longer need to
 *    create fresh nodes for them on each re-render;
 * 2. Completely skip them in the patching process.
 */
function optimize(root, options) {
    if (!root)
        return;
    isStaticKey = genStaticKeysCached(options.staticKeys || '');
    isPlatformReservedTag = options.isReservedTag || no;
    // first pass: mark all non-static nodes.
    markStatic(root);
    // second pass: mark static roots.
    markStaticRoots(root, false);
}
function genStaticKeys(keys) {
    return makeMap('type,tag,attrsList,attrsMap,plain,parent,children,attrs,start,end,rawAttrsMap' +
        (keys ? ',' + keys : ''));
}
function markStatic(node) {
    node.static = isStatic(node);
    if (node.type === 1) {
        // do not make component slot content static. this avoids
        // 1. components not able to mutate slot nodes
        // 2. static slot content fails for hot-reloading
        if (!isPlatformReservedTag(node.tag) &&
            node.tag !== 'slot' &&
            node.attrsMap['inline-template'] == null) {
            return;
        }
        for (var i = 0, l = node.children.length; i < l; i++) {
            var child = node.children[i];
            markStatic(child);
            if (!child.static) {
                node.static = false;
            }
        }
        if (node.ifConditions) {
            for (var i = 1, l = node.ifConditions.length; i < l; i++) {
                var block = node.ifConditions[i].block;
                markStatic(block);
                if (!block.static) {
                    node.static = false;
                }
            }
        }
    }
}
function markStaticRoots(node, isInFor) {
    if (node.type === 1) {
        if (node.static || node.once) {
            node.staticInFor = isInFor;
        }
        // For a node to qualify as a static root, it should have children that
        // are not just static text. Otherwise the cost of hoisting out will
        // outweigh the benefits and it's better off to just always render it fresh.
        if (node.static &&
            node.children.length &&
            !(node.children.length === 1 && node.children[0].type === 3)) {
            node.staticRoot = true;
            return;
        }
        else {
            node.staticRoot = false;
        }
        if (node.children) {
            for (var i = 0, l = node.children.length; i < l; i++) {
                markStaticRoots(node.children[i], isInFor || !!node.for);
            }
        }
        if (node.ifConditions) {
            for (var i = 1, l = node.ifConditions.length; i < l; i++) {
                markStaticRoots(node.ifConditions[i].block, isInFor);
            }
        }
    }
}
function isStatic(node) {
    if (node.type === 2) {
        // expression
        return false;
    }
    if (node.type === 3) {
        // text
        return true;
    }
    return !!(node.pre ||
        (!node.hasBindings && // no dynamic bindings
            !node.if &&
            !node.for && // not v-if or v-for or v-else
            !isBuiltInTag(node.tag) && // not a built-in
            isPlatformReservedTag(node.tag) && // not a component
            !isDirectChildOfTemplateFor(node) &&
            Object.keys(node).every(isStaticKey)));
}
function isDirectChildOfTemplateFor(node) {
    while (node.parent) {
        node = node.parent;
        if (node.tag !== 'template') {
            return false;
        }
        if (node.for) {
            return true;
        }
    }
    return false;
}

var fnExpRE = /^([\w$_]+|\([^)]*?\))\s*=>|^function(?:\s+[\w$]+)?\s*\(/;
var fnInvokeRE = /\([^)]*?\);*$/;
var simplePathRE = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/;
// KeyboardEvent.keyCode aliases
var keyCodes = {
    esc: 27,
    tab: 9,
    enter: 13,
    space: 32,
    up: 38,
    left: 37,
    right: 39,
    down: 40,
    delete: [8, 46]
};
// KeyboardEvent.key aliases
var keyNames = {
    // #7880: IE11 and Edge use `Esc` for Escape key name.
    esc: ['Esc', 'Escape'],
    tab: 'Tab',
    enter: 'Enter',
    // #9112: IE11 uses `Spacebar` for Space key name.
    space: [' ', 'Spacebar'],
    // #7806: IE11 uses key names without `Arrow` prefix for arrow keys.
    up: ['Up', 'ArrowUp'],
    left: ['Left', 'ArrowLeft'],
    right: ['Right', 'ArrowRight'],
    down: ['Down', 'ArrowDown'],
    // #9112: IE11 uses `Del` for Delete key name.
    delete: ['Backspace', 'Delete', 'Del']
};
// #4868: modifiers that prevent the execution of the listener
// need to explicitly return null so that we can determine whether to remove
// the listener for .once
var genGuard = function (condition) { return "if(".concat(condition, ")return null;"); };
var modifierCode = {
    stop: '$event.stopPropagation();',
    prevent: '$event.preventDefault();',
    self: genGuard("$event.target !== $event.currentTarget"),
    ctrl: genGuard("!$event.ctrlKey"),
    shift: genGuard("!$event.shiftKey"),
    alt: genGuard("!$event.altKey"),
    meta: genGuard("!$event.metaKey"),
    left: genGuard("'button' in $event && $event.button !== 0"),
    middle: genGuard("'button' in $event && $event.button !== 1"),
    right: genGuard("'button' in $event && $event.button !== 2")
};
function genHandlers(events, isNative) {
    var prefix = isNative ? 'nativeOn:' : 'on:';
    var staticHandlers = "";
    var dynamicHandlers = "";
    for (var name_1 in events) {
        var handlerCode = genHandler(events[name_1]);
        //@ts-expect-error
        if (events[name_1] && events[name_1].dynamic) {
            dynamicHandlers += "".concat(name_1, ",").concat(handlerCode, ",");
        }
        else {
            staticHandlers += "\"".concat(name_1, "\":").concat(handlerCode, ",");
        }
    }
    staticHandlers = "{".concat(staticHandlers.slice(0, -1), "}");
    if (dynamicHandlers) {
        return prefix + "_d(".concat(staticHandlers, ",[").concat(dynamicHandlers.slice(0, -1), "])");
    }
    else {
        return prefix + staticHandlers;
    }
}
function genHandler(handler) {
    if (!handler) {
        return 'function(){}';
    }
    if (Array.isArray(handler)) {
        return "[".concat(handler.map(function (handler) { return genHandler(handler); }).join(','), "]");
    }
    var isMethodPath = simplePathRE.test(handler.value);
    var isFunctionExpression = fnExpRE.test(handler.value);
    var isFunctionInvocation = simplePathRE.test(handler.value.replace(fnInvokeRE, ''));
    if (!handler.modifiers) {
        if (isMethodPath || isFunctionExpression) {
            return handler.value;
        }
        return "function($event){".concat(isFunctionInvocation ? "return ".concat(handler.value) : handler.value, "}"); // inline statement
    }
    else {
        var code = '';
        var genModifierCode = '';
        var keys = [];
        var _loop_1 = function (key) {
            if (modifierCode[key]) {
                genModifierCode += modifierCode[key];
                // left/right
                if (keyCodes[key]) {
                    keys.push(key);
                }
            }
            else if (key === 'exact') {
                var modifiers_1 = handler.modifiers;
                genModifierCode += genGuard(['ctrl', 'shift', 'alt', 'meta']
                    .filter(function (keyModifier) { return !modifiers_1[keyModifier]; })
                    .map(function (keyModifier) { return "$event.".concat(keyModifier, "Key"); })
                    .join('||'));
            }
            else {
                keys.push(key);
            }
        };
        for (var key in handler.modifiers) {
            _loop_1(key);
        }
        if (keys.length) {
            code += genKeyFilter(keys);
        }
        // Make sure modifiers like prevent and stop get executed after key filtering
        if (genModifierCode) {
            code += genModifierCode;
        }
        var handlerCode = isMethodPath
            ? "return ".concat(handler.value, ".apply(null, arguments)")
            : isFunctionExpression
                ? "return (".concat(handler.value, ").apply(null, arguments)")
                : isFunctionInvocation
                    ? "return ".concat(handler.value)
                    : handler.value;
        return "function($event){".concat(code).concat(handlerCode, "}");
    }
}
function genKeyFilter(keys) {
    return (
    // make sure the key filters only apply to KeyboardEvents
    // #9441: can't use 'keyCode' in $event because Chrome autofill fires fake
    // key events that do not have keyCode property...
    "if(!$event.type.indexOf('key')&&" +
        "".concat(keys.map(genFilterCode).join('&&'), ")return null;"));
}
function genFilterCode(key) {
    var keyVal = parseInt(key, 10);
    if (keyVal) {
        return "$event.keyCode!==".concat(keyVal);
    }
    var keyCode = keyCodes[key];
    var keyName = keyNames[key];
    return ("_k($event.keyCode," +
        "".concat(JSON.stringify(key), ",") +
        "".concat(JSON.stringify(keyCode), ",") +
        "$event.key," +
        "".concat(JSON.stringify(keyName)) +
        ")");
}

function on(el, dir) {
    if ( true && dir.modifiers) {
        warn$2("v-on without argument does not support modifiers.");
    }
    el.wrapListeners = function (code) { return "_g(".concat(code, ",").concat(dir.value, ")"); };
}

function bind(el, dir) {
    el.wrapData = function (code) {
        return "_b(".concat(code, ",'").concat(el.tag, "',").concat(dir.value, ",").concat(dir.modifiers && dir.modifiers.prop ? 'true' : 'false').concat(dir.modifiers && dir.modifiers.sync ? ',true' : '', ")");
    };
}

var baseDirectives = {
    on: on,
    bind: bind,
    cloak: noop
};

var CodegenState = /** @class */ (function () {
    function CodegenState(options) {
        this.options = options;
        this.warn = options.warn || baseWarn;
        this.transforms = pluckModuleFunction(options.modules, 'transformCode');
        this.dataGenFns = pluckModuleFunction(options.modules, 'genData');
        this.directives = extend(extend({}, baseDirectives), options.directives);
        var isReservedTag = options.isReservedTag || no;
        this.maybeComponent = function (el) {
            return !!el.component || !isReservedTag(el.tag);
        };
        this.onceId = 0;
        this.staticRenderFns = [];
        this.pre = false;
    }
    return CodegenState;
}());
function generate(ast, options) {
    var state = new CodegenState(options);
    // fix #11483, Root level <script> tags should not be rendered.
    var code = ast
        ? ast.tag === 'script'
            ? 'null'
            : genElement(ast, state)
        : '_c("div")';
    return {
        render: "with(this){return ".concat(code, "}"),
        staticRenderFns: state.staticRenderFns
    };
}
function genElement(el, state) {
    if (el.parent) {
        el.pre = el.pre || el.parent.pre;
    }
    if (el.staticRoot && !el.staticProcessed) {
        return genStatic(el, state);
    }
    else if (el.once && !el.onceProcessed) {
        return genOnce(el, state);
    }
    else if (el.for && !el.forProcessed) {
        return genFor(el, state);
    }
    else if (el.if && !el.ifProcessed) {
        return genIf(el, state);
    }
    else if (el.tag === 'template' && !el.slotTarget && !state.pre) {
        return genChildren(el, state) || 'void 0';
    }
    else if (el.tag === 'slot') {
        return genSlot(el, state);
    }
    else {
        // component or element
        var code = void 0;
        if (el.component) {
            code = genComponent(el.component, el, state);
        }
        else {
            var data = void 0;
            var maybeComponent = state.maybeComponent(el);
            if (!el.plain || (el.pre && maybeComponent)) {
                data = genData(el, state);
            }
            var tag 
            // check if this is a component in <script setup>
            = void 0;
            // check if this is a component in <script setup>
            var bindings = state.options.bindings;
            if (maybeComponent && bindings && bindings.__isScriptSetup !== false) {
                tag = checkBindingType(bindings, el.tag);
            }
            if (!tag)
                tag = "'".concat(el.tag, "'");
            var children = el.inlineTemplate ? null : genChildren(el, state, true);
            code = "_c(".concat(tag).concat(data ? ",".concat(data) : '' // data
            ).concat(children ? ",".concat(children) : '' // children
            , ")");
        }
        // module transforms
        for (var i = 0; i < state.transforms.length; i++) {
            code = state.transforms[i](el, code);
        }
        return code;
    }
}
function checkBindingType(bindings, key) {
    var camelName = camelize(key);
    var PascalName = capitalize(camelName);
    var checkType = function (type) {
        if (bindings[key] === type) {
            return key;
        }
        if (bindings[camelName] === type) {
            return camelName;
        }
        if (bindings[PascalName] === type) {
            return PascalName;
        }
    };
    var fromConst = checkType("setup-const" /* BindingTypes.SETUP_CONST */) ||
        checkType("setup-reactive-const" /* BindingTypes.SETUP_REACTIVE_CONST */);
    if (fromConst) {
        return fromConst;
    }
    var fromMaybeRef = checkType("setup-let" /* BindingTypes.SETUP_LET */) ||
        checkType("setup-ref" /* BindingTypes.SETUP_REF */) ||
        checkType("setup-maybe-ref" /* BindingTypes.SETUP_MAYBE_REF */);
    if (fromMaybeRef) {
        return fromMaybeRef;
    }
}
// hoist static sub-trees out
function genStatic(el, state) {
    el.staticProcessed = true;
    // Some elements (templates) need to behave differently inside of a v-pre
    // node.  All pre nodes are static roots, so we can use this as a location to
    // wrap a state change and reset it upon exiting the pre node.
    var originalPreState = state.pre;
    if (el.pre) {
        state.pre = el.pre;
    }
    state.staticRenderFns.push("with(this){return ".concat(genElement(el, state), "}"));
    state.pre = originalPreState;
    return "_m(".concat(state.staticRenderFns.length - 1).concat(el.staticInFor ? ',true' : '', ")");
}
// v-once
function genOnce(el, state) {
    el.onceProcessed = true;
    if (el.if && !el.ifProcessed) {
        return genIf(el, state);
    }
    else if (el.staticInFor) {
        var key = '';
        var parent_1 = el.parent;
        while (parent_1) {
            if (parent_1.for) {
                key = parent_1.key;
                break;
            }
            parent_1 = parent_1.parent;
        }
        if (!key) {
             true &&
                state.warn("v-once can only be used inside v-for that is keyed. ", el.rawAttrsMap['v-once']);
            return genElement(el, state);
        }
        return "_o(".concat(genElement(el, state), ",").concat(state.onceId++, ",").concat(key, ")");
    }
    else {
        return genStatic(el, state);
    }
}
function genIf(el, state, altGen, altEmpty) {
    el.ifProcessed = true; // avoid recursion
    return genIfConditions(el.ifConditions.slice(), state, altGen, altEmpty);
}
function genIfConditions(conditions, state, altGen, altEmpty) {
    if (!conditions.length) {
        return altEmpty || '_e()';
    }
    var condition = conditions.shift();
    if (condition.exp) {
        return "(".concat(condition.exp, ")?").concat(genTernaryExp(condition.block), ":").concat(genIfConditions(conditions, state, altGen, altEmpty));
    }
    else {
        return "".concat(genTernaryExp(condition.block));
    }
    // v-if with v-once should generate code like (a)?_m(0):_m(1)
    function genTernaryExp(el) {
        return altGen
            ? altGen(el, state)
            : el.once
                ? genOnce(el, state)
                : genElement(el, state);
    }
}
function genFor(el, state, altGen, altHelper) {
    var exp = el.for;
    var alias = el.alias;
    var iterator1 = el.iterator1 ? ",".concat(el.iterator1) : '';
    var iterator2 = el.iterator2 ? ",".concat(el.iterator2) : '';
    if ( true &&
        state.maybeComponent(el) &&
        el.tag !== 'slot' &&
        el.tag !== 'template' &&
        !el.key) {
        state.warn("<".concat(el.tag, " v-for=\"").concat(alias, " in ").concat(exp, "\">: component lists rendered with ") +
            "v-for should have explicit keys. " +
            "See https://v2.vuejs.org/v2/guide/list.html#key for more info.", el.rawAttrsMap['v-for'], true /* tip */);
    }
    el.forProcessed = true; // avoid recursion
    return ("".concat(altHelper || '_l', "((").concat(exp, "),") +
        "function(".concat(alias).concat(iterator1).concat(iterator2, "){") +
        "return ".concat((altGen || genElement)(el, state)) +
        '})');
}
function genData(el, state) {
    var data = '{';
    // directives first.
    // directives may mutate the el's other properties before they are generated.
    var dirs = genDirectives(el, state);
    if (dirs)
        data += dirs + ',';
    // key
    if (el.key) {
        data += "key:".concat(el.key, ",");
    }
    // ref
    if (el.ref) {
        data += "ref:".concat(el.ref, ",");
    }
    if (el.refInFor) {
        data += "refInFor:true,";
    }
    // pre
    if (el.pre) {
        data += "pre:true,";
    }
    // record original tag name for components using "is" attribute
    if (el.component) {
        data += "tag:\"".concat(el.tag, "\",");
    }
    // module data generation functions
    for (var i = 0; i < state.dataGenFns.length; i++) {
        data += state.dataGenFns[i](el);
    }
    // attributes
    if (el.attrs) {
        data += "attrs:".concat(genProps(el.attrs), ",");
    }
    // DOM props
    if (el.props) {
        data += "domProps:".concat(genProps(el.props), ",");
    }
    // event handlers
    if (el.events) {
        data += "".concat(genHandlers(el.events, false), ",");
    }
    if (el.nativeEvents) {
        data += "".concat(genHandlers(el.nativeEvents, true), ",");
    }
    // slot target
    // only for non-scoped slots
    if (el.slotTarget && !el.slotScope) {
        data += "slot:".concat(el.slotTarget, ",");
    }
    // scoped slots
    if (el.scopedSlots) {
        data += "".concat(genScopedSlots(el, el.scopedSlots, state), ",");
    }
    // component v-model
    if (el.model) {
        data += "model:{value:".concat(el.model.value, ",callback:").concat(el.model.callback, ",expression:").concat(el.model.expression, "},");
    }
    // inline-template
    if (el.inlineTemplate) {
        var inlineTemplate = genInlineTemplate(el, state);
        if (inlineTemplate) {
            data += "".concat(inlineTemplate, ",");
        }
    }
    data = data.replace(/,$/, '') + '}';
    // v-bind dynamic argument wrap
    // v-bind with dynamic arguments must be applied using the same v-bind object
    // merge helper so that class/style/mustUseProp attrs are handled correctly.
    if (el.dynamicAttrs) {
        data = "_b(".concat(data, ",\"").concat(el.tag, "\",").concat(genProps(el.dynamicAttrs), ")");
    }
    // v-bind data wrap
    if (el.wrapData) {
        data = el.wrapData(data);
    }
    // v-on data wrap
    if (el.wrapListeners) {
        data = el.wrapListeners(data);
    }
    return data;
}
function genDirectives(el, state) {
    var dirs = el.directives;
    if (!dirs)
        return;
    var res = 'directives:[';
    var hasRuntime = false;
    var i, l, dir, needRuntime;
    for (i = 0, l = dirs.length; i < l; i++) {
        dir = dirs[i];
        needRuntime = true;
        var gen = state.directives[dir.name];
        if (gen) {
            // compile-time directive that manipulates AST.
            // returns true if it also needs a runtime counterpart.
            needRuntime = !!gen(el, dir, state.warn);
        }
        if (needRuntime) {
            hasRuntime = true;
            res += "{name:\"".concat(dir.name, "\",rawName:\"").concat(dir.rawName, "\"").concat(dir.value
                ? ",value:(".concat(dir.value, "),expression:").concat(JSON.stringify(dir.value))
                : '').concat(dir.arg ? ",arg:".concat(dir.isDynamicArg ? dir.arg : "\"".concat(dir.arg, "\"")) : '').concat(dir.modifiers ? ",modifiers:".concat(JSON.stringify(dir.modifiers)) : '', "},");
        }
    }
    if (hasRuntime) {
        return res.slice(0, -1) + ']';
    }
}
function genInlineTemplate(el, state) {
    var ast = el.children[0];
    if ( true && (el.children.length !== 1 || ast.type !== 1)) {
        state.warn('Inline-template components must have exactly one child element.', { start: el.start });
    }
    if (ast && ast.type === 1) {
        var inlineRenderFns = generate(ast, state.options);
        return "inlineTemplate:{render:function(){".concat(inlineRenderFns.render, "},staticRenderFns:[").concat(inlineRenderFns.staticRenderFns
            .map(function (code) { return "function(){".concat(code, "}"); })
            .join(','), "]}");
    }
}
function genScopedSlots(el, slots, state) {
    // by default scoped slots are considered "stable", this allows child
    // components with only scoped slots to skip forced updates from parent.
    // but in some cases we have to bail-out of this optimization
    // for example if the slot contains dynamic names, has v-if or v-for on them...
    var needsForceUpdate = el.for ||
        Object.keys(slots).some(function (key) {
            var slot = slots[key];
            return (slot.slotTargetDynamic || slot.if || slot.for || containsSlotChild(slot) // is passing down slot from parent which may be dynamic
            );
        });
    // #9534: if a component with scoped slots is inside a conditional branch,
    // it's possible for the same component to be reused but with different
    // compiled slot content. To avoid that, we generate a unique key based on
    // the generated code of all the slot contents.
    var needsKey = !!el.if;
    // OR when it is inside another scoped slot or v-for (the reactivity may be
    // disconnected due to the intermediate scope variable)
    // #9438, #9506
    // TODO: this can be further optimized by properly analyzing in-scope bindings
    // and skip force updating ones that do not actually use scope variables.
    if (!needsForceUpdate) {
        var parent_2 = el.parent;
        while (parent_2) {
            if ((parent_2.slotScope && parent_2.slotScope !== emptySlotScopeToken) ||
                parent_2.for) {
                needsForceUpdate = true;
                break;
            }
            if (parent_2.if) {
                needsKey = true;
            }
            parent_2 = parent_2.parent;
        }
    }
    var generatedSlots = Object.keys(slots)
        .map(function (key) { return genScopedSlot(slots[key], state); })
        .join(',');
    return "scopedSlots:_u([".concat(generatedSlots, "]").concat(needsForceUpdate ? ",null,true" : "").concat(!needsForceUpdate && needsKey ? ",null,false,".concat(hash(generatedSlots)) : "", ")");
}
function hash(str) {
    var hash = 5381;
    var i = str.length;
    while (i) {
        hash = (hash * 33) ^ str.charCodeAt(--i);
    }
    return hash >>> 0;
}
function containsSlotChild(el) {
    if (el.type === 1) {
        if (el.tag === 'slot') {
            return true;
        }
        return el.children.some(containsSlotChild);
    }
    return false;
}
function genScopedSlot(el, state) {
    var isLegacySyntax = el.attrsMap['slot-scope'];
    if (el.if && !el.ifProcessed && !isLegacySyntax) {
        return genIf(el, state, genScopedSlot, "null");
    }
    if (el.for && !el.forProcessed) {
        return genFor(el, state, genScopedSlot);
    }
    var slotScope = el.slotScope === emptySlotScopeToken ? "" : String(el.slotScope);
    var fn = "function(".concat(slotScope, "){") +
        "return ".concat(el.tag === 'template'
            ? el.if && isLegacySyntax
                ? "(".concat(el.if, ")?").concat(genChildren(el, state) || 'undefined', ":undefined")
                : genChildren(el, state) || 'undefined'
            : genElement(el, state), "}");
    // reverse proxy v-slot without scope on this.$slots
    var reverseProxy = slotScope ? "" : ",proxy:true";
    return "{key:".concat(el.slotTarget || "\"default\"", ",fn:").concat(fn).concat(reverseProxy, "}");
}
function genChildren(el, state, checkSkip, altGenElement, altGenNode) {
    var children = el.children;
    if (children.length) {
        var el_1 = children[0];
        // optimize single v-for
        if (children.length === 1 &&
            el_1.for &&
            el_1.tag !== 'template' &&
            el_1.tag !== 'slot') {
            var normalizationType_1 = checkSkip
                ? state.maybeComponent(el_1)
                    ? ",1"
                    : ",0"
                : "";
            return "".concat((altGenElement || genElement)(el_1, state)).concat(normalizationType_1);
        }
        var normalizationType = checkSkip
            ? getNormalizationType(children, state.maybeComponent)
            : 0;
        var gen_1 = altGenNode || genNode;
        return "[".concat(children.map(function (c) { return gen_1(c, state); }).join(','), "]").concat(normalizationType ? ",".concat(normalizationType) : '');
    }
}
// determine the normalization needed for the children array.
// 0: no normalization needed
// 1: simple normalization needed (possible 1-level deep nested array)
// 2: full normalization needed
function getNormalizationType(children, maybeComponent) {
    var res = 0;
    for (var i = 0; i < children.length; i++) {
        var el = children[i];
        if (el.type !== 1) {
            continue;
        }
        if (needsNormalization(el) ||
            (el.ifConditions &&
                el.ifConditions.some(function (c) { return needsNormalization(c.block); }))) {
            res = 2;
            break;
        }
        if (maybeComponent(el) ||
            (el.ifConditions && el.ifConditions.some(function (c) { return maybeComponent(c.block); }))) {
            res = 1;
        }
    }
    return res;
}
function needsNormalization(el) {
    return el.for !== undefined || el.tag === 'template' || el.tag === 'slot';
}
function genNode(node, state) {
    if (node.type === 1) {
        return genElement(node, state);
    }
    else if (node.type === 3 && node.isComment) {
        return genComment(node);
    }
    else {
        return genText(node);
    }
}
function genText(text) {
    return "_v(".concat(text.type === 2
        ? text.expression // no need for () because already wrapped in _s()
        : transformSpecialNewlines(JSON.stringify(text.text)), ")");
}
function genComment(comment) {
    return "_e(".concat(JSON.stringify(comment.text), ")");
}
function genSlot(el, state) {
    var slotName = el.slotName || '"default"';
    var children = genChildren(el, state);
    var res = "_t(".concat(slotName).concat(children ? ",function(){return ".concat(children, "}") : '');
    var attrs = el.attrs || el.dynamicAttrs
        ? genProps((el.attrs || []).concat(el.dynamicAttrs || []).map(function (attr) { return ({
            // slot props are camelized
            name: camelize(attr.name),
            value: attr.value,
            dynamic: attr.dynamic
        }); }))
        : null;
    var bind = el.attrsMap['v-bind'];
    if ((attrs || bind) && !children) {
        res += ",null";
    }
    if (attrs) {
        res += ",".concat(attrs);
    }
    if (bind) {
        res += "".concat(attrs ? '' : ',null', ",").concat(bind);
    }
    return res + ')';
}
// componentName is el.component, take it as argument to shun flow's pessimistic refinement
function genComponent(componentName, el, state) {
    var children = el.inlineTemplate ? null : genChildren(el, state, true);
    return "_c(".concat(componentName, ",").concat(genData(el, state)).concat(children ? ",".concat(children) : '', ")");
}
function genProps(props) {
    var staticProps = "";
    var dynamicProps = "";
    for (var i = 0; i < props.length; i++) {
        var prop = props[i];
        var value = transformSpecialNewlines(prop.value);
        if (prop.dynamic) {
            dynamicProps += "".concat(prop.name, ",").concat(value, ",");
        }
        else {
            staticProps += "\"".concat(prop.name, "\":").concat(value, ",");
        }
    }
    staticProps = "{".concat(staticProps.slice(0, -1), "}");
    if (dynamicProps) {
        return "_d(".concat(staticProps, ",[").concat(dynamicProps.slice(0, -1), "])");
    }
    else {
        return staticProps;
    }
}
// #3895, #4268
function transformSpecialNewlines(text) {
    return text.replace(/\u2028/g, '\\u2028').replace(/\u2029/g, '\\u2029');
}

// these keywords should not appear inside expressions, but operators like
// typeof, instanceof and in are allowed
var prohibitedKeywordRE = new RegExp('\\b' +
    ('do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,' +
        'super,throw,while,yield,delete,export,import,return,switch,default,' +
        'extends,finally,continue,debugger,function,arguments')
        .split(',')
        .join('\\b|\\b') +
    '\\b');
// these unary operators should not be used as property/method names
var unaryOperatorsRE = new RegExp('\\b' +
    'delete,typeof,void'.split(',').join('\\s*\\([^\\)]*\\)|\\b') +
    '\\s*\\([^\\)]*\\)');
// strip strings in expressions
var stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;
// detect problematic expressions in a template
function detectErrors(ast, warn) {
    if (ast) {
        checkNode(ast, warn);
    }
}
function checkNode(node, warn) {
    if (node.type === 1) {
        for (var name_1 in node.attrsMap) {
            if (dirRE.test(name_1)) {
                var value = node.attrsMap[name_1];
                if (value) {
                    var range = node.rawAttrsMap[name_1];
                    if (name_1 === 'v-for') {
                        checkFor(node, "v-for=\"".concat(value, "\""), warn, range);
                    }
                    else if (name_1 === 'v-slot' || name_1[0] === '#') {
                        checkFunctionParameterExpression(value, "".concat(name_1, "=\"").concat(value, "\""), warn, range);
                    }
                    else if (onRE.test(name_1)) {
                        checkEvent(value, "".concat(name_1, "=\"").concat(value, "\""), warn, range);
                    }
                    else {
                        checkExpression(value, "".concat(name_1, "=\"").concat(value, "\""), warn, range);
                    }
                }
            }
        }
        if (node.children) {
            for (var i = 0; i < node.children.length; i++) {
                checkNode(node.children[i], warn);
            }
        }
    }
    else if (node.type === 2) {
        checkExpression(node.expression, node.text, warn, node);
    }
}
function checkEvent(exp, text, warn, range) {
    var stripped = exp.replace(stripStringRE, '');
    var keywordMatch = stripped.match(unaryOperatorsRE);
    if (keywordMatch && stripped.charAt(keywordMatch.index - 1) !== '$') {
        warn("avoid using JavaScript unary operator as property name: " +
            "\"".concat(keywordMatch[0], "\" in expression ").concat(text.trim()), range);
    }
    checkExpression(exp, text, warn, range);
}
function checkFor(node, text, warn, range) {
    checkExpression(node.for || '', text, warn, range);
    checkIdentifier(node.alias, 'v-for alias', text, warn, range);
    checkIdentifier(node.iterator1, 'v-for iterator', text, warn, range);
    checkIdentifier(node.iterator2, 'v-for iterator', text, warn, range);
}
function checkIdentifier(ident, type, text, warn, range) {
    if (typeof ident === 'string') {
        try {
            new Function("var ".concat(ident, "=_"));
        }
        catch (e) {
            warn("invalid ".concat(type, " \"").concat(ident, "\" in expression: ").concat(text.trim()), range);
        }
    }
}
function checkExpression(exp, text, warn, range) {
    try {
        new Function("return ".concat(exp));
    }
    catch (e) {
        var keywordMatch = exp
            .replace(stripStringRE, '')
            .match(prohibitedKeywordRE);
        if (keywordMatch) {
            warn("avoid using JavaScript keyword as property name: " +
                "\"".concat(keywordMatch[0], "\"\n  Raw expression: ").concat(text.trim()), range);
        }
        else {
            warn("invalid expression: ".concat(e.message, " in\n\n") +
                "    ".concat(exp, "\n\n") +
                "  Raw expression: ".concat(text.trim(), "\n"), range);
        }
    }
}
function checkFunctionParameterExpression(exp, text, warn, range) {
    try {
        new Function(exp, '');
    }
    catch (e) {
        warn("invalid function parameter expression: ".concat(e.message, " in\n\n") +
            "    ".concat(exp, "\n\n") +
            "  Raw expression: ".concat(text.trim(), "\n"), range);
    }
}

var range = 2;
function generateCodeFrame(source, start, end) {
    if (start === void 0) { start = 0; }
    if (end === void 0) { end = source.length; }
    var lines = source.split(/\r?\n/);
    var count = 0;
    var res = [];
    for (var i = 0; i < lines.length; i++) {
        count += lines[i].length + 1;
        if (count >= start) {
            for (var j = i - range; j <= i + range || end > count; j++) {
                if (j < 0 || j >= lines.length)
                    continue;
                res.push("".concat(j + 1).concat(repeat(" ", 3 - String(j + 1).length), "|  ").concat(lines[j]));
                var lineLength = lines[j].length;
                if (j === i) {
                    // push underline
                    var pad = start - (count - lineLength) + 1;
                    var length_1 = end > count ? lineLength - pad : end - start;
                    res.push("   |  " + repeat(" ", pad) + repeat("^", length_1));
                }
                else if (j > i) {
                    if (end > count) {
                        var length_2 = Math.min(end - count, lineLength);
                        res.push("   |  " + repeat("^", length_2));
                    }
                    count += lineLength + 1;
                }
            }
            break;
        }
    }
    return res.join('\n');
}
function repeat(str, n) {
    var result = '';
    if (n > 0) {
        // eslint-disable-next-line no-constant-condition
        while (true) {
            // eslint-disable-line
            if (n & 1)
                result += str;
            n >>>= 1;
            if (n <= 0)
                break;
            str += str;
        }
    }
    return result;
}

function createFunction(code, errors) {
    try {
        return new Function(code);
    }
    catch (err) {
        errors.push({ err: err, code: code });
        return noop;
    }
}
function createCompileToFunctionFn(compile) {
    var cache = Object.create(null);
    return function compileToFunctions(template, options, vm) {
        options = extend({}, options);
        var warn = options.warn || warn$2;
        delete options.warn;
        /* istanbul ignore if */
        if (true) {
            // detect possible CSP restriction
            try {
                new Function('return 1');
            }
            catch (e) {
                if (e.toString().match(/unsafe-eval|CSP/)) {
                    warn('It seems you are using the standalone build of Vue.js in an ' +
                        'environment with Content Security Policy that prohibits unsafe-eval. ' +
                        'The template compiler cannot work in this environment. Consider ' +
                        'relaxing the policy to allow unsafe-eval or pre-compiling your ' +
                        'templates into render functions.');
                }
            }
        }
        // check cache
        var key = options.delimiters
            ? String(options.delimiters) + template
            : template;
        if (cache[key]) {
            return cache[key];
        }
        // compile
        var compiled = compile(template, options);
        // check compilation errors/tips
        if (true) {
            if (compiled.errors && compiled.errors.length) {
                if (options.outputSourceRange) {
                    compiled.errors.forEach(function (e) {
                        warn("Error compiling template:\n\n".concat(e.msg, "\n\n") +
                            generateCodeFrame(template, e.start, e.end), vm);
                    });
                }
                else {
                    warn("Error compiling template:\n\n".concat(template, "\n\n") +
                        compiled.errors.map(function (e) { return "- ".concat(e); }).join('\n') +
                        '\n', vm);
                }
            }
            if (compiled.tips && compiled.tips.length) {
                if (options.outputSourceRange) {
                    compiled.tips.forEach(function (e) { return tip(e.msg, vm); });
                }
                else {
                    compiled.tips.forEach(function (msg) { return tip(msg, vm); });
                }
            }
        }
        // turn code into functions
        var res = {};
        var fnGenErrors = [];
        res.render = createFunction(compiled.render, fnGenErrors);
        res.staticRenderFns = compiled.staticRenderFns.map(function (code) {
            return createFunction(code, fnGenErrors);
        });
        // check function generation errors.
        // this should only happen if there is a bug in the compiler itself.
        // mostly for codegen development use
        /* istanbul ignore if */
        if (true) {
            if ((!compiled.errors || !compiled.errors.length) && fnGenErrors.length) {
                warn("Failed to generate render function:\n\n" +
                    fnGenErrors
                        .map(function (_a) {
                        var err = _a.err, code = _a.code;
                        return "".concat(err.toString(), " in\n\n").concat(code, "\n");
                    })
                        .join('\n'), vm);
            }
        }
        return (cache[key] = res);
    };
}

function createCompilerCreator(baseCompile) {
    return function createCompiler(baseOptions) {
        function compile(template, options) {
            var finalOptions = Object.create(baseOptions);
            var errors = [];
            var tips = [];
            var warn = function (msg, range, tip) {
                (tip ? tips : errors).push(msg);
            };
            if (options) {
                if ( true && options.outputSourceRange) {
                    // $flow-disable-line
                    var leadingSpaceLength_1 = template.match(/^\s*/)[0].length;
                    warn = function (msg, range, tip) {
                        var data = typeof msg === 'string' ? { msg: msg } : msg;
                        if (range) {
                            if (range.start != null) {
                                data.start = range.start + leadingSpaceLength_1;
                            }
                            if (range.end != null) {
                                data.end = range.end + leadingSpaceLength_1;
                            }
                        }
                        (tip ? tips : errors).push(data);
                    };
                }
                // merge custom modules
                if (options.modules) {
                    finalOptions.modules = (baseOptions.modules || []).concat(options.modules);
                }
                // merge custom directives
                if (options.directives) {
                    finalOptions.directives = extend(Object.create(baseOptions.directives || null), options.directives);
                }
                // copy other options
                for (var key in options) {
                    if (key !== 'modules' && key !== 'directives') {
                        finalOptions[key] = options[key];
                    }
                }
            }
            finalOptions.warn = warn;
            var compiled = baseCompile(template.trim(), finalOptions);
            if (true) {
                detectErrors(compiled.ast, warn);
            }
            compiled.errors = errors;
            compiled.tips = tips;
            return compiled;
        }
        return {
            compile: compile,
            compileToFunctions: createCompileToFunctionFn(compile)
        };
    };
}

// `createCompilerCreator` allows creating compilers that use alternative
// parser/optimizer/codegen, e.g the SSR optimizing compiler.
// Here we just export a default compiler using the default parts.
var createCompiler = createCompilerCreator(function baseCompile(template, options) {
    var ast = parse(template.trim(), options);
    if (options.optimize !== false) {
        optimize(ast, options);
    }
    var code = generate(ast, options);
    return {
        ast: ast,
        render: code.render,
        staticRenderFns: code.staticRenderFns
    };
});

var _a = createCompiler(baseOptions), compileToFunctions = _a.compileToFunctions;

// check whether current browser encodes a char inside attribute values
var div;
function getShouldDecode(href) {
    div = div || document.createElement('div');
    div.innerHTML = href ? "<a href=\"\n\"/>" : "<div a=\"\n\"/>";
    return div.innerHTML.indexOf('&#10;') > 0;
}
// #3663: IE encodes newlines inside attribute values while other browsers don't
var shouldDecodeNewlines = inBrowser ? getShouldDecode(false) : false;
// #6828: chrome encodes content in a[href]
var shouldDecodeNewlinesForHref = inBrowser
    ? getShouldDecode(true)
    : false;

var idToTemplate = cached(function (id) {
    var el = query(id);
    return el && el.innerHTML;
});
var mount = Vue.prototype.$mount;
Vue.prototype.$mount = function (el, hydrating) {
    el = el && query(el);
    /* istanbul ignore if */
    if (el === document.body || el === document.documentElement) {
         true &&
            warn$2("Do not mount Vue to <html> or <body> - mount to normal elements instead.");
        return this;
    }
    var options = this.$options;
    // resolve template/el and convert to render function
    if (!options.render) {
        var template = options.template;
        if (template) {
            if (typeof template === 'string') {
                if (template.charAt(0) === '#') {
                    template = idToTemplate(template);
                    /* istanbul ignore if */
                    if ( true && !template) {
                        warn$2("Template element not found or is empty: ".concat(options.template), this);
                    }
                }
            }
            else if (template.nodeType) {
                template = template.innerHTML;
            }
            else {
                if (true) {
                    warn$2('invalid template option:' + template, this);
                }
                return this;
            }
        }
        else if (el) {
            // @ts-expect-error
            template = getOuterHTML(el);
        }
        if (template) {
            /* istanbul ignore if */
            if ( true && config.performance && mark) {
                mark('compile');
            }
            var _a = compileToFunctions(template, {
                outputSourceRange: "development" !== 'production',
                shouldDecodeNewlines: shouldDecodeNewlines,
                shouldDecodeNewlinesForHref: shouldDecodeNewlinesForHref,
                delimiters: options.delimiters,
                comments: options.comments
            }, this), render = _a.render, staticRenderFns = _a.staticRenderFns;
            options.render = render;
            options.staticRenderFns = staticRenderFns;
            /* istanbul ignore if */
            if ( true && config.performance && mark) {
                mark('compile end');
                measure("vue ".concat(this._name, " compile"), 'compile', 'compile end');
            }
        }
    }
    return mount.call(this, el, hydrating);
};
/**
 * Get outerHTML of elements, taking care
 * of SVG elements in IE as well.
 */
function getOuterHTML(el) {
    if (el.outerHTML) {
        return el.outerHTML;
    }
    else {
        var container = document.createElement('div');
        container.appendChild(el.cloneNode(true));
        return container.innerHTML;
    }
}
Vue.compile = compileToFunctions;




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!************************************************************************!*\
  !*** ./platform/plugins/ecommerce/resources/assets/js/order-create.js ***!
  \************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_CreateOrderComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/CreateOrderComponent */ "./platform/plugins/ecommerce/resources/assets/js/components/CreateOrderComponent.vue");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/components/modal/modal.js");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/directives/modal/modal.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");



vue__WEBPACK_IMPORTED_MODULE_1__["default"].component('b-modal', bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__.BModal);
vue__WEBPACK_IMPORTED_MODULE_1__["default"].directive('b-modal', bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__.VBModal);
vue__WEBPACK_IMPORTED_MODULE_1__["default"].component('create-order', _components_CreateOrderComponent__WEBPACK_IMPORTED_MODULE_0__["default"]);

/**
 * This let us access the `__` method for localization in VueJS templates
 * ({{ __('key') }})
 */
vue__WEBPACK_IMPORTED_MODULE_1__["default"].prototype.__ = function (key) {
  return _.get(window.trans, key, key);
};
vue__WEBPACK_IMPORTED_MODULE_1__["default"].filter('formatPrice', function (value) {
  return parseFloat(value).toFixed(2);
});
new vue__WEBPACK_IMPORTED_MODULE_1__["default"]({
  el: '#main-order'
});
})();

/******/ })()
;