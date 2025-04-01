import React, { useEffect, useState } from "react";
import NewsCard from "./newsCard";

function NewsList() {
  let [News, setNews] = useState([]);

  async function fetchNews() {
    let responce = await fetch(
      `https://saurav.tech/NewsAPI/top-headlines/category/health/in.json`
    );
    let data = await responce.json();
    console.log(data.articles);
    setNews(data.articles);
  }

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <div>
      <div>
        <h1>News List By - Prajwal Thombre </h1>
        {News.map((news) => (
          <NewsCard
            key={news.id}
            title={news.title}
            description={news.description}
            author={news.author}
            imageUrl={news.urlToImage}
            url={news.url}
          />
        ))}
      </div>
    </div>
  );
}

export default NewsList;
