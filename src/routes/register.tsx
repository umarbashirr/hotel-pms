import RegisterForm from "@/components/auth/RegisterForm";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Link } from "react-router-dom";

export default function RegisterPage() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="text-">Create your account</CardTitle>
        <CardDescription>
          Please fill out the below details to get started!
        </CardDescription>
      </CardHeader>
      <CardContent>
        <RegisterForm />
      </CardContent>
      <CardFooter className="flex items-center justify-center">
        <p className="text-sm text-center text-muted-foreground">
          Already have an account?{" "}
          <Link to="/auth/login" className="text-indigo-600 font-semibold">
            {" "}
            Sign in
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
}
