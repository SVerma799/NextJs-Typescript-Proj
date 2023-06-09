import "@/styles/globals.css";

import { Ubuntu } from "next/font/google";
import { cn } from "@/lib/utils";
import Providers from "@/components/Providers";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/Toast";

const ubuntu = Ubuntu({
  weight: "400",
  preload: false,
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn("bg-white text-slate-900", ubuntu.className)}>
      <body className="min-h-screen bg-white dark:bg-slate-900">
        {/* // Providers is used to provide theme and session to the app */}
        <Providers>
          {children}
          <Toaster position="bottom-right" />
          <Navbar />
        </Providers>

        {/* Allow for more heigth on mobile devices */}
        <div className="h-40 md:hidden" />
      </body>
    </html>
  );
}
