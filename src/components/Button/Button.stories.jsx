import Button from "./index.jsx";

export default {
  title: "Components/Button",
  Component: Button,
};

export const Primary = (args) => <Button {...args}></Button>;
Primary.args = {
  children: "Button",
  type: "submits",
  onClick: () => {
    console.log("Test");
  },
};
