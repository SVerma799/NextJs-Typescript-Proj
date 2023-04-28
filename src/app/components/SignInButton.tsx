"use client";

import { FC, useState } from "react";
import Button from "./ui/Button";
import { signIn } from "next-auth/react";

interface SignInButtonProps {}

const SignInButton: FC<SignInButtonProps> = ({}) => {
  // SV: we set the useState<boolean> to false because we dont want anybody to change value other than boolean
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const signInWithGoogle = async () => {
    setIsLoading(true);

    try {
      await signIn("google", {
        callbackUrl: "http://localhost:3000/dashboard",
      });
      setIsLoading(false);
    } catch (error) {
      //   toast({
      //     title: "Error signing in",
      //     message: "Please try again later",
      //     type: "error",
      //   });
      setIsLoading(false);
      console.log(error);
    }
  };
  return (
    <Button onClick={signInWithGoogle} isLoading={isLoading}>
      Sign In
    </Button>
  );
};

export default SignInButton;
