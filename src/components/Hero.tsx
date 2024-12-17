import { HeroCards } from "./HeroCards";

export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#FFD800]  to-[#FF5400] text-transparent bg-clip-text">
            New
            </span>{" "}
          </h1>{" "}
        product{" "}
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-[#01AF9D] via-[#02AF9C] to-[#06897B] text-transparent bg-clip-text">
              Kumbu.ai
            </span>{" "}
          </h2>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
        Discover our revolutionary archiving and document management solution. 
        With advanced AI-based search and instant chat like GPT, find your information in an instant.
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <a className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full md:w-1/3" href={"https://calendly.com/bubobubo/intro?month=2024-12"}  rel="noopener noreferrer">
      Get Started
    </a>
        </div>
      </div>

      {/* Hero cards sections */}
      <div className="z-10">
        <HeroCards />
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
      <div className="shadow1"></div>
    </section>
  );
};
