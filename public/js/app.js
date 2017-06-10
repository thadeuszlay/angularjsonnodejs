var app = angular.module('app', ['controllers']);

angular.module('controllers', [])
  .controller('MainController', function ($scope, $filter) {
    $scope.shortcuts = {arr: [
      {
        keyCombi: "alt+tab",
        description: "Switch between programs",
        os: "Linux Window"
      }, {
        keyCombi: "jake",
        description: 22,
        os: "Linux Window"
      }, {
        keyCombi: "asdf",
        description:11,
        os: "Linux Window"
      }, {
        keyCombi: "basdf",
        description:34,
        os: "Linux Window"
      }
    ]};

  })
  .filter('charlimit', function() {
    return function(input, length) {
      if(!length) {
        length=10;
      }
      if(!input) {
        return 'nothing here';
      }
      if(input.length <= length) {
        return input;
      } else {
        return input.substring(0, length) + '...';
      }
    }
  })
  .controller('SubController', function ($scope) {
    $scope.classVar = 'orange';
    $scope.boolVal = false;
  });
