'use strict';

/**
 * @ngdoc directive
 * @name fasterScaleApp.directive:sideNav
 * @description
 * # sideNav
 */
angular.module('contractTimer')
    .directive('sideNav', ['$mdSidenav', function ($mdSidenav) {
        
        return {
            templateUrl: 'components/sidenav/side-nav.html',
            restrict: 'E',
            link: function postLink(scope, element, attrs) {
                scope.menuItems = [{
                    text: 'Nike',
                    onClick: function () {
                    }
                },
                {
                    text: 'Facebook',
                    onClick: function () {
                    }
                },
                {
                    text: 'Amazon',
                    onClick: function () {
                    }
                },
                {
                    text: 'Verizon',
                    onClick: function () {
                    }
                },
                {
                    text: 'Citibank',
                    onClick: function () {
                    }
                },
                {
                    text: 'Close',
                    onClick: function () {
                        $mdSidenav('left').close();
                    },
                    isSelected: false
                }];
            }
        };
    }]);
