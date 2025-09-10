// Select all elements with class 'fade-in'
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
threshold: 0.2, // how much of the element should be visible
rootMargin: "0px 0px -50px 0px" // trigger before fully in view
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
entries.forEach(entry => {
if(!entry.isIntersecting) return;
entry.target.classList.add('visible');
observer.unobserve(entry.target); // stop observing after it becomes visible
});
}, appearOptions);

faders.forEach(fader => {
appearOnScroll.observe(fader);
})
