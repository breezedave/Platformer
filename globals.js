var chunks = 75;
var renderCount =0;
var gameCanvas = document.getElementById('canvas');
var gameCtx= gameCanvas.getContext("2d");
gameCanvas.width = 800;
gameCanvas.height = 600;

var world = {
    x: -100
    , rendered: false
    , start: false
    , debug: false
    , preTick: 0
    , tick: 0
    , sound: true
}

var player = {
    x: 350
    , y: 435
    , xD: 0.05
    , renderX: 350
    , renderY: 380
    , frame:0
}
