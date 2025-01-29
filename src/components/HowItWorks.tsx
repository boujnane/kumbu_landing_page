import { useTranslation } from "react-i18next";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { FileIcon, SearchIcon, ManageTeamIcon, ChatIcon } from "../components/Icons";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <FileIcon />,
    title: "feature1.title",
    description: "feature1.description",
  },
  {
    icon: <ManageTeamIcon />,
    title: "feature2.title",
    description: "feature2.description",
  },
  {
    icon: <SearchIcon />,
    title: "feature3.title",
    description: "feature3.description",
  },
  {
    icon: <ChatIcon />,
    title: "feature4.title",
    description: "feature4.description",
  },
];

export const HowItWorks = () => {
  const { t } = useTranslation("common");

  return (
    <section
      id="howItWorks"
      className="container text-center py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold ">
        {t("howItWorks.title")}
        <span className="inline bg-gradient-to-r from-[#01AF9D] to-[#FF5400] text-transparent bg-clip-text">
          {t("howItWorks.subtitle")}
        </span>
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        {t("howItWorks.description")}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card
            key={title}
            className="bg-muted/50"
          >
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {icon}
                {t(title)}
              </CardTitle>
            </CardHeader>
            <CardContent>{t(description)}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
