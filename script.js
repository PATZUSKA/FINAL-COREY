document.getElementById("no-button").addEventListener("click", function() {
    this.style.animation = "shake 0.5s infinite alternate";
});

document.getElementById("yes-button").addEventListener("click", function() {
    window.location.href = "page2.html"; // Aller à la deuxième page
});