import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import { useForm } from "react-hook-form";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "../form";
import { Input } from "../input";

expect.extend(toHaveNoViolations);

describe("Form", () => {
  it("renders form fields", () => {
    function TestForm() {
      const form = useForm();
      return (
        <Form {...form}>
          <FormField
            control={form.control}
            name="test"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Test Field</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
              </FormItem>
            )}
          />
        </Form>
      );
    }
    render(<TestForm />);
    expect(screen.getByText("Test Field")).toBeInTheDocument();
  });

  it("should not have accessibility violations", async () => {
    function TestForm() {
      const form = useForm();
      return (
        <Form {...form}>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="email">Email</FormLabel>
                <FormControl>
                  <Input id="email" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
        </Form>
      );
    }
    const { container } = render(<TestForm />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
