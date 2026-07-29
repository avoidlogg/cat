export default function ProductsCTA() {
  return (
    <>
      <section id="products-cta" className="w-full">
        <div className="w-full h-full flex flex-col px-4 md:px-8 lg:px-12">
          <div className="relative text-center py-20">
            <h2 className="text-4xl font-bold tracking-tight mb-4">
              Our Products
            </h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Click on any game below to explore our available cheats and
              features
            </p>
            <div className="flex justify-center">
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
                className="lucide lucide-arrow-down h-8 w-8 text-primary"
                aria-hidden="true"
              >
                <path d="M12 5v14"></path>
                <path d="m19 12-7 7-7-7"></path>
              </svg>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
