import { Link } from 'react-router-dom';

const ActionCard = ({ title, path, icon }) => {
  return (
    <Link to={path} className="junior-action-card">
      <div className="action-icon">
        {icon}
      </div>
      <div className="action-title">{title}</div>
    </Link>
  );
};

const MaJunior = () => {
  const juniorInfo = {
    name: "Ma Junior",
    sections: [
      "La carte d'identité de votre Junior",
      "L'historique Mouvement et interno de votre Junior",
      "Les membres de votre Junior",
      "Les relations que vous entretenez avec d'autres Juniors"
    ]
  };
  
  const actions = [
    {
      title: "Carte d'identité",
      path: "/carte-identite",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="16" rx="2"></rect>
          <line x1="8" y1="2" x2="8" y2="6"></line>
          <line x1="16" y1="2" x2="16" y2="6"></line>
          <line x1="3" y1="10" x2="21" y2="10"></line>
        </svg>
      )
    },
    {
      title: "Historique",
      path: "/historique",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
      )
    },
    {
      title: "Membres",
      path: "/membres",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      )
    },
    {
      title: "Relations Juniors",
      path: "/relations-juniors",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2"></path>
          <path d="M23 10V6a2 2 0 0 0-2-2h-5.7a1 1 0 0 0-.7.3L12 7"></path>
          <path d="M8 10v5a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-5"></path>
          <line x1="2" y1="12" x2="22" y2="12"></line>
        </svg>
      )
    }
  ];

  return (
    <div className="ma-junior-page">
      <div className="page-header" style={{ 
        backgroundImage: "url('/img/RFP25_WED2-36.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}>
        <div className="header-overlay">
          <h1 className="page-title">{juniorInfo.name}</h1>
        </div>
      </div>
      
      <div className="welcome-section">
        <h2 className="welcome-title">Bienvenue dans la section "{juniorInfo.name}"</h2>
        <p className="welcome-text">Dans cette section vous retrouverez :</p>
        <ul className="welcome-list">
          {juniorInfo.sections.map((section, index) => (
            <li key={index} className="welcome-list-item">
              {section}
            </li>
          ))}
        </ul>
      </div>
      
      <div className="junior-actions">
        <div className="junior-action-grid">
          {actions.map((action, index) => (
            <ActionCard 
              key={index}
              title={action.title}
              path={action.path}
              icon={action.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MaJunior;