import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
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
});
