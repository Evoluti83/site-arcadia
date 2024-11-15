// Identifiants administrateurs enregistrés (idéalement, cela doit venir d'une base de données)
const adminCredentials = {
    username: "admin",
    password: "arcadia123"
};

// Références DOM
const loginForm = document.getElementById("admin-login-form");
const loginMessage = document.getElementById("login-message");

// Écouter la soumission du formulaire
loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Récupérer les valeurs saisies
    const enteredUsername = document.getElementById("username").value.trim();
    const enteredPassword = document.getElementById("password").value.trim();

    // Vérifier les identifiants
    if (
        enteredUsername === adminCredentials.username &&
        enteredPassword === adminCredentials.password
    ) {
        // Authentification réussie
        localStorage.setItem("isAdminAuthenticated", "true");
        window.location.href = "admin-services.html"; // Rediriger vers la page d'administration
    } else {
        // Authentification échouée
        loginMessage.style.display = "block";
    }
});
