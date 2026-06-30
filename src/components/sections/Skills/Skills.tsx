import {
  SiFlutter,
  SiReact,
  SiDotnet,
  SiTypescript,
  SiGit,
  SiFigma,
} from "react-icons/si";

const skills = [
  {
    icon: SiFlutter,
    name: "Flutter",
    level: "Avançado",
    color: "text-cyan-400",
  },
  {
    icon: SiReact,
    name: "React",
    level: "Avançado",
    color: "text-sky-400",
  },
  {
    icon: SiDotnet,
    name: ".NET",
    level: "Intermediário/Avançado",
    color: "text-violet-400",
  },
  {
    icon: SiTypescript,
    name: "TypeScript",
    level: "Avançado",
    color: "text-blue-400",
  },
  {
    icon: SiGit,
    name: "Git",
    level: "Avançado",
    color: "text-orange-400",
  },
  {
    icon: SiFigma,
    name: "Figma",
    level: "Intermediário",
    color: "text-pink-400",
  },
];

export default function Skills() {
  return (
    <div className="mx-auto max-w-5xl px-6">
      
      {/* título */}
      <h2 className="text-3xl font-bold text-white">
        Skills
      </h2>

      <p className="mt-4 text-gray-400">
        Tecnologias que uso no desenvolvimento de aplicações web e mobile.
      </p>

      {/* grid */}
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill) => {
          const Icon = skill.icon;

          return (
            <div
              key={skill.name}
              className="
                group
                rounded-xl
                border
                border-white/10
                bg-white/5
                p-5
                transition
                hover:border-blue-500
                hover:bg-white/10
              "
            >
              <div className="flex items-center gap-3">
                
                <Icon
                  size={22}
                  className={`${skill.color} transition group-hover:scale-110`}
                />

                <div>
                  <p className="text-white font-medium">
                    {skill.name}
                  </p>

                  <p className="text-xs text-gray-400">
                    {skill.level}
                  </p>
                </div>
              </div>

              {/* barra visual opcional */}
              <div className="mt-4 h-1 w-full rounded-full bg-white/10 overflow-hidden">
                <div
                  className={`
                    h-full
                    rounded-full
                    bg-blue-500
                    transition-all
                    duration-500
                    group-hover:w-full
                    w-[70%]
                  `}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}