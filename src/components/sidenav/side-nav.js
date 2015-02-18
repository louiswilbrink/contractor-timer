'use strict';

/**
 * @ngdoc directive
 * @name fasterScaleApp.directive:sideNav
 * @description
 * # sideNav
 */
angular.module('contractTimer')
    .directive('sideNav', ['$mdSidenav', 'Company', function ($mdSidenav, Company) {
        
        return {
            templateUrl: 'components/sidenav/side-nav.html',
            restrict: 'E',
            link: function postLink(scope, element, attrs) {
                scope.menuItems = [{
                    text: 'Nike',
                    onClick: function () {
                        Company.setDisplayCompany('nike');
                    }
                },
                {
                    text: 'Facebook',
                    onClick: function () {
                        Company.setDisplayCompany('facebook');
                    }
                },
                {
                    text: 'Amazon',
                    onClick: function () {
                        Company.setDisplayCompany('amazon');
                    }
                },
                {
                    text: 'Verizon',
                    onClick: function () {
                        Company.setDisplayCompany('verizon');
                    }
                },
                {
                    text: 'Citibank',
                    onClick: function () {
                        Company.setDisplayCompany('citibank');
                    }
                },
                {
                    text: 'Show All Companies',
                    onClick: function () {
                        Company.showAllCompanies();
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
