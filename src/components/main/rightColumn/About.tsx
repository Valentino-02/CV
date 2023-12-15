import { getDictionary } from "@/localization";
import { Locale } from "../../../../i18n.config";

export default async function About({ locale }: { locale: Locale }) {
  const { about } = await getDictionary(locale);
  return (
    <section>
      <h2 className="pb-1 text-2xl font-semibold border-b border-rose-300">
        {about.title}
      </h2>
      <p className="mt-4 text-xs">{about.text}</p>
    </section>
  );
}
