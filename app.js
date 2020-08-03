(function () {
  'use strict';
    angular.module('LunchCheck',[])
 .controller('LunchCheckController' , LunchCheckController);

LunchCheckController.$inject = ['$scope'];
 function LunchCheckController($scope) {
 $scope.checkiftoomuch = function (){
   if($scope.menu != ""){
const words = $scope.menu.split(',');
var length = words.length;
var i =0 ;
for(i=0;i<length+1;i++){
if(words[i]==""){
  length--;
}
}
console.log(length);
if(length<4)
  $scope.message ="Enjoy !";
else {
  $scope.message ="Too much!";
}
}
else
    $scope.message ="Please enter data first";
   }
  }
})();
