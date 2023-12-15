import { getDictionary } from "@/localization";
import { Locale } from "../../../../i18n.config";

const languagesList: Array<string> = [
  "JavaScript",
  "TypeScript",
  "Python",
  "Go",
  "CSS",
  "HTML",
  "SQL",
  "GdScript",
];

export default async function ProgrammingLanguages({
  locale,
}: {
  locale: Locale;
}) {
  const { programmingLanguages } = await getDictionary(locale);
  return (
    <div>
      <strong className="text-xl font-bold text-pink-500 ">
        {programmingLanguages.title}
      </strong>
      <ul className="grid grid-cols-3 gap-1 mt-2 ">
        {languagesList.map((label, index) => (
          <li
            key={index}
            className="w-24 px-2 mt-1 font-semibold text-center rounded-sm bg-slate-200"
          >
            {label}
          </li>
        ))}
      </ul>
    </div>
  );
}
