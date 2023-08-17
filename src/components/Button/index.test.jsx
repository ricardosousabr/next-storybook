import renderer from "react-test-renderer";
import Button from "./index";

test("render button", () => {
  const tree = renderer.create(<Button />).toJSON();
  expect(tree).toMatchSnapshot();
});
