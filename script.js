// Fonction pour aller à la deuxième page
function goToNextPage() {
    window.location.href = "page2.html";
}

// Animation du bouton "No"
function moveNoButton() {
    let noButton = document.getElementById("no");
    let x = Math.random() * (window.innerWidth - noButton.clientWidth);
    let y = Math.random() * (window.innerHeight - noButton.clientHeight);
    noButton.style.position = "absolute";
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
}

// Génération de 300 chats aléatoires
document.addEventListener("DOMContentLoaded", function() {
    let catsContainer = document.getElementById("cats");
    for (let i = 0; i < 300; i++) {
        let cat = document.createElement("img");
        cat.src = "https://placekitten.com/50/50";  // Utilise une image de chat générique
        cat.classList.add("cat");
        catsContainer.appendChild(cat);

        // Positionner chaque chat de manière aléatoire
        cat.style.position = "absolute";
        cat.style.left = Math.random() * window.innerWidth + "px";
        cat.style.top = Math.random() * window.innerHeight + "px";
    }

    // Générer les bisous aléatoires
    let kissesContainer = document.getElementById("kisses");
    for (let i = 0; i < 100; i++) {  // Générer 100 bisous
        let kiss = document.createElement("img");
        kiss.src = "https://example.com/kiss-icon.png";  // Remplace par l'URL de ton image de bisous
        kiss.classList.add("kiss");
        kissesContainer.appendChild(kiss);

        // Positionner chaque bisou de manière aléatoire
        kiss.style.position = "absolute";
        kiss.style.left = Math.random() * window.innerWidth + "px";
        kiss.style.top = Math.random() * window.innerHeight + "px";
    }
});