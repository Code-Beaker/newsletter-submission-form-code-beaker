const formContainer = document.getElementById("formContainer");
const modal = document.getElementById("modal");
const form = document.getElementById("form");
const submitButton = document.getElementById("submitBtn");
const emailAddressInput = document.getElementById("emailInput");
const userEmailAddress = document.querySelector("#emailAddressText");
const dismissButton = document.getElementById("dismissBtn");
const statusIndicator = document.querySelector("#emailStatusText");
let formIsVisible = true;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!validator.isEmail(emailAddressInput.value)) {
    statusIndicator.textContent = "invalid email format";
    statusIndicator.classList.add("status-error");
  } else {
    statusIndicator.textContent = null;
  }

  if (emailAddressInput.value === "" || emailAddressInput.value.length < 3) {
    console.log(
      `Error in email input: length: ${emailAddressInput.value.length}`
    );
    statusIndicator.textContent = "Please enter an email";
    statusIndicator.classList.add("status-error");
    emailAddressInput.classList.add("form__emailInput-error");
  } else {
    console.log(
      `Error in email input: length: ${emailAddressInput.value.length}`
    );
    document.querySelector(".container").classList.add("form-hide");
    formIsVisible = false;
    statusIndicator.textContent = null;
    statusIndicator.classList.remove("status-error");
    emailAddressInput.classList.remove("form__emailInput-error");
    userEmailAddress.textContent = emailAddressInput.value;
    console.log(`Form visible: ${formIsVisible}`);
    modal.classList.add("modal-show");
  }
});

dismissButton.addEventListener("click", () => {
  formIsVisible = true;
  document.querySelector(".container").classList.remove("form-hide");
  console.log(`Form visible: ${formIsVisible}`);
  form.classList.add("form-show");
  modal.classList.remove("modal-show");
});
