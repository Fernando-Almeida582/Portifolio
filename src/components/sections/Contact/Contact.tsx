import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Contact() {
  return (
    <div className="mx-auto max-w-5xl px-6">
      
      {/* título */}
      <h2 className="text-3xl font-bold text-white">
        Contato
      </h2>

      <p className="mt-4 text-gray-400">
        Tem uma oportunidade ou quer conversar? Me chama em qualquer um dos canais abaixo.
      </p>

      {/* cards de contato */}
      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        
        {/* GitHub */}
        <a
          href="https://github.com/fhcalmeida"
          target="_blank"
          rel="noopener noreferrer"
          className="
            group
            rounded-xl
            border
            border-white/10
            bg-white/5
            p-5
            text-center
            transition
            hover:border-blue-500
            hover:bg-white/10
          "
        >
          <FaGithub size={24} className="mx-auto text-white group-hover:text-blue-400 transition" />

          <p className="mt-3 text-white font-medium">
            GitHub
          </p>

          <p className="text-xs text-gray-400">
            fhcalmeida
          </p>
        </a>

        {/* LinkedIn */}
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="
            group
            rounded-xl
            border
            border-white/10
            bg-white/5
            p-5
            text-center
            transition
            hover:border-blue-500
            hover:bg-white/10
          "
        >
          <FaLinkedin size={24} className="mx-auto text-white group-hover:text-blue-400 transition" />

          <p className="mt-3 text-white font-medium">
            LinkedIn
          </p>

          <p className="text-xs text-gray-400">
            /in/seu-perfil
          </p>
        </a>

        {/* Email */}
        <a
          href="mailto:seuemail@gmail.com"
          className="
            group
            rounded-xl
            border
            border-white/10
            bg-white/5
            p-5
            text-center
            transition
            hover:border-blue-500
            hover:bg-white/10
          "
        >
          <MdEmail size={24} className="mx-auto text-white group-hover:text-blue-400 transition" />

          <p className="mt-3 text-white font-medium">
            Email
          </p>

          <p className="text-xs text-gray-400">
            contato direto
          </p>
        </a>

      </div>

      {/* footer pequeno */}
      <div className="mt-12 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Fernando Almeida — Desenvolvedor Full Stack
      </div>
    </div>
  );
}