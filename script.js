// Smooth scroll to intro section
document.getElementById('learnMoreBtn').addEventListener('click', function() {
    document.querySelector('.intro').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById("feedbackForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Please fill all fields");
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    alert("Enter a valid email");
    return;
  }

  document.getElementById("successMsg").style.display = "block";

  // Clear form
  document.getElementById("feedbackForm").reset();
});
