import { Locale } from "../../../../i18n.config";
import About from "./About";
import Education from "./Education";
import Experience from "./Experience";
import Projects from "./Projects";

export default async function RightColumn({ locale }: { locale: Locale }) {
  return (
    <div className="flex flex-col w-4/6 gap-6">
      <About locale={locale} />
      <Projects locale={locale} />
      <Experience locale={locale} />
      <Education locale={locale} />
    </div>
  );
}
