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

        function getTotalTimeWorked () {
            if (!$scope.workshifts) {
                return 0;
            }

            else {
                var total = 0;
                if ($scope.showAllCompanies) {
                    angular.forEach($scope.workshifts, function (workshift) {
                        total += workshift.stop - workshift.start;
                    });
                }
                else {
                    angular.forEach($scope.workshifts, function (workshift) {
                        if (workshift.company === $scope.displayCompany) {
                            total += workshift.stop - workshift.start;
                        }
                    });
               }

                return total;
            }
        }

        $scope.displayCompany = displayCompany;

        $scope.workshifts = allWorkshifts;

        $scope.total = getTotalTimeWorked();

        $scope.showAllCompanies = false;

        $scope.deleteShift = function (key) {

            if ($scope.workshifts[key]) {
                delete $scope.workshifts[key];
                $scope.workshifts.$save().then(function () {
                    console.log('saved!');
                });
                $scope.total = getTotalTimeWorked();
            }
        };

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
                $scope.total = getTotalTimeWorked();
            });

            $scope.start = '';
            $scope.stop = '';
        };

        $scope.$on('displayCompanySelected', function (event, displayCompany) {
            $scope.displayCompany = displayCompany;
            $scope.showAllCompanies = false;
            $scope.total = getTotalTimeWorked();
        });

        $scope.$on('showAllCompaniesSelected', function () {
            $scope.showAllCompanies = true;
            $scope.total = getTotalTimeWorked();
        });
    }]);
