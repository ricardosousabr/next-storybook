import renderer from "react-test-renderer";
import Select from "./index";

test("render text", () => {
  const tree = renderer.create(<Select />).toJSON();
  expect(tree).toMatchSnapshot();
});
