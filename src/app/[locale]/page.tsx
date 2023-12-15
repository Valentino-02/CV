import Footer from "@/components/footer";
import Header from "@/components/header";
import Main from "@/components/main";
import { Locale } from "../../../i18n.config";

export default async function Home({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  return (
    <div className="w-4/5 px-10 py-10 mt-10 mb-10 border border-gray-300 rounded-sm shadow-lg">
      <Header locale={locale} />
      <Main locale={locale} />
      <Footer locale={locale} />
    </div>
  );
}
