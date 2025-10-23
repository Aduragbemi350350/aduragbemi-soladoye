import { Container } from "@/components/Container";
import { certifications } from "@/constants/certifications";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { WorkHistory } from "@/components/WorkHistory";
import { Certification } from "@/components/Certification";
import { Skill } from "@/components/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <Container>
      {/* Work */}
      <span className="text-4xl">💼</span>
      <Heading className="font-black">Work History</Heading>
      <Paragraph className="max-w-xl mt-4">
        I&apos;m a full-stack developer that loves{" "}
        <Highlight>building products</Highlight> and web apps that can impact
        millions of lives
      </Paragraph>
      <WorkHistory />

      {/* Skills */}
      <span className="text-4xl">🧰</span>
      <Heading>Skills</Heading>
      <Skill />


      {/* Education */}
      <span className="text-4xl">🎓</span>
      <Heading className="font-black">Education</Heading>
      <div className="flex md:flex-row flex-col space-y-10 md:space-y-0 space-x-10 my-20 relative">
        <Paragraph className="w-40">Sept 1, 2025</Paragraph>
        <div>
          <Heading
            as="h5"
            className="text-lg md:text-lg lg:text-lg text-emerald-500"
          >
            University of Osun State (UNIOSUN)
          </Heading>
          <Paragraph className="text-base md:text-base lg:text-base font-semibold">
            B.sc in Computing Science
          </Paragraph>
        </div>
      </div>

      {/* Certification */}
      <span className="text-4xl">🏅</span>
      <Heading className="font-black">Certifications</Heading>
      <Certification />
    </Container>
  );
}
