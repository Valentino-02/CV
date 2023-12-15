import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSuitcase } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa6";
import { LuAppWindow } from "react-icons/lu";

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
    url: "https://www.linkedin.com/",
    icon: <FaFilePdf />,
  }, */
  {
    url: "https://cv-beta-sepia.vercel.app",
    icon: <LuAppWindow />,
  },
];

export default async function SocialIcons() {
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
    </ul>
  );
}
<FaFilePdf />;
