document.addEventListener('DOMContentLoaded', function () {
  let bookingsContainer = document.getElementById('bookingsContainer');
  if (bookingsContainer) {
    let bookings = JSON.parse(localStorage.getItem('bookings')) || [];

    bookings.forEach(function (booking, index) {
      let bookingDiv = document.createElement('div');
      bookingDiv.className = 'card mb-3 shadow-sm';
      bookingDiv.innerHTML = `
        <div class="card-header py-2">
            <h5 class="my-0 fw-normal">Booking ${index + 1}</h5>
        </div>
        <div class="card-body">
            <h6 class="card-title pricing-card-title">${
              booking.bookerFirstName
            } ${booking.bookerLastName}</h6>
            <div class="booking-details d-none">
                <ul class="list-unstyled mt-2 mb-3">
                    <li>Email: ${booking.bookerEmail}</li>
                    <li>Number: ${booking.bookerNumber}</li>
                    <li>Start Date: ${booking.startDate}</li>
                    <li>End Date: ${booking.endDate}</li>
                </ul>
            </div>
           <button type="button" class="btn btn-primary btn-sm view-details" style="width: auto; margin-right: 10px;">View Details</button>
<button type="button" class="btn btn-danger btn-sm delete-booking" style="width: auto;">Delete Booking</button>
        </div>
    `;
      bookingsContainer.appendChild(bookingDiv);

      // Add an event listener to the view details button
      let viewDetailsButton = bookingDiv.querySelector('.view-details');
      let detailsDiv = bookingDiv.querySelector('.booking-details');
      viewDetailsButton.addEventListener('click', function () {
        detailsDiv.classList.toggle('d-none');
      });

      // Add an event listener to the delete booking button
      let deleteBookingButton = bookingDiv.querySelector('.delete-booking');
      deleteBookingButton.addEventListener('click', function () {
        bookings.splice(index, 1);
        localStorage.setItem('bookings', JSON.stringify(bookings));
        bookingDiv.remove();
      });
    });
  }
});
