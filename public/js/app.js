var app = angular.module('app', ['controllers']);

angular.module('controllers', [])
  .controller('MainController', function ($scope, $filter) {
    $scope.shortcuts = {arr: [
      {
        keyCombi: ["Alt", "Tab"],
        description: "Switch between programs",
        os: ["linux", "win"],
        rate: 2
      }, {
        keyCombi: ["Ctrl", "Alt", "T"],
        description: "Open terminal",
        os: ["linux"],
        rate: 22
      }, {
        keyCombi: ["Space"],
        description: "Scroll in a browser",
        os: ["linux", "win", "mac"],
        rate: 42
      }, {
        keyCombi: ["Alt", "F4"],
        description: "Close window",
        os: ["linux", "win"],
        rate: 2
      }, {
        keyCombi: ["Alt", "`"],
        description: "Switch between windows from the same application.",
        os: ["linux", "win"],
        rate: 253
      }, {
        keyCombi: "basdf",
        description: "asf wef wef wefwgefwef",
        os: ["linux", "win"],
        rate: 25
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
    };
  })
  .filter('candrink', function() {
    return function(data, minage) {
      var filtered = [];
      if(!minage) {
        minage = 21;
      }
      for (var i=0; i < data.length; i++) {
        var value = data[i];
        if(value.age > minage) {
          filtered.push(value);
        }
      }
      return filtered;
    };
  })
  .filter('selectOs', function() {
    return function(data, selectedOs) {
      var filtered = [];
      for (var i = 0; i<data.length;i++) {
        var value = data[i];
        if(value.os.indexOf(selectedOs) >= 0) {
          filtered.push(value);
        }
      }
      return filtered;
    }
  })
  .controller('SubController', function ($scope) {
    $scope.classVar = 'orange';
    $scope.boolVal = false;
  });
