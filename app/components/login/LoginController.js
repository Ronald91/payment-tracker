/* Authored by LaToya Richard */
(function () {
    //TODO:Remove the loginData 
    function LoginController($window, loginData) {
        //TODO:Replace the alert with $state.go for the sign up
        this.signUp = function () {
            alert('THis should route me');
        };
        //TODO:Replace the alert with $state.go for the child login
        this.login = function () {
            alert('I logged in');
        };
    }
    angular.module('payTracker').controller('LoginController', LoginController);
}());