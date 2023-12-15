"use client";

import { usePathname, useRouter } from "next/navigation";
import { GrLanguage } from "react-icons/gr";

import { Locale } from "../../../i18n.config";

export default function LanguageToggler({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const router = useRouter();

  const changeLocale = () => {
    let newLocale = locale === "en" ? "es" : "en";
    let newPathname = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPathname);
  };

  const shouldRender = true;

  if (shouldRender)
    return (
      <button
        onClick={() => changeLocale()}
        className="absolute flex items-center gap-2 text-2xl font-semibold cursor-pointer "
      >
        <GrLanguage />
        {locale === "en" ? "English" : "Español"}
      </button>
    );
}
