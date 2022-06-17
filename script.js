//SECTION 1

//prevent default
document.querySelectorAll('.controls a , .iphone-btns a , .move-arrow').forEach( (element) => {
    element.addEventListener('click' , (event) => {
        event.preventDefault();
    })
})
//prevent default
//cube
let x = 0 ;
let y = 20 ;
let z = 0 ;

const cube = document.querySelector('.cube');
const control = document.querySelector('.controls');
let bool = true ;
let rotation;


function playPause () {
    if (bool) {
        rotation = setInterval ( () => {
                                            cube.style.transform = `rotateX(${x}deg) rotateY(${y++}deg) rotateZ(${z}deg)`
                                        },100
                                )
    } else {
        clearInterval(rotation);
    }
}
playPause ()
control.addEventListener('mouseover' , () => {
    bool = false;
    playPause ();
})
control.addEventListener('mouseout' , () => {
    bool = true;
    playPause ();
})
//cube

//control
const arrowUp = document.querySelector('.controls a:nth-child(1)');
const arrowRight = document.querySelector('.controls a:nth-child(2)');
const arrowDown = document.querySelector('.controls a:nth-child(3)');
const arrowLeft = document.querySelector('.controls a:nth-child(4)');
const arrowZ = document.querySelector('.controls a:nth-child(5)');
const arrowZ2 = document.querySelector('.controls a:nth-child(6)');

arrowUp.addEventListener('click' , () => {
    cube.style.transform = `rotateX(${x+=20}deg) rotateY(${y}deg) rotateZ(${z}deg)`
})
arrowDown.addEventListener('click' , () => {
    cube.style.transform = `rotateX(${x-=20}deg) rotateY(${y}deg) rotateZ(${z}deg)`
})
arrowRight.addEventListener('click' , () => {
    cube.style.transform = `rotateX(${x}deg) rotateY(${y+=20}deg) rotateZ(${z}deg)`
})
arrowLeft.addEventListener('click' , () => {
    cube.style.transform = `rotateX(${x}deg) rotateY(${y-=20}deg) rotateZ(${z}deg)`
})
arrowZ.addEventListener('click' , () => {
    cube.style.transform = `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z+=20}deg)`
})
arrowZ2.addEventListener('click' , () => {
    cube.style.transform = `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z-=20}deg)`
})
//control

//slideshow
const slideshow = document.querySelector('.slideshow')
let div;
for (let i = 1 ; i <= 5 ; i++) {
    div = document.createElement('div');
    div.style.backgroundImage = `url('images/slideshow/section-1-bg-${i}.jpg')`;
    slideshow.appendChild(div);
}

const images = document.querySelectorAll('.slideshow div');
let index = 0 ;
images[index].classList.add('show');
setInterval( () => {
    images[index].classList.remove('show');
    if (index === images.length - 1) {
        index = 0 ;
        images[index].classList.add('show');
    }
    else {
        index++;
        images[index].classList.add('show');
    }
    
},20000)
//slideshow



//SECTION 1
//SECTION 3

const content = document.querySelector('.section-3-content');
window.addEventListener('scroll' , () => {

    if (window.scrollY + window.innerHeight >= content.offsetTop +  content.offsetHeight/2) {
       
        content.classList.add('change');
    } else {
        content.classList.remove('change');
    }
})
//SECTION 3

//SECTION 4
const watchUp = document.querySelector('.watch-up');
const watchRight = document.querySelector('.watch-right');
const watchDown = document.querySelector('.watch-down');
const watchLeft = document.querySelector('.watch-left');

let moveX = 0 ;
let moveY = 0 ;


const bandContainer = document.querySelector('.bands');
const bands = document.querySelectorAll('.band-img');
const maxHorizontalTranslation = Math.floor(bands.length / 2) * bands[0].offsetWidth;

function checkTranslationX() {
    if (moveX === maxHorizontalTranslation) {
        watchRight.classList.add('hide');
    } else {
        watchRight.classList.remove('hide');
    }
    if (moveX === maxHorizontalTranslation * -1) {
        watchLeft.classList.add('hide');
    } else {
        watchLeft.classList.remove('hide');
        
    }
}


watchRight.addEventListener('click' , () => {
    moveX += bands[0].offsetWidth ;
    bandContainer.style.transform = `translateX(${moveX}px)`;
    checkTranslationX();
})
watchLeft.addEventListener('click' , () => {
    moveX -= bands[0].offsetWidth ;
    bandContainer.style.transform = `translateX(${moveX}px)`;
    checkTranslationX();
})


const caseContainer = document.querySelector('.cases');
const cases = document.querySelectorAll('.case-img');
const maxVerticalTranslation = Math.floor(cases.length / 2) * cases[0].offsetHeight;

function checkTranslationY() {
    if (moveY === maxVerticalTranslation) {
        watchDown.classList.add('hide');
    } else {
        watchDown.classList.remove('hide');
    }
    if (moveY === maxVerticalTranslation * -1) {
        watchUp.classList.add('hide');
    } else {
        watchUp.classList.remove('hide');
    }
}


watchUp.addEventListener('click' , () => {
    moveY -= bands[0].offsetHeight ;
    caseContainer.style.transform = `translateY(${moveY}px)`;
    checkTranslationY();
})
watchDown.addEventListener('click' , () => {
    moveY += bands[0].offsetHeight ;
    caseContainer.style.transform = `translateY(${moveY}px)`;
    checkTranslationY();
})






//SECTION 4