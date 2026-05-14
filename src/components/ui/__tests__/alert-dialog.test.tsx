import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe, toHaveNoViolations } from "jest-axe";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogAction,
  AlertDialogCancel,
} from "../alert-dialog";

expect.extend(toHaveNoViolations);

describe("AlertDialog", () => {
  it("renders trigger", () => {
    render(
      <AlertDialog>
        <AlertDialogTrigger>Delete</AlertDialogTrigger>
      </AlertDialog>
    );
    expect(screen.getByText("Delete")).toBeInTheDocument();
  });

  it("opens alert on trigger click", async () => {
    const user = userEvent.setup();
    render(
      <AlertDialog>
        <AlertDialogTrigger>Delete</AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>This action cannot be undone.</AlertDialogDescription>
          </AlertDialogHeader>
        </AlertDialogContent>
      </AlertDialog>
    );

    await user.click(screen.getByText("Delete"));
    expect(await screen.findByText("Are you sure?")).toBeInTheDocument();
  });

  it("renders footer with actions", async () => {
    const user = userEvent.setup();
    render(
      <AlertDialog>
        <AlertDialogTrigger>Delete</AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogTitle>Confirm</AlertDialogTitle>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    );

    await user.click(screen.getByText("Delete"));
    expect(await screen.findByRole("button", { name: "Cancel" })).toBeInTheDocument();
    expect(await screen.findByRole("button", { name: "Continue" })).toBeInTheDocument();
  });

  describe("Accessibility", () => {
    it("trigger has no axe violations", async () => {
      const { container } = render(
        <AlertDialog>
          <AlertDialogTrigger>Open</AlertDialogTrigger>
        </AlertDialog>,
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });
});
