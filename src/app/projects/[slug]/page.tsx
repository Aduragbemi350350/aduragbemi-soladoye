import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { SingleProduct } from "@/components/Product";
import { Products } from "@/components/Products";
import { products } from "@/constants/products";
import { Product } from "@/types/products";
import { Metadata } from "next";
import Image from "next/image";
import { redirect } from "next/navigation";

type Props = {
  params: { slug: string };
};

// generateMetadata does not perform async work here, so keep it synchronous
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const product = products.find((p) => p.slug === slug) as Product | undefined;

  if (product) {
    return {
      title: product.title,
      description: product.description,
    };
  }

  return {
    title: "Project | Aduragbemi Soladoye",
    description: "Aduragbemi Soladoye is a fullstack developer.",
  };
}


export default async function SingleProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // ✅ Await params since Next.js passes it as a Promise
  const { slug } = await params;

  const product = products.find((p) => p.slug === slug);

  if (!product) {
    redirect("/projects");
    return null; // satisfies TypeScript
  }

  return (
    <Container>
      <SingleProduct product={product} />
    </Container>
  );
}
