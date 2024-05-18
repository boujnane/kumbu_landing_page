import { useTheme } from "./theme-provider";
import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface FeatureProps {
  title: string;
  description: string;
  image: string;
  imageDark: string;
}

const features: FeatureProps[] = [
  {
    title: "Monitoring - Dashboard",
    description:
      "Our solution includes platform activity monitoring, enabling fine-tuned management of system performance and utilization. The dashboard provides a clear overview of current activities, and relevant statistics, enabling users to make informed decisions and detect potential problems quickly.",
    image: "src/assets/dashboard.png",
    imageDark: "src/assets/dashboard_black.png",
  },
  {
    title: "Personnalization - Customization",
    description:
      "Our solution offers settings and customization to meet the specific needs of each user. With the ability to customize search preferences, metadata filters and the user interface, each user can create a tailor-made environment that maximizes efficiency and satisfaction.",
    image: "src/assets/customization.png",
    imageDark: "src/assets/customization-dark.png",
  },
  {
    title: "Advanced Search",
    description:
      "The integration of lexical search and semantic dictionary facilitates rapid localization of information, while the use of regular expressions enables more flexible searches. Customized metadata allows results to be filtered according to user needs.",
    image: "src/assets/loupe.png",
    imageDark: "src/assets/loupe_dark.png",
  },
];

const featureList: string[] = [
  "Dark/Light theme",
  "Chat AI",
  "Semantic Search",
  "Regexp Search",
  "Manage Files",
  "Security",
  "Latest AI technology",
  "High customizaton",
  "User-Friendly Interface",
];

export const Features = () => {
  const { theme } = useTheme();
  return (
    <section
      id="features"
      className="container py-24 sm:py-32 space-y-8"
    >
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        Many{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Great Features
        </span>
      </h2>

      <div className="flex flex-wrap md:justify-center gap-4">
        {featureList.map((feature: string) => (
          <div key={feature}>
            <Badge
              variant="secondary"
              className="text-sm"
            >
              {feature}
            </Badge>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {features.map(({ title, description, image, imageDark }: FeatureProps) => (
        <Card key={title}>
          <CardHeader>
            <CardTitle>{title}</CardTitle>
          </CardHeader>

          <CardContent className="mb-4">{description}</CardContent>

          <CardFooter>
            <img
              src={theme === "light" ? image : imageDark}
              alt="About feature"
              className="w-[200px] lg:w-[400px] mx-auto"
            />
          </CardFooter>
        </Card>
      ))}
      </div>
    </section>
  );
};
