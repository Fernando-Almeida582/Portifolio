import { motion } from "framer-motion";

type BadgeProps = {
  children: React.ReactNode;
};

export default function Badge({ children }: BadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 mt-10"
    >
      <span className="text-sm font-medium text-blue-400">
        {children}
      </span>
    </motion.div>
  );
}