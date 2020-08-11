function scrollAppear() {
    let introText = document.querySelector('.intro-text');
    let introPosition = introText.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 1.3; //디바이스 화면의 Y축 해상도

    if (introPosition < screenPosition) {
        introText.classList.add('intro-appear'); //class 속성 추가 메서드
    } else {
        introText.classList.remove('intro-appear');
    }

}

window.addEventListener('scroll', scrollAppear);