import { useState, useEffect } from 'react';
import projectData from './data.json';
import cvHistory from './cvData';
import Navbar from './components/Navbar';
import HeroIntro from './components/HeroIntro';
import ProjectFilters from './components/ProjectFilters';
import ProjectCard from './components/ProjectCard';
import CvAccordion from './components/CvAccordion';
import SkillsSection from './components/SkillsSection';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('projects');
  const [filter, setFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [openAccordion, setOpenAccordion] = useState(1); // Keeps the first item open by default

  // Persistent Dark Mode checking Local Storage on initial load
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('dashboardTheme');
    return savedTheme === 'dark';
  });

  // Saves choice to Local Storage whenever Dark Mode is toggled
  useEffect(() => {
    localStorage.setItem('dashboardTheme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  // Combined Filter and Live Search Logic
  const filteredProjects = projectData.filter(project => {
    const matchesFilter = filter === 'All' || project.type.includes(filter);
    const query = searchQuery.trim().toLowerCase();
    if (!query) return matchesFilter;

    const matchesTitle = project.title.toLowerCase().includes(query);
    const matchesDesc = project.description.toLowerCase().includes(query);
    const matchesTags = project.tags && project.tags.some(tag => tag.toLowerCase().includes(query));
    
    return matchesFilter && (matchesTitle || matchesDesc || matchesTags);
  });

  const toggleAccordion = (id) => {
    if (openAccordion === 'all') {
      setOpenAccordion(id);
    } else {
      setOpenAccordion(openAccordion === id ? null : id);
    }
  };

  const toggleAllAccordions = () => {
    setOpenAccordion(openAccordion === 'all' ? null : 'all');
  };

  const handleResetFilters = () => {
    setFilter('All');
    setSearchQuery('');
  };

  return (
    <div className={`app-wrapper ${isDarkMode ? 'dark-mode' : ''}`}>
      <div className="dashboard-container">
        
        {/* NAVIGATION BAR */}
        <Navbar
          activeTab={activeTab}
          onTabChange={setActiveTab}
          isDarkMode={isDarkMode}
          onToggleTheme={() => setIsDarkMode(!isDarkMode)}
        />

        {/* HERO INTRO & PROFILE BANNER */}
        <HeroIntro />

        {/* DASHBOARD CONTENT AREA */}
        <main className="dashboard-content">
          
          {/* PROJECTS VIEW */}
          {activeTab === 'projects' && (
            <section className="showcase" aria-label="Project Showcase">
              <ProjectFilters
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
                filter={filter}
                onFilterChange={setFilter}
                totalCount={projectData.length}
                matchCount={filteredProjects.length}
                onReset={handleResetFilters}
              />

              <div className="project-grid">
                {filteredProjects.length > 0 ? (
                  filteredProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))
                ) : (
                  <div className="empty-state">
                    <span className="empty-state-icon">🔍</span>
                    <h4>No matching projects found</h4>
                    <p>No projects match &ldquo;{searchQuery}&rdquo; under the &ldquo;{filter}&rdquo; filter.</p>
                    <button 
                      type="button" 
                      onClick={handleResetFilters} 
                      className="reset-text-button"
                      style={{ marginTop: '12px' }}
                    >
                      Clear search &amp; filters
                    </button>
                  </div>
                )}
              </div>
            </section>
          )}

          {/* CV VIEW (Accordion) */}
          {activeTab === 'cv' && (
            <section className="cv-view" aria-label="Curriculum Vitae">
              <CvAccordion
                items={cvHistory}
                openId={openAccordion}
                onToggle={toggleAccordion}
                onToggleAll={toggleAllAccordions}
              />
            </section>
          )}

          {/* SKILLS & STACK VIEW */}
          {activeTab === 'skills' && (
            <SkillsSection />
          )}
          
        </main>

        {/* FOOTER */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
