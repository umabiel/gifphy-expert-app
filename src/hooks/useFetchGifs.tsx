import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

interface IGifs {
  id: string;
  title: string;
  url: string;
}

export const useFetchGifs = (category: string) => {
  const initialState = {
    data: [] as IGifs[], // Shameless Hack u_u
    loading: true,
  };
  const [state, setState] = useState(initialState);

  useEffect(() => {
    getGifs(category).then((res) => {
      setState({
        data: res,
        loading: false,
      });
    });
  }, [category]);

  return state;
};
