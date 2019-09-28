var app = angular.module('myApp', ['ngRoute', 'ngCookies']);

app.config(function($routeProvider) {
  $routeProvider

  .when('/', {
    templateUrl : 'pages/home.html',
    controller  : 'HomeController'
  })
  .when('/about', {
    templateUrl : 'pages/about.html',
    controller  : 'HomeController'
  })
.when('/chat', {
    templateUrl : 'chat/chat.html',
    controller  : 'ChatController'
  })
  .when('/view_blog', {
    templateUrl : 'blog/view_blog.html',
    controller  : 'BlogController'
  })
 
  .when('/list_blog', {
    templateUrl : 'blog/list_blog.html',
    controller  : 'BlogController'
  })
  .when('/create_blog', {
    templateUrl : 'blog/create_blog.html',
    controller  : 'BlogController'
  })

  .when('/about', {
    templateUrl : 'pages/about.html',
    controller  : 'AboutController'
  })
  .when('/login', {
    templateUrl : 'pages/login.html',
    controller  : 'UserController'
  })
  .when('/logout', {
    templateUrl : 'pages/logout.html',
    controller  : 'UserController'
  })
 .when('/register', {
    templateUrl : 'pages/register.html',
    controller  : 'UserController'
  })
  .when('/search_friend', {
    templateUrl : 'friends/search_friend.html',
    controller  : 'FriendController'
  })
.when('/view_friend', {
    templateUrl : 'friends/view_friend.html',
    controller  : 'FriendController'
  })
  .when('/request_friend', {
    templateUrl : 'friends/request_friend.html',
    controller  : 'FriendController'
  })
.when('/post_job', {
    templateUrl : 'job/post_job.html',
    controller  : 'JobController'
  })
  .when('/search_job', {
    templateUrl : 'job/search_job.html',
    controller  : 'JobController'
  })
  .when('/view_job_details', {
    templateUrl : 'job/view_job.html',
    controller  : 'JobController'
  })
  .otherwise({redirectTo: '/'});
});

app.run(function ($rootScope, $location, $cookieStore, $http){

	$rootScope.$on('$locationChangeStart', function(event, next, current){
	console.log("$locationChangeStart")
	//redirect to login page if not logged in and typing to access a restricted page

	var restrictedPage=$.inArray($location.path(), ['/login','/register']) ===-1;
	console.log("restrictedPage:" +restrictedPage)
	var loggedIn=$rootScope.currentUser.userid;
	console.log("loggedIn:"+loggedIn)
	if(restrictedPage & !loggedIn){
	console.log("Navigating to login page:")
	//alert("You are not logged and so you can't do this operation")
	$location.path('/login');
	}
	});

	//keep user logged in after page refresh
	$rootScope.currentUser = $cookieStore.get('currentUser') || {};
	if($rootScope.currentUser){
	$http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.currentUser;
	
	}
	});