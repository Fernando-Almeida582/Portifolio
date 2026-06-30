import { useEffect, useState } from "react";
import Container from "../../ui/Container/Container";
import NavbarLinks from "./NavbarLinks";
import NavbarLogo from "./NavbarLogo";
import { navigation } from "../../../constants/navigation";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const sections = navigation
      .map((item) => document.querySelector(item.href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      {
        threshold: 0.6,
      }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#030712]/70 backdrop-blur-xl">
      <Container className="flex h-20 items-center justify-between">
        <NavbarLogo />
        <NavbarLinks activeSection={activeSection} />
      </Container>
    </header>
  );
}