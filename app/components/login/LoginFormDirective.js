/* Authored by Ronald Williams */
(function () {
    function loginForm() {
        return {
            restrict:'A',
            scope: {
                userName: '=',
                password: '=',
                login: '&',
                signUp: '&'
            },
            templateUrl: '../app/components/login/login-form-template.html'
        };
    }
    angular.module('payTracker').directive('loginForm', loginForm);

}());