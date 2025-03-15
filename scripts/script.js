const newsLetterForm = document.querySelector(".newsletter__form")
const emailInput = document.querySelector(".newsletter__email")
const errorMessage = document.querySelector(".error-message")


newsLetterForm.addEventListener("submit", function (event) {
    event.preventDefault();
    validateEmail();
});


function validateEmail() {
    const emailValue = emailInput.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (emailValue === "") {
        showError("Email is required");
    } else if (!emailPattern.test(emailValue)) {
        showError("Please provide a valid email address.");
    } else {
        successMessage();
    }
}


function showError(message) {
    errorMessage.textContent = message;
    errorMessage.style.display = 'block';
    newsLetterForm.style.border = '2px solid var(--clr-soft-red)';
}


function successMessage() {
    errorMessage.textContent = "";
    errorMessage.style.display = "none";
    newsLetterForm.style.border = "2px solid green";
}