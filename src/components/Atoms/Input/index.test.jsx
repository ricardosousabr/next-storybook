import renderer from "react-test-renderer";
import Input from "./index";

test("render input", () => {
  const tree = renderer.create(<Input type="text"/>).toJSON();
  expect(tree).toMatchSnapshot();
});
