import PageIllustration from "@/components/page-illustration";

export default function HeroHome() {
  return (
    <section className="relative">
      <PageIllustration />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="pt-32 md:pt-40">
          {/* Section header */}
          <div className="text-center">
            <div
              className="mb-6 border-y [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1]"
              data-aos="zoom-y-out"
            >
              <div className="-mx-0.5 flex justify-center -space-x-3">
                <img
                  className="box-content rounded-full border-2 border-gray-50"
                  src="/images/pengantin05.webp"
                  width={32}
                  height={32}
                  alt="Avatar 01"
                />
                <img
                  className="box-content rounded-full border-2 border-gray-50"
                  src="/images/pengantin03.webp"
                  width={32}
                  height={32}
                  alt="Avatar 02"
                />
                <img
                  className="box-content rounded-full border-2 border-gray-50"
                  src="/images/pengantin07.webp"
                  width={32}
                  height={32}
                  alt="Avatar 03"
                />
                <img
                  className="box-content rounded-full border-2 border-gray-50"
                  src="/images/pengantin08.webp"
                  width={32}
                  height={32}
                  alt="Avatar 04"
                />
                <img
                  className="box-content rounded-full border-2 border-gray-50"
                  src="/images/pengantin09.webp"
                  width={32}
                  height={32}
                  alt="Avatar 05"
                />
                <img
                  className="box-content rounded-full border-2 border-gray-50"
                  src="/images/Pengantin02.webp"
                  width={32}
                  height={32}
                  alt="Avatar 06"
                />
              </div>
            </div>
            <h1
              className="mb-6 border-y text-5xl font-bold [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1] md:text-6xl"
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >
              Buat Momen Bahagiamu Lebih <br className="max-lg:hidden" />
              Berkesan ✨
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
