document.addEventListener("DOMContentLoaded", function () {
    const chatContainer = document.querySelector(".chat-container");
    const chatImages = [
        "https://github.com/user-attachments/assets/0de61b6f-8c13-438a-8dac-c40da1e695bc",
        "https://github.com/user-attachments/assets/32e9d09c-bc48-4827-b39e-43eea39015c3",
        "https://github.com/user-attachments/assets/2361f5c7-1418-42f8-a33b-bea022533388"
    ];

    for (let i = 0; i < 100; i++) {
        let img = document.createElement("img");
        img.src = chatImages[i % chatImages.length];
        chatContainer.appendChild(img);
    }

    document.getElementById("yes").addEventListener("click", function () {
        window.location.href = "page2.html";
    });

    document.getElementById("no").addEventListener("mouseover", function () {
        this.style.position = "absolute";
        this.style.left = Math.random() * window.innerWidth + "px";
        this.style.top = Math.random() * window.innerHeight + "px";
    });
});