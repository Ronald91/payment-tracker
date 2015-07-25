//This will be the module definition and where I set up states
(function () {
    angular.module('payTracker', ['ngResource', 'ui.router','ui.bootstrap'])
            .config(function ($stateProvider, $urlRouterProvider) {
                
                $urlRouterProvider.otherwise("/login");
                //Use ng resource to set up a default route, that calls a service, controller, and template
                $stateProvider
                        .state('login', {
                            url: "/login",
                            templateUrl: "../app/components/login/login.html",
                            controller: 'LoginController as login'
//                            resolve: {
//                                loginData: function (loginInfo) {
//                                    //Call the LoginServices factory method to return the json data
//                                    var loginResponse = loginInfo.get(function (success) {
//                                        return success;
//                                    }, (function (err) {
//                                        return err;
//                                    }));
//                                    return loginResponse;
//                                }
//                            }
                        })
                        .state('login.signup', {
                            url: "/signup",
                            templateUrl: "../app/components/login/sign-up/sign-up.html",
                            controller: 'SignUpController as signup'
                        })
                         .state('home', {
                            url: "/home",
                            templateUrl: "../app/components/login/home.html",
                            controller: 'HomeController as home'
                        });
            });
}());
