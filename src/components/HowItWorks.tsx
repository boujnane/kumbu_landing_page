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
    title: "Upload your docs",
    description:
      "Simply create an account, drag and drop your files, and off you go !",
  },
  {
    icon: <ManageTeamIcon />,
    title: "Manage Team",
    description:
      "Use Kumbu's team management tools to define access authorizations and guarantee data confidentiality.",
  },
  {
    icon: <SearchIcon />,
    title: "Search in your docs",
    description:
      "Explore Bubo's advanced search features to quickly find specific information in your documents, with 3 levels of granularity.",
  },
  {
    icon: <ChatIcon />,
    title: "Chat with your docs",
    description:
      "Engage in document-related conversations with Kumbu chat, which lets you get precise answers in natural language about your own documents.",
  },
];

export const HowItWorks = () => {
  return (
    <section
      id="howItWorks"
      className="container text-center py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold ">
        How It{" "}
        <span className="inline bg-gradient-to-r from-[#949af6]  to-[#FF5400]  text-transparent bg-clip-text">
          Works{" "}
        </span>
        Step-by-Step Guide
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
      Easy to use, quick and effective to learn
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
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
