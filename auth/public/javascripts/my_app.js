angular.module('myApp', []).
  controller('myController', ['$scope', '$http',
                              function($scope, $http) {
    $http.get('/user/profile')
        .success(function(data, status, headers, config) {
      $scope.user = data;
      $scope.error = "";
    }).
    error(function(data, status, headers, config) {
      $scope.user = {};
      $scope.error = data;
    });
    $http.get('/user/journal')
        .success(function(data, status, headers, config) {
          console.log(data);
      $scope.journals = data;
                console.log($scope.journals);

      $scope.error = "";
    }).
    error(function(data, status, headers, config) {
      $scope.journals = [];
      $scope.error = data;
    });
    
    $scope.showJournal = function(journal){
      alert(journal.journal_content);
    };
  }]);