import "preact";

declare module "preact" {
  namespace JSX {
    /** Example with custom attributes */
    // interface ExternalLinkAttributes extends HTMLAttributes<HTMLElement> {
    //   href?: string;
    //   provider?: "github" | "linkedin" | "twitter";
    //   internal?: boolean;
    // }

    interface IntrinsicElements {
      "above-fold": HTMLAttributes<HTMLElement>;
      "section-wrapper": HTMLAttributes<HTMLElement>;
      "books-wrapper": HTMLAttributes<HTMLElement>;
      "publishers-wrapper": HTMLAttributes<HTMLElement>;
      "service-section": HTMLAttributes<HTMLElement>;
    }
  }
}
