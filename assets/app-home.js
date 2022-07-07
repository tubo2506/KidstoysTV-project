const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const bttnSliderL = $('.dieuhuong-l');
const bttnSliderR = $('.dieuhuong-r');
const bannerItem = $('.banner');
console.log(bannerItem)
var i = 3
// bannerItem.setTimeout(function(){
//  i -=1;
//  bannerItem.src = `/assets/sanpham/banner/${i}.png`
// },3000)
bttnSliderL.onclick = function(){
    if (0<i){
    bannerItem.src = `/assets/sanpham/banner/${i}.png`
    i -= 1
    }
    else{
        return i = 4
    }
    console.log(i)

}
bttnSliderR.onclick = function(){
    if (j<4){
    bannerItem.src = `/assets/sanpham/banner/${i}.png`
    i += 1
    }
    else{
        return j = 0
    }
    console.log(j)

}





/////////////////// menu dt show
const bttnMenu = $('.menu-phone');
const menu = $('#menu');
const contact = $('.sublh-cont');
const divSignIn = $('.header__acc-list')
const divCart = $('.header__cart')

bttnMenu.onclick = function(){
    if(menu.classList.contains('show')){
        $('#menu.show').classList.remove('show')
    }
    else{
        menu.classList.add('show')  
    }
    if(contact.classList.contains('show')){
        $('.sublh-cont.show').classList.remove('show')
    }
    else{
        contact.classList.add('show')  
    }
    if(divCart.classList.contains('show')){
        $('.header__cart.show').classList.remove('show');
    }
    else{
        divCart.classList.add('show')  
    }
    if(divSignIn.classList.contains('show')){
        $('.header__acc-list').classList.remove('show');
    }
    else{
        divSignIn.classList.add('show')  
    }

    
}














