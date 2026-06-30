import { motion } from "framer-motion";
import {
  SiDotnet,
  SiFlutter,
  SiGit,
  SiGithub,
  SiReact,
  SiTypescript,
} from "react-icons/si";

export default function HeroImage() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-1 justify-center"
    >
      <div
        className="
          w-full
          max-w-xl
          overflow-hidden
          rounded-3xl
          border
          border-white/10
          bg-[#0B1120]/80
          shadow-[0_0_80px_rgba(37,99,235,0.15)]
          backdrop-blur-xl
        "
      >
        {/* HEADER */}
        <div className="flex items-center gap-2 border-b border-white/10 px-6 py-4">
          <div className="h-3 w-3 rounded-full bg-red-500" />
          <div className="h-3 w-3 rounded-full bg-yellow-500" />
          <div className="h-3 w-3 rounded-full bg-green-500" />

          <span className="ml-4 text-sm text-gray-400">terminal</span>
        </div>

        {/* CONTENT */}
        <div className="space-y-5 p-7 pb-10 font-mono text-sm">
          
          <p className="text-green-400">&gt; whoami</p>

          <p className="text-white">Fernando Almeida</p>

          <div className="space-y-4 pb-2">
            <div className="flex items-center gap-3 text-cyan-400">
              <SiFlutter size={18} />
              Flutter Developer
            </div>

            <div className="flex items-center gap-3 text-sky-400">
              <SiReact size={18} />
              React Developer
            </div>

            <div className="flex items-center gap-3 text-violet-400">
              <SiDotnet size={18} />
              .NET Developer
            </div>

            <div className="flex items-center gap-3 text-blue-400">
              <SiTypescript size={18} />
              TypeScript
            </div>

            <div className="flex items-center gap-3 text-orange-400">
              <SiGit size={18} />
              Git
            </div>

            <div className="flex items-center gap-3 text-white ">
              <SiGithub size={18} />
              github.com/fhcalmeida
            </div>
          </div>

        </div>
      </div>
    </motion.div>
  );
}