import { getDictionary } from "@/localization";
import { Locale } from "../../../../i18n.config";

export default async function Languages({ locale }: { locale: Locale }) {
  const { languages } = await getDictionary(locale);
  return (
    <div>
      <strong className="text-xl font-bold text-pink-500">
        {languages.title}
      </strong>
      <ul className="mt-2">
        <li className="px-2 mt-1 font-semibold">{languages.english} </li>
        <li className="px-2 mt-1 font-semibold">{languages.spanish} </li>
      </ul>
    </div>
  );
}
