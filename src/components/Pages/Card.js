import React from "react";
import PropTypes from "prop-types";
import "./css/Event.css";

const Card = ({ image, title, description, link }) => {
  return (
    <div className="cardEvent">
      <img src={image} alt={title} className="cardEvent__image" />
      <div className="cardEvent__content">
        <h2 className="cardEvent__title">{title}</h2>
        <p className="cardEvent__description">{description}</p>
        <a href={link} className="cardEvent__button">
          Read More
        </a>
      </div>
    </div>
  );
};

Card.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Card;
