import Header from "../../components/Header";
import "../../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <Header />
      <body>
        {/* Bannar */}
        {children}
      </body>
    </html>
  );
}
