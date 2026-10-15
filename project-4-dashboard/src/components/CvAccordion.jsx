function CvAccordion({ items, openId, onToggle, onToggleAll }) {
  const isAllExpanded = openId === 'all';

  return (
    <div className="cv-container">
      <div className="cv-header">
        <div>
          <h3>Work History &amp; Experience</h3>
          <p className="cv-subtitle">
            Over 20 years running a business and managing logistics, now applied to software development.
          </p>
        </div>

        <div className="cv-actions">
          <button
            type="button"
            className="action-button-subtle"
            onClick={onToggleAll}
          >
            {isAllExpanded ? 'Collapse All −' : 'Expand All +'}
          </button>
          <a
            href="https://slowmotionsoundz.github.io/lexicon-classes/project1-cv/"
            target="_blank"
            rel="noopener noreferrer"
            className="action-button-primary"
          >
            View Full CV Website &rarr;
          </a>
        </div>
      </div>

      <div className="accordion-timeline" role="region" aria-label="Work Experience">
        {items.map((job) => {
          const isOpen = openId === 'all' || openId === job.id;

          return (
            <div key={job.id} className={`accordion-item ${isOpen ? 'is-open' : ''}`}>
              <button
                type="button"
                className="accordion-header"
                onClick={() => onToggle(job.id)}
                aria-expanded={isOpen}
              >
                <div className="accordion-title-group">
                  <div className="role-company-line">
                    <h4 className="accordion-role">{job.role}</h4>
                    {job.company && (
                      <span className="company-name">&bull; {job.company}</span>
                    )}
                  </div>
                  <span className="timeline-date">{job.date}</span>
                </div>
                <span className="accordion-icon" aria-hidden="true">
                  {isOpen ? '−' : '+'}
                </span>
              </button>

              {isOpen && (
                <div className="accordion-body">
                  <p className="job-details-text">{job.details}</p>

                  {job.highlights && job.highlights.length > 0 && (
                    <div className="job-highlights">
                      <span className="highlights-label">What I did:</span>
                      <ul className="highlights-list">
                        {job.highlights.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CvAccordion;
