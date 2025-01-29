import { useTheme } from "./theme-provider";
import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useTranslation } from "react-i18next"; // Importer useTranslation pour l'internationalisation

interface FeatureProps {
  title: string;
  description: string;
  image: string;
  imageDark: string;
}

const features: FeatureProps[] = [
  {
    title: "monitoringDashboard",
    description:
      "monitoringDashboardDescription",
    image: "/assets/dashboard.png",
    imageDark: "/assets/dashboard_black.png",
  },
  {
    title: "personalizationCustomization",
    description:
      "personalizationCustomizationDescription",
    image: "/assets/customization.png",
    imageDark: "/assets/customization-dark.png",
  },
  {
    title: "advancedSearch",
    description:
      "advancedSearchDescription",
    image: "/assets/loupe.png",
    imageDark: "/assets/loupe_dark.png",
  },
];

const featureList: string[] = [
  "darkLightTheme",
  "chatAI",
  "semanticSearch",
  "regexpSearch",
  "manageFiles",
  "security",
  "latestAITechnology",
  "highCustomization",
  "userFriendlyInterface",
];

export const Features = () => {
  const { theme } = useTheme();
  const { t } = useTranslation("common"); // Utilisation de `t` pour la traduction

  return (
    <section
      id="features"
      className="container py-24 sm:py-32 space-y-8"
    >
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        {t("features.manyGreatFeatures")}{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {t("features.greatFeatures")}
        </span>
      </h2>

      <div className="flex flex-wrap md:justify-center gap-4">
        {featureList.map((feature: string) => (
          <div key={feature}>
            <Badge
              variant="secondary"
              className="text-sm"
            >
              {t(`features.${feature}`)} {/* Traduction dynamique */}
            </Badge>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ title, description, image, imageDark }: FeatureProps) => (
          <Card key={title}>
            <CardHeader>
              <CardTitle>{t(`features.${title}`)}</CardTitle> {/* Traduction dynamique */}
            </CardHeader>

            <CardContent className="mb-4">
              {t(`features.${description}`)} {/* Traduction dynamique */}
            </CardContent>

            <CardFooter>
              <img
                src={theme === "light" ? image : imageDark}
                alt={t("features.featureImageAlt")}
                className="w-[200px] lg:w-[400px] mx-auto"
              />
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
