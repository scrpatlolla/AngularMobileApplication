// Greet Component -- Update to the new version
angular.
	module('greetUser').
	component('greetUser', {
    templateUrl: 'greet-user/greet-user.template.html',
    controller: function GreetUserController() {
      this.user = 'Angular App';
    }
  });