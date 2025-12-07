import LanguageSwitcher from "@/app/components/LanguageSwitcher";

export default async function Home({
                                     params,
                                   }: any) {
  const { locale } = await params;

  return (
    <div className="relative min-h-screen flex flex-col">
      <div className="flex-1 flex items-center justify-center">
        <div className="flex flex-col items-center gap-6 w-full px-12 text-center">

          {/* Logo + Cities */}
          <div className="grid grid-cols-1 lg:grid-cols-5 items-center gap-8 w-full">
            <div className="text-2xl md:text-3xl city-text tracking-[.6em] color-tarvo lg:text-right elina col-span-2">
              BASEL
            </div>

            <div className="relative w-32 h-32 md:w-48 md:h-48 mx-auto col-span-1">
              <img
                src="/bird.png"
                alt="Tattoo Artist Logo"
                width={300}
                height={300}
                className="w-full h-full"
              />
            </div>

            <div className="text-2xl md:text-3xl city-text tracking-[.6em] color-tarvo lg:text-left elina col-span-2">
              TALLINN
            </div>
          </div>
          <div className="mt-4 z-10 lang-select-text">
            <LanguageSwitcher currentLocale={locale} />
          </div>
        </div>
      </div>
    </div>
  );
}
