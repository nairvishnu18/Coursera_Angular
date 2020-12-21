(function () {
    'use strict';

    angular.module('LunchApp',[])
    .controller('LunchAppController',function($scope){
        $scope.menu = "";
        $scope.display="";

        $scope.CheckIt = function() {

             $scope.foodmenu = $scope.menu.split(',');
             $scope.length = $scope.foodmenu.length;
           
            if($scope.menu==""){
                $scope.display="Please enter data first";
            }
            else if($scope.length>3){
                $scope.display="Too Much!!!";
            }
            else{
                $scope.display="Enjoy!!!";
            }
        }


    })


})();