import Text from "./index.jsx";

export default {
  title: "Components/Text",
  Component: Text,
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

export const Primary = (args) => <Text {...args} />;
Primary.args = {
  children: "",
  color: "red",
  fontSize: "12px",
  as: "p",
};
