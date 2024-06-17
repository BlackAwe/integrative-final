'use strict';

// Event listener for getting the form data
document.addEventListener('DOMContentLoaded', function () {
  // Get the forms by selecting the id
  const registerForm = document.getElementById('registerForm');

  // Define the fields to be checked
  const registerFields = [
    'Username',
    'Password',
    'Email',
    'FirstName',
    'LastName',
    'Address',
    'Barangay',
    'Zip',
  ];

  // Function to get form data
  function getFormData(form, fields) {
    const data = {};
    for (let field of fields) {
      const input = form.elements[field];
      if (!input || input.value === '') {
        // Checking for null
        alert(`Please fill in the ${field}`);
        return null;
      }
      data[field] = input.value; // Stores the input value in the 'data' object with the field name as the key.
    }
    return data;
  }

  // Register form submit event
  registerForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const data = getFormData(this, registerFields); // Get the form data
    if (data) {
      localStorage.setItem('accountData', JSON.stringify(data));
      // Show the modal
      let successModal = new bootstrap.Modal(
        document.getElementById('successModal')
      );
      successModal.show();
    }
  });
});
