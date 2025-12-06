// ==================== SMOOTH SCROLL ==================== //
function scrollToSection(selector) {
    const element = document.querySelector(selector);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// ==================== NAVBAR ACTIVE LINK ==================== //
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section, article');

    // Detectar scroll y actualizar active link
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });

    // Click en nav links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
});

// ==================== ANIMACIÓN DE SCROLL ==================== //
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.post-card, .layer');
    elements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });
});

// ==================== EFECTO PARALLAX EN HERO ==================== //
window.addEventListener('scroll', function() {
    const hero = document.querySelector('.hero');
    const scrollPosition = window.pageYOffset;
    
    if (scrollPosition < window.innerHeight) {
        hero.style.backgroundPosition = `0 ${scrollPosition * 0.5}px`;
    }
});

// ==================== EFECTO DE TIPEO EN TÍTULO ==================== //
function typeEffect(element, text, speed = 50) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// ==================== CONTADOR DE LECTURA ==================== //
function calculateReadingTime() {
    const postContent = document.querySelectorAll('.post-content');
    
    postContent.forEach((post, index) => {
        const text = post.innerText;
        const wordCount = text.split(/\s+/).length;
        const readingTime = Math.ceil(wordCount / 200);
        
        const postCard = post.closest('.post-card');
        const postMeta = postCard.querySelector('.post-meta');
        
        const readingTimeSpan = document.createElement('span');
        readingTimeSpan.className = 'reading-time';
        readingTimeSpan.innerHTML = `<i class="fas fa-book"></i> ${readingTime} min de lectura`;
        postMeta.appendChild(readingTimeSpan);
    });
}

// ==================== INICIALIZACIÓN ==================== //
document.addEventListener('DOMContentLoaded', function() {
    calculateReadingTime();
    
    // Animar hero title
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        heroTitle.style.opacity = '0';
        heroTitle.style.animation = 'slideUp 1s ease-out forwards';
    }
});

// ==================== SCROLL TOP BUTTON ==================== //
function createScrollTopButton() {
    const button = document.createElement('button');
    button.id = 'scrollTopBtn';
    button.innerHTML = '<i class="fas fa-arrow-up"></i>';
    button.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        background: var(--primary-color);
        color: white;
        border: none;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        font-size: 20px;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 999;
        box-shadow: 0 5px 20px rgba(108, 92, 231, 0.4);
    `;
    
    document.body.appendChild(button);
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            button.style.opacity = '1';
            button.style.visibility = 'visible';
        } else {
            button.style.opacity = '0';
            button.style.visibility = 'hidden';
        }
    });
    
    button.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

document.addEventListener('DOMContentLoaded', function() {
    createScrollTopButton();
});

// ==================== HIGHLIGHT CÓDIGO (OPCIONAL) ==================== //
// Si en futuro necesitas destacar fragmentos de código

// ==================== COPIAR TEXTO A PORTAPAPELES ==================== //
function addCopyButtons() {
    const codeBlocks = document.querySelectorAll('pre code');
    
    codeBlocks.forEach(block => {
        const button = document.createElement('button');
        button.innerText = 'Copiar';
        button.style.cssText = `
            position: absolute;
            top: 10px;
            right: 10px;
            padding: 5px 10px;
            background: var(--primary-color);
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 12px;
        `;
        
        button.addEventListener('click', function() {
            const text = block.innerText;
            navigator.clipboard.writeText(text);
            button.innerText = '¡Copiado!';
            setTimeout(() => button.innerText = 'Copiar', 2000);
        });
        
        const pre = block.parentElement;
        pre.style.position = 'relative';
        pre.appendChild(button);
    });
}

// ==================== CAMBIO DE TEMA (BONUS) ==================== //
function addThemeToggle() {
    const themeToggle = document.createElement('button');
    themeToggle.id = 'themeToggle';
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    themeToggle.style.cssText = `
        position: fixed;
        top: 100px;
        right: 30px;
        background: var(--primary-color);
        color: white;
        border: none;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        cursor: pointer;
        z-index: 998;
        font-size: 20px;
        box-shadow: 0 5px 20px rgba(108, 92, 231, 0.4);
        transition: all 0.3s ease;
    `;
    
    document.body.appendChild(themeToggle);
    
    themeToggle.addEventListener('mouseover', function() {
        this.style.transform = 'rotate(20deg) scale(1.1)';
    });
    
    themeToggle.addEventListener('mouseout', function() {
        this.style.transform = 'rotate(0) scale(1)';
    });
    
    themeToggle.addEventListener('click', function() {
        document.body.style.filter = document.body.style.filter === 'invert(1)' ? 'none' : 'invert(1)';
    });
}

// ==================== EVENT LISTENERS ==================== //
document.addEventListener('DOMContentLoaded', function() {
    // Agregar botón de tema (opcional)
    // addThemeToggle();
});

// ==================== ANALYTICS BÁSICO ==================== //
function trackPageView(section) {
    console.log(`Visualizando sección: ${section}`);
    // Aquí podrías enviar datos a Google Analytics u otro servicio
}

// ==================== EFECTOS HOVER EN TABLES ==================== //
document.addEventListener('DOMContentLoaded', function() {
    const rows = document.querySelectorAll('.comparison-table tbody tr');
    
    rows.forEach(row => {
        row.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#e8f4f8';
            this.style.boxShadow = 'inset 0 0 10px rgba(108, 92, 231, 0.1)';
        });
        
        row.addEventListener('mouseleave', function() {
            this.style.backgroundColor = '';
            this.style.boxShadow = '';
        });
    });
});

// ==================== MODAL DE BIENVENIDA (BONUS) ==================== //
function showWelcomeMessage() {
    const hasVisited = localStorage.getItem('blogVisited');
    
    if (!hasVisited) {
        const welcome = document.createElement('div');
        welcome.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: white;
            padding: 40px;
            border-radius: 15px;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
            z-index: 2000;
            text-align: center;
            max-width: 500px;
            animation: slideUp 0.5s ease-out;
        `;
        
        welcome.innerHTML = `
            <h2 style="color: var(--primary-color); margin-bottom: 15px;">
                ¡Bienvenido!
            </h2>
            <p style="margin-bottom: 20px; color: #555;">
                Hola, soy Yun Erasmo Martinez. Este blog contiene contenido investigativo sobre 
                Arquitectura de Software. ¡Disfruta la lectura!
            </p>
            <button onclick="this.parentElement.remove(); localStorage.setItem('blogVisited', 'true');" 
                style="background: var(--secondary-color); color: white; border: none; 
                padding: 10px 30px; border-radius: 25px; cursor: pointer; font-weight: bold;">
                Entendido
            </button>
        `;
        
        document.body.appendChild(welcome);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // Descomenta para activar mensaje de bienvenida
    // showWelcomeMessage();
});

// ==================== BÚSQUEDA EN BLOG (BONUS) ==================== //
function initializeSearch() {
    const searchBtn = document.createElement('button');
    searchBtn.innerHTML = '<i class="fas fa-search"></i>';
    searchBtn.style.cssText = `
        position: fixed;
        top: 150px;
        right: 30px;
        background: var(--secondary-color);
        color: white;
        border: none;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        cursor: pointer;
        z-index: 998;
        font-size: 20px;
        box-shadow: 0 5px 20px rgba(0, 184, 148, 0.4);
        transition: all 0.3s ease;
    `;
    
    document.body.appendChild(searchBtn);
    
    searchBtn.addEventListener('click', function() {
        const query = prompt('¿Qué tema quieres buscar?');
        if (query) {
            const posts = document.querySelectorAll('.post-card');
            posts.forEach(post => {
                if (post.innerText.toLowerCase().includes(query.toLowerCase())) {
                    post.style.display = 'block';
                    post.style.highlight = 'yellow';
                } else {
                    post.style.display = 'none';
                }
            });
        }
    });
}

// Descomenta para activar búsqueda
// document.addEventListener('DOMContentLoaded', function() {
//     initializeSearch();
// });

console.log('Script cargado correctamente - Blog de Arquitectura de Software');
