(function(){
  angular.module('ecommerceStore', ['ui.router']).config(AuthRouter);

  function AuthRouter($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise("/");

    $stateProvider
    .state('home', {
      url: '/',
      params: {
        user: null
      }
    })
    .state('cart', {
      url: '/cart/:user_id',
      templateUrl: '/partials/cart.html',
    })
    .state('account', {
      url: '/account/:user_id/edit',
      templateUrl: '/partials/account.html',
    })
    .state('allProducts', {
      url: '/products',
      templateUrl: '/partials/products_all.html',
    })
    .state('oneProduct', {
      url: '/product/:product_id',
      templateUrl: '/partials/single_product.html',
    })
  }
})()