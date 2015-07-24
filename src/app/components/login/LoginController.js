/* Authored by LaToya Richard */
(function () {

    function LoginController() {
        this.name = 'LaToya';
        this.showAlert = function () {
            alert("Hello");
        };
    }
    angular.module('payTracker').controller('LoginController', LoginController);
}());