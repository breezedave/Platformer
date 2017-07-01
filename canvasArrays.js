var canvases = {
    floorPanel: document.createElement('canvas')
    , woodenPost: document.createElement('canvas')
    , floor: document.createElement('canvas')
    , woodenRailing: document.createElement('canvas')
    , woodenHandRail: document.createElement('canvas')
    , chunkA: document.createElement('canvas')
    , chunkB: document.createElement('canvas')
    , skyBox: document.createElement('canvas')
    , bgA: document.createElement('canvas')
    , bgB: document.createElement('canvas')
    , fgA: document.createElement('canvas')
    , fgB: document.createElement('canvas')
    , lampPostA: document.createElement('canvas')
    , lightingOn: document.createElement('canvas')
    , lightingOff: document.createElement('canvas')
    , lightingA: document.createElement('canvas')
    , lightingB: document.createElement('canvas')
    , character: document.createElement('canvas')
    , troy: document.createElement('canvas')
    , pigeon: document.createElement('canvas')
    , billboard: document.createElement('canvas')
    , kavinskyBillboard: document.createElement('canvas')
    , ground: document.createElement('canvas')
    , deepBg1A: document.createElement('canvas')
    , deepBg2A: document.createElement('canvas')
    , deepBg3A: document.createElement('canvas')
    , deepBg4A: document.createElement('canvas')
};

var ctxs = {
    floorPanel: canvases.floorPanel.getContext("2d")
    , woodenPost: canvases.woodenPost.getContext("2d")
    , floor: canvases.floor.getContext("2d")
    , woodenRailing: canvases.woodenRailing.getContext("2d")
    , woodenHandRail: canvases.woodenHandRail.getContext("2d")
    , chunkA: canvases.chunkA.getContext("2d")
    , chunkB: canvases.chunkB.getContext("2d")
    , skyBox: canvases.skyBox.getContext("2d")
    , bgA: canvases.bgA.getContext("2d")
    , bgB: canvases.bgB.getContext("2d")
    , fgA: canvases.fgA.getContext("2d")
    , fgB: canvases.fgB.getContext("2d")
    , lampPostA: canvases.lampPostA.getContext("2d")
    , lightingOn: canvases.lightingOn.getContext("2d")
    , lightingOff: canvases.lightingOff.getContext("2d")
    , lightingA: canvases.lightingA.getContext("2d")
    , lightingB: canvases.lightingB.getContext("2d")
    , character: canvases.character.getContext("2d")
    , troy: canvases.troy.getContext("2d")
    , pigeon: canvases.pigeon.getContext("2d")
    , billboard: canvases.billboard.getContext("2d")
    , kavinskyBillboard: canvases.kavinskyBillboard.getContext("2d")
    , ground: canvases.ground.getContext("2d")
    , deepBg1A: canvases.deepBg1A.getContext("2d")
    , deepBg2A: canvases.deepBg2A.getContext("2d")
    , deepBg3A: canvases.deepBg3A.getContext("2d")
    , deepBg4A: canvases.deepBg4A.getContext("2d")
}

var preRendered = {
    Floor: false
    , WoodenRailing: false
    , SkyBox: false
    , LampPostA: false
    , ChunkA: false
    , ChunkB: false
    , BgA: false
    , BgB: false
    , FgA: false
    , FgB: false
    , LightingOn: false
    , LightingOff: false
    , LightingA: false
    , LightingB: false
    , Troy: false
    , Pigeon: false
    , Billboard: false
    , KavinskyBillboard: false
    , Ground: false
    , DeepBg1A: false
    , DeepBg2A: false
    , DeepBg3A: false
    , DeepBg4A: false
    , Audio: false
}

var allPreRendered = function() {
    for(i in preRendered) {
        if(!preRendered[i]) return false;
    };
    return true;
}

for(i in canvases) {
    canvases[i].width = 600;
    canvases[i].height = 600;
}

var canvasWidths = function() {
    var worldWidth = 10000;
    canvases.skyBox.width = worldWidth;
    canvases.bgA.width = worldWidth;
    canvases.bgB.width = worldWidth;
    canvases.fgA.width = worldWidth;
    canvases.fgB.width = worldWidth;
    canvases.ground.width = worldWidth;
    canvases.lightingA.width = worldWidth;
    canvases.lightingB.width = worldWidth;
    canvases.deepBg1A.width = worldWidth;
    canvases.deepBg2A.width = worldWidth;
    canvases.deepBg3A.width = worldWidth;
    canvases.deepBg4A.width = worldWidth;
    canvases.troy.width = 72;
    canvases.troy.height = 37;
    canvases.pigeon.width = 34;
    canvases.pigeon.height = 20;
    canvases.character.width = 25;
    canvases.character.height = 37;
}
canvasWidths();
