import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../ui/button";
import { FormInput } from "../shared/FormInput";
import { Form } from "../ui/form";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6, "Password should be minimum 06 characters"),
});

export default function LoginForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="space-y-4 mb-6">
          <FormInput
            name="email"
            type="email"
            control={form.control}
            placeholder="Enter your email"
            label="Email"
          />
          <FormInput
            name="password"
            type="password"
            control={form.control}
            placeholder="Enter your password"
            label="password"
          />
        </div>
        <Button className="w-full" type="submit">
          Submit
        </Button>
      </form>
    </Form>
  );
}
