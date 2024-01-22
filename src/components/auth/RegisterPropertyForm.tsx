import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../ui/button";
import { FormInput } from "../shared/FormInput";
import { Form } from "../ui/form";

const formSchema = z.object({
  propertyName: z
    .string()
    .min(2, "Property name should be minimum 02 characters"),
});

export default function RegisterPropertyForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      propertyName: "",
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
            name="propertyName"
            type="text"
            control={form.control}
            placeholder="Enter your property name"
            label="Property Name"
            description="This name will setup your property. Please configure your property afterwards."
            autoFocus={true}
          />
        </div>
        <Button className="w-full" type="submit">
          Submit
        </Button>
      </form>
    </Form>
  );
}
