const audio = document.getElementById('audio');
const playPauseButton = document.getElementById('play-pause');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const progressBar = document.getElementById('progress');
const currentTimeSpan = document.getElementById('current-time');
const totalTimeSpan = document.getElementById('total-time');

let isPlaying = false;

// Play/Pause button click
playPauseButton.addEventListener('click', () => {
  if (isPlaying) {
    audio.pause();
    playPauseButton.textContent = 'Play';
  } else {
    audio.play();
    playPauseButton.textContent = 'Pause';
  }
  isPlaying = !isPlaying;
});

// Update progress bar
audio.addEventListener('timeupdate', () => {
  const progress = (audio.currentTime / audio.duration) * 100;
  progressBar.value = progress;
  currentTimeSpan.textContent = formatTime(audio.currentTime);
  totalTimeSpan.textContent = formatTime(audio.duration);
});

// Format time
function formatTime(time) {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

