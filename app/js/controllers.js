'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
	// LandingPageController
	.controller('LandingPageController', [function() {

	}])

	// CompanyController
	.controller('CompanyReportController', ['$scope', '$firebase', function($scope, $firebase) {
		var reportsRef = new Firebase('https://wedc.firebaseio.com/');

		$scope.reports = $firebase(reportsRef);

		$scope.report = {
			companyName: '',
			mailingAddress: '',
			ceoOwner: '',
			phone: '',
			email: '',
			naicsCode: '',
			companyDescription: ''
		};

		$scope.saveReport = function() {
			$scope.reports.$add($scope.report);
			$scope.report = {
				companyName: '',
				mailingAddress: '',
				ceoOwner: '',
				phone: '',
				email: '',
				naicsCode: '',
				companyDescription: ''
			};
		};
		}])

	// ProgramProfile Controller
	.controller('ProgramProfileController', ['$scope', '$firebase', function($scope, $firebase) {
		var profilesRef = new Firebase('https://wedc.firebaseio.com/');

		$scope.profiles = $firebase(profilesRef);

		$scope.profile = {date: '', applicants: '', participants: '', changes: '', funds: '', invoices: ''};

		$scope.saveProfile = function() {
			$scope.profiles.$add($scope.profile);
			$scope.profile = {date: '', applicants: '', participants: '', changes: '', funds: '', invoices: ''};
		};
		}])
		// Register, Log in, Log out Controllers
		.controller('AuthController', ['$scope', '$firebaseSimpleLogin', '$location', function($scope, $firebaseSimpleLogin, $location){
			var authRef = new Firebase('https://wedc.firebaseio.com/');

			var auth = $firebaseSimpleLogin(authRef);

			$scope.user = {email: '', password: ''};

			$scope.register = function() {
				auth.$createUser($scope.user.email, $scope.user.password).then(function(data){
					console.log(data);
					$scope.login();
				});
			};

			$scope.login = function() {
				auth.$login('password', $scope.user).then(function(data) {
					console.log(data);
					$location.path('/report');
				});
			};

			$scope.logout = function() {
				auth.$logout();
				$location.path('/');
			};
		}]);






















