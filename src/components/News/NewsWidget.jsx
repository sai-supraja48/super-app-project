import { useEffect, useState } from "react";
import { getNews } from "../../services/newsApi";

function NewsWidget() {
  const [articles, setArticles] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const data = await getNews();

        if (!data || data.length === 0) {
          setError("No news available.");
          return;
        }

        setArticles(data);
      } catch (err) {
        setError("Unable to load news.");
      }
    };

    fetchNews();
  }, []);

  useEffect(() => {
    if (articles.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % articles.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [articles]);

  if (error) {
    return <div className="card">{error}</div>;
  }

  if (articles.length === 0) {
    return (
      <div className="card loader-container">
        <div className="loader"></div>
      </div>
    );
  }

  const article = articles[currentIndex];

  return (
  <div className="card news-card">
    <img
      src={
        article.urlToImage ||
        "https://via.placeholder.com/600x400"
      }
      alt={article.title}
      className="news-image"
    />

    <div className="news-overlay">
      <small className="news-date">
        {new Date(article.publishedAt).toLocaleDateString()}
      </small>

      <h3>{article.title}</h3>

      <p>
        {article.description || "No description available."}
      </p>

      <a
        href={article.url}
        target="_blank"
        rel="noreferrer"
      >
        <button className="news-btn">
          Browse
        </button>
      </a>
    </div>
  </div>
);

}

export default NewsWidget;