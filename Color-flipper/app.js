const colors=['red','green','blue','yellow','white','grey']
const _btn=document.getElementById('btn')
const color_span=document.querySelector('.color')

_btn.addEventListener('click',function(){change()})

const change=function(){
 const randomColor=colors[Math.floor(Math.random()*6)]
 document.body.style.backgroundColor=randomColor
 color_span.style.color=randomColor
 color_span.style.textShadow='none'
 color_span.innerText=randomColor
}