var canvases = {
    floorPanel: document.createElement('canvas')
    , woodenPost: document.createElement('canvas')
    , floor: document.createElement('canvas')
    , woodenRailing: document.createElement('canvas')
    , woodenHandRail: document.createElement('canvas')
    , chunkA: document.createElement('canvas')
    , chunkB: document.createElement('canvas')
    , lightingOn: document.createElement('canvas')
    , lightingOff: document.createElement('canvas')
    , lampPostA: document.createElement('canvas')
    , character: document.createElement('canvas')
    , troy: document.createElement('canvas')
    , pigeon: document.createElement('canvas')
    , billboard: document.createElement('canvas')
    , kavinskyBillboard: document.createElement('canvas')
    , titleCard: document.createElement('canvas')

    , skyBox: []
    , bgA: []
    , bgB: []
    , fgA: []
    , fgB: []
    , ground: []
    , lightingA: []
    , lightingB: []
    , deepBg1A: []
    , deepBg2A: []
    , deepBg3A: []
    , deepBg4A: []
};

var ctxs = {
    floorPanel: canvases.floorPanel.getContext("2d")
    , woodenPost: canvases.woodenPost.getContext("2d")
    , floor: canvases.floor.getContext("2d")
    , woodenRailing: canvases.woodenRailing.getContext("2d")
    , woodenHandRail: canvases.woodenHandRail.getContext("2d")
    , chunkA: canvases.chunkA.getContext("2d")
    , chunkB: canvases.chunkB.getContext("2d")
    , lightingOn: canvases.lightingOn.getContext("2d")
    , lightingOff: canvases.lightingOff.getContext("2d")
    , character: canvases.character.getContext("2d")
    , lampPostA: canvases.lampPostA.getContext("2d")
    , troy: canvases.troy.getContext("2d")
    , pigeon: canvases.pigeon.getContext("2d")
    , billboard: canvases.billboard.getContext("2d")
    , kavinskyBillboard: canvases.kavinskyBillboard.getContext("2d")
    , titleCard: canvases.titleCard.getContext("2d")

    , skyBox: []
    , bgA: []
    , bgB: []
    , fgA: []
    , fgB: []
    , ground: []
    , lightingA: []
    , lightingB: []
    , deepBg1A: []
    , deepBg2A: []
    , deepBg3A: []
    , deepBg4A: []
}

var preRendered = {
    Floor: false
    , WoodenRailing: false
    , LampPostA: false
    , ChunkA: false
    , ChunkB: false
    , LightingOn: false
    , LightingOff: false
    , Troy: false
    , Pigeon: false
    , Billboard: false
    , KavinskyBillboard: false
    , TitleCard: false
    , Audio: false

    , SkyBox: false
    , BgA: false
    , BgB: false
    , FgA: false
    , FgB: false
    , Ground: false
    , LightingA: false
    , LightingB: false
    , DeepBg1A: false
    , DeepBg2A: false
    , DeepBg3A: false
    , DeepBg4A: false
}

var allPreRendered = function() {
    for(i in preRendered) {
        if(!preRendered[i]) return false;
    };
    return true;
}

for(i in canvases) {
    if(canvases[i].width) {
        canvases[i].width = 600;
        canvases[i].height = 600;
    }
}

var canvasWidths = function() {
    var canvs = [
        "skyBox"
        , "bgA"
        , "bgB"
        , "fgA"
        , "fgB"
        , "ground"
        , "lightingA"
        , "lightingB"
        , "deepBg1A"
        , "deepBg2A"
        , "deepBg3A"
        , "deepBg4A"
    ]

    var canvasesNeeded = parseInt(world.worldWidth / world.maxCanvasWidth)+1;
    for(canv in canvs) {
        for(var i=0; i < canvasesNeeded; i++) {
            var canvas = document.createElement('canvas');
            canvas.width = world.maxCanvasWidth;
            canvas.height = world.viewPort.height;
            var ctx = canvas.getContext("2d");
            canvases[canvs[canv]].push(canvas);
            ctxs[canvs[canv]].push(ctx);
        }
    };
    canvases.titleCard.width = world.viewPort.width;
    canvases.troy.width = 72;
    canvases.troy.height = 37;
    canvases.pigeon.width = 34;
    canvases.pigeon.height = 20;
    canvases.character.width = 25;
    canvases.character.height = 37;
}
canvasWidths();
