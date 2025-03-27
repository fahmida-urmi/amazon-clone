const imgs = document.querySelectorAll('.header-slider ul img')
const prev_btn = document.querySelector('.control_prev')
const next_btn = document.querySelector('.control_next')

let n = 0;

function changeSlide(){
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].style.display = 'none'
    }
    imgs[n].style.display = 'block'
}

changeSlide()


prev_btn.addEventListener('click', () => {
    if(n>0){
        n--;
    }else{
        n = imgs.length - 1
    }
    changeSlide()
})



next_btn.addEventListener('click', () => {
    if(n < imgs.length - 1){
        n++;
    }else{
        n = 0;
    }
    changeSlide()
})

const scrollContainer = document.querySelector('.products')
for (const item of scrollContainer){
    item.addEventListener('wheel', (evt) => {
        evt.preventDefault()
        item.scrollLeft += evt.deltaY
    })
}

document.getElementById("return-btn").addEventListener("click", function() {
    alert("Redirecting to Amazon return process page...");
    window.location.href = "https://www.amazon.com/returns";
});


//signUp function

function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    // Validate confirm password first (before everything else)
    if (confirmPassword != password) {
        alert("Passwords do not match.");
        return false;
    }

    // Validate name
    if (name == "") {
        alert("Please enter your full name.");
        return false;
    }

    // Validate email
    var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (email == "" || !emailRegex.test(email)) {
        alert("Please enter a valid email.");
        return false;
    }

    // Password validation: must be at least 6 characters and contain a mix of letters, numbers, and special characters
    var passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/;
    if (password == "") {
        alert("Please enter a password.");
        return false;
    }
    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return false;
    }
    if (!passwordRegex.test(password)) {
        alert("Password must contain at least one letter, one number, and one special character (!@#$%^&*).");
        return false;
    }

    // If everything is valid
    alert("Sign up successful!");
    return true;
}

function toggleNav() {
    const navBottom = document.getElementById("nav-bottom");

    // Toggle the display of the navigation menu
    if (navBottom.style.display === "block") {
        navBottom.style.display = "none";
    } else {
        navBottom.style.display = "block";
    }
}


