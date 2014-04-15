angular.module('myToDo', ['todoController', 'todoService']);

//
// var myToDo = angular.module('myToDo', []);
// 
// function mainController($scope, $http) {
//     $scope.formData = {};
// 
//     // hit landing page -> get todos
//     $http.get('api/todos')
//         .success(function(data) {
//             $scope.todos = data;
//             console.log(data);
//         })
//         .error(function(data) {
//             console.log('Error: ' + data);
//         });
//     
//     // submit add form -> send text to node API
//     $scope.createTodo = function() {
//         $http.post('/api/todos', $scope.formData)
//             .success(function(data) {
//                 $scope.formData = {}; // clear form
//                 $scope.todos = data;
//                 console.log(data);
//             })
//             .error(function(data) {
//                 console.log("Error: " + data);
//             });
//     };
//     
//     // delete a ToDo
//     $scope.deleteTodo = function(id) {
//         $http.delete('/api/todos/' + id)
//             .success(function(data) {
//                 $scope.todos = data;
//                 console.log(data);
//             })
//             .error(function(data) {
//                 console.log("Error: " + data);
//             });
//     };
// }// 