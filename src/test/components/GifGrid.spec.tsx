import { shallow } from "enzyme";
import React from "react";
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";

jest.mock("../../hooks/useFetchGifs");

describe("Pruebas en <GifGrid />", () => {
  const category = "";
  test("Debe renderizar el componente <GifGrid />", () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true,
    });
    const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de mostrar <GifGridItem /> cuando se cargan imagenes con el Hooks useFetchGifs", () => {
    const gifs = [
      {
        id: "ABC",
        url: "http://localhost/abc.png",
        title: "Titutlo ABC",
      },
    ];
    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false,
    });
    const wrapper = shallow(<GifGrid category={category} />);
    // expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("p").exists()).toBe(false);
    expect(wrapper.find("GifGridItem").length).toEqual(gifs.length);
  });
});
