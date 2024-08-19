document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registrationForm");

  form.addEventListener("submit", (e) => {
    let valid = true;

    // Name Validation
    const nameInput = document.getElementById("name");
    const nameError = document.getElementById("nameError");
    if (!/^[a-zA-Z\s]{3,}$/.test(nameInput.value.trim())) {
      nameError.classList.remove("hidden");
      nameInput.classList.add("invalid");
      valid = false;
    } else {
      nameError.classList.add("hidden");
      nameInput.classList.remove("invalid");
    }

    // Email Validation
    const emailInput = document.getElementById("email");
    const emailError = document.getElementById("emailError");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value.trim())) {
      emailError.classList.remove("hidden");
      emailInput.classList.add("invalid");
      valid = false;
    } else {
      emailError.classList.add("hidden");
      emailInput.classList.remove("invalid");
    }

    // Password Validation
    const passwordInput = document.getElementById("password");
    const passwordError = document.getElementById("passwordError");
    if (
      !/^(?=.*[a-zA-Z])(?=.*\d)[A-Za-z\d]{8,}$/.test(passwordInput.value.trim())
    ) {
      passwordError.classList.remove("hidden");
      passwordInput.classList.add("invalid");
      valid = false;
    } else {
      passwordError.classList.add("hidden");
      passwordInput.classList.remove("invalid");
    }

    // Confirm Password Validation
    const confirmPasswordInput = document.getElementById("confirmPassword");
    const confirmPasswordError = document.getElementById(
      "confirmPasswordError"
    );
    if (passwordInput.value.trim() !== confirmPasswordInput.value.trim()) {
      confirmPasswordError.classList.remove("hidden");
      confirmPasswordInput.classList.add("invalid");
      valid = false;
    } else {
      confirmPasswordError.classList.add("hidden");
      confirmPasswordInput.classList.remove("invalid");
    }

    // Date of Birth Validation
    const dobInput = document.getElementById("dob");
    const dobError = document.getElementById("dobError");
    const age = calculateAge(dobInput.value);
    if (age < 18) {
      dobError.classList.remove("hidden");
      dobInput.classList.add("invalid");
      valid = false;
    } else {
      dobError.classList.add("hidden");
      dobInput.classList.remove("invalid");
    }

    if (!valid) {
      e.preventDefault();
    }
  });

  function calculateAge(dob) {
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }
    return age;
  }
});
