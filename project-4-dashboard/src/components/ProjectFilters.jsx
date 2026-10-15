const categories = ['All', 'HTML/CSS', 'React', 'Business Systems'];

function ProjectFilters({ 
  searchQuery, 
  onSearchChange, 
  filter, 
  onFilterChange, 
  totalCount, 
  matchCount,
  onReset 
}) {
  const isFiltered = filter !== 'All' || searchQuery.trim() !== '';

  return (
    <div className="filter-toolbar">
      <div className="toolbar-controls">
        <div className="search-input-wrapper">
          <input
            type="text"
            placeholder="Search projects (e.g. React, VAT, resume)..."
            className="search-bar"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            aria-label="Search projects"
          />
          {searchQuery && (
            <button 
              type="button" 
              className="clear-search-button"
              onClick={() => onSearchChange('')}
              aria-label="Clear search"
            >
              ✕
            </button>
          )}
        </div>

        <div className="filter-buttons" role="tablist" aria-label="Project filters">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => onFilterChange(category)}
              className={filter === category ? 'active-filter' : 'filter-pill'}
              role="tab"
              aria-selected={filter === category}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="toolbar-meta">
        <span className="results-count">
          Showing {matchCount} of {totalCount} projects
        </span>
        {isFiltered && (
          <button 
            type="button" 
            onClick={onReset} 
            className="reset-text-button"
          >
            Clear filters
          </button>
        )}
      </div>
    </div>
  );
}

export default ProjectFilters;
