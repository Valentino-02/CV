import { getDictionary } from "@/localization";
import { Locale } from "../../../../i18n.config";

export default async function Contact({ locale }: { locale: Locale }) {
  const { contact } = await getDictionary(locale);
  return (
    <div>
      <strong className="text-xl font-bold text-pink-500">
        {contact.title}
      </strong>
      <ul className="mt-2">
        <li className="px-2 mt-1">
          <strong className="mr-1">E-mail </strong>
          <a href="mailto:" className="block">
            collazo.valentino@gmail.com
          </a>
        </li>
        <li className="px-2 mt-1">
          <strong className="mr-1">{contact.location} </strong>
          <span className="block">La Plata, Argentina</span>
        </li>
        <li className="px-2 mt-1">
          <strong className="mr-1">{contact.timeZone} </strong>
          <span className="block">GMT -3</span>
        </li>
      </ul>
    </div>
  );
}
