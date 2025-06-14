const songs = [
  {
    title: "Chill Beat",
    artist: "Arj Music",
    src: "music/song1.mp3"
  },
  {
    title: "LoFi Vibes",
    artist: "CodeAlpha",
    src: "music/song2.mp3"
  }
];

let currentIndex = 0;
let isPlaying = false;

const audio = document.getElementById("audio");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const albumImage = document.getElementById("albumImage");
const progress = document.getElementById("progress");

function loadSong(index) {
  const song = songs[index];
  audio.src = song.src;
  title.textContent = song.title;
  artist.textContent = song.artist;
}

function playPause() {
  if (isPlaying) {
    audio.pause();
    isPlaying = false;
  } else {
    audio.play();
    isPlaying = true;
  }
}

function nextSong() {
  currentIndex = (currentIndex + 1) % songs.length;
  loadSong(currentIndex);
  audio.play();
  isPlaying = true;
}

function prevSong() {
  currentIndex = (currentIndex - 1 + songs.length) % songs.length;
  loadSong(currentIndex);
  audio.play();
  isPlaying = true;
}

audio.addEventListener("timeupdate", () => {
  const percent = (audio.currentTime / audio.duration) * 100;
  progress.value = percent || 0;
});

progress.addEventListener("input", () => {
  const time = (progress.value * audio.duration) / 100;
  audio.currentTime = time;
});

// Load initial song
loadSong(currentIndex);
