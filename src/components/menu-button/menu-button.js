'use strict';

/**
 * @ngdoc directive
 * @name fasterScaleApp.directive:menuButton
 * @description
 * # menuButton
 */
angular.module('contractTimer')
  .directive('menuButton', function ($mdSidenav) {
    return {
        templateUrl: 'menu-button.html',
        restrict: 'E',
        link: function postLink(scope, element, attrs) {

            scope.toggleMenu = function () {
                $mdSidenav('left').toggle();
            };
        }
    };
});
