import "./style.css";

const profile = {
  name: "Joshua Emman Tisoy",
  role: "Full Stack Developer",
  email: "joshuaemmantisoy31@gmail.com",
  phone: "09614775278",
  location: "Lapu-Lapu City, Cebu, Philippines",
  university: "University of San Jose - Recoletos",
};

const links = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: "✉",
  },
  {
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone}`,
    icon: "⌕",
  },
];

const app = document.querySelector("#app");

app.innerHTML = `
  <div class="site-shell">
    <header class="topbar">
      <a class="brand" href="#home" aria-label="Joshua Emman Tisoy home">
        <span class="brand-mark">JT</span>
      </a>

      <nav class="nav" aria-label="Primary navigation">
        <a class="nav-link active" href="#home">Home</a>
        <a class="nav-link" href="#summary">Summary</a>
        <a class="nav-link" href="#education">Education</a>
        <a class="nav-link" href="#links">Links</a>
        <a class="nav-link" href="#contacts">Contacts</a>
      </nav>

      <a class="status-pill" href="#contacts">
        <span class="status-dot"></span>
        Open to work
      </a>
    </header>

    <main>
      <section id="home" class="hero section">
        <div class="hero-glow"></div>
        <div class="hero-copy">
          <p class="eyebrow"></p>
          <h1>Joshua<br><span>Emman Tisoy</span></h1>
          <p class="hero-description">
            "The Best is Yet to Come."
          </p>

          <div class="hero-actions">
            <a class="button button-primary" href="#summary">
              Explore profile
              <span>↗</span>
            </a>
            <a class="button button-secondary" href="#contacts">Get in touch</a>
          </div>
        </div>

        <div class="hero-visual">
          <div class="portrait-frame">
            <div class="portrait-shade"></div>
            <img src="/portrait.png" alt="Joshua Emman Tisoy" />
            <div class="portrait-caption">
              <span>01</span>
              <span>PROFILE</span>
            </div>
          </div>
          <div class="floating-card floating-card-top">
            <span class="mini-label">BASED IN</span>
            <strong>Cebu, PH</strong>
          </div>
          <div class="floating-card floating-card-bottom">
            <span class="mini-label">EDUCATION</span>
            <strong>USJ-R</strong>
          </div>
        </div>
      </section>

      <section id="summary" class="section content-section">
        <div class="section-heading">
          <span class="section-number">02</span>
          <h2>Summary</h2>
        </div>
        <div class="summary-grid">
          <div class="summary-intro">
            <p class="large-copy">
              I dream of becoming a professional while pursuing my passion for business, guided by the mantra, “In everything that you do, do it with love.”
            </p>
          </div>
          <div class="summary-detail">
            <p>
              I am committed to balancing my education and business to achieve my goals and create a meaningful future.
            </p>
            <div class="detail-line">
              <span>Location</span>
              <strong>${profile.location}</strong>
            </div>
          </div>
        </div>
      </section>

      <section id="education" class="section content-section">
        <div class="section-heading">
          <span class="section-number">03</span>
          <h2>Education</h2>
        </div>
        <article class="education-card">
          <div class="education-year">UNIVERSITY</div>
          <div>
            <h3>${profile.university}</h3>
            <p>Higher Education</p>
          </div>
          <span class="card-arrow">↗</span>
        </article>
      </section>

      <section id="links" class="section content-section">
        <div class="section-heading">
          <span class="section-number">04</span>
          <h2>Links</h2>
        </div>
        <div class="link-grid">
          ${links.map(link => `
            <a class="link-card" href="${link.href}">
              <span class="link-icon">${link.icon}</span>
              <span>
                <small>${link.label}</small>
                <strong>${link.value}</strong>
              </span>
              <span class="card-arrow">↗</span>
            </a>
          `).join("")}
        </div>
      </section>

      <section id="contacts" class="section contact-section">
        <div class="contact-panel">
          <div>
            <span class="eyebrow">05 / CONTACTS</span>
            <h2>Let’s connect.</h2>
            <p>Have an idea, opportunity, or project? Reach out directly.</p>
          </div>
          <div class="contact-actions">
            <a href="mailto:${profile.email}" class="contact-button">
              <span>Email me</span>
              <span>↗</span>
            </a>
            <a href="tel:${profile.phone}" class="contact-button">
              <span>Call me</span>
              <span>↗</span>
            </a>
          </div>
        </div>
      </section>
    </main>

    <footer>
      <span>Joshua Emman Tisoy</span>
      <span>© ${new Date().getFullYear()}</span>
    </footer>
  </div>
`;

const sections = [...document.querySelectorAll("main section")];
const navLinks = [...document.querySelectorAll(".nav-link")];

const observer = new IntersectionObserver(
  entries => {
    const visible = entries
      .filter(entry => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (!visible) return;
    navLinks.forEach(link => {
      link.classList.toggle("active", link.getAttribute("href") === `#${visible.target.id}`);
    });
  },
  { rootMargin: "-35% 0px -55% 0px", threshold: [0.05, 0.2, 0.5] }
);

sections.forEach(section => observer.observe(section));

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", event => {
    const target = document.querySelector(anchor.getAttribute("href"));
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});
