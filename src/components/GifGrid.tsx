import React, { Fragment } from "react";
import { IGifs } from "../core/oop/interfaces/IGifs";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";

interface IProps {
  category: string;
}

export const GifGrid = ({ category = "One Punch" }: IProps) => {
  // const initState: IGifs[] = [];
  // const [images, setImages] = useState(initState);
  const { data: images, loading } = useFetchGifs(category);

  return (
    <Fragment>
      <h3>{category}</h3>
      {loading && <p>Loading...</p>}
      <div className="card-grid">
        {images.map((x: IGifs) => (
          <GifGridItem key={x.id} {...x} />
        ))}
      </div>
    </Fragment>
  );
};
