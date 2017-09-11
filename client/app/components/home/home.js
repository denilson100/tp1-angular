import angular from 'angular';
import uiRouter from 'angular-ui-router';
import angularMocks from 'angular-mocks';
// import backand from '../mock/backand/backand.js'
import homeService from './home.service';
import homeComponent from './home.component';

// var app = angular.module('home', ['ngMockE2E']);


let homeModule = angular.module('home', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      component: 'home'
    });
})

.component('home', homeComponent)
  
.name;


export default homeModule;
