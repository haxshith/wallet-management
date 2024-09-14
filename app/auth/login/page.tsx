import { LoginForm } from "@/components/shared/auth/login-form";

export const generateMetadata = () => {
  return {
    title: "Login | Wallet-Mangement",
    description: "Login to Wallet-Mangement",
  };
};

const LoginPage = () => {
  return <LoginForm />;
};

export default LoginPage;
