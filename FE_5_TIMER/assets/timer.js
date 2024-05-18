let timer;
let time = 0;
let h3 = document.querySelector('.text');

function timer_start(){
    timer = setInterval(function(){
        time++;
        console.log("라면을 끓이는 중");

        if (time===60){
            console.log("라면을 끓이는 중 ~ 1분 경과 ~");
        }

        if (time===120){
            console.log("라면을 끓이는 중 ~ 2분 경과 ~");
        }

        if (time === 180){
            console.log("맛있게 드세요🍜");
            clearInterval(timer);
        }
    }, 1000);
}

function timer_stop(){
    clearInterval(timer);
}