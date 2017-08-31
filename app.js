
//começando app e incluindo o UI ROUTER (aqui nesta versão separado por ponto)
var app = angular.module('listaTarefas',['ui.router']);

app.config(function($stateProvider, $urlRouterProvider){
	
  $urlRouterProvider.otherwise("/");
	
});