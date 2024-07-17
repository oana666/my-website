// Exemplu de date
const cardData = [
    { imageUrl: 'iazbinski1.jpg', description: 'Descriere 1' },
    { imageUrl: 'link_imagini/2.jpg', description: 'Descriere 2' },
    { imageUrl: 'link_imagini/3.jpg', description: 'Descriere 3' },
    // Adaugă mai multe obiecte aici...
  ];
  
  // Funcție pentru a crea cardurile
  function createCards() {
    const cardContainer = document.getElementById('card-container');
  
    cardData.forEach(data => {
      const card = document.createElement('div');
      card.className = 'card';
  
      const image = document.createElement('img');
      image.src = data.imageUrl;
      card.appendChild(image);
  
      const description = document.createElement('div');
      description.className = 'description';
      description.textContent = data.description;
      card.appendChild(description);
  
      cardContainer.appendChild(card);
    });
  }
  
  // Apelează funcția pentru a genera cardurile la încărcarea paginii
  window.onload = createCards;