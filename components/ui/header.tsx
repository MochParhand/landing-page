import Link from "next/link";
import Logo from "./logo";
import { FaWhatsapp } from "react-icons/fa";

export default function Header() {
  return (
    <header className="fixed top-0 z-30 w-full transition-all duration-300">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-16 items-center justify-between gap-4 rounded-b-2xl bg-white/90 px-4 shadow-md shadow-black/[0.05] backdrop-blur-md before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(var(--color-gray-100),var(--color-gray-200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
          
          {/* Logo */}
          <div className="flex flex-1 items-center">
            <Logo />
          </div>

          {/* Navigasi */}
          <nav className="hidden md:flex flex-1 justify-center gap-6 text-sm font-medium text-gray-700">
            <Link href="#hero" scroll={false} className="hover:text-gray-900 transition">Beranda</Link>
            <Link href="#features" scroll={false} className="hover:text-gray-900 transition">Fitur</Link>
            <Link href="#about" scroll={false} className="hover:text-gray-900 transition">Tentang</Link>
            <Link href="#contact" scroll={false} className="hover:text-gray-900 transition">Kontak</Link>
          </nav>

          {/* Tombol WhatsApp */}
          <div className="flex flex-1 justify-end">
            <Link
              href="https://wa.me/6282119819536?text=I'm%20interested%20in%20your%20car%20for%20sale"
              className="btn-sm bg-gray-800 text-white hover:bg-gray-900 flex items-center gap-2 px-4 py-2 rounded-lg text-sm shadow"
            >
              <FaWhatsapp className="text-green-500" />
              Konsultasi Gratis
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
