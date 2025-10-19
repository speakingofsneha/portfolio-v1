// src/components/ClickableBook.tsx
import React from "react";
import { getAssetPath } from "../utils/assetPath";
import "../styles/currently.scss";

const ClickableBook: React.FC = () => {
  const handleClick = () => {
    window.open(
      "https://www.goodreads.com/book/show/25899336-when-breath-becomes-air",
      "_blank"
    );
  };

  return (
    <div className="book-container">
      <div className="book" onClick={handleClick} role="link" tabIndex={0}>
        <div className="book-cover">
          <img src={getAssetPath("/images/book.jpg")} alt="When Breath Becomes Air" />
        </div>
        <div className="book-pages"></div>
        <div className="book-back"></div>
      </div>
    </div>
  );
};

export default ClickableBook;
