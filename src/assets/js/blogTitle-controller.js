var app = angular.module('titles', []);

app.controller('titlesController', function($scope) {
    $scope.showPopover = function() {
      $scope.popoverVisible = true;
      $scope.imgOverlay = {'background-color': 'black'};
    };
    $scope.hidePopover = function () {
      $scope.popoverVisible = false;
    };
});