import { Hero } from "@/components/hero/Hero";
import { Card } from "@/components/ui/card";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero image="/view.jpg">
        <section>
          <Card></Card>
        </section>
      </Hero>
    </main>
  );
}

