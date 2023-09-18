import renderer from "react-test-renderer";
import Accordion from "./index";

test("render accordion", () => {
  const tree = renderer.create(<Accordion />).toJSON();
  expect(tree).toMatchSnapshot();
});
