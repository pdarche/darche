'use strict';

/**
 * @ngdoc edit post directive
 * @name
 * @description
 * # darcheApp
 *
 */

angular
  .module('pdDirectives')
  .directive('pdEditProject', ['$window', 'Project', function ($window, Project){
    return {
      restrict: 'AEC',
      templateUrl: 'views/partials/editProject.html',
      link: function(scope, el, attrs){
        el.on('click', '.editor-save', function(ev){
          ev.preventDefault();

          el.find('.editor-save__icon').css({'background-image':'url("/images/ripple.gif")'});

          var updateTime = new Date().getTime();
          scope.project.updates.push(updateTime);
          scope.project.lastUpdated = updateTime;

          Project.update({id: scope.project._id}, scope.project, function(data){
              scope.project._rev = data.rev;
              el.find('.editor-save__icon').css({'background-image':''});
            }, function(err){
              el.find('.editor-save__icon').css({'background-image':''});
              alert("Error!");
            });
        });

        el.on('click', '#preview', function(ev){
          ev.preventDefault();

          var updateTime = new Date().getTime();
          scope.project.updates.push(updateTime);
          scope.project.lastUpdated = updateTime;

          Project.update({id: scope.project._id}, scope.project, function(data) {
              scope.project._rev = data.rev;
              $window.location.href = '/#/projects/' + scope.project._id;
            }, function(err) {
              alert("Error!");
          });
        });
      }
    }
  }]);