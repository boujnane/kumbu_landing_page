import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { MedalIcon, Sewing, IALogo } from "./Icons";
import { useTheme } from "./theme-provider";
import { useTranslation } from "react-i18next";

interface ServiceProps {
  title: string;
  description: string;
  icon: JSX.Element;
}


export const Services = () => {
  const { t } = useTranslation("common"); // Utilisation du namespace "common"
  const { theme } = useTheme();
  
  const serviceList: ServiceProps[] = [
    {
      title: t("services.list.0.title"),
      description: t("services.list.0.description"),
      icon: <Sewing />,
    },
    {
      title: t("services.list.1.title"),
      description: t("services.list.1.description"),
      icon: <IALogo />,
    },
    {
      title: t("services.list.2.title"),
      description: t("services.list.2.description"),
      icon: <MedalIcon />,
    },
  ];
  // Liste des services récupérée des traductions
  const a_great_horned_owl_light = "/assets/a_great_horned_owl-light.png";
  const a_great_horned_owl_dark = "/assets/a_great_horned_owl.png";

  return (
    <section className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              {t("services.title")}
            </span>
          </h2>

          <p className="text-muted-foreground text-xl mt-4 mb-8">
            {t("services.description")}
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
          alt={t("services.title")} // Texte alternatif traduit
        />
      </div>
    </section>
  );
};
