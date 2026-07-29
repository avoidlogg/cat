import { LuMonitorPlay } from "react-icons/lu";

export default function Features() {
  return (
    <>
      <section id="features" className="w-full">
        <div className="w-full h-full flex flex-col">
          <div className="relative w-full">
            <div className="text-center relative overflow-hidden py-8 md:py-12 px-4 md:px-8 lg:px-12">
              <h2 className="text-sm text-muted-foreground text-balance font-semibold tracking-tigh uppercase">
                Why choose us
              </h2>
            </div>
            <div className="pointer-events-none absolute inset-0 w-full h-full bg-linear-to-t from-transparent -z-10 from-50%"></div>
            <div className="w-full h-full -z-20 absolute inset-0 size-full">
              <canvas
                className="pointer-events-none"
                width="1517"
                height="116"
              ></canvas>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col gap-y-3 items-center justify-center py-10 px-6 transition-colors duration-300 hover:bg-white/[0.03]">
                <div className="flex flex-col gap-y-3 items-center">
                  <div className="bg-linear-to-b from-primary to-primary/80 p-2.5 rounded-lg text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-shield-check h-6 w-6"
                      aria-hidden="true"
                    >
                      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium text-card-foreground text-center text-balance">
                    Quality and Security
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground text-balance text-center max-w-md mx-auto leading-relaxed">
                  Expect nothing less than the best quality and safety. Once
                  injected, you'll instantly feel the difference as comfort and
                  a premium experience.
                </p>
              </div>
              <div className="flex flex-col gap-y-3 items-center justify-center py-10 px-6 transition-colors duration-300 hover:bg-white/[0.03]">
                <div className="flex flex-col gap-y-3 items-center">
                  <div className="bg-linear-to-b from-primary to-primary/80 p-2.5 rounded-lg text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-users h-6 w-6"
                      aria-hidden="true"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                      <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium text-card-foreground text-center text-balance">
                    Easy to Use
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground text-balance text-center max-w-md mx-auto leading-relaxed">
                  Our cheats are designed for instant setup and intuitive
                  control. You'll be in-game and ahead of the competition in
                  minutes.
                </p>
              </div>
              <div className="flex flex-col gap-y-3 items-center justify-center py-10 px-6 transition-colors duration-300 hover:bg-white/[0.03]">
                <div className="flex flex-col gap-y-3 items-center">
                  <div className="bg-linear-to-b from-primary to-primary/80 p-2.5 rounded-lg text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-headset h-6 w-6"
                      aria-hidden="true"
                    >
                      <path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z"></path>
                      <path d="M21 16v2a4 4 0 0 1-4 4h-5"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium text-card-foreground text-center text-balance">
                    24/7 Support
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground text-balance text-center max-w-md mx-auto leading-relaxed">
                  Questions or need a hand? Our dedicated 24/7 live chat support
                  is ready to assist, ensuring your experience is seamless and
                  your questions are answered, fast.
                </p>
              </div>
              <div className="flex flex-col gap-y-3 items-center justify-center py-10 px-6 transition-colors duration-300 hover:bg-white/[0.03]">
                <div className="flex flex-col gap-y-3 items-center">
                  <div className="bg-linear-to-b from-primary to-primary/80 p-2.5 rounded-lg text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-sliders-vertical h-6 w-6"
                      aria-hidden="true"
                    >
                      <line x1="4" x2="4" y1="21" y2="14"></line>
                      <line x1="4" x2="4" y1="10" y2="3"></line>
                      <line x1="12" x2="12" y1="21" y2="12"></line>
                      <line x1="12" x2="12" y1="8" y2="3"></line>
                      <line x1="20" x2="20" y1="21" y2="16"></line>
                      <line x1="20" x2="20" y1="12" y2="3"></line>
                      <line x1="2" x2="6" y1="14" y2="14"></line>
                      <line x1="10" x2="14" y1="8" y2="8"></line>
                      <line x1="18" x2="22" y1="16" y2="16"></line>
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium text-card-foreground text-center text-balance">
                    Highly customizable
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground text-balance text-center max-w-md mx-auto leading-relaxed">
                  Nearly every module and feature is deeply customizable.
                  Fine-tune everything to perfectly match your unique playstyle
                  and dominate exactly how you want.
                </p>
              </div>
              <div className="flex flex-col gap-y-3 items-center justify-center py-10 px-6 transition-colors duration-300 hover:bg-white/[0.03]">
                <div className="flex flex-col gap-y-3 items-center">
                  <div className="bg-linear-to-b from-primary to-primary/80 p-2.5 rounded-lg text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-code h-6 w-6"
                      aria-hidden="true"
                    >
                      <path d="m16 18 6-6-6-6"></path>
                      <path d="m8 6-6 6 6 6"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium text-card-foreground text-center text-balance">
                    Constant updates
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground text-balance text-center max-w-md mx-auto leading-relaxed">
                  We work daily on updates for our cheats. This continuous
                  effort ensures we remain undetected, compatible with the
                  latest game versions, and packed with new features.
                </p>
              </div>
              <div className="flex flex-col gap-y-3 items-center justify-center py-10 px-6 transition-colors duration-300 hover:bg-white/[0.03]">
                <div className="flex flex-col gap-y-3 items-center">
                  <div className="bg-linear-to-b from-primary to-primary/80 p-2.5 rounded-lg text-white">
                    <LuMonitorPlay className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-medium text-card-foreground text-center text-balance">
                    NVIDIA Stream Proof
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground text-balance text-center max-w-md mx-auto leading-relaxed">
                  Record and stream with absolute confidence. Our visuals are completely hidden from OBS, Discord, and NVIDIA ShadowPlay, never green-screening on you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
