app.controller('pageTwo',function($scope,$http,$routeParams){
    $http({
       url:"rest/api/r1/"+$routeParams.param,
       method:"GET"
    }).
    then(

        function ok(response){
           $scope.okTwo = response.data;
           console.log(response.data);
        },function error(response){
           console.log(response);
    });
});