import Image from "next/image";
import Paragraph from "./components/ui/Paragraph";
import LargeHeading from "./components/ui/LargeHeading";

export default function Home() {
  return (
    <main>
      <LargeHeading className="text-center mt-5">Hello World</LargeHeading>
      <Paragraph size={"sm"}></Paragraph>
    </main>
  );
}
