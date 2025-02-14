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

// Génération des chats aléatoires avec tes images
document.addEventListener("DOMContentLoaded", function() {
    let catsContainer = document.getElementById("cats");
    let catImages = [
        "https://github.com/user-attachments/assets/0de61b6f-8c13-438a-8dac-c40da1e695bc",
        "https://github.com/user-attachments/assets/32e9d09c-bc48-4827-b39e-43eea39015c3",
        "https://github.com/user-attachments/assets/2361f5c7-1418-42f8-a33b-bea022533388",
        "https://github.com/user-attachments/assets/931f64c7-cfc8-47b8-be4f-dc424a2e6609",
        "https://github.com/user-attachments/assets/d6087dca-4051-4f89-b4ff-9d01307aa233",
        "https://github.com/user-attachments/assets/85f67fe1-4645-44b8-99e2-2037fc5d620f",
        "https://github.com/user-attachments/assets/5c83841e-9dd4-4a08-8cbf-e42a9435ed72",
        "https://github.com/user-attachments/assets/0342707f-d8d8-450c-a1f8-41d2a4e086b2"
    ];

    for (let i = 0; i < 300; i++) {
        let cat = document.createElement("img");
        // Sélectionner une image de chat aléatoire à partir de ton tableau d'images
        cat.src = catImages[Math.floor(Math.random() * catImages.length)];
        cat.classList.add("cat");
        catsContainer.appendChild(cat);

        // Positionner chaque chat de manière aléatoire
        cat.style.left = Math.random() * window.innerWidth + "px";
        cat.style.top = Math.random() * window.innerHeight + "px";
    }

    // Générer les bisous aléatoires
    let kissesContainer = document.getElementById("kisses");
    for (let i = 0; i < 100; i++) {  // Générer 100 bisous
        let kiss = document.createElement("img");
        kiss.src = "https://github.com/user-attachments/assets/76d2b938-089c-4efa-9829-06dce802ed6c";  // URL de ton image de bisous
        kiss.classList.add("kiss");
        kissesContainer.appendChild(kiss);

        // Positionner chaque bisou de manière aléatoire
        kiss.style.left = Math.random() * window.innerWidth + "px";
        kiss.style.top = Math.random() * window.innerHeight + "px";
    }
});