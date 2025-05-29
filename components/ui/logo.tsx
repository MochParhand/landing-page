import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex" aria-label="Cruip">
      <Image src="/images/magasu.webp" width={60} height={60} alt="Cruip Logo" priority />
    </Link>
  );
}
