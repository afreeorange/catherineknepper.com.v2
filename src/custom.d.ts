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
      "back-to-top": HTMLAttributes<HTMLElement>;

      "carousel-dots": HTMLAttributes<HTMLElement>;
      "carousel-next": HTMLAttributes<HTMLElement>;
      "carousel-prev": HTMLAttributes<HTMLElement>;
      "books-wrapper": HTMLAttributes<HTMLElement>;

      "publishers-wrapper": HTMLAttributes<HTMLElement>;

      "section-header": HTMLAttributes<HTMLElement>;
      "section-wrapper": HTMLAttributes<HTMLElement>;
    }
  }
}
