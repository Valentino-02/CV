import { Locale } from "../../../i18n.config";
import { getDictionary } from "@/localization";

export default async function Footer({ locale }: { locale: Locale }) {
  const { knowledge } = await getDictionary(locale);
  return (
    <footer className="mt-6 ">
      <p className="h-8 py-2 font-bold text-center bg-emerald-200"></p>
    </footer>
  );
}
