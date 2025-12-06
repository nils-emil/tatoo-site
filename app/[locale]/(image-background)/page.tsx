export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <div className="flex-1 flex items-center justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-8 w-full px-12 text-center lg:text-left">
          <div className="text-2xl md:text-4xl tracking-[.4em] color-tarvo lg:text-right">
            BASEL
          </div>

          <div className="relative w-32 h-32 md:w-48 md:h-48 mx-auto">
            <img
              src="/bird.png"
              alt="Tattoo Artist Logo"
              width={200}
              height={200}
              className="w-full h-full"
            />
          </div>
          <div className="text-2xl md:text-4xl tracking-[.4em] color-tarvo lg:text-left">
            TALLINN
          </div>
        </div>
      </div>
    </div>
  );
}
