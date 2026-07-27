import { redirect } from "next/navigation";

// The root / path redirects to the default locale (/ar).
// The proxy.ts file handles this for most cases,
// but this server component handles any edge cases that bypass it.
export default function RootPage() {
  redirect("/ar");
}
