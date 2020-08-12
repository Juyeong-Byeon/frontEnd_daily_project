const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    //toggle Nav
    burger.addEventListener('click', (e) => {
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index, arr) => {
                if (link.style.animation)
                    link.style.animation = ``;
                else
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index/5+0.3}s`;
            })
            //Burger animation
        burger.classList.toggle('toggle');

    });




}



navSlide();