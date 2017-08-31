//não esquecer de incluir o ".js" na index.htm
//chamando o meuApp (sem usar [] pois já foi criado antes)
 angular.module('listaTarefas')
    .config(['$stateProvider', ($stateProvider) => {
      $stateProvider.state({
        name: 'add_categoria',
        url: "/",
        controller: listaCategoriaController,
        controllerAs: '$ctrl',
        //templateUrl: "hello.htm" //COM AJAX !!!
        template: `
        
        <div class="container">
        <form>
            <div class="form-group">
                <input class="form-control" type="text" ng-model="$ctrl.categoria" placeholder="Add uma categoria"/>
            </div>
            <div class="form-group">
                <a class="btn btn-primary" ng-click="$ctrl.addCategoria($ctrl.categoria)" ng-disabled="!$ctrl.categoria">Add</a>
            </div>
            <div class="form-group">
                <table class="table table-striped">
                    <tr>
                        <th>Categoria Disponiveis</th>
                    </tr>
                    <tr ng-repeat="categoria in $ctrl.listaDeCategorias" class="text-left">
                        <td>{{categoria}}</td>
                    </tr>
                </table>
            </div>
        </form>
        </div>
        `
      });
    }]);

    function listaCategoriaController(){
        this.listaDeCategorias = listaDeCategorias;
        this.categoria = "";
        this.addCategoria = function adicionarCategoria(categoria){
            // add na lista estatica    
            listaDeCategorias.push(angular.copy(categoria));
                this.categoria = "";
        }
    }