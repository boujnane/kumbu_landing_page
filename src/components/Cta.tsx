import { useTranslation } from 'next-i18next';

export const Cta = () => {
  const { t } = useTranslation("common");

  return (
    <section
      id="cta"
      className="bg-muted/50 py-16 my-24 sm:my-32"
    >
      <div className="container lg:grid lg:grid-cols-2 place-items-center">
        <div className="lg:col-start-1">
          <h2 className="text-3xl md:text-4xl font-bold">
            {t("cta.title.part1")}
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              {t("cta.title.highlight")}
            </span>
            {t("cta.title.part2")}
          </h2>
          <p className="text-muted-foreground text-xl mt-4 mb-8 lg:mb-0">
            {t("cta.description")}
          </p>
        </div>

        <div className="space-y-4 lg:col-start-2">
          <a
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full md:mr-4 md:w-auto"
            href="https://calendly.com/bubobubo/intro?month=2024-12"
            rel="noopener noreferrer"
          >
            {t("cta.button")}
          </a>
        </div>
      </div>
    </section>
  );
};
