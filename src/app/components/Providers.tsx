"use client";

import { FC } from "react";
import { ThemeProvider } from "next-themes";
import { SessionProvider } from "next-auth/react";

interface ProvidersProps {
  children: React.ReactNode;
}

const Providers: FC<ProvidersProps> = ({ children }) => {
  return (
    // ThemeProvider is used to provide theme to the app
    <ThemeProvider attribute="class" defaultTheme="system">
      {/* SessionProvider is used to provide session to the app 
      // This is used for authentication for clients side */}
      <SessionProvider>{children}</SessionProvider>
    </ThemeProvider>
  );
};

export default Providers;
