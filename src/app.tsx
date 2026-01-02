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
        <top-chunk>
          <header id={"top"}>
            <h1>Catherine Knepper</h1>
            <nav>
              <ul>
                {NAVIGATION.map((_) => (
                  <li>
                    <a href={_.link} title={_.title}>
                      {_.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </header>
        </top-chunk>
        <Hello />
      </above-fold>

      <main>
        <Books />
        <MoreAboutMe />
        <Clients />
        <Testimonials />
        <Services />
        <Contact />
      </main>

      <footer>
        &copy; {new Date().getFullYear()},{" "}
        <strong>Catherine Knepper Writing Services, LLC</strong>. <br />I
        respect your privacy and use{" "}
        <a
          href="https://plausible.io"
          title={"I use Plausible, a privacy-friendly web analytics solution."}
        >
          Plausible
        </a>{" "}
        for this website&#8217;s analytics.
      </footer>

      <back-to-top>
        <a href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2rem"
            height="2rem"
            fill="#111111"
            viewBox="0 0 256 256"
          >
            <path d="M205.66,117.66a8,8,0,0,1-11.32,0L136,59.31V216a8,8,0,0,1-16,0V59.31L61.66,117.66a8,8,0,0,1-11.32-11.32l72-72a8,8,0,0,1,11.32,0l72,72A8,8,0,0,1,205.66,117.66Z"></path>
          </svg>
        </a>
      </back-to-top>
    </>
  );
};

export default App;
