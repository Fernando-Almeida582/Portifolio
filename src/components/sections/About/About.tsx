export default function About() {
  return (
    <div className="mx-auto max-w-5xl px-6">
      
      {/* título */}
      <h2 className="text-3xl font-bold text-white">
        Sobre mim
      </h2>

      {/* introdução principal */}
      <p className="mt-6 text-gray-300 leading-relaxed">
        Sou desenvolvedor full stack com foco em <span className="text-blue-400">Flutter</span>, 
        <span className="text-blue-400"> React</span> e <span className="text-blue-400">.NET</span>.
        Gosto de criar interfaces modernas, performáticas e bem estruturadas.
      </p>

      {/* segunda parte mais profissional */}
      <p className="mt-4 text-gray-400 leading-relaxed">
        Tenho experiência em aplicações mobile e web, atuando em projetos
        do setor financeiro e sistemas corporativos. Meu foco está em
        arquitetura limpa, escalabilidade e boa experiência de usuário.
      </p>

      {/* highlight de valores */}
      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        
        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
          <h3 className="text-white font-semibold">Foco em qualidade</h3>
          <p className="mt-2 text-sm text-gray-400">
            Escrevo código limpo, reutilizável e fácil de manter.
          </p>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
          <h3 className="text-white font-semibold">Experiência real</h3>
          <p className="mt-2 text-sm text-gray-400">
            Atuação em projetos reais com impacto em produção.
          </p>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
          <h3 className="text-white font-semibold">UI moderna</h3>
          <p className="mt-2 text-sm text-gray-400">
            Interfaces focadas em UX, performance e acessibilidade.
          </p>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
          <h3 className="text-white font-semibold">Aprendizado contínuo</h3>
          <p className="mt-2 text-sm text-gray-400">
            Sempre evoluindo com novas tecnologias e boas práticas.
          </p>
        </div>

      </div>
    </div>
  );
}