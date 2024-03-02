export default function MusicFeature(q1, q2, q3, q4, q5, q6, q7) {
    var Category, dSel, Mood, Instr, BPM, iBPM;
    var AdjBPM = 0;

    
    
    switch (q5){ // Category & Drumset & RefBPM
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
                dSel = "SimpleFunk_";
                BPM = 100;
                break;
            case 2 :
                dSel = "FunkyPop_";
                BPM = 120;
                break;
            case 3 :
                dSel = "Jesse_";
                BPM = 95;
                break;
            case 4 :
                dSel = "FunkedOut_";
                BPM = 105;
                break;
        }
        break;
        case 5 :
            Category = "Ballad_";
            BPM = 85;
            break;
    }
    switch (q3){ // BPM Adjust 
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

    switch (q4){ // BPM Adjust
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
    
    switch (q2){ // Mood & Instr
        case 1 :
            Mood = 'Cool';
            switch (q7) {
                case 1 : 
                    Instr = "All_EG_80";
                    iBPM = 80;
                    break;
                case 2 :
                    Instr = "All_AG_80";
                    iBPM = 80;
                    break;
                case 3 :
                    Instr = "All_Keyboard_80";
                    iBPM = 80;
                    break;
                case 4 :
                    Instr = "All_Vi_80";
                    iBPM = 80;
                    break;
                }
            break;
        case 2 :
            Mood = 'Comfort';
            switch (q7) {
                case 1 : // Comfort + EG
                    if (q5 == 1 || q5 == 2 || q5 == 4){ // Grv RnB Funk
                        Instr = "GrvRnBFunk_EG_80"
                        iBPM = 80;
                    } else if (q5 == 3){ // Rock
                        if (BPM >= 110){
                            Instr = "Rock_EG_110"
                            iBPM = 110;
                        } else {
                            Instr = "Rock_EG_85"
                            iBPM = 85;
                        }
                    } else { // Ballad
                        Instr = "Ballad_EG_85"
                        iBPM = 85;
                    }
                    break;
                case 2 : // Comfort + AG
                    if (q5 == 1 || q5 == 2 || q5 == 4){ // Grv RnB Funk
                        Instr = "GrvRnBRunk_AG_80"
                        iBPM = 80;
                    } else if (q5 == 3) { // Rock
                        if (BPM >= 110) {
                            Instr = "Rock_AG_110"
                            iBPM = 110;
                        } else {
                            Instr = "Rock_AG_85"
                            iBPM = 85;
                        } 
                    } else { // Ballad
                        Instr = "Ballad_AG_85"
                        iBPM = 85;
                    }
                    break;

                case 3 : // Comfort + Keyboard
                    if (q5 == 1 || q5 == 2 || q5 == 4){ // Grv RnB Funk
                        Instr = "GrvRnBRunk_Keyboard_80"
                        iBPM = 80;
                    } else if (q5 == 3) { // Rock
                        if (BPM >= 110) {
                            Instr = "Rock_Keyboard_110"
                            iBPM = 110;
                        } else {
                            Instr = "Rock_Keyboard_85"
                            iBPM = 85;
                        } 
                    } else { // Ballad
                        Instr = "Ballad_Keyboard_85"
                        iBPM = 85;
                    }
                    break;

                case 4 : // Comfort + Vi
                    if (q5 == 1 || q5 == 2 || q5 == 4){ // Grv RnB Funk
                        Instr = "GrvRnBRunk_Vi_80"
                        iBPM = 80;
                    } else if (q5 == 3) { // Rock
                        if (BPM >= 110) {
                            Instr = "Rock_Vi_110"
                            iBPM = 110;
                        } else {
                            Instr = "Rock_Vi_85"
                            iBPM = 85;
                        } 
                    } else { // Ballad
                        Instr = "Ballad_Vi_85"
                        iBPM = 85;
                    }
                }
            break;

        case 3 :
            Mood = 'Drousy';
            switch (q7) {
                case 1 : // Drousy + EG
                    if (q5 == 1 || q5 == 2 || q5 == 4){ // Grv RnB Funk
                        Instr = "GrvRnBFunk_EG_80_V2"
                        iBPM = 80;
                    } else if (q5 == 3 || q5 == 5){ // Rock Ballad
                        Instr = "RockBallad_EG_85"
                        iBPM = 85;
                    }
                    break;

                case 2 : // Drousy + AG
                    if (q5 == 1 || q5 == 2 || q5 == 4){ // Grv RnB Funk
                        Instr = "GrvRnBFunk_AG_80"
                        iBPM = 80;
                    } else if (q5 == 3 || q5 == 5){ // Rock Ballad
                        Instr = "RockBallad_AG_85"
                        iBPM = 85;
                    }
                    break;

                case 3 : // Drousy + Keyboard
                    if (q5 == 1 || q5 == 2 || q5 == 4){ // Grv RnB Funk
                        Instr = "GrvRnBFunk_Keyboard_80"
                        iBPM = 80;
                    } else if (q5 == 3 || q5 == 5){ // Rock Ballad
                        Instr = "RockBallad_Keyboard_85"
                        iBPM = 85;
                    }
                    break;

                case 4 : // Drousy + Vi
                    if (q5 == 1 || q5 == 2 || q5 == 4){ // Grv RnB Funk
                        Instr = "GrvRnBFunk_Vi_80"
                        iBPM = 80;
                    } else if (q5 == 3 || q5 == 5){ // Rock Ballad
                        Instr = "RockBallad_Vi_85"
                        iBPM = 85;
                    }
                    break;
                }
            break;
        case 4 : // same with drousy
            Mood = 'Drousy';
            switch (q7) {
                case 1 : // Drousy + EG
                    if (q5 == 1 || q5 == 2 || q5 == 4){ // Grv RnB Funk
                        Instr = "GrvRnBFunk_EG_80_V2"
                        iBPM = 80;
                    } else if (q5 == 3 || q5 == 5){ // Rock Ballad
                        Instr = "RockBallad_EG_85"
                        iBPM = 85;
                    }
                    break;

                case 2 : // Drousy + AG
                    if (q5 == 1 || q5 == 2 || q5 == 4){ // Grv RnB Funk
                        Instr = "GrvRnBFunk_AG_80"
                        iBPM = 80;
                    } else if (q5 == 3 || q5 == 5){ // Rock Ballad
                        Instr = "RockBallad_AG_85"
                        iBPM = 85;
                    }
                    break;

                case 3 : // Drousy + Keyboard
                    if (q5 == 1 || q5 == 2 || q5 == 4){ // Grv RnB Funk
                        Instr = "GrvRnBFunk_Keyboard_80"
                        iBPM = 80;
                    } else if (q5 == 3 || q5 == 5){ // Rock Ballad
                        Instr = "RockBallad_Keyboard_85"
                        iBPM = 85;
                    }
                    break;

                case 4 : // Drousy + Vi
                    if (q5 == 1 || q5 == 2 || q5 == 4){ // Grv RnB Funk
                        Instr = "GrvRnBFunk_Vi_80"
                        iBPM = 80;
                    } else if (q5 == 3 || q5 == 5){ // Rock Ballad
                        Instr = "RockBallad_Vi_85"
                        iBPM = 85;
                    }
                    break;
                }
            break;
    }


    const ResultDrumset = Category + dSel + BPM;
    const ResultDrumRefBPM = BPM;
    const ResultInstrRefBPM = iBPM;
    const ResultMood = Mood;
    const ResultBass = Instr.split('_')[0] + "_Bass_" + iBPM;
    const ResultInstr = Instr;

    return [ResultDrumset, ResultDrumRefBPM, ResultInstrRefBPM, ResultMood, ResultBass, ResultInstr];
};
