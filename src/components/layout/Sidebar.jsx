import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();
  const [expandedCategories, setExpandedCategories] = useState({
    "Ma Junior": true,
    "Mouvement": true,
    "Communautés Engagées": true,
    "CNJE": true
  });
  
  const toggleCategory = (category) => {
    setExpandedCategories({
      ...expandedCategories,
      [category]: !expandedCategories[category]
    });
  };
  
  const isActive = (path) => {
    return location.pathname === path;
  };
  
  const categories = [
    {
      name: "Ma Junior",
      items: [
        { name: "Ma Junior", path: "/ma-junior", icon: "kiwix-logo" },
        { name: "Audits Conseils", path: "/audits-conseils", icon: "kiwix-logo" },
        { name: "Trésorerie", path: "/tresorerie", icon: "kiwix-logo" },
        { name: "Études", path: "/etudes", icon: "kiwix-logo" }
      ]
    },
    {
      name: "Mouvement",
      items: [
        { name: "Kiwi Légal", path: "/kiwi-legal", icon: "kiwix-logo", color: "secondary" },
        { name: "Kiwi Formation", path: "/kiwi-formation", icon: "kiwix-logo", color: "tertiary" },
        { name: "Kiwi Services", path: "/kiwi-services", icon: "kiwix-logo" },
        { name: "Kiwi Projets", path: "/kiwi-projets", icon: "kiwix-logo" },
        { name: "Prix", path: "/prix", icon: "kiwix-logo" },
        { name: "Kiwi AO", path: "/kiwi-ao", icon: "kiwix-logo" },
        { name: "Stratégie", path: "/strategie", icon: "kiwix-logo" }
      ]
    },
    {
      name: "Communautés Engagées",
      items: [
        { name: "Audits", path: "/audits", icon: "kiwix-logo" },
        { name: "MDD", path: "/mdd", icon: "kiwix-logo" },
        { name: "Formations", path: "/formations", icon: "kiwix-logo" },
        { name: "Devenir formateur", path: "/devenir-formateur", icon: "kiwix-logo" },
        { name: "Devenir A.C.", path: "/devenir-ac", icon: "kiwix-logo" }
      ]
    },
    {
      name: "CNJE",
      items: [
        { name: "Gestion des Juniors", path: "/gestion-juniors", icon: "kiwix-logo" },
        { name: "Utilisateurs", path: "/utilisateurs", icon: "kiwix-logo" },
        { name: "Trésorerie", path: "/tresorerie-cnje", icon: "kiwix-logo" }
      ]
    }
  ];
  
  return (
    <aside className="sidebar">
      {categories.map((category) => (
        <div key={category.name} className="sidebar-category">
          <div
            className="sidebar-category-header"
            onClick={() => toggleCategory(category.name)}
          >
            <span>{category.name}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`chevron ${expandedCategories[category.name] ? 'down' : 'right'}`}
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>
          
          {expandedCategories[category.name] && (
            <div className="sidebar-items">
              {category.items.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`sidebar-item ${isActive(item.path) ? 'active' : ''} ${item.color ? item.color : ''}`}
                >
                  <div className="sidebar-item-icon">
                    <svg className="kiwix-logo" viewBox="0 0 24 24" width="24" height="24">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span>{item.name}</span>
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </aside>
  );
};

export default Sidebar;