function Navbar({ activeTab, onTabChange, isDarkMode, onToggleTheme }) {
  return (
    <header className="dashboard-nav">
      <div className="brand-group">
        <h2 className="brand-name">Cory Parham</h2>
        <span className="brand-divider">/</span>
        <span className="brand-subtitle">Developer</span>
      </div>

      <div className="nav-controls">
        <nav className="nav-buttons" aria-label="Main Navigation">
          <button
            className={activeTab === 'projects' ? 'active-tab' : 'tab'}
            onClick={() => onTabChange('projects')}
          >
            Projects
          </button>
          <button
            className={activeTab === 'cv' ? 'active-tab' : 'tab'}
            onClick={() => onTabChange('cv')}
          >
            CV &amp; Timeline
          </button>
          <button
            className={activeTab === 'skills' ? 'active-tab' : 'tab'}
            onClick={() => onTabChange('skills')}
          >
            Skills
          </button>
        </nav>

        <button 
          className="theme-toggle" 
          onClick={onToggleTheme}
          aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {isDarkMode ? '☀️ Light' : '🌙 Dark'}
        </button>
      </div>
    </header>
  );
}

export default Navbar;
