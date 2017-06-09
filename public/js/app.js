console.log("hello angular");
var app = angular.module('app', ['controllers']);

angular.module('controllers', [])
  .controller('MainController', function ($scope) {
    $scope.mydata = {
      val: "jake",
      istoolong: false
    };
    $scope.isTooLong = false;
    $scope.$watch('mydata.val', function ($scope) {
      if ($scope.length > 5) {
        console.log("got here !" + $scope.isTooLong);
        $scope.isTooLong = true;
      }

    });
  })
  .controller('SubController', function ($scope) {
    $scope.classVar = 'orange';
    $scope.boolVal = false;
  });
