function moveNoButton() {
    let noButton = document.getElementById("no");
    let randomX = Math.random() * (window.innerWidth - 100);
    let randomY = Math.random() * (window.innerHeight - 100);
    noButton.style.position = "absolute";
    noButton.style.left = randomX + "px";
    noButton.style.top = randomY + "px";
}

function goToNextPage() {
    window.location.href = "page2.html";
}

function openLetter(type) {
    let messages = {
        sad🥺: `"I don't know what you're going through.
        
But, just remember:
You don't have to be perfect.
It's okay to be having a bad day, our life is made of that, one day you will be in your best moment and in another day your worst, that's life, but don’t forget that life still goes on.  
Let's get through this together."`,

        weak☹️: `"I'm proud of you. (:

Most people don't know your story, and even me I don’t know all your struggles, your hustle, your prayers.  
But one thing I know is that I’m proud of you, I’m proud of the man you are, the man you are becoming, and the man you will be.  
So don’t let those silent battles have you, and hang on."`,

        love💜: `"Have you ever missed someone so much that it feels like a physical ache? Have you ever found yourself staring at your phone, hoping for a message from them, wishing for just a sign that they’re thinking about you too? Has the idea of that one person texting you ever made you forget about everything else, making it hard to focus on anything? Have you ever loved someone so deeply, that even the smallest thought of them brightens your whole day? I have. And I do all the time.

It still feels unreal that someone like you could care about me the way you do. Sometimes, I get lost in my thoughts, overanalyzing things I shouldn’t, but I try to keep it to myself. I don’t want to be too much, to take up too much space in your life, so I hold back. Maybe too much. And I know that sometimes it might seem like I’m distant, but it’s never because I don’t care. It’s the opposite—I care so much that I don’t want to suffocate you with it.

I tell you I love you because I mean it, but I also try not to say it too much, not because I don’t feel it, but because I don’t want it to lose its meaning. I don’t want to overwhelm you. I might not always be the best at showing love the right way, but I promise, every little thing I do is because you mean the world to me."`,

        facts: `"The reason why I like you?  

There is no reason. There should be no reason. If you love someone because of a reason, when that reason is gone, your heart will change too.  
I like you without a reason.  
I like you because you are you."`,

        stupid: `"WHY DID YOU CLICK ON THAT🤨🧐? YOU’RE NOT DUMB AYO"`
    };
    alert(messages[type]);
}

// Ajouter des bisous et chats aléatoirement
function addElements() {
    let kissesContainer = document.querySelector(".kisses-container");
    let catsContainer = document.querySelector(".cats-container");

    let kissImage = "https://github.com/user-attachments/assets/76d2b938-089c-4efa-9829-06dce802ed6c";
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

    for (let i = 0; i < 100; i++) {
        let kiss = document.createElement("img");
        kiss.src = kissImage;
        kiss.style.left = Math.random() * window.innerWidth + "px";
        kiss.style.top = Math.random() * window.innerHeight + "px";
        kissesContainer.appendChild(kiss);
    }

    for (let i = 0; i < 50; i++) {
        let cat = document.createElement("img");
        cat.src = catImages[Math.floor(Math.random() * catImages.length)];
        cat.style.left = Math.random() * window.innerWidth + "px";
        cat.style.top = Math.random() * window.innerHeight + "px";
        catsContainer.appendChild(cat);
    }
}

window.onload = addElements;