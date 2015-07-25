/* Authored by LaToya Richard */
(function () {
    //TODO:Remove the loginData 
    function LoginController($window, $state) {
        //TODO:Replace the alert with $state.go for the sign up
        this.signUp = function () {
            $state.go('signup');
        };
        //TODO:Replace the alert with $state.go for the child login
        this.login = function () {
            $state.go('home');
        };
    }
    angular.module('payTracker').controller('LoginController', LoginController);
}());