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

// Fonction pour afficher les messages des lettres
function showMessage(type) {
    let messages = {
        "sad": "I don't know what you're going through. But, just remember: You don't have to be perfect. It's okay to be having a bad day. Life goes on. Let's get through this together.",
        "weak": "I'm proud of you. Most people don't know your story, but I do. You're strong, and I'm proud of the man you are becoming.",
        "love": "I like you without a reason. If love had a reason, it would fade when the reason disappears. I love you because you are you.",
        "stupid": "WHY DID YOU CLICK ON THAT? YOU’RE NOT DUMB AYO!"
    };
    alert(messages[type]);
}

// Génération de 300 chats aléatoires
document.addEventListener("DOMContentLoaded", function() {
    let catsContainer = document.getElementById("cats");
    for (let i = 0; i < 300; i++) {
        let cat = document.createElement("img");
        cat.src = "https://github.com/user-attachments/assets/2361f5c7-1418-42f8-a33b-bea022533388"; // Remplace cette URL par celle du chat que tu souhaites
        cat.classList.add("cat");
        catsContainer.appendChild(cat);

        // Positionner chaque chat de manière aléatoire
        cat.style.position = "absolute";
        cat.style.left = Math.random() * window.innerWidth + "px";
        cat.style.top = Math.random() * window.innerHeight + "px";
    }
});