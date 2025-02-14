function showText(type) {
    const textContainer = document.getElementById("text-container");
    let message = "";

    // Messages à afficher
    if (type === "sad") {
        message = "I don’t know what you’re going through. But, just remember: You don’t have to be perfect. It’s okay to be having a bad day, our life is made of that, one day you will be in your best moment and in another day your worst, that’s life, but don’t forget that life still goes on. Let’s get through this together.";
    } else if (type === "weak") {
        message = "I’m proud of you. (: Most people don’t know your story, and even me, I don’t know all your struggles, your hustle, your prayers. But one thing I know is that I’m proud of you. I’m proud of the man you are, the man you are becoming, and the man you will be. So don’t let those silent battles have you, and hang on.";
    } else if (type === "love") {
        message = "The reason why I love you? There is no reason. There should be no reason. If you love someone because of a reason, when that reason is gone, your heart will change too. I like you without a reason. I like you because you are you.";
    } else if (type === "miss") {
        message = "Have you ever missed someone so much that it feels like a physical ache? Have you ever found yourself staring at your phone, hoping for a message from them, wishing for just a sign that they’re thinking about you too?";
    } else if (type === "stupid") {
        message = "WHY DID YOU CLICK ON THAT? YOU’RE NOT DUMB, AYO!";
    } else if (type === "reminder") {
        message = "You’re the only one that I want, I would never do anything to hurt you or risk losing what we have. You mean a lot to me, and I’m glad that we are as close as we are. <3 I love you so much ( I love you more)!";
    }

    // Affiche le message
    textContainer.innerHTML = `<p>${message}</p>`;
    textContainer.style.display = "block"; // Rendre le conteneur visible
}