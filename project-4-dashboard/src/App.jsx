import { useState, useEffect } from 'react';
import projectData from './data.json';
import './App.css';

// Extracting CV data into an array makes it easy for React to manage the accordion states
const cvHistory = [
  {
    id: 1,
    role: "Software Developer & IT Student",
    date: "Skåne County, Sweden (Present)",
    details: "Completing an IT engineering program while building real-world web applications. Focus on reliable backend systems for payments, tax calculations, and delivery routing."
  },
  {
    id: 2,
    role: "Founder & Director | EQ Labs",
    date: "Huntsville, AL & Landskrona, Sweden (1999 – Present)",
    details: "Built a music company from the ground up, expanding from three US locations to a flagship studio and school in Sweden. Manage operations, teach youth workshops, and build internal web tools to handle bookings and scheduling."
  },
  {
    id: 3,
    role: "Foreman & Logistics | Asplundh",
    date: "Huntsville, AL (2006 – 2011)",
    details: "Started driving trucks, moved up to Foreman. Managed work crews, daily business operations, and equipment routing for city utility contracts."
  },
  {
    id: 4,
    role: "Delivery Driver | Just In Time Cartage",
    date: "US & Canada (2002 – 2006)",
    details: "Drove box trucks for time-sensitive freight across state lines and into Canada. Gained hands-on experience with strict deadlines and international route planning."
  }
];

function App() {
  const [activeTab, setActiveTab] = useState('projects');
  const [filter, setFilter] = useState('All');
  
  // New States for Interactive Features
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
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          project.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const toggleAccordion = (id) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <div className={`app-wrapper ${isDarkMode ? 'dark-mode' : ''}`}>
      <div className="dashboard-container">
        
        {/* NAVIGATION BAR */}
        <nav className="dashboard-nav">
          <h2>Cory Parham | Developer Dashboard</h2>
          <div className="nav-buttons">
            <button 
              className={activeTab === 'projects' ? 'active-tab' : 'tab'} 
              onClick={() => setActiveTab('projects')}
            >
              Project Showcase
            </button>
            <button 
              className={activeTab === 'cv' ? 'active-tab' : 'tab'} 
              onClick={() => setActiveTab('cv')}
            >
              Interactive CV
            </button>
            <button 
              className="theme-toggle"
              onClick={() => setIsDarkMode(!isDarkMode)}
            >
              {isDarkMode ? '☀️ Light' : '🌙 Dark'}
            </button>
          </div>
        </nav>

        {/* DASHBOARD CONTENT AREA */}
        <main className="dashboard-content">
          
          {/* PROJECTS VIEW */}
          {activeTab === 'projects' && (
            <section className="showcase">
              <div className="filter-header">
                <h3>My Work</h3>
                
                {/* Search Bar */}
                <input 
                  type="text" 
                  placeholder="Search projects..." 
                  className="search-bar"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />

                <div className="filter-buttons">
                  <button onClick={() => setFilter('All')} className={filter === 'All' ? 'active-filter' : ''}>All</button>
                  <button onClick={() => setFilter('HTML/CSS')} className={filter === 'HTML/CSS' ? 'active-filter' : ''}>HTML/CSS</button>
                  <button onClick={() => setFilter('React')} className={filter === 'React' ? 'active-filter' : ''}>React</button>
                  <button onClick={() => setFilter('Business Systems')} className={filter === 'Business Systems' ? 'active-filter' : ''}>Business Systems</button>
                </div>
              </div>

              <div className="project-grid">
                {filteredProjects.length > 0 ? (
                  filteredProjects.map((project) => (
                    <div key={project.id} className="project-card">
                      <span className="project-type">{project.type}</span>
                      <h4>{project.title}</h4>
                      <p>{project.description}</p>
                      {project.link !== "#" && (
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="view-button">
                          View Live Project
                        </a>
                      )}
                    </div>
                  ))
                ) : (
                  <p style={{ color: "#6b7280" }}>No projects match your search.</p>
                )}
              </div>
            </section>
          )}

          {/* CV VIEW (Accordion) */}
          {activeTab === 'cv' && (
            <section className="cv-view">
              <div className="filter-header">
                <h3>Professional Timeline</h3>
                <a href="mailto:coryparham80@gmail.com" className="view-button" style={{ padding: "8px 16px" }}>Contact Me</a>
              </div>
              
              <div className="accordion-timeline">
                {cvHistory.map((job) => (
                  <div key={job.id} className="accordion-item">
                    <button 
                      className="accordion-header" 
                      onClick={() => toggleAccordion(job.id)}
                    >
                      <div>
                        <h4>{job.role}</h4>
                        <span className="timeline-date">{job.date}</span>
                      </div>
                      <span className="accordion-icon">
                        {openAccordion === job.id ? '−' : '+'}
                      </span>
                    </button>
                    
                    {openAccordion === job.id && (
                      <div className="accordion-body">
                        <p>{job.details}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}
          
        </main>
      </div>
    </div>
  );
}

export default App;
