import { Locale } from "../../../i18n.config";
import LeftColumn from "./leftColumn";
import RightColumn from "./rightColumn";

export default async function Main({ locale }: { locale: Locale }) {
  return (
    <main className="flex mt-10 gap-x-10">
      <LeftColumn locale={locale} />
      <RightColumn locale={locale} />
    </main>
  );
}
