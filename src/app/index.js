'use strict';

angular.module('contractTimer', ['ngAnimate', 
    'ngCookies', 
    'ngTouch', 
    'ngSanitize', 
    'ngRoute', 
    'ngMaterial',
    'firebase'])
    .config(function ($routeProvider, $mdThemingProvider) {

        //$mdThemingProvider.theme('default')
            //.primaryColor('green')
            //.accentColor('orange')
            //.warnColor('red');

        $routeProvider
            .when('/', {
                templateUrl: 'app/main/main.html',
                controller: 'MainCtrl',
                resolve: {
                    displayCompany: function () {
                        return 'citibank';
                    },
                    workshifts: ['Company', function (Company) {
                        return Company.getWorkshifts();
                    }]
                }
            })
            .otherwise({
                redirectTo: '/'
            });
    })
