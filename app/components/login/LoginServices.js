/* Authored by Ronald Williams */
(function () {
    function loginInfo($resource){
       return $resource('../app/data/login-data.json');
    }
angular.module('payTracker').factory('loginInfo', loginInfo);
}());