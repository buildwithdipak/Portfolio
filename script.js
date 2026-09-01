const menuButton = document.querySelector('.menu');
const nav = document.querySelector('.nav nav');

const projectStyles = document.createElement('style');
projectStyles.textContent = `
  .section-no{font-size:13px!important;font-weight:800!important;letter-spacing:1.8px!important}.section-caption{font-weight:700}.project-card a{transition:transform .35s ease;display:block}.project-card:hover a{transform:translateY(-8px)}.project-card:hover .project-meta h2{color:#b4871d}.project-card:hover .project-meta b{transform:translate(4px,-4px)}.project-meta b{transition:transform .25s ease}.skill{transition:padding .3s ease,background .3s ease}.skill:hover{padding-left:15px;background:rgba(215,173,70,.07)}.chip-row span,.nav-cta{transition:background .25s,color .25s}.chip-row span:hover{background:#d7ad46;color:#11110f}
  .flip-art,.sd-art,.sentry-art,.weather-art{height:300px;position:relative;overflow:hidden;padding:18px;display:flex;flex-direction:column;justify-content:center;align-items:center}.flip-art small,.sd-art small,.sentry-art small,.weather-art small{position:absolute;top:18px;left:18px;font:9px 'DM Mono';letter-spacing:1px;color:#d7ad46}.flip-art{background:linear-gradient(145deg,#070c21,#173a85);color:#f4f0e7}.flip-art:before{content:'';position:absolute;width:270px;height:270px;border:1px solid rgba(215,173,70,.55);border-radius:50%;right:-80px;bottom:-100px}.cart-icon{width:66px;height:55px;border:2px solid #d7ad46;display:grid;place-items:center;font-size:38px;transform:skew(-8deg);z-index:1}.flip-art strong,.sd-art strong{font:500 44px 'Playfair Display';letter-spacing:-.07em;z-index:1;margin-top:13px}.flip-art strong span,.sentry-art strong span{color:#d7ad46}.flip-art p,.sd-art p,.sentry-art p,.weather-art p{font:9px 'DM Mono';letter-spacing:1px;margin:8px 0 0;z-index:1}.sd-art{background:#121211;color:#e9e5dc}.sd-art:before{content:'';position:absolute;width:270px;height:270px;border:1px solid rgba(215,173,70,.4);border-radius:50%;left:50%;top:50%;transform:translate(-50%,-50%)}.lens{width:95px;height:95px;border:2px solid #d7ad46;border-radius:50%;display:grid;place-items:center;z-index:1}.lens i{width:25px;height:25px;border-radius:50%;background:#d7ad46;box-shadow:0 0 0 12px rgba(215,173,70,.18)}.sd-art strong{font:600 66px 'DM Mono';margin:7px 0 0;color:#d7ad46}.sentry-art{background:#111b22;color:#e9e5dc}.sentry-art:before{content:'';position:absolute;width:260px;height:260px;border:1px solid #d7ad46;transform:rotate(45deg);opacity:.6}.sentry-art .shield{width:68px;height:76px;border:1px solid #d7ad46;clip-path:polygon(50% 0,100% 20%,86% 82%,50% 100%,14% 82%,0 20%);display:grid;place-items:center;font-size:28px;z-index:1}.sentry-art strong{font:500 40px 'Playfair Display';letter-spacing:-.06em;margin-top:14px;z-index:1}.weather-art{background:linear-gradient(145deg,#7c9daf,#273b4d);color:#f6f0df}.weather-art:before{content:'';position:absolute;width:330px;height:330px;border-radius:50%;border:1px solid rgba(246,240,223,.45);right:-90px;bottom:-160px}.weather-art .sun{font-size:72px;color:#e8c05b;line-height:.8;z-index:1}.weather-art strong{font:500 65px 'Playfair Display';letter-spacing:-.08em;z-index:1}.weather-art p{color:#e8c05b}@media(max-width:720px){.section-no{font-size:11px!important}.flip-art,.sd-art,.sentry-art,.weather-art{height:250px}.sentry-art{width:92%;margin:auto}.weather{width:88%;margin-left:auto}}
`;
document.head.append(projectStyles);

menuButton?.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
});

nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
}));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
