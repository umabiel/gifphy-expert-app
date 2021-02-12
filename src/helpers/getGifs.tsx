interface IResponseGifs {
  id: string;
  title: string;
  images: { downsized_medium: { url: string } };
}

interface IGifs {
  id: string;
  title: string;
  url: string;
}

export const getGifs = async (category: string): Promise<IGifs[]> => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=10&api_key=Zk2tHMHAtNSrCwlFmVHUnInSG9WXvfyp`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((img: IResponseGifs) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    };
  });

  return gifs;
};
