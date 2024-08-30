// Contact Form Submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Simple validation
    if(name === '' || email === '' || message === '') {
        displayMessage('Please fill in all fields.', 'danger');
        return;
    }

    // Here you can add code to send the form data to your email or server
    // For demonstration, we'll just display a success message

    displayMessage('Thank you for your message! I will get back to you soon.', 'success');

    // Reset form
    document.getElementById('contactForm').reset();
    document.addEventListener('DOMContentLoaded', (event) => {
      alert('Welcome to my website!');
    });

});

// Function to display messages
function displayMessage(msg, type) {
    const messageDiv = document.getElementById('formMessage');
    messageDiv.innerHTML = `<div class="alert alert-${type}" role="alert">${msg}</div>`;
}
