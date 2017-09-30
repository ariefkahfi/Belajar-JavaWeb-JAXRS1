app.controller('formParam',function($scope,$http){

    $scope.requestParam = function (param){
        $http({
           method:"GET",
           url:"rest/api/r1/"+param
        }).then(
            function ok (response){
               alert(response.data);
            },function error(response){
               console.log(response);
        })
    };

    $scope.cleanUp = function (){
      $scope.nama = "";
    };

    $scope.submitParam = function (){
        var modelNama = $scope.nama;

        if(modelNama === '' || modelNama === undefined){
            alert('Nama masih kosong');
        }else{
           $scope.requestParam($scope.nama);
           $scope.cleanUp();
        }
    }
});