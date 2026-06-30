export default function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Azul */}
      <div className="absolute left-20 top-40 h-80 w-80 rounded-full bg-blue-600/20 blur-[150px]" />

      {/* Roxo */}
      <div className="absolute right-20 bottom-20 h-80 w-80 rounded-full bg-purple-700/20 blur-[180px]" />
    </div>
  );
}