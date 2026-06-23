<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Meridian Global Advisory Group | Senior Advisory, Without Borders</title>
<meta name="description" content="Meridian Global Advisory Group delivers board-level Finance, HR, Marketing, and Procurement advisory for businesses across the Gulf, US, and APAC.">
<style>
@import url('https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@300;400;500;600;700&family=Fraunces:wght@500;600&display=swap');

*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}

:root{
  --ink:      #14213A;
  --ink-2:    #1F2F52;
  --teal:     #0E6B66;
  --teal-lt:  #E7F3F1;
  --sand:     #F6F4EE;
  --white:    #FFFFFF;
  --slate:    #5B647A;
  --border:   #E2E0D5;
  --gold:     #B8924A;
}

html{scroll-behavior:smooth}
body{font-family:'Libre Franklin',sans-serif;color:var(--ink);background:var(--white);font-size:15px;line-height:1.6;-webkit-font-smoothing:antialiased}
.display{font-family:'Fraunces',serif}
a{color:inherit}

/* ===== TOP BAR ===== */
.topbar{background:var(--ink);color:rgba(255,255,255,0.7);font-size:12px;padding:7px 2rem;display:flex;justify-content:space-between;align-items:center}
.topbar-left{display:flex;gap:24px}
.topbar a{color:rgba(255,255,255,0.7);text-decoration:none}
.topbar a:hover{color:var(--white)}

/* ===== NAV ===== */
nav{position:sticky;top:0;z-index:100;background:var(--white);border-bottom:1px solid var(--border);padding:0 2rem;display:flex;align-items:center;justify-content:space-between;height:72px}
.brand{display:flex;align-items:center;gap:10px}
.brand-mark{width:34px;height:34px;border-radius:4px;background:var(--ink);display:flex;align-items:center;justify-content:center;flex-shrink:0}
.brand-mark svg{width:18px;height:18px}
.brand-text{font-family:'Fraunces',serif;font-size:17px;font-weight:600;color:var(--ink);line-height:1.15}
.brand-text span{display:block;font-family:'Libre Franklin',sans-serif;font-size:9px;font-weight:600;letter-spacing:0.12em;color:var(--teal);text-transform:uppercase;margin-top:2px}

.nav-links{display:flex;gap:0;align-items:center}
.nav-item{position:relative}
.nav-link{padding:0 18px;height:72px;display:flex;align-items:center;font-size:13.5px;font-weight:500;color:var(--ink);text-decoration:none;border-bottom:2px solid transparent;cursor:pointer}
.nav-link:hover{color:var(--teal);border-bottom-color:var(--teal)}
.nav-cta{background:var(--ink);color:var(--white)!important;padding:11px 22px;border-radius:3px;font-size:13.5px;font-weight:500;text-decoration:none;margin-left:8px}
.nav-cta:hover{background:var(--teal)}

.mega{position:absolute;top:72px;left:0;background:var(--white);box-shadow:0 16px 40px rgba(20,33,58,0.12);border:1px solid var(--border);min-width:560px;display:none;padding:28px;grid-template-columns:repeat(2,1fr);gap:28px}
.nav-item:hover .mega{display:grid}
.mega-col-title{font-size:11px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;color:var(--teal);margin-bottom:12px}
.mega-link{display:block;padding:7px 0;font-size:13.5px;color:var(--ink);text-decoration:none;font-weight:500}
.mega-link:hover{color:var(--teal)}
.mega-link-sub{font-size:11.5px;color:var(--slate);font-weight:400;margin-top:1px}

/* ===== HERO ===== */
.hero{background:var(--ink);background-image:radial-gradient(circle at 85% 20%, rgba(14,107,102,0.35) 0%, transparent 50%);padding:90px 2rem 100px;position:relative;overflow:hidden}
.hero-inner{max-width:1140px;margin:0 auto;display:grid;grid-template-columns:1.15fr 0.85fr;gap:60px;align-items:center}
.hero-eyebrow{display:inline-flex;align-items:center;gap:8px;font-size:11.5px;font-weight:600;letter-spacing:0.12em;text-transform:uppercase;color:#7FD4CB;margin-bottom:22px;padding:6px 14px;border:1px solid rgba(127,212,203,0.3);border-radius:20px}
.hero h1{font-family:'Fraunces',serif;font-size:clamp(32px,4.2vw,50px);font-weight:600;color:var(--white);line-height:1.18;margin-bottom:22px;letter-spacing:-0.01em}
.hero h1 em{font-style:normal;color:#7FD4CB}
.hero-sub{font-size:16.5px;color:rgba(255,255,255,0.68);line-height:1.7;margin-bottom:34px;max-width:520px}
.hero-actions{display:flex;gap:14px;flex-wrap:wrap}
.btn-primary{background:var(--teal);color:var(--white);padding:14px 28px;border-radius:3px;font-size:14px;font-weight:600;text-decoration:none;border:none;cursor:pointer;transition:all .2s;display:inline-block}
.btn-primary:hover{background:#0c5a56;transform:translateY(-1px)}
.btn-ghost{background:transparent;color:var(--white);padding:14px 28px;border-radius:3px;font-size:14px;font-weight:500;border:1px solid rgba(255,255,255,0.3);text-decoration:none;cursor:pointer;transition:all .2s}
.btn-ghost:hover{border-color:rgba(255,255,255,0.7)}

.hero-panel{background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.12);border-radius:10px;padding:26px}
.panel-label{font-size:10.5px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;color:#7FD4CB;margin-bottom:18px}
.panel-rows{display:flex;flex-direction:column;gap:0}
.panel-row{display:flex;justify-content:space-between;align-items:baseline;padding:13px 0;border-bottom:1px solid rgba(255,255,255,0.08)}
.panel-row:last-child{border-bottom:none}
.panel-val{font-family:'Fraunces',serif;font-size:22px;font-weight:600;color:var(--white)}
.panel-lbl{font-size:11.5px;color:rgba(255,255,255,0.5);max-width:140px;text-align:right;line-height:1.4}

/* ===== LOGO/CLIENT STRIP ===== */
.strip{background:var(--sand);padding:28px 2rem;border-bottom:1px solid var(--border)}
.strip-inner{max-width:1140px;margin:0 auto;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:16px}
.strip-label{font-size:11.5px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:var(--slate);white-space:nowrap}
.strip-tags{display:flex;gap:10px;flex-wrap:wrap}
.strip-tag{font-size:12.5px;color:var(--ink);font-weight:500;padding:6px 14px;background:var(--white);border:1px solid var(--border);border-radius:20px}

/* ===== SECTION COMMON ===== */
section{padding:88px 2rem}
.section-inner{max-width:1140px;margin:0 auto}
.eyebrow{display:flex;align-items:center;gap:10px;font-size:11.5px;font-weight:600;letter-spacing:0.12em;text-transform:uppercase;color:var(--teal);margin-bottom:14px}
.eyebrow::before{content:'';width:26px;height:2px;background:var(--teal)}
.sec-title{font-family:'Fraunces',serif;font-size:clamp(26px,3.2vw,38px);font-weight:600;color:var(--ink);line-height:1.22;margin-bottom:18px;letter-spacing:-0.01em}
.sec-sub{font-size:16px;color:var(--slate);max-width:600px;line-height:1.7}

/* ===== PRACTICES ===== */
.practices{background:var(--white)}
.practice-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:1px;background:var(--border);margin-top:48px;border:1px solid var(--border)}
.practice-card{background:var(--white);padding:36px;transition:background .2s;cursor:default}
.practice-card:hover{background:var(--teal-lt)}
.practice-top{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:18px}
.practice-tag{font-size:10.5px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:var(--gold);padding:4px 10px;border:1px solid #E8D5A8;border-radius:3px;background:#FBF6EA}
.practice-tag.live{color:var(--teal);border-color:#BFE0DC;background:var(--teal-lt)}
.practice-title{font-family:'Fraunces',serif;font-size:21px;font-weight:600;color:var(--ink);margin-bottom:10px}
.practice-desc{font-size:13.5px;color:var(--slate);line-height:1.7;margin-bottom:18px}
.practice-list{display:flex;flex-direction:column;gap:6px}
.practice-list-item{font-size:12.5px;color:var(--ink);display:flex;align-items:flex-start;gap:8px}
.practice-list-item::before{content:'—';color:var(--teal);flex-shrink:0}

/* ===== IMPACT ===== */
.impact{background:var(--ink)}
.impact .sec-title,.impact .sec-sub{color:var(--white)}
.impact .sec-sub{color:rgba(255,255,255,0.6)}
.impact .eyebrow{color:#7FD4CB}
.impact .eyebrow::before{background:#7FD4CB}
.impact-grid{display:grid;grid-template-columns:repeat(4,1fr);margin-top:48px;border:1px solid rgba(255,255,255,0.1);border-radius:8px;overflow:hidden}
.impact-cell{padding:30px 22px;border-right:1px solid rgba(255,255,255,0.08)}
.impact-cell:last-child{border-right:none}
.impact-num{font-family:'Fraunces',serif;font-size:32px;font-weight:600;color:#7FD4CB;line-height:1}
.impact-cap{font-size:12px;color:rgba(255,255,255,0.55);margin-top:8px;line-height:1.45}

/* ===== APPROACH ===== */
.approach{background:var(--sand)}
.approach-grid{display:grid;grid-template-columns:1fr 1fr;gap:60px;margin-top:48px;align-items:start}
.approach-steps{display:flex;flex-direction:column}
.step{display:grid;grid-template-columns:40px 1fr;gap:18px;padding:22px 0;border-bottom:1px solid var(--border)}
.step:first-child{padding-top:0}
.step:last-child{border-bottom:none}
.step-num{font-family:'Fraunces',serif;font-size:18px;font-weight:600;color:var(--gold)}
.step-title{font-size:15px;font-weight:600;color:var(--ink);margin-bottom:5px}
.step-desc{font-size:13px;color:var(--slate);line-height:1.65}

.profile-card{background:var(--white);border:1px solid var(--border);border-radius:10px;padding:32px}
.profile-photo-row{display:flex;align-items:center;gap:16px;margin-bottom:18px}
.profile-photo{width:72px;height:72px;border-radius:50%;object-fit:cover;border:2px solid var(--teal-lt);flex-shrink:0}
.credential-badges{display:flex;gap:8px;align-items:center}
.credential-badge{width:38px;height:38px;border-radius:8px;background:var(--white);border:1px solid var(--border);display:flex;align-items:center;justify-content:center;padding:4px;overflow:hidden}
.credential-badge img{width:100%;height:100%;object-fit:contain}
.profile-name{font-family:'Fraunces',serif;font-size:19px;font-weight:600;color:var(--ink);margin-bottom:4px}
.profile-role{font-size:12.5px;color:var(--teal);font-weight:600;margin-bottom:18px}
.profile-bio{font-size:13px;color:var(--slate);line-height:1.7;margin-bottom:18px}
.profile-creds{display:flex;flex-direction:column;gap:8px}
.cred-row{display:flex;align-items:center;gap:10px;font-size:12.5px;color:var(--ink)}
.cred-row::before{content:'✓';color:var(--teal);font-weight:700}

/* ===== REGIONS ===== */
.regions{background:var(--white)}
.regions-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:48px}
.region-card{border:1px solid var(--border);border-radius:8px;padding:24px;text-align:center}
.region-flag{font-size:28px;margin-bottom:10px}
.region-name{font-size:14px;font-weight:600;color:var(--ink)}
.region-cities{font-size:12px;color:var(--slate);margin-top:4px}

/* ===== TESTIMONIALS ===== */
.testimonials{background:var(--white)}
.testimonials-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-top:48px}
.testimonial-card{background:var(--sand);border:1px solid var(--border);border-radius:10px;padding:26px;display:flex;flex-direction:column}
.testimonial-quote{font-family:'Fraunces',serif;font-size:15px;font-style:italic;color:var(--ink);line-height:1.6;margin-bottom:18px;flex:1}
.testimonial-quote::before{content:'\201C';color:var(--gold);font-size:24px;line-height:0;display:inline-block;margin-right:2px;vertical-align:-2px}
.testimonial-author{font-size:13px;font-weight:600;color:var(--ink)}
.testimonial-role{font-size:12px;color:var(--slate);margin-top:2px}
.testimonials-empty{border:1px dashed var(--border);border-radius:10px;padding:48px 32px;text-align:center;color:var(--slate);font-size:13.5px;margin-top:48px}

/* ===== INSIGHTS ===== */
.insights{background:var(--sand)}
.insights-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-top:48px}
.insight-card{background:var(--white);border:1px solid var(--border);border-radius:10px;padding:26px;display:flex;flex-direction:column;transition:box-shadow .2s}
.insight-card:hover{box-shadow:0 8px 28px rgba(20,33,58,0.08)}
.insight-meta{font-size:11px;font-weight:600;letter-spacing:0.06em;text-transform:uppercase;color:var(--teal);margin-bottom:12px;display:flex;align-items:center;gap:6px}
.insight-title{font-family:'Fraunces',serif;font-size:16.5px;font-weight:600;color:var(--ink);line-height:1.4;margin-bottom:10px}
.insight-excerpt{font-size:13px;color:var(--slate);line-height:1.65;margin-bottom:18px;flex:1}
.insight-link{font-size:12.5px;font-weight:600;color:var(--teal);text-decoration:none;display:inline-flex;align-items:center;gap:5px}
.insight-link:hover{text-decoration:underline}
.insight-card.placeholder{border-style:dashed;justify-content:center;align-items:center;text-align:center;color:var(--slate)}
.insight-card.placeholder .insight-title{color:var(--slate);font-size:14px}

/* ===== CTA ===== */
.cta{background:linear-gradient(135deg,var(--ink) 0%,var(--ink-2) 100%);text-align:center}
.cta .eyebrow{justify-content:center;color:#7FD4CB}
.cta .eyebrow::before{background:#7FD4CB}
.cta .sec-title{color:var(--white);margin:0 auto 16px;max-width:600px}
.cta .sec-sub{color:rgba(255,255,255,0.65);margin:0 auto 36px}
.cta-form{max-width:480px;margin:0 auto;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.15);border-radius:10px;padding:32px;text-align:left}
.form-row{margin-bottom:14px}
.form-row label{display:block;font-size:11.5px;color:rgba(255,255,255,0.6);margin-bottom:6px;font-weight:500}
.form-row input,.form-row select{width:100%;padding:11px 14px;border-radius:5px;border:1px solid rgba(255,255,255,0.2);background:rgba(255,255,255,0.07);color:var(--white);font-size:13.5px;font-family:'Libre Franklin',sans-serif}
.form-row input::placeholder{color:rgba(255,255,255,0.35)}
.form-row input:focus,.form-row select:focus{outline:2px solid #7FD4CB;border-color:transparent}
.form-submit{width:100%;background:var(--teal);color:var(--white);padding:13px;border-radius:5px;border:none;font-size:14px;font-weight:600;cursor:pointer;margin-top:6px}
.form-submit:hover{background:#0c5a56}
.contact-line{display:flex;justify-content:center;gap:28px;margin-top:32px;flex-wrap:wrap}
.contact-line a{color:rgba(255,255,255,0.7);text-decoration:none;font-size:13px;display:flex;align-items:center;gap:7px}
.contact-line a:hover{color:var(--white)}

/* ===== FOOTER ===== */
footer{background:#0D1628;padding:48px 2rem 24px}
.footer-inner{max-width:1140px;margin:0 auto}
.footer-top{display:grid;grid-template-columns:1.4fr 1fr 1fr 1fr;gap:40px;padding-bottom:32px;border-bottom:1px solid rgba(255,255,255,0.08)}
.footer-brand{font-family:'Fraunces',serif;font-size:17px;font-weight:600;color:var(--white);margin-bottom:10px}
.footer-desc{font-size:12.5px;color:rgba(255,255,255,0.45);line-height:1.7;max-width:260px}
.footer-col-title{font-size:11px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:rgba(255,255,255,0.4);margin-bottom:14px}
.footer-link{display:block;font-size:13px;color:rgba(255,255,255,0.65);text-decoration:none;margin-bottom:9px}
.footer-link:hover{color:var(--white)}
.footer-bottom{display:flex;justify-content:space-between;padding-top:22px;font-size:12px;color:rgba(255,255,255,0.35);flex-wrap:wrap;gap:10px}

@media(max-width:860px){
  .hero-inner{grid-template-columns:1fr}
  .hero-panel{display:none}
  .nav-links{display:none}
  .practice-grid{grid-template-columns:1fr}
  .impact-grid{grid-template-columns:1fr 1fr}
  .impact-cell{border-right:none;border-bottom:1px solid rgba(255,255,255,0.08)}
  .approach-grid{grid-template-columns:1fr}
  .regions-grid{grid-template-columns:1fr}
  .footer-top{grid-template-columns:1fr 1fr}
  .topbar-left{display:none}
}
</style>
</head>
<body>

<div class="topbar">
  <div class="topbar-left">
    <span>Gurgaon, India · Serving Gulf, US & APAC</span>
  </div>
  <div style="display:flex;gap:20px">
    <a href="mailto:contact@mgadvisory.in">contact@mgadvisory.in</a>
    <a href="tel:+919953706567">+91 99537 06567</a>
  </div>
</div>

<nav>
  <div class="brand">
    <div class="brand-mark">
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="9" stroke="#7FD4CB" stroke-width="1.6"/>
        <path d="M3 12C3 12 7 7 12 7C17 7 21 12 21 12" stroke="#7FD4CB" stroke-width="1.6"/>
        <path d="M3 12C3 12 7 17 12 17C17 17 21 12 21 12" stroke="#7FD4CB" stroke-width="1.6"/>
      </svg>
    </div>
    <div class="brand-text">Meridian Global<span>Advisory Group</span></div>
  </div>

  <div class="nav-links">
    <div class="nav-item">
      <span class="nav-link">Practices ▾</span>
      <div class="mega">
        <div>
          <div class="mega-col-title">Active Practice</div>
          <a class="mega-link" href="#finance">Finance & CFO Advisory<div class="mega-link-sub">SAP S/4HANA · Capital Structuring · Investor Relations</div></a>
        </div>
        <div>
          <div class="mega-col-title">Launching 2026–27</div>
          <a class="mega-link" href="#practices">HR & People Advisory<div class="mega-link-sub">Org design · Leadership search · Comp structuring</div></a>
          <a class="mega-link" href="#practices">Marketing Advisory<div class="mega-link-sub">Brand strategy · Market entry · Positioning</div></a>
          <a class="mega-link" href="#practices">Procurement Advisory<div class="mega-link-sub">Vendor strategy · Cost optimisation · Governance</div></a>
        </div>
      </div>
    </div>
    <a class="nav-link" href="#approach">Approach</a>
    <a class="nav-link" href="#insights">Insights</a>
    <a class="nav-link" href="#testimonials">Feedback</a>
    <a class="nav-link" href="#regions">Regions</a>
    <a class="nav-link" href="#about">About</a>
    <a class="nav-cta" href="#contact">Talk to an Advisor</a>
  </div>
</nav>

<section class="hero" style="padding-top:90px">
  <div class="hero-inner">
    <div>
      <div class="hero-eyebrow">● Multi-Practice Advisory Group</div>
      <h1>Senior advisory, <em>without borders.</em></h1>
      <p class="hero-sub">Meridian Global Advisory Group brings board-level expertise to growing organisations across the Gulf, United States, and APAC — starting with Finance & CFO Advisory, with HR, Marketing, and Procurement practices following.</p>
      <div class="hero-actions">
        <a href="#contact" class="btn-primary">Talk to an Advisor</a>
        <a href="#finance" class="btn-ghost">Explore Finance Practice</a>
      </div>
    </div>
    <div class="hero-panel">
      <div class="panel-label">Finance Practice — Headline Impact</div>
      <div class="panel-rows">
        <div class="panel-row"><div class="panel-val">USD 2.4Bn</div><div class="panel-lbl">Project financing structured in 180 days</div></div>
        <div class="panel-row"><div class="panel-val">USD 240M+</div><div class="panel-lbl">Working capital managed at peak exposure</div></div>
        <div class="panel-row"><div class="panel-val">~20%</div><div class="panel-lbl">Financial close cycle reduction via S/4HANA</div></div>
        <div class="panel-row"><div class="panel-val">25+ yrs</div><div class="panel-lbl">CFO-level finance leadership experience</div></div>
      </div>
    </div>
  </div>
</section>

<div class="strip">
  <div class="strip-inner">
    <span class="strip-label">Sectors Served</span>
    <div class="strip-tags">
      <span class="strip-tag">Manufacturing</span>
      <span class="strip-tag">Consumer & Retail</span>
      <span class="strip-tag">Apparel</span>
      <span class="strip-tag">Food & Beverage</span>
      <span class="strip-tag">Family Conglomerates</span>
      <span class="strip-tag">PE-Backed Businesses</span>
    </div>
  </div>
</div>

<section class="practices" id="practices">
  <div class="section-inner">
    <div class="eyebrow">What We Do</div>
    <h2 class="sec-title">One advisory group.<br>Four practices, built around how businesses actually grow.</h2>
    <p class="sec-sub">We are building Meridian as a multi-disciplinary advisory group — each practice led by senior, hands-on operators rather than career consultants.</p>

    <div class="practice-grid">

      <div class="practice-card" id="finance">
        <div class="practice-top">
          <span class="practice-tag live">● Active Practice</span>
        </div>
        <div class="practice-title">Finance & CFO Advisory</div>
        <div class="practice-desc">Board-level finance leadership for growth-stage and PE-backed businesses — from capital structuring to enterprise finance transformation.</div>
        <div class="practice-list">
          <div class="practice-list-item">Fractional & interim CFO mandates</div>
          <div class="practice-list-item">SAP S/4HANA finance transformation</div>
          <div class="practice-list-item">IPO & PE investor readiness</div>
          <div class="practice-list-item">Capital structuring & treasury advisory</div>
          <div class="practice-list-item">IGAAP / IFRS governance & compliance</div>
        </div>
      </div>

      <div class="practice-card">
        <div class="practice-top">
          <span class="practice-tag">Launching 2026</span>
        </div>
        <div class="practice-title">HR & People Advisory</div>
        <div class="practice-desc">Organisational design and senior talent strategy for businesses scaling across new markets and leadership transitions.</div>
        <div class="practice-list">
          <div class="practice-list-item">Organisational design & restructuring</div>
          <div class="practice-list-item">Senior leadership search advisory</div>
          <div class="practice-list-item">Compensation benchmarking</div>
          <div class="practice-list-item">Performance & governance frameworks</div>
        </div>
      </div>

      <div class="practice-card">
        <div class="practice-top">
          <span class="practice-tag">Launching 2027</span>
        </div>
        <div class="practice-title">Marketing Advisory</div>
        <div class="practice-desc">Brand strategy and market-entry advisory for businesses expanding into the Gulf, US, and APAC markets.</div>
        <div class="practice-list">
          <div class="practice-list-item">Market entry strategy</div>
          <div class="practice-list-item">Brand & commercial positioning</div>
          <div class="practice-list-item">Go-to-market planning</div>
        </div>
      </div>

      <div class="practice-card">
        <div class="practice-top">
          <span class="practice-tag">Launching 2027</span>
        </div>
        <div class="practice-title">Procurement Advisory</div>
        <div class="practice-desc">Vendor strategy and cost governance for manufacturing and multi-entity organisations managing complex supply chains.</div>
        <div class="practice-list">
          <div class="practice-list-item">Vendor strategy & negotiation</div>
          <div class="practice-list-item">Cost optimisation programmes</div>
          <div class="practice-list-item">Supply chain governance</div>
        </div>
      </div>

    </div>
  </div>
</section>

<section class="impact">
  <div class="section-inner">
    <div class="eyebrow">Track Record</div>
    <h2 class="sec-title">Built on outcomes our Finance Practice has already delivered.</h2>
    <p class="sec-sub">Selected results from 25 years of CFO-level finance leadership across manufacturing, retail, and PE-backed businesses.</p>
    <div class="impact-grid">
      <div class="impact-cell"><div class="impact-num">USD 2.4Bn</div><div class="impact-cap">Project financing structured in 180 days</div></div>
      <div class="impact-cell"><div class="impact-num">USD 240M+</div><div class="impact-cap">Working capital managed at peak exposure</div></div>
      <div class="impact-cell"><div class="impact-num">~20%</div><div class="impact-cap">Financial close cycle reduction post S/4HANA</div></div>
      <div class="impact-cell"><div class="impact-num">3%</div><div class="impact-cap">B2B margin expansion via pricing architecture</div></div>
    </div>
  </div>
</section>

<section class="approach" id="approach">
  <div class="section-inner">
    <div class="eyebrow">How We Work</div>
    <h2 class="sec-title">Senior operators, not career consultants.</h2>
    <p class="sec-sub">Every Meridian engagement is led by someone who has personally held the role they are advising on — not a delegated analyst team.</p>

    <div class="approach-grid">
      <div class="approach-steps">
        <div class="step">
          <div class="step-num">01</div>
          <div><div class="step-title">Discovery conversation</div><div class="step-desc">A focused 60-minute session to understand your business, the specific challenge, and whether Meridian is the right fit — no obligation.</div></div>
        </div>
        <div class="step">
          <div class="step-num">02</div>
          <div><div class="step-title">Scoped engagement plan</div><div class="step-desc">A clear proposal — fractional, interim, or project-based — with defined deliverables, timeline, and fees agreed upfront.</div></div>
        </div>
        <div class="step">
          <div class="step-num">03</div>
          <div><div class="step-title">Senior-led delivery</div><div class="step-desc">Direct access to the practice lead throughout — not handed off to junior staff after the pitch.</div></div>
        </div>
        <div class="step">
          <div class="step-num">04</div>
          <div><div class="step-title">Measured outcomes</div><div class="step-desc">Every engagement is anchored to specific, agreed metrics — closing cycle, capital structured, margin improved.</div></div>
        </div>
      </div>

      <div class="profile-card" id="about">
        <div class="profile-photo-row">
          <img src="rajesh-vijay.jpg" alt="Rajesh Vijay" class="profile-photo">
          <div class="credential-badges">
            <div class="credential-badge" title="Indian Institute of Management, Calcutta">
              <img src="iim-calcutta.jpg" alt="IIM Calcutta">
            </div>
            <div class="credential-badge" title="Institute of Chartered Accountants of India">
              <img src="icai-india.jpg" alt="ICAI">
            </div>
            <div class="credential-badge" title="University of Rajasthan">
              <img src="university-rajasthan.jpg" alt="University of Rajasthan">
            </div>
          </div>
        </div>
        <div class="profile-name">Rajesh Vijay</div>
        <div class="profile-role">FOUNDER & FINANCE PRACTICE LEAD</div>
        <p class="profile-bio">25+ years of CFO-level finance leadership across Consumer Durables, Manufacturing, Apparel Retail, and Export sectors — including Kohler Corporation, Biba Apparels (Warburg Pincus-backed), Sarita Handa Export, Genpact, and Videocon Industries.</p>
        <div class="profile-creds">
          <div class="cred-row">Chartered Accountant — ICAI, 1999</div>
          <div class="cred-row">Executive MBA — IIM Calcutta, 2012</div>
          <div class="cred-row">SAP FICO & S/4HANA implementation lead</div>
          <div class="cred-row">Six Sigma Green Belt — Genpact</div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="regions" id="regions">
  <div class="section-inner">
    <div class="eyebrow">Where We Operate</div>
    <h2 class="sec-title">Built for three markets from day one.</h2>
    <p class="sec-sub">Meridian engagements span the Gulf, United States, and Asia-Pacific — remotely or on-site.</p>
    <div class="regions-grid">
      <div class="region-card">
        <div class="region-flag">🌍</div>
        <div class="region-name">Gulf / GCC</div>
        <div class="region-cities">UAE · Saudi Arabia · Qatar · Kuwait</div>
      </div>
      <div class="region-card">
        <div class="region-flag">🌎</div>
        <div class="region-name">United States</div>
        <div class="region-cities">Remote engagements · East & West Coast</div>
      </div>
      <div class="region-card">
        <div class="region-flag">🌏</div>
        <div class="region-name">Asia-Pacific</div>
        <div class="region-cities">Hong Kong · Singapore · Philippines</div>
      </div>
    </div>
  </div>
</section>

<section class="insights" id="insights">
  <div class="section-inner">
    <div class="eyebrow">Latest Insights</div>
    <h2 class="sec-title">Perspectives from the Finance Practice.</h2>
    <p class="sec-sub">Thinking on SAP S/4HANA transformation, investor readiness, and capital strategy — shared regularly on LinkedIn.</p>

    <div class="insights-grid" id="insights-container">
      <!-- Populated automatically from data.js -->
    </div>
  </div>
</section>

<section class="testimonials" id="testimonials">
  <div class="section-inner">
    <div class="eyebrow">Client Feedback</div>
    <h2 class="sec-title">What clients say after working with us.</h2>
    <p class="sec-sub">Direct feedback from CFO advisory and finance transformation engagements.</p>

    <div class="testimonials-grid" id="testimonials-container">
      <!-- Populated automatically from data.js -->
    </div>
  </div>
</section>

<section class="cta" id="contact">
  <div class="section-inner">
    <div class="eyebrow">Get Started</div>
    <h2 class="sec-title">Start with a conversation, not a contract.</h2>
    <p class="sec-sub">Book a complimentary 60-minute strategy session with our Finance Practice Lead — no commitment required.</p>

    <form class="cta-form" action="https://formsubmit.co/contact@mgadvisory.in" method="POST">
      <div class="form-row">
        <label>Full Name</label>
        <input type="text" name="name" placeholder="Your name" required>
      </div>
      <div class="form-row">
        <label>Work Email</label>
        <input type="email" name="email" placeholder="you@company.com" required>
      </div>
      <div class="form-row">
        <label>Area of Interest</label>
        <select name="practice">
          <option>Finance & CFO Advisory</option>
          <option>HR & People Advisory (coming soon)</option>
          <option>Marketing Advisory (coming soon)</option>
          <option>Procurement Advisory (coming soon)</option>
        </select>
      </div>
      <div class="form-row">
        <label>Brief Message</label>
        <input type="text" name="message" placeholder="Tell us briefly what you need">
      </div>
      <button type="submit" class="form-submit">Request a Strategy Session</button>
    </form>

    <div class="contact-line">
      <a href="mailto:contact@mgadvisory.in">📧 contact@mgadvisory.in</a>
      <a href="tel:+919953706567">📱 +91 99537 06567</a>
      <a href="#">📍 Gurgaon, India</a>
    </div>
  </div>
</section>

<footer>
  <div class="footer-inner">
    <div class="footer-top">
      <div>
        <div class="footer-brand">Meridian Global Advisory Group</div>
        <div class="footer-desc">A multi-practice advisory group delivering senior, hands-on expertise across Finance, HR, Marketing, and Procurement — for businesses across the Gulf, US, and APAC.</div>
      </div>
      <div>
        <div class="footer-col-title">Practices</div>
        <a class="footer-link" href="#finance">Finance & CFO Advisory</a>
        <a class="footer-link" href="#practices">HR & People Advisory</a>
        <a class="footer-link" href="#practices">Marketing Advisory</a>
        <a class="footer-link" href="#practices">Procurement Advisory</a>
      </div>
      <div>
        <div class="footer-col-title">Company</div>
        <a class="footer-link" href="#about">About</a>
        <a class="footer-link" href="#approach">Our Approach</a>
        <a class="footer-link" href="#regions">Regions</a>
      </div>
      <div>
        <div class="footer-col-title">Contact</div>
        <a class="footer-link" href="mailto:contact@mgadvisory.in">contact@mgadvisory.in</a>
        <a class="footer-link" href="tel:+919953706567">+91 99537 06567</a>
        <a class="footer-link" href="#">Gurgaon, India</a>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© 2026 Meridian Global Advisory Group. All rights reserved.</span>
      <span>mgadvisory.in</span>
    </div>
  </div>
</footer>

<script src="data.js"></script>
<script>
// ===== Render Latest Insights (newest first, max 3 shown) =====
function renderInsights() {
  const container = document.getElementById('insights-container');
  const posts = (window.SITE_DATA && window.SITE_DATA.posts) || [];

  if (posts.length === 0) {
    container.innerHTML = '<div class="testimonials-empty" style="grid-column:1/-1">No posts published yet — check back soon.</div>';
    return;
  }

  const toShow = posts.slice(0, 3);
  const placeholdersNeeded = 3 - toShow.length;

  let html = toShow.map(post => `
    <div class="insight-card">
      <div class="insight-meta">📝 LinkedIn · Finance Practice</div>
      <div class="insight-title">${escapeHTML(post.SAP support for ECC ends in 2027. Most Gulf CFOs are not ready for things that determine whether a Gulf S/4HANA transformation delivers — or quietly fails)}</div>
      <div class="insight-excerpt">${escapeHTML(post.excerpt)}</div>
      <a class="insight-link" href="${escapeAttr(post.https://www.linkedin.com/posts/rajeshvijay26_sap-s4hana-financetransformation-activity-7471454017815134209-H5zp?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEQBWccBwcFPMuSR621POrIfWr2wVf4YgcY)}" target="_blank" rel="noopener">Read on LinkedIn →</a>
    </div>
  `).join('');

  for (let i = 0; i < placeholdersNeeded; i++) {
    html += `
    <div class="insight-card placeholder">
      <div class="insight-meta">📝 Coming Soon</div>
      <div class="insight-title">New insight publishing soon.</div>
      <div class="insight-excerpt">Follow on LinkedIn to get notified when it goes live.</div>
      <a class="insight-link" href="https://www.linkedin.com/in/rajeshvijay26" target="_blank" rel="noopener">Follow for updates →</a>
    </div>`;
  }

  container.innerHTML = html;
}

// ===== Render Testimonials (newest first, max 3 shown) =====
function renderTestimonials() {
  const container = document.getElementById('testimonials-container');
  const testimonials = (window.SITE_DATA && window.SITE_DATA.testimonials) || [];

  if (testimonials.length === 0) {
    container.outerHTML = '<div class="testimonials-empty">Client feedback will appear here as engagements are completed.</div>';
    return;
  }

  const toShow = testimonials.slice(0, 3);
  container.innerHTML = toShow.map(t => `
    <div class="testimonial-card">
      <div class="testimonial-quote">${escapeHTML(t.quote)}</div>
      <div class="testimonial-author">${escapeHTML(t.name)}</div>
      <div class="testimonial-role">${escapeHTML(t.role)}${t.company ? ', ' + escapeHTML(t.company) : ''}</div>
    </div>
  `).join('');
}

function escapeHTML(str) {
  const div = document.createElement('div');
  div.textContent = str || '';
  return div.innerHTML;
}
function escapeAttr(str) {
  return (str || '').replace(/"/g, '&quot;');
}

renderInsights();
renderTestimonials();
</script>
</body>
</html>
