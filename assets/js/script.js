fetch("assets/data/videos.json")
  .then((response) => response.json())
  .then((data) => {
    const sidebar = document.getElementById("sidebar");

    data.videos.forEach((video) => {
      const card = document.createElement("div");
      card.classList.add("sidebar__card");

      card.innerHTML = `
        <img src="${video.img}" alt="Miniatura do vídeo ${video.id}" />
        <div class="video-list">
          <h3>${video.title}</h3>
          <p>${video.author}</p>
          <p>${video.description}</p>
        </div>
      `;

      sidebar.appendChild(card);
    });
  })
  .catch((error) => console.error("Erro ao carregar vídeos:", error));
