import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import { Stepper } from "../stepper";

expect.extend(toHaveNoViolations);

describe("Stepper", () => {
  const steps = [
    { label: "Account", description: "Create your account" },
    { label: "Profile", description: "Add profile details" },
    { label: "Preferences", description: "Set your preferences" },
  ];

  it("renders all steps", () => {
    render(<Stepper steps={steps} currentStep={0} />);
    expect(screen.getByText("Account")).toBeInTheDocument();
    expect(screen.getByText("Profile")).toBeInTheDocument();
    expect(screen.getByText("Preferences")).toBeInTheDocument();
  });

  it("renders step descriptions", () => {
    render(<Stepper steps={steps} currentStep={0} />);
    expect(screen.getByText("Create your account")).toBeInTheDocument();
    expect(screen.getByText("Add profile details")).toBeInTheDocument();
  });

  it("highlights current step", () => {
    render(<Stepper steps={steps} currentStep={1} />);
    const profileStep = screen.getByText("Profile");
    expect(profileStep).toBeInTheDocument();
  });

  it("shows completed steps with checkmarks", () => {
    const { container } = render(<Stepper steps={steps} currentStep={2} />);
    const checkmarks = container.querySelectorAll(".fa-check");
    expect(checkmarks).toHaveLength(2);
  });

  it("shows step numbers for incomplete steps", () => {
    render(<Stepper steps={steps} currentStep={0} />);
    expect(screen.getByText("2")).toBeInTheDocument();
    expect(screen.getByText("3")).toBeInTheDocument();
  });

  it("works with steps without descriptions", () => {
    const simpleSteps = [{ label: "Step 1" }, { label: "Step 2" }];
    render(<Stepper steps={simpleSteps} currentStep={0} />);
    expect(screen.getByText("Step 1")).toBeInTheDocument();
    expect(screen.getByText("Step 2")).toBeInTheDocument();
  });

  it("should not have accessibility violations", async () => {
    const { container } = render(<Stepper steps={steps} currentStep={1} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
