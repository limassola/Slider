const upbtn = document.querySelector('.up-button')
const downbtn = document.querySelector('.down-button')
const sidebar=document.querySelector('.sidebar')
const mainSLide=document.querySelector('.main-slide')
const container=document.querySelector('.container')
const slidesCount=mainSLide.querySelectorAll('div').length

let activeSlideIndex = 0

sidebar.style.top = `-${(slidesCount-1)*100}vh`

upbtn.addEventListener('click', ()=>{
    changeSlide('up')
})

downbtn.addEventListener('click', ()=>{
    changeSlide('down')    
})

document.addEventListener('keydown', event=>{
    if (event.key === 'ArrowUp') {
        changeSlide('up')
    } else if (event.key === 'ArrowDown'){
        changeSlide('down')
    }
    
})

function changeSlide(direction) {
 if (direction === 'up'){
     activeSlideIndex++
     if(activeSlideIndex === slidesCount)
     {
         activeSlideIndex = 0
     }
 }else if (direction === 'down'){
     activeSlideIndex --
     if (activeSlideIndex < 0){
         activeSlideIndex = slidesCount-1
     }
 }

const height = container.clientHeight

 mainSLide.style.transform= `translateY(-${activeSlideIndex * height}px)`
 sidebar.style.transform= `translateY(${activeSlideIndex * height}px)`
}