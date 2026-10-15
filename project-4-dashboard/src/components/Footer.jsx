function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="dashboard-footer">
      <div className="footer-content">
        <div className="footer-brand">
          <div className="footer-title">Cory Parham</div>
          <p className="footer-description">
            Software Developer based in Skåne, Sweden. Built with React and Vite.
          </p>
        </div>

        <div className="footer-links-group">
          <div className="footer-column">
            <span className="footer-heading">Projects</span>
            <ul>
              <li>
                <a href="https://slowmotionsoundz.github.io/lexicon-classes/project1-cv/" target="_blank" rel="noopener noreferrer">
                  Project 1: Resume Site &rarr;
                </a>
              </li>
              <li>
                <a href="https://slowmotionsoundz.github.io/lexicon-classes/project-2-business/" target="_blank" rel="noopener noreferrer">
                  Project 2: EQ Labs Website &rarr;
                </a>
              </li>
              <li>
                <a href="https://slowmotionsoundz.github.io/lexicon-classes/project-3-portfolio/" target="_blank" rel="noopener noreferrer">
                  Project 3: Portfolio Hub &rarr;
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <span className="footer-heading">Contact</span>
            <ul>
              <li>
                <a href="https://github.com/slowmotionsoundz" target="_blank" rel="noopener noreferrer">
                  GitHub Profile &rarr;
                </a>
              </li>
              <li>
                <a href="mailto:coryparham80@gmail.com">
                  coryparham80@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>&copy; {currentYear} Cory Parham</span>
        <span>Lexicon Front-End Project 4</span>
      </div>
    </footer>
  );
}

export default Footer;
