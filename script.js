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
const projectCard = document.querySelector('.project-card-container');
const observerOptions = {
    threshold: 0.1 
};

const targets = document.querySelectorAll('.animate-on-scroll');

// 2. Siapkan observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
        } else {
            entry.target.classList.remove('is-visible');
        }
    });
}, {
    threshold: 0.1 // Pemicu saat 10% elemen terlihat
});

// 3. Amati setiap elemen yang sudah dipilih
targets.forEach(target => {
    observer.observe(target);
});

if (projectCard) {
    observer.observe(projectCard);
}

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