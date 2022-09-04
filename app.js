const $ = selector => document.querySelector(selector)

const number = $('.number')
const decrease = $('.decrease')
const increase = $('.increase')
const reset = $('.reset')

let global = 0;

increase.addEventListener('click', sum)
decrease.addEventListener('click', rest)
reset.addEventListener('click', reset1)

function sum() {
    global++
    number.innerHTML = global;

    if(global > 0) number.style.color = '#00bf72'
    else if(global == 0) number.style.color = '#fff'
}

function rest() {
    global--
    number.innerHTML = global;
    
    if (global < 0) number.style.color = '#f14d3a'
    else if(global == 0) number.style.color = '#fff'
}

function reset1() {
    global = 0
    number.style.color = '#fff'
    number.innerHTML = global;
}
