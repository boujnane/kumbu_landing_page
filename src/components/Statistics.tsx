import { useTranslation } from "react-i18next";

export const Statistics = () => {
  const { t } = useTranslation("common"); // Namespace utilisé pour les traductions

  interface statsProps {
    quantity: string;
    description: string;
  }

  const stats: statsProps[] = [
    {
      quantity: "+ 400K €", // Valeur de quantité en dur
      description: t("statistics.description.ca"), // Traduction de la description
    },
    {
      quantity: "100+", // Valeur de quantité en dur
      description: t("statistics.description.users"),
    },
    {
      quantity: "+ 10M", // Valeur de quantité en dur
      description: t("statistics.description.documents"),
    },
    {
      quantity: "3", // Valeur de quantité en dur
      description: t("statistics.description.products"),
    },
  ];

  return (
    <section id="statistics">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map(({ quantity, description }: statsProps) => (
          <div
            key={description}
            className="space-y-2 text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold ">{quantity}</h2>
            <p className="text-xl text-muted-foreground">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
