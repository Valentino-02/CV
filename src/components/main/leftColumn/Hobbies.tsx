import { getDictionary } from "@/localization";
import { Locale } from "../../../../i18n.config";

export default async function Hobbies({ locale }: { locale: Locale }) {
  const { hobbies } = await getDictionary(locale);
  return (
    <div>
      <strong className="text-xl font-bold text-pink-500">Hobbies</strong>
      <ul className="mt-2">
        <li className="px-2 mt-1 font-semibold">{hobbies.musician} </li>
        <li className="px-2 mt-1 font-semibold">{hobbies.cook} </li>
        <li className="px-2 mt-1 font-semibold">{hobbies.gameDesigner} </li>
        <li className="px-2 mt-1 font-semibold">Kung Fu - Pak Mei</li>
      </ul>
    </div>
  );
}
