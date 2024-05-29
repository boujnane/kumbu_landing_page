import { Statistics } from "./Statistics";

export const About = () => {
  return (
    <section
      id="about"
      className="container py-24 sm:py-32"
    >
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <img
            src={"/assets/LogoBubo.svg"}
            alt=""
            className="w-[300px] object-contain rounded-lg"
          />
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                  The {" "}
                <span className="inline bg-gradient-to-r from-[#FFD800]  to-[#FF5400] text-transparent bg-clip-text">Bubo</span>
                {" "} Company
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
              <i>"Since the dawn of time, the long-eared owl has flown silently, wisely and precisely towards its prey."</i><br/> 

              Chance is fascinating; deciphering it is a notably arduous but hugely profitable task.<br/> 
              <br/>
               Founded in 2017 by a team with pure tech DNA, Bubo has been working on the issue, via state-of-the-art AI publications and dedicated products.
              </p>
            </div>

            <Statistics />
          </div>
        </div>
      </div>
    </section>
  );
};
