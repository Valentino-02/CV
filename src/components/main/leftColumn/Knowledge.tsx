import { getDictionary } from "@/localization";
import { Locale } from "../../../../i18n.config";

export default async function Knowledge({ locale }: { locale: Locale }) {
  const { knowledge } = await getDictionary(locale);

  const knowledgeList: Array<string> = [
    knowledge.frontendDev,
    knowledge.backendDev,
    knowledge.responsiveDesign,
    knowledge.agileDev,
    knowledge.designPrinciples,
    knowledge.versionControl,
    knowledge.gameDev,
    knowledge.testDrivenDev,
    knowledge.programmingParadigms,
  ];

  return (
    <div>
      <strong className="text-xl font-bold text-pink-500">
        {knowledge.title}
      </strong>
      <ul className="grid grid-cols-2 gap-1 mt-2 ">
        {knowledgeList.map((label, index) => (
          <li
            key={index}
            className="px-2 mt-1 font-semibold rounded-sm bg-slate-200"
          >
            {label}
          </li>
        ))}
      </ul>
    </div>
  );
}
