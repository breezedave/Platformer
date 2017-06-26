var colors = {
    FLOOR: "RGBA(90, 90, 90, 1)"
    , WOOD: "RGBA(103, 70, 42, 1)"
    , BLUE_SKY: "RGBA(126, 192, 238, 1)"
    , MUD: "RGBA(90, 80, 50, 1)"
}

var gameCanvas = document.getElementById('canvas');
var gameCtx= gameCanvas.getContext("2d");
gameCanvas.width = 800;
gameCanvas.height = 600;

var canvases = {
    floorPanel: document.createElement('canvas')
    , woodenPost: document.createElement('canvas')
    , floor: document.createElement('canvas')
    , woodenRailing: document.createElement('canvas')
    , woodenHandRail: document.createElement('canvas')
    , chunkA: document.createElement('canvas')
    , skyBox: document.createElement('canvas')
    , bg: document.createElement('canvas')
};

var ctxs = {
    floorPanel: canvases.floorPanel.getContext("2d")
    , woodenPost: canvases.woodenPost.getContext("2d")
    , floor: canvases.floor.getContext("2d")
    , woodenRailing: canvases.woodenRailing.getContext("2d")
    , woodenHandRail: canvases.woodenHandRail.getContext("2d")
    , chunkA: canvases.chunkA.getContext("2d")
    , skyBox: canvases.skyBox.getContext("2d")
    , bg: canvases.bg.getContext("2d")
}


for(i in canvases) {
    canvases[i].width = 600;
    canvases[i].height = 600;
}
canvases.bg.width = 20000;
canvases.bg.height = 600;

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

var makeSkyBox = function() {
    ctxs.skyBox.fillStyle = colors.BLUE_SKY;
    ctxs.skyBox.fillRect(0, 0, 135, 400);
}

var chunkA = function() {
    var tl = [0, 50];
    var tr = [98, 150];
    var bl = [0, 300];
    var br = [98, 300];

    ctxs.chunkA.fillStyle = colors.MUD;
    ctxs.chunkA.moveTo(tl[0], tl[1]);
    ctxs.chunkA.lineTo(tr[0], tr[1]);
    ctxs.chunkA.lineTo(br[0], br[1]);
    ctxs.chunkA.lineTo(bl[0], bl[1]);
    ctxs.chunkA.lineTo(tl[0], tl[1]);
    ctxs.chunkA.closePath();
    ctxs.chunkA.fill();
    ctxs.chunkA.stroke();

    ctxs.chunkA.fillStyle = colors.MUD;
    ctxs.chunkA.fillRect(98, 150, 135, 150);
    ctxs.chunkA.strokeRect(98, 150, 135, 150);
    ctxs.chunkA.drawImage(canvases.floor, 0, 0);
    ctxs.chunkA.drawImage(canvases.woodenRailing, 91, 100);
    ctxs.chunkA.drawImage(canvases.woodenRailing, 0, 5);
}

var createBg = function() {
    ctxs.bg.clearRect(0, 0, 1200, 600);
    makeFloor();
    makeWoodenRailing();
    makeSkyBox();
    chunkA();

    for(i=150; i>=0; i--) {
        ctxs.bg.drawImage(canvases.skyBox, i * 135, 0);
        ctxs.bg.drawImage(canvases.chunkA, i * 135, 300);
    }
}
createBg();

var render = function() {
    gameCtx.clearRect(0, 0, gameCanvas.width, gameCanvas.height);
    gameCtx.drawImage(canvases.bg, world.x, 0);
    gameCtx.strokeRect(0, 0, gameCanvas.width, gameCanvas.height);

    window.requestAnimationFrame(render);
}

world = {
    x: -50
}

var stepWorld = function() {
    world.x--;
    setTimeout(stepWorld,5);
    if(world.x <= -20000) world.x = -50;
}
stepWorld();


window.requestAnimationFrame(render);
