// Messages des lettres
const messages = {
    letter1: "Take a break and rest, my love. Everything will be okay, and I'll be here when you feel better.",
    letter2: "Whenever you're feeling down, remember that I care about you. Don't hesitate to lean on me, I’m always here for you.",
    letter3: "We all make mistakes sometimes, but that doesn’t make you any less amazing. You're incredible, just as you are.",
    letter4: "📖 Book of Facts: My boyfriend is the most handsome guy alive and he makes me so happy heheh.",
    letter5: "📜 Reminder: You're the only one that I want, I would never do anything to hurt you or risk losing what we have. You mean a lot to me, and I'm glad that we are as close as we are <3 l love you so much!",
    letter6: `💌 Have you ever missed someone so much that it feels like a physical ache? Have you ever found yourself staring at your phone, hoping for a message from them, wishing for just a sign that they’re thinking about you too? Has the idea of that one person texting you ever made you forget about everything else, making it hard to focus on anything? Have you ever loved someone so deeply, that even the smallest thought of them brightens your whole day? I have. And I do all the time.

It still feels unreal that someone like you could care about me the way you do. Sometimes, I get lost in my thoughts, overanalyzing things I shouldn’t, but I try to keep it to myself. I don’t want to be too much, to take up too much space in your life, so I hold back. Maybe too much. And I know that sometimes it might seem like I’m distant, but it’s never because I don’t care. It’s the opposite—I care so much that I don’t want to suffocate you with it.

I tell you I love you because I mean it, but I also try not to say it too much, not because I don’t feel it, but because I don’t want it to lose its meaning. I don’t want to overwhelm you. I might not always be the best at showing love the right way, but I promise, every little thing I do is because you mean the world to me.`
};

// Ajout des événements de clic aux lettres
Object.keys(messages).forEach(id => {
    document.getElementById(id).addEventListener("click", function() {
        alert(messages[id]);
    });
});

// Génération des bisous de manière aléatoire
function generateKisses() {
    const kissContainer = document.getElementById("kisses-container");
    for (let i = 0; i < 10; i++) {
        let kiss = document.createElement("img");
        kiss.src = "https://github.com/user-attachments/assets/76d2b938-089c-4efa-9829-06dce802ed6c";
        kiss.classList.add("kiss");
        kiss.style.top = Math.random() * 100 + "%";
        kiss.style.left = Math.random() * 100 + "%";
        kissContainer.appendChild(kiss);
    }
}

generateKisses();