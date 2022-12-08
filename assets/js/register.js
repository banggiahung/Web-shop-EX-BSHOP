
function captchaGenerate() {
    var strings = (Math.random() + 1).toString(36).substring(2, 7);
    document.getElementById("captchaString").value = strings;

}
function validate() {
    var userString = document.getElementById("userString").value;
    var captchaString = document.getElementById("captchaString").value;
    if (userString === captchaString) {
        console.log('ok')
    }
    else {
        alert("Không đúng mã Capcha");
    }
}

function signUp() {
    var emailN = document.getElementById("email").value;

    var passWord = document.getElementById("pass").value;

    var rePass = document.getElementById("repass").value;

    localStorage.Email = emailN;

    localStorage.password = passWord;

    localStorage.Repass = rePass;

    if (rePass == passWord) {
        alert('ĐĂNG KÍ THÀNH CÔNG');
        window.location.href = 'login.html';
        return false;
    }
    else {
        alert("nhap lai dung thong tin")
    }

}

function logIn() {

    var emailMain = document.getElementById("email").value;
    var passWordMain = document.getElementById("pass").value;

    var email1 = localStorage.getItem("Email");
    var passWord = localStorage.getItem("password");

    if (emailMain == email1 && passWordMain == passWord) {
        location.href = ' http://127.0.0.1:5501/index.html';
        return false;
    }
    else {
        alert("sai");
    }


}

function forgot() {
    var oldEmail = document.getElementById("email").value;
    var passWordNew = document.getElementById("pass").value;
    var rePassNew = document.getElementById("repass").value;

    var emailOld1 = localStorage.getItem("Email");
    if (oldEmail == emailOld1) {
        localStorage.password = passWordNew;
        localStorage.Repass = rePassNew;
        location.href = 'login.html';
        return false;

    }
    else {
        alert('sai');
    }
}

// 
const btn = document.getElementById('btn');
btn.addEventListener('click', () => {
    const form = document.getElementById('captchaString');
    const form2 = document.getElementById('userString');
    const bDer1 = document.getElementById('break');
    const btnReg = document.getElementById('btn');

    if (form.style.display === 'none' && form2.style.display === 'none') {
        // 👇️ this SHOWS the form
        form.style.display = 'block';
        btnReg.innerHTML = "Thu nhỏ";

        form2.style.display = 'block';
    } else {
        // 👇️ this HIDES the form
        form.style.display = 'none';
        btnReg.innerHTML = "Lấy capcha!";

        form2.style.display = 'none';

    }

});

