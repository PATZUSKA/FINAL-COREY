.message {
    text-align: center;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.message img {
    width: auto;  /* Ajuste la largeur en fonction du texte */
    max-width: 100%; /* Empêche l'image d'être plus large que l'écran */
    height: auto; /* Conserve les proportions */
}

h2 {
    font-size: 1.2rem;
    width: auto;
    text-align: center;
}

.text {
    display: none;
    font-size: 1rem;
    color: #555;
    margin-top: 10px;
    max-width: 90%; /* Pour éviter que le texte soit trop large */
    word-wrap: break-word; /* Permet au texte de bien s’adapter */
    text-align: center;
}

.message:hover .text {
    display: block;
}