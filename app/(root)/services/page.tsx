import type { Metadata } from "next";
import ServicesClient from "./services-client";

export const metadata: Metadata = {
  title: "Services",
};

export default function ServicesPage() {
  return <ServicesClient />;
}
