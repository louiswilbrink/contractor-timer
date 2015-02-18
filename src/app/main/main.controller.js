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

        $scope.showAllCompanies = false;

        $scope.$on('displayCompanySelected', function (event, displayCompany) {
            $scope.displayCompany = displayCompany;
            $scope.showAllCompanies = false;
        });

        $scope.$on('showAllCompaniesSelected', function () {
            $scope.showAllCompanies = true;
        });
    }]);
