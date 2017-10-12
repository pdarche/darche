'use strict';

/**
 * @ngdoc nav
 * @name
 * @description
 * # darcheApp
 *
 *
 */

angular
  .module('pdDirectives', [])
  .directive('pdNav', function(){
    return {
      templateUrl: 'views/nav.html',
      link: function(scope, el, attrs){
        var menu = $('.nav-bar');

        el.on('click', '.nav-icon', function(ev){
          menu.hasClass('nav-bar--hidden') ?
            menu.removeClass('nav-bar--hidden') :
            menu.addClass('nav-bar--hidden');
        });

        scope.$on('home', function(ev){
          menu.hasClass('nav-bar--hidden') ?
            null : menu.addClass('nav-bar--hidden');
        });

        scope.$on('not-home', function(ev){
          menu.hasClass('nav-bar--hidden') ?
            menu.removeClass('nav-bar--hidden') : null;
        });
      }
    }
  });