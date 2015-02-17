'use strict';

angular.module('contractTimer')
    .controller('MainCtrl', function ($scope) {

        $scope.workshifts = [{
            company: 'Nike',
            lengthOfTime: 1.5,
            time: Date('2015-02-12 12:00:00')
        },
        {
            company: 'HR Block',
            lengthOfTime: 4.0,
            time: Date('2015-01-18 15:00:00')
        }];
    });
