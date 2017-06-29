var troyImg = new Image();
troyImg.addEventListener('load', function() {
    ctxs.troy.drawImage(this,0,0);
    preRendered.Troy = true;
}, false);
troyImg.src = "tempChar.png";

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

var createCharacter = function(i) {
    ctxs.character.clearRect(0, 0, 25, 37);
    if(i<=30) {
        ctxs.character.drawImage(canvases.troy, 0, 0);
    } else {
        ctxs.character.drawImage(canvases.troy, -48, 0);
    }
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
    preRendered.Floor = true;
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
    preRendered.WoodenRailing = true;
}

var makeSkyBox = function() {
    ctxs.skyBox.fillStyle = colors.SKY;
    ctxs.skyBox.fillRect(0, 0, 135, 400);
    preRendered.SkyBox = true;
}

var makeLampPostA = function() {
    ctxs.lampPostA.fillStyle = colors.LAMP_LIGHT;
    ctxs.lampPostA.beginPath();
    ctxs.lampPostA.ellipse(15, 20, 6, 9, 0 * Math.PI/180, 0, 2 * Math.PI);
    ctxs.lampPostA.fill();
    ctxs.lampPostA.closePath();

    ctxs.lampPostA.fillStyle = colors.GLASS;
    ctxs.lampPostA.beginPath();
    ctxs.lampPostA.moveTo(0, 15);
    ctxs.lampPostA.lineTo(5, 25);
    ctxs.lampPostA.lineTo(25, 25);
    ctxs.lampPostA.lineTo(30, 15);
    ctxs.lampPostA.closePath();
    ctxs.lampPostA.fill();
    ctxs.lampPostA.stroke();

    ctxs.lampPostA.beginPath();
    ctxs.lampPostA.fillStyle = colors.LAMP;
    ctxs.lampPostA.moveTo(5, 165);
    ctxs.lampPostA.lineTo(25, 165);
    ctxs.lampPostA.lineTo(25, 160);
    ctxs.lampPostA.bezierCurveTo(25, 160, 22, 157, 22, 157);
    ctxs.lampPostA.lineTo(8, 157);
    ctxs.lampPostA.bezierCurveTo(8, 157, 5, 160, 5, 160);
    ctxs.lampPostA.lineTo(5, 160);
    ctxs.lampPostA.lineTo(5, 165);
    ctxs.lampPostA.moveTo(12, 157);
    ctxs.lampPostA.lineTo(19, 157);
    ctxs.lampPostA.lineTo(19, 35);
    ctxs.lampPostA.lineTo(12, 35);
    ctxs.lampPostA.lineTo(12, 157);
    ctxs.lampPostA.moveTo(10, 35);
    ctxs.lampPostA.lineTo(21, 35);
    ctxs.lampPostA.lineTo(25, 25);
    ctxs.lampPostA.lineTo(5, 25);
    ctxs.lampPostA.lineTo(10, 35);
    ctxs.lampPostA.moveTo(0, 15);
    ctxs.lampPostA.lineTo(30, 15);
    ctxs.lampPostA.bezierCurveTo(28, 0, 2, 0, 0, 15);
    ctxs.lampPostA.closePath();

    ctxs.lampPostA.fill();
    ctxs.lampPostA.stroke();
    preRendered.LampPostA = true;
}

var makechunkA = function() {
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
    preRendered.ChunkA = true;
}

var makechunkB = function() {
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
    ctxs.chunkB.drawImage(canvases.lampPostA, 100, 0);
    ctxs.chunkB.drawImage(canvases.woodenRailing, 91, 200);
    preRendered.ChunkB = true;
}

var makeBgA = function() {
    ctxs.bgA.clearRect(0, 0, 1200, 600);
    for(i=chunks; i>=0; i--) {
        ctxs.bgA.drawImage(canvases.skyBox, i * 135, 0);
        if(i%3 == 1) {
            ctxs.bgA.drawImage(canvases.chunkB, i * 135, 250);
        } else {
            ctxs.bgA.drawImage(canvases.chunkA, i * 135, 250);
        }
    }
    preRendered.BgA = true;
}

var pigeonImg = new Image();
pigeonImg.addEventListener('load', function() {
    ctxs.pigeon.drawImage(this,0,-12);
    ctxs.bgA.drawImage(canvases.pigeon, 3067, 235);
    ctxs.bgA.drawImage(canvases.pigeon, 5497, 235);
    ctxs.bgA.drawImage(canvases.pigeon, 7117, 235);
    ctxs.bgA.drawImage(canvases.pigeon, 12787, 235);
    ctxs.bgA.drawImage(canvases.pigeon, 14002, 235);
    ctxs.bgA.drawImage(canvases.pigeon, 15622, 235);
    ctxs.pigeon.clearRect(0, 0, 100, 100);
    ctxs.pigeon.drawImage(this,5,-76);
    ctxs.bgB.drawImage(canvases.pigeon, 3067, 235);
    ctxs.bgB.drawImage(canvases.pigeon, 5497, 235);
    ctxs.bgB.drawImage(canvases.pigeon, 7117, 235);
    ctxs.bgB.drawImage(canvases.pigeon, 12787, 235);
    ctxs.bgB.drawImage(canvases.pigeon, 14002, 235);
    ctxs.bgB.drawImage(canvases.pigeon, 15622, 235);
    preRendered.Pigeon = true;
}, false);
pigeonImg.src = "pigeon.png";

var makeBgB = function() {
    ctxs.bgB.clearRect(0, 0, 1200, 600);
    for(i=chunks; i>=0; i--) {
        ctxs.bgB.drawImage(canvases.skyBox, i * 135, 0);
        if(i%3 == 1) {
            ctxs.bgB.drawImage(canvases.chunkB, i * 135, 250);
        } else {
            ctxs.bgB.drawImage(canvases.chunkA, i * 135, 250);
        }
    }
    preRendered.BgB = true;
}

var makeLightingOn = function() {
    ctxs.lightingOn.fillStyle = colors.DARKNESS;
    ctxs.lightingOn.beginPath();
    ctxs.lightingOn.fillRect(0, 0, 405, 265);
    ctxs.lightingOn.fillRect(0, 500, 405, 500);

    ctxs.lightingOn.moveTo(100, 265);
    ctxs.lightingOn.lineTo(60, 400);
    ctxs.lightingOn.bezierCurveTo(110, 465, 180, 460, 170, 400);

    ctxs.lightingOn.lineTo(130, 265);
    ctxs.lightingOn.lineTo(185, 265);
    ctxs.lightingOn.lineTo(185, 500);
    ctxs.lightingOn.lineTo(0, 500);
    ctxs.lightingOn.lineTo(0, 265);

    ctxs.lightingOn.moveTo(185, 265);
    ctxs.lightingOn.lineTo(405, 265);
    ctxs.lightingOn.lineTo(405, 500);
    ctxs.lightingOn.lineTo(185, 500);

    ctxs.lightingOn.closePath();
    ctxs.lightingOn.fill();
    preRendered.LightingOn = true;
}

var makeLightingOff = function() {
    ctxs.lightingOff.fillStyle = colors.DARKNESS;
    ctxs.lightingOff.fillRect(0, 0, 405, 1000);
    preRendered.LightingOff = true;
}

var makeLightingA = function() {
    ctxs.lightingA.fillStyle = colors.DARKNESS
    ctxs.lightingA.fillRect(0, 0, 135, 600);
    for(i=chunks; i>=0; i--) {
        ctxs.lightingA.drawImage(canvases.lightingOn, i * 405 + 135, 0);
    }
    preRendered.LightingA = true;
}

var makeLightingB = function() {
    ctxs.lightingB.fillStyle = colors.DARKNESS
    ctxs.lightingB.fillRect(0, 0, 135, 600);
    for(i=chunks; i>=0; i--) {
        if(i%5 == 0|| i%8 == 0) {
            ctxs.lightingB.drawImage(canvases.lightingOff, i * 405 + 135, 0);
        } else {
            ctxs.lightingB.drawImage(canvases.lightingOn, i * 405 + 135, 0);
        }
    }
    preRendered.LightingB = true;
}

makeFloor();
makeWoodenRailing();
makeSkyBox();
makeLampPostA();
makechunkA();
makechunkB();
makeBgA();
makeBgB();
makeLightingOn();
makeLightingOff();
makeLightingA();
makeLightingB();
