
// class HomeService {
//   constructor($http, $q) {
//     this.$http = $http;
//     this.$q = $q
//     var telefones = [
    
//     {numero: '555-8888'}, 
//     {numero: '555-2626'}
    
//     ];
//   }
  

//   getContacts() {
//       $httpBackend.whenGET('/telefones').respond(200, telefones);
//   }

//     createContact(_name, _phone) {
//     return this.$http.post('/api/contacts', {name:_name, phone:_phone})
//     .then( (response)=>response.data ); // 'return response.data' está implícito.
//   }
// }

 var telefone = [
    
    {numero: '555-8888'}, 
    {numero: '555-2626'}
    
    ];