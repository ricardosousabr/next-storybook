import Button from "./index.jsx";

export default {
  title: "Components/Button",
  Component: Button,
  argTypes: {
    variant: {
      options: ["primary", "secondary"],
      control: { type: "radio" },
    },
  },
};

export const HomePage = () => <Button />;
