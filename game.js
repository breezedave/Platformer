var renderVideo = function() {
    gameCtx.clearRect(0, 0, gameCanvas.width, gameCanvas.height); //Clean
    gameCtx.drawImage(canvases.skyBox, world.x, 0);
    gameCtx.drawImage(canvases.ground, world.x, 300);
    gameCtx.drawImage(canvases.deepBg4A, (world.x * 0.25), 0);
    gameCtx.drawImage(canvases.deepBg3A, (world.x * 0.7), 0);
    gameCtx.drawImage(canvases.deepBg2A, (world.x * 0.87), 0);
    gameCtx.drawImage(canvases.deepBg1A, (world.x * 0.95), 0);

    if(world.tick%200 <100) {
        gameCtx.drawImage(canvases.bgB, world.x, 0); //Background
    } else {
        gameCtx.drawImage(canvases.bgA, world.x, 0); //Background
    }

    gameCtx.drawImage(canvases.character, player.renderX, player.renderY); //Character

    if(world.tick%200 <100) {
        gameCtx.drawImage(canvases.fgB, world.x, 0); //Background
    } else {
        gameCtx.drawImage(canvases.fgA, world.x, 0); //Background
    }

    if(world.tick%150 <=20) {
        gameCtx.drawImage(canvases.lightingB, world.x, 0); //Lighting lamp off
    } else {
        gameCtx.drawImage(canvases.lightingA, world.x, 0); //Lighting lamp on
    }

    if(world.debug) {
        gameCtx.fillStyle = colors.BLACK;
        gameCtx.textAlign = "end"
        gameCtx.font = "18px arial";
        gameCtx.fillText(world.tick, 790, 20);
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

var stepWorld = function() {
    world.x-=1;
    setTimeout(stepWorld,5);
    if(world.x <= -9009) world.x = -100;
}

var playerCtrl = function() {
    if (player.x > 550) player.xD = -0.05;
    if (player.x < 100) player.xD = 0.05;
    player.x += player.xD;
    player.renderX = player.x;
    player.renderY = player.y;

    createCharacter(player.frame);
    player.frame = (player.frame+1)%60;
    setTimeout(playerCtrl,5);
}

var checkRendered = function() {
    if(allPreRendered()) {
        world.rendered = true;
    }
}

var checkStarted = function() {
    if(world.reqStart) {
        stepWorld();
        playerCtrl();
        if(world.sound) song.start(0);
        document.getElementById('canvas').onclick = null;
        world.start = true;
    }
}


var buildOrder = [
    {
        name: "Song"
        , fn: loadAudio
    }
    , {
        name: "Troy"
        , fn: makeTroy
    }
    , {
        name: "Sky Box"
        , fn: makeSkyBox
    }
    , {
        name: "Ground"
        , fn: makeGround
    }
    , {
        name: "Floor"
        , fn: makeFloor
    }
    , {
        name: "Wooden Railing"
        , fn: makeWoodenRailing
    }
    , {
        name: "Sky Box"
        , fn: makeSkyBox
    }
    , {
        name: "Lamp Post"
        , fn: makeLampPostA
    }
    , {
        name: "Chunk A"
        , fn: makechunkA
    }
    , {
        name: "Chunk B"
        , fn: makechunkB
    }
    , {
        name: "Background A"
        , fn: makeBgA
    }
    , {
        name: "Background B"
        , fn: makeBgB
    }
    , {
        name: "Foreground A"
        , fn: makeFgA
    }
    , {
        name: "Foreground B"
        , fn: makeFgB
    }
    , {
        name: "Pigeon"
        , fn: makePigeon
    }
    , {
        name: "Ligthing On"
        , fn: makeLightingOn
    }
    , {
        name: "Lighting Off"
        , fn: makeLightingOff
    }
    , {
        name: "Lighting A"
        , fn: makeLightingA
    }
    , {
        name: "Lighting B"
        , fn: makeLightingB
    }
    , {
        name: "Billboard"
        , fn: makeBillboard
    }
    , {
        name: "Kavinsky Billboard"
        , fn: makeKavinskyBillboard
    }
    , {
        name: "Deep Background 1A"
        , fn: makeDeepBg1A
    }
    , {
        name: "Deep Background 2A"
        , fn: makeDeepBg2A
    }
    , {
        name: "Deep Background 3A"
        , fn: makeDeepBg3A
    }
    , {
        name: "Deep Background 4A"
        , fn: makeDeepBg4A
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
