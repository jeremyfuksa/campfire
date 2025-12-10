import type { Meta } from "@storybook/react";
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

export const Default = {
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

export const WithoutInput = {
  render: () => {
    const [color, setColor] = useState("#ec4899");
    return <ColorPicker value={color} onChange={setColor} showInput={false} />;
  },
};

export const CustomPresets = {
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

export const Disabled = {
  args: {
    value: "#3b82f6",
    disabled: true,
  },
};
