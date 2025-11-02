import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Saigon Day Tours | Travel Vietnam",
  description: "Experience the vibrant energy of Saigon with our day tours",
};

export default function SaigonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

