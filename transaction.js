// Your existing JavaScript code
let bookingForm = document.getElementById('bookingForm');
bookingForm.addEventListener('submit', function (event) {
  event.preventDefault();

  // Get the form field values
  let bookerFirstName = document.getElementById('bookerFirstName').value;
  let bookerLastName = document.getElementById('bookerLastName').value;
  let bookerEmail = document.getElementById('bookerEmail').value;
  let bookerNumber = document.getElementById('bookerNumber').value;
  let startDate = document.getElementById('startDate').value;
  let endDate = document.getElementById('endDate').value;

  // Your existing booking creation code
  let bookings = JSON.parse(localStorage.getItem('bookings')) || [];
  bookings.push({
    bookerFirstName,
    bookerLastName,
    bookerEmail,
    bookerNumber,
    startDate,
    endDate,
  });
  localStorage.setItem('bookings', JSON.stringify(bookings));

  // Show the success modal
  let bookingModal = new bootstrap.Modal(
    document.getElementById('bookingModal')
  );
  bookingModal.show();

  // Reset the form fields
  bookingForm.reset();

  // Redirect to index.html when the modal is hidden
  $('#bookingModal').on('hidden.bs.modal', function () {
    window.location.href = 'index.html';
  });

  return true;
});