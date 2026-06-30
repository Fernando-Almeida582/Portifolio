type ChipProps = {
  children: React.ReactNode;
};

export default function Chip({ children }: ChipProps) {
  return (
    <div
      className="
      rounded-full
      border
      border-white/10
      bg-white/5
      px-4
      py-2
      text-sm
      text-gray-300
      backdrop-blur-sm
      transition-all
      hover:border-blue-500
      hover:text-white
      "
    >
      {children}
    </div>
  );
}