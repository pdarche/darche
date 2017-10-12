'use-strict';

angular.module('darcheApp')
  .factory('gradient', function() {
    return function(sketch) {
      var width = $(window).width();
      var height = $(window).height();
      var Y_AXIS = 1;
      var X_AXIS = 2;
      var b1, b2, c1, c2;

      sketch.setup = function(){
        sketch.createCanvas(width, height);
        sketch.noLoop();
      }

      sketch.draw = function(){
        setGradient(0, 0, width, height, sketch.color(49, 250, 215), sketch.color(42, 207, 229), Y_AXIS);
      }

      function setGradient(x, y, w, h, c1, c2, axis) {
        sketch.noFill();

        if (axis == Y_AXIS) {  // Top to bottom gradient
          for (var i = y; i <= y+h; i++) {
            var inter = sketch.map(i, y, y+h, 0, 1);
            var c = sketch.lerpColor(c1, c2, inter);
            sketch.stroke(c);
            sketch.line(x, i, x+w, i);
          }
        }
        else if (axis == X_AXIS) {  // Left to right gradient
          for (var i = x; i <= x+w; i++) {
            var inter = sketch.map(i, x, x+w, 0, 1);
            var c = lerpColor(c1, c2, inter);
            sketch.stroke(c);
            sketch.line(i, y, i, y+h);
          }
        }
      }
    };
  });