import renderer from "react-test-renderer";
import Text from "./index";

test("render text", () => {
  const tree = renderer.create(<Text color={"aqua"} fontSize={"12px"}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam vel quas, iusto nulla aut temporibus optio sed! Asperiores deleniti at sed illo neque, eveniet est eius, itaque sint, vitae molestias.</Text>).toJSON();
  expect(tree).toMatchSnapshot();
});
