const skillGroups = [
  {
    title: "Web Development",
    description: "Building fast, modern websites that look great and work smoothly on phones, tablets, and computers.",
    skills: ["React 19", "JavaScript", "Vite", "HTML5", "CSS3 (Grid & Flexbox)"],
    example: "Interactive web dashboards with live search, filtering, and responsive layouts."
  },
  {
    title: "Business Logic & Tools",
    description: "Writing code behind the scenes to handle numbers, tax rules, and delivery schedules.",
    skills: ["C# .NET", "Object-Oriented Design", "VAT & Tax Math", "Route Planning"],
    example: "Automated billing tools that calculate European sales tax and plan delivery routes."
  },
  {
    title: "Tools & Team Experience",
    description: "Industry-standard coding tools backed by 20+ years of running a company and managing teams.",
    skills: ["Git & GitHub", "GitHub Pages", "ESLint", "Team Management", "Operations"],
    example: "Running international studio locations, teaching workshops, and meeting strict deadlines."
  }
];

function SkillsSection() {
  return (
    <section className="skills-container" aria-label="Skills Overview">
      <div className="skills-header">
        <h3>Skills &amp; What I Build</h3>
        <p className="skills-subtitle">
          The programming languages, tools, and practical experience I bring to each project.
        </p>
      </div>

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <div key={group.title} className="skill-card">
            <h4 className="skill-title">{group.title}</h4>
            <p className="skill-desc">{group.description}</p>

            <div className="skill-tags">
              {group.skills.map((skill) => (
                <span key={skill} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>

            <div className="skill-example">
              <span className="example-label">In practice:</span>
              <p className="example-text">{group.example}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SkillsSection;
