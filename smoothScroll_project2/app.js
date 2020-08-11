function smoothScroll(targetName, duration) {
    let target = document.querySelector(targetName);
    let targetPosition = target.getBoundingClientRect().top;
    let startPosition = window.pageYOffset;
    let distance = targetPosition - startPosition; //거리 
    let startTime = null;

    let ease = (t, b, c, d) => { //이징 function
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    function animation(currentTime) { //이 함수를 1초에 60번 실행
        //currentTime 페이지가 시작된 후 흐른 시간
        if (startTime === null) startTime = currentTime;
        let timeElapsed = currentTime - startTime;
        let run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run); //scrollTo(x,y);
        if (timeElapsed < duration) requestAnimationFrame(animation);
        console.log('Elapsed:' + timeElapsed + "dutation: " + duration)
    }

    requestAnimationFrame(animation);
}

const section1 = document.querySelector('.section1');
section1.addEventListener('click', () => {
    smoothScroll('.section2', 1000);
});

const section2 = document.querySelector('.section2');
section2.addEventListener('click', () => {
    smoothScroll('.section1', 1000);
});