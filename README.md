<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="referrer" content="strict-origin-when-cross-origin">
<meta name="theme-color" content="#090a0c">
<meta name="description" content="Casten Artzz is a video content creator and UGC creator making natural, engaging content for brands and digital platforms.">
<title>Casten Artzz | Video Content Creator &amp; UGC Creator</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&family=Manrope:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<style>
    @import url('https://fonts.googleapis.com/css2?family=Allura&display=swap');

:root{--bg:#090a0c;--surface:#111316;--surface2:#17191d;--gold:#d9a653;--goldlight:#e7bd78;--white:#f4f4f2;--muted:#a1a5ad;--muted2:#747a84;--line:rgba(255,255,255,.12);--max:1200px}

*{box-sizing:border-box}
html{scroll-behavior:smooth;scroll-padding-top:90px}
body{margin:0;background:var(--bg);color:var(--white);font-family:"DM Sans",sans-serif;line-height:1.6}
a{color:inherit;text-decoration:none}
button{font:inherit;cursor:pointer}
img,video{display:block;max-width:100%}
.container{width:min(var(--max),calc(100% - 64px));margin:auto}
.eyebrow{color:var(--gold);font-size:.76rem;font-weight:700;letter-spacing:.19em;text-transform:uppercase}
h1,h2,h3,h4,p{margin-top:0}

.site-header{position:fixed;inset:0 0 auto;z-index:50;background:rgba(9,10,12,.9);border-bottom:1px solid var(--line);backdrop-filter:blur(18px)}
.nav-wrap{min-height:78px;display:flex;align-items:center;gap:28px}
.brand{display:flex;align-items:center;gap:10px;margin-right:auto;height:45px}
.brand img{width:48px;height:42px;object-fit:contain}

/* LOGO */
.brand-name{display:flex;align-items:baseline;gap:5px;white-space:nowrap;transform:translateY(6px)}
.casten{color:white;font-family:"Manrope",sans-serif;font-size:19px;font-weight:800;letter-spacing:-.7px}
.artzz{color:var(--goldlight);font-family:"Sacramento",cursive;font-size:24px;font-weight:400;letter-spacing:0}

.nav-links{display:flex;gap:34px;color:var(--muted);font-size:.9rem}
.nav-links a:hover{color:var(--gold)}
.nav-cta{padding:11px 19px;border:1px solid rgba(217,166,83,.65);color:var(--goldlight);font-size:.86rem;font-weight:700}
.nav-cta:hover{background:var(--gold);color:#17120a}
.menu-toggle{display:none;width:44px;height:44px;border:1px solid var(--line);background:transparent;color:white;font-size:1.35rem}

.hero{min-height:760px;padding:150px 0 100px;display:flex;align-items:center;position:relative;overflow:hidden}
.hero:before{content:"";position:absolute;width:560px;height:560px;right:-180px;top:100px;border:1px solid rgba(217,166,83,.16);border-radius:50%;box-shadow:0 0 0 70px rgba(217,166,83,.025),0 0 0 140px rgba(217,166,83,.018);pointer-events:none}
.hero-grid{display:grid;grid-template-columns:1.08fr .92fr;align-items:center;gap:72px;position:relative}
.hero-copy .eyebrow{margin-bottom:22px}
.hero h1{max-width:720px;margin-bottom:18px;font:800 clamp(3.2rem,7vw,6.6rem)/.99 "Manrope",sans-serif;letter-spacing:-.075em}
.hero h1 span,.contact-inner h2 span{color:var(--gold)}
.hero-subtitle{font-size:clamp(1.2rem,2vw,1.65rem);font-weight:600;margin-bottom:18px}
.hero-description{max-width:590px;color:var(--muted);font-size:1.08rem;line-height:1.9}
.hero-actions{display:flex;flex-wrap:wrap;gap:14px;margin-top:34px}
.btn{min-height:54px;display:inline-flex;align-items:center;justify-content:center;gap:12px;padding:0 25px;font-weight:700;transition:.22s}
.btn-primary{background:var(--gold);color:#17120a}
.btn-primary:hover{background:var(--goldlight);transform:translateY(-3px)}
.btn-outline{border:1px solid var(--line)}
.btn-outline:hover{border-color:var(--gold);color:var(--gold)}
.hero-visual{position:relative;max-width:490px;justify-self:end;width:100%}
.portrait-frame{aspect-ratio:4/5;overflow:hidden;background:var(--surface2);border:1px solid rgba(217,166,83,.35);position:relative}
.portrait-frame img{width:100%;height:100%;object-fit:cover}
.portrait-frame:after{content:"";position:absolute;inset:45% 0 0;background:linear-gradient(transparent,rgba(0,0,0,.58))}
.portrait-tag{position:absolute;z-index:2;left:-24px;bottom:28px;padding:14px 19px;background:var(--bg);border:1px solid var(--line);font-size:.78rem;letter-spacing:.13em}
.hero-index{position:absolute;right:-24px;top:22px;color:var(--gold);writing-mode:vertical-rl;letter-spacing:.25em;font-size:.7rem}

.stats{border-block:1px solid var(--line);display:grid;grid-template-columns:repeat(3,1fr)}
.stat{padding:27px 32px;border-right:1px solid var(--line)}
.stat:last-child{border:0}
.stat strong{display:block;font:800 2rem "Manrope",sans-serif}
.stat span{color:var(--muted2);text-transform:uppercase;letter-spacing:.12em;font-size:.72rem}

.section{padding:110px 0}
.section-head{display:flex;justify-content:space-between;align-items:end;gap:30px;margin-bottom:48px}
.section-head h2{margin:8px 0 0;font:800 clamp(2.2rem,4vw,3.5rem)/1.1 "Manrope",sans-serif;letter-spacing:-.06em}
.section-head>p{max-width:450px;color:var(--muted)}

.brands-section,.about-section{background:#0d0f11;border-block:1px solid var(--line)}
.brand-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
.brand-card{min-height:150px;padding:28px;border:1px solid var(--line);background:var(--surface);text-align:left;color:var(--white);transition:.25s}
.brand-card:hover,.brand-card.selected{border-color:var(--gold);transform:translateY(-4px)}
.brand-card h3{font:700 1.55rem "Manrope",sans-serif;margin:0 0 7px}
.brand-card p{color:var(--muted);font-size:.9rem;margin:0}
.brand-card span{display:block;color:var(--gold);font-size:.72rem;margin-top:20px;letter-spacing:.13em}

.filter-row{display:flex;flex-wrap:wrap;gap:10px;margin:-14px 0 48px}
.filter-btn,.portfolio-switch-btn{padding:10px 16px;border:1px solid var(--line);background:transparent;color:var(--muted);font-size:.82rem;transition:.2s}
.filter-btn:hover,.filter-btn.active,.portfolio-switch-btn:hover,.portfolio-switch-btn.active{border-color:var(--gold);background:rgba(217,166,83,.1);color:var(--goldlight)}

.brand-project{width:100%;min-width:0}
.brand-project+.brand-project{margin-top:88px}
.brand-project.is-hidden{display:none}
.project-heading{display:flex;justify-content:space-between;align-items:flex-end;flex-wrap:wrap;gap:20px;padding-bottom:20px;border-bottom:1px solid var(--line);margin-bottom:25px}
.project-heading h3{margin:5px 0 0;font:800 2rem "Manrope",sans-serif;letter-spacing:-.05em}
.project-tags{display:flex;flex-wrap:wrap;gap:8px}
.project-tags span{padding:7px 11px;border:1px solid var(--line);color:var(--muted);font-size:.72rem}

.video-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:18px}
.video-card{min-width:0;background:var(--surface);border:1px solid var(--line);overflow:hidden;transition:.25s}
.video-card:hover{border-color:rgba(217,166,83,.65);transform:translateY(-5px)}
.video-frame{position:relative;width:100%;aspect-ratio:9/16;overflow:hidden;background:var(--surface2)}
.video-frame video{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:0;transition:opacity .3s}
.video-frame video.is-ready{opacity:1}
.video-placeholder{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;color:var(--muted2);font-size:.76rem;letter-spacing:.1em;text-transform:uppercase;background:linear-gradient(145deg,#1c1e22,#101114);text-align:center;padding:15px}
.play-mark{display:grid;place-items:center;width:52px;height:52px;border:1px solid rgba(217,166,83,.6);border-radius:50%;color:var(--gold)}
.video-frame.has-video .video-placeholder{display:none}
.video-label{position:absolute;z-index:3;top:13px;left:13px;padding:6px 9px;background:rgba(9,10,12,.78);color:var(--goldlight);font-size:.62rem}
.video-copy{padding:19px}
.video-copy .eyebrow{font-size:.62rem;margin-bottom:9px}
.video-copy h4{font:700 1.02rem/1.35 "Manrope",sans-serif;margin-bottom:9px}
.video-copy>p:not(.eyebrow){min-height:66px;color:var(--muted);font-size:.82rem;line-height:1.7}
.text-link{display:inline-flex;gap:9px;align-items:center;color:var(--gold);font-size:.82rem;font-weight:700;border-bottom:1px solid rgba(217,166,83,.4);padding-bottom:5px}
.text-link:hover{color:var(--goldlight)}

/* YouTube embeds use the same portrait frame and scroll-play behaviour as UGC. */
.youtube-player{position:absolute;inset:0;width:100%;height:100%;background:#111316}
.youtube-poster{width:100%;height:100%;object-fit:cover;opacity:.82}
.youtube-player iframe{position:absolute;inset:0;width:100%;height:100%;border:0}
.youtube-player .youtube-placeholder{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:12px;background:linear-gradient(145deg,#1c1e22,#101114);color:var(--muted);font-size:.75rem;text-align:center;padding:15px}

.portfolio-switch{display:flex;flex-wrap:wrap;gap:10px;margin:0 0 38px}
.portfolio-switch-btn{padding:11px 17px;font:inherit;font-size:.84rem}
#youtubePortfolioPanel[hidden],#ugcPortfolioPanel[hidden]{display:none!important}

.about-grid{display:grid;grid-template-columns:.7fr 1.3fr;gap:80px;align-items:start}
.about-mark{font:800 clamp(4rem,10vw,8rem)/.85 "Manrope",sans-serif;color:rgba(217,166,83,.16);letter-spacing:-.1em}
.about-copy h2{font:800 clamp(2.2rem,4vw,3.5rem)/1.1 "Manrope",sans-serif;letter-spacing:-.06em;margin:8px 0 25px}
.about-copy p{color:var(--muted);font-size:1.05rem;line-height:1.95}

.service-grid{display:grid;grid-template-columns:repeat(4,1fr);border-top:1px solid var(--line);border-left:1px solid var(--line)}
.service-card{min-height:220px;position:relative;padding:25px;border-right:1px solid var(--line);border-bottom:1px solid var(--line);transition:background .25s}
.service-card:hover{background:var(--surface)}
.service-number{color:var(--gold);font-size:.72rem}
.service-card h3{font:700 1.12rem "Manrope",sans-serif;margin:30px 0 10px}
.service-card p{color:var(--muted);font-size:.84rem;line-height:1.75}
.service-arrow{position:absolute;right:22px;top:20px;color:var(--muted2)}

.contact-section{background:linear-gradient(120deg,#15120d,#0d0f11 65%);border-top:1px solid var(--line);text-align:center}
.contact-inner{max-width:780px;margin:auto}
.contact-inner h2{font:800 clamp(2.6rem,6vw,5rem)/1.05 "Manrope",sans-serif;letter-spacing:-.07em;margin:14px 0 18px}
.contact-inner>p{color:var(--muted);font-size:1.08rem}
.contact-actions{display:flex;justify-content:center;flex-wrap:wrap;gap:13px;margin:32px 0 55px}
.social-links{border-top:1px solid var(--line);padding-top:28px;display:flex;justify-content:center;flex-wrap:wrap;gap:25px}
.social-links a{color:var(--muted);font-size:.88rem}
.social-links a:hover{color:var(--gold)}

footer{padding:25px 0;border-top:1px solid var(--line);color:var(--muted2);font-size:.78rem}
.footer-inner{display:flex;justify-content:space-between;gap:20px}

.reveal{opacity:0;transform:translateY(22px);transition:opacity .7s,transform .7s}
.reveal.visible{opacity:1;transform:translateY(0)}

@media(max-width:1000px){
  .hero-grid{gap:42px}
  .video-grid{grid-template-columns:repeat(2,minmax(0,1fr))}
  .service-grid{grid-template-columns:repeat(2,1fr)}
  .about-grid{gap:40px}
}

@media(max-width:700px){
  .container{width:min(calc(100% - 38px),var(--max))}
  .nav-wrap{min-height:70px;gap:12px}
  .brand{gap:7px;height:38px}
  .brand img{width:40px;height:36px}
  .brand-name{gap:4px}
  .casten{font-size:15px}
  .artzz{font-size:21px}
  .menu-toggle{display:block;margin-left:auto}
  .nav-links{display:none;position:absolute;top:70px;left:0;right:0;padding:20px 22px 25px;background:#0d0f11;border-bottom:1px solid var(--line);flex-direction:column;gap:0}
  .nav-links.open{display:flex}
  .nav-links a{padding:13px 0;border-bottom:1px solid var(--line)}
  .nav-cta{display:none}
  .hero{min-height:auto;padding:125px 0 65px}
  .hero-grid{grid-template-columns:1fr;gap:45px}
  .hero h1{font-size:clamp(3.2rem,16vw,5.3rem)}
  .hero-visual{width:82%;justify-self:center;margin-right:8px}
  .portrait-tag{left:-15px;bottom:18px}
  .hero-index{right:-17px}
  .stats{grid-template-columns:1fr 1fr}
  .stat{padding:20px 16px}
  .stat:nth-child(2){border-right:0}
  .stat:last-child{grid-column:1/-1;border-top:1px solid var(--line)}
  .stat strong{font-size:1.7rem}
  .section{padding:76px 0}
  .section-head{display:block;margin-bottom:34px}
  .section-head>p{margin-top:14px}
  .brand-grid{grid-template-columns:1fr;gap:10px}
  .brand-card{min-height:125px}
  .filter-row{margin:-8px 0 38px;gap:8px}
  .filter-btn{padding:9px 12px;font-size:.76rem}
  .project-heading{display:block}
  .project-tags{margin-top:17px}
  .video-grid{grid-template-columns:repeat(2,minmax(0,1fr));gap:11px}
  .video-copy{padding:13px}
  .video-copy h4{font-size:.9rem}
  .video-copy>p:not(.eyebrow){font-size:.75rem;min-height:95px}
  .about-grid{grid-template-columns:1fr;gap:20px}
  .about-mark{font-size:5rem}
  .service-grid{grid-template-columns:1fr 1fr}
  .service-card{min-height:205px;padding:18px}
  .service-card h3{font-size:1rem;margin-top:24px}
  .footer-inner{display:block;text-align:center}
  .footer-inner span{display:block;margin-top:7px}
  .portfolio-switch{gap:8px;margin-bottom:30px}
  .portfolio-switch-btn{padding:10px 12px;font-size:.76rem}
}

@media(max-width:390px){
  .video-grid{grid-template-columns:1fr}
  .video-copy>p:not(.eyebrow){min-height:0}
  .service-grid{grid-template-columns:1fr}
  .hero-actions .btn{width:100%}
}

@media(prefers-reduced-motion:reduce){
  *,*::before,*::after{scroll-behavior:auto!important;animation-duration:.01ms!important;transition-duration:.01ms!important}
  .reveal{opacity:1;transform:none}
}

/* Native controls for UGC videos */
#projects .video-frame video[controls] {
  z-index: 2;
}
#projects .video-frame video[controls]::-webkit-media-controls {
  display: flex !important;
  opacity: 1 !important;
}
</style>
</head>
<body>
<header class="site-header"><div class="container nav-wrap">
<a class="brand" href="#home"><img src="logo.png" alt="CA Logo"><span class="brand-name"><span class="casten">CASTEN</span><span class="artzz">ARTZZ</span></span></a>
<nav class="nav-links" id="mainNav" aria-label="Main navigation"><a href="#work">Work</a><a href="#about">About</a><a href="#services">Services</a><a href="#contact">Contact</a></nav>
<a class="nav-cta" href="#contact">LET'S TALK ↗</a><button class="menu-toggle" id="menuToggle" aria-label="Open navigation" aria-expanded="false">☰</button>
</div></header>
<main>
<section class="hero" id="home"><div class="container hero-grid">
<div class="hero-copy reveal"><p class="eyebrow">VIDEO CREATOR &nbsp;·&nbsp; UGC CREATOR</p><h1>I'm <span>Casten</span><br>Artzz.</h1><p class="hero-subtitle">Content that feels real. Stories that connect.</p><p class="hero-description">I'm a video content creator and UGC creator making natural, engaging videos for brands, products and digital platforms — from talking head videos and product demos to explainers and short form content.</p><div class="hero-actions"><a class="btn btn-primary" href="#work">Explore My Work <span>↗</span></a><a class="btn btn-outline" href="contact.html">Work With Me</a></div></div>
<div class="hero-visual reveal"><div class="portrait-frame"><img src="castimg.jpg" alt="Portrait of Casten Artzz" onerror="this.style.display='none'"></div><div class="portrait-tag">VIDEO CREATOR · UGC</div><span class="hero-index">CREATIVE PORTFOLIO — 2026</span></div>
</div></section>
<div class="container"><div class="stats"><div class="stat"><strong>UGC</strong><span>Creator led content</span></div><div class="stat"><strong>Short form</strong><span>Social-first videos</span></div><div class="stat"><strong>Brand</strong><span>Storytelling &amp; content</span></div></div></div>
<section class="section brands-section" id="brands"><div class="container">
<div class="section-head reveal"><div><p class="eyebrow">COLLABORATIONS</p><h2>Brands I have created for.</h2></div><p>A selection of brands and projects I have supported through creator led video content.</p></div>
<div class="brand-grid reveal">
<button class="brand-card" data-filter="willo"><h3>Willo.ai</h3><p>UGC &amp; short form content</p><span>Explore project ↗</span></button>
<button class="brand-card" data-filter="jarveyai"><h3>JarveyAI</h3><p>UGC &amp; short form content</p><span>Explore project ↗</span></button>
<button class="brand-card" data-filter="keyframe"><h3>keyfraME</h3><p>UGC &amp; short form content</p><span>Explore project ↗</span></button>
<button class="brand-card" data-filter="BlogsEo"><h3>BlogsEo</h3><p>UGC &amp; short form content</p><span>Explore project ↗</span></button>
</div></div></section>
<section class="section" id="work"><div class="container">
<div class="portfolio-switch" role="tablist" aria-label="Choose portfolio category">
<button type="button" class="portfolio-switch-btn active" id="ugcTab" role="tab" aria-selected="true" aria-controls="ugcPortfolioPanel">UGC &amp; Brand Content</button>
<button type="button" class="portfolio-switch-btn" id="youtubeTab" role="tab" aria-selected="false" aria-controls="youtubePortfolioPanel">YouTube &amp; Web3 Creator</button>
</div>
<div id="ugcPortfolioPanel" role="tabpanel" aria-labelledby="ugcTab">
<div class="section-head reveal"><div><p class="eyebrow">THE PORTFOLIO</p><h2>Selected work.</h2></div><p>Watch a selection of my creator content. Each video can also be opened directly on TikTok.</p></div>
<div class="filter-row reveal" aria-label="Filter projects"><button class="filter-btn active" data-filter="all">All projects</button><button class="filter-btn" data-filter="willo">Willo.ai</button><button class="filter-btn" data-filter="jarveyai">JarveyAI</button><button class="filter-btn" data-filter="keyframe">keyfraME</button><button class="filter-btn" data-filter="BlogsEo">BlogsEo</button></div>
<div id="projects"></div>
</div>
<div id="youtubePortfolioPanel" role="tabpanel" aria-labelledby="youtubeTab" hidden>
<div class="brand-project youtube-project">
<div class="project-heading"><div><p class="eyebrow">YOUTUBE &amp; WEB3 CREATOR</p><h3>YouTube videos.</h3></div><div class="project-tags"><span>Web3 Creator</span><span>YouTube</span><span>Education &amp; Conversations</span></div></div>
<div class="creator-channel-card">
  <div class="creator-channel-avatar"><img src="logo - Copy.png" alt="Casten Artzz logo"></div>
  <div class="creator-channel-copy">
    <p class="eyebrow">CREATOR CHANNEL</p>
    <h4>CASTEN ARTZZ</h4>
    <p>Web3, blockchain education, conversations and creator content.</p>
  </div>
  <a class="creator-channel-cta" href="https://www.youtube.com/channel/UCwpY7D3iYc_P6zUyoSkO6MQ" target="_blank" rel="noopener noreferrer">View YouTube Channel <span>↗</span></a>
</div>
<div class="video-grid" id="youtubeProjects"></div>
</div></div>
</div></section>
<section class="section about-section" id="about"><div class="container about-grid"><div class="about-mark reveal">CA<span style="color:var(--gold)">.</span></div><div class="about-copy reveal"><p class="eyebrow">A LITTLE ABOUT ME</p><h2>Good content should feel human.</h2><p>I'm Casten Artzz, a video content creator and UGC creator focused on making content that feels natural, clear and engaging. I create videos for brands, products and online platforms, including UGC videos, talking head content, explainers, product videos and social media content.</p><p>I care about making content that looks good while still feeling human and easy to connect with. My goal is to help brands communicate their message in a way people actually want to watch.</p></div></div></section>
<section class="section" id="services"><div class="container"><div class="section-head reveal"><div><p class="eyebrow">WHAT I DO</p><h2>Creative services.</h2></div><p>From the first idea to the final edit, I create video content built for people and platforms.</p></div>
<div class="service-grid reveal">
<article class="service-card"><span class="service-number">01</span><h3>UGC Videos</h3><p>Natural creator style videos made to feel relatable and connect with an audience.</p><span class="service-arrow">↗</span></article>
<article class="service-card"><span class="service-number">02</span><h3>Product Videos</h3><p>Clear, engaging content that brings product features and benefits to life.</p><span class="service-arrow">↗</span></article>
<article class="service-card"><span class="service-number">03</span><h3>Talking Head Videos</h3><p>On camera content for brands, products, education and social platforms.</p><span class="service-arrow">↗</span></article>
<article class="service-card"><span class="service-number">04</span><h3>Short form Content</h3><p>Vertical videos tailored for TikTok, Instagram Reels and other social feeds.</p><span class="service-arrow">↗</span></article>
<article class="service-card"><span class="service-number">05</span><h3>Explainer Videos</h3><p>Straightforward storytelling that makes products, platforms and ideas easier to understand.</p><span class="service-arrow">↗</span></article>
<article class="service-card"><span class="service-number">06</span><h3>Video Editing</h3><p>Polished edits for social media, campaigns and branded content.</p><span class="service-arrow">↗</span></article>
<article class="service-card"><span class="service-number">07</span><h3>Social Media Content</h3><p>Platform aware content shaped around how people discover and watch videos.</p><span class="service-arrow">↗</span></article>
<article class="service-card"><span class="service-number">08</span><h3>Hosting &amp; AMAs</h3><p>Conversational hosting for online sessions, AMAs and community content.</p><span class="service-arrow">↗</span></article>
</div></div></section>
<section class="section contact-section" id="contact"><div class="container contact-inner reveal"><p class="eyebrow">HAVE A PROJECT IN MIND?</p><h2>Let's make something <span>worth watching.</span></h2><p>Have a product to introduce, a story to tell or a campaign to bring to life? Let's talk.</p><div class="contact-actions"><a class="btn btn-primary" href="contact.html">Work With Me <span>↗</span></a><a class="btn btn-outline" href="#work">View Projects</a></div><div class="social-links"><a href="#" target="_blank" rel="noopener noreferrer">TikTok ↗</a><a href="https://www.youtube.com/channel/UCwpY7D3iYc_P6zUyoSkO6MQ" target="_blank" rel="noopener noreferrer">YouTube ↗</a><a href="#" target="_blank" rel="noopener noreferrer">X / Twitter ↗</a></div></div></section>
</main>
<footer><div class="container footer-inner"><div>© <span id="year"></span> Casten Artzz. All rights reserved.</div><span>Made with intention.</span></div></footer>
<script>
document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // UGC PROJECT DATA — keep video files in the same folder as this HTML.
  const projectData = [
    {brand:"willo",name:"Willo.ai",tag:"TIKTOK · WILLO.AI",videos:[
      ["Automate Your Project Intake","Freelancers can use Scopekit to keep all their client project information in one spot. This is better than trying to track requests from different message threads..","willo-1.MP4","","https://vt.tiktok.com/ZSgX96e7U/"],
      ["Product Introduction","Here's a short video idea for Willo AI. It shows how businesses can take customer questions from messy direct messages and put them into neat, organized forms.","willo-2.mp4","","https://vt.tiktok.com/ZSgX9hTUg/"],
      ["Build in Public / Website Creation","A short user generated video showing how Willo AI takes a basic idea and builds it into a working website for weekly meal planning.","willo-3.mp4","","https://vt.tiktok.com/ZSgX9awvd/"]
    ]},
    {brand:"jarveyai",name:"JarveyAI",tag:"TIKTOK · JARVEYAI",videos:[
      ["Jarvey AI Showcase","Product demonstration highlighting Jarvey AI’s features, interface and AI mepowered capabilities through a screen recorded walkthrough.","jarveyai-1.mp4","","https://vt.tiktok.com/ZSgX9LTqx/"],
      ["Jarvey AI Product Demo","A video showing how Jarvey uses AI to search documents, find information, and give answers while someone is demonstrating it live.","jarveyai-2.mp4","","https://vt.tiktok.com/ZSgX9ymW1/"],
      ["Jarvey AI Virtual Meeting Showcase","A social first video demonstrating Jarvey AI’s meeting scheduling, calendar integration and virtual meeting experience.","jarveyai-3.mp4","","https://vt.tiktok.com/ZSgX9UNnT/"]
    ]},
    {brand:"keyframe",name:"keyfraME",tag:"TIKTOK · KEYFRAME",videos:[
      ["Keyframe Video Showcase","Creator-led video presenting key insights and commentary in an engaging, conversational format.","keyframe-1.mp4","photo_2026-10-28_07-16-16.jpg","https://vt.tiktok.com/ZSgXHVNof/"],
      ["Keyframe Creator Commentary","Video with creators talking directly to the camera, sharing their thoughts and having interesting conversations, all made for social media.","keyframe-2.mp4","photo_2026-10-28_07-16-04.jpg","https://vt.tiktok.com/ZSgXHgnDo/"],
      ["Keyframe Creator Talk","A simple, natural video of the creator sharing thoughts and speaking directly to the audience.","keyframe-3.mp4","photo_2026-10-28_07-15-43.jpg","https://vt.tiktok.com/ZSgXHb3cD/"]
    ]},
    {brand:"BlogsEo",name:"BlogsEo",tag:"BLOGSEO",videos:[
      ["SEO & Blog Content","A simple look at how SEO tools and blog content can help improve a website’s visibility and reach more people online.","Blog Seo 1.mp4","","#"],
      ["AI-Powered SEO Workflow","A quick look at how Claude and BlogSEO can work together to connect a website and help bring in more organic traffic.","Blog Seo 2.mp4","","#"],
      ["Blog SEO Integration Guide","A simple walkthrough showing how to connect BlogSEO to your website and use its tools to improve your site's SEO.","Blog Seo 3.mp4","","#"]
    ]}
  ];

  // YOUTUBE / WEB3 VIDEOS — local MP4 files, using the same setup as UGC.
  // Keep these MP4 files beside home.html, or change the paths to match your folders.
  const youtubeData = [
    {title:"How to Bridge $MNT to Solana",description:"Here's how to move MNT to Solana, connect your wallet, set up the transfer, and finish moving your funds across chains..",src:"maple-1.mp4",link:"https://youtu.be/VcnRtxz3dMo?si=ONtKtmnYeWzLp-kK"},
    {title:"How mETH Works: The Simplest Liquid Staking Explanation",description:"Here's a simple explanation of mETH, liquid staking, and how you can keep using your staked Ethereum while earning rewards..",src:"menth-1.mp4",link:"https://youtu.be/ffXX0XsHFws?si=5srS1MZHA4FLBBU3"},
    {title:"Mystery Gift with Casten (2025)",description:"Surprising people with unexpected gifts, capturing genuine reactions, joyful moments and meaningful street encounters.",src:"eth-1.mp4",link:"https://youtu.be/1ZtdEMiOBYs?si=F4ViRXcw9Bp6RxIa "}
  ];

  // Build UGC cards.
  const projects = document.getElementById("projects");
  if (projects) {
    projects.innerHTML = "";
    projectData.forEach(project => {
      const section = document.createElement("section");
      section.className = "brand-project";
      section.dataset.brand = project.brand;
      section.innerHTML = `<div class="project-heading"><div><p class="eyebrow">SELECTED BRAND WORK</p><h3>${project.name}</h3></div><div class="project-tags"><span>Video content creator</span><span>UGC / Short form</span><span>TikTok</span></div></div><div class="video-grid"></div>`;
      const grid = section.querySelector(".video-grid");
      project.videos.forEach((item,index) => {
        const [title,description,src,poster,url] = item;
        const card = document.createElement("article");
        card.className = "video-card";
        card.innerHTML = `<div class="video-frame">
         <video class="portfolio-video" controls muted playsinline loop preload="none" ${poster ? `poster="${poster}"` : ""} data-src="${src}" aria-label="${title}"></video>
          <div class="video-placeholder"><span class="play-mark">▶</span><span>Video loading...</span></div>
          <span class="video-label">UGC FILM · ${String(index+1).padStart(2,"0")}</span>
        </div><div class="video-copy"><p class="eyebrow">${project.tag}</p><h4>${title}</h4><p>${description}</p><a class="text-link" href="${url}" ${url !== "#" ? 'target="_blank" rel="noopener noreferrer"' : ""}>${url === "#" ? "Add video link" : "Watch on TikTok"} <span>↗</span></a></div>`;
        grid.appendChild(card);
      });
      projects.appendChild(section);
    });
  }

  // Build YouTube / Web3 cards using local MP4 files, exactly like UGC.
  const youtubeContainer = document.getElementById("youtubeProjects");
  if (youtubeContainer) {
    youtubeContainer.innerHTML = "";
    youtubeData.forEach((video,index) => {
      const card = document.createElement("article");
      card.className = "video-card";
      const safeLink = video.link && video.link !== "#";
      card.innerHTML = `<div class="video-frame">
        <video class="portfolio-video youtube-video-controls" controls muted playsinline loop preload="none" data-src="${video.src}" aria-label="${video.title}"></video>
        <div class="video-placeholder"><span class="play-mark">▶</span><span>Video loading...</span></div>
        <span class="video-label">WEB3 VIDEO · ${String(index+1).padStart(2,"0")}</span>
      </div><div class="video-copy"><p class="eyebrow">YOUTUBE · WEB3 CREATOR</p><h4>${video.title}</h4><p>${video.description}</p>${safeLink ? `<a class="text-link" href="${video.link}" target="_blank" rel="noopener noreferrer">Watch on YouTube <span>↗</span></a>` : ""}</div>`;
      youtubeContainer.appendChild(card);
    });
  }

  // Mobile navigation.
  const menuToggle = document.getElementById("menuToggle");
  const mainNav = document.getElementById("mainNav");
  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", () => {
      const open = mainNav.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", String(open));
      menuToggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
      menuToggle.textContent = open ? "×" : "☰";
    });
    mainNav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
      mainNav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded","false");
      menuToggle.setAttribute("aria-label","Open navigation");
      menuToggle.textContent = "☰";
    }));
  }

  // Switch between UGC and YouTube panels.
  const ugcTab = document.getElementById("ugcTab");
  const youtubeTab = document.getElementById("youtubeTab");
  const ugcPanel = document.getElementById("ugcPortfolioPanel");
  const youtubePanel = document.getElementById("youtubePortfolioPanel");
  function showPortfolio(type) {
    const showUgc = type === "ugc";
    ugcPanel.hidden = !showUgc;
    youtubePanel.hidden = showUgc;
    ugcTab.classList.toggle("active",showUgc);
    youtubeTab.classList.toggle("active",!showUgc);
    ugcTab.setAttribute("aria-selected",String(showUgc));
    youtubeTab.setAttribute("aria-selected",String(!showUgc));
    // Pause videos in the panel that is being hidden.
    const hiddenPanel = showUgc ? youtubePanel : ugcPanel;
    hiddenPanel.querySelectorAll("video").forEach(video => video.pause());
  }
  ugcTab?.addEventListener("click",() => showPortfolio("ugc"));
  youtubeTab?.addEventListener("click",() => showPortfolio("youtube"));

  // Brand filters.
  function filterProjects(filter) {
    document.querySelectorAll("#projects .brand-project").forEach(project => {
      project.classList.toggle("is-hidden",filter !== "all" && project.dataset.brand !== filter);
    });
    document.querySelectorAll(".filter-btn").forEach(button => button.classList.toggle("active",button.dataset.filter === filter));
    document.querySelectorAll(".brand-card").forEach(button => button.classList.toggle("selected",button.dataset.filter === filter));
  }
  document.querySelectorAll(".filter-btn,.brand-card").forEach(button => button.addEventListener("click",() => {
    filterProjects(button.dataset.filter);
    if (button.classList.contains("brand-card")) document.getElementById("work")?.scrollIntoView({behavior:"smooth"});
  }));

  // Scroll reveal.
  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add("visible"); revealObserver.unobserve(entry.target); }
    }),{threshold:.12});
    document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));

    // UGC: load once, play while in view, pause when out of view.
    const videoObserver = new IntersectionObserver(entries => entries.forEach(entry => {
      const video = entry.target;
      const frame = video.closest(".video-frame");
      const placeholder = frame?.querySelector(".video-placeholder");
      if (entry.isIntersecting) {
        if (!video.dataset.loaded) {
          video.dataset.loaded = "true";
          video.src = video.dataset.src;
          video.load();
          video.addEventListener("canplay",() => {
            video.classList.add("is-ready");
            frame?.classList.add("has-video");
            if (placeholder) placeholder.style.display = "none";
            video.play().catch(() => {});
          },{once:true});
          video.addEventListener("error",() => {
            if (placeholder) placeholder.innerHTML = `<span class="play-mark">!</span><span>Unable to load video</span>`;
            console.error("Video loading failed:",video.dataset.src);
          },{once:true});
        } else {
          video.play().catch(() => {});
        }
      } else {
        video.pause();
      }
    }),{rootMargin:"100px 0px",threshold:.55});
    document.querySelectorAll(".portfolio-video").forEach(video => videoObserver.observe(video));


  } else {
    document.querySelectorAll(".reveal").forEach(el => el.classList.add("visible"));
    document.querySelectorAll(".portfolio-video").forEach(video => { video.src = video.dataset.src; video.controls = true; video.load(); });
    document.querySelectorAll(".youtube-player[data-video-id]").forEach(player => {
      const id = player.dataset.videoId;
      if (!id) return;
      const iframe = createYoutubeIframe(id);
      player.appendChild(iframe);
    });
  }
});
</script>
</body>
</html>
