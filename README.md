<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Casten Artzz | YouTuber, Web3 Creator and blockchain educationist.">
  <title>Casten Artzz | Web3 Creator</title>

  <style>
    @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap');

    :root{
      --bg:#080a0d;
      --panel:#101318;
      --panel2:#151920;
      --text:#f4f5f6;
      --muted:#8d949e;
      --line:rgba(255,255,255,.09);
      --accent:#d7a65c;
      --accent2:#b98945;
      --max:1180px;
    }

    *{
  box-sizing:border-box;
  margin:0;
  padding:0;
  max-width:100%;
}

html,
body{
  overflow-x:hidden;
}

section,
nav,
footer,
main{
  width:100%;
  max-width:100%;
  overflow-x:clip;
}
  html{
  scroll-behavior:smooth;
  width:100%;
  max-width:100%;
  overflow-x:hidden;
}

body{
  background:var(--bg);
  color:var(--text);
  font-family:"DM Sans",sans-serif;
  line-height:1.6;
  width:100%;
  max-width:100%;
  overflow-x:hidden;
  position:relative;
}

    a{text-decoration:none;color:inherit}
    img{max-width:100%;display:block}
    button{font:inherit}

    body::before{
      content:"";
      position:fixed;
      inset:0;
      pointer-events:none;
      background-image:
        linear-gradient(rgba(255,255,255,.018) 1px,transparent 1px),
        linear-gradient(90deg,rgba(255,255,255,.018) 1px,transparent 1px);
      background-size:70px 70px;
      mask-image:linear-gradient(to bottom,#000,transparent 80%);
    }

    .container{
      width:min(var(--max),calc(100% - 40px));
      margin:auto;
    }

    .eyebrow{
      color:var(--accent);
      text-transform:uppercase;
      letter-spacing:.14em;
      font-size:11px;
      font-weight:600;
    }

    .section{
      padding:100px 0;
      border-bottom:1px solid var(--line);
    }

    .section-title{
      font-family:"Space Grotesk",sans-serif;
      font-size:clamp(34px,5vw,54px);
      line-height:1.05;
      letter-spacing:-.04em;
      margin-top:10px;
    }

    .section-copy{
      color:var(--muted);
      max-width:690px;
      margin-top:16px;
      font-size:15px;
    }

    /* NAV */
    .navbar{
      position:sticky;
      top:0;
      z-index:100;
      background:rgba(8,10,13,.88);
      backdrop-filter:blur(18px);
      border-bottom:1px solid var(--line);
    }

    .nav-inner{
      min-height:78px;
      display:flex;
      align-items:center;
      justify-content:space-between;
      gap:25px;
    }

    .logo{
      display:flex;
      align-items:center;
      gap:10px;
      font-family:"Space Grotesk",sans-serif;
      font-weight:700;
      letter-spacing:.02em;
      font-size:18px;
    }

    .logo-mark{
      width:35px;
      height:35px;
      border:1px solid rgba(215,166,92,.5);
      display:grid;
      place-items:center;
      color:var(--accent);
      font-size:12px;
    }

    .nav-links{
      display:flex;
      align-items:center;
      gap:28px;
      list-style:none;
      color:var(--muted);
      font-size:13px;
    }

    .nav-links a{transition:.2s}
    .nav-links a:hover,
    .nav-links a.active{color:var(--text)}

    .nav-button{
      border:1px solid var(--line);
      padding:10px 15px;
      font-size:12px;
      transition:.2s;
    }

    .nav-button:hover{
      border-color:var(--accent);
      color:var(--accent);
    }

    .menu-toggle{
      display:none;
      background:transparent;
      border:1px solid var(--line);
      color:var(--text);
      padding:9px 11px;
      cursor:pointer;
    }

    /* HERO */
    .hero{
      min-height:calc(100vh - 78px);
      display:flex;
      align-items:center;
      padding:80px 0;
      border-bottom:1px solid var(--line);
      position:relative;
    }

    .hero::after{
  content:"";
  position:absolute;
  width:480px;
  height:480px;
  right:-250px;
  top:80px;
  border-radius:50%;
  background:rgba(215,166,92,.07);
  filter:blur(80px);
  pointer-events:none;
    }

    .hero-container{
      display:grid;
      grid-template-columns:390px 1fr;
      gap:75px;
      align-items:center;
    }

    .hero-image{
      position:relative;
    }

    .hero-image::before{
      content:"";
      position:absolute;
      inset:18px -18px -18px 18px;
      border:1px solid rgba(215,166,92,.3);
      z-index:0;
    }

    .hero-image img{
      position:relative;
      z-index:1;
      width:100%;
      aspect-ratio:4/5;
      object-fit:cover;
      background:var(--panel);
      border:1px solid var(--line);
    }

    .hero-image-note{
      position:absolute;
      z-index:2;
      bottom:14px;
      left:14px;
      padding:7px 10px;
      background:rgba(8,10,13,.82);
      border:1px solid var(--line);
      color:#d8dce1;
      font-size:10px;
      text-transform:uppercase;
      letter-spacing:.1em;
    }

    .hero-text h1{
      font-family:"Space Grotesk",sans-serif;
      font-size:clamp(48px,7vw,82px);
      line-height:.98;
      letter-spacing:-.055em;
      margin:14px 0 18px;
    }

    .hero-text h1 span{color:var(--accent)}
    .hero-text h2{
      font-size:17px;
      font-weight:500;
      color:#c8cdd4;
      margin-bottom:18px;
    }

    .hero-text p{
      color:var(--muted);
      max-width:650px;
      font-size:16px;
      line-height:1.8;
    }

    .hero-buttons{
      display:flex;
      gap:10px;
      flex-wrap:wrap;
      margin-top:30px;
    }

    .btn{
      display:inline-flex;
      align-items:center;
      justify-content:center;
      padding:13px 19px;
      border:1px solid var(--line);
      font-size:12px;
      font-weight:600;
      transition:.25s;
    }

    .btn-primary{
      background:var(--accent);
      color:#15110a;
      border-color:var(--accent);
    }

    .btn-secondary:hover{
      border-color:var(--accent);
      color:var(--accent);
    }

    .hero-stats{
      display:grid;
      grid-template-columns:repeat(4,1fr);
      border-top:1px solid var(--line);
      margin-top:65px;
    }

    .hero-stat{
      padding:20px 15px 0;
      border-right:1px solid var(--line);
    }

    .hero-stat:last-child{border-right:0}
    .hero-stat strong{
      font-family:"Space Grotesk",sans-serif;
      font-size:23px;
    }

    .hero-stat span{
      display:block;
      color:var(--muted);
      font-size:10px;
      text-transform:uppercase;
      letter-spacing:.08em;
      margin-top:4px;
    }

    /* VISION */
    .vision-grid{
      display:grid;
      grid-template-columns:.8fr 1.2fr;
      gap:70px;
      align-items:start;
    }

    .vision-copy{
      color:var(--muted);
      font-size:18px;
      line-height:1.85;
      max-width:700px;
    }

    /* EXPERTISE */
    .expertise-grid{
      display:grid;
      grid-template-columns:repeat(3,1fr);
      gap:14px;
      margin-top:45px;
    }

    .expertise-item{
      padding:28px;
      background:var(--panel);
      border:1px solid var(--line);
      min-height:210px;
      transition:.25s;
    }

    .expertise-item:hover{
      transform:translateY(-4px);
      border-color:rgba(215,166,92,.35);
    }

    .expertise-number{
      color:var(--accent);
      font-size:11px;
      margin-bottom:42px;
    }

    .expertise-item h3{
      font-family:"Space Grotesk",sans-serif;
      font-size:20px;
      margin-bottom:9px;
    }

    .expertise-item p{
      color:var(--muted);
      font-size:13px;
    }

    /* FEATURED */
    .featured{
      background:#0b0e12;
    }

    .featured-header{
      display:flex;
      justify-content:space-between;
      align-items:end;
      gap:30px;
      margin-bottom:35px;
    }

    .featured-header p{
      color:var(--muted);
      font-size:12px;
      max-width:330px;
      text-align:right;
    }

    .work-card-media {
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
}

.work-card-media img,
.work-card-media video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

    .work-card:hover{
      transform:translateY(-5px);
      border-color:rgba(215,166,92,.35);
    }

    .work-image{
      aspect-ratio:16/10;
      background:
        radial-gradient(circle at 80% 20%,rgba(215,166,92,.17),transparent 32%),
        linear-gradient(140deg,#1a2029,#0e1116);
      display:flex;
      align-items:flex-end;
      padding:16px;
      position:relative;
      overflow:hidden;
    }

    .work-image.green{
      background:
        radial-gradient(circle at 80% 20%,rgba(90,174,155,.18),transparent 32%),
        linear-gradient(140deg,#14221f,#0e1116);
    }

    .work-image.blue{
      background:
        radial-gradient(circle at 80% 20%,rgba(84,125,180,.18),transparent 32%),
        linear-gradient(140deg,#151f2b,#0e1116);
    }

    .work-index{
      position:absolute;
      right:14px;
      top:13px;
      color:rgba(255,255,255,.38);
      font-size:10px;
    }

    .work-label{
      background:rgba(8,10,13,.72);
      border:1px solid var(--line);
      padding:6px 9px;
      color:#d9dde3;
      font-size:9px;
      text-transform:uppercase;
      letter-spacing:.09em;
    }

    .work-content{
      padding:21px;
    }

    .work-content h3{
      font-family:"Space Grotesk",sans-serif;
      font-size:19px;
    }

    .work-content p{
      color:var(--muted);
      font-size:13px;
      margin-top:7px;
    }

    .work-content small{
      display:block;
      color:var(--accent);
      margin-top:15px;
      font-size:10px;
      text-transform:uppercase;
      letter-spacing:.09em;
    }

    /* PARTNERS */
    .partner-logos{
      display:grid;
      grid-template-columns:repeat(5,1fr);
      gap:12px;
      margin-top:38px;
    }

    .partner{
      height:105px;
      background:var(--panel);
      border:1px solid var(--line);
      display:flex;
      align-items:center;
      justify-content:center;
      padding:20px;
    }

    .partner img{
      max-width:150px;
      max-height:65px;
      object-fit:contain;
      filter:grayscale(1);
      opacity:.72;
      transition:.25s;
    }

    .partner:hover img{
      filter:none;
      opacity:1;
    }

    /* TESTIMONIALS */
    .testimonial-cards{
      display:grid;
      grid-template-columns:repeat(2,1fr);
      gap:14px;
      margin-top:38px;
    }

    .testimonial{
      padding:28px;
      background:var(--panel);
      border:1px solid var(--line);
    }

    .testimonial p{
      color:#cdd1d7;
      line-height:1.8;
      font-size:14px;
    }

    .testimonial strong{
      display:block;
      color:var(--accent);
      margin-top:22px;
      font-size:11px;
      text-transform:uppercase;
      letter-spacing:.08em;
    }

    /* CTA */
    .cta{
      padding:105px 0;
      text-align:center;
      border-bottom:1px solid var(--line);
    }

    .cta h2{
      font-family:"Space Grotesk",sans-serif;
      font-size:clamp(36px,6vw,65px);
      line-height:1.05;
      letter-spacing:-.045em;
    }

    .cta h2 span{color:var(--accent)}
    .cta p{
      color:var(--muted);
      max-width:570px;
      margin:17px auto 28px;
    }

    /* FOOTER */
    footer{
      padding:30px 0;
      color:var(--muted);
      font-size:11px;
    }

    .footer-inner{
      display:flex;
      justify-content:space-between;
      gap:20px;
    }

    /* ANIMATION */
    .reveal{
      opacity:0;
      transform:translateY(18px);
      transition:opacity .7s ease,transform .7s ease;
    }

    .reveal.show{
      opacity:1;
      transform:none;
    }


    /* BRANDS */
    .brands-section{
      background:#0b0e12;
    }

    .brands-heading h2{
      font-family:"Space Grotesk",sans-serif;
      font-size:clamp(34px,5vw,54px);
      line-height:1.05;
      letter-spacing:-.04em;
      margin-top:10px;
    }

    .brands-heading p{
      color:var(--muted);
      max-width:600px;
      margin-top:14px;
      font-size:14px;
    }

    .client-strip{
      display:grid;
      grid-template-columns:repeat(4,1fr);
      gap:12px;
      margin-top:38px;
    }

    .client{
      min-height:92px;
      display:flex;
      align-items:center;
      justify-content:center;
      text-align:center;
      padding:18px;
      background:var(--panel);
      border:1px solid var(--line);
      color:#dfe2e6;
      font-family:"Space Grotesk",sans-serif;
      font-size:15px;
      font-weight:600;
      transition:transform .25s ease,border-color .25s ease,color .25s ease;
    }

    .client:hover{
      transform:translateY(-4px);
      border-color:rgba(215,166,92,.4);
      color:var(--accent);
    }

    /* MOBILE */
    @media(max-width:900px){
      .hero-container,
      .vision-grid{
        grid-template-columns:1fr;
      }

      .hero-image{
        max-width:360px;
      }

      .hero-container{gap:45px}
      .expertise-grid,
      .work-grid{
        grid-template-columns:1fr 1fr;
      }

      .partner-logos{
        grid-template-columns:repeat(3,1fr);
      }
    }

    @media(max-width:680px){
      .container{width:min(var(--max),calc(100% - 28px))}
      .nav-links,.nav-button{display:none}
      .menu-toggle{display:block}

      .hero{
        padding:65px 0;
      }

      .hero-image{
        max-width:100%;
      }

      .hero-text h1{
        font-size:52px;
      }

      .hero-stats{
        grid-template-columns:1fr 1fr;
      }

      .hero-stat{
        padding:17px 12px;
        border-bottom:1px solid var(--line);
      }

      .hero-stat:nth-child(2){border-right:0}
      .hero-stat:nth-child(3){border-bottom:0}
      .hero-stat:nth-child(4){
        border-right:0;
        border-bottom:0;
      }

      .section{
        padding:70px 0;
      }

      .expertise-grid,
      .work-grid,
      .testimonial-cards{
        grid-template-columns:1fr;
      }

      .partner-logos{
        grid-template-columns:1fr 1fr;
      }

      .featured-header{
        align-items:start;
        flex-direction:column;
      }

      .featured-header p{
        text-align:left;
      }

      .footer-inner{
        flex-direction:column;
      }


      .client-strip{
        grid-template-columns:1fr 1fr;
        gap:10px;
      }

      .client{
        min-height:78px;
        padding:14px 10px;
        font-size:13px;
      }

      .brands-heading h2{
        font-size:38px;
      }

    }
.logo img {
  width: 48px;
  height: 48px;
  object-fit: contain;
  transform: translateY(-5px);
}
  </style>
</head>

<body>

  <!-- NAVIGATION -->
  <nav class="navbar">
    <div class="container nav-inner">

      <a href="#home" class="logo">
  <img src="logo.png" alt="Casten Artzz Logo">
 
  CASTEN ARTZZ
</a>
      <ul class="nav-links">
        <li><a href="#home" class="active">Home</a></li>
        <li><a href="#vision">About</a></li>
        <li><a href="#work">Projects</a></li>
        <li><a href="#featured">Featured</a></li>
        <li><a href="#brands">Brands</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <a href="#contact" class="nav-button">Work With Me</a>

      <button class="menu-toggle" id="menuToggle" aria-label="Open navigation">☰</button>
    </div>

    <div id="mobileMenu" style="display:none;border-top:1px solid var(--line);">
      <div class="container" style="padding:12px 0 17px;display:grid;gap:2px;">
        <a href="#home" style="padding:13px 10px;color:var(--muted);font-size:14px">Home</a>
        <a href="#vision" style="padding:13px 10px;color:var(--muted);font-size:14px">About</a>
        <a href="#work" style="padding:13px 10px;color:var(--muted);font-size:14px">Projects</a>
        <a href="#featured" style="padding:13px 10px;color:var(--muted);font-size:14px">Featured</a>
        <a href="#brands" style="padding:13px 10px;color:var(--muted);font-size:14px">Brands</a>
        <a href="#contact" style="padding:13px 10px;color:var(--accent);font-size:14px">Contact</a>
      </div>
    </div>
  </nav>

  <!-- HERO -->
  <section class="hero" id="home">
    <div class="container hero-container">

      <div class="hero-image reveal">
        <img src="castimg.jpg" alt="Casten Artzz">
        <div class="hero-image-note">Web3 Creator</div>
      </div>

      <div class="hero-text">
        <div class="eyebrow reveal">YouTuber · Web3 Creator</div>

        <h1 class="reveal">
          I’m <span>Casten Artzz</span>
        </h1>

        <h2 class="reveal">Blockchain educationist and content creator.</h2>

        <p class="reveal">
          Greetings, fellow crypto explorers.I’m Casten Artzz, a video content creator and UGC creator passionate about creating engaging content that helps brands connect with their audience.
        </p>

        <div class="hero-buttons reveal">
          <a href="#contact" class="btn btn-primary">Work With Me</a>
          <a href="#work" class="btn btn-secondary">View Projects</a>
        </div>

        <div class="hero-stats reveal">
          <div class="hero-stat">
            <strong>4+</strong>
            <span>Years in Crypto</span>
          </div>
          <div class="hero-stat">
            <strong>25+</strong>
            <span>Projects Consulted</span>
          </div>
          <div class="hero-stat">
            <strong>50k+</strong>
            <span>Community Followers</span>
          </div>
          <div class="hero-stat">
            <strong>100%</strong>
            <span>Passion for Blockchain</span>
          </div>
        </div>
      </div>

    </div>
  </section>

  <!-- VISION -->
  <section class="section" id="vision">
    <div class="container vision-grid">
      <div class="reveal">
        <div class="eyebrow">My Vision in Crypto</div>
        <h2 class="section-title">Making Web3 easier to understand.</h2>
      </div>

      <div class="vision-copy reveal">
        <p>
          I believe blockchain technology has the power to transform economies, build financial independence, and open opportunities across the globe.
        </p>
        <p style="margin-top:18px">
          My mission is to help individuals, startups, and enterprises unlock the potential of crypto and decentralized systems.
        </p>
      </div>
    </div>
  </section>

  <!-- EXPERTISE -->
  <section class="section">
    <div class="container">

      <div class="reveal">
        <div class="eyebrow">What I Do</div>
        <h2 class="section-title">Areas of expertise.</h2>
      </div>

      <div class="expertise-grid">

        <article class="expertise-item reveal">
          <div class="expertise-number">01</div>
          <h3>Video Content Creation</h3>
          <p>Creating engaging short form and long form videos for brands, products, and digital platforms.</p>
        </article>

        <article class="expertise-item reveal">
          <div class="expertise-number">02</div>
          <h3>UGC & Brand Content</h3>
          <p>Creating authentic UGC style content, product videos, testimonials, and social content that connects with audiences.</p>
        </article>

        <article class="expertise-item reveal">
          <div class="expertise-number">03</div>
          <h3>Video Editing & Creative Strategy</h3>
          <p>Bringing ideas to life through advanced editing, storytelling and creative direction.</p>
        </article>

      </div>
    </div>
  </section>

  <!-- PROJECTS -->
  <section class="section featured" id="work">
    <div class="container">

      <div class="featured-header reveal">
        <div>
          <div class="eyebrow">Selected Projects</div>
          <h2 class="section-title">Work that speaks for itself.</h2>
        </div>
        <p>Selected work across campaigns, explainers, ecosystem content and creator projects.</p>
      </div>

      <div class="work-grid">

        <article class="work-card reveal">
          <div class="work-image">
            <span class="work-index">01</span>
            <span class="work-label">Campaign</span>
          </div>
          <div class="work-content">
            <h3>GoDark</h3>
            <p>Campaign work created around a crypto dark pool DEX.</p>
            <small>Content · Campaign</small>
          </div>
        </article>

        <article class="work-card reveal">
          <div class="work-image green">
            <span class="work-index">02</span>
            <span class="work-label">Protocol</span>
          </div>
          <div class="work-content">
            <h3>mETH Protocol</h3>
            <p>Educational content focused on liquid staking and helping new users understand the product.</p>
            <small>Education · Web3</small>
          </div>
        </article>

        <article class="work-card reveal">
          <div class="work-image blue">
            <span class="work-index">03</span>
            <span class="work-label">Cross Chain</span>
          </div>
          <div class="work-content">
            <h3>Circle CCTP × Injective</h3>
            <p>Content explaining USDC cross chain transfers through the CCTP ecosystem.</p>
            <small>Explainer · Web3</small>
          </div>
        </article>

        <article class="work-card reveal">
          <div class="work-image green">
            <span class="work-index">04</span>
            <span class="work-label">Hackathon</span>
          </div>
          <div class="work-content">
            <h3>Mantle Turing Test</h3>
            <p>Hackathon recap content featuring a builder from Unfold.</p>
            <small>Event · Content</small>
          </div>
        </article>

        <article class="work-card reveal">
          <div class="work-image">
            <span class="work-index">05</span>
            <span class="work-label">Social</span>
          </div>
          <div class="work-content">
            <h3>KnockKnock</h3>
            <p>Social content created around a wine themed Instagram post for a random video chat app.</p>
            <small>Social · Campaign</small>
          </div>
        </article>

        <article class="work-card reveal">
          <div class="work-image blue">
            <span class="work-index">06</span>
            <span class="work-label">YouTube</span>
          </div>
          <div class="work-content">
            <h3>Maple Finance</h3>
            <p>YouTube content and treasury breakdowns built around verified dashboard figures.</p>
            <small>Long Form · Education</small>
          </div>
        </article>

      </div>
    </div>
  </section>

  <!-- FEATURED ON -->
  <section class="section" id="featured">
    <div class="container">

      <div class="reveal">
        <div class="eyebrow">Featured On</div>
        <h2 class="section-title">Brands and platforms.</h2>
      </div>

      <div class="partner-logos">

        <div class="partner reveal">
          <img src="maple.png?v=029" alt="Maple Finance">
        </div>

        <div class="partner reveal">
          <img src="bio.png?v=029" alt="Bio Protocol">
        </div>

        <div class="partner reveal">
          <img src="zyi.jpg?v=029" alt="Zyfi">
        </div>

        <div class="partner reveal">
          <img src="vv.jpg?v=029" alt="Vaultka">
        </div>

        <div class="partner reveal">
          <img src="image.png?v=029" alt="Uquid">
        </div>

      </div>
    </div>
  </section>


  <!-- BRANDS -->
  <section class="section brands-section" id="brands">
    <div class="container">
      <div class="reveal brands-heading">
        <div class="eyebrow">Brands</div>
        <h2>Brands I've worked with.</h2>
        <p>The names below are taken directly from the supplied portfolio information.</p>
      </div>

      <div class="client-strip reveal">
        <div class="client">Maple Finance</div>
        <div class="client">GoDark</div>
        <div class="client">Espresso Network</div>
        <div class="client">TRON</div>
        <div class="client">Xborg Games</div>
        <div class="client">Mintlify</div>
        <div class="client">mETH Protocol</div>
        <div class="client">KnockKnock</div>
      </div>
    </div>
  </section>

  <!-- TESTIMONIALS -->
  <section class="section">
    <div class="container">

      <div class="reveal">
        <div class="eyebrow">Testimonials</div>
        <h2 class="section-title">What people say.</h2>
      </div>

      <div class="testimonial-cards">

        <article class="testimonial reveal">
          <p>
            “Casten Artzz’s educational insights on DeFi educated me on how to start my journey in Web3 and which niche I should follow.”
          </p>
          <strong>Blockchain Startup</strong>
        </article>

        <article class="testimonial reveal">
          <p>
            “He is a thoughtful leader in Web3 and always brings innovative ideas to the table.”
          </p>
          <strong>Crypto Analyst</strong>
        </article>

      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="cta" id="contact">
    <div class="container reveal">
      <div class="eyebrow">Let's Connect</div>
      <h2 style="margin-top:13px">
        Ready to explore<br>
        <span>Crypto with me?</span>
      </h2>

      <p>
        Join my community and let’s build the future of finance together.
      </p>

      <a href="contact.html" class="btn btn-primary">Get Started</a>
    </div>
  </section>

  <!-- FOOTER -->
  <footer>
    <div class="container footer-inner">
      <p>© 2026 Castenartzz. All Rights Reserved.</p>
      <p>Web3 Creator · Blockchain Education · Content</p>
    </div>
  </footer>

  <script>
    const menuToggle = document.getElementById("menuToggle");
    const mobileMenu = document.getElementById("mobileMenu");

    menuToggle.addEventListener("click", function(){
      mobileMenu.style.display =
        mobileMenu.style.display === "block" ? "none" : "block";
    });

    document.querySelectorAll("#mobileMenu a").forEach(function(link){
      link.addEventListener("click", function(){
        mobileMenu.style.display = "none";
      });
    });

    const observer = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(entry.isIntersecting){
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    }, {threshold:0.12});

    document.querySelectorAll(".reveal").forEach(function(element){
      observer.observe(element);
    });
  </script>

</body>
</html>
