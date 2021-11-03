import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";

describe("Pruebas en GifGridItem", () => {
  const props = {
    title: "asdad",
    url: "https://pepe.com",
  };

  const wrapper = shallow(<GifGridItem {...props} />);

  test("should show component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("debe de tener un parrafo con el titulo", () => {
    const p = wrapper.find("p");

    expect(p.text().trim()).toBe(props.title);
  });

  test("should get image equals to url passed by props", () => {
    const image = wrapper.find("img");

    expect(image.props().src).toBe(props.url);
    expect(image.props().alt).toBe(props.title);
  });

  test("should have class animted fadeIn", () => {
    const div = wrapper.find("div");

    expect(div.hasClass("card")).toBe(true);
  });
});
