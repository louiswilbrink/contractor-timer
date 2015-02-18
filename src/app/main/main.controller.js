'use strict';

angular.module('contractTimer')
    .controller('MainCtrl', ['$scope', 
        'workshifts', 
        'displayCompany', 
        'Company', function ($scope, 
        allWorkshifts, 
        displayCompany, 
        Company) {

        function convertToMinutes (hours, minutes) {
            
            hours = parseInt(hours);
            minutes = parseInt(minutes);

            return (hours * 60) + minutes;
        }

        $scope.displayCompany = displayCompany;

        $scope.workshifts = allWorkshifts;

        $scope.showAllCompanies = false;

        $scope.addTime = function () {

            var start, stop, timeSegments;

            timeSegments = $scope.start.split(':');
            start = convertToMinutes(timeSegments[0], timeSegments[1]);

            timeSegments = $scope.stop.split(':');
            stop = convertToMinutes(timeSegments[0], timeSegments[1]);

            var uniqueShift = $scope.displayCompany + Date.now().toString();

            $scope.workshifts[uniqueShift] = {
                company: $scope.displayCompany,
                start: start,
                stop: stop
            };
            
            $scope.workshifts.$save().then(function () {
                // Add toast.
                console.log('saved!');
            });
        };

        $scope.$on('displayCompanySelected', function (event, displayCompany) {
            $scope.displayCompany = displayCompany;
            $scope.showAllCompanies = false;
        });

        $scope.$on('showAllCompaniesSelected', function () {
            $scope.showAllCompanies = true;
        });
    }]);
