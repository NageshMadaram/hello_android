var app = angular.module('mainController', ['ui.router']);
app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/shopDash');
    $stateProvider
        
        .state('shopDash', {
            url: '/shopDash',
            templateUrl: 'shopDash.html',
            controller: 'shopDashController'
        })
       
});
app.controller('mainCtrl', function($scope) {
	   /*$scope.infosysLtd = config.infosysLtd;
	   $scope.copyright = config.copyright;*/
	   
});
