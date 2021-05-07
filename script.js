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

    document.getElementsByClassName('backdrop')[0].addEventListener('click', (e) => {
        let sidenav = document.getElementsByClassName('side-navbar')[0];
        sidenav.classList.add('hidden');
        e.currentTarget.classList.add('hidden');
    });

    document.getElementsByClassName('nav-toggle')[0].addEventListener('click', (e) => {
        let sidenav = document.getElementsByClassName('side-navbar')[0];
        let backdrop = document.getElementsByClassName('backdrop')[0];
        if (sidenav.style.display === '' || sidenav.style.display === 'none') {
            sidenav.classList.remove('hidden');
            backdrop.classList.remove('hidden');
        } else {
            sidenav.classList.add('hidden');
        }
    });
});