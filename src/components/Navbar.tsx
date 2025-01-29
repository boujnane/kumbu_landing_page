import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next"; // Import du hook
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { buttonVariants } from "./ui/button";
import { Menu } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import { KumbuIcon } from "./Icons";
import LanguageSwitcher from "./LanguageSwitcher";

interface RouteProps {
  href: string;
  label: string;
}

const routeList: RouteProps[] = [
  {
    href: "/#features",
    label: "featuresection", // Utilisez la clé de traduction
  },
  {
    href: "/#faq",
    label: "faqsection", // Utilisez la clé de traduction
  },
  {
    href: "/about",
    label: "aboutUssection", // Utilisez la clé de traduction
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { t } = useTranslation("common");
  return (
    <header className="sticky border-b-[1px] top-0 z-40 w-full bg-white dark:border-b-slate-700 dark:bg-background">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container h-14 px-4 w-screen flex justify-between ">
          <NavigationMenuItem className="font-bold flex">
            <Link
              to="/"
              className="ml-2 font-bold text-xl flex items-center"
            >
              <KumbuIcon />
              <span className="ml-2 inline bg-gradient-to-r from-[#01AF9D] via-[#02AF9C] to-[#06897B] text-transparent bg-clip-text">
                Kumbu
              </span>
            </Link>
          </NavigationMenuItem>

          {/* mobile */}
          <span className="flex md:hidden">
            <ModeToggle />

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger className="px-2">
                <Menu
                  className="flex md:hidden h-5 w-5"
                  onClick={() => setIsOpen(true)}
                >
                  <span className="sr-only">Menu Icon</span>
                </Menu>
              </SheetTrigger>

              <SheetContent side={"left"}>
                <SheetHeader>
                  <SheetTitle className="font-bold text-xl">
                    Kumbu
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col justify-center items-center gap-2 mt-4">
                  {routeList.map(({ href, label }: RouteProps) => (
                    <Link
                      key={label}
                      to={href}
                      onClick={() => setIsOpen(false)}
                      className={buttonVariants({ variant: "ghost" })}
                    >
                      {t(label)} {/* Utilisez la méthode t pour obtenir la traduction */}
                    </Link>
                  ))}
                  <a
                    rel="noreferrer noopener"
                    href="https://github.com"
                    target="_blank"
                    className={`w-[110px] border ${buttonVariants({
                      variant: "secondary",
                    })}`}
                  >
                    <GitHubLogoIcon className="mr-2 w-5 h-5" />
                    {t("github")} {/* Traduction de "Github" */}
                  </a>
                </nav>
              </SheetContent>
            </Sheet>
          </span>

          {/* desktop */}
          <nav className="hidden md:flex gap-2">
            {routeList.map((route: RouteProps, i) => (
              <Link
                to={route.href}
                key={i}
                className={`text-[17px] ${buttonVariants({
                  variant: "ghost",
                })}`}
              >
                {t(route.label)} {/* Traduction des labels */}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex gap-2">
            <ModeToggle />
            <LanguageSwitcher />
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};
