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