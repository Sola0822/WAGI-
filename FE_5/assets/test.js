//document.addEventListener
var pink=0;
var blue =0;

function colorChange(){
    const div = document.querySelector('.box'); //도큐먼트 안에서 찾아주는 함수

    if(div.classList.contains('blue')){ // contains -> 해당 값이 포함되어 있는가, 클래스 리스트 안에
        div.classList.add('pink'); // add -> pink 값 추가
        div.classList.remove('blue'); // remove -> blue 값 추가
        console.log(pink);
        pink++;
    }
    else{
        div.classList.add('blue'); // add -> pink 값 추가
        div.classList.remove('pink'); // remove -> blue 값 추가
        console.log(blue);
        blue++;
    }
    
    let button = document.querySelector('.text');

    if(h1.classList.contains('black')){
        h1.classList.add('brown');
        h1.classList.remove('black');
    }
    else{
        h1.classList.add('black');
        h1.classList.remove('brown');
    }

    if(h1.innerText === '안녕하세요!'){ //자바스크립트에서는 같다 3개, 대입은 1개, 텍스트는 ''따옴표 활용, 클래스 명확히 하기
        h1.innerText = '수진입니다.'
    } else{
        h1.innerText ='안녕하세요!'
    }
}