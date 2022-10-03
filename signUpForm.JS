const alert = document.querySelector(".password-alert");
const password = document.querySelector("#password");
const confirm = document.querySelector("#confirm");


confirm.addEventListener("input", passwordCheck );
password.addEventListener("input", passwordCheck );


function passwordCheck(){
    if(password.value === "" || confirm.value === ""){
        alert.textContent = ''
        confirm.style.outline ="1px solid red"
    }
    else if(confirm.value != password.value){
        alert.textContent = "Password don't match";
        alert.style.color ="red";
        confirm.style.outline = "1px solid red";
    } else if (confirm.value = password.value){
        alert.textContent ="OKAY";
        alert.style.color ="green";
        confirm.style.outline = "1px solid green";
    }
}