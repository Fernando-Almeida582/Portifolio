import { motion } from "framer-motion";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  download?: boolean;
  variant?: "primary" | "secondary";
};

export default function Button({
  children,
  onClick,
  href,
  variant = "primary",
  
}: ButtonProps) {
  const className = `
    px-6
    py-3
    rounded-xl
    font-medium
    transition-all
    inline-block
    ${
      variant === "primary"
        ? "bg-blue-600 hover:bg-blue-500 text-white"
        : "border border-white/20 text-white hover:bg-white/10"
    }
  `;

if (href) {
  return (
    <motion.a
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      href={href}
      download
      className={className}
    >
      {children}
    </motion.a>
  );
}

  return (
    <motion.button
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      className={className}
    >
      {children}
    </motion.button>
  );
}