angular.module( "lotour.app").config(function( $stateProvider,$urlRouterProvider ){

	$stateProvider
	.state( "home",{
		url : "/home",
		templateUrl : "controllers/home/home.html",
		controller : "homeCtrl"
	} )
	.state( "question",{
		url : "/question",
		templateUrl : "controllers/question/question.html",
		controller : "questionCtrl"
	} )
	.state( "ledge",{
		url : "/ledge",
		templateUrl : "controllers/ledge/ledge.html",
		controller : "ledgeCtrl"
	} )
	.state('kecheng',{
      url: '/kecheng',
      templateUrl: 'controllers/kecheng/kecheng.html',
      controller: 'kechengCtrl'
    })
    .state('kecheng.kc1',{
    	url: '/kc1',
    	templateUrl: 'controllers/kecheng/kecheng/kc1.html',
    	controller: 'kechengCtrl'
    })
    .state('kecheng.kc2',{
    	url: '/kc2',
    	templateUrl: 'controllers/kecheng/kecheng/kc2.html',
    	controller: 'kechengCtrl'
    })
    .state('kecheng.kc3',{
    	url: '/kc3',
    	templateUrl: 'controllers/kecheng/kecheng/kc3.html',
    	controller: 'kechengCtrl'
    })
    .state('kecheng.kc4',{
    	url: '/kc4',
    	templateUrl: 'controllers/kecheng/kecheng/kc4.html',
    	controller: 'kechengCtrl'
    })
    .state('kc_detail',{
        url: '/kc_detail',
        templateUrl: 'controllers/kc_detail/kc_detail.html',
        controller: 'kechengCtrl'
    })
	

	$urlRouterProvider.otherwise( "/home" );


})