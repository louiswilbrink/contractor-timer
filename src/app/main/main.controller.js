'use strict';

angular.module('contractTimer')
    .controller('MainCtrl', ['$scope', 
        'workshifts', 
        'displayCompany', 
        'Company', function ($scope, 
        allWorkshifts, 
        displayCompany, 
        Company) {

        $scope.displayCompany = displayCompany;

        $scope.workshifts = allWorkshifts;

        $scope.showAllCompanies = true;

        $scope.$on('hello', function () {
            console.log('yoyo');
        });
    }]);
