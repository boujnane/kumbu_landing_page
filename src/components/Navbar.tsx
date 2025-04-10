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
    label: "featuresection",
  },
  {
    href: "/#faq",
    label: "faqsection",
  },
  {
    href: "/about",
    label: "aboutUssection",
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { t } = useTranslation("common");

  return (
    <header className="sticky border-b-[1px] top-0 z-40 w-full bg-white dark:border-b-slate-700 dark:bg-background">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container h-14 px-4 w-screen flex justify-between items-center">
          <NavigationMenuItem className="font-bold flex">
            <Link to="/" className="ml-2 font-bold text-xl flex items-center">
              <KumbuIcon />
              <span className="ml-2 inline bg-gradient-to-r from-[#01AF9D] via-[#02AF9C] to-[#06897B] text-transparent bg-clip-text">
                Kumbu
              </span>
            </Link>
          </NavigationMenuItem>

          <nav className="hidden md:flex gap-2">
            {routeList.map((route: RouteProps, i) => (
              <Link
                to={route.href}
                key={i}
                className={`text-[17px] ${buttonVariants({ variant: "ghost" })}`}
              >
                {t(route.label)}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Link
              to="/waitlist"
              className="text-[16px] font-semibold underline underline-offset-4 decoration-[#FF5400] hover:decoration-[#FFD800] transition"
            >
              {t("requestAccess")}
            </Link>
            <ModeToggle />
            <LanguageSwitcher />
          </div>

          {/* Mobile Menu */}
          <span className="flex md:hidden">
            <ModeToggle />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger className="px-2">
                <Menu className="h-5 w-5" />
              </SheetTrigger>

              <SheetContent side="left">
                <SheetHeader>
                  <SheetTitle className="font-bold text-xl">Kumbu</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col items-center gap-2 mt-4">
                  {[...routeList, { href: "/waitlist", label: "requestAccess" }].map(
                    ({ href, label }: RouteProps) => (
                      <Link
                        key={label}
                        to={href}
                        onClick={() => setIsOpen(false)}
                        className={buttonVariants({ variant: "ghost" })}
                      >
                        {t(label)}
                      </Link>
                    )
                  )}
                  <a
                    rel="noreferrer noopener"
                    href="https://github.com"
                    target="_blank"
                    className={`w-[110px] border ${buttonVariants({ variant: "secondary" })}`}
                  >
                    <GitHubLogoIcon className="mr-2 w-5 h-5" />
                    {t("github")}
                  </a>
                </nav>
              </SheetContent>
            </Sheet>
          </span>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};
