import "./globals.css";
import { Locale } from "../../i18n.config";

export const metadata = {
  title: "CV",
  description: "Web version of the CV of Collazo Valentino",
};

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: Locale };
}) {
  return (
    <html lang={locale}>
      <body className="flex content-center justify-center">{children}</body>
    </html>
  );
}
