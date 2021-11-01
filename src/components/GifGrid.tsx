import React, { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
import { GifGridItem } from "./GifGridItem";

type gridProps = {
  category: string;
};

export const GifGrid = ({ category }: gridProps) => {
  const [images, setImages] = useState<
    {
      id: string;
      url: string;
      title: string;
    }[]
  >();
  // onMounted de Vue
  useEffect(() => {
    getGifs(category).then((data) => {
      setImages(data);
    });
  }, [category]);

  return (
    <div>
      <h3>{category}</h3>

      <div className="cardContainer">
        {images?.map((image) => {
          return (
            <GifGridItem key={image.id} url={image.url} title={image.title} />
          );
        })}
      </div>
    </div>
  );
};
