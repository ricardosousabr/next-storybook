import Button from "./index.jsx";

export default {
  title: "Components/Button",
  Component: Button,
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

export const Primary = (args) => <Button {...args} />;
Primary.args = {
  padding: '',
  borderRadius: '',
  background: 'color',
  href: "",
  children: "Click",
  type: "submit",
};

Primary.argTypes = {
  onClick: {
    action: 'clicked',
    description: 'Ação acionada quando o botão é clicado',
  },
}


