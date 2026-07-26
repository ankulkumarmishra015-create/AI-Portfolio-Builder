function signup(){

let name=document.getElementById("name").value;
let email=document.getElementById("email").value;
let password=document.getElementById("password").value;

if(name=="" || email=="" || password==""){
document.getElementById("msg").innerHTML="Please fill all details";
return;
}

localStorage.setItem("name",name);
localStorage.setItem("email",email);

document.getElementById("msg").innerHTML="Signup Successful";
}
