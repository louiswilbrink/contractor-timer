'use strict'

angular.module('contractTimer')
    .service('Company', ['$rootScope', '$timeout', '$firebase', function Company ($rootScope, $timeout, $firebase) {

        var baseUrl = 'contract-timer.firebaseio.com',
            workshifts;

        function getWorkshifts () {
            workshifts = $firebase(new Firebase(baseUrl + '/shifts')).$asObject();

            return workshifts.$loaded();
        }

        return {
            getWorkshifts: getWorkshifts
        }
    }]);
