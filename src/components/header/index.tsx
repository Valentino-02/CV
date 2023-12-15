import { Locale } from "../../../i18n.config";
import LanguageToggler from "./LanguageToggler";
import SocialIcons from "./SocialIcons";
import Title from "./Title";

export default async function Header({ locale }: { locale: Locale }) {
  return (
    <header>
      <LanguageToggler locale={locale} />
      <SocialIcons locale={locale} />
      <Title locale={locale} />
    </header>
  );
}
