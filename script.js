// Header scroll
window.addEventListener('scroll',()=>{
  document.querySelector('header')
    .classList.toggle('scrolled',window.scrollY>60);
});

// Scroll animation
const reveals=document.querySelectorAll(
  '.reveal,.reveal-left,.reveal-right,.reveal-zoom'
);

const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }
  });
},{threshold:0.15});

reveals.forEach(el=>observer.observe(el));
