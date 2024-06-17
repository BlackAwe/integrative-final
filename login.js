console.log(localStorage);

// Event listener for getting the form data
document.addEventListener('DOMContentLoaded', function () {
  // Get the forms through the id
  const loginForm = document.getElementById('loginForm');

  // Define the fields that will be stored
  const loginFields = ['Username', 'Password'];

  // Function to get form data
  function getFormData(form, fields) {
    const data = {};
    for (let field of fields) {
      const input = form.elements[field]; // Get form control named 'field' from 'form'
      if (!input || input.value === '') {
        // testing for null value
        alert(`Please fill in the ${field}`);
        return null;
      }
      data[field] = input.value; // Store the field in the data object
    }
    return data;
  }

  // Login form submit event
  loginForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const data = getFormData(this, loginFields);
    if (data) {
      // Check if the user is registered by accessing the localStorage
      const accountData = JSON.parse(localStorage.getItem('accountData'));
      if (
        accountData &&
        accountData.Username === data.Username &&
        accountData.Password === data.Password
      ) {
        // Fade in overlay
        const overlay = document.getElementById('overlay');
        overlay.style.display = 'block';
        setTimeout(function () {
          overlay.style.opacity = 1;
        }, 1);

        // Delay redirection to allow for transition
        setTimeout(function () {
          window.location.href = 'index.html';
        }, 500);
      } else {
        alert('Invalid username or password');
      }
    }
  });
});
