import type { Metadata } from "next";
import LargeHeading from "@/components/ui/LargeHeading";
import Paragraph from "./components/ui/Paragraph";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home",
  description: "Free and open source text similiarity checker app",
};

export default function Home() {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-x-hidden">
      <div className="container pt-32 w-full h-full">
        <div className="h-full gap-6 flex flex-col justify-start lg:justify-center items-center lg-items-start">
          <LargeHeading
            size={"lg"}
            className="three-d text-black dark:text-light-gold"
          >
            Easily determine <br /> text similiarity
          </LargeHeading>

          <Paragraph className="max-w-xl lg:text-left">
            with the text similarity API, you can easily determine the
            similarity between two pieces of text with a free{" "}
            <Link
              href="/login"
              className="underline underline-offset-2 text-black dark:text-light-gold"
            >
              API Key
            </Link>
          </Paragraph>
        </div>
      </div>
    </div>
  );
}
