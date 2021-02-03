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

progress.style.width = (actives.length - 1) / (circles.length - 20) * 100 + '%'
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

    progress.style.width = (actives.length - 1) / (circles.length - 40) * 100 + '%'
}


const exploreT = document.querySelector('.dubai-x');
const exploreLeft = document.getElementById('explore-left');
const exploreRight = document.getElementById('explore-right');
const exploreDiv = document.querySelectorAll('.dubai-1');

let idx = 0
var x = window.matchMedia("(max-width: 680px)");
function changeExploreDiv() {
    if(idx > exploreDiv.length - 1) {
        idx = 0
    } else if (idx < 0) {
        idx = exploreDiv - 1
    }
    if(x.matches){
        exploreT.style.transform = `translateX(${-idx * 320 - 12 }px)`
    }
    else {
        exploreT.style.transform = `translateX(${-idx * 260 - 15}px)`
    }
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


const topBar = document.querySelector('.top-bar')
const topBarLogo = document.querySelector('.top-bar .logo')
const lines = document.querySelector(".line .iconify")
const userImage = document.querySelector(".user-img img")
window.addEventListener('scroll', fixBar) 

function fixBar() {
    if(window.scrollY > topBar.offsetHeight + 800) {
        topBar.classList.add('current')
        topBarLogo.style.display = 'block'
        topBarLogo.style.left = "50%"
        topBarLogo.style.top = '2px'
        topBarLogo.style.transform = "translateX(-50%)"
        lines.style.color = "#000"
        userImage.style.width = "45px"
        userImage.style.height = "45px"
    } else {
        topBar.classList.remove('current')
        topBarLogo.style.display = 'none'
        lines.style.color = "#003030"
    }
}

const hamburger = document.querySelector(".hamburger"); 
const navLinks =  document.querySelector(".navbar");
const links = document.querySelectorAll(".navbar li");


hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    links.forEach(link =>  {
        link.classList.toggle("fade");
        hamburger.classList.toggle('toggle');
    });    
});



const TypeWriter = function(txtElement, words, wait = 30000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
}
// TYPE METHOD

TypeWriter.prototype.type = function() {
    // console.log('heloo');
    
    // Current Index Words 
    const current = this.wordIndex % this.words.length;

    // // Get full text of current word
    const fullTxt = this.words[current]

    // Check if deleting
    if(this.isDeleting){
        //Remove Character
        this.txt = fullTxt.substring(0, this.txt.length - 14)
    }
    else {
        //Add Character
        this.txt = fullTxt.substring(0, this.txt.length + 1)
    }
    // Insert text into an element
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    // Type Speed
    let typeSpeed = 500;

    if(this.isDeleting) {
        typeSpeed /= 2;
    }

    // If word is complete
    if(!this.isDeleting && this.txt === fullTxt) {
        // Make pause at end
        typeSpeed = this.wait;
        //Set delete to true
        this.isDeleting = true;
    }
    else if (this.isDeleting && this.txt === '' ){
        this.isDeleting = false;
        //Move to the Next word
        this.wordIndex++;
        // Pause before start typing
        typeSpeed = 200;
    }
        
    setTimeout(() => this.type(), 500)
}


// INIT on DOM Load
document.addEventListener('DOMContentLoaded', init);

// Init App
function init(){
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');

    //Init Typewriter
    new TypeWriter(txtElement, words, wait);
}

