import { Hello } from "./sections/hello";
import { MoreAboutMe } from "./sections/moreAboutMe";
import { Clients } from "./sections/clients";
import { Testimonials } from "./sections/testimonials";
import { Services } from "./sections/services";
import { Contact } from "./sections/contact";
import { Books } from "./sections/booksAndPublishers";

const NAVIGATION = [
  {
    label: "Clients",
    link: "#clients",
    title: "A small selection of my former clients",
  },
  {
    label: "Testimonials",
    link: "#testimonials",
    title: "Some testimonials from former clients",
  },
  {
    label: "Services",
    link: "#services",
    title: "Services I provide",
  },
  {
    label: "Contact",
    link: "#contact",
    title: "Get in touch!",
  },
];

export const App = () => {
  return (
    <>
      <above-fold>
        <header id={"top"}>
          <h1>
            <a href="/" title="Catherine Knepper Writing Services, LLC.">
              Catherine Knepper
            </a>
          </h1>
          <nav aria-label="Main navigation">
            <ul role="list">
              {NAVIGATION.map((_) => (
                <li key={_.link}>
                  <a href={_.link} title={_.title}>
                    {_.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </header>
        <Hello />
      </above-fold>

      <main id="main-content">
        <Books />
        <MoreAboutMe />
        <Clients />
        <Testimonials />
        <Services />
        <Contact />
      </main>

      <footer>
        <a
          href="https://labyrinthsociety.org/historical-overview/"
          title={"About this Labyrinth"}
        >
          <span>
            <img
              src="/assets/img/catherine/labyrinth.png"
              alt="A Christian Labyrinth"
            />
          </span>
        </a>
        &copy; {new Date().getFullYear()},{" "}
        <strong>Catherine Knepper Writing Services, LLC</strong>. Photo by{" "}
        <a href="https://kathryngamble.com/">Kathryn Gamble</a>. <br />I respect
        your privacy and use{" "}
        <a
          href="https://plausible.io"
          title={"Plausible, a privacy-friendly web analytics solution."}
        >
          Plausible
        </a>{" "}
        for this website&#8217;s analytics.
      </footer>

      <back-to-top>
        <a href="#top" aria-label="Back to top">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="#111"
            viewBox="0 0 256 256"
          >
            <path d="M208.49,120.49a12,12,0,0,1-17,0L140,69V216a12,12,0,0,1-24,0V69L64.49,120.49a12,12,0,0,1-17-17l72-72a12,12,0,0,1,17,0l72,72A12,12,0,0,1,208.49,120.49Z"></path>
          </svg>
        </a>
      </back-to-top>
    </>
  );
};

export default App;
