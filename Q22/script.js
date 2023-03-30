const progressBar = document.querySelector('.progress-bar');

function updateProgressBar() {
  const scrollPosition = window.scrollY;
  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;

  const progressWidth = (scrollPosition / (documentHeight - windowHeight)) * 100;

  progressBar.style.width = `${progressWidth}%`;
}
window.addEventListener('dblclick', updateProgressBar);
