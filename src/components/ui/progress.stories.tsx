import type { Meta } from "@storybook/react";
import { Progress } from "./progress";
import { useEffect, useState } from "react";

const meta = {
  title: "Components/Progress",
  component: Progress,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Progress>;

export default meta;

export const Default = {
  args: {
    value: 50,
    className: "w-[300px]",
  },
};

export const Empty = {
  args: {
    value: 0,
    className: "w-[300px]",
  },
};

export const Full = {
  args: {
    value: 100,
    className: "w-[300px]",
  },
};

export const Animated = {
  render: () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
      const timer = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) return 0;
          return prev + 10;
        });
      }, 500);

      return () => clearInterval(timer);
    }, []);

    return (
      <div className="space-y-2 w-[300px]">
        <div className="flex justify-between text-sm">
          <span>Loading...</span>
          <span>{progress}%</span>
        </div>
        <Progress value={progress} />
      </div>
    );
  },
};

export const WithLabel = {
  render: () => (
    <div className="space-y-2 w-[300px]">
      <div className="flex justify-between text-sm">
        <span>Uploading file</span>
        <span>75%</span>
      </div>
      <Progress value={75} />
    </div>
  ),
};

export const MultipleStates = {
  render: () => (
    <div className="space-y-4 w-[300px]">
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>Download 1</span>
          <span>25%</span>
        </div>
        <Progress value={25} />
      </div>
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>Download 2</span>
          <span>60%</span>
        </div>
        <Progress value={60} />
      </div>
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>Download 3</span>
          <span>90%</span>
        </div>
        <Progress value={90} />
      </div>
    </div>
  ),
};
