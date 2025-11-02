import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Tours | Travel Vietnam",
  description: "Design your perfect Vietnam experience with our custom tour planning services",
};

export default function CustomTourLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

