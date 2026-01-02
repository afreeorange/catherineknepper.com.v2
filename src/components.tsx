import type { ComponentChildren } from "preact";

const TITLE = "Catherine Knepper &mdash; Writer and Editor";
const DESCRIPTION =
  "I help smart, talented people bring their ideas to the page and to the marketplace.";

export const Shell = ({ children }: { children?: ComponentChildren }) => (
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      <meta name="view-transition" content="same-origin" />
      <meta property="og:title" content={TITLE} />
      <meta property="og:description" content={DESCRIPTION} />
      <meta property="og:image" content="/catherine-small.jpg" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="http://catherineknepper.com/" />

      <title dangerouslySetInnerHTML={{ __html: TITLE }} />

      <link
        rel="apple-touch-icon"
        type="image/svg+xml"
        href="/assets/img/favicon/favicon.svg"
      />
      <link
        rel="icon"
        type="image/svg+xml"
        href="/assets/img/favicon/favicon.svg"
      />
      <link rel="stylesheet" href="/index.css" />

      <script
        async
        defer
        data-domain="catherineknepper.com"
        src="https://plausible.io/js/plausible.js"
      />
    </head>
    <body>
      {children}
      <script type="text/javascript" src="/assets/js/jquery.min.js"></script>
      <script type="text/javascript" src="/assets/js/slick.min.js"></script>
      <script type="text/javascript" src="/assets/js/index.js"></script>
    </body>
  </html>
);
