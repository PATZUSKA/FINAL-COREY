// Gère l'interaction avec le bouton "No"
document.getElementById('no').addEventListener('click', function() {
    const noButton = document.getElementById('no');
    noButton.style.position = 'absolute';
    noButton.style.top = `${Math.random() * window.innerHeight}px`;
    noButton.style.left = `${Math.random() * window.innerWidth}px`;
});

// Gère l'interaction avec le bouton "Yes"
document.getElementById('yes').addEventListener('click', function() {
    // Masque la première page
    document.querySelector('.container').style.display = 'none';
    // Affiche la deuxième page avec les chats
    document.getElementById('chatPage').style.display = 'block';
});
