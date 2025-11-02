import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hanoi Day Tours | Travel Vietnam",
  description: "Discover the best day tours in Hanoi, Vietnam",
};

export default function HanoiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

