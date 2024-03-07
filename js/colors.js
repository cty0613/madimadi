import GraphicFeature from "./graphics.js";
export default function ColorFeature(q5) {
    var info = sessionStorage.getItem('answers_data');
    var parsedInfo = JSON.parse(info);
    
    console.log(parsedInfo);

    var graphicInfo = GraphicFeature(
        100, // bpm
        parseInt(parsedInfo[4].selectedAns), //q5_genre
        parseInt(parsedInfo[5].selectedAns), //q6_dsel
        parseInt(parsedInfo[1].selectedAns), //q2_chord
        parseInt(parsedInfo[6].selectedAns), //q8_melody
        parseInt(parsedInfo[6].selectedAns));//q7_instr
    
    console.log(graphicInfo);

    var g_chord_style_filter, g_instr_style_filter, g_lines_style_filter, g_drumset_style_filter, g_melody_style_filter
    // var g_lines = '../src/graphics/area_chord_lines.png';
    // var g_instr = graphicInfo[0];
    // var g_chord = graphicInfo[1];
    // var g_drumset = graphicInfo[2];
    // var g_melody = graphicInfo[3];

switch (q5){ //장르
    case 1 : 
        g_lines_style_filter = "invert(87%) sepia(35%) saturate(2113%) hue-rotate(196deg) brightness(101%) contrast(88%)";
        g_instr_style_filter = "invert(61%) sepia(36%) saturate(4174%) hue-rotate(234deg) brightness(93%) contrast(90%)";
        g_chord_style_filter = "invert(25%) sepia(64%) saturate(517%) hue-rotate(239deg) brightness(97%) contrast(84%)";
        g_drumset_style_filter = "invert(90%) sepia(44%) saturate(7476%) hue-rotate(274deg) brightness(79%) contrast(91%)";
        g_melody_style_filter= "invert(87%) sepia(18%) saturate(5981%) hue-rotate(270deg) brightness(102%) contrast(101%)";
        break;
    case 2 : 
        g_lines_style_filter = "invert(77%) sepia(34%) saturate(3412%) hue-rotate(191deg) brightness(95%) contrast(83%)";
        g_instr_style_filter = "invert(34%) sepia(14%) saturate(5377%) hue-rotate(204deg) brightness(105%) contrast(99%)";
        g_chord_style_filter = "invert(15%) sepia(32%) saturate(5195%) hue-rotate(217deg) brightness(85%) contrast(90%)";
        g_drumset_style_filter = "invert(72%) sepia(78%) saturate(5440%) hue-rotate(207deg) brightness(96%) contrast(86%)";
        g_melody_style_filter = "invert(90%) sepia(48%) saturate(1487%) hue-rotate(317deg) brightness(118%) contrast(101%)";
        break;
        case 3 :
        g_lines_style_filter = "invert(51%) sepia(89%) saturate(1067%) hue-rotate(334deg) brightness(103%) contrast(101%)";
        g_instr_style_filter = "invert(33%) sepia(88%) saturate(3230%) hue-rotate(345deg) brightness(94%) contrast(82%)";
        g_chord_style_filter = "invert(8%) sepia(32%) saturate(4278%) hue-rotate(335deg) brightness(104%) contrast(101%)";
        g_drumset_style_filter = "invert(56%) sepia(48%) saturate(4804%) hue-rotate(323deg) brightness(107%) contrast(75%)";
        g_melody_style_filter = "invert(75%) sepia(52%) saturate(583%) hue-rotate(94deg) brightness(87%) contrast(84%)";
        break;
    case 4 :
        g_lines_style_filter = "invert(87%) sepia(11%) saturate(1932%) hue-rotate(104deg) brightness(99%) contrast(91%)";
        g_instr_style_filter = "invert(74%) sepia(10%) saturate(2821%) hue-rotate(101deg) brightness(96%) contrast(79%)";
        g_chord_style_filter = "invert(48%) sepia(22%) saturate(2934%) hue-rotate(145deg) brightness(93%) contrast(85%)";
         g_drumset_style_filter = "invert(79%) sepia(36%) saturate(657%) hue-rotate(171deg) brightness(105%) contrast(102%)";
        g_melody_style_filter = "invert(23%) sepia(86%) saturate(4011%) hue-rotate(334deg) brightness(99%) contrast(89%)";
        break;
    case 5 :
        g_lines_style_filter = "invert(85%) sepia(34%) saturate(443%) hue-rotate(344deg) brightness(105%) contrast(103%)";
        g_instr_style_filter = "invert(89%) sepia(89%) saturate(1479%) hue-rotate(324deg) brightness(102%) contrast(100%)";
        g_chord_style_filter = "invert(49%) sepia(24%) saturate(6794%) hue-rotate(8deg) brightness(95%) contrast(87%)";
        g_drumset_style_filter = "invert(67%) sepia(72%) saturate(440%) hue-rotate(343deg) brightness(104%) contrast(101%)";
        g_melody_style_filter = "invert(33%) sepia(19%) saturate(7277%) hue-rotate(218deg) brightness(93%) contrast(87%)";
        break;
    }

    return [g_lines_style_filter,
            g_instr_style_filter,
            g_chord_style_filter,
            g_drumset_style_filter,
            g_melody_style_filter]
}