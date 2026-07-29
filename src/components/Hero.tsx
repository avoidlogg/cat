import { LuArrowRight } from "react-icons/lu";

export default function Hero() {
  return (
    <>
      <div className="bg-background relative min-h-[75svh] sm:min-h-[100svh] flex items-center justify-center overflow-hidden">
        <div className="pointer-events-none absolute inset-0 z-0">
          <img
            alt=""
            width="1600"
            height="893"
            decoding="async"
            data-nimg="1"
            className="absolute inset-0 h-full w-full object-cover object-center opacity-[0.92]"
            src="landing/hero-character.webp"
          />
          <div className="absolute inset-0 bg-background/60"></div>
        </div>
        <div className="pointer-events-none absolute inset-0 z-[1]">
          <div className="absolute inset-0 opacity-100">
            <div className="absolute -top-[30%] -left-[15%] h-[60%] w-[65%] rounded-full blur-[180px] animate-aurora-1" style={{ background: 'radial-gradient(ellipse at center, #416cadB3, transparent 50%)' }}></div>
            <div className="absolute -top-[15%] -right-[10%] h-[70%] w-[55%] rounded-full blur-[160px] animate-aurora-2" style={{ background: 'radial-gradient(ellipse at center, #91ace199, transparent 20%)' }}></div>
            <div className="absolute top-[45%] left-[2%] h-[60%] w-[50%] rounded-full blur-[200px] animate-aurora-3" style={{ background: 'radial-gradient(ellipse at center, #719ce080, transparent 55%)' }}></div>
            <div className="absolute -bottom-[15%] right-[0%] h-[55%] w-[50%] rounded-full blur-[170px] animate-aurora-4" style={{ background: 'radial-gradient(ellipse at center, #416cad73, transparent 80%)' }}></div>
          </div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_50%,_theme(colors.background)_90%)]"></div>
        </div>
        <div className="pointer-events-none absolute inset-0 z-[2] opacity-[0.010]" style={{ backgroundImage: 'linear-gradient(theme(colors.foreground) 1px, transparent 1px), linear-gradient(90deg, theme(colors.foreground) 1px, transparent 1px)', backgroundSize: '80px 80px' }}></div>
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-72 z-[3] bg-gradient-to-t from-background via-background/50 to-transparent"></div>
        <div className="relative z-10">
          <div className="relative z-10 w-full container px-4 sm:px-6 pb-[8vh] sm:pb-[12vh] -translate-y-[10px]">
            <div className="flex flex-col items-center justify-center">
              <a
                className="translate-y-[10px] animate-fade-in"
                href="#products"
              >
                <div className="flex items-center gap-1.5 sm:gap-2 rounded-full bg-white/[0.06] backdrop-blur-xl backdrop-saturate-[1.8] border border-white/[0.08] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] p-1 pr-3 sm:pr-4 group hover:bg-white/[0.1] hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)] transition-all duration-300">
                  <div className="rounded-full bg-primary/20 backdrop-blur-sm px-2.5 sm:px-3 py-1">
                    <span className="text-xs sm:text-sm font-medium text-primary">
                      New
                    </span>
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-foreground/80">
                    #1 Nivida Proof Cheat
                  </span>
                  <LuArrowRight className="ml-0.5 sm:ml-1 group-hover:translate-x-1 transition-transform duration-300 ease-in-out text-foreground/60 w-3 h-3" />
                </div>
              </a>
              <div className="flex w-full flex-col items-center justify-center text-center pt-6 sm:pt-12">
                <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[clamp(12rem,10vw,22rem)] font-bold leading-[0.9] sm:leading-tight tracking-tighter relative z-10 animate-fade-in-delayed whitespace-normal sm:whitespace-nowrap">
                  <span className="inline-block bg-clip-text text-transparent bg-gradient-to-b from-white via-white/80 to-primary/60 drop-shadow-[0_0_80px_#719ce04D]">
                    Heroic Bypass
                  </span>
                  <span className="sr-only">
                    — Premium Undetected Game Cheats &amp; Free HWID Spoofer for
                    FiveM, Valorant, Fortnite, ARK and Squad
                  </span>
                </h1>
                <h2 className="mt-4 sm:-mt-4 lg:-mt-8 text-base sm:text-2xl md:text-3xl xl:text-[clamp(1.875rem,1.6vw,3rem)] text-foreground/60 font-light tracking-wide animate-fade-in-delayed-2">
                  The #1 <span className="text-primary/90 font-medium">NVIDIA Stream Proof</span> Cheat
                </h2>
                <div className="mt-8 sm:mt-10 relative animate-fade-in-delayed-2">
                  <a href="/products">
                    <button className="group relative cursor-pointer inline-flex items-center gap-2.5 px-8 sm:px-10 py-3.5 sm:py-4 rounded-full text-sm sm:text-base font-medium tracking-wide text-white bg-white/[0.08] backdrop-blur-xl backdrop-saturate-[1.8] border border-white/[0.12] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] hover:bg-white/[0.14] hover:border-white/[0.2] hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1),0_0_30px_#719ce026] active:scale-[0.98] transition-all duration-300 ease-out">
                      Start Dominating
                      <LuArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform duration-300" />
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
