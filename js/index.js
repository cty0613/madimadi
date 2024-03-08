
// CLICKS

$('.svg-refresh').click((e)=>{
    window.location.href = './index.html';
});


// Tone.js


// the player
const player = new Tone.Player({
    url: "./src/madi_x/Result_02.mp3",
    loop: true,
    autostart: true,
}).toDestination();

// bind the interface

var IsStop = 0;

$('.svg-pause').click((e)=>{
    if(!IsStop){
        player.stop();
        IsStop = 1;

    } else {
        player.start();
        IsStop = 0;
    };
});