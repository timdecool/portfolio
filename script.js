const menuLinks = document.querySelectorAll('.navbar__item');
menuLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        for(let i=0;i<menuLinks.length;i++) {
            if(menuLinks[i].firstElementChild.firstElementChild.classList.contains('active')) menuLinks[i].firstElementChild.firstElementChild.classList.remove('active');
        }
        e.currentTarget.firstElementChild.firstElementChild.classList.add('active');
    })
});