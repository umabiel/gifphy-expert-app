import { shallow, ShallowWrapper } from "enzyme";
import { AddCategory } from "../../components/AddCategory";

describe("Pruebas en AddCategory", () => {
  const setCategories = jest.fn();
  let wrapper: ShallowWrapper; // = shallow(<AddCategory setCategories={setCategories} />);

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });
  test("Debe renderizar correctamente <AddCategory />", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe cambiar en contenido de la caja de texto", () => {
    const input = wrapper.find("input");
    const value = "Hola Mundo!";

    input.simulate("change", { target: { value } });
    // expect(input.text().trim).toBe(value);
  });

  test("No se debe pedir informacion si el input esta vacio", () => {
    wrapper.find("form").simulate("submit", { preventDefault: () => {} });
    expect(setCategories).not.toHaveBeenCalled();
  });

  test("Debe de llamar a la funcion setCategories y limpiar la caja de texto", () => {
    const value = "Hola Mundo!";
    // 1. Simular entrada en input
    wrapper.find("input").simulate("change", { target: { value } });
    // 2. Simular envio de formulario
    wrapper.find("form").simulate("submit", { preventDefault: () => {} });
    // 3. Llamar setCategories de manera correcta
    expect(setCategories).toHaveBeenCalledTimes(1); // Cantidad de veces que se debio llamar
    expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
    // 4. Limpiar la caja de texto
    expect(wrapper.find("input").prop("value")).toBe("");
  });
});
