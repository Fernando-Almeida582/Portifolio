import { navigation } from "../../../constants/navigation";

type Props = {
  activeSection: string;
};

export default function NavbarLinks({ activeSection }: Props) {
  return (
    <nav className="flex items-center gap-6">
      {navigation.map((item) => {
        const isActive = activeSection === item.href;

        return (
          <a
            key={item.label}
            href={item.href}
            className={`
              relative text-sm transition
              ${
                isActive
                  ? "text-white"
                  : "text-gray-400 hover:text-white"
              }
            `}
          >
            {item.label}

            {/* underline animado */}
            <span
              className={`
                absolute -bottom-2 left-0 h-[2px] w-full
                bg-blue-500 transition-transform duration-300
                ${isActive ? "scale-x-100" : "scale-x-0"}
              `}
            />
          </a>
        );
      })}
    </nav>
  );
}