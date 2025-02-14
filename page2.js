function showText(type) {
    const textContainer = document.getElementById("text-container");

    let messages = {
        sad: "I don’t know what you’re going through.<br><br>But, just remember:<br>You don’t have to be perfect.<br>It’s okay to be having a bad day, our life is made of that, one day you will be in your best moment and in another day your worst, that’s life, but don’t forget that life still goes on.<br><br>Let’s get through this together.",
        
        weak: "I’m proud of you. (:<br><br>Most people don’t know your story, and even me, I don’t know all your struggles, your hustle, your prayers. But one thing I know is that I’m proud of you.<br>I’m proud of the man you are, the man you are becoming, and the man you will be.<br><br>So don’t let those silent battles have you, and hang on.",

        love: "The reason why I love you?<br><br>There is no reason. There should be no reason.<br>If you love someone because of a reason, when that reason is gone, your heart will change too.<br>I like you without a reason.<br><br>I like you because you are you.",

        miss: "Have you ever missed someone so much that it feels like a physical ache? Have you ever found yourself staring at your phone, hoping for a message from them, wishing for just a sign that they’re thinking about you too?<br><br>Has the idea of that one person texting you ever made you forget about everything else, making it hard to focus on anything?<br><br>Have you ever loved someone so deeply, that even the smallest thought of them brightens your whole day?<br><br>I have. And I do all the time.<br><br>It still feels unreal that someone like you could care about me the way you do. Sometimes, I get lost in my thoughts, overanalyzing things I shouldn’t, but I try to keep it to myself. I don’t want to be too much, to take up too much space in your life, so I hold back. Maybe too much.<br><br>And I know that sometimes it might seem like I’m distant, but it’s never because I don’t care. It’s the opposite—I care so much that I don’t want to suffocate you with it.<br><br>I tell you I love you because I mean it, but I also try not to say it too much, not because I don’t feel it, but because I don’t want it to lose its meaning.<br><br>I don’t want to overwhelm you.<br><br>I might not always be the best at showing love the right way, but I promise, every little thing I do is because you mean the world to me.",

        stupid: "WHY DID YOU CLICK ON THAT?<br><br>YOU’RE NOT DUMB, AYO!",

        reminder: "You’re the only one that I want, I would never do anything to hurt you or risk losing what we have.<br><br>You mean a lot to me, and I’m glad that we are as close as we are. <3<br><br>I love you so much (I love you more)!"
    };

    // Vérifie si le type existe dans l'objet messages
    if (messages[type]) {
        textContainer.innerHTML = `<p>${messages[type]}</p>`;
        textContainer.style.display = "block"; // Assure-toi qu'il est visible
    }
}