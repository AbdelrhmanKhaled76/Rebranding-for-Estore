import Image from "next/image";
import Hero from "./_components/layout/hero";
import Featured from "./_components/layout/featured";

export default function Home() {
  return (
    <main className="mt-16">
      <Hero />
      <Featured />
    </main>
  );
}
