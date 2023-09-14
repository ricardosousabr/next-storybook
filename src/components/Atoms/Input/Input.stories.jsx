import Input from "./index.jsx";

export default {
  title: "Components/Input",
  Component: Input,
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

export const Primary = (args) => <Input {...args} />;
Primary.args = {
  padding: "",
  borderRadius: "",
  value: "",
  placeholder: "",
  type: "text",
};
