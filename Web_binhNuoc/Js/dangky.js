
function checkFullName(){
    let fn = $("#hoten").val();
    let fnc = document.getElementById('hoten');
    let reg = /^([A-Z]{1}[a-z]*\s{1})*([A-Z]{1}[a-z]*)$/;
    if (fn.trim() == "" || !reg.test(fn))
    {   
        fnc.classList.add('warning');
        return false; 
    }
    else 
    {
        fnc.classList.remove('warning')
        return true;
    }
}

function kiemtraMatKhau() {
    let text = $("#pass").val();
    let mkc = document.getElementById('pass');
    let regex = /^[a-z\d]{6,}$/i; 
    if (text.trim() == "" || !regex.test(text)) {
        mkc.classList.add('warning');
        return false;
    }
    else {
        mkc.classList.remove('warning');
        return true;  
    }
}

function kiemtraNLMatKhau() {
    let mk = $("#pass").val();
    let mk2 = $("#repass").val();
    let mk2c = document.getElementById('repass');
    if (mk != mk2) {
        mk2c.classList.add('warning');
        return false;
    }
    else
        mk2c.classList.remove('warning');
        return true;
}

function kiemTraTenDN() {
    let tenDN = $("#tên_tk").val();
    let tenDNc = document.getElementById('tên_tk')
    let regexTenDN = /^[\w]{2,}$/i;
    if (tenDN.trim() == "" || !regexTenDN.test(tenDN)) {
        tenDNc.classList.add('warning');
        return false;
    }
    else {
        tenDNc.classList.remove('warning');
        return true;
    }
}

function kiemtraDienThoai() {
    let text = $("#std").val();
    let textc = document.getElementById('std');
    let regex = /^[0]{1}[\d]{9}$/
    if (text.trim() == "" || !regex.test(text)) {
        textc.classList.add('warning');
        return false;
    }
    else {
        textc.classList.remove('warning');
        return true;
    }
}

function kiemtra() {
    if ( !checkFullName() || !kiemtraDienThoai() || !kiemTraTenDN() || !kiemtraMatKhau() || !kiemtraNLMatKhau())
      {
        alert('Nhập sai thông tin!');
        return false;
      }  
    else {
        showthongtin();
        return true;
    }
}

function showthongtin(){
    let fn = $("#hoten").val();
    let pass = $("#pass").val();
    let repass = $("#repass").val();
    let tentk = $("#tên_tk").val();
    let sdt = $("#std").val();
    confirm("THÔNG TIN ĐĂNG KÝ\n\nHọ Tên:" + fn + "\n" + "Số điện thoại:" + sdt + "\n" + "Tên Tài Khoản: " + tentk + "\n" +"Mật khẩu:" + pass + "\n" + "Mật khẩu nhập lại: " + repass )
}

