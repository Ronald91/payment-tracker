/* Authored by Ronald Williams */
(function () {
    function loginInfo($resource){
       return $resource('../src/data/login-data.json');
    }
angular.module('payTracker').factory('loginInfo', loginInfo);
}());