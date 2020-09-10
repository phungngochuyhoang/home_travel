// handle condition in form
var err = Array.from(document.querySelectorAll('.err'));
var inputName = document.querySelector('#name');
var inputPhone = document.querySelector('#phone');
var inputEmail = document.querySelector('#email');
var btnSubmit = document.querySelector('#submit');

inputName.addEventListener('change', handleName); 
inputPhone.addEventListener('change', handlePhone);
inputEmail.addEventListener('change', handleEmail);

// prevent sending data
btnSubmit.addEventListener('click', function(e) {
    e.preventDefault();
});



function handleName() {
    var arr = inputName.value.split('');
    var countFalse = 0;
    var countNull = 0;
    arr.reduce((pre, cur) => {
        pre = cur;
        if(Number.isInteger(Number(pre))) {
            countFalse += 1;
        }  
        if(pre == ' ') {
            countNull += 1;
        }
        return countFalse, countNull;
    }, '');
    if(inputName.length > 0) {
        if(countFalse - countNull > 0) {
            err[0].innerHTML = '<i class="fa fa-exclamation-circle icon-err"></i> Họ tên không đúng';
         }else{
             err[0].innerHTML = '<i class="fa fa-check-circle icon-check-ok"></i>';
         }
    }else {
        err[0].innerHTML = '<i class="fa fa-exclamation-circle icon-err"></i> Họ tên không đúng';
    }
}


function handlePhone() {
    if(inputPhone.value.length >= 10 && inputPhone.value.length <= 11) {
        if(Number.isInteger(Number(inputPhone.value))) {
            err[1].innerHTML = '<i class="fa fa-check-circle icon-check-ok"></i>';
        }else {
            err[1].innerHTML = '<i class="fa fa-exclamation-circle icon-err"></i> Số điện thoại không đúng';
        }
    }else {
        err[1].innerHTML = '<i class="fa fa-exclamation-circle icon-err"></i> Số điện thoại không đúng';
    }
}

function handleEmail() {
    var reg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if(reg.test(inputEmail.value)) {
        err[2].innerHTML = '<i class="fa fa-check-circle icon-check-ok"></i>';
    }else {
        err[2].innerHTML = '<i class="fa fa-exclamation-circle icon-err"></i> Email không đúng';
    }
}
