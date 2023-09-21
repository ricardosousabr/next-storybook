import Select from "./index.jsx";

export default {
  title: "Components/Select",
  Component: Select,
  parameters: {
    backgrounds: {
      values: [
        { name: "dark", value: "#000000" },
        { name: "white", value: "#ffffff" },
        { name: "purple", value: "#b220d7" },
      ],
    },
  },
};

export const Primary = (args) => <Select {...args} />;
Primary.args = {
  name: "",
  children: "",
  size: 0,
  autofocus: true,
  disabled: false,
  multiple: false,
};
