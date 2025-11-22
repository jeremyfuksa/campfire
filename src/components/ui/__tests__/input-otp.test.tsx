import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "../input-otp";

describe("InputOTP", () => {
  it("renders correctly", () => {
    const { container } = render(
      <InputOTP maxLength={6}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
        </InputOTPGroup>
      </InputOTP>
    );
    expect(container.querySelector('[data-slot="input-otp"]')).toBeInTheDocument();
  });

  it("renders specified number of slots", () => {
    const { container } = render(
      <InputOTP maxLength={4}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
        </InputOTPGroup>
      </InputOTP>
    );
    const slots = container.querySelectorAll('[data-slot="input-otp-slot"]');
    expect(slots).toHaveLength(4);
  });

  it("accepts numeric input", async () => {
    const user = userEvent.setup();
    render(
      <InputOTP maxLength={6}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
        </InputOTPGroup>
      </InputOTP>
    );

    const input = screen.getByRole("textbox");
    await user.type(input, "12");
    expect(input).toHaveValue("12");
  });
});
