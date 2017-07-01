window.AudioContext = window.AudioContext || window.webkitAudioContext;
var audioCtx = new AudioContext();
var song;

var loadAudio = function() {
    var songUrl = 'Nightcall.mp3';
    var req = new XMLHttpRequest();
    req.open('GET', songUrl, true);
    req.responseType = 'arraybuffer';

    req.onload = function(buffer) {
        audioCtx.decodeAudioData(req.response, function(buffer) {
            song = audioCtx.createBufferSource();
            song.buffer = buffer;
            song.connect(audioCtx.destination);
            preRendered.Audio = true;
        })
    }
    req.send();
}
