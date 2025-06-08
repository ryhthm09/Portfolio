let dayNight = document.querySelector('.dayNight');
let banner = document.querySelector('.banner');

dayNight.addEventListener('click', () => {
  banner.classList.toggle('night');
});
let typingEffect = new Typed("#text", {
  strings: ["Techie", "Web Developer", "Coder", "Researcher"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
  backDelay: 1000,
});