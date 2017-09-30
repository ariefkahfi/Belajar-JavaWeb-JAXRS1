app.controller('pageOne',function($scope,$http){
    $http({
       method:"GET",
       url:"rest/api/r1"
    }).
    then(
    function ok(response){
       $scope.okOne = response.data;

       console.log(response.data);
    },function error(response){
       console.log(response);
    });
});