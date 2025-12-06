export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col">

      <div
        className="flex-1 flex items-center justify-center"
      >
        <div className="flex items-center flex-col gap-8 lg:flex-row justify-center w-full px-12">
          <div className="text-2xl md:text-4xl tracking-[.4em] mr-0 lg:mr-16  color-tarvo">
            BASEL
          </div>
          <div className="relative w-32 h-32 md:w-48 md:h-48">
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src="/bird.png"
                alt="Tattoo Artist Logo"
                width={200}
                height={200}
                className="w-full h-full"
              />
            </div>
          </div>
          <div className="text-2xl md:text-4xl tracking-[.4em] ml-0 lg:ml-16 color-tarvo">
            TALLINN
          </div>
        </div>
      </div>
    </div>
  );
}
