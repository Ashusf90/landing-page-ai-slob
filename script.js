// Smooth scroll to intro section
document.getElementById('learnMoreBtn').addEventListener('click', function() {
    document.querySelector('.intro').scrollIntoView({ behavior: 'smooth' });
});
document.querySelectorAll(".faq-question").forEach(button => {
  button.addEventListener("click", () => {
    const answer = button.nextElementSibling;

    answer.style.display =
      answer.style.display === "block" ? "none" : "block";
  });
});
