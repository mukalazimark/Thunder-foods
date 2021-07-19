var eye=document.getElementById('eye');
var pwd=document.getElementById('pwd');
eye.addEventListener('click',()=>{
    eye.classList.toggle("fa-eye-slash");
    // pwd.setAttribute('type','text');
    if(pwd.type=='password'){
        pwd.setAttribute('type','text');
    }else{
        pwd.setAttribute('type','password');
    }
});