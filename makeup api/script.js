async function getMakeupData() {
    const response = await fetch('https://makeup-api.herokuapp.com/api/v1/products.json');
    const data = await response.json();
    return data;
  }
  async function displayMakeupData() {
    const makeupData = await getMakeupData();
  
    const makeupContainer = document.getElementById('makeup-container');
    makeupContainer.innerHTML = ''; 
  
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
  
    searchButton.addEventListener('click', () => {
      const searchTerm = searchInput.value.toLowerCase();
  
      const filteredMakeup = makeupData.filter((makeup) => {
        const brand = makeup.brand.toLowerCase();
        const name = makeup.name.toLowerCase();
        const description = makeup.description.toLowerCase();
  
        return brand.includes(searchTerm) || name.includes(searchTerm) || description.includes(searchTerm);
      });
  
      makeupContainer.innerHTML = ''; 
  
      filteredMakeup.forEach((makeup) => {
        const card = createMakeupCard(makeup);
        makeupContainer.appendChild(card);
      });
    });
  
    makeupData.forEach((makeup) => {
      const card = createMakeupCard(makeup);
      makeupContainer.appendChild(card);
    });
  }
  async function displayMakeupData() {
    const makeupData = await getMakeupData();
    const makeupContainer = document.getElementById('makeup-container');
  
    makeupData.forEach((makeup) => {
      const column = document.createElement('div');
      column.classList.add('col-lg-4', 'col-sm-12', 'my-3');
      makeupContainer.appendChild(column);
  
      const card = document.createElement('div');
      card.classList.add('card');
      column.appendChild(card);
  
      const cardImage = document.createElement('img');
      cardImage.classList.add('card-img-top');
      cardImage.src = makeup.image_link;
      cardImage.alt = makeup.name;
      card.appendChild(cardImage);
  
      const cardBody = document.createElement('div');
      cardBody.classList.add('card-body');
      card.appendChild(cardBody);
  
      const cardBrand = document.createElement('h5');
      cardBrand.classList.add('card-title');
      cardBrand.textContent = `${makeup.brand} - ${makeup.name}`;
      cardBody.appendChild(cardBrand);
  
      const cardPrice = document.createElement('p');
      cardPrice.classList.add('card-text');
      cardPrice.textContent = `Price: ${makeup.price}`;
      cardBody.appendChild(cardPrice);
  
      const cardDescription = document.createElement('p');
      cardDescription.classList.add('card-text');
      cardDescription.textContent = makeup.description;
      cardBody.appendChild(cardDescription);
  
      const cardLink = document.createElement('a');
      cardLink.classList.add('btn', 'btn-primary');
      cardLink.href = makeup.product_link;
      cardLink.textContent = 'View Product';
      cardBody.appendChild(cardLink);
    });
  }

  
  
  displayMakeupData();