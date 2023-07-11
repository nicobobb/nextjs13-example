"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const navlink = "block min-w-[70px] px-[5px] py-2.5 text-center text-inherit";

const NavLinks = () => {
  return (
    <>
      <Link href="/" className={navlink}>
        Inicio
      </Link>

      <Link href="/turnos" className={navlink}>
        Turnos
      </Link>
    </>
  );
};

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ruta = usePathname();
  console.log(ruta);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setIsOpen(false);
  }, [ruta]);
  return (
    <>
      <nav className="flex flex-[1] items-center justify-end overflow-hidden">
        <div className="hidden justify-end md:flex">
          <NavLinks />
        </div>

        <div className="flex w-[75px] justify-end md:hidden">
          <button onClick={toggleNavbar}>{isOpen ? <X /> : <Menu />}</button>
        </div>
      </nav>
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            layout="position"
            key="nav-links"
            initial="hidden"
            animate="show"
            className="mt-4 basis-full md:hidden"
          >
            <motion.div>
              <Link href="/" className={navlink}>
                Inicio
              </Link>
            </motion.div>
            <motion.div>
              <Link href="/turnos" className={navlink}>
                Turnos
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export { Nav };
