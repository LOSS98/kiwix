import { useState } from 'react';
import { Link } from 'react-router-dom';
import NewsSidebar from '../components/dashboard/NewsSidebar';

const Dashboard = () => {
  const [showNewsFeed, setShowNewsFeed] = useState(true);
  
  const toggleNewsFeed = () => {
    setShowNewsFeed(!showNewsFeed);
  };
  
  const categories = [
    {
      name: "Ma Junior",
      items: [
        { title: "Ma Junior", path: "/ma-junior", color: "primary" },
        { title: "Audits Conseils", path: "/audits-conseils", color: "primary" },
        { title: "Trésorerie", path: "/tresorerie", color: "primary" },
        { title: "Études", path: "/etudes", color: "primary" }
      ]
    },
    {
      name: "Mouvement",
      items: [
        { title: "Kiwi Légal", path: "/kiwi-legal", color: "secondary" },
        { title: "Kiwi Formation", path: "/kiwi-formation", color: "tertiary" },
        { title: "Kiwi Services", path: "/kiwi-services", color: "primary" },
        { title: "Kiwi Projets", path: "/kiwi-projets", color: "primary" },
        { title: "Prix", path: "/prix", color: "primary" },
        { title: "Kiwi AO", path: "/kiwi-ao", color: "primary" },
        { title: "Stratégie", path: "/strategie", color: "primary" }
      ]
    },
    {
      name: "Communautés Engagées",
      items: [
        { title: "Audits", path: "/audits", color: "primary" },
        { title: "MDD", path: "/mdd", color: "primary" },
        { title: "Formations", path: "/formations", color: "primary" },
        { title: "Devenir formateur", path: "/devenir-formateur", color: "primary" },
        { title: "Devenir A.C.", path: "/devenir-ac", color: "primary" }
      ]
    },
    {
      name: "CNJE",
      items: [
        { title: "Gestion des Juniors", path: "/gestion-juniors", color: "primary" },
        { title: "Utilisateurs", path: "/utilisateurs", color: "primary" },
        { title: "Trésorerie", path: "/tresorerie-cnje", color: "primary" },
        { title: "-", path: "#", color: "primary" }
      ]
    }
  ];
  
  return (
    <div className="dashboard-container">
      <div className={`dashboard-content ${showNewsFeed ? '' : 'full-width'}`}>
        {categories.map((category, index) => (
          <div key={index} className="module-category">
            <h2 className="category-name">{category.name}</h2>
            <div className="module-grid">
              {category.items.map((item, itemIndex) => (
                <Link key={itemIndex} to={item.path} className={`module-item ${item.color}`}>
                  <div className="module-icon">
                    <svg className="kiwix-logo" viewBox="0 0 24 24" width="24" height="24">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="module-title">{item.title}</div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <NewsSidebar 
        showNewsFeed={showNewsFeed} 
        toggleNewsFeed={toggleNewsFeed} 
      />
    </div>
  );
};

export default Dashboard;