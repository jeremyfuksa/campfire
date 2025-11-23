import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { ColorPicker } from "./color-picker";

const meta = {
  title: "Components/ColorPicker",
  component: ColorPicker,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ColorPicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [color, setColor] = useState("#3b82f6");
    return (
      <div>
        <ColorPicker value={color} onChange={setColor} />
        <p className="mt-4 text-sm">Selected: {color}</p>
      </div>
    );
  },
};

export const WithoutInput: Story = {
  render: () => {
    const [color, setColor] = useState("#ec4899");
    return <ColorPicker value={color} onChange={setColor} showInput={false} />;
  },
};

export const CustomPresets: Story = {
  render: () => {
    const [color, setColor] = useState("#000000");
    return (
      <ColorPicker
        value={color}
        onChange={setColor}
        presets={[
          "#000000",
          "#ffffff",
          "#ff0000",
          "#00ff00",
          "#0000ff",
          "#ffff00",
          "#ff00ff",
          "#00ffff",
        ]}
      />
    );
  },
};

export const Disabled: Story = {
  args: {
    value: "#3b82f6",
    disabled: true,
  },
};
