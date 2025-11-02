import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hoi An Day Tours | Travel Vietnam",
  description: "Explore the ancient town of Hoi An with our day tours",
};

export default function HoiAnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

