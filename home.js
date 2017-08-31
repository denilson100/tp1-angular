//não esquecer de incluir o ".js" na index.htm
//chamando o meuApp (sem usar [] pois já foi criado antes)
 angular.module('listaTarefas')
    .config(['$stateProvider', ($stateProvider) => {
      $stateProvider.state({
        name: 'home',
        url: "/",
        controller: listaController,
        controllerAs: '$ctrl',
        //templateUrl: "hello.htm" //COM AJAX !!!
        template: `

        <table class="table">
            <!-- Inicio todas -->
            <thead class="thead-inverse">
                <tr>
                    <th>Todas</th>
                    <th>Tarefa</th>
                    <th>Categoria</th>
                </tr>
            </thead>
             <tbody>
                <tr ng-repeat="tarefa in $ctrl.listaTarefas "class="text-left">
                    <td><input type="checkbox" ng-model="tarefa.feito"/></td>
                    <td>{{tarefa.nome}}</td>
                    <td>{{tarefa.categoria}}</td>
                </tr>
             </tbody>
             <!-- fim todas -->
             <!-- Inicio concluidas -->
            <thead class="thead-inverse">
                <tr>
                    <th>Concluida</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
             <tbody>
                <tr ng-repeat='tarefa in $ctrl.listaTarefas | filter:{ feito: true }' class="text-left table-success">
                    <td><input type="checkbox" ng-model="tarefa.feito"/></td>
                    <td>{{tarefa.nome}}</td>
                    <td>{{tarefa.categoria}}</td>
                </tr>
             </tbody>
             <!-- fim concluidas -->
             <!-- Inicio nao concluida -->
            <thead class="thead-inverse">
                <tr>
                    <th>Não Concluida</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
             <tbody>
                <tr ng-repeat='tarefa in $ctrl.listaTarefas | filter:{ feito: false }' class="text-left table-danger">
                    <td><input type="checkbox" ng-model="tarefa.feito"/></td>
                    <td>{{tarefa.nome}}</td>
                    <td>{{tarefa.categoria}}</td>
                </tr>
             </tbody>
             <!-- fim nao concluidas -->
        </table>
        `
      });
    }]);

    function listaController(){
        // add lista estatica na lista do controller
        this.listaTarefas = listaDeTarefas;
    }