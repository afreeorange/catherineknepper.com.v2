const CLIENTS = [
  "Morra Aarons-Mele",
  "Charles Belfoure",
  "Sallie Bingham",
  "Berit Brogaard, Ph.D.",
  "Trowa D. Cloud",
  "Anthony Doerr",
  "John Foxjohn",
  "Kathleen Frazier",
  "Steve Gera",
  "Jeffrey L. Goodman",
  "William Greenblatt",
  "J. Barry Griswell <em>&</em> Bob Jennings",
  "Dianne Morris Jones",
  "Rebecca Johns",
  "Ilya Kaminsky",
  "Phil Karber",
  "Lisa King",
  "Dr. Corey Kirshner",
  "U.S. Ambassador Mary E. Kramer",
  "Aviya Kushner",
  "David Lancefield",
  "Camille di Maio",
  "Kristian Marlow, Ph.D.",
  "Alison McCauley",
  "Sean McGinty",
  "Lori McNulty",
  "Dr. Michael Miller",
  "Terry Mutchler",
  "Dr. Sunita Osborn",
  "Zorana Ivcevic Pringle, Ph.D.",
  "Canyon Sam",
  "Mary Stier",
  "Kate Stockly, Ph.D.",
  "Amy Jen Su",
  "Katie Swenson",
  "Suzi Weiss-Fischmann",
  "Kandi J. Wiens, Ed.D.",
  "Muriel Wilkins",
  "Wesley Wildman, Ph.D.",
];

export const Clients = () => (
  <section id="clients" aria-labelledby="clients-heading">
    <section-header>
      <carousel-prev aria-label="Previous clients" role="button" tabIndex={0} />
      <h2 id="clients-heading">Selected Clients</h2>
      <carousel-next aria-label="Next clients" role="button" tabIndex={0} />
    </section-header>
    <carousel-dots aria-label="Client carousel navigation" role="tablist" />
    <section-wrapper>
      {(() => {
        const slice = Math.ceil(CLIENTS.length / 3);
        const cols = [
          CLIENTS.slice(0, slice),
          CLIENTS.slice(slice, slice * 2),
          CLIENTS.slice(slice * 2),
        ];

        return cols.map((col, i) => (
          <ul key={i} role="list">
            {col.map((c) => (
              <li key={c}>
                <span dangerouslySetInnerHTML={{ __html: c }} />
              </li>
            ))}
          </ul>
        ));
      })()}
    </section-wrapper>
  </section>
);
