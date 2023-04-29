//Writing effect on H1
const typedHeader = document.getElementById('typed-header');
const text = "Welcome to my portfolio"; 
let index = 0;

function typeWriter() {
  typedHeader.textContent += text[index];
  index++;
 index >= text.length ? clearInterval(typingInterval): null;
}
const typingInterval = setInterval(typeWriter, 120); // tiempo entre cada letra, en milisegundos


//Progresive bar 
window.addEventListener('scroll', function() {
    const navLine = document.querySelector('.nav-line');
    const nav = document.querySelector('nav');
    const navHeight = nav.offsetHeight;
    const windowHeight = window.innerHeight;
    const scrollPosition = window.scrollY;
    
    const position = (scrollPosition / (document.body.offsetHeight - windowHeight)) * 100;
    navLine.style.width = position + '%';
    
    if (position < 100) {
      nav.classList.remove('nav-bottom');
    } else {
      nav.classList.add('nav-bottom');
    }
  });
  