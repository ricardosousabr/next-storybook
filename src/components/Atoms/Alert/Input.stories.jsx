import Alert from "./index.jsx";

export default {
  title: "Components/Alert",
  Component: Alert,
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

export const Primary = (args) => <Alert {...args} />;
Primary.args = {
  children: "Info Variantsdc",
  background: "withe",
  color: "black",
  fontSize: "12px",
};
