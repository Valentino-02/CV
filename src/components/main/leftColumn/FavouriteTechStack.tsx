import { getDictionary } from "@/localization";
import { Locale } from "../../../../i18n.config";

export default async function FavouriteTechStack({
  locale,
}: {
  locale: Locale;
}) {
  const { techStack } = await getDictionary(locale);
  return (
    <div>
      <strong className="text-xl font-bold text-pink-500">
        {techStack.title}
      </strong>
      <ul className="flex gap-1 mt-3">
        <li className="px-2 font-semibold rounded-sm bg-slate-200">React</li>
        <li className="px-2 font-semibold rounded-sm bg-slate-200">Next.js</li>
        <li className="px-2 font-semibold rounded-sm bg-slate-200">Tailwind</li>
        <li className="px-2 font-semibold rounded-sm bg-slate-200">Prisma</li>
      </ul>
    </div>
  );
}
