import { LogoIcon } from "./Icons";

export const Footer = () => {
  return (
    <footer id="footer">
      <hr className="w-11/12 mx-auto" />

      <section className="container py-20 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
        <div className="col-span-full xl:col-span-2">
          <a
            rel="noreferrer noopener"
            href="/"
            className="font-bold text-xl flex"
          >
            <LogoIcon />
             Bubo
          </a>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Follow US</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="https://www.linkedin.com/company/bubo-bubo"
              className="opacity-60 hover:opacity-100"
            >
              Linkedin
            </a>
          </div>
        </div>


        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Website</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="/#features"
              className="opacity-60 hover:opacity-100"
            >
              Features
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="about"
              className="opacity-60 hover:opacity-100"
            >
              About Us
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="/#faq"
              className="opacity-60 hover:opacity-100"
            >
              FAQ
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Community</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Youtube
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Discord
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Twitch
            </a>
          </div>
        </div>
      </section>

      <section className="container pb-14 text-center">
        <h3>
          &copy; 2024 {" "} 
          <a
            rel="noreferrer noopener"
            target="_blank"
            className="text-primary transition-all border-primary hover:border-b-2"
          >
            Kumbu
          </a>
          &nbsp;is a Bubo SAS product
        </h3>
      </section>
    </footer>
  );
};
