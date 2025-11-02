import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "South Vietnam Tours | Travel Vietnam",
  description: "Experience the vibrant cities and Mekong Delta of South Vietnam",
};

export default function SouthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

