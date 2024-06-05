"use strict";

document.addEventListener("DOMContentLoaded", function () {
  // Get the forms
  const registerForm = document.getElementById("registerForm");

  // Define the fields
  const registerFields = [
    "Username",
    "Password",
    "Email",
    "FirstName",
    "LastName",
    "Address",
    "Barangay",
    "Zip",
  ];

  // Function to get form data
  function getFormData(form, fields) {
    const data = {};
    for (let field of fields) {
      const input = form.elements[field];
      if (!input || input.value === "") {
        alert(`Please fill in the ${field}`);
        return null;
      }
      data[field] = input.value;
    }
    return data;
  }

  // Register form submit event
  registerForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const data = getFormData(this, registerFields);
    if (data) {
      localStorage.setItem("accountData", JSON.stringify(data));
    }
  });
});
