"use client";

import { FC, useState } from "react";
import Button from "./ui/Button";
import { signOut } from "next-auth/react";
import { toast } from "@/components/ui/Toast";

interface SignOutButtonProps {}

const SignOutButton: FC<SignOutButtonProps> = ({}) => {
  // SV: we set the useState<boolean> to false because we dont want anybody to change value other than boolean
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const signOutWithGoogle = async () => {
    setIsLoading(true);

    try {
      await signOut();
      setIsLoading(false);
    } catch (error) {
      toast({
        title: "Error signing out",
        message: "Please try again later",
        type: "error",
      });
      setIsLoading(false);
      console.log(error);
    }
  };
  return (
    <Button onClick={signOutWithGoogle} isLoading={isLoading}>
      Sign Out
    </Button>
  );
};

export default SignOutButton;
