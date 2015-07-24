/* Authored by LaToya Richard */
(function () {

    function LoginController($window, loginData) {
        //Return the resolved promise of factory method
        this.name = loginData.name;
        this.showAlert = function () {
            var message = "Hello Human";
            alert($window._.snakeCase(message));
        };
    }
    angular.module('payTracker').controller('LoginController', LoginController);
}());