import { motion } from "framer-motion";

type CardProps = {
  children: React.ReactNode;
};

export default function Card({ children }: CardProps) {
  return (
    <motion.div
      whileHover={{
        y: -8,
      }}
      className="
      rounded-3xl
      border
      border-white/10
      bg-white/5
      p-6
      backdrop-blur-xl
      transition-all
      "
    >
      {children}
    </motion.div>
  );
}