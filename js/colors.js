import GraphicFeature from "./graphics.js";
export default function ColorFeature(q5) {

    var g_chord_style_fill, g_instr_style_fill, g_lines_style_fill, g_drumset_style_fill, g_melody_style_fill

switch (q5){ //장르
    case 1 : // Grv
        g_lines_style_fill = "#D9B3F0"; // Lines
        g_instr_style_fill = "#C36EE1"; // Pattern
        g_chord_style_fill = "#6E437E"; // Chord
        g_drumset_style_fill = "#C381B5"; // Drumset
        g_melody_style_fill=  "#FF89FA" // Melody
        break;
    case 2 : // RnB
        g_lines_style_fill = "#8EA0DF" // Lines
        g_instr_style_fill = "#4164E0" // Pattern
        g_chord_style_fill = "#1C317A" // Chord
        g_drumset_style_fill = "#6480E4" // Drumset
        g_melody_style_fill = "#FFEE58" // Melody
        break;
    case 3 : // Rock
        g_lines_style_fill = "#FF783E" // Lines
        g_instr_style_fill = "#DB4537" // Pattern 
        g_chord_style_fill = "#4A070C" // Chord
        g_drumset_style_fill = "#DF666D" // Drumset
        g_melody_style_fill = "#37D090" // Melody
        break;
    case 4 : // Funk
        g_lines_style_fill = "#5EF1CD" // Lines
        g_instr_style_fill = "#37D090" // Pattern
        g_chord_style_fill = "#139FA7" // Chord
        g_drumset_style_fill = "#9DE7FF" // Drumset
        g_melody_style_fill = "#EE2857" // Melody
        break;
    case 5 : // Ballad
        g_lines_style_fill = "#FFEAA0" // Lines
        g_instr_style_fill = "#FFD43A" // Pattern
        g_chord_style_fill = "#D36E11" // Chord
        g_drumset_style_fill = "#FFB74A" // Drumset
        g_melody_style_fill = "#4164E0" // Melody
        break;
    }

    return [g_lines_style_fill,
            g_instr_style_fill,
            g_chord_style_fill,
            g_drumset_style_fill,
            g_melody_style_fill]
}