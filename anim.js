// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Fly me to the moon", time: 9 },
  { text: "Let me play among the stars", time: 14 },
  { text: "Let me see what spring is like", time: 19 },
  { text: "On a, Jupiter and Mars", time: 24 },
  { text: "In other words, hold my hand", time: 31 },
  { text: "In other words, baby, kiss me", time: 39 },
  { text: "Fill my heart with song", time: 49 },
  { text: "And let me sing forevermore", time: 54 },
  { text: "You are all I long for", time: 60 },
  { text: "All I worship and adore", time: 65 },
  { text: "In other words, please be true", time: 72 },
  { text: "In other words, I love you", time: 80 },
  { text: "Fill my heart with song", time: 110 },
  { text: "And let me sing forevermore", time: 116 },
  { text: "You are all I long for", time: 122 },
  { text: "All I worship and adore", time: 127 },
  { text: "In other words, please be true", time: 134 },
  { text: "In other words, I love you", time: 142 },
  { text: "I love you...", time: 153 }
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 5
  );

  if (currentLine) {
    var fadeInDuration = 0.1;
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

// Función para ocultar el título después de 160 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation = "fadeOut 3s ease-in-out forwards";
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000);
}

setTimeout(ocultarTitulo, 160000);
