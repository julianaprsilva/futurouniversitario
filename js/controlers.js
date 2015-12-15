angular.module('FuturoUniversitario').controller('futuroUniversitarioCtrl', function ($scope, $http){
    $scope.app = "Futuro Universitário";
    
    angular.module('FuturoUniversitario').config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        $httpProvider.defaults.withCredentials = true;
        delete $httpProvider.defaults.headers.common["X-Requested-With"];
        $httpProvider.defaults.headers.common["Accept"] = "application/json";
        $httpProvider.defaults.headers.common["Content-Type"] = "application/json";
    }]);
    
    function jsonp_callback(data) {
        console.log('teste');
        // returning from async callbacks is (generally) meaningless
        var teste = JSON.parse(data);
        console.log(teste);
    }
   
    $scope.procura = function(nome){
        var req = {
             method: 'GET',
             headers: {
                 'Content-Type': 'application/json',
                 'Access-Control-Allow-Origin': '*',
                 'Access-Control-Allow-Methods': 'GET',
                 'Access-Control-Allow-Headers': 'Content-Type, X-Requested-With'
             }
        };
        
        /* $.getJSON("http://en.dataviva.info/attrs/university", function(data) {
            console.log(JSON.stringify(data));
         });*/
        
         /*$.getJSON('http://en.dataviva.info/attrs/university/?jsoncallback=?&callback:getJson')
         .done(function(){
             console.log(JSON.stringify(data));
         });*/
        console.log('Vou conseguir sim');
        
        
        $http.jsonp('http://en.dataviva.info/attrs/university/?format=json&jsoncallback=?&callback=jsonp_callback') 
        .success(function(){
            console.log(data);
        });
        
        $http.get("http://en.dataviva.info/attrs/university/")
        .success(function (data) {
            console.log(data);
        });
        
        /*$.getJSON('http://en.dataviva.info/attrs/university/?format=json&action=query&list=search&srsearch=Oculus&utf8&callback=?')
        .fail(function(){
            console.log("Erro");
        })
        .done(function(){
            console.log(data);
        });*/
        
            /* $.ajax({
                    url :'http://en.dataviva.info/attrs/university/',
                    dataType: 'json',
                    cache: true,
                    async: false,
                    success: function(data){
                        console.log(JSON.stringify(data));
                    }
                });*/

      /* $http(req)
        .success(function(data){
           console.log(data);
           $scope.dadosUniversidades = JSON.stringify(data);
           console.log($scope.dadosUniversidades);
           $scope.universidade = $scope.dadosUniversidades.filter(function (uni){
                if ($scope.nome.toLowerCase() == uni.name.toLowerCase()) return uni;
           });
        })
        .error(function(data){
            console.log('Error: ' + data);
        });*/
    };
   
});
