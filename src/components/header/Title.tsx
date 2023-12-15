import { getDictionary } from "@/localization";
import { Locale } from "../../../i18n.config";

export default async function Title({ locale }: { locale: Locale }) {
  const { profession } = await getDictionary(locale);
  return (
    <div className="flex items-center justify-end mt-2">
      <div className="grid justify-items-end">
        <h1 className="font-extrabold text-7xl">Collazo Valentino</h1>
        <p className="mt-5 text-xl">{profession}</p>
      </div>
    </div>
  );
}
