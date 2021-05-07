window.addEventListener('load', (e) => {
    let scrollPosition = window.pageYOffset;
    window.onscroll = (e) => {
        let currScrollPosition = window.pageYOffset;
        if (currScrollPosition > scrollPosition) {
            document.getElementsByClassName('navbar')[0].style.top = '-30%';
        } else {
            document.getElementsByClassName('navbar')[0].style.top = 0;
        }
        scrollPosition = window.pageYOffset;
        let bottomUps = document.getElementsByClassName('bottom-up');
        [].forEach.call(bottomUps, (el) => {
            if (el.getBoundingClientRect().top < 700 && el.getBoundingClientRect().top > 0) {
                el.classList.add('to-up');
            }
        });

        let skills = document.getElementById('skills');
        let cards = document.getElementsByClassName('grid-card');
        if (skills.getBoundingClientRect().top < 500 && skills.getBoundingClientRect().top > 0) {
            console.log('dd');
            [].forEach.call(cards, (el) => {
                el.classList.add('animate');
            })
        }
    };
});