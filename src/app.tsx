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

const HamburgerIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

const CloseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

export const App = () => (
  <>
    <above-fold>
      <input type="checkbox" id="menu-toggle" className="menu-checkbox" />
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
        {/* <label htmlFor="menu-toggle" className="hamburger">
          <HamburgerIcon />
        </label> */}
      </header>
      {/* <div className="mobile-menu">
        <label htmlFor="menu-toggle" className="close-btn">
          <CloseIcon />
        </label>
        <ul>
          {NAVIGATION.map((_) => (
            <li key={_.link}>
              <label htmlFor="menu-toggle">
                <a href={_.link} title={_.title}>
                  {_.label}
                </a>
              </label>
            </li>
          ))}
        </ul>
      </div> */}
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
