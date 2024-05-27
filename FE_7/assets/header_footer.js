function bar(){
    const div = document.querySelector('.bar'); // 바 요소를 선택

    // 바의 표시 여부를 확인하여 토글
    if(div.classList.contains('none')){ 
        div.classList.remove('none'); // flex 클래스 제거하여 바 감춤
        div.classList.add('flex'); // none 클래스 추가하여 바 감춤
    }
    else{
        div.classList.remove('flex'); // none 클래스 제거하여 바 표시
        div.classList.add('none'); // flex 클래스 추가하여 바 표시
    }
};
