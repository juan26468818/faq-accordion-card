const button = document.querySelectorAll(".button")
const arrowImg = document.querySelectorAll(".arrow-img")
const answer = document.querySelectorAll(".answer")
let activeQuestion = 0

const active = (e) =>{
    arrowImg[e-1].className += " active-i";
    button[e-1].className += " active-b";
    answer[e-1].className += " active-p";
    if(activeQuestion !== 0 && e !== activeQuestion) {
        button[activeQuestion-1].classList.remove("active-b")
        answer[activeQuestion-1].classList.remove("active-p")
        arrowImg[activeQuestion-1].classList.remove("active-i")
    }
    activeQuestion = e
}