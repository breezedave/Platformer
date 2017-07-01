var world = {
    rendered: false
    , start: false
    , debug: false
    , preTick: 0
    , tick: 0
    , sound: true
    , startRunningPoint: 600
    , stopRunningPoint: 15300
    , titleCardFadeout: 50
    , endCreditFadeIn: 100
    , creditDelay: 100
    , chunkWidth: 135
    , skyLineChunkWidth: 891
    , viewPort: {
        width: 800
        , height: 600
    }
}
var CHUNKS_TO_CANVAS = 10;
world.worldWidth = (world.stopRunningPoint + 1000) * 3;
world.chunks = parseInt(world.worldWidth / world.chunkWidth);
world.skylineChunks = parseInt(world.worldWidth / world.skyLineChunkWidth)
world.maxCanvasWidth = world.chunkWidth * CHUNKS_TO_CANVAS;

var player = {
    x: 350
    , y: 435
    , xD: 0.05
    , renderX: 350
    , renderY: 380
    , frame:0
}

var gameCanvas = document.getElementById('canvas');
var gameCtx= gameCanvas.getContext("2d");
gameCanvas.width = world.viewPort.width;
gameCanvas.height = world.viewPort.height;
