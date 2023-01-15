import "../../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        {/*  */}
        {/* Bannar */}
        {children}
      </body>
    </html>
  );
}
