import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "North Vietnam Tours | Travel Vietnam",
  description: "Discover the stunning landscapes and rich culture of North Vietnam",
};

export default function NorthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

