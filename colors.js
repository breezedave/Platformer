var sky=gameCtx.createLinearGradient(0,0,0,400);
sky.addColorStop(0, "RGBA(131, 51, 128, 1)");
sky.addColorStop(1, "RGBA(255, 203, 253, 1)");

var grd=gameCtx.createLinearGradient(0,0,0,200);
grd.addColorStop(0, "RGBA(0, 102, 0, 1)");
grd.addColorStop(1, "RGBA(0, 50, 100, 1)");

var colors = {
    FLOOR: "RGBA(90, 70, 90, 1)"
    , WOOD: "RGBA(103, 70, 42, 1)"
    , SKY: sky
    , GROUND: grd
    , MUD: "RGBA(90, 80, 50, 1)"
    , LAMP_LIGHT: "RGBA(250, 250, 5, 1)"
    , LAMP: "RGBA(128, 128, 128, 1)"
    , GLASS: "RGBA(128, 128, 128, 0.25)"
    , DARKNESS: "RGBA(10, 10, 10, 0.35)"
    , GREY: "RGBA(128, 128, 128, 1)"
    , BLACK: "RGBA(0, 0, 0, 1)"
    , WHITE: "RGBA(255, 255, 255, 1)"
    , LIGHT_STEEL: "RGBA(120, 120, 120, 1)"
    , DARK_STEEL: "RGBA(100, 100, 100, 1)"
    , BUBBLE: "RGBA(255, 255, 255, 0.75)"
}
