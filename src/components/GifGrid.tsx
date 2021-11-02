import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";

type gridProps = {
  category: string;
};

export const GifGrid = ({ category }: gridProps) => {
  const { data: images, loading } = useFetchGifs(category) || {};

  console.log(images);

  return (
    <div>
      <h3>{category}</h3>
      {loading && <p className="animate__animated animate__bounce">Loading</p>}

      <div className="cardContainer animate__animated animate__tada ">
        {images?.map((image) => {
          return (
            <GifGridItem key={image.id} url={image.url} title={image.title} />
          );
        })}
      </div>
    </div>
  );
};
