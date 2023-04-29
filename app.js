const typedHeader = document.getElementById('typed-header');
const text = "Welcome to my portfolio "; 
let index = 0;

function typeWriter() {
  typedHeader.textContent += text[index];
  index++;
 index >= text.length ? clearInterval(typingInterval): null;
}

const typingInterval = setInterval(typeWriter, 120); // tiempo entre cada letra, en milisegundos

/* En este código, creamos una variable typedHeader para almacenar la referencia al elemento h1 que queremos escribir. Luego, definimos la cadena de texto que queremos escribir en la variable text, y establecemos un contador index en 0.

A continuación, definimos una función typeWriter() que se ejecutará cada vez que se ejecute el intervalo de tiempo. Esta función agrega el siguiente carácter de la cadena text al contenido del elemento h1 y aumenta el valor de index en 1. Si index es igual o mayor a la longitud de la cadena text, se detiene el intervalo de tiempo usando clearInterval().

Por último, establecemos un intervalo de tiempo utilizando setInterval() que llamará a la función typeWriter() cada 100 milisegundos (o el tiempo que desees entre cada letra).

Con este código, el texto del elemento h1 se escribirá en la página una letra a la vez en intervalos de tiempo regulares, simulando un efecto de tipeado. */