window.onload = function() {
    var bannerLeft=0;
    var first=1;
    var last;
    var imgCnt=0;
    var $img = $(".banner-wrapper img");
    var $first;
    var $last;
    var IsPaused = 0;

    $img.each(function(){   // 5px 간격으로 배너 처음 위치 시킴
        $(this).css("left",bannerLeft);
        bannerLeft += $(this).width()+0;
        $(this).attr("id", "banner"+(++imgCnt));  // img에 id 속성 추가
    });

    
    if( imgCnt > 2){                //배너 2개 이상이면 이동시킴



        last = imgCnt;

        var Flow = setInterval(function() {
            $img.each(function(){
                $(this).css("left", $(this).position().left-5); // 1px씩 왼쪽으로 이동
            });
            $first = $("#banner"+first);
            $last = $("#banner"+last);
            if($first.position().left < -2000) {    // 제일 앞에 배너 제일 뒤로 옮김
                $first.css("left", $last.position().left + $last.width()-1 );
                first++;
                last++;
                if(last > imgCnt) { last=1; }
                if(first > imgCnt) { first=1; }
            }
        }, 30);   //여기 값을 조정하면 속도를 조정할 수 있다.(위에 1px 이동하는 부분도 조정하면 깔끔하게 변경가능하다           

}
    $('.svg-pause').on('click', function() {
        if(!IsPaused){
            clearInterval(Flow);
            $('.svg-pause').attr('src','./src/play.svg');
            IsPaused = 1;
        } else {
            Flow = setInterval(function() {
                $img.each(function(){
                    $(this).css("left", $(this).position().left-5); // 1px씩 왼쪽으로 이동
                });
                $first = $("#banner"+first);
                $last = $("#banner"+last);
                if($first.position().left < -1000) {    // 제일 앞에 배너 제일 뒤로 옮김
                    $first.css("left", $last.position().left + $last.width()-1 );
                    first++;
                    last++;
                    if(last > imgCnt) { last=1; }
                    if(first > imgCnt) { first=1; }
                }
            }, 30);
            $('.svg-pause').attr('src','./src/pause.svg');
            IsPaused = 0;
        }
        
    });
};



