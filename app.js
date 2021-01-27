const body = document.querySelector('.showcase');
const slides = document.querySelectorAll('.slide');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');
const progress = document.getElementById('progress');
const circles = document.querySelectorAll('.circle');


let activeSlide = 0
let interval = setInterval(run, 4000)

rightBtn.addEventListener('click', () => {
    activeSlide++
    if(activeSlide >  slides.length - 1) {
        activeSlide = 0
    }
    setBgToBody()
    setActiveSlide()
})
leftBtn.addEventListener('click', () => {
    activeSlide--
    if(activeSlide < 0) {
        activeSlide = slides.length - 1
    }
    setBgToBody()
    setActiveSlide()
})
function run(){
    activeSlide++
    changeImage()
    resetInterval()
    update1()
}
function changeImage() {
    if(activeSlide > slides.length - 1) {
        activeSlide = 0
    }
    else if (activeSlide < 0) {
        activeSlide = slides.length - 1

    }
    setBgToBody()
    setActiveSlide()
    resetInterval()
}
function update1() {
    circles.forEach((circle, interval) => {
    if(interval <= activeSlide) {
        circle.classList.add('active-step')
    } else {
        circle.classList.remove('active-step')
    }
})
const actives = document.querySelectorAll('.active-step')

progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'
}

function resetInterval(){
    clearInterval(interval)
    interval = setInterval(run, 4000)
}
function setBgToBody(){
    body.style.backgroundColor = slides[activeSlide].style.backgroundImage
}

function setActiveSlide(){
    slides.forEach((slide) => slide.classList.remove('active'))
    slides[activeSlide].classList.add('active')
}

let currentActive = 1 

rightBtn.addEventListener('click', () => {
    currentActive++
    if(currentActive > circles.length) {
        currentActive = 1
    }
    update()
    resetInterval()
    changeImage()
})
leftBtn.addEventListener('click', () => {
    currentActive--
    if(currentActive < 1) {
        currentActive = slides.length
    }
    update()
    resetInterval()
    changeImage()
})
function update() {
        circles.forEach((circle, idx) => {
        if(idx < currentActive) {
            circle.classList.add('active-step')
        } else {
            circle.classList.remove('active-step')
        }
    })
    const actives = document.querySelectorAll('.active-step')

    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'
}


const exploreT = document.querySelector('.dubai-x');
const exploreLeft = document.getElementById('explore-left');
const exploreRight = document.getElementById('explore-right');
const exploreDiv = document.querySelectorAll('.dubai-1');

let idx = 0
function changeExploreDiv() {
    if(idx > exploreDiv.length - 1) {
        idx = 0
    } else if (idx < 0) {
        idx = exploreDiv - 1
    }
    exploreT.style.transform = `translateX(${-idx * 280}px)`
}
function changeExploreDiv(x) {
    if(idx > exploreDiv.length - 1) {
        idx = 0
    } else if (idx < 0) {
        idx = exploreDiv - 1
    }
    exploreT.style.transform = `translateX(${-idx * 320}px)`
}

exploreLeft.addEventListener('click', () => {
    idx--
    if(idx = 0) {
        exploreLeft.disabled = true;
    }
    changeExploreDiv()
})
exploreRight.addEventListener('click', () => {
    idx++
    changeExploreDiv()
})
var x = window.matchMedia("(max-width: 680px)");


