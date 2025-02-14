// Fonction pour aller à la deuxième page
function goToNextPage() {
    window.location.href = "page2.html";
}

// Animation du bouton "No"
document.getElementById("no").addEventListener("mouseover", function() {
    let x = Math.random() * (window.innerWidth - this.clientWidth);
    let y = Math.random() * (window.innerHeight - this.clientHeight);
    this.style.position = "absolute";
    this.style.left = `${x}px`;
    this.style.top = `${y}px`;
});

// Placement aléatoire des chats
document.addEventListener("DOMContentLoaded", function() {
    let cats = document.querySelectorAll(".cat");
    cats.forEach(cat => {
        let x = Math.random() * window.innerWidth;
        let y = Math.random() * window.innerHeight;
        cat.style.left = `${x}px`;
        cat.style.top = `${y}px`;
    });
});