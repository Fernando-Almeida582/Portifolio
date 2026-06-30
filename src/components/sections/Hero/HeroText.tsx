import { motion } from "framer-motion";

import HeroButtons from "./HeroButtons";

import Badge from "../../ui/Badge/Badge";
import Chip from "../../ui/Chip/Chip";
import SocialButton from "../../ui/SocialButton/SocialButton";

import { technologies } from "../../../data/technologies";
import { socialLinks } from "../../../data/social";

export default function HeroText() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -40,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
      className="flex-1"
    >
      <Badge>👋 Disponível para novas oportunidades</Badge>

      <h1 className="mt-8 text-6xl font-black leading-none text-white sm:text-7xl lg:text-8xl">
        Fernando
        <br />
        <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
          Almeida
        </span>
      </h1>

      <h2 className="mt-5 text-2xl font-semibold text-gray-300">
        Software Engineer
      </h2>

      <p className="mt-7 max-w-xl text-lg leading-9 text-gray-400">
        Desenvolvedor especializado em Flutter, React e .NET, apaixonado por
        criar aplicações modernas, performáticas e escaláveis, sempre focando em
        código limpo, arquitetura e experiência do usuário.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        {technologies.map((technology) => (
          <Chip key={technology}>{technology}</Chip>
        ))}
      </div>

      <div className="mt-10">
        <HeroButtons />
      </div>

      <div className="mt-8 flex gap-4 mb-4">
        {socialLinks.map((social) => (
          <SocialButton
            key={social.label}
            icon={social.icon}
            href={social.href}
            label={social.label}
          />
        ))}
      </div>
    </motion.div>
  );
}
