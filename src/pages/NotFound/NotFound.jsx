import React from "react";
import "./NotFound.scss";

const NotFound = () => {
  return (
    <div className="app__notFound">
      <h2 className="app__notFound-title">Страница не найдена</h2>
      <p className="app__notFound-description">Такой страницы не существует</p>
    </div>
  );
};

export default NotFound;
