// Select the button
const toggleBtn = document.getElementById("theme-toggle");

// Add click event listener
toggleBtn.addEventListener("click", function() {
    // Toggle the 'dark' class on the body
    document.body.classList.toggle("dark");
});