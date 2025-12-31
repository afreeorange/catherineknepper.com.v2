import type { ComponentChildren } from "preact";

export const Shell = ({ children }: { children?: ComponentChildren }) => (
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      <meta name="view-transition" content="same-origin" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="http://catherineknepper.com/" />
      <meta
        property="og:title"
        content="Catherine Knepper Writing Services, LLC"
      />
      <meta
        property="og:description"
        content="I help smart, talented people bring their ideas to the page and to the marketplace."
      />
      <meta
        property="og:image"
        content="http://catherineknepper.com/catherine-small.jpg"
      />

      <title>Catherine Knepper Writing Services, LLC.</title>

      <link rel="apple-touch-icon" type="image/png" href="/favicon.png" />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="stylesheet" href="/index.css" />

      <script
        async
        defer
        data-domain="catherineknepper.com"
        src="https://plausible.io/js/plausible.js"
      ></script>
    </head>
    <body>
      {children}
    </body>
  </html>
);
