console.log(localStorage);

document.addEventListener("DOMContentLoaded", function () {
  // Get the forms
  const loginForm = document.getElementById("loginForm");

  // Define the fields
  const loginFields = ["Username", "Password"];

  // Function to get form data
  function getFormData(form, fields) {
    const data = {};
    for (let field of fields) {
      const input = form.elements[field];
      console.log(input);
      if (!input || input.value === "") {
        alert(`Please fill in the ${field}`);
        return null;
      }
      data[field] = input.value;
    }
    return data;
  }

  // Login form submit event
  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const data = getFormData(this, loginFields);
    if (data) {
      const storedData = JSON.parse(localStorage.getItem("accountData"));
      if (
        storedData &&
        storedData.Username === data.Username &&
        storedData.Password === data.Password
      ) {
        alert("Login successful");
        window.location.href = "index.html";
      } else {
        alert("Invalid username or password");
        console.log("Invalid");
      }
    }
  });
});
