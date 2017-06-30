var render = function() {
    if(world.rendered) {
        gameCtx.clearRect(0, 0, gameCanvas.width, gameCanvas.height); //Clean
        gameCtx.drawImage(canvases.skyBox, world.x, 0);
        gameCtx.drawImage(canvases.ground, world.x, 300);
        gameCtx.drawImage(canvases.deepBg1A, (world.x * 0.95), 0);

        if(world.tick%200 <100) {
            gameCtx.drawImage(canvases.bgB, world.x, 0); //Background
        } else {
            gameCtx.drawImage(canvases.bgA, world.x, 0); //Background
        }

        gameCtx.drawImage(canvases.character, player.renderX, player.renderY); //Character

        if(renderCount%200 <100) {
            gameCtx.drawImage(canvases.fgB, world.x, 0); //Background
        } else {
            gameCtx.drawImage(canvases.fgA, world.x, 0); //Background
        }

        if(world.tick%150 <=20) {
            gameCtx.drawImage(canvases.lightingB, world.x, 0); //Lighting lamp off
        } else {
            gameCtx.drawImage(canvases.lightingA, world.x, 0); //Lighting lamp on
        }

    } else {
        gameCtx.clearRect(0, 0, gameCanvas.width, gameCanvas.height); //Clean
        gameCtx.fillStyle = colors.GREY;
        gameCtx.fillRect(0, 0, 800, 600);
        gameCtx.fillStyle = colors.BLACK;
        gameCtx.fillText(world.currentlyLoading, 300, 300);

        gameCtx.strokeRect(0, 0, gameCanvas.width, gameCanvas.height); //Frame
        checkRendered();
    }
    world.tick++;
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
        stepWorld();
        playerCtrl();
        world.rendered = true;
    }
}

var buildOrder = [
    {
        name: "Troy"
        , fn: makeTroy
    }, {
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
