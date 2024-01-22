import RegisterPropertyForm from "@/components/auth/RegisterPropertyForm";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function RegisterNewPorperty() {
  return (
    <div className="w-full mt-[100px] flex items-center justify-center px-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-lg">Register your property</CardTitle>
          <CardDescription>
            Please fill the below details to get started
          </CardDescription>
        </CardHeader>
        <CardContent>
          <RegisterPropertyForm />
        </CardContent>
      </Card>
    </div>
  );
}
