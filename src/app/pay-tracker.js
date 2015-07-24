//This will be the module definition and where I set up states
(function () {
    angular.module('payTracker', ['ngResource', 'ui.router'])
            .config(function ($stateProvider, $urlRouterProvider) {
                $urlRouterProvider.otherwise("/login");
                //Use ng resource to set up a default route, that calls a service, controller, and template
                $stateProvider
                        .state('login', {
                            url: "/login",
                            templateUrl: "../src/app/components/login/login.html",
                            controller: 'LoginController as login',
                            resolve: {
                                loginData: function (loginInfo) {
                                    //Call the LoginServices factory method to return the json data
                                    var loginResponse = loginInfo.get(function (success) {
                                        return success;
                                    }, (function (err) {
                                        return err;
                                    }));
                                    return loginResponse;
                                }
                            }
                        });
            });
}());