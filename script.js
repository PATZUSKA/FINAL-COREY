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

// Placement aléatoire des bisous
document.addEventListener("DOMContentLoaded", function() {
    let kisses = document.querySelectorAll(".kiss");
    kisses.forEach(kiss => {
        let x = Math.random() * window.innerWidth;
        let y = Math.random() * window.innerHeight;
        kiss.style.left = `${x}px`;
        kiss.style.top = `${y}px`;
    });
});