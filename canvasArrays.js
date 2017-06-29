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
    , lampPostA: document.createElement('canvas')
    , lightingOn: document.createElement('canvas')
    , lightingOff: document.createElement('canvas')
    , lightingA: document.createElement('canvas')
    , lightingB: document.createElement('canvas')
    , character: document.createElement('canvas')
    , troy: document.createElement('canvas')
    , pigeon: document.createElement('canvas')
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
    , lampPostA: canvases.lampPostA.getContext("2d")
    , lightingOn: canvases.lightingOn.getContext("2d")
    , lightingOff: canvases.lightingOff.getContext("2d")
    , lightingA: canvases.lightingA.getContext("2d")
    , lightingB: canvases.lightingB.getContext("2d")
    , character: canvases.character.getContext("2d")
    , troy: canvases.troy.getContext("2d")
    , pigeon: canvases.pigeon.getContext("2d")
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
    , LightingOn: false
    , LightingOff: false
    , LightingA: false
    , LightingB: false
    , Troy: false
    , Pigeon: false
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
    canvases.bgA.width = 20000;
    canvases.bgB.width = 20000;
    canvases.lightingA.width = 20000;
    canvases.lightingB.width = 20000;
    canvases.troy.width = 72;
    canvases.troy.height = 37;
    canvases.pigeon.width = 34;
    canvases.pigeon.height = 20;
    canvases.character.width = 25;
    canvases.character.height = 37;
}
canvasWidths();
