const form = document.getElementById('id-card-form');
const nameSpan = document.getElementById('name');
const enrollmentNoSpan = document.getElementById('enrollment-no');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const firstName = document.getElementById('first-name').value;
  const lastName = document.getElementById('last-name').value;
  const enrollmentNumber = document.getElementById('enrollment-number').value;

  // Update name and enrollment number
  nameSpan.textContent = `${firstName} ${lastName}`;
  enrollmentNoSpan.textContent = enrollmentNumber;

  // (Optional) Add logic to handle portrait orientation (if needed)
  // You might need to adjust CSS styles and potentially use libraries 
  // for image manipulation to achieve this.  
});
