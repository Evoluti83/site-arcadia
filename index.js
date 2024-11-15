const reviews = [
    {
        quote: "Une expérience inoubliable ! Mes enfants ont adoré la visite en petit train et les habitats sont magnifiques.",
        author: "Claire M."
    },
    {
        quote: "Un endroit magique. J'ai particulièrement aimé la savane, c'est comme un vrai safari !",
        author: "Julien R."
    },
    {
        quote: "L'engagement pour la conservation est remarquable. Une visite éducative et très agréable.",
        author: "Sophie L."
    }
];

const reviewList = document.getElementById("review-list");

reviews.forEach(review => {
    const reviewDiv = document.createElement("div");
    reviewDiv.className = "review";
    reviewDiv.innerHTML = `
        <p class="quote">"${review.quote}"</p>
        <p class="author">- ${review.author}</p>
    `;
    reviewList.appendChild(reviewDiv);
});
<script>
    document.getElementById("submit-review").addEventListener("submit", function (e) {
        e.preventDefault();

        // Récupérer les valeurs du formulaire
        const name = document.getElementById("name").value.trim();
        const reviewText = document.getElementById("review").value.trim();

        if (name && reviewText) {
            // Créer un nouvel avis
            const reviewList = document.getElementById("review-list");
            const newReview = document.createElement("div");
            newReview.className = "review";
            newReview.innerHTML = `
                <p class="quote">"${reviewText}"</p>
                <p class="author">- ${name}</p>
            `;

            // Ajouter l'avis au début de la liste
            reviewList.prepend(newReview);

            // Réinitialiser le formulaire
            document.getElementById("submit-review").reset();
        } else {
            alert("Veuillez remplir tous les champs avant d'envoyer votre avis.");
        }
    ;
</script>
