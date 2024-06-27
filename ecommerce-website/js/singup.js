function signup(){
    let uname = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let cpassword = document.getElementById("confirm-password").value;

    window.localStorage.setItem("in_uname",uname);

    if(password == cpassword){
       window.localStorage.setItem("in_password",password);
       window.localStorage.setItem("in_cpassword",cpassword);
       window.location.href='home.html';

    }

    else {
        window.alert("please enter valid password");
    }

}