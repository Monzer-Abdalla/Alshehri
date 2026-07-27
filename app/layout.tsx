// Root layout — minimal shell.
// The <html> and <body> tags are rendered by app/[lang]/layout.tsx
// which dynamically sets lang + dir based on the locale route segment.
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
