import type { Meta } from "@storybook/react";
import { useState } from "react";
import { Button } from "./button";
import { Stepper, type Step } from "./stepper";

const meta = {
  title: "Components/Stepper",
  component: Stepper,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Stepper>;

export default meta;

const baseSteps: Step[] = [
  { label: "Account" },
  { label: "Profile" },
  { label: "Preferences" },
];

const longSteps: Step[] = [
  { label: "Start" },
  { label: "Details" },
  { label: "Review" },
  { label: "Payment" },
  { label: "Complete" },
];

export const Default = {
  args: {
    steps: baseSteps,
    currentStep: 1,
  },
};

export const Interactive = {
  render: () => {
    const [currentStep, setCurrentStep] = useState(1);
    return (
      <div className="w-[500px] space-y-4">
        <Stepper steps={longSteps} currentStep={currentStep} />
        <div className="flex justify-between">
          <Button
            variant="outline"
            onClick={() => setCurrentStep((prev) => Math.max(0, prev - 1))}
            disabled={currentStep === 0}
          >
            Back
          </Button>
          <Button
            onClick={() =>
              setCurrentStep((prev) => Math.min(longSteps.length - 1, prev + 1))
            }
            disabled={currentStep === longSteps.length - 1}
          >
            Next
          </Button>
        </div>
      </div>
    );
  },
};

export const ThreeSteps = {
  args: {
    steps: baseSteps,
    currentStep: 1,
  },
};

export const FiveSteps = {
  args: {
    steps: longSteps,
    currentStep: 2,
  },
};

export const LastStep = {
  args: {
    steps: longSteps,
    currentStep: longSteps.length - 1,
  },
};
