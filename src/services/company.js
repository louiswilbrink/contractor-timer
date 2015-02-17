'use strict'

angular.module('contractTimer')
    .service('Company', ['$rootScope', '$timeout', '$firebase', function Company ($rootScope, $timeout, $firebase) {

        var baseUrl = 'contract-timer.firebaseio.com',
            company;

        
        function setCompany (companyName) {
            company = $firebase(new Firebase(baseUrl +
                '/companies/' + companyName)).$asObject();

            return company.$loaded().then(function () {
                console.log('company loaded:', company);
                $rootScope.$broadcast('companyLoaded');
            });
        }

        //$timeout(function () {
            //console.log('yo');
            //$rootScope.$broadcast('hello');
        //}, 1500);

        return {
            setCompany: setCompany
        }
    }]);
