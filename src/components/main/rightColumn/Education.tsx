import { getDictionary } from "@/localization";
import { Locale } from "../../../../i18n.config";

export default async function Education({ locale }: { locale: Locale }) {
  const { education } = await getDictionary(locale);
  return (
    <section>
      <h2 className="pb-1 mt-6 text-2xl font-semibold border-b border-rose-300">
        {education.title}
      </h2>
      <ul className="mt-2">
        <li className="pt-2">
          <p className="flex justify-between text-sm">
            <strong className="text-base">
              Universidad Nacional de la Plata
            </strong>
            2013-2019
          </p>
          <p className="text-sm">{education.degrees.physics}</p>
        </li>
      </ul>
    </section>
  );
}
