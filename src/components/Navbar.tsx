import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  const navItems = [
    { label: "Projects", id: "projects" },
    { label: "Skills", id: "skills" },
    { label: "Experience", id: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white border-b-2 border-bs-gray shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-4 md:py-5 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className={`text-2xl md:text-3xl font-black transition-colors hover:-translate-y-1 ${
            isScrolled ? "text-bs-black" : "text-bs-black"
          }`}
        >
          KS<span className="text-bs-yellow">.</span>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`font-bold text-base transition-all duration-300 hover:text-bs-yellow hover:-translate-y-0.5 ${
                isScrolled ? "text-bs-black" : "text-bs-black"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden font-black transition-colors ${
            isScrolled ? "text-bs-black" : "text-bs-black"
          }`}
        >
          {isOpen ? <X size={28} strokeWidth={3} /> : <Menu size={28} strokeWidth={3} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b-2 border-bs-gray">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-6 flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-left text-bs-black font-bold text-lg hover:text-bs-yellow transition-colors py-2"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
