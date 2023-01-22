import { Bannar } from "../../components/Bannar";
import Header from "../../components/Header";
import "../../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className="max">
        <Header />
        <Bannar />
        {children}
      </body>
    </html>
  );
}
