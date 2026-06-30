import { motion } from "framer-motion";

type SocialButtonProps = {
  icon: React.ElementType;
  href: string;
  label: string;
};

export default function SocialButton({
  icon: Icon,
  href,
  label,
}: SocialButtonProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      whileHover={{ y: -5, scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="
        flex
        h-12
        w-12
        items-center
        justify-center
        rounded-xl
        border
        border-white/10
        bg-white/5
        text-white
        backdrop-blur-md
        hover:border-blue-500
        hover:bg-blue-500/10
      "
    >
      <Icon size={20} />
    </motion.a>
  );
}