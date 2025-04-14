import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import NewsFeed from '../dashboard/NewsFeed';
import Footer from './Footer';

const AppLayout = ({ children }) => {
  const [showNewsFeed, setShowNewsFeed] = useState(true);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  
  const toggleNewsFeed = () => {
    setShowNewsFeed(!showNewsFeed);
  };

  return (
    <div className="app-layout">
      <Header />
      <div className={`layout-content ${isHomePage ? 'home-layout' : ''}`}>
        {!isHomePage && <Sidebar />}
        <main className={`main-content ${isHomePage ? 'home-content' : ''} ${showNewsFeed ? 'with-news' : ''}`}>
          {children}
        </main>
        <NewsFeed 
          showNewsFeed={showNewsFeed} 
          toggleNewsFeed={toggleNewsFeed} 
        />
      </div>
      <Footer />
    </div>
  );
};

export default AppLayout;