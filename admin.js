// Liste des services stockés
let services = JSON.parse(localStorage.getItem('services')) || [];

// Références DOM
const serviceForm = document.getElementById('service-form');
const servicesContainer = document.getElementById('services-container');

// Afficher les services
function renderServices() {
    servicesContainer.innerHTML = '';
    services.forEach((service, index) => {
        const serviceItem = document.createElement('li');
        serviceItem.innerHTML = `
            <strong>${service.title}</strong>
            <p>${service.description}</p>
            <img src="${service.image}" alt="${service.title}" style="max-width: 200px;">
            <button onclick="editService(${index})">Modifier</button>
            <button onclick="deleteService(${index})">Supprimer</button>
        `;
        servicesContainer.appendChild(serviceItem);
    });
}

// Ajouter ou mettre à jour un service
serviceForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const title = document.getElementById('service-title').value.trim();
    const description = document.getElementById('service-description').value.trim();
    const image = document.getElementById('service-image').value.trim();

    // Vérifier si le service existe déjà (pour mise à jour)
    const existingIndex = services.findIndex(service => service.title === title);

    if (existingIndex !== -1) {
        // Mise à jour
        services[existingIndex] = { title, description, image };
    } else {
        // Ajout
        services.push({ title, description, image });
    }

    // Sauvegarder et rafraîchir
    localStorage.setItem('services', JSON.stringify(services));
    renderServices();
    serviceForm.reset();
});

// Modifier un service
function editService(index) {
    const service = services[index];
    document.getElementById('service-title').value = service.title;
    document.getElementById('service-description').value = service.description;
    document.getElementById('service-image').value = service.image;
}

// Supprimer un service
function deleteService(index) {
    services.splice(index, 1);
    localStorage.setItem('services', JSON.stringify(services));
    renderServices();
}

// Initialiser l'affichage
renderServices();
