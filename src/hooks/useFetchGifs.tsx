import { useEffect, useState } from "react";
import { IGifs } from "../core/oop/interfaces/IGifs";
import { getGifs } from "../helpers/getGifs";

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
