let nav       = document.querySelectorAll(".links li");
let article   = document.querySelector(".article");
let gallery   = document.querySelector(".Gallery");
let feature   = document.querySelector(".feature");
let other     = document.querySelector(".testimonal");
let skill     = document.querySelector(".skill");
let work      = document.querySelector(".works");
let state_tag = document.querySelector(".state");
let request   = document.querySelector(".request");

let range = document.querySelectorAll(".progress span");
let state = document.querySelectorAll(".project h1");

let count = false;
let stop = false;
window.onscroll = function(){
    if(window.scrollY >= article.offsetTop && window.scrollY < gallery.offsetTop - 100){
        nav.forEach(e => e.classList.remove("focus"))
        nav[0].classList.add("focus")
    }
    else if(window.scrollY >= gallery.offsetTop -100  && window.scrollY < feature.offsetTop -120){
        nav.forEach(e => e.classList.remove("focus"))
        nav[1].classList.add("focus")
    }
    else if(window.scrollY >= feature.offsetTop -120 && window.scrollY < other.offsetTop - 100){
        nav.forEach(e => e.classList.remove("focus"))
        nav[2].classList.add("focus")
    }
    else if(window.scrollY >= other.offsetTop -100){
        nav.forEach(e => e.classList.remove("focus"))
        nav[3].classList.add("focus")
    }
    else{
        nav.forEach(e => e.classList.remove("focus"))
    }
/* ====================================== Ranging ====================================== */
    if(window.scrollY >= skill.offsetTop -300 && window.scrollY < work.offsetTop -300){
        range.forEach((e) => {e.style.width = e.dataset.width;})
    }
    else{
        range.forEach((e) => {e.style.width = 0;})
    }
/* ===================================================================================== */
/* ===================================== state ========================================= */
    if(window.scrollY >= state_tag.offsetTop -200 && window.scrollY < request.offsetTop){
        if(!count){
            state.forEach((e) => counter(e))
        }
        count = true;
    }
}
/* ===================================================================================== */

function counter(max_size){
    let max = Number(max_size.getAttribute("data"));
    let number_count = setInterval(() => {
        max_size.textContent++;
        if(max_size.textContent == max){
            clearInterval(number_count);
        }
    }, 3);
}
function decrease(max_size){
    let number_count = setInterval(() => {
        max_size.textContent--;
        if(max_size.textContent === 0){
            clearInterval(number_count);
        }
    }, 3);
}
