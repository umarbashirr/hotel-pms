import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export function FormInput({
  control,
  name,
  label,
  placeholder,
  type,
  description,
  disabled = false,
  autoFocus = false,
}: {
  control: any;
  name: string;
  label: string;
  placeholder?: string;
  type: string;
  description?: string;
  disabled?: boolean;
  autoFocus?: boolean;
}) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="w-full">
          <FormLabel className="capitalize">{label}</FormLabel>
          <FormControl>
            <Input
              placeholder={placeholder}
              {...field}
              type={type}
              autoFocus={autoFocus}
              disabled={disabled}
            />
          </FormControl>
          <FormMessage />
          {description && <FormDescription>{description}</FormDescription>}
        </FormItem>
      )}
    />
  );
}
