import MusicFeature from "./musicfeature.js";
import translate from "./translate.js";
import GraphicFeature from "./graphics.js";
import ColorFeature from "./colors.js";

// Load LocalStorage

var CrtCount = 0;
// Load SessionStorage

var info = sessionStorage.getItem('answers_data');
var parsedInfo = JSON.parse(info);

console.log(parsedInfo);

// Execute MusicFeature
var MixedInfo = MusicFeature(
            parseInt(parsedInfo[0].selectedAns),
            parseInt(parsedInfo[1].selectedAns),
            parseInt(parsedInfo[2].selectedAns),
            parseInt(parsedInfo[3].selectedAns),
            parseInt(parsedInfo[4].selectedAns),
            parseInt(parsedInfo[5].selectedAns),
            parseInt(parsedInfo[6].selectedAns));

console.log(MixedInfo);

/*
0: "RnB_SimpleFun_100" (Drumset)
1: 100 (DrumRefBPM)
2: 80 (InstrRefBPM)
3: "Comfort" (Mood)
4: "GrvRnBFunk_Bass_80" (Bass)
5: "GrvRnBFunk_EG_80" (Instr) 
6:  (Drum Adjusted BPM)
7:  (Instr Adjusted BPM)
*/

// Define audio files

if (!MixedInfo[8]){ // case of Not Ballad
    var audioFiles = [
        '../src/au/Drum/'+ MixedInfo[0]+'.mp3', // Drum
        '../src/au/'+ MixedInfo[3]+'/' + MixedInfo[4] +'.mp3', // Bass
        '../src/au/'+ MixedInfo[3]+'/' + MixedInfo[5] +'.mp3', // Selected Instr.
      ];
    
    console.log(audioFiles);
    // Initialize players
    var players = [];
    var RefbpmValues = [MixedInfo[1], MixedInfo[2], MixedInfo[2]];
    var AdjbpmValues = [MixedInfo[6], MixedInfo[6], MixedInfo[6]];

} else { // case of Ballad
    var audioFiles = [
        '../src/au/'+ MixedInfo[3]+'/' + MixedInfo[4] +'.mp3', // Bass
        '../src/au/'+ MixedInfo[3]+'/' + MixedInfo[5] +'.mp3', // Selected Instr.
      ];
    
    console.log(audioFiles);
    // Initialize players
    var players = [];
    var RefbpmValues = [MixedInfo[2], MixedInfo[2]];
    var AdjbpmValues = [MixedInfo[6], MixedInfo[6]];
}


console.log(RefbpmValues);
console.log(AdjbpmValues);
// Load audio files
audioFiles.forEach((file, index) => {
    const player = new Tone.Player({
        url: file,
        autostart: false,
        loop: true
    }).toDestination();
    players.push(player);
});

$('.pause').on('click', function() {
    // Stop all players
    players.forEach(player => player.stop());
});

$('.restart').on('click', function() {
    var newUrl = "../index.html";
    window.location.href = newUrl;
});

// Mix function
$('.box').on('click', function() {
    CrtCount++;

    // Disconnect all players
    players.forEach(player => player.disconnect());

    // Create mixer
    const mixer = new Tone.Gain();

    // Connect players to mixer
    players.forEach((player, index) => {
        player.connect(mixer);
        const bpmRatio = AdjbpmValues[index]/RefbpmValues[index]; // Adjust playback rate based on BPM
        player.playbackRate = bpmRatio;
        // player.volume.value = index === 0 ? 0 : -20 + index * 5; // Adjust volume for each player
    });

    // Connect mixer to destination
    mixer.toDestination();

    // Start playback
    players.forEach(player => player.start());
})

translate(parseInt(parsedInfo[1].selectedAns), parseInt(parsedInfo[4].selectedAns), parseInt(parsedInfo[6].selectedAns))
$('.explain-2').text(`음악의 ${CrtCount}번째 마디에요`);

// Graphics Function

/*var graphicInfo = GraphicFeature(
    MixedInfo[6], // bpm
    parseInt(parsedInfo[4].selectedAns), //q5_genre
    parseInt(parsedInfo[5].selectedAns), //q6_dsel
    parseInt(parsedInfo[1].selectedAns), //q2_chord
    parseInt(parsedInfo[6].selectedAns), //q8_melody
    parseInt(parsedInfo[6].selectedAns));//q7_instr

console.log(graphicInfo);
*/

var colorInfo = ColorFeature(
    parseInt(parsedInfo[4].selectedAns)
);

console.log(colorInfo);

$('.graphic-lines').css('background-image', `url(${colorInfo[0]})`);
$('.graphic-instr').css('background-image', `url(${colorInfo[1]})`);
$('.graphic-chord').css('background-image', `url(${colorInfo[2]})`);
$('.graphic-drumset').css('background-image', `url(${colorInfo[3]})`);
$('.graphic-melody').css('background-image', `url(${colorInfo[4]})`);



