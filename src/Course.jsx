import { useState } from "react";

export const Course = ({ img, title, description }) => {
  const [more, setMore] = useState(false);

  const toggleClick = () => {
    setMore(!more);
  };

  const wordCount = `${description.substring(0, 150)}...`;

  return (
    <>
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={img} alt="Placeholder" />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">{title}</p>
            </div>
          </div>
          <div className="content">
            {more ? description : wordCount}
            <button onClick={toggleClick}>
              {more ? "Read Less" : "Read More"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
