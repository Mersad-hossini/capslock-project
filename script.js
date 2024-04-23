let inputPassword = document.getElementById("password");
let warningTxt = document.getElementById("warning");

inputPassword.addEventListener("keyup", (event) => {
    if (event.getModifierState("CapsLock")) {
        warningTxt.style.display = "block";
    } else {
        warningTxt.style.display = "none";
    }
})