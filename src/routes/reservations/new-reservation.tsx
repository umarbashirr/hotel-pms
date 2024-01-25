import { DatePicker } from "@/components/shared/DatePicker";
import { FormInput } from "@/components/shared/FormInput";
import { SelectInput } from "@/components/shared/SelectInput";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { maxNights, optionsForRoomsAndGuests } from "@/lib/data";
import { usePropertyStore } from "@/stores/uesPropertyStore";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { addDays } from "date-fns";

const formSchema = z.object({
  checkInDate: z.date(),
  nights: z.string(),
  checkOutDate: z.date(),
  rooms: z.string(),
});

export default function NewReservationPage() {
  const setPageName = usePropertyStore((state) => state.setPageName);
  const title = "New Reservations";

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      checkInDate: new Date(),
      nights: "1",
      checkOutDate: addDays(new Date(), 1),
      rooms: "1",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  useEffect(() => {
    setPageName(title);
  }, []);

  return (
    <div>
      <h2 className="text-xl font-semibold">Room Price & Availability</h2>
      <div className="mt-8">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="flex justify-between items-end gap-5">
              <DatePicker
                name="checkInDate"
                label="Check-In Date"
                placeholder="Pick a date"
                control={form.control}
              />
              <SelectInput
                name="nights"
                control={form.control}
                label="No. of Nights"
                options={maxNights}
              />
              <DatePicker
                name="checkOutDate"
                label="Check-Out Date"
                placeholder="Pick a date"
                control={form.control}
                disabled={true}
              />
              <SelectInput
                name="rooms"
                control={form.control}
                label="No. of Rooms"
                options={optionsForRoomsAndGuests}
              />
              <Button type="submit">Submit</Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
