var render = function() {
    gameCtx.clearRect(0, 0, gameCanvas.width, gameCanvas.height); //Clean

    if(renderCount%200 <100) {
        gameCtx.drawImage(canvases.bgB, world.x, 0); //Background
    } else {
        gameCtx.drawImage(canvases.bgA, world.x, 0); //Background
    }

    gameCtx.drawImage(canvases.character, player.renderX, player.renderY); //Character

    if(renderCount%150 <=20) {
        gameCtx.drawImage(canvases.lightingB, world.x, 0); //Lighting lamp off
    } else {
        gameCtx.drawImage(canvases.lightingA, world.x, 0); //Lighting lamp on
    }

    gameCtx.strokeRect(0, 0, gameCanvas.width, gameCanvas.height); //Frame

    renderCount++;
    window.requestAnimationFrame(render);
}

var stepWorld = function() {
    world.x-=1;
    setTimeout(stepWorld,5);
    if(world.x <= -18730) world.x = -100;
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
        return window.requestAnimationFrame(render);
    } else {
        return setTimeout(checkRendered,10);
    }
}
checkRendered();
stepWorld();
playerCtrl();
