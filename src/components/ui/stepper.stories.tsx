import type { Meta, StoryObj } from "@storybook/react";
import { Stepper, Step } from "./stepper";
import { useState } from "react";
import { Button } from "./button";

const meta = {
  title: "Components/Stepper",
  component: Stepper,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Stepper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    activeStep: 0,
    children: [
      <Step key="1" label="Account" />,
      <Step key="2" label="Profile" />,
      <Step key="3" label="Preferences" />,
    ],
  },
};

export const Interactive: Story = {
  render: () => {
    const [activeStep, setActiveStep] = useState(0);
    const steps = ["Account", "Profile", "Preferences", "Review"];

    return (
      <div className="w-[500px] space-y-4">
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => (
            <Step key={index} label={label} />
          ))}
        </Stepper>
        <div className="flex justify-between">
          <Button
            variant="outline"
            onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
            disabled={activeStep === 0}
          >
            Back
          </Button>
          <Button
            onClick={() =>
              setActiveStep(Math.min(steps.length - 1, activeStep + 1))
            }
            disabled={activeStep === steps.length - 1}
          >
            Next
          </Button>
        </div>
      </div>
    );
  },
};

export const ThreeSteps: Story = {
  args: {
    activeStep: 1,
    children: [
      <Step key="1" label="Select" />,
      <Step key="2" label="Configure" />,
      <Step key="3" label="Deploy" />,
    ],
  },
};

export const FiveSteps: Story = {
  args: {
    activeStep: 2,
    children: [
      <Step key="1" label="Start" />,
      <Step key="2" label="Details" />,
      <Step key="3" label="Review" />,
      <Step key="4" label="Payment" />,
      <Step key="5" label="Complete" />,
    ],
  },
};

export const FirstStep: Story = {
  args: {
    activeStep: 0,
    children: [
      <Step key="1" label="Step 1" />,
      <Step key="2" label="Step 2" />,
      <Step key="3" label="Step 3" />,
      <Step key="4" label="Step 4" />,
    ],
  },
};

export const LastStep: Story = {
  args: {
    activeStep: 3,
    children: [
      <Step key="1" label="Step 1" />,
      <Step key="2" label="Step 2" />,
      <Step key="3" label="Step 3" />,
      <Step key="4" label="Complete" />,
    ],
  },
};
