export default function GraphicFeature(bpm, q5_genre, q6_dsel, q2_chord, q8_melody, q7_instr){
    var width, instr, chord, drumset, melody;

    switch(q7_instr){ // instr :: pattern
        case 1:
            instr = 'area_instr_eg_1';
            break;
        case 2:
            instr = 'area_instr_ag_1';
            break;
        case 3:
            instr = 'area_instr_k_1';
            break;
        case 4:
            instr = 'area_instr_vi_1';
            break;
    }

    switch(q2_chord){ // chord :: line + dot
        case 1: // cool
            melody = 'area_melody_cool_all';
            switch(q5_genre){ // with genre
                case 1: // grv
                    chord = 'area_chord_cool_grv';
                    break;
                case 2: // rnb
                    chord = 'area_chord_cool_rnb';
                    break;
                case 3: // rock
                    chord = 'area_chord_cool_rock';
                    break;
                case 4: // funk
                    chord = 'area_chord_cool_funk';
                    break;
                case 5: // ballad
                    chord = 'area_chord_cool_ballad';
                    break;
            };
            break;
        case 2: // comfort
            switch(q5_genre){ // with genre
                case 1: // grv
                    chord = 'area_chord_comfort_grv';
                    melody = 'area_melody_comfort_notrock';
                    break;
                case 2: // rnb
                    chord = 'area_chord_comfort_rnb';
                    melody = 'area_melody_comfort_notrock';
                    break;
                case 3: // rock
                    chord = 'area_chord_comfort_rock';
                    melody = 'area_melody_comfort_rock';
                    break;
                case 4: // funk
                    chord = 'area_chord_comfort_funk';
                    melody = 'area_melody_comfort_notrock';
                    break;
                case 5: // ballad
                    chord = 'area_chord_comfort_ballad';
                    melody = 'area_melody_comfort_ballad';
                    break;
            }
            break;
        case 3: // drousy
            switch(q5_genre){ // with genre
                case 1: // grv
                    chord = 'area_chord_drousy_grv';
                    melody = 'area_chord_drousy_notrock';
                    break;
                case 2: // rnb
                    chord = 'area_chord_drousy_rnb';
                    melody = 'area_chord_drousy_notrock';
                    break;
                case 3: // rock
                    chord = 'area_chord_drousy_rock';
                    melody = 'area_chord_drousy_rock';
                    break;
                case 4: // funk
                    chord = 'area_chord_drousy_funk';
                    melody = 'area_chord_drousy_notrock';
                    break;
                case 5: // ballad
                    chord = 'area_chord_drousy_ballad';
                    melody = 'area_chord_drousy_ballad';
                    break;
            }
            break;
        case 4: // angry = drousy
            switch(q5_genre){ // with genre
                case 1: // grv
                    chord = 'area_chord_drousy_grv';
                    melody = 'area_chord_drousy_notrock';
                    break;
                case 2: // rnb
                    chord = 'area_chord_drousy_rnb';
                    melody = 'area_chord_drousy_notrock';
                    break;
                case 3: // rock
                    chord = 'area_chord_drousy_rock';
                    melody = 'area_chord_drousy_rock';
                    break;
                case 4: // funk
                    chord = 'area_chord_drousy_funk';
                    melody = 'area_chord_drousy_notrock';
                    break;
                case 5: // ballad
                    chord = 'area_chord_drousy_ballad';
                    melody = 'area_chord_drousy_ballad';
                    break;
            }
            break;
    }

    switch(q6_dsel){ // drumset :: beat circle
        case 1:
            drumset = 'area_drumset_1';
            break;
        case 2:
            drumset = 'area_drumset_2';
            break;
        case 3:
            drumset = 'area_drumset_3';
            break;
        case 4:
            drumset = 'area_drumset_4';
            break;
    }
    
}