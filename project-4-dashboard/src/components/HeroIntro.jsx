function HeroIntro() {
  return (
    <section className="dashboard-hero">
      <div className="hero-text">
        <p className="hero-eyebrow">
          Skåne, Sweden &bull; Open to internships and junior developer roles
        </p>

        <h1 className="hero-title">
          Building easy-to-use websites and practical business tools.
        </h1>

        <p className="hero-description">
          IT student building clean, practical web applications with React, JavaScript, and modern tooling—combining technical craft with real-world operational experience.
        </p>

        <div className="hero-actions">
          <a 
            href="mailto:coryparham80@gmail.com" 
            className="cta-button primary"
          >
            Contact Me
          </a>
          <a 
            href="https://github.com/slowmotionsoundz" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="cta-button secondary"
          >
            GitHub Profile &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}

export default HeroIntro;
