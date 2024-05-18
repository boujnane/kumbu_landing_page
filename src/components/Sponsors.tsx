import { useTheme } from "./theme-provider";

type SponsorProps = {
  name: string;
  imageSrcLight: string;
  imageSrcDark: string;
};

const sponsors: SponsorProps[] = [
  {
    name: "Atradius",
    imageSrcLight: "src/assets/partners/atradius.svg",
    imageSrcDark: "src/assets/partners/atradius.svg",
  },
  {
    name: "Descartes & Mauss",
    imageSrcLight: "src/assets/partners/D_M_light.png",
    imageSrcDark: "src/assets/partners/D_M.png",
  },
  {
    name: "Batisseurs",
    imageSrcLight: "src/assets/partners/logo-batisseurs.png",
    imageSrcDark: "src/assets/partners/logo-batisseurs.png",
  },
  {
    name: "Gioza",
    imageSrcLight: "src/assets/partners/gioza_logo.png",
    imageSrcDark: "src/assets/partners/gioza_logo.png",
  },
  {
    name: "Yxir",
    imageSrcLight: "src/assets/partners/yxir.png",
    imageSrcDark: "src/assets/partners/yxir.png",
  },
  {
    name: "EtsIzySoft",
    imageSrcLight: "src/assets/partners/etsizysoft_logo.png",
    imageSrcDark: "src/assets/partners/etsizysoft_logo_dark.png",
  }
  
];

export const Sponsors = () => {
  const { theme } = useTheme();

  return (
    <section id="sponsors" className="container pt-24 sm:py-32">
      <h2 className="text-center text-md lg:text-xl font-bold mb-8 text-primary">
        Clients & Partners
      </h2>

      <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
        {sponsors.map(({ name, imageSrcLight, imageSrcDark }) => (
          <div key={name} className="flex items-center gap-1 text-muted-foreground/60">
            <div className="w-96 h-48">
              <img
                src={theme === "dark" ? imageSrcDark : imageSrcLight}
                alt={name}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
