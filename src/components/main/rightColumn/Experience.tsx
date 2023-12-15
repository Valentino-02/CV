import { getDictionary } from "@/localization";
import { Locale } from "../../../../i18n.config";

export default async function Experience({ locale }: { locale: Locale }) {
  const { experience } = await getDictionary(locale);
  return (
    <section>
      <h2 className="pb-1 mt-6 text-2xl font-semibold border-b border-rose-300">
        {experience.title}
      </h2>
      <ul className="mt-2">
        <li className="pt-2">
          <p className="flex justify-between text-sm">
            <strong className="text-base">Innovasoft</strong>2022-2023
          </p>
          <p className="flex justify-between text-base">
            {experience.jobs[0].job}{" "}
            <small>{experience.jobs[0].location} </small>
          </p>
          <p className="mt-1 ml-1 text-xs text-justify">
            {experience.jobs[0].description}
          </p>
        </li>
      </ul>
    </section>
  );
}
