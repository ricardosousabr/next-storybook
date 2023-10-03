import renderer from "react-test-renderer";
import Alert from "./index";

test("render Alert", () => {
  const tree = renderer.create(<Alert />).toJSON();
  expect(tree).toMatchSnapshot();
});
