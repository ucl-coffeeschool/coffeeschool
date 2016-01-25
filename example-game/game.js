var crafty = require('craftyjs');

crafty.init(300,300);

crafty.background('black');
crafty.e('2d, Canvas, Color, Fourway')
    .attr({x: 10, y: 10, w: 30, h: 30})
    .color('red')
    .fourway(3);
