import RegisterForm from "@/components/shared/auth/register-form";
import React from "react";

export const generateMetadata = () => {
  return {
    title: "Signup | Wallet-Mangement",
    description: "Signup to Wallet-Mangement",
  };
};

const page = () => {
  return (
    <>
      <RegisterForm />
    </>
  );
};

export default page;
