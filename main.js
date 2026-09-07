
const toggle=document.querySelector('.nav-toggle');
const links=document.querySelector('.nav-links');
if(toggle && links){
  toggle.addEventListener('click',()=>{
    const open=links.classList.toggle('open');
    toggle.setAttribute('aria-expanded',open);
    document.body.classList.toggle('menu-open',open);
  });
  links.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
    links.classList.remove('open');
    document.body.classList.remove('menu-open');
    toggle.setAttribute('aria-expanded','false');
  }));
}
const path=location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(a=>{
  const href=a.getAttribute('href')||'';
  if((path==='index.html' && href.startsWith('index.html')) || href===path) a.classList.add('active');
});
