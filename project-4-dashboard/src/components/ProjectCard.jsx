function ProjectCard({ project }) {
  const isLive = project.status === 'live' && project.link && project.link !== '#';

  return (
    <article className="project-card">
      <div className="card-header">
        <span className="card-category">{project.type}</span>
        <span className="card-status">{isLive ? 'Live Site' : 'Class Project'}</span>
      </div>

      <h4 className="card-title">{project.title}</h4>
      <p className="card-description">{project.description}</p>

      {project.tags && project.tags.length > 0 && (
        <div className="card-tags">
          {project.tags.map((tag) => (
            <span key={tag} className="tech-tag">
              {tag}
            </span>
          ))}
        </div>
      )}

      <div className="card-footer">
        {isLive ? (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="card-link"
          >
            <span>View website</span>
            <span className="arrow-icon" aria-hidden="true">&rarr;</span>
          </a>
        ) : (
          <span className="card-note">In development (backend logic)</span>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;
