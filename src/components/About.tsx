import { Statistics } from "./Statistics";
import { useTranslation } from "react-i18next";

export const About = () => {
  const { t } = useTranslation("common"); // Namespace utilisé pour les traductions

  return (
    <section id="about" className="container py-24 sm:py-32">
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <img
            src={"/assets/LogoBubo.svg"}
            alt={t("about.logoAlt")} // Texte alternatif
            className="w-[300px] object-contain rounded-lg"
          />
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                {t("about.title.start")}{" "}
                <span className="inline bg-gradient-to-r from-[#FFD800]  to-[#FF5400] text-transparent bg-clip-text">
                  {t("about.title.highlight")}
                </span>{" "}
                {t("about.title.end")}
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
                <i>{t("about.description.quote")}</i>
                <br />
                <br />
                {t("about.description.part1")}
                <br />
                <br />
                {t("about.description.part2")}
              </p>
            </div>

            <Statistics />
          </div>
        </div>
      </div>
    </section>
  );
};
