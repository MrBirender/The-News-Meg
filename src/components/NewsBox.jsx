import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";

const NewsBox = ({category}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${
      import.meta.env.VITE_API_KEY
    }`;
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Network response was not ok`);
        }
        const result = await response.json();
        setData(result.articles);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // Ensure fetchData is called
  }, [category]);
  const defaultImg= "https://images.pexels.com/photos/34950/pexels-photo.jpg"
  const defaultHeading = "Headling are Mising kindly click on Read More to get more info."

  return (
    <div className="container">
      <h2 className="text-center my-4">
        Latest <span className="badge text-bg-info">News</span>
      </h2>
      <div className="row">
        {data.length === 0 ? (
          <p className="text-center">No data available</p>
        ) : (
          data.map((newObj, index) => (
            <div className="col-md-4 col-sm-6 mb-4" key={index}>
              <NewsItem
                title={newObj.title || defaultHeading}
                img={newObj.urlToImage || defaultImg}
                content={newObj.content}
                url={newObj.url}
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default NewsBox;
