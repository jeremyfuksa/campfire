import type { Meta } from "@storybook/react";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./form";
import { Input } from "./input";
import { Textarea } from "./textarea";
import { Button } from "./button";

const meta = {
  title: "Components/Form",
  component: Form,
  parameters: { layout: "padded" },
  tags: ["autodocs"],
} satisfies Meta<typeof Form>;

export default meta;

type ProfileValues = { username: string; email: string };

const ProfileForm = () => {
  const form = useForm<ProfileValues>({
    defaultValues: { username: "", email: "" },
  });

  const onSubmit = (values: ProfileValues) => {
    alert(`Submitted: ${JSON.stringify(values, null, 2)}`);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-5 max-w-sm"
      >
        <FormField
          control={form.control}
          name="username"
          rules={{ required: "Username is required" }}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="campfire-fan" {...field} />
              </FormControl>
              <FormDescription>
                Public display name. Letters and numbers only.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          rules={{
            required: "Email is required",
            pattern: { value: /\S+@\S+\.\S+/, message: "Invalid email" },
          }}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="you@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export const Default = {
  render: () => <ProfileForm />,
};

// Demonstrates the error state — pre-populated with invalid values so the
// validation messages render in the docs without requiring user input.
type SignupValues = { email: string; password: string };

const SignupFormWithErrors = () => {
  const form = useForm<SignupValues>({
    defaultValues: { email: "not-an-email", password: "12" },
    mode: "onChange",
  });

  // Force-validate on mount so the messages render in the story.
  if (Object.keys(form.formState.errors).length === 0) {
    void form.trigger();
  }

  return (
    <Form {...form}>
      <form className="flex flex-col gap-5 max-w-sm">
        <FormField
          control={form.control}
          name="email"
          rules={{
            required: "Email is required",
            pattern: { value: /\S+@\S+\.\S+/, message: "Enter a valid email" },
          }}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" {...field} aria-invalid={true} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          rules={{
            required: "Password is required",
            minLength: { value: 8, message: "At least 8 characters" },
          }}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" {...field} aria-invalid={true} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};

export const WithValidationErrors = {
  render: () => <SignupFormWithErrors />,
};

// Long-form input pattern: textarea with a character-count helper.
type FeedbackValues = { message: string };

const FeedbackForm = () => {
  const form = useForm<FeedbackValues>({ defaultValues: { message: "" } });
  const value = form.watch("message") ?? "";

  return (
    <Form {...form}>
      <form className="flex flex-col gap-5 max-w-md">
        <FormField
          control={form.control}
          name="message"
          rules={{ maxLength: { value: 500, message: "Keep it under 500 characters." } }}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Feedback</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us what's on your mind..."
                  rows={5}
                  {...field}
                />
              </FormControl>
              <FormDescription>
                {value.length} / 500 characters
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};

export const WithTextarea = {
  render: () => <FeedbackForm />,
};

// Disabled state — entire form locked, useful for "submitting" or "view-only" modes.
const DisabledForm = () => {
  const form = useForm<ProfileValues>({
    defaultValues: { username: "jeremy", email: "jeremy@campfire.dev" },
  });

  return (
    <Form {...form}>
      <fieldset disabled className="flex flex-col gap-5 max-w-sm">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit">Submitting…</Button>
      </fieldset>
    </Form>
  );
};

export const Disabled = {
  render: () => <DisabledForm />,
};
