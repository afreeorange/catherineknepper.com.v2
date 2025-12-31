import { Hello } from "./sections/hello";
import { Clients } from "./sections/clients";
import { Testimonials } from "./sections/testimonials";
import { Services } from "./sections/services";
import { Contact } from "./sections/contact";
import { Books } from "./sections/booksAndPublishers";

const NAVIGATION = [
  {
    label: "Services",
    link: "#services",
    title: "Services I provide",
  },
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
    label: "Contact",
    link: "#contact",
    title: "Get in touch!",
  },
];

export const App = () => (
  <>
    <header>
      <h1 class={"text-4xl text-indigo-600"}>Catherine Knepper</h1>
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

    <main>
      <Hello />
      <Books />
      <Clients />
      <Testimonials />
      <Services />
      <Contact />
    </main>

    <footer>
      {new Date().getFullYear()}, Catherine Knepper Writing Services, LLC. I
      respect your privacy and use{" "}
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
