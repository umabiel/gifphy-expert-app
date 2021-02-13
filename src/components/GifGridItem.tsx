import { IGifs } from "../core/oop/interfaces/IGifs";

export const GifGridItem = ({ id, title, url }: IGifs) => {
  return (
    <div className="card">
      <p>{title}</p>
      <img src={url} alt={title} />
    </div>
  );
};
