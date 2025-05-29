"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({
      once: true, // animasi hanya sekali, tidak berulang saat scroll naik turun
      mirror: false, // jangan animasi ulang saat elemen hilang & muncul lagi
      offset: 120, // jarak trigger animasi dari viewport (bisa disesuaikan)
      duration: 700,
      easing: "ease-out-cubic",
      debounceDelay: 50, // delay debounce scroll event
      throttleDelay: 99, // delay throttle scroll event
    });

    // Refresh AOS setelah window load dan resize untuk memastikan animasi tersinkronisasi
    const handleLoad = () => AOS.refresh();
    window.addEventListener("load", handleLoad);
    window.addEventListener("resize", handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad);
      window.removeEventListener("resize", handleLoad);
    };
  }, []);

  return (
    <div className="scroll-smooth">
      <Header />
      <main className="grow">{children}</main>
      <Footer border={true} />
    </div>
  );
}
