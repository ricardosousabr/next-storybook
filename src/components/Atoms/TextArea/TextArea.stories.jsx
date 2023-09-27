import TextArea from "./index.jsx";

export default {
  title: "Components/TextArea",
  Component: TextArea,
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

export const Primary = (args) => <TextArea {...args} />;
Primary.args = {
  cols: "50",
  disabled: false,
  placeholder: "Escreva aqui",
  maxlength: 100,
  rows: 5,
};
