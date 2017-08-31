//não esquecer de incluir o ".js" na index.htm
//chamando o meuApp (sem usar [] pois já foi criado antes)
 angular.module('listaTarefas')
    .config(['$stateProvider', ($stateProvider) => {
      $stateProvider.state({
        name: 'add_tarefa',
        url: "/",
        controller: addTarefaController,
        controllerAs: '$ctrl',
        //templateUrl: "hello.htm" //COM AJAX !!!
        template: `
        <div class="container">
        <form>
            <div class="form-group">
                <input class="form-control" type="text" ng-model="tarefa.nome" placeholder="Add uma tarefa"/>
            </div>
            <div class="form-group">
                <select class="form-control" ng-model="tarefa.categoria" ng-options="categorias for categorias in $ctrl.categorias">
                <option value="">Selecione uma categoria</option>
            </select>
            </div>
            <div class="form-group">
                <a class="btn btn-primary" ng-click="$ctrl.adicionarTarefa(tarefa)" ng-disabled="!tarefa.nome || !tarefa.categoria">Add</a>
            </div>
            <div class="form-group">
                <table class="table table-striped">
                <tr>
                    <th>Lista de Tarefas</th>
                </tr>
                <tr ng-repeat="tarefa in $ctrl.tarefas" class="text-left">
                    <td>{{tarefa.nome}}  ( {{tarefa.categoria}} )</td>
                </tr>
            </table>
            </div>
        </form>
        </div>
        `
      });
    }]);

    function addTarefaController(){
        // this.listaDeCategorias = listaDeCategorias;

        this.categorias = listaDeCategorias;
        this.tarefas = listaDeTarefas
        this.adicionarTarefa = function(tarefa){
            listaDeTarefas.push(angular.copy(tarefa));
            tarefa.nome = "";
            tarefa.categoria = "";
            console.log(listaDeTarefas);
        }
    }