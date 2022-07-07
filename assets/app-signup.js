

// hiện, ẩn mật khẩu đăng nhập
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const seePw = $('.seepw')
const inputPw = $('.signup__pw')
const inputPwConfirm = $('.signup__pwconfirm')

seePw.onclick = function(){
 if (seePw.classList.contains('show')){
    seePw.classList.remove('show');
    seePw.classList.add('hide');
    seePw.innerText= 'Ẩn mật khẩu';
    inputPw.type = 'text';
    inputPwConfirm.type = 'text';
 }
 else if(seePw.classList.contains('hide')){
    seePw.classList.remove('hide');
    seePw.classList.add('show');
    seePw.innerText='Hiện mật khẩu'
    inputPw.type = 'password';
    inputPwConfirm.type = 'password';
 }

}







