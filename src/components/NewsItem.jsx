import React from "react";

const NewsItem = ({ title, img, content, url }) => {
  return (
    <div className="card h-100 bg-dark text-light">
      <img src={img} className="card-img-top" alt="newsImg" />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{title.slice(0, 50)}</h5>
        <p className="card-text flex-grow-1">{content? content.slice(0, 150): "Detailed part of this particular News content is not available you can click on the read more button to get the full information."}</p>
        <a href={url} className="btn btn-primary mt-auto">
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
