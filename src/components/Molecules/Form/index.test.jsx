import renderer from "react-test-renderer";
import Form from "./index";

test("render form", () => {
  const tree = renderer.create(<Form />).toJSON();
  expect(tree).toMatchSnapshot();
});
