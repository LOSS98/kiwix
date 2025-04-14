import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const NewsSidebar = ({ showNewsFeed, toggleNewsFeed }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const news = [
    {
      id: 1,
      title: "INFORMATIONS RELATIVES AUX INSCRIPTIONS DU CNH24",
      date: "17 octobre 2024",
      content: "Le Congrès National d'Hiver 2024 approche à grands pas... Retrouvez toutes les informations nécessaires pour gérer au mieux vos inscriptions !",
    },
    {
      id: 2,
      title: "Nouveaux outils disponibles sur KiwiX",
      date: "5 octobre 2024",
      content: "Plusieurs nouveaux outils sont maintenant disponibles pour vous aider dans la gestion de votre Junior.",
    },
    {
      id: 3,
      title: "Mise à jour de la réglementation des études",
      date: "28 septembre 2024",
      content: "Une mise à jour importante concernant la réglementation des études a été publiée. Consultez les changements et assurez-vous d'être en conformité.",
    }
  ];
  
  // Autoplay pour le carrousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % news.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [news.length]);
  
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };
  
  return (
    <div className={`news-sidebar ${showNewsFeed ? 'open' : 'closed'}`}>
      <button className="toggle-news-btn" onClick={toggleNewsFeed}>
        {showNewsFeed ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        )}
      </button>
      
      <div className="news-content">
        <div className="news-header">
          <div className="carousel-background"></div>
          <div className="carousel-content">
            <h2 className="carousel-title">CNH<span>24</span></h2>
            <p className="carousel-text">Retrouvez toutes les infos relatives aux inscriptions !</p>
            
            <div className="carousel-dots">
              {news.map((_, index) => (
                <button 
                  key={index} 
                  className={`carousel-dot ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>
        
        <div className="news-items">
          {news.map((item, index) => (
            <div key={item.id} className="news-item">
              <h3 className="news-item-title">{item.title}</h3>
              <div className="news-item-date">Publié le {item.date}</div>
              <p className="news-item-content">{item.content}</p>
              <div className="news-item-read-more">
                <Link to={`/news/${item.id}`}>Lire la suite</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsSidebar;