function showText(type) {
    const textContainer = document.getElementById("text-container");
    let message = "";

    if (type === "sad") {
        message = "I don't know what you're going through. But, just remember: You don't have to be perfect...";
    } else if (type === "weak") {
        message = "I'm proud of you.(: Most people don't know your story, and even me I don’t know all your struggles...";
    } else if (type === "love") {
        message = "The reason why I like you? There is no reason. There should be no reason...";
    }

    textContainer.innerHTML = `<p>${message}</p>`;
}