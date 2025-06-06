import Pengantin01 from "@/public/images/testi.webp";
import Logo02 from "@/public/images/Bali.webp";
import Logo03 from "@/public/images/Batak.webp";
import Logo04 from "@/public/images/pengantin04.webp";
import Logo05 from "@/public/images/pengantin.webp";
import Logo06 from "@/public/images/pengantin06.webp";
import Logo07 from "@/public/images/pengantin07.webp";
import Logo08 from "@/public/images/pengantin08.webp";
import Logo09 from "@/public/images/pengantin09.webp";

export default function BusinessCategories() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          <div className="relative flex h-[324px] items-center justify-center">
            {/* ... semua SVG & background tetap sama ... */}

            {/* Pengantin 01 */}
            <div className="absolute before:absolute before:-inset-3 before:animate-[spin_3s_linear_infinite] before:rounded-full before:border before:border-transparent before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] before:[background:conic-gradient(from_180deg,transparent,var(--color-blue-500))_border-box]">
              <div className="animate-[breath_8s_ease-in-out_infinite_both]">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                  <img
                    className="relative w-full h-full object-cover rounded-full"
                    src={Pengantin01.src}
                    alt="Pengantin 01"
                  />
                </div>
              </div>
            </div>

            <div className="relative flex flex-col">
              <article className="flex h-full w-full items-center justify-center focus-visible:outline-hidden focus-visible:ring-3 focus-visible:ring-indigo-300">
                {/* Semua gambar di bawah ini tinggal ganti <Image /> -> <img src={...} /> */}
                <div className="absolute -translate-x-[136px]">
                  <div className="animate-[breath_7s_ease-in-out_3s_infinite_both]">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                      <img
                        className="relative w-full h-full object-cover rounded-full"
                        src={Logo02.src}
                        alt="Logo 02"
                      />
                    </div>
                  </div>
                </div>

                {/* lanjut ganti semuanya dengan cara yang sama */}
                <div className="absolute translate-x-[136px]">
                  <div className="animate-[breath_7s_ease-in-out_3.5s_infinite_both]">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                      <img
                        className="relative w-full h-full object-cover rounded-full"
                        src={Logo03.src}
                        alt="Logo 03"
                      />
                    </div>
                  </div>
                </div>

                {/* Logo 04 - 09 juga tinggal copy pola yang sama: pakai `src={Logo04.src}` dst */}
                <div className="absolute -translate-x-[216px] -translate-y-[82px]">
                  <div className="animate-[breath_6s_ease-in-out_3.5s_infinite_both]">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                      <img
                        className="relative object-cover rounded-full"
                        src={Logo04.src}
                        alt="Logo 04"
                      />
                    </div>
                  </div>
                </div>

                <div className="absolute -translate-y-[82px] translate-x-[216px]">
                  <div className="animate-[breath_6s_ease-in-out_1.5s_infinite_both]">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                      <img
                        className="relative object-cover rounded-full"
                        src={Logo05.src}
                        alt="Logo 05"
                      />
                    </div>
                  </div>
                </div>

                <div className="absolute translate-x-[216px] translate-y-[82px]">
                  <div className="animate-[breath_6s_ease-in-out_2s_infinite_both]">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                      <img
                        className="relative object-cover rounded-full"
                        src={Logo06.src}
                        alt="Logo 06"
                      />
                    </div>
                  </div>
                </div>

                <div className="absolute -translate-x-[216px] translate-y-[82px]">
                  <div className="animate-[breath_6s_ease-in-out_2.5s_infinite_both]">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                      <img
                        className="relative object-cover rounded-full"
                        src={Logo07.src}
                        alt="Logo 07"
                      />
                    </div>
                  </div>
                </div>

                <div className="absolute -translate-x-[292px] opacity-40">
                  <div className="animate-[breath_6s_ease-in-out_2s_infinite_both]">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200/60 bg-white shadow-lg">
                      <img
                        className="relative w-full h-full object-cover rounded-full"
                        src={Logo08.src}
                        alt="Logo 08"
                      />
                    </div>
                  </div>
                </div>

                <div className="absolute translate-x-[292px] opacity-40">
                  <div className="animate-[breath_6s_ease-in-out_4s_infinite_both]">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200/60 bg-white shadow-lg">
                      <img
                        className="relative w-full h-full object-cover rounded-full"
                        src={Logo09.src}
                        alt="Logo 09"
                      />
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
