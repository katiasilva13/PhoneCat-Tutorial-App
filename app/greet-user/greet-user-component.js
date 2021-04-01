
angular.
module('myApp').
component('greetUser', {
  // template: 'Hello, {{$ctrl.user}}!',
  templateUrl: 'greet-user/greet-user.template.html',
  controller: function GreetUserController() {
    this.user = 'world';
  }
});