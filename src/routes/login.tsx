import LoginForm from "@/components/auth/LoginForm";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="text-lg">Login to your account</CardTitle>
        <CardDescription>
          Welcome back! We are happy to see you again
        </CardDescription>
      </CardHeader>
      <CardContent>
        <LoginForm />
      </CardContent>
      <CardFooter className="flex items-center justify-center">
        <p className="text-sm text-center text-muted-foreground">
          Don&lsquo;t have an account?{" "}
          <Link to="/auth/register" className="text-indigo-600 font-semibold">
            {" "}
            Sign up
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
}
