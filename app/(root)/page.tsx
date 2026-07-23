import type { Metadata } from "next";
import ClientOnlyHome from "./client-only-home";

export const metadata: Metadata = {
  title: "Home",
};

export default function HomePage() {
  return (
    <ClientOnlyHome />
  );
}
