document.addEventListener('DOMContentLoaded', function() {
    const scrollLinks = document.querySelectorAll('a[href^="#"]');

    for (const link of scrollLinks) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }
});

const targetsToAnimate = document.querySelectorAll('.animate-on-scroll');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
        } else {
            entry.target.classList.remove('is-visible');
        }
    });
}, {
    threshold: 0.1
});

targetsToAnimate.forEach(target => {
    observer.observe(target);
});


const emailLink = document.querySelector('.email-link');
const emailTextSpan = document.querySelector('.email-text');

if (emailLink && emailTextSpan) {
    const originalEmailText = emailTextSpan.textContent;

    emailLink.addEventListener('click', function(event) {
        event.preventDefault();

        navigator.clipboard.writeText(originalEmailText).then(() => {
            emailTextSpan.textContent = 'Email Copied!';
            setTimeout(() => {
                emailTextSpan.textContent = originalEmailText;
            }, 2000);

        }).catch(err => {
            console.error('Gagal menyalin email: ', err);
        });
    });
}

const themeToggle = document.getElementById('checkbox');
const body = document.body;

// Function to apply the saved theme
function applyTheme(theme) {
    if (theme === 'dark') {
        body.classList.add('dark-mode');
        themeToggle.checked = true;
    } else {
        body.classList.remove('dark-mode');
        themeToggle.checked = false;
    }
}

// Check for saved theme in localStorage
const savedTheme = localStorage.getItem('theme') || 'light';
applyTheme(savedTheme);

// Event listener for the toggle
themeToggle.addEventListener('change', () => {
    if (themeToggle.checked) {
        localStorage.setItem('theme', 'dark');
        applyTheme('dark');
    } else {
        localStorage.setItem('theme', 'light');
        applyTheme('light');
    }
});


const darkModeStyles = `
body.dark-mode {
    --background-color: var(--dark-background-color);
    --card-color: var(--dark-card-color);
    --text-color-primary: var(--dark-text-color-primary);
    --text-color-secondary: var(--dark-text-color-secondary);
    --accent-color: var(--dark-accent-color); 
    --border-color: var(--dark-border-color);
    --shadow-color: var(--dark-shadow-color);

    background-image: none;
}

body.dark-mode .perkenalan {
    background-color: var(--dark-card-color);
    border-color: var(--dark-border-color);
    box-shadow: 0 4px 15px var(--dark-shadow-color);
}

body.dark-mode .foto-profil {
    border-color: #333; 
}


body.dark-mode .nama {
    color: var(--dark-text-color-primary);
}

body.dark-mode .jabatan {
    color: var(--dark-accent-color); 
}

body.dark-mode .deskripsi {
    color: var(--dark-text-color-secondary);
}

/* Skill List */
body.dark-mode .skill-item {
    background-color: #2c2c2c; 
    border-color: #444;
}

body.dark-mode .skill-item:hover {
    border-color: var(--dark-accent-color); 
    box-shadow: 0 8px 20px var(--dark-shadow-color);
}

body.dark-mode .skill-item span {
    color: var(--dark-text-color-secondary);
}

body.dark-mode .btn {
    background-color: var(--dark-accent-color); 
    border-color: var(--dark-accent-color);
    color: var(--dark-text-color-primary); 
}

body.dark-mode .btn:hover {
    background-color: transparent;
    color: var(--dark-accent-color);
    border-color: var(--dark-accent-color);
}

body.dark-mode .btn-sekunder {
    color: var(--dark-accent-color);
    border-color: var(--dark-accent-color);
}

body.dark-mode .btn-sekunder:hover {
    background-color: var(--dark-accent-color);
    color: var(--dark-text-color-primary);
}

body.dark-mode .btn-cv {
    background-image: linear-gradient(45deg, var(--dark-cv-button-light-gray) 0%, var(--dark-cv-button-dark-gray) 100%);
    background-color: initial; 
    color: var(--dark-text-color-primary); 
    box-shadow: 0 4px 15px var(--dark-shadow-color);
}

body.dark-mode .btn-cv:hover {
    background-image: linear-gradient(45deg, var(--dark-cv-button-dark-gray) 0%, var(--dark-cv-button-light-gray) 100%);
    transform: translateY(-3px);
    box-shadow: 0 8px 25px var(--dark-shadow-color);
}


body.dark-mode .section-title,
body.dark-mode .project-title {
    color: var(--dark-text-color-primary);
}

body.dark-mode .project-description {
    color: var(--dark-text-color-secondary);
}

body.dark-mode .project-tech-list li {
    background-color: #3A3A3A; /* Abu-abu gelap untuk tech list */
    color: #E0E0E0; /* Teks abu-abu terang */
}

body.dark-mode .project-card-container {
    background-color: var(--dark-card-color);
    border-color: var(--dark-border-color);
    box-shadow: 0 8px 25px var(--dark-shadow-color);
}

body.dark-mode .project-image-container {
    box-shadow: 0 10px 30px var(--dark-shadow-color);
}


/* Organizational Experience Section */
body.dark-mode .experience-item {
    background-color: var(--dark-card-color);
    border-color: var(--dark-border-color);
    box-shadow: 0 8px 25px var(--dark-shadow-color);
}

body.dark-mode .experience-header {
    border-color: var(--dark-border-color);
}

body.dark-mode .organization-logo {
    // filter: invert(1);
}

body.dark-mode .experience-title {
    color: var(--dark-text-color-primary);
}

body.dark-mode .experience-subtitle,
body.dark-mode .experience-date,
body.dark-mode .experience-description li {
    color: var(--dark-text-color-secondary);
}

body.dark-mode .experience-description li::before {
    color: var(--dark-accent-color); /* Menggunakan accent abu-abu gelap */
}

body.dark-mode .gallery-photo {
    box-shadow: 0 2px 8px var(--dark-shadow-color);
}

/* Footer */
body.dark-mode .footer-title {
    color: var(--dark-text-color-primary);
}

body.dark-mode .footer-message,
body.dark-mode .copyright {
    color: var(--dark-text-color-secondary);
}

body.dark-mode .email-link {
    color: var(--dark-text-color-secondary);
}

body.dark-mode .email-link:hover {
    color: var(--dark-text-color-primary);
}

body.dark-mode .contact-link img {
    filter: invert(1);
}

body.dark-mode .footer-divider {
    background-color: var(--dark-border-color);
}

`;


const styleSheet = document.createElement("style");
styleSheet.innerText = darkModeStyles;
document.head.appendChild(styleSheet);