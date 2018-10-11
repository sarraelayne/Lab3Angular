angular.module('app', [])
    .controller('mainCtrl', mainCtrl)
    .directive('avatar', avatarDirective);

var avArray = [
    'https://vignette.wikia.nocookie.net/avatar/images/8/85/Water_Tribe_emblem.png/revision/latest?cb=20090125144137',
    'https://vignette.wikia.nocookie.net/avatar/images/a/a4/Earth_Kingdom_emblem.png/revision/latest?cb=20090125144136',
    'https://vignette.wikia.nocookie.net/avatar/images/4/47/Fire_Nation_emblem.png/revision/latest?cb=20090125144137',
    'https://vignette.wikia.nocookie.net/avatar/images/f/f5/Air_Nomads_emblem.png/revision/latest?cb=20090125144136'
    ];  
function mainCtrl ($scope) {
    
    $scope.users = [];
    $scope.addNew = function(user) {
        /*function duplicateUser (user) {
            var values = Object.create(null);
            for (var i = 0; i < users.length; i++) {
                var value = users[i];
                if (value in values) {
                    return true;
                }
                values[value] = true;
            }
            return false;
        }
        if (duplicateUser == false) {*/
            $scope.users.push({
                name: user.name,
                avatarUrl: user.url,
                email: user.email
            });
            user.name = '';
            user.url = '';
            user.email = '';
        //}
    };
}
function avatarDirective () {
    return {
        scope: {
            user: '='
        },
        restrict: 'E',
        replace: 'true',
        template: (
            '<div class="Avatar">' +
                '<img ng-src="{{user.avatarUrl}}" />' +
                '<h4>{{user.name}}</h4>' +
                '<h5>{{user.email}}</h5>' +
            '</div>'
        ),
        name: name,
        link: link
    };
    function link (scope) {
        if (!scope.user.avatarUrl) {
            var randAv = avArray[Math.floor(Math.random() * avArray.length)];
            scope.user.avatarUrl = randAv;
        }
        if (!scope.user.name) {
            var emailUser = scope.user.email.substr(0, scope.user.email.indexOf('@')); 
            console.log(emailUser);
            scope.user.name = emailUser;
        }
    }
    
}