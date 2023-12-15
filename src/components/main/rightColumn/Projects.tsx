import { getDictionary } from "@/localization";
import { Locale } from "../../../../i18n.config";

interface ProjectData {
  title: string;
  demoUrl: string;
  gitUrl: string;
  techs: Array<string>;
  description: string;
}

export default async function Projects({ locale }: { locale: Locale }) {
  const { projects } = await getDictionary(locale);

  const projectsData: Array<ProjectData> = [
    {
      title: "Dispute",
      demoUrl: "https://dispute.vercel.app",
      gitUrl: "https://github.com/Valentino-02/Dispute",
      techs: ["Next.js", "Tailwind", "Prisma", "MySQL", "Socket.io"],
      description: projects.descriptions.dispute,
    },
    {
      title: "Dashboard",
      demoUrl: "https://dashboard-eight-amber.vercel.app",
      gitUrl: "https://github.com/Valentino-02/Dashboard",
      techs: ["Next.js", "MaterialUI", "Sass"],
      description: projects.descriptions.dashboard,
    },
    {
      title: "Photon's Journey",
      demoUrl: "https://tinygodzilla.itch.io/photons-journey",
      gitUrl: "https://github.com/best-godot-team-ever/GoGodotJam",
      techs: ["HTML5", "Godot"],
      description: projects.descriptions.photons,
    },
  ];

  return (
    <section>
      <h2 className="pb-1 mt-6 text-2xl font-semibold border-b border-rose-300">
        {projects.title}
      </h2>
      <ul className="mt-1">
        {projectsData.map((projectData, index) => (
          <li key={index} className="py-2">
            <div className="flex justify-between my-1">
              <div className="flex gap-4">
                <strong>{projectData.title} </strong>
                <ul className="flex gap-2 mb-2">
                  <li>
                    <a
                      target="_blank"
                      href={projectData.demoUrl}
                      className="px-2 py-1 text-sm font-semibold border-b-2 text-rose-800"
                    >
                      {projects.live}
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href={projectData.gitUrl}
                      className="px-2 py-1 text-sm font-semibold border-b-2 text-rose-800"
                    >
                      {projects.code}
                    </a>
                  </li>
                </ul>
              </div>
              <p className="flex gap-2">
                {projectData.techs.map((label, index) => (
                  <span
                    key={index}
                    className="h-6 px-2 py-1 text-xs font-semibold text-white rounded bg-rose-950"
                  >
                    {label}
                  </span>
                ))}
              </p>
            </div>
            <p className="text-xs">{projectData.description}</p>
          </li>
        ))}
      </ul>
      <p className="mt-2">
        {projects.more}
        <a
          className="cursor-pointer"
          href="https://portfolio-valentino-02.vercel.app"
          target="_blank"
        >
          portfolio
        </a>
      </p>
    </section>
  );
}
