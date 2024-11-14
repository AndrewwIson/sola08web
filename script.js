// Lista degli streamer di cui vuoi mostrare le live
const STREAMERS = ["sola08_", "IzunaTOP"]; // Inserisci i nomi degli streamer qui

function loadStreamPlayers() {
  const streamsContainer = document.getElementById('streams');
  streamsContainer.innerHTML = ''; // Svuota il contenitore

  STREAMERS.forEach(streamer => {
    const streamElement = document.createElement('div');
    streamElement.className = 'stream';
    streamElement.innerHTML = `
      <h2>${streamer}</h2>
      <iframe
        src="https://player.twitch.tv/?channel=${streamer}&parent=https://andrewwison.github.io" 
        height="400"
        width="600"
        allowfullscreen>
      </iframe>`;
    streamsContainer.appendChild(streamElement);
  });
}

// Carica i player al caricamento della pagina
loadStreamPlayers();
