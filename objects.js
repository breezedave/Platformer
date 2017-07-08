var makeTroy = function() {
    var troyImg = new Image();
    troyImg.addEventListener('load', function() {
        ctxs.troy.drawImage(this,0,0);
        canvasUsed.troy = true;
        preRendered.Troy = true;
    }, false);
    troyImg.src = "tempChar.png";
}

var addSpeechBubble = function(sTick, eTick, text, width, height) {
    var line = 4;
    var bR1 = 16;
    var bR2 = 36;

    var canv = document.createElement('canvas');
    canv.width = width;
    canv.height = height + (line * 5);
    var ctx = canv.getContext("2d");
    ctx.fillStyle = colors.BLACK;
    ctx.lineWidth = 2;
    ctx.font = "10px Roboto Mono";
    ctx.textAlign = "center";
    ctx.beginPath();

    //top
    ctx.moveTo(line * 2, 0);
    ctx.lineTo(width - line * 2, 0);
    ctx.lineTo(width - line * 2, line);
    ctx.lineTo(line * 2, line);
    ctx.lineTo(line * 2, 0);

    //top-right
    ctx.moveTo(width - line * 2, line);
    ctx.lineTo(width - line, line);
    ctx.lineTo(width - line, line * 2);
    ctx.lineTo(width - line * 2, line * 2);
    ctx.lineTo(width - line * 2, line);

    //right
    ctx.moveTo(width - line, line * 2);
    ctx.lineTo(width, line * 2);
    ctx.lineTo(width, height - line * 2);
    ctx.lineTo(width - line, height - line * 2);
    ctx.lineTo(width - line, line * 2);

    //bottom-right
    ctx.moveTo(width - line * 2, height - line * 2);
    ctx.lineTo(width - line, height - line * 2);
    ctx.lineTo(width - line, height - line);
    ctx.lineTo(width - line * 2, height - line);
    ctx.lineTo(width - line * 2, height - line * 2);

    //bottom-2
    ctx.moveTo(bR2, height - line);
    ctx.lineTo(width - line * 2, height - line);
    ctx.lineTo(width - line * 2, height);
    ctx.lineTo(bR2, height);
    ctx.lineTo(bR2, height - line);

    //bottom-2
    ctx.moveTo(line * 2, height - line);
    ctx.lineTo(bR1, height - line);
    ctx.lineTo(bR1, height);
    ctx.lineTo(line * 2, height);
    ctx.lineTo(line * 2, height - line);

    //bottom-left
    ctx.moveTo(line, height - line * 2);
    ctx.lineTo(line * 2, height - line * 2);
    ctx.lineTo(line * 2, height - line);
    ctx.lineTo(line, height - line);
    ctx.lineTo(line, height - line * 2);

    //left
    ctx.moveTo(0, line * 2);
    ctx.lineTo(line, line * 2);
    ctx.lineTo(line, height - line * 2);
    ctx.lineTo(0, height - line * 2);
    ctx.lineTo(0, line * 2);

    //top-left
    ctx.moveTo(line, line);
    ctx.lineTo(line * 2, line);
    ctx.lineTo(line * 2, line * 2);
    ctx.lineTo(line, line * 2);
    ctx.lineTo(line, line);

    //spike
    ctx.moveTo(line * 3, height);
    ctx.lineTo(line * 4, height);
    ctx.lineTo(line * 4, height + line * 2);
    ctx.lineTo(line * 3, height + line * 2);
    ctx.lineTo(line * 3, height);

    ctx.moveTo(line * 2, height + line * 2);
    ctx.lineTo(line * 3, height + line * 2);
    ctx.lineTo(line * 3, height + line * 3);
    ctx.lineTo(line * 2, height + line * 3);
    ctx.lineTo(line * 2, height);

    ctx.moveTo(line, height + line * 3);
    ctx.lineTo(line * 2, height + line * 3);
    ctx.lineTo(line * 2, height + line * 4);
    ctx.lineTo(line, height + line * 4);
    ctx.lineTo(line, height);

    ctx.moveTo(line * 8, height);
    ctx.lineTo(line * 9, height);
    ctx.lineTo(line * 9, height + line);
    ctx.lineTo(line * 8, height + line);
    ctx.lineTo(line * 8, height);

    ctx.moveTo(line * 7, height + line);
    ctx.lineTo(line * 8, height + line);
    ctx.lineTo(line * 8, height + line * 2);
    ctx.lineTo(line * 7, height + line * 2);
    ctx.lineTo(line * 7, height + line);

    ctx.moveTo(line * 5, height + line * 2);
    ctx.lineTo(line * 7, height + line * 2);
    ctx.lineTo(line * 7, height + line * 3);
    ctx.lineTo(line * 5, height + line * 3);
    ctx.lineTo(line * 5, height + line * 2);

    ctx.moveTo(line * 3, height + line * 3);
    ctx.lineTo(line * 5, height + line * 3);
    ctx.lineTo(line * 5, height + line * 4);
    ctx.lineTo(line * 3, height + line * 4);
    ctx.lineTo(line * 3, height + line * 3);

    ctx.moveTo(line, height + line * 4);
    ctx.lineTo(line * 3, height + line * 4);
    ctx.lineTo(line * 3, height + line * 5);
    ctx.lineTo(line, height + line * 5);
    ctx.lineTo(line, height + line * 4);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = colors.BUBBLE;
    ctx.beginPath();
    ctx.moveTo(line * 2, line);
    ctx.lineTo(width - line * 2, line);
    ctx.lineTo(width - line * 2, line * 2);
    ctx.lineTo(width - line, line * 2);
    ctx.lineTo(width - line, height - line * 2);
    ctx.lineTo(width - line * 2, height - line * 2);
    ctx.lineTo(width - line * 2, height - line);
    ctx.lineTo(bR2, height - line);
    ctx.lineTo(bR2, height);
    ctx.lineTo(bR2 - line, height);
    ctx.lineTo(bR2 - line, height + line);
    ctx.lineTo(bR2 - line * 2, height + line);
    ctx.lineTo(bR2 - line * 2, height + line * 2);
    ctx.lineTo(bR2 - line * 4, height + line * 2);
    ctx.lineTo(bR2 - line * 4, height + line * 3);
    ctx.lineTo(bR2 - line * 6, height + line * 3);
    ctx.lineTo(bR2 - line * 6, height + line * 2);
    ctx.lineTo(bR1, height + line * 2);
    ctx.lineTo(bR1, height - line);
    ctx.lineTo(line * 2, height - line);
    ctx.lineTo(line * 2, height - line * 2);
    ctx.lineTo(line, height - line * 2);
    ctx.lineTo(line, line * 2);
    ctx.lineTo(line * 2, line * 2);
    ctx.lineTo(line * 2, line);
    ctx.lineTo(line * 3, line);

    ctx.moveTo(line * 2, height + line * 3);
    ctx.lineTo(line * 3, height + line * 3);
    ctx.lineTo(line * 3, height + line * 4);
    ctx.lineTo(line * 2, height + line * 4);
    ctx.lineTo(line * 2, height + line * 3);

    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = colors.BLACK;
    for(i=0; i<text.length; i++) {
        ctx.fillText(text[i], width/2, i*12 + 17);
    }

    canvases.speechBubbles.push({
        sTick: sTick
        , eTick: eTick
        , canv: canv
    });
}

var makeSpeechBubbles = function() {
    addSpeechBubble(1848, 2254, ["I'M GIVING YOU", "A NIGHT CALL", "TO TELL YOU HOW I FEEL"], 150, 55);
    addSpeechBubble(2475, 2893, ["I WANT TO DRIVE", "YOU THROUGH THE NIGHT", "DOWN THE HILLS"], 150, 55);
    addSpeechBubble(3110, 3524, ["I'M GONNA TELL", "YOU SOMETHING YOU", "DON'T WANT TO HEAR"], 150, 55);
    addSpeechBubble(3736, 4163, ["I'M GONNA SHOW", "YOU WHERE IT'S DARK", "BUT HAVE NO FEAR"], 150, 55);

    addSpeechBubble(4499, 4673, ["THERE'S SOMETHING", "INSIDE YOU"], 150, 40);
    addSpeechBubble(4811, 4960, ["IT'S HARD TO EXPLAIN"], 150, 25);
    addSpeechBubble(5126, 5356, ["THEY'RE TALKING", "ABOUT YOU BOY"], 150, 40);
    addSpeechBubble(5445, 5593, ["BUT YOU'RE STILL", "THE SAME"], 150, 40);

    addSpeechBubble(5765, 5922, ["THERE'S SOMETHING", "INSIDE YOU"], 150, 40);
    addSpeechBubble(6080, 6224, ["IT'S HARD TO EXPLAIN"], 150, 25);
    addSpeechBubble(6394, 6617, ["THEY'RE TALKING", "ABOUT YOU BOY"], 150, 40);
    addSpeechBubble(6711, 6856, ["BUT YOU'RE STILL", "THE SAME"], 150, 40);

    addSpeechBubble(6908, 7324, ["I'M GIVING YOU", "A NIGHT CALL", "TO TELL YOU HOW I FEEL"], 150, 55);
    addSpeechBubble(7542, 7960, ["I WANT TO DRIVE", "YOU THROUGH THE NIGHT", "DOWN THE HILLS"], 150, 55);
    addSpeechBubble(8174, 8592, ["I'M GONNA TELL", "YOU SOMETHING YOU", "DON'T WANT TO HEAR"], 150, 55);
    addSpeechBubble(8810, 9235, ["I'M GONNA SHOW", "YOU WHERE IT'S DARK", "BUT HAVE NO FEAR"], 150, 55);

    addSpeechBubble(9561, 9742, ["THERE'S SOMETHING", "INSIDE YOU"], 150, 40);
    addSpeechBubble(9877, 10040, ["IT'S HARD TO EXPLAIN"], 150, 25);
    addSpeechBubble(10196, 10421, ["THEY'RE TALKING", "ABOUT YOU BOY"], 150, 40);
    addSpeechBubble(10510, 10670, ["BUT YOU'RE STILL", "THE SAME"], 150, 40);

    addSpeechBubble(10827, 10989, ["THERE'S SOMETHING", "INSIDE YOU"], 150, 40);
    addSpeechBubble(11147, 11302, ["IT'S HARD TO EXPLAIN"], 150, 25);
    addSpeechBubble(11466, 11684, ["THEY'RE TALKING", "ABOUT YOU BOY"], 150, 40);
    addSpeechBubble(11790, 11928, ["BUT YOU'RE STILL", "THE SAME"], 150, 40);

    addSpeechBubble(12098, 12252, ["THERE'S SOMETHING", "INSIDE YOU"], 150, 40);
    addSpeechBubble(12410, 12560, ["IT'S HARD TO EXPLAIN"], 150, 25);
    addSpeechBubble(12725, 12950, ["THEY'RE TALKING", "ABOUT YOU BOY"], 150, 40);
    addSpeechBubble(13047, 13195, ["BUT YOU'RE STILL", "THE SAME"], 150, 40);
}

var addObjectAt = function(target, canvas, x, y) {
    try {
        var ctx = ctxs[target][parseInt(x/world.maxCanvasWidth)];
        ctx.drawImage(canvas, x%world.maxCanvasWidth, y);
        canvasUsed[target][parseInt(x/world.maxCanvasWidth)] = true;
        var ctx = ctxs[target][parseInt(x/world.maxCanvasWidth)+1];
        canvasUsed[target][parseInt(x/world.maxCanvasWidth)+1] = true;
        ctx.drawImage(canvas, (x%world.maxCanvasWidth) - world.maxCanvasWidth, y);
    } catch(exc) {}
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
    canvasUsed.floorPanel = true;
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
    canvasUsed.woodenPost = true;
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
    canvasUsed.woodenHandRail = true;
}

var createCharacter = function(i) {
    var ctx = ctxs.character;
    ctx.clearRect(0, 0, 25, 37);
    if(i<=30) {
        ctx.drawImage(canvases.troy, 0, 0);
    } else {
        ctx.drawImage(canvases.troy, -48, 0);
    }
    canvasUsed.character = true;
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
    canvasUsed.floor = true;
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
        ctx.drawImage(canvases.woodenHandRail, i * world.chunkWidth, 15);
    }
    canvasUsed.woodenRailing = true;
    preRendered.WoodenRailing = true;
}

var makeSkyBox = function() {
    for(i in ctxs.skyBox) {
        var ctx = ctxs.skyBox[i];
        ctx.fillStyle = colors.SKY;
        ctx.fillRect(0, 0, world.maxCanvasWidth, 300);
        canvasUsed.skyBox[i] = true;
    }
    preRendered.SkyBox = true;
}

var makeGround = function() {
    for(i in ctxs.ground) {
        var ctx = ctxs.ground[i];
        ctx.fillStyle = colors.GROUND;
        ctx.fillRect(0, 0, world.maxCanvasWidth, 200);
        canvasUsed.ground[i] = true;
    }
    preRendered.Ground = true;
}


var makeDeepBg1A = function() {
    if(!preRendered.KavinskyBillboard || !preRendered.CSSBillboard) return setTimeout(makeDeepBg1A,10);
    var xPos = 1000;
    var i = 0;
    while(xPos < 49950) {
        if(i%3 == 2) {
            addObjectAt("deepBg1A", canvases.cssBillboard, xPos, 250);
        } else {
            addObjectAt("deepBg1A", canvases.kavinskyBillboard, xPos, 250);
        }
        xPos += 750;
        i++;
    }
    preRendered.DeepBg1A = true;
}

var makeDeepBg2A = function() {
    //var ctx = ctxs.deepBg2A[0];
    //ctx.clearRect(0, 0, world.maxCanvasWidth, world.viewPort.height);
    preRendered.DeepBg2A = true;
}

var makeDeepBg3A = function() {
    var buildings = new Image();
    buildings.addEventListener('load', function() {
        for(i=0; i<56; i++) {
            addObjectAt("deepBg3A", this, i*890, 120);
        }
        preRendered.DeepBg3A = true;
    }, false);
    buildings.src = "buildings.png";

    preRendered.DeepBg3A = true;
}

var makeDeepBg4A = function() { //Reserved for sky stuff
    //var ctx = ctxs.deepBg4A[0];
    //ctx.clearRect(0, 0, world.maxCanvasWidth, world.viewPort.height);
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
    canvasUsed.lampPostA = true;
    preRendered.LampPostA = true;
}

var makechunkA = function() {
    var ctx = ctxs.chunkA;
    ctx.fillStyle = colors.MUD;
    ctx.fillRect(98, 250, world.chunkWidth, 250);
    ctx.strokeRect(98, 250, world.chunkWidth, 250);
    ctx.drawImage(canvases.floor, 0, 100);
    ctx.drawImage(canvases.woodenRailing, 0, 105);
    canvasUsed.chunkA = true;
    preRendered.ChunkA = true;
}

var makechunkB = function() {
    var ctx = ctxs.chunkB;
    ctx.fillStyle = colors.MUD;
    ctx.fillRect(98, 250, world.chunkWidth, 250);
    ctx.strokeRect(98, 250, world.chunkWidth, 250);
    ctx.drawImage(canvases.floor, 0, 100);
    ctx.drawImage(canvases.woodenRailing, 0, 105);
    canvasUsed.chunkB = true;
    preRendered.ChunkB = true;
}

var makeBgA = function() {
    for(i=world.chunks; i>=0; i--) {
        var ctx = ctxs.bgA[parseInt(i/CHUNKS_TO_CANVAS)];
        if(i%5 == 1) {
            ctx.drawImage(canvases.chunkB, i%CHUNKS_TO_CANVAS * world.chunkWidth, 290);
            if((i%CHUNKS_TO_CANVAS)==0) {
                ctx.drawImage(canvases.chunkB, world.chunkWidth * -1, 290);
            }
        } else {
            ctx.drawImage(canvases.chunkA, i%CHUNKS_TO_CANVAS * world.chunkWidth, 290);
            if((i%CHUNKS_TO_CANVAS)==0) {
                ctx.drawImage(canvases.chunkA, world.chunkWidth * -1, 290);
            }
        }
        canvasUsed.bgA[parseInt(i/CHUNKS_TO_CANVAS)] = true;
    }
    preRendered.BgA = true;
}

var makeBgB = function() {
    for(i=world.chunks; i>=0; i--) {
        var ctx = ctxs.bgB[parseInt(i/CHUNKS_TO_CANVAS)];
        if(i%5 == 1) {
            ctx.drawImage(canvases.chunkB, i%CHUNKS_TO_CANVAS * world.chunkWidth, 290);
            if((i%CHUNKS_TO_CANVAS)==0) {
                ctx.drawImage(canvases.chunkB, world.chunkWidth * -1, 290);
            }
        } else {
            ctx.drawImage(canvases.chunkA, i%CHUNKS_TO_CANVAS * world.chunkWidth, 290);
            if((i%CHUNKS_TO_CANVAS)==0) {
                ctx.drawImage(canvases.chunkA, world.chunkWidth * -1, 290);
            }
        }
        canvasUsed.bgB[parseInt(i/CHUNKS_TO_CANVAS)] = true;
    }
    preRendered.BgB = true;
}

var makeFgA = function() {
    for(i=world.chunks; i>=0; i--) {
        var ctx = ctxs.fgA[parseInt(i/CHUNKS_TO_CANVAS)];
        ctx.drawImage(canvases.woodenRailing, i%CHUNKS_TO_CANVAS * world.chunkWidth, 490);
        if((i%CHUNKS_TO_CANVAS)==0) {
            ctx.drawImage(canvases.woodenRailing, world.chunkWidth * -1, 490);
        }
        canvasUsed.fgA[parseInt(i/CHUNKS_TO_CANVAS)] = true;
    }
    preRendered.FgA = true;
}

var makeFgB = function() {
    for(i=world.chunks; i>=0; i--) {
        var ctx = ctxs.fgB[parseInt(i/CHUNKS_TO_CANVAS)];
        ctx.drawImage(canvases.woodenRailing, i%CHUNKS_TO_CANVAS * world.chunkWidth, 490);
        if((i%CHUNKS_TO_CANVAS)==0) {
            ctx.drawImage(canvases.woodenRailing, world.chunkWidth * -1, 490);
        }
        canvasUsed.fgB[parseInt(i/CHUNKS_TO_CANVAS)] = true;
    }
    preRendered.FgB = true;
}

var makePigeon = function() {
    var pigeonImg = new Image();
    pigeonImg.addEventListener('load', function() {
        var ctxPig = ctxs.pigeon;
        ctxPig.drawImage(this,0,-12);
        var lightingCount = parseInt(world.worldWidth/405)-1;
        for(i=0; i<lightingCount; i++) {
            if(i%4==3) addObjectAt("bgA", canvases.pigeon, i*405+100, 275);
        }
        ctxPig.clearRect(0, 0, 100, 100);
        ctxPig.drawImage(this,5,-76);
        var lightingCount = parseInt(world.worldWidth/405)-1;
        for(i=0; i<lightingCount; i++) {
            if(i%4==3) addObjectAt("bgB", canvases.pigeon, i*405+100, 275);
        }
        canvasUsed.pigeon = true;
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
    canvasUsed.LightingOn = true;
    preRendered.LightingOn = true;
}

var makeLightingOff = function() {
    var ctx = ctxs.lightingOff;
    ctx.fillStyle = colors.DARKNESS;
    ctx.fillRect(0, 0, 405, world.viewPort.height);
    canvasUsed.lightingOff = true;
    preRendered.LightingOff = true;
}

var makeLightingA = function() {
    var lightingCount = parseInt(world.worldWidth/405)-1;
    for(var i=0; i<lightingCount; i++) {
        addObjectAt("bgA", canvases.lampPostA, i*405 + 100, 290);
        addObjectAt("bgB", canvases.lampPostA, i*405 + 100, 290);
        addObjectAt("lightingA", canvases.lightingOn, i*405, 0);
    }
    preRendered.LightingA = true;
}

var makeLightingB = function() {
    var lightingCount = parseInt(world.worldWidth/405)-1;
    for(var i=0; i<lightingCount; i++) {
        if(i%5 == 0|| i%8 == 0) {
            addObjectAt("lightingB", canvases.lightingOff, i*405, 0);
        } else {
            addObjectAt("lightingB", canvases.lightingOn, i*405, 0);
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
    ctx.lineTo(250, world.chunkWidth);
    ctx.lineTo(43, world.chunkWidth);
    ctx.lineTo(43, 126);
    for(i=0; i<23; i++) {
        if(i%2 ==0) {
            ctx.lineTo(i*9+52, world.chunkWidth);
        } else {
            ctx.lineTo(i*9+52, 126);
        }
    }
    ctx.moveTo(43, world.chunkWidth);
    for(i=0; i<23; i++) {
        if(i%2 ==0) {
            ctx.lineTo(i*9+52, 126);
        } else {
            ctx.lineTo(i*9+52, world.chunkWidth);
        }
    }
    ctx.stroke();
    ctx.closePath();

    canvasUsed.billboard = true;
    preRendered.Billboard = true;
}

var makeKavinskyBillboard = function() {
    var kavinskyBillboard = new Image();
    kavinskyBillboard.addEventListener('load', function() {
        var ctx = ctxs.kavinskyBillboard;
        ctx.drawImage(canvases.billboard, 0, 0);
        ctx.drawImage(this, 49, 6);
        canvasUsed.kavinskyBillboard = true;
        preRendered.KavinskyBillboard = true;
    }, false);
    kavinskyBillboard.src = "billboard1.png";
}

var makeCSSBillboard = function() {
    var CSSBillboard = new Image();
    CSSBillboard.addEventListener('load', function() {
        var ctx = ctxs.cssBillboard;
        ctx.drawImage(canvases.billboard, 0, 0);
        ctx.drawImage(this, 49, 6);
        canvasUsed.cssBillboard = true;
        preRendered.CSSBillboard = true;
    }, false);
    CSSBillboard.src = "billboard2.png";
}

var makeTitleCard = function() {
    var titleCard = new Image();
    titleCard.addEventListener('load', function() {
        var ctx = ctxs.titleCard;
        ctx.drawImage(this, 0, 0);
        canvasUsed.titleCard = true;
        preRendered.TitleCard = true;
    }, false);
    titleCard.src = "titleCard.png";
}
