'use strict';

angular.module('contractTimer')
  .directive('menuButton', function ($mdSidenav) {
    return {
        templateUrl: 'components/menu-button/menu-button.html',
        restrict: 'E',
        link: function postLink(scope, element, attrs) {

            scope.toggleMenu = function () {
                $mdSidenav('left').toggle();
            };
        }
    };
});
