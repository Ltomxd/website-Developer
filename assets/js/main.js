//Header
document.addEventListener("DOMContentLoaded", function () {
    fetch('../Components/header.html')
        .then(response => response.text())
        .then(data => {
            // Inserta el contenido del header
            document.getElementById('header').innerHTML = data;

            // Inicializa los eventos del menú después de cargar el header
            initializeMenu();
        })
        .catch(error => console.error('Error loading the header:', error));
});

function initializeMenu() {
    const navMenu = document.getElementById('nav-menu');
    const navToggle = document.getElementById('nav-toggle');
    const navClose = document.getElementById('nav-close');

    // Menu show
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.add('show-menu');
        });
    }

    // Menu hidden
    if (navClose) {
        navClose.addEventListener('click', () => {
            navMenu.classList.remove('show-menu');
        });
    }

    // Remove menu mobile
    const navLink = document.querySelectorAll('.nav__link');
    navLink.forEach(link =>
        link.addEventListener('click', () => {
            navMenu.classList.remove('show-menu');
        })
    );
}
//header FIN//
/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
    const header = document.getElementById('header')
    // Add a class if the bottom offset is greater than 50 of the viewport
    this.scrollY >= 50 ? header.classList.add('scroll-header')
        : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)


/*=============== GSAP ANIMATION ===============*/
document.addEventListener('DOMContentLoaded', () => {
    // Esperar a que el header y footer estén completamente cargados
    const checkComponentsLoaded = () => {
        const headerLoaded = document.getElementById('header') && document.getElementById('header').innerHTML.trim() !== '';
        const footerLoaded = document.getElementById('footer-container') && document.getElementById('footer-container').innerHTML.trim() !== '';
        return headerLoaded && footerLoaded;
    };

    const startAnimations = () => {
        // Ejecutar animaciones de GSAP
        gsap.from('.home__points', 1.5, { opacity: 0, y: -300, delay: 2.2 });
        gsap.from('.home__rocket', 1.5, { opacity: 0, y: 300, delay: 0.3 });
        gsap.from('.home__planet-1', 1.5, { opacity: 0, x: -200, delay: 0.8 });
        gsap.from('.home__planet-2', 1.5, { opacity: 0, x: 200, delay: 1 });
        gsap.from('.home__cloud-1', 1.5, { opacity: 0, y: 300, delay: 1.2 });
        gsap.from('.home__cloud-2', 1.2, { opacity: 0, x: 300, delay: 1.3 });
        gsap.from('.home__content', 1.5, { opacity: 0, y: -100, delay: 1.4 });
        gsap.from('.home__title img', 1.5, { opacity: 0, x: 100, delay: 1.6 });
        gsap.from('.card__text', 1.5, { opacity: 0, y: 300, delay: 1.0 });
        gsap.from('.card__container', 1.5, { opacity: 0, y: -100, delay: 1.0 });

    };

    const waitForComponents = setInterval(() => {
        if (checkComponentsLoaded()) {
            clearInterval(waitForComponents);
            startAnimations();
        }
    }, 100);
});

/*-------------------------------*/
/*footer*/

document.addEventListener('DOMContentLoaded', () => {
    // Seleccionar el contenedor donde se insertará el footer
    const footerContainer = document.getElementById('footer-container');

    // Cargar el contenido del footer desde Components/footer.html
    fetch('../Components/footer.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al cargar el footer: ' + response.statusText);
            }
            return response.text();
        })
        .then(data => {
            footerContainer.innerHTML = data; // Insertar el contenido en el contenedor
        })
        .catch(error => console.error(error)); // Manejar errores si algo sale mal
});




document.addEventListener('DOMContentLoaded', () => {
    // Seleccionar el contenedor donde se insertará el footer
    const footerContainer = document.getElementById('abou-container');

    // Cargar el contenido del footer desde Components/footer.html
    fetch('../Landings/About.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al cargar el footer: ' + response.statusText);
            }
            return response.text();
        })
        .then(data => {
            footerContainer.innerHTML = data; // Insertar el contenido en el contenedor
        })
        .catch(error => console.error(error)); // Manejar errores si algo sale mal
});


/*socail*/

document.addEventListener('DOMContentLoaded', () => {
    const footerContainer = document.getElementById('icons-container');

    fetch('../Components/iconofoters.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al cargar el footer: ' + response.statusText);
            }
            return response.text();
        })
        .then(data => {
            footerContainer.innerHTML = data; // Insertar el contenido en el contenedor
        })
        .catch(error => console.error(error)); // Manejar errores si algo sale mal
});


// Obtener todos los enlaces
const buttons = document.querySelectorAll('.button');

buttons.forEach(button => {
  button.addEventListener('click', (event) => {
    event.preventDefault();  // Evitar el desplazamiento

    // Agregar o quitar la clase "expand"
    button.classList.toggle('expand');

    // Si se expandió, abrir el enlace correspondiente
    if (button.classList.contains('expand')) {
      const link = button.getAttribute('data-link');
      setTimeout(() => {
        window.location.href = link; // Redirige al enlace
      }, 300);  // Después de que se haya expandido (con el tiempo de la animación)
    }
  });
});



/*About*/

document.addEventListener('DOMContentLoaded', () => {
    const footerContainer = document.getElementById('homecontainer');

    fetch('../Landings/home.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al cargar el footer: ' + response.statusText);
            }
            return response.text();
        })
        .then(data => {
            footerContainer.innerHTML = data; // Insertar el contenido en el contenedor
        })
        .catch(error => console.error(error)); // Manejar errores si algo sale mal
});

/*services*/


document.addEventListener('DOMContentLoaded', () => {
    const footerContainer = document.getElementById('servicescontainer');

    fetch('../Landings/services.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al cargar el footer: ' + response.statusText);
            }
            return response.text();
        })
        .then(data => {
            footerContainer.innerHTML = data; // Insertar el contenido en el contenedor
        })
        .catch(error => console.error(error)); // Manejar errores si algo sale mal
});


