const sub = document.querySelectorAll('.sub1')
const gnb = document.querySelectorAll('.gnb > li')
const nav_bg = document.querySelector('.nav_bg')
console.log(sub, gnb, nav_bg)
sub_func('none')
function sub_func (status){
    nav_bg.style.display = status
    for(let i of sub){i.style.display= status}
}
for(let i of gnb){
    console.log(i)
    i.addEventListener('mouseover', function(){
        sub_func('block')
        i.firstElementChild.style.color='#F87D18'
    })
    i.addEventListener('mouseout',function(){
        sub_func('none')
        i.firstElementChild.style.color='#000'
    })
}
const notice_slide = new Swiper ('.notice_slide_wrap #notice_slide',{
    autoplay:{delay:4000},
    loop:true,
    direction:'vertical'
})