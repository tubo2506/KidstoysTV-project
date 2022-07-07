

// hiện, ẩn mật khẩu đăng nhập
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

var seePw = $('.seepw')
console.log(seePw)
const i = $('.seepw i');
const inputPw = $('.signin__pw')
console.log(i)
seePw.onclick = function(){
    console.log(i)
    if (i.classList.contains('bx-hide')){
        i.classList.remove('bx-hide');
        i.classList.add('bx-show')
        inputPw.type = 'text'
    }
    else if(i.classList.contains('bx-show')){
        i.classList.remove('bx-show');
        i.classList.add('bx-hide')
        inputPw.type = 'password'
    }

}


///////////

var historyBox = document.querySelector('.search__history')

historyBox.onmousedown = function(e){
    e.preventDefault()
}








