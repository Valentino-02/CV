import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSuitcase } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa6";
import { LuAppWindow } from "react-icons/lu";
import { Locale } from "../../../i18n.config";

const cvEnglishUrl =
  "https://utfs.io/f/49f3e2d0-e5e3-47fa-b438-e217e88f76a7-qax8tm.pdf";
const cvSpanishUrl =
  "https://utfs.io/f/7a6b78a8-2d39-44bc-86c6-6a85c5d36422-nsv7m3.pdf";

interface IconData {
  url: string;
  icon: React.ReactNode;
}

const iconsData: Array<IconData> = [
  {
    url: "https://linkedin.com/in/valentino-collazo-1b9551236",
    icon: <FaLinkedin />,
  },
  {
    url: "https://github.com/Valentino-02",
    icon: <FaGithub />,
  },
  {
    url: "https://portfolio-valentino-02.vercel.app",
    icon: <FaSuitcase />,
  },
  /*   {
    url: "https://cv-beta-sepia.vercel.app",
    icon: <LuAppWindow />,
  }, */
];

export default async function SocialIcons({ locale }: { locale: Locale }) {
  const cvUrl = locale == "es" ? cvSpanishUrl : cvEnglishUrl;

  return (
    <ul className="flex flex-wrap justify-end gap-2">
      {iconsData.map((icondata, index) => (
        <li key={index}>
          <a
            href={icondata.url}
            className="inline-flex items-center p-3 space-x-2 text-2xl font-semibold text-white bg-purple-600 rounded-full"
            target="”_blank”"
          >
            {icondata.icon}
          </a>
        </li>
      ))}
      <li>
        <a
          target="_blank"
          href={cvUrl}
          download
          className="inline-flex items-center p-3 space-x-2 text-2xl font-semibold text-white bg-purple-600 rounded-full"
        >
          <FaFilePdf />
        </a>
      </li>
    </ul>
  );
}
<FaFilePdf />;
