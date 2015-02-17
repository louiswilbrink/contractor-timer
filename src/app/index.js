'use strict';

angular.module('contractTimer', [
    'ngAnimate', 'ngCookies', 'ngTouch', 
    'ngSanitize', 'ngRoute', 'ngMaterial'])
    .config(function ($routeProvider, $mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryColor('indigo')
            .accentColor('pink')
            .warnColor('red');

        $routeProvider
            .when('/', {
                templateUrl: 'app/main/main.html',
                controller: 'MainCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    })
