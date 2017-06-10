var app = angular.module('app', ['controllers']);

angular.module('controllers', [])
  .controller('MainController', function ($scope, $filter) {
    $scope.shortcuts = {arr: [
      {
        keyCombi: "alt+tab",
        description: "Switch between programs",
        os: "Linux Window",
        age: 2
      }, {
        keyCombi: "ctrl+alt+t",
        description: "Open terminal",
        os: "Linux",
        age: 22
      }, {
        keyCombi: "space",
        description: "Scroll in a browser",
        os: "Linux Window Mac",
        age: 42
      }, {
        keyCombi: "alt+F4",
        description: "adsfkj slkfwj ef",
        os: "Linux Window",
        age: 2
      }, {
        keyCombi: "asdf",
        description: "asfw efwef wef we fw",
        os: "Linux Window",
        age: 253
      }, {
        keyCombi: "basdf",
        description: "asf wef wef wefwgefwef",
        os: "Linux Window",
        age: 25
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
  .controller('SubController', function ($scope) {
    $scope.classVar = 'orange';
    $scope.boolVal = false;
  });
