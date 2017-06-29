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
