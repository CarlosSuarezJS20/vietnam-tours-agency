import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Central Vietnam Tours | Travel Vietnam",
  description: "Explore the historic cities and beautiful beaches of Central Vietnam",
};

export default function CentralLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

