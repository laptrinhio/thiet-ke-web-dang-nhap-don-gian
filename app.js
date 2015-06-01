var CORRECT_USER = 'laptrinhio';
var CORRECT_PASS = 'ozawa';

var inputUsername = document.getElementById('username');
var inputPassword = document.getElementById('password');

var formLogin = document.getElementById('form-login');

if(formLogin.attachEvent) {
    formLogin.attachEvent('submit', onFormSubmit);
} else {
    formLogin.addEventListener('submit', onFormSubmit);
}


function onFormSubmit(e) {
    if(e.preventDefault) e.preventDefault();

    var username = inputUsername.value;
    var password = inputPassword.value;

    if(username == CORRECT_USER && password == CORRECT_PASS) {
        window.location = 'http://laptrinh.io';
    } else {
        var divErrors = document.getElementById('errors');
        divErrors.innerHTML =   '<div class="alert alert-danger">' +
                                    '<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' +
                                    '<strong>Có lỗi xảy ra:</strong> Tên đăng nhập hoặc mật khẩu không đúng!' +
                                '</div>';
    }

    return false;
}