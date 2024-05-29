import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { MedalIcon, Sewing, IALogo } from "./Icons";
import { useTheme } from "./theme-provider";

interface ServiceProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const serviceList: ServiceProps[] = [
  {
    title: "Tailor-made App",
    description:
      "Bubo is able to develop a tailor-made application, taking business needs into consideration, and opting for the best web technologies.",
    icon: <Sewing />,
  },
  {
    title: "Ai Research",
    description:
      "Bubo is able to advise and manage AI projects, thanks to its expertise and numerous published articles, mainly in NLP and ComputerVision.",
    icon: <IALogo />,
  },
  {
    title: "Temporary expertise assignment",
    description:
      "Bubo provides expertise in data and web architecture, concerning AI and big data.",
    icon: <MedalIcon />,
  },
];

export const Services = () => {
  const { theme } = useTheme();
  const a_great_horned_owl_light = "/assets/a_great_horned_owl-light.png";
  const a_great_horned_owl_dark = "/assets/a_great_horned_owl.png"
  return (
    <section className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              Client-Centric{" "}
            </span>
            Services
          </h2>

          <p className="text-muted-foreground text-xl mt-4 mb-8 ">
          Bubo is committed to providing customer-centric services, putting our customers' needs and objectives at the heart of everything we do. Through our diversified offerings and tailored solutions, we strive to create exceptional and lasting experiences for each and every one of our customers.
          </p>

          <div className="flex flex-col gap-8">
            {serviceList.map(({ icon, title, description }: ServiceProps) => (
              <Card key={title}>
                <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
                  <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
                    {icon}
                  </div>
                  <div>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription className="text-md mt-2">
                      {description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        <img
          src={theme === "dark" ? a_great_horned_owl_light : a_great_horned_owl_dark}
          className="mr-10 w-[300px] md:w-[500px] lg:w-[600px] object-contain mx-auto"
          alt="About services"
        />
      </div>
    </section>
  );
};
