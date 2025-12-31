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

export const App = () => (
  <>
    <above-fold>
      <header>
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
      &copy; {new Date().getFullYear()}, Catherine Knepper Writing Services,
      LLC. <br />I respect your privacy and use{" "}
      <a
        href="https://plausible.io"
        title={"I use Plausible, a privacy-friendly web analytics solution."}
      >
        Plausible
      </a>{" "}
      for this website&#8217;s analytics.
    </footer>
  </>
);

export default App;
