import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Build Your Own Tour | Travel Vietnam",
  description: "Create your custom Vietnam tour itinerary",
};

export default function BuildTourLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

