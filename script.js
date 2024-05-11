const form = document.getElementById('id-card-form');
const nameSpan = document.getElementById('name');
const enrollmentNoSpan = document.getElementById('enrollment-no');
const profileImageButton = document.getElementById('profile-image-button');
const profileImageInput = document.getElementById('profile-image');
profileImageButton.addEventListener('click', function() {
  profileImageInput.click();
});
form.addEventListener('submit', function(event) {
  event.preventDefault();

  // Existing code to update name, enrollment number, and handle profile image (if any)

  // Disable the profile image button
  profileImageButton.disabled = true;
});
form.addEventListener('submit', function(event) {
  event.preventDefault();

  // Existing code to update name, enrollment number, and handle profile image (if any)

  // Remove the profile image button from the DOM
  profileImageButton.parentNode.removeChild(profileImageButton);
});
const profilePic = document.getElementById('profile-pic');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const firstName = document.getElementById('first-name').value;
  const lastName = document.getElementById('last-name').value;
  const enrollmentNumber = document.getElementById('enrollment-number').value;

  // Update name and enrollment number
  nameSpan.textContent = `${firstName} ${lastName}`;
  enrollmentNoSpan.textContent = enrollmentNumber;

  // Handle profile image upload
  const file = profileImageInput.files[0];
  if (file) {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = function(e) {
      profilePic.src = e.target.result;
    };
  }
});
