import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";

describe("Pruebas con componente <GifGridItem />", () => {
  const title = "Encabezado";
  const imagen = "http://localhost/img/1.png";

  const wrapper = shallow(<GifGridItem title={title} url={imagen} />);

  test("debe mostrar el componente correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("debe mostrar el titulo en una etiqueta parrafo <p />", () => {
    const p = wrapper.find("p");
    expect(p.text().trim()).toBe(title);
  });

  test("debe mostrar el src de la imagen y el texto alternativo", () => {
    const img = wrapper.find("img");
    const { src, alt } = img.props();
    expect(src).toBe(imagen);
    expect(alt).toBe(title);
  });
});
