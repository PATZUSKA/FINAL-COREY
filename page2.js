document.addEventListener("DOMContentLoaded", function() {
    // Attach click event listeners to each message
    let messages = document.querySelectorAll('.message');
    messages.forEach(message => {
        message.addEventListener('click', function() {
            let text = message.querySelector('.text');
            text.style.display = 'block';  // Show text when the letter is clicked
        });
    });
});
