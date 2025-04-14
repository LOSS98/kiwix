import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const NewsFeed = ({ showNewsFeed, toggleNewsFeed }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const news = [
    {
      id: 1,
      title: "INFORMATIONS RELATIVES AUX INSCRIPTIONS DU CNH24",
      date: "17 octobre 2024",
      content: "Le Congrès National d'Hiver 2024 approche à grands pas... Retrouvez toutes les informations nécessaires pour gérer au mieux vos inscriptions !",
      shortContent: "Retrouvez toutes les infos relatives aux inscriptions !"
    },
    {
      id: 2,
      title: "Nouveaux outils disponibles sur KiwiX",
      date: "5 octobre 2024",
      content: "Plusieurs nouveaux outils sont maintenant disponibles pour vous aider dans la gestion de votre Junior.",
      shortContent: "Découvrez les nouveaux outils pour votre Junior !"
    },
    {
      id: 3,
      title: "Mise à jour de la réglementation des études",
      date: "28 septembre 2024",
      content: "Une mise à jour importante concernant la réglementation des études a été publiée. Consultez les changements et assurez-vous d'être en conformité.",
      shortContent: "Consultez les changements importants de réglementation !"
    }
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % news.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [news.length]);
  
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? news.length - 1 : prev - 1));
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % news.length);
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
        <div className="news-carousel">
          {news.map((item, index) => (
            <div 
              key={item.id} 
              className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
              style={{
                background: index === 0 ? '#444' : '#666'
              }}
            >
              <div className="carousel-content">
                <h2 className="carousel-title">
                  {index === 0 ? "CNH24" : item.title.split(' ').slice(0, 2).join(' ')}
                </h2>
                <p className="carousel-text">{item.shortContent}</p>
              </div>
            </div>
          ))}
          
          <button className="carousel-nav carousel-prev" onClick={goToPrevSlide}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          
          <button className="carousel-nav carousel-next" onClick={goToNextSlide}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
          
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
        
        <div className="news-items">
          {news.map((item) => (
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

export default NewsFeed;