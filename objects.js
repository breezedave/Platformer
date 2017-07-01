var makeTroy = function() {
    var troyImg = new Image();
    troyImg.addEventListener('load', function() {
        ctxs.troy.drawImage(this,0,0);
        preRendered.Troy = true;
    }, false);
    troyImg.src = "tempChar.png";
}

var makeFloorPanel = function() {
    var tl = [0, 0];
    var tr = [47, 0];
    var bl = [3, 5];
    var br = [50, 5];
    var ctx = ctxs.floorPanel;
    ctx.fillStyle = colors.FLOOR;
    ctx.moveTo(tl[0], tl[1]);
    ctx.lineTo(tr[0], tr[1]);
    ctx.lineTo(br[0], br[1]);
    ctx.lineTo(bl[0], bl[1]);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
}

var makeWoodenPost = function() {
    var tl = [0, 5];
    var tm = [3, 5];
    var tr = [8, 5];
    var bl = [0, 30];
    var bm = [3, 35];
    var br = [8, 35];

    var ctx = ctxs.woodenPost;
    ctx.fillStyle = colors.WOOD;
    ctx.moveTo(tl[0], tl[1]);
    ctx.lineTo(tm[0], tm[1]);
    ctx.lineTo(bm[0], bm[1]);
    ctx.lineTo(bl[0], bl[1]);
    ctx.lineTo(tl[0], tl[1]);

    ctx.moveTo(tm[0], tm[1]);
    ctx.lineTo(tr[0], tr[1]);
    ctx.lineTo(br[0], br[1]);
    ctx.lineTo(bm[0], bm[1]);
    ctx.lineTo(tm[0], tm[1]);

    ctx.closePath();
    ctx.fill();
    ctx.stroke();
}

var makeWoodenHandRail = function() {
    var tl = [1, 2];
    var ur = [148, 2];
    var tm = [3, 5];
    var tr = [151, 5];
    var bl = [0, 10];
    var bm = [3, 10];
    var br = [151, 10];

    var ctx = ctxs.woodenHandRail;
    ctx.fillStyle = colors.WOOD;
    ctx.moveTo(tl[0], tl[1]);
    ctx.lineTo(tm[0], tm[1]);
    ctx.lineTo(bm[0], bm[1]);
    ctx.lineTo(bl[0], bl[1]);
    ctx.lineTo(tl[0], tl[1]);

    ctx.moveTo(tm[0], tm[1]);
    ctx.lineTo(tr[0], tr[1]);
    ctx.lineTo(br[0], br[1]);
    ctx.lineTo(bm[0], bm[1]);
    ctx.lineTo(tm[0], tm[1]);

    ctx.moveTo(tl[0], tl[1]);
    ctx.lineTo(ur[0], ur[1]);
    ctx.lineTo(tr[0], tr[1]);
    ctx.lineTo(tm[0], tm[1]);
    ctx.lineTo(tl[0], tl[1]);

    ctx.closePath();
    ctx.fill();
    ctx.stroke();
}

var createCharacter = function(i) {
    var ctx = ctxs.character;
    ctx.clearRect(0, 0, 25, 37);
    if(i<=30) {
        ctx.drawImage(canvases.troy, 0, 0);
    } else {
        ctx.drawImage(canvases.troy, -48, 0);
    }
}

var makeFloor = function() {
    makeFloorPanel();
    var yLen = 20;
    var xLen = 4;
    var distanceFromCeil = 50;
    var ctx = ctxs.floor;

    for(var y=0; y< yLen; y++) {
        if(y%2==0) {
            for(var x=xLen - 1; x>=0; x--) {
                if(x==xLen-1) {
                    ctx.drawImage(canvases.floorPanel, x*47 + (y*5) -25, (y*5) + distanceFromCeil);
                } else {
                    ctx.drawImage(canvases.floorPanel, x*47 + (y*5), (y*5) + distanceFromCeil);
                }
            }
        }
        if(y%2==1) {
            for(var x=0; x<xLen; x++) {
                if(x==0) {
                    ctx.drawImage(canvases.floorPanel, x*47 + (y*5), (y*5) + distanceFromCeil);
                } else {
                    ctx.drawImage(canvases.floorPanel, x*47 + (y*5) - 25, (y*5) + distanceFromCeil);
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
    var ctx = ctxs.woodenRailing;

    for(var i = 0; i < postLen; i++) {
        ctx.drawImage(canvases.woodenPost, i * 45 + 5, 15);
    }

    for(var i = railingLen-1; i>=0; i--) {
        ctx.drawImage(canvases.woodenHandRail, i * 135, 15);
    }
    preRendered.WoodenRailing = true;
}

var makeSkyBox = function() {
    var ctx = ctxs.skyBox;
    ctx.fillStyle = colors.SKY;
    ctx.fillRect(0, 0, canvases.skyBox.width, 300);
    preRendered.SkyBox = true;
}

var makeGround = function() {
    var ctx = ctxs.ground;
    ctx.fillStyle = colors.GROUND;
    ctx.fillRect(0, 0, canvases.ground.width, 200);
    preRendered.Ground = true;
}

var makeDeepBg1A = function() {
    var ctx = ctxs.deepBg1A;
    if(!preRendered.KavinskyBillboard) return setTimeout(makeDeepBg1A,10);
    ctx.drawImage(canvases.kavinskyBillboard, 1000, 250);
    ctx.drawImage(canvases.kavinskyBillboard, 2000, 250);
    ctx.drawImage(canvases.kavinskyBillboard, 3000, 250);
    ctx.drawImage(canvases.kavinskyBillboard, 4000, 250);
    ctx.drawImage(canvases.kavinskyBillboard, 5000, 250);
    ctx.drawImage(canvases.kavinskyBillboard, 6000, 250);
    ctx.drawImage(canvases.kavinskyBillboard, 7000, 250);

    preRendered.DeepBg1A = true;
}

var makeDeepBg2A = function() {
    var ctx = ctxs.deepBg2A;
    ctx.clearRect(0, 0, 10000, 600);

    preRendered.DeepBg2A = true;
}

var makeDeepBg3A = function() {
    var ctx = ctxs.deepBg3A;
    var buildings = new Image();
    buildings.addEventListener('load', function() {
        for(i =0; i<8; i++) {
            ctx.drawImage(this, i * 891, 120);
        }
        preRendered.DeepBg4A = true;
    }, false);
    buildings.src = "buildings.png";

    preRendered.DeepBg3A = true;
}

var makeDeepBg4A = function() {
    var ctx = ctxs.deepBg4A;
    ctx.clearRect(0, 0, 10000, 600);

    preRendered.DeepBg4A = true;
}

var makeLampPostA = function() {
    var ctx = ctxs.lampPostA;
    ctx.fillStyle = colors.LAMP_LIGHT;
    ctx.beginPath();
    ctx.ellipse(15, 20, 6, 9, 0 * Math.PI/180, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();

    ctx.fillStyle = colors.GLASS;
    ctx.beginPath();
    ctx.moveTo(0, 15);
    ctx.lineTo(5, 25);
    ctx.lineTo(25, 25);
    ctx.lineTo(30, 15);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.fillStyle = colors.LAMP;
    ctx.moveTo(5, 165);
    ctx.lineTo(25, 165);
    ctx.lineTo(25, 160);
    ctx.bezierCurveTo(25, 160, 22, 157, 22, 157);
    ctx.lineTo(8, 157);
    ctx.bezierCurveTo(8, 157, 5, 160, 5, 160);
    ctx.lineTo(5, 160);
    ctx.lineTo(5, 165);
    ctx.moveTo(12, 157);
    ctx.lineTo(19, 157);
    ctx.lineTo(19, 35);
    ctx.lineTo(12, 35);
    ctx.lineTo(12, 157);
    ctx.moveTo(10, 35);
    ctx.lineTo(21, 35);
    ctx.lineTo(25, 25);
    ctx.lineTo(5, 25);
    ctx.lineTo(10, 35);
    ctx.moveTo(0, 15);
    ctx.lineTo(30, 15);
    ctx.bezierCurveTo(28, 0, 2, 0, 0, 15);
    ctx.closePath();

    ctx.fill();
    ctx.stroke();
    preRendered.LampPostA = true;
}

var makechunkA = function() {
    var ctx = ctxs.chunkA;
    ctx.fillStyle = colors.MUD;
    ctx.fillRect(98, 250, 135, 250);
    ctx.strokeRect(98, 250, 135, 250);
    ctx.drawImage(canvases.floor, 0, 100);
    ctx.drawImage(canvases.woodenRailing, 0, 105);
    preRendered.ChunkA = true;
}

var makechunkB = function() {
    var ctx = ctxs.chunkB;
    ctx.fillStyle = colors.MUD;
    ctx.fillRect(98, 250, 135, 250);
    ctx.strokeRect(98, 250, 135, 250);
    ctx.drawImage(canvases.floor, 0, 100);
    ctx.drawImage(canvases.woodenRailing, 0, 105);
    ctx.drawImage(canvases.lampPostA, 100, 0);
    preRendered.ChunkB = true;
}

var makeBgA = function() {
    var ctx = ctxs.bgA;
    ctx.clearRect(0, 0, 10000, 600);
    for(i=chunks; i>=0; i--) {
        if(i%3 == 1) {
            ctx.drawImage(canvases.chunkB, i * 135, 290);
        } else {
            ctx.drawImage(canvases.chunkA, i * 135, 290);
        }
    }
    preRendered.BgA = true;
}

var makeBgB = function() {
    var ctx = ctxs.bgB;
    ctx.clearRect(0, 0, 10000, 600);
    for(i=chunks; i>=0; i--) {
        if(i%3 == 1) {
            ctx.drawImage(canvases.chunkB, i * 135, 290);
        } else {
            ctx.drawImage(canvases.chunkA, i * 135, 290);
        }
    }
    preRendered.BgB = true;
}

var makeFgA = function() {
    var ctx = ctxs.fgA;
    ctx.clearRect(0, 0, 10000, 600);
    for(i=chunks; i>=0; i--) {
        ctx.drawImage(canvases.woodenRailing, i * 135 + 91, 490);
    }
    preRendered.FgA = true;
}

var makeFgB = function() {
    var ctx = ctxs.fgB;
    ctx.clearRect(0, 0, 10000, 600);
    for(i=chunks; i>=0; i--) {
        ctx.drawImage(canvases.woodenRailing, i * 135 + 91, 490);
    }
    preRendered.FgB = true;
}

var makePigeon = function() {
    var pigeonImg = new Image();
    pigeonImg.addEventListener('load', function() {
        var ctxPig = ctxs.pigeon;
        var ctxA = ctxs.bgA;
        var ctxB = ctxs.bgB;
        ctxPig.drawImage(this,0,-12);
        ctxA.drawImage(canvases.pigeon, 3067, 275);
        ctxA.drawImage(canvases.pigeon, 5497, 275);
        ctxA.drawImage(canvases.pigeon, 7117, 275);
        ctxPig.clearRect(0, 0, 100, 100);
        ctxPig.drawImage(this,5,-76);
        ctxB.drawImage(canvases.pigeon, 3067, 275);
        ctxB.drawImage(canvases.pigeon, 5497, 275);
        ctxB.drawImage(canvases.pigeon, 7117, 275);
        preRendered.Pigeon = true;
    }, false);
    pigeonImg.src = "pigeon.png";
}

var makeLightingOn = function() {
    var ctx = ctxs.lightingOn;
    ctx.fillStyle = colors.DARKNESS;
    ctx.fillRect(0, 0, 405, 305);
    ctx.fillRect(0, 500, 405, 100);

    ctx.beginPath();
    ctx.moveTo(100, 305);
    ctx.lineTo(60, 440);
    ctx.bezierCurveTo(110, 505, 180, 500, 170, 440);

    ctx.lineTo(130, 305);
    ctx.lineTo(185, 305);
    ctx.lineTo(185, 500);
    ctx.lineTo(0, 500);
    ctx.lineTo(0, 305);

    ctx.moveTo(185, 305);
    ctx.lineTo(405, 305);
    ctx.lineTo(405, 500);
    ctx.lineTo(185, 500);

    ctx.closePath();
    ctx.fill();
    preRendered.LightingOn = true;
}

var makeLightingOff = function() {
    ctxs.lightingOff.fillStyle = colors.DARKNESS;
    ctxs.lightingOff.fillRect(0, 0, 405, 600);
    preRendered.LightingOff = true;
}

var makeLightingA = function() {
    var ctx = ctxs.lightingA;
    ctx.fillStyle = colors.DARKNESS
    ctx.fillRect(0, 0, 135, 600);
    for(i=chunks; i>=0; i--) {
        ctx.drawImage(canvases.lightingOn, i * 405 + 135, 0);
    }
    preRendered.LightingA = true;
}

var makeLightingB = function() {
    var ctx = ctxs.lightingB;
    for(i=chunks; i>=-1; i--) {
        if(i%5 == 0|| i%8 == 0) {
            ctx.drawImage(canvases.lightingOff, i * 405 + 135, 0);
        } else {
            ctx.drawImage(canvases.lightingOn, i * 405 + 135, 0);
        }
    }
    preRendered.LightingB = true;
}

var makeBillboard = function() {
    var ctx = ctxs.billboard;

    ctx.fillStyle = colors.DARKNESS;
    ctx.moveTo(70, 183);
    ctx.lineTo(50, 163);
    ctx.lineTo(60, 163);
    ctx.lineTo(80, 183);

    ctx.moveTo(213, 183);
    ctx.lineTo(183, 163);
    ctx.lineTo(193, 163);
    ctx.lineTo(223, 183);

    ctx.moveTo(56, 167);
    ctx.lineTo(189, 167);
    ctx.lineTo(186, 165);
    ctx.lineTo(62, 165);
    ctx.lineTo(64, 167);

    ctx.moveTo(199, 167);
    ctx.lineTo(201, 167);
    ctx.lineTo(198, 165);
    ctx.lineTo(196, 165);
    ctx.lineTo(199, 167);

    ctx.moveTo(52, 167);
    ctx.lineTo(54, 167);
    ctx.lineTo(51, 165);
    ctx.lineTo(49, 165);
    ctx.lineTo(52, 167);

    ctx.moveTo(38, 163);
    ctx.lineTo(205, 163);
    ctx.lineTo(178, 143);
    ctx.lineTo(20, 143);
    ctx.lineTo(38, 163);


    ctx.fill();

    ctx.strokeStyle = colors.BLACK;
    ctx.fillRect(46, 3, 200, 120);
    ctx.fillStyle = colors.WHITE;
    ctx.fillRect(49, 6, 194, 114);
    ctx.fillStyle = colors.DARK_STEEL
    ctx.strokeStyle = colors.BLACK
    ctx.fillRect(70, 123, 10, 60);
    ctx.strokeRect(70, 123, 10, 60);
    ctx.fillRect(213, 123, 10, 60);
    ctx.strokeRect(213, 123, 10, 60);

    ctx.strokeStyle = colors.BLACK
    ctx.beginPath();
    ctx.moveTo(43, 126);
    ctx.lineTo(250, 126);
    ctx.lineTo(250, 135);
    ctx.lineTo(43, 135);
    ctx.lineTo(43, 126);
    for(i=0; i<23; i++) {
        if(i%2 ==0) {
            ctx.lineTo(i*9+52, 135);
        } else {
            ctx.lineTo(i*9+52, 126);
        }
    }
    ctx.moveTo(43, 135);
    for(i=0; i<23; i++) {
        if(i%2 ==0) {
            ctx.lineTo(i*9+52, 126);
        } else {
            ctx.lineTo(i*9+52, 135);
        }
    }
    ctx.stroke();
    ctx.closePath();

    preRendered.Billboard = true;
}

var makeKavinskyBillboard = function() {
    var kavinskyBillboard = new Image();
    kavinskyBillboard.addEventListener('load', function() {
        var ctx = ctxs.kavinskyBillboard;
        ctx.drawImage(canvases.billboard, 0, 0);
        ctx.drawImage(this, 49, 6);
        preRendered.KavinskyBillboard = true;
    }, false);
    kavinskyBillboard.src = "billboard1.png";
}


var makeTitleCard = function() {
    var titleCard = new Image();
    titleCard.addEventListener('load', function() {
        var ctx = ctxs.titleCard;
        ctx.drawImage(this, 0, 0);
        preRendered.TitleCard = true;
    }, false);
    titleCard.src = "titleCard.png";
}
