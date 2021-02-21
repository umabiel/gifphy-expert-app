import React from "react";
import { shallow } from "enzyme";
import { GiftExpertApp } from "../../GiftExpertApp";

describe("Pruebas en <GiftExpertApp />", () => {
  test("Debe renderizar correctamente <GiftExpertApp />", () => {
    const categories = [] as string[];
    const wrapper = shallow(<GiftExpertApp defaultCategories={categories} />);
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de mostrar una lista de <GifGrid />", () => {
    const categories = ["One Punch", "Dragon Ball"];
    const wrapper = shallow(<GiftExpertApp defaultCategories={categories} />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("GifGrid").length).toEqual(categories.length);
  });
});
