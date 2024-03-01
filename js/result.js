// Load SessionStorage

var info = sessionStorage.getItem('answers_data');
var parsedInfo = JSON.parse(info);

console.log(parsedInfo)

function MusicFeature(q1, q2, q3, q4, q5, q6, q7) {
    var Category, dSel, Mood, Instr, BPM, iBPM;
    var AdjBPM = 0;

    
    // Category & Drumset & RefBPM
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
            switch (q6){
                case 1 :
                    dSel = "SimpleFun_";
                    BPM = 100;
                    break;
                case 2 :
                    dSel = "Curtis_";
                    BPM = 90;
                    break;
                case 3 :
                    dSel = "Motown_";
                    BPM = 115;
                    break;
                case 4 :
                    dSel = "Benny_";
                    BPM = 80;
                    break;
            }
            break;
        case 3 :
            Category = "Rock_";
            switch (q6){
                case 1 :
                    dSel = "BasicRock_";
                    BPM = 85;
                    break;
                case 2 :
                    dSel = "JamBand_";
                    BPM = 105;
                    break;
                case 3 :
                    dSel = "FoF_";
                    BPM = 120;
                    break;
                case 4 :
                    dSel = "BigRoom_";
                    BPM = 86;
                    break;
            }
            break;
        case 4 :
        Category = "Funk_";
        switch (q6){
            case 1 :
                dSel = "BasicRock_";
                BPM = 85;
                break;
            case 2 :
                dSel = "JamBand_";
                BPM = 105;
                break;
            case 3 :
                dSel = "FoF_";
                BPM = 120;
                break;
            case 4 :
                dSel = "BigRoom_";
                BPM = 86;
                break;
        }
        break;
        case 5 :
            Category = "Ballad_";
            BPM = 85;
            break;
    }
    switch (q3){
        case 1 :
            AdjBPM = AdjBPM - 4;
            break;
        case 2 :
            AdjBPM = AdjBPM + 0;
            break;
        case 3 :
            AdjBPM = AdjBPM + 4;
            break;
        case 4 :
            AdjBPM = AdjBPM + 8;
            break;
    }

    switch (q4){
        case 1 :
            AdjBPM = AdjBPM + 8;
            break;
        case 2 :
            AdjBPM = AdjBPM + 4;
            break;
        case 3 :
            AdjBPM = AdjBPM + 0;
            break;
        case 4 :
            AdjBPM = AdjBPM - 4;
            break;
    }
    
    switch (q2){
        case 1 :
            Mood = 'Cool';
            break;
        case 2 :
            Mood = 'Comfort';
            break;
        case 3 :
            Mood = 'Drousy';
            break;
        case 4 : // same with drousy
            Mood = 'Drousy';
            break;
    }

    switch (q7){
        case 1 :
            Instr = 'EG_';
            if (q5 == 1 || q5 == 2 || q5 == 4){
                iBPM = 80;
            } else if (q5 == 3){
                if(BPM >= 109){
                    iBPM = 110
                }
                iBPM = 85;
            }
            break;
        case 2 :
            Instr = 'AG_';
            break;
        case 3 :
            Instr = 'Keyboard_';
            break;
        case 4 : 
            Instr = 'Vi_';
            break;
    }

    var ResultDrumset = Category + dSel + BPM;
    var ResultDrumRefBPM = BPM;
    var ResultMood = Mood;
    var ResultBassChord = Category + "_Bass"
    var ResultInstrChord = Category + Instr

};

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