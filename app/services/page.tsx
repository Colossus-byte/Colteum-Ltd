import type { Metadata } from "next";
import { headers } from "next/headers";
import { ServicesClient } from "./ServicesClient";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Productized execution across Build, Grow, and Intelligence practices. Fixed scope, fast timelines, senior delivery.",
  openGraph: {
    title: "Services | Colteum",
    description:
      "Productized execution across Build, Grow, and Intelligence practices. Fixed scope, fast timelines, senior delivery.",
  },
};

export default async function ServicesPage() {
  const headersList = await headers();
  const country = headersList.get("x-vercel-ip-country") ?? "KE";
  const defaultCurrency: "KES" | "USD" = country === "KE" ? "KES" : "USD";
  return <ServicesClient defaultCurrency={defaultCurrency} />;
}
