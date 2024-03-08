import MusicFeature from "./musicfeature.js";
import translate from "./translate.js";
import GraphicFeature from "./graphics.js";
import ColorFeature from "./colors.js";

// Load LocalStorage

var CrtCount = localStorage.getItem('CreateCounter');
// Load SessionStorage

var info = sessionStorage.getItem('answers_data');
var parsedInfo = JSON.parse(info);

console.log("--- Debug : parsedInfo ---")
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

console.log("--- Debug : MixedInfo ---");
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

console.log('--- Debug : RefbpmValues ---');
console.log(RefbpmValues);
console.log('--- Debug : AdjbpmValues ---');
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
    localStorage.setItem('CreateCounter', CrtCount);

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


var graphicInfo = GraphicFeature(
    100, // bpm
    parseInt(parsedInfo[4].selectedAns), //q5_genre
    parseInt(parsedInfo[5].selectedAns), //q6_dsel
    parseInt(parsedInfo[1].selectedAns), //q2_chord
    parseInt(parsedInfo[6].selectedAns), //q8_melody
    parseInt(parsedInfo[6].selectedAns));//q7_instr

var colorInfo = ColorFeature(
    parseInt(parsedInfo[4].selectedAns)
);

console.log("--- Debug : graphicInfo ---");
console.log(graphicInfo);

console.log("--- Debug : colorInfo ---");
console.log(colorInfo);


$('.graphic-instr').attr('data', graphicInfo[0]);
$('.graphic-chord').attr('data', graphicInfo[1]);
$('.graphic-drumset').attr('data', graphicInfo[2]);
$('.graphic-melody').attr('data', graphicInfo[3]);

d3.xml("../src/graphics/area_chord_lines.svg").then(function(xml){
    document.getElementById("graphic-lines").appendChild(xml.documentElement);
    d3.selectAll('#graphic-lines circle, #graphic-lines path, #graphic-lines rect, #graphic-lines ellipse, #graphic-linse line').style('fill', colorInfo[0]); // Change fill color to user input color
    d3.selectAll('#graphic-lines line').style('stroke', colorInfo[0]); // Change fill color to user input color

});

d3.xml(graphicInfo[0]).then(function(xml) {
    document.getElementById("graphic-instr").appendChild(xml.documentElement);
    d3.selectAll('#graphic-instr circle, #graphic-instr path, #graphic-instr rect, #graphic-instr ellipse, #graphic-instr line').style('fill', colorInfo[1]); // Change fill color to user input color
    d3.selectAll('#graphic-instr path').style('stroke', colorInfo[1]); // Change fill color to user input color

});

d3.xml(graphicInfo[1]).then(function(xml) {
    document.getElementById("graphic-chord").appendChild(xml.documentElement);
    d3.selectAll('#graphic-chord circle, #graphic-chord rect, #graphic-chord ellipse, #graphic-chord line').style('fill', colorInfo[2]); // Change fill color to user input color
    d3.selectAll('#graphic-chord path').style('stroke', colorInfo[2]);
});

d3.xml(graphicInfo[2]).then(function(xml) {
    document.getElementById("graphic-drumset").appendChild(xml.documentElement);
    d3.selectAll('#graphic-drumset circle, #graphic-drumset path, #graphic-drumset rect, #graphic-drumset ellipse, #graphic-drumset line').style('fill', colorInfo[3]); // Change fill color to user input color
    d3.selectAll('#graphic-drumset path').style('stroke', colorInfo[3]);
});

d3.xml(graphicInfo[3]).then(function(xml) {
    document.getElementById("graphic-melody").appendChild(xml.documentElement);
    d3.selectAll('#graphic-melody circle, #graphic-melody path, #graphic-melody rect, #graphic-melody ellipse, #graphic-melody line').style('fill', colorInfo[4]); // Change fill color to user input color
    d3.selectAll('#graphic-drumset path').style('stroke', colorInfo[4]);
});

// $('.graphic-lines').css('fill', colorInfo[0])
// $('.graphic-instr').css('fill', colorInfo[1])
// $('.graphic-chord').css('fill', colorInfo[2]);
// $('.graphic-drumset').css('fill', colorInfo[3])
// $('.graphic-melody').css('fill',colorInfo[4]);