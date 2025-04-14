import { Link } from 'react-router-dom';

const ModuleCard = ({ title, icon, path, color }) => {
  return (
    <Link to={path} className={`module-card ${color || ''}`}>
      <div className="module-card-icon">
        <svg className="kiwix-logo" viewBox="0 0 24 24" width="24" height="24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <div className="module-card-title">{title}</div>
    </Link>
  );
};

const ModuleSection = ({ category, items, showAll = true }) => {
  return (
    <div className="module-section">
      <div className="section-header">
        <h2 className="section-title">{category}</h2>
      </div>
      <div className="module-grid">
        {items.map((item, itemIndex) => (
          <ModuleCard
            key={itemIndex}
            title={item.title}
            path={item.path}
            icon={item.icon}
            color={item.color}
          />
        ))}
      </div>
    </div>
  );
};

export default ModuleSection;