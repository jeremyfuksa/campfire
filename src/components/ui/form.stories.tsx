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
