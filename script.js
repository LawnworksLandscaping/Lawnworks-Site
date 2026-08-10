const menu = document.querySelector('.menu-toggle');
const links = document.querySelector('.nav-links');
menu?.addEventListener('click', () => links.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(a => a.addEventListener('click', () => links.classList.remove('open')));

const siteHeader = document.querySelector('.site-header');
function updateHeaderScroll(){
  if(!siteHeader) return;
  if(window.scrollY > 40) siteHeader.classList.add('scrolled');
  else siteHeader.classList.remove('scrolled');
}
window.addEventListener('scroll', updateHeaderScroll, { passive: true });
updateHeaderScroll();

const revealTargets = document.querySelectorAll('.reveal, .reveal-item');
if('IntersectionObserver' in window && revealTargets.length){
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
  revealTargets.forEach(el => revealObserver.observe(el));
} else {
  revealTargets.forEach(el => el.classList.add('is-visible'));
}

const baSlider=document.getElementById('baSlider');const baBefore=document.querySelector('.ba-before');const baDivider=document.querySelector('.ba-divider');const baHandle=document.querySelector('.ba-handle');const baLabelBefore=document.querySelector('.ba-label-before');const baLabelAfter=document.querySelector('.ba-label-after');function updateBeforeAfter(value){const pct=Number(value);if(!baBefore||!baDivider||!baHandle)return;baBefore.style.clipPath='inset(0 '+(100-pct)+'% 0 0)';baDivider.style.left=pct+'%';baHandle.style.left=pct+'%';if(baLabelBefore)baLabelBefore.style.opacity=Math.min(pct/12,1);if(baLabelAfter)baLabelAfter.style.opacity=Math.min((100-pct)/12,1)}baSlider?.addEventListener('input',e=>updateBeforeAfter(e.target.value));updateBeforeAfter(50);
