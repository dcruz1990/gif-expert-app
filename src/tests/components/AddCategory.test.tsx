import { shallow } from "enzyme";
import { AddCategory } from "../../components/AddCategory";

describe("Pruebas en AddCategory", () => {
  const wrapper = shallow(<AddCategory setCategories={AddCategory} />);

  const setCategories = () => {};

  test("should show correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should change text box", () => {
    const input = wrapper.find("input");

    const value = "Hola mundo";

    input.simulate("change", {
      target: {
        value,
      },
    });
  });
});
