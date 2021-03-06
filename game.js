var renderVideo = function() {
    var startRunningPoint = world.startRunningPoint;
    var stopRunningPoint = world.stopRunningPoint;
    var titleCardFadeout = world.titleCardFadeout;
    var endCreditFadeIn = world.endCreditFadeIn;
    var creditDelay = world.creditDelay;

    gameCtx.clearRect(0, 0, gameCanvas.width, gameCanvas.height); //Clean
    if(world.tick >= startRunningPoint && world.tick <= stopRunningPoint + endCreditFadeIn) {
        renderRunningVideo(world.tick - startRunningPoint);
    }
    if(world.tick < startRunningPoint + titleCardFadeout) {
        if(world.tick >= startRunningPoint) {
            gameCtx.globalAlpha = 1 - ((world.tick - startRunningPoint) / titleCardFadeout);
        }
        gameCtx.drawImage(canvases.titleCard, 0, 0);
        gameCtx.globalAlpha = 1;
    }
    if(world.tick >= stopRunningPoint) {
        if(world.tick <= stopRunningPoint + endCreditFadeIn) {
            gameCtx.globalAlpha = ((world.tick - stopRunningPoint) / endCreditFadeIn);
        }
        gameCtx.fillStyle = colors.BLACK;
        gameCtx.fillRect(0, 0, gameCanvas.width, gameCanvas.height);

        gameCtx.font = "100px MONOTON";
        gameCtx.textAlign = "center";
        gameCtx.strokeText("NIGHTCALL", 400, 280);

        gameCtx.font = "30px Iceland";
        gameCtx.strokeText("BY KAVINSKY", 645, 310);

        if(world.tick > stopRunningPoint + endCreditFadeIn + creditDelay) {
            gameCtx.fillStyle = colors.WHITE;
            gameCtx.font = "20px Iceland";
            gameCtx.fillText("VIDEO BY DAVE BREEZE", 636, 400);

            gameCtx.fillStyle = colors.WHITE;
            gameCtx.font = "20px Iceland";
            gameCtx.fillText("BREEZEDAVE@GOOGLEMAIL.COM", 597, 420);
        }

        if(world.tick > stopRunningPoint + endCreditFadeIn + (creditDelay * 4)) {
            gameCtx.fillStyle = colors.WHITE;
            gameCtx.font = "16px Iceland";
            gameCtx.fillText("MADE WITHOUT PERMISSION", 642, 570);
        }

        gameCtx.globalAlpha = 1;
    }
}

var renderSkyAndGround = function(currSegment, relativeX) {
    if(canvasUsed.skyBox[currSegment+1]) gameCtx.drawImage(canvases.skyBox[currSegment+1], relativeX + world.maxCanvasWidth, 0);
    if(canvasUsed.skyBox[currSegment]) gameCtx.drawImage(canvases.skyBox[currSegment], relativeX, 0);
    if(canvasUsed.ground[currSegment+1]) gameCtx.drawImage(canvases.ground[currSegment+1], relativeX + world.maxCanvasWidth, 300);
    if(canvasUsed.ground[currSegment]) gameCtx.drawImage(canvases.ground[currSegment], relativeX, 300);
}

var renderDeepBG4 = function() {
    var canvArray = parseInt(world.x*-0.25/world.maxCanvasWidth);
    if(canvasUsed.deepBg4A[canvArray+1]) gameCtx.drawImage(canvases.deepBg4A[canvArray+1], ((world.x * 0.25)%world.maxCanvasWidth) + world.maxCanvasWidth, 0);
    if(canvasUsed.deepBg4A[canvArray]) gameCtx.drawImage(canvases.deepBg4A[canvArray], (world.x * 0.25)%world.maxCanvasWidth, 0);
}
var renderDeepBG3 = function() {
    var canvArray = parseInt(world.x*-0.7/world.maxCanvasWidth);
    if(canvasUsed.deepBg3A[canvArray+1]) gameCtx.drawImage(canvases.deepBg3A[canvArray+1], ((world.x * 0.7)%world.maxCanvasWidth) + world.maxCanvasWidth, 0);
    if(canvasUsed.deepBg3A[canvArray]) gameCtx.drawImage(canvases.deepBg3A[canvArray], (world.x * 0.7)%world.maxCanvasWidth, 0);
}
var renderDeepBG2 = function() {
    var canvArray = parseInt(world.x*-0.87/world.maxCanvasWidth);
    if(canvasUsed.deepBg2A[canvArray+1]) gameCtx.drawImage(canvases.deepBg2A[canvArray+1], ((world.x * 0.87)%world.maxCanvasWidth) + world.maxCanvasWidth, 0);
    if(canvasUsed.deepBg2A[canvArray]) gameCtx.drawImage(canvases.deepBg2A[canvArray], (world.x * 0.87)%world.maxCanvasWidth, 0);
}
var renderDeepBG1 = function() {
    var canvArray = parseInt(world.x*-0.95/world.maxCanvasWidth);
    if(canvasUsed.deepBg1A[canvArray+1]) gameCtx.drawImage(canvases.deepBg1A[canvArray+1], ((world.x * 0.95)%world.maxCanvasWidth) + world.maxCanvasWidth, 0);
    if(canvasUsed.deepBg1A[canvArray]) gameCtx.drawImage(canvases.deepBg1A[canvArray], (world.x * 0.95)%world.maxCanvasWidth, 0);
}

var renderBG = function(tick, currSegment, relativeX) {
    if(tick%200 <100) {
        if(canvasUsed.bgB[currSegment+1]) gameCtx.drawImage(canvases.bgB[currSegment+1], relativeX + world.maxCanvasWidth, 0); //Background
        if(canvasUsed.bgB[currSegment]) gameCtx.drawImage(canvases.bgB[currSegment], relativeX, 0); //Background
    } else {
        if(canvasUsed.bgA[currSegment+1]) gameCtx.drawImage(canvases.bgA[currSegment+1], relativeX + world.maxCanvasWidth, 0); //Background
        if(canvasUsed.bgA[currSegment]) gameCtx.drawImage(canvases.bgA[currSegment], relativeX, 0); //Background
    }
}

var renderPlayer = function() {
    gameCtx.drawImage(canvases.character, player.renderX, player.renderY); //Character
    var bubble = getBubble();
    if(bubble) {gameCtx.drawImage(bubble, player.renderX + 20, player.renderY - (bubble.height - 15))}; //Speech Bubble
}

var renderFG = function(tick, currSegment, relativeX) {
    if(tick%200 <100) {
        if(canvasUsed.fgB[currSegment+1]) gameCtx.drawImage(canvases.fgB[currSegment+1], relativeX + world.maxCanvasWidth, 0); //Foreground
        if(canvasUsed.fgB[currSegment]) gameCtx.drawImage(canvases.fgB[currSegment], relativeX, 0); //Foreground
    } else {
        if(canvasUsed.fgA[currSegment+1]) gameCtx.drawImage(canvases.fgA[currSegment+1], relativeX + world.maxCanvasWidth, 0); //Foreground
        if(canvasUsed.fgA[currSegment]) gameCtx.drawImage(canvases.fgA[currSegment], relativeX, 0); //Foreground
    }
}

var renderLighting = function(tick, currSegment, relativeX) {
    if(tick%150 <=20) {
        if(canvasUsed.lightingB[currSegment+1]) gameCtx.drawImage(canvases.lightingB[currSegment+1], relativeX + world.maxCanvasWidth, 0); //Lighting lamp off
        if(canvasUsed.lightingB[currSegment]) gameCtx.drawImage(canvases.lightingB[currSegment], relativeX, 0); //Lighting lamp off
    } else {
        if(canvasUsed.lightingA[currSegment+1]) gameCtx.drawImage(canvases.lightingA[currSegment+1], relativeX + world.maxCanvasWidth, 0); //Lighting lamp on
        if(canvasUsed.lightingA[currSegment]) gameCtx.drawImage(canvases.lightingA[currSegment], relativeX, 0); //Lighting lamp on
    }
}

var renderDebug = function(tick) {
    gameCtx.fillStyle = colors.BLACK;
    gameCtx.textAlign = "end"
    gameCtx.font = "18px arial";
    gameCtx.fillText(tick, world.viewPort.width-10, 20);
}

var renderRunningVideo = function(tick) {
    world.x = (tick * -3) -100;
    var currSegment = parseInt(world.x*-1/world.maxCanvasWidth);
    var relativeX = world.x%world.maxCanvasWidth;
    renderSkyAndGround(currSegment, relativeX);
    renderDeepBG4();
    renderDeepBG3();
    renderDeepBG2();
    renderDeepBG1();
    renderBG(tick, currSegment, relativeX);
    renderPlayer();
    renderFG(tick, currSegment, relativeX);
    renderLighting(tick, currSegment, relativeX);

    if(world.debug) {
        renderDebug(tick);
    }
}

var renderLoading = function() {
    gameCtx.fillStyle = colors.BLACK;
    gameCtx.fillRect(0, 0, gameCanvas.width, gameCanvas.height);

    gameCtx.fillStyle = colors.SKY;
    gameCtx.strokeStyle = colors.WHITE;
    gameCtx.font = "140px MONOTON";
    gameCtx.textAlign = "center";
    gameCtx.strokeText("LOADING", 400, 320);
    gameCtx.fillText("LOADING", 400, 320);
    gameCtx.font = "24px Iceland";
    gameCtx.strokeText(world.currentlyLoading, 400, 350);

    gameCtx.strokeRect(0, 0, gameCanvas.width, gameCanvas.height); //Frame
}

var renderStartPage = function() {
    world.preTick += 0.02;
    if(world.preTick < 1) {
        renderLoading();
        var opacity = Math.min(world.preTick, 1);
        gameCtx.fillStyle = "RGBA(0, 0, 0, " + opacity + ")";
        gameCtx.fillRect(0, 0, gameCanvas.width, gameCanvas.height);
        return;
    }
    if(world.preTick >= 1) {
        gameCtx.fillStyle = colors.BLACK;
        gameCtx.fillRect(0, 0, gameCanvas.width, gameCanvas.height);
        gameCtx.strokeStyle = colors.WHITE;
        gameCtx.font = "120px ICELAND";
        gameCtx.textAlign = "center";
        gameCtx.strokeText("CLICK TO START", 400, 320);
        if(!document.getElementById('canvas').onclick) {
            document.getElementById('canvas').onclick = function() {
                if(world.rendered && !world.start && !world.reqStart) {
                    world.reqStart = true;
                }
            }
        }
        checkStarted();
    }
}

var render = function() {
    gameCtx.clearRect(0, 0, gameCanvas.width, gameCanvas.height); //Clean
    if(world.start) {
        renderVideo();
        world.tick++;
    } else {
        if (world.rendered) {
            renderStartPage();
        } else {
            renderLoading();
            checkRendered();
        }
    }
    window.requestAnimationFrame(render);
}

var playerCtrl = function() {
    if (player.x > 550) player.xD = -0.05;
    if (player.x < 100) player.xD = 0.05;
    player.x += player.xD;
    player.renderX = parseInt(player.x);
    player.renderY = parseInt(player.y);

    createCharacter(player.frame);
    player.frame = (player.frame+1)%60;
    setTimeout(playerCtrl,5);
}

var getBubble = function() {
    for(var i=0; i<canvases.speechBubbles.length; i++) {
        var bubble = canvases.speechBubbles[i];
        if(bubble.sTick <= world.tick && bubble.eTick >= world.tick) return bubble.canv;
    }
    return false;
}

var checkRendered = function() {
    if(allPreRendered()) {
        world.rendered = true;
    }
}

var checkStarted = function() {
    if(world.reqStart) {
        playerCtrl();
        if(world.sound) song.start(0);
        if(world.debug) {
            document.getElementById('canvas').onclick = function() {clickAtPoint.push(world.tick);}
        } else {
            document.getElementById('canvas').onclick = null;
        }
        world.start = true;
    }
}

var buildOrder = [
    {
        name: "Loading Music"
        , fn: loadAudio
    }
    , {
        name: "Loading Music"
        , fn: makeTroy
    }
    , {
        name: "Loading Music"
        , fn: makeSkyBox
    }
    , {
        name: "Remembering What To Make"
        , fn: makeGround
    }
    , {
        name: "Remembering What To Make"
        , fn: makeFloor
    }
    , {
        name: "Designing Shapes"
        , fn: makeWoodenRailing
    }
    , {
        name: "Designing Shapes"
        , fn: makeSkyBox
    }
    , {
        name: "Making Shapes"
        , fn: makeLampPostA
    }
    , {
        name: "Making Shapes"
        , fn: makechunkA
    }
    , {
        name: "Making More Shapes"
        , fn: makechunkB
    }
    , {
        name: "Making More Shapes"
        , fn: makeBgA
    }
    , {
        name: "Too Many Shapes"
        , fn: makeBgB
    }
    , {
        name: "Too Many Shapes"
        , fn: makeFgA
    }
    , {
        name: "Deleting Shapes"
        , fn: makeFgB
    }
    , {
        name: "Deleting Shapes"
        , fn: makePigeon
    }
    , {
        name: "Painting Shapes"
        , fn: makeLightingOn
    }
    , {
        name: "Painting Shapes"
        , fn: makeLightingOff
    }
    , {
        name: "Applying Super Glue"
        , fn: makeLightingA
    }
    , {
        name: "Applying Super Glue"
        , fn: makeLightingB
    }
    , {
        name: "Sticking Hand To Shape"
        , fn: makeBillboard
    }
    , {
        name: "Sticking Hand To Shape"
        , fn: makeKavinskyBillboard
    }
    , {
        name: "Sticking Hand To Shape"
        , fn: makeCSSBillboard
    }
    , {
        name: "Swearing"
        , fn: makeDeepBg1A
    }
    , {
        name: "Swearing"
        , fn: makeDeepBg2A
    }
    , {
        name: "Rendering"
        , fn: makeDeepBg3A
    }
    , {
        name: "Rendering"
        , fn: makeDeepBg4A
    }
    , {
        name: "Tidying Up"
        , fn: makeTitleCard
    }
    , {
        name: "Tidying Up"
        , fn: makeSpeechBubbles
    }
]

var startBuild = function(i) {
    i = i || 0;
    var build = buildOrder[i];
    world.currentlyLoading = build.name;
    build.fn();
    i++;
    if(i == buildOrder.length) return;
    setTimeout(function() {startBuild(i)}, 1);
}
setTimeout(startBuild, 1);

window.requestAnimationFrame(render);
