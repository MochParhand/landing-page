import Link from "next/link";
import Logo from "./logo";
import { FaWhatsapp } from "react-icons/fa";

export default function Header() {
  return (
    <header className="fixed top-2 z-30 w-full md:top-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-white/90 px-3 shadow-lg shadow-black/[0.03] backdrop-blur-xs before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(var(--color-gray-100),var(--color-gray-200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
          {/* Site branding */}
          <div className="flex flex-1 items-center">
            <Logo />
          </div>

          {/* Desktop sign in links */}
          <ul className="flex flex-1 items-center justify-end gap-3">
            <li>
              <Link
                href="https://wa.me/6282119819536?text=I'm%20interested%20in%20your%20car%20for%20sale"
                className="btn-sm bg-gray-800 text-gray-200 shadow-sm hover:bg-gray-900 flex items-center gap-2"
              >
                <FaWhatsapp className="text-green-500" />
                Konsultasi Gratis
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
    

  );
}
