'use strict';

define([], function () {

    var app = angular.module('pullapkApp', ['ngRoute', 'ngAnimate', 'routeResolverServices', 'ui.bootstrap']);

    // app.run(['$rootScope', '$location', 'authService',
    //     function ($rootScope, $location, authService) {
            
    //         //Client-side security. Server-side framework MUST add it's 
    //         //own security as well since client-based security is easily hacked
    //         $rootScope.$on("$routeChangeStart", function (event, next, current) {
    //             if (next && next.$$route && next.$$route.secure) {
    //                 if (!authService.user.isAuthenticated) {
    //                     $rootScope.$evalAsync(function () {
    //                         authService.redirectToLogin();
    //                     });
    //                 }
    //             }
    //         });

    // }]);

    return app;

});





