// Load SessionStorage

var info = sessionStorage.getItem('answers_data');
var parsedInfo = JSON.parse(info);

console.log(parsedInfo)

function MusicFeature(q1, q2, q3, q4, q5, q6, q7) {
    var Category;
    var dSel;
    var Mood;
    var BPM;
    
    switch (q5){
        case 1 :
            Category = "Grv_";
            switch (q6){
                case 1 :
                    dSel = "JazzBrush_";
                    BPM = 100;
                    break;
                case 2 :
                    dSel = "JazzyRock_";
                    BPM = 115;
                    break;
                case 3 :
                    dSel = "PopGroove_";
                    BPM = 115;
                    break;
                case 4 :
                    dSel = "CrowdGroove_";
                    BPM = 80;
                    break;
            }
            break;
        case 2 :
            Category = "RnB_";
            break;
        case 3 :
            Category = "Rock_";
            break;
        case 4 :
            Category = "Ballad_";
            break;
    }

    
}

parsedInfo[4]
// Define audio files
const audioFiles = [
    '../src/au/Drum/Funk_Jesse_95.mp3', // Drum
    '../src/au/Comfort/GrvRnBFunk_ Bass_80.mp3', // Bass
    '../src/au/Comfort/GrvRnBFunk_ Keyboard_80.mp3', // Selected Instr.
  ];

// Initialize players
const players = [];
const RefbpmValues = [95, 80, 80];
const AdjbpmValues = [95, 95, 95];

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
    // Disconnect all players
    players.forEach(player => player.disconnect());

    // Create mixer
    const mixer = new Tone.Gain();

    // Connect players to mixer
    players.forEach((player, index) => {
        player.connect(mixer);
        const bpmRatio = AdjbpmValues[index]/RefbpmValues[index]; // Adjust playback rate based on BPM
        player.playbackRate = bpmRatio;
        player.volume.value = index === 0 ? 0 : -20 + index * 5; // Adjust volume for each player
    });

    // Connect mixer to destination
    mixer.toDestination();

    // Start playback
    players.forEach(player => player.start());
})