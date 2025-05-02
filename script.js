let p = document.createElement("p");
let submit = document.getElementById("submit");
let form = document.getElementById("myForm12");
let username = document.getElementById("input_name");
let password = document.getElementById("input_password");
let email = document.getElementById("input_email");
let phone = document.getElementById("input_phone");
let profile = document.getElementById("profile");
let h2_username = document.getElementById("h2_username");
let span_username = document.getElementById("span_username");
let span_phone = document.getElementById("span_phone");
let span_gmail = document.getElementById("span_gmail");
let span_passwrod = document.getElementById("span_password");
const show_password = document.getElementById("show_password");
if(form){
    form.addEventListener("submit",
        function(event){
            event.preventDefault();
            let check_username = document.forms["myForm"]["User"].value;
            let code = check_username.charCodeAt(0);
            let check_password = document.forms["myForm"]["password"].value;
            if(!(code >= 65 && code <= 90) && !(code >= 97 && code <= 122)) {
                p.innerHTML = "Please enter a valid username";
                document.getElementById("add_message").appendChild(p);
                document.forms["myForm"]["User"].focus();
                event.stopPropagation();
            }
            else if(check_password.length < 8) {
                p.innerHTML = "Password must be at least 8 characters long";
                document.getElementById("add_message").appendChild(p);
                document.forms["myForm"]["password"].focus();
                event.preventDefault();
            }
            else if(check_password.length > 20) {
                p.innerHTML = "Password must be less than 20 characters long";
                document.getElementById("add_message").appendChild(p);
                document.forms["myForm"]["password"].focus();
                event.preventDefault();
            }
            else{
                sessionStorage.setItem("username", JSON.stringify(username.value));
                sessionStorage.setItem("password", JSON.stringify(password.value)); 
                sessionStorage.setItem("email", JSON.stringify(email?.value));
                sessionStorage.setItem("phone", JSON.stringify(phone?.value));
                sessionStorage.setItem("formSubmitted", "true");
                window.location.assign("index.html");
            }
        }
    );
}
if(profile){
    profile.hidden = true;
}
if(h2_username){
    h2_username.innerHTML = (JSON.parse(sessionStorage.getItem("username"))).charAt(0).toUpperCase() + (JSON.parse(sessionStorage.getItem("username"))).slice(1);
    span_username.innerHTML = (JSON.parse(sessionStorage.getItem("username"))).charAt(0).toUpperCase() + (JSON.parse(sessionStorage.getItem("username"))).slice(1);
    let width = (JSON.parse(sessionStorage.getItem("password"))).length;
    span_passwrod.innerHTML = "*".repeat(width) + " :Password";
    show_password.addEventListener("click", function() {
        if(show_password.innerHTML == "ظهور"){
        span_passwrod.innerHTML = "Password: " + (JSON.parse(sessionStorage.getItem("password")));
        show_password.innerHTML = "اخفاء";
        }
        else{
            span_passwrod.innerHTML = "*".repeat(width) + " :Password";
            show_password.innerHTML = "ظهور";
        }
    });
    if(sessionStorage.getItem("email") != 'undefined'){
        span_gmail.innerHTML = JSON.parse(sessionStorage.getItem("email"));
        span_phone.innerHTML = JSON.parse(sessionStorage.getItem("phone"));
    }
    else{
        span_gmail.innerHTML = "Email: Secured";
        span_phone.innerHTML = "Phone: Secured";
    }

}



document.addEventListener("DOMContentLoaded", function(e) {
    if(sessionStorage.getItem("formSubmitted") === "true") {
        if(document.getElementById("hiddenElement1")){
            document.getElementById("hiddenElement1").hidden = true;
            document.getElementById("hiddenElement2").hidden = true;
            profile.hidden = false;
        }
    }
  });