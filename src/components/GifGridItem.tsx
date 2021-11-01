import React from "react";

interface props {
  url: string;
  title: string;
}

export const GifGridItem = ({ url, title }: props) => {
  return (
    <div className="card">
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  );
};
