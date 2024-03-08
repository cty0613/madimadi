export default function translate(q2, q5, q7) {
    var buttonset, instr_n, mood_n, genre;

    switch (q7){ // 악기
        case 1 : 
            buttonset = "7-sel-1";
            instr_n = "일렉 기타가";
            break;
        case 2 : 
            buttonset = "7-sel-2";
            instr_n = "어쿠스틱 기타가";
            break;
        case 3 :
            buttonset = "7-sel-3";
            instr_n = "키보드가";
            break;
        case 4 :
            buttonset = "7-sel-4";
            instr_n = "바이올린이";
            break;
    }
    switch (q2){ // 분위기
        case 1 : 
        buttonset = "2-sel-1";
        mood_n = "반짝반짝";
        break;
    case 2 : 
        buttonset = "2-sel-2";
        mood_n = "몰랑몰랑";
        break;
    case 3 :
        buttonset = "2-sel-3";
        mood_n = "퐁실퐁실";
        break;
    case 4 :
        buttonset = "2-sel-4";
        mood_n = "소록소록";
        break;
    }
    switch (q5){ // 장르
        case 1 : 
        buttonset = "5-sel-1";
        genre = "그루브";
        break;
    case 2 : 
        buttonset = "5-sel-2";
        genre = "알앤비";
        break;
    case 3 :
        buttonset = "5-sel-3";
        genre = "락";
        break;
    case 4 :
        buttonset = "5-sel-4";
        genre = "펑크";
        break;
    case 4 :
        buttonset = "5-sel-5";
        genre = "발라드";
        break;
    }

$('.explain').html(`${instr_n} 있는 <br> ${mood_n}한 ${genre} 장르에요` )
}
