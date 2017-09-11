import angular from 'angular';
import navbarModule from './navbar/navbar';
import footerModule from './footer/footer';
import contactsViewerModule from './contacts-viewer/contacts-viewer';
import contactEditorModule from './contact-editor/contact-editor';
import contactDetailModule from './contact-detail/contact-detail';

let commonModule = angular.module('app.common', [
  navbarModule,
  footerModule,
  contactsViewerModule,
  contactEditorModule,
  contactDetailModule
])
  
.name;

export default commonModule;
