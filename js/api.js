document.addEventListener('DOMContentLoaded', () => {
    const apiUrl = 'https://api.rawg.io/api/games';
    const apiKey = 'ad192d03a5d740d28847dd045805fda2';
    let currentPage = 1;
    let totalPages = 4;
  
    function getGames(page) {
      const url = `${apiUrl}?key=${apiKey}&dates=2024-01-01,2024-05-31&page=${page}`;
      fetch(url)
       .then(response => response.json())
       .then(data => {
          const juegos = data.results;
          const grillaJuegos = document.getElementById('grilla-juegos');
          grillaJuegos.innerHTML = '';
          for (let i = 0; i < 5; i++) {
            const row = document.createElement('div');
            row.className = 'row';
            grillaJuegos.appendChild(row);
            for (let j = 0; j < 5; j++) {
              const gameIndex = i * 5 + j;
              if (gameIndex < 20) { 
                const itemJuego = document.createElement('div');
                itemJuego.className = 'col-md-2 col-sm-4 col-xs-6 item-juego';
                itemJuego.innerHTML = 
                  `<div class="juegos">
                    <img src="${juegos[gameIndex].background_image}" alt="${juegos[gameIndex].name}">
                    <h5>${juegos[gameIndex].name}</h5>
                  </div>`;
                row.appendChild(itemJuego);
              }
            }
          }
          const paginationContainer = document.getElementById('pagination-container');
          paginationContainer.innerHTML = '';
          const prevButton = document.createElement('button');
          prevButton.textContent = 'Anterior';
          prevButton.onclick = () => {
            if (currentPage > 1) {
              currentPage--;
              getGames(currentPage);
            }
          };
          paginationContainer.appendChild(prevButton);
          const nextPageButton = document.createElement('button');
          nextPageButton.textContent = 'Siguiente';
          nextPageButton.onclick = () => {
            if (currentPage < totalPages) {
              currentPage++;
              getGames(currentPage);
            }
          };
          paginationContainer.appendChild(nextPageButton);

  
        })
       .catch(error => console.error(error));
    }
    getGames(currentPage);
  });

  document.addEventListener('DOMContentLoaded', () => {
    const apiUrl = 'https://api.rawg.io/api/games';
    const apiKey = 'ad192d03a5d740d28847dd045805fda2';
    let currentPage2 = 1;
    let totalPages2 = 2;
  
    function getGames(page) {
      const url = `${apiUrl}?key=${apiKey}&dates=2024-01-01,2024-05-31&page=${page}`;
      fetch(url)
     .then(response => response.json())
     .then(data => {
          const juegos = data.results;
          const juegosCarousel = document.getElementById('juegos-carousel');
          juegosCarousel.innerHTML = '';
          for (let i = 0; i < 10; i++) {
            const itemJuego2 = document.createElement('div');
            itemJuego2.className = 'item';
            itemJuego2.innerHTML = 
              `<div class="juegos">
                <img src="${juegos[i].background_image}" alt="${juegos[i].name}">
                <h5>${juegos[i].name}</h5>
              </div>`;
            juegosCarousel.appendChild(itemJuego2);
          }
           
          $(juegosCarousel).owlCarousel({
            loop: true,
            nav: false,
            dots: true,
            
            direction: 'horizontal',
            
        
          });
        })
     .catch(error => console.error(error));
    }
  
    getGames(currentPage2);
  });