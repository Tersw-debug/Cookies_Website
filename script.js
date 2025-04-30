let p = document.createElement("p");
let submit = document.getElementById("submit");
let form = document.getElementById("myForm12");
let username = document.getElementById("input_name");
let password = document.getElementById("input_password");
let email = document.getElementById("input_email");
let phone = document.getElementById("input_phone");

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
document.addEventListener("DOMContentLoaded", function(e) {
    if(sessionStorage.getItem("formSubmitted") === "true") {
        document.getElementById("hiddenElement1").hidden = true;
        document.getElementById("hiddenElement2").hidden = true;
    }
  });
