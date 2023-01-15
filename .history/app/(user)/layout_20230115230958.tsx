import "../../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        {/* Header */}
        {/* Bannar */}
        {children}
      </body>
    </html>
  );
}
