'use strict';

/**
 * @ngdoc directive
 * @name fasterScaleApp.directive:sideNav
 * @description
 * # sideNav
 */
angular.module('contractTimer')
    .directive('fsSideNav', ['$mdSidenav',
        '$location',
        '$timeout',
        'User',
        'Authentication',
        'FasterScale', function ($mdSidenav, 
        $location, 
        $timeout, 
        User, 
        Authentication,
        FasterScale) {

        return {
            templateUrl: 'views/fs-side-nav.html',
            restrict: 'E',
            link: function postLink(scope, element, attrs) {
                scope.menuItems = [{
                    text: 'Edit Current Scale',
                    onClick: function () {
                        // Go to home page where the user can interact with the current scale.
                        //$location.path('/home');
                        
                        // Close the side-nav.
                        //$mdSidenav('left').close();
                    },
                    isSelected: true
                },
                {
                    text: 'View Current Scale',
                    onClick: function () {
                        //User.setDisplayScale(FasterScale.getScaleId());
                        //$location.path('/display-scale/' + FasterScale.getScaleId());
                    },
                    isSelected: false
                },
                {
                    text: 'New Scale',
                    onClick: function () {
                        //$mdSidenav('left').close();
                        //User.addScale();
                        //$timeout(function () {
                            //$location.path('/home');
                        //}, 700);
                    },
                    isSelected: false
                },
                {
                    text: 'Previous Scales',
                    onClick: function () {
                        // previous scales function 
                    },
                    isSelected: false
                },
                {
                    text: 'Logout',
                    onClick: function () {
                        // logout function
                    },
                    isSelected: false
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
