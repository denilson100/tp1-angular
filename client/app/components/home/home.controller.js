class HomeController {
  constructor() {
    this.name = 'home';

    this.listaDeTarefas = mockTarefas;

    this.listaDeCategorias = mockCategorias;

    this.add = function(tarefa){
      mockTarefas.push(angular.copy(tarefa));
    }
  
    // this.add = function() {
    
    // console.log("adicionando");
    
    //   $http({
    //       url: '/telefones',
    //       method: "POST",
    //       data: { 'numero' : Math.floor(Math.random() * 900000) + 100000 }
    //   })
    //   .then(function(response) {
    //           console.log(response);
    //           $scope.telefones = response.data;
    //   });
    // }

  }
}

export default HomeController;
