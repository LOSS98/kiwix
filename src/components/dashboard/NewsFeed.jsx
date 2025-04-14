import Card from '../common/Card';

const NewsCard = ({ title, date, content, image }) => {
  return (
    <div className="news-card">
      {image && (
        <div className="news-card-image">
          <img src={image} alt={title} />
        </div>
      )}
      <div className="news-card-content">
        <h3 className="news-card-title">{title}</h3>
        <div className="news-card-date">Publié le {date}</div>
        <p className="news-card-text">{content}</p>
      </div>
    </div>
  );
};

const NewsFeed = ({ news }) => {
  return (
    <div className="news-feed">
      <h2 className="section-title">Actualités</h2>
      <div className="news-list">
        {news.map((item, index) => (
          <NewsCard
            key={index}
            title={item.title}
            date={item.date}
            content={item.content}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default NewsFeed;