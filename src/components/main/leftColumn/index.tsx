import Contact from "./Contact";
import Languages from "./Languages";
import ProgrammingLanguages from "./ProgrammingLanguages";
import Knowledge from "./Knowledge";
import { Locale } from "../../../../i18n.config";
import Hobbies from "./Hobbies";
import FavouriteTechStack from "./FavouriteTechStack";

export default async function LeftColumn({ locale }: { locale: Locale }) {
  return (
    <div className="flex flex-col w-2/6 gap-6">
      <Contact locale={locale} />
      <Languages locale={locale} />
      <ProgrammingLanguages locale={locale} />
      <Knowledge locale={locale} />
      <FavouriteTechStack locale={locale} />
      <Hobbies locale={locale} />
    </div>
  );
}
