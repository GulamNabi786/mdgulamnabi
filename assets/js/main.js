/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*===== REMOVE MENU MOBILE =====*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

/*SCROLL HOME*/
sr.reveal('.home__title', {})
sr.reveal('.home__scroll', {delay: 200})
sr.reveal('.span1', {delay: 400})
sr.reveal('.span2', {delay: 500})
sr.reveal('.span3', {delay: 600})
sr.reveal('.span4', {delay: 700})
sr.reveal('.span5', {delay: 800})
sr.reveal('.span6', {delay: 700})
sr.reveal('.span7', {delay: 600})
sr.reveal('.span8', {delay: 500})
sr.reveal('.span9', {delay: 400})

sr.reveal('.home__img', {origin:'right', delay: 400})
sr.reveal('.freelancer', {origin:'left', delay: 400})


/*SCROLL ABOUT*/
sr.reveal('.about__img', {origin: 'left', delay: 500})
sr.reveal('.about__subtitle', {delay: 300})
sr.reveal('.about__profession', {delay: 400})
sr.reveal('.about__text', {delay: 500})
sr.reveal('.button', {origin:'right', delay: 400})
sr.reveal('.about__social-icon', {delay: 600, interval: 200})

/*SCROLL SKILLS*/
sr.reveal('.skills__subtitle', {origin: 'left'})
sr.reveal('.skills__name', {origin: 'left', distance: '20px', delay: 50, interval: 100})
sr.reveal('.skills__img', {origin: 'right', delay: 400})
sr.reveal('.list1', {origin: 'left', delay: 200})
sr.reveal('.list2', {origin: 'left', delay: 400})
sr.reveal('.list3', {origin: 'left', delay: 600})
sr.reveal('.list4', {origin: 'left', delay: 800})


/*SCROLL PORTFOLIO*/
sr.reveal('.projects__img', {interval: 200})

/*SCROLL CONTACT*/
sr.reveal('.contact__subtitle', {})
sr.reveal('.contact__text', {interval: 200})
sr.reveal('.contact__input', {delay: 400})
sr.reveal('.contact__button', {delay: 600})

/*FOOTER ICON*/
sr.reveal('.footer__social-icon', {delay: 100, interval: 100})



