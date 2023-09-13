import renderer from "react-test-renderer";
import Button from "./index";

test("render button", () => {
  const tree = renderer.create(<Button padding="10px 20px" borderRadius="12px" background="aqua" type="button" onClick={() => console.log("Test")}>Click</Button>).toJSON();
  expect(tree).toMatchSnapshot();
});
