import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Tours and Activities | Travel Vietnam",
  description: "Discover the best of Vietnam with our comprehensive collection of tours and activities",
};

export default function DiscoverVietnamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

