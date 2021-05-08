window.addEventListener('load', (e) => {
    let scrollPosition = window.pageYOffset;
    const sideNav = document.getElementsByClassName('side-navbar')[0];
    const backdrop = document.getElementsByClassName('backdrop')[0];
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
            [].forEach.call(cards, (el) => {
                el.classList.add('animate');
            })
        }
    };

    document.getElementsByClassName('backdrop')[0].addEventListener('click', (e) => {
        sideNav.classList.add('hidden');
        e.currentTarget.classList.add('hidden');
    });

    document.getElementsByClassName('nav-toggle')[0].addEventListener('click', (e) => {
        if (sideNav.style.display === '' || sideNav.style.display === 'none') {
            sideNav.classList.remove('hidden');
            backdrop.classList.remove('hidden');
        } else {
            sideNav.classList.add('hidden');
        }
    });

    let sideLinks = document.querySelectorAll('.side-nav a');
    [].forEach.call(sideLinks, (link) => {
        link.addEventListener('click', e => {
            sideNav.classList.add('hidden');
            backdrop.classList.add('hidden');
        });
    });
});