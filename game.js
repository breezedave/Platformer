var chunks = 150;
var gameCanvas = document.getElementById('canvas');
var gameCtx= gameCanvas.getContext("2d");
gameCanvas.width = 800;
gameCanvas.height = 600;

var grd=gameCtx.createLinearGradient(0,0,0,400);
grd.addColorStop(0, "RGBA(131, 51, 128, 1)");
grd.addColorStop(1, "RGBA(255, 203, 253, 1)");


var colors = {
    FLOOR: "RGBA(90, 90, 90, 1)"
    , WOOD: "RGBA(103, 70, 42, 1)"
    , SKY: grd
    , MUD: "RGBA(90, 80, 50, 1)"
    , LAMP_LIGHT: "RGBA(250, 250, 5, 1)"
    , LAMP: "RGBA(128, 128, 128, 1)"
    , GLASS: "RGBA(128, 128, 128, 0.25)"
    , DARKNESS: "RGBA(10, 10, 10, 0.35)"
}

var canvases = {
    floorPanel: document.createElement('canvas')
    , woodenPost: document.createElement('canvas')
    , floor: document.createElement('canvas')
    , woodenRailing: document.createElement('canvas')
    , woodenHandRail: document.createElement('canvas')
    , chunkA: document.createElement('canvas')
    , chunkB: document.createElement('canvas')
    , skyBox: document.createElement('canvas')
    , bg: document.createElement('canvas')
    , lampPost: document.createElement('canvas')
    , lightingA: document.createElement('canvas')
    , lighting: document.createElement('canvas')
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
    , bg: canvases.bg.getContext("2d")
    , lampPost: canvases.lampPost.getContext("2d")
    , lightingA: canvases.lightingA.getContext("2d")
    , lighting: canvases.lighting.getContext("2d")
}


for(i in canvases) {
    canvases[i].width = 600;
    canvases[i].height = 600;
}
canvases.bg.width = canvases.lighting.width = 20000;

var makeFloorPanel = function() {
    var tl = [0, 0];
    var tr = [47, 0];
    var bl = [3, 5];
    var br = [50, 5];
    ctxs.floorPanel.fillStyle = colors.FLOOR;
    ctxs.floorPanel.moveTo(tl[0], tl[1]);
    ctxs.floorPanel.lineTo(tr[0], tr[1]);
    ctxs.floorPanel.lineTo(br[0], br[1]);
    ctxs.floorPanel.lineTo(bl[0], bl[1]);
    ctxs.floorPanel.closePath();
    ctxs.floorPanel.fill();
    ctxs.floorPanel.stroke();
}

var makeFloor = function() {
    makeFloorPanel();
    var yLen = 20;
    var xLen = 4;
    var distanceFromCeil = 50;

    for(var y=0; y< yLen; y++) {
        if(y%2==0) {
            for(var x=xLen - 1; x>=0; x--) {
                if(x==xLen-1) {
                    ctxs.floor.drawImage(canvases.floorPanel, x*47 + (y*5) -25, (y*5) + distanceFromCeil);
                } else {
                    ctxs.floor.drawImage(canvases.floorPanel, x*47 + (y*5), (y*5) + distanceFromCeil);
                }
            }
        }
        if(y%2==1) {
            for(var x=0; x<xLen; x++) {
                if(x==0) {
                    ctxs.floor.drawImage(canvases.floorPanel, x*47 + (y*5), (y*5) + distanceFromCeil);
                } else {
                    ctxs.floor.drawImage(canvases.floorPanel, x*47 + (y*5) - 25, (y*5) + distanceFromCeil);
                }
            }
        }
    }
}

var makeWoodenPost = function() {
    var tl = [0, 5];
    var tm = [3, 5];
    var tr = [8, 5];
    var bl = [0, 45];
    var bm = [3, 50];
    var br = [8, 50];

    ctxs.woodenPost.fillStyle = colors.WOOD;
    ctxs.woodenPost.moveTo(tl[0], tl[1]);
    ctxs.woodenPost.lineTo(tm[0], tm[1]);
    ctxs.woodenPost.lineTo(bm[0], bm[1]);
    ctxs.woodenPost.lineTo(bl[0], bl[1]);
    ctxs.woodenPost.lineTo(tl[0], tl[1]);

    ctxs.woodenPost.moveTo(tm[0], tm[1]);
    ctxs.woodenPost.lineTo(tr[0], tr[1]);
    ctxs.woodenPost.lineTo(br[0], br[1]);
    ctxs.woodenPost.lineTo(bm[0], bm[1]);
    ctxs.woodenPost.lineTo(tm[0], tm[1]);

    ctxs.woodenPost.closePath();
    ctxs.woodenPost.fill();
    ctxs.woodenPost.stroke();
}

var makeWoodenHandRail = function() {
    var tl = [1, 2];
    var ur = [148, 2];
    var tm = [3, 5];
    var tr = [151, 5];
    var bl = [0, 10];
    var bm = [3, 10];
    var br = [151, 10];

    ctxs.woodenHandRail.fillStyle = colors.WOOD;
    ctxs.woodenHandRail.moveTo(tl[0], tl[1]);
    ctxs.woodenHandRail.lineTo(tm[0], tm[1]);
    ctxs.woodenHandRail.lineTo(bm[0], bm[1]);
    ctxs.woodenHandRail.lineTo(bl[0], bl[1]);
    ctxs.woodenHandRail.lineTo(tl[0], tl[1]);

    ctxs.woodenHandRail.moveTo(tm[0], tm[1]);
    ctxs.woodenHandRail.lineTo(tr[0], tr[1]);
    ctxs.woodenHandRail.lineTo(br[0], br[1]);
    ctxs.woodenHandRail.lineTo(bm[0], bm[1]);
    ctxs.woodenHandRail.lineTo(tm[0], tm[1]);

    ctxs.woodenHandRail.moveTo(tl[0], tl[1]);
    ctxs.woodenHandRail.lineTo(ur[0], ur[1]);
    ctxs.woodenHandRail.lineTo(tr[0], tr[1]);
    ctxs.woodenHandRail.lineTo(tm[0], tm[1]);
    ctxs.woodenHandRail.lineTo(tl[0], tl[1]);

    ctxs.woodenHandRail.closePath();
    ctxs.woodenHandRail.fill();
    ctxs.woodenHandRail.stroke();
}

var makeWoodenRailing = function() {
    var postLen = 4;
    var railingLen = 1;
    makeWoodenPost();
    makeWoodenHandRail();

    for(var i = 0; i < postLen; i++) {
        ctxs.woodenRailing.drawImage(canvases.woodenPost, i * 45 + 5, 0);
    }

    for(var i = railingLen-1; i>=0; i--) {
        ctxs.woodenRailing.drawImage(canvases.woodenHandRail, i * 135, 0);
    }
}

var makeLampPost = function() {
    ctxs.lampPost.fillStyle = colors.LAMP_LIGHT;
    ctxs.lampPost.beginPath();
    ctxs.lampPost.ellipse(15, 20, 6, 9, 0 * Math.PI/180, 0, 2 * Math.PI);
    ctxs.lampPost.fill();
    ctxs.lampPost.closePath();

    ctxs.lampPost.fillStyle = colors.GLASS;
    ctxs.lampPost.beginPath();
    ctxs.lampPost.moveTo(0, 15);
    ctxs.lampPost.lineTo(5, 25);
    ctxs.lampPost.lineTo(25, 25);
    ctxs.lampPost.lineTo(30, 15);
    ctxs.lampPost.closePath();
    ctxs.lampPost.fill();
    ctxs.lampPost.stroke();

    ctxs.lampPost.beginPath();
    ctxs.lampPost.fillStyle = colors.LAMP;
    ctxs.lampPost.moveTo(5, 165);
    ctxs.lampPost.lineTo(25, 165);
    ctxs.lampPost.lineTo(25, 160);
    ctxs.lampPost.bezierCurveTo(25, 160, 22, 157, 22, 157);
    ctxs.lampPost.lineTo(8, 157);
    ctxs.lampPost.bezierCurveTo(8, 157, 5, 160, 5, 160);
    ctxs.lampPost.lineTo(5, 160);
    ctxs.lampPost.lineTo(5, 165);
    ctxs.lampPost.moveTo(12, 157);
    ctxs.lampPost.lineTo(19, 157);
    ctxs.lampPost.lineTo(19, 35);
    ctxs.lampPost.lineTo(12, 35);
    ctxs.lampPost.lineTo(12, 157);
    ctxs.lampPost.moveTo(10, 35);
    ctxs.lampPost.lineTo(21, 35);
    ctxs.lampPost.lineTo(25, 25);
    ctxs.lampPost.lineTo(5, 25);
    ctxs.lampPost.lineTo(10, 35);
    ctxs.lampPost.moveTo(0, 15);
    ctxs.lampPost.lineTo(30, 15);
    ctxs.lampPost.bezierCurveTo(28, 0, 2, 0, 0, 15);
    ctxs.lampPost.closePath();

    ctxs.lampPost.fill();
    ctxs.lampPost.stroke();
}

var makeSkyBox = function() {
    ctxs.skyBox.fillStyle = colors.SKY;
    ctxs.skyBox.fillRect(0, 0, 135, 400);
}

var makeLightingA = function() {
    ctxs.lightingA.fillStyle = colors.DARKNESS;
    ctxs.lightingA.beginPath();
    ctxs.lightingA.fillRect(0, 0, 405, 265);
    ctxs.lightingA.fillRect(0, 500, 405, 500);

    ctxs.lightingA.moveTo(100, 265);
    ctxs.lightingA.lineTo(60, 400);
    ctxs.lightingA.bezierCurveTo(110, 465, 180, 460, 170, 400);

    ctxs.lightingA.lineTo(130, 265);
    ctxs.lightingA.lineTo(185, 265);
    ctxs.lightingA.lineTo(185, 500);
    ctxs.lightingA.lineTo(0, 500);
    ctxs.lightingA.lineTo(0, 265);

    ctxs.lightingA.moveTo(185, 265);
    ctxs.lightingA.lineTo(405, 265);
    ctxs.lightingA.lineTo(405, 500);
    ctxs.lightingA.lineTo(185, 500);

    ctxs.lightingA.closePath();
    ctxs.lightingA.fill();
}

var chunkA = function() {
    var tl = [0, 150];
    var tr = [98, 250];
    var bl = [0, 400];
    var br = [98, 400];

    ctxs.chunkA.fillStyle = colors.MUD;
    ctxs.chunkA.moveTo(tl[0], tl[1]);
    ctxs.chunkA.lineTo(tr[0], tr[1]);
    ctxs.chunkA.lineTo(br[0], br[1]);
    ctxs.chunkA.lineTo(bl[0], bl[1]);
    ctxs.chunkA.lineTo(tl[0], tl[1]);
    ctxs.chunkA.closePath();
    ctxs.chunkA.fill();
    ctxs.chunkA.stroke();
    ctxs.chunkA.fillRect(98, 250, 135, 250);
    ctxs.chunkA.strokeRect(98, 250, 135, 250);
    ctxs.chunkA.drawImage(canvases.floor, 0, 100);
    ctxs.chunkA.drawImage(canvases.woodenRailing, 0, 105);
    ctxs.chunkA.drawImage(canvases.woodenRailing, 91, 200);
}

var chunkB = function() {
    var tl = [0, 150];
    var tr = [98, 250];
    var bl = [0, 400];
    var br = [98, 400];

    ctxs.chunkB.fillStyle = colors.MUD;
    ctxs.chunkB.moveTo(tl[0], tl[1]);
    ctxs.chunkB.lineTo(tr[0], tr[1]);
    ctxs.chunkB.lineTo(br[0], br[1]);
    ctxs.chunkB.lineTo(bl[0], bl[1]);
    ctxs.chunkB.lineTo(tl[0], tl[1]);
    ctxs.chunkB.closePath();
    ctxs.chunkB.fill();
    ctxs.chunkB.stroke();
    ctxs.chunkB.fillRect(98, 250, 135, 250);
    ctxs.chunkB.strokeRect(98, 250, 135, 250);
    ctxs.chunkB.drawImage(canvases.floor, 0, 100);
    ctxs.chunkB.drawImage(canvases.woodenRailing, 0, 105);
    ctxs.chunkB.drawImage(canvases.lampPost, 100, 0);
    ctxs.chunkB.drawImage(canvases.woodenRailing, 91, 200);
}

var createBg = function() {
    ctxs.bg.clearRect(0, 0, 1200, 600);
    makeFloor();
    makeWoodenRailing();
    makeSkyBox();
    makeLampPost();
    chunkA();
    chunkB();

    for(i=chunks; i>=0; i--) {
        ctxs.bg.drawImage(canvases.skyBox, i * 135, 0);
        if(i%3 == 1) {
            ctxs.bg.drawImage(canvases.chunkB, i * 135, 250);
        } else {
            ctxs.bg.drawImage(canvases.chunkA, i * 135, 250);
        }
    }



}
createBg();

var createLighting = function() {
    ctxs.lighting.clearRect(0, 0, 1200, 600);
    makeLightingA();

    ctxs.lighting.fillStyle = colors.DARKNESS
    ctxs.lighting.fillRect(0, 0, 135, 600);
    for(i=chunks; i>=0; i--) {
        ctxs.lighting.drawImage(canvases.lightingA, i * 405 + 135, 0);
    }
}
createLighting();

var render = function() {
    gameCtx.clearRect(0, 0, gameCanvas.width, gameCanvas.height);
    gameCtx.drawImage(canvases.bg, world.x, 0);
    gameCtx.drawImage(canvases.lighting, world.x, 0);
    gameCtx.strokeRect(0, 0, gameCanvas.width, gameCanvas.height);

    window.requestAnimationFrame(render);
}

world = {
    x: -18500
}

var stepWorld = function() {
    world.x-=1;
    setTimeout(stepWorld,5);
    if(world.x <= -18730) world.x = -100;
}
stepWorld();


window.requestAnimationFrame(render);
