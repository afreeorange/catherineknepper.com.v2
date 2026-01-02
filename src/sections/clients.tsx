const CLIENTS = [
  "Alison McCauley",
  "Amy Jen Su",
  "Anthony Doerr",
  "Aviya Kushner",
  "Berit Brogaard, Ph.D.",
  "Camille di Maio",
  "Canyon Sam",
  "Charles Belfoure",
  "Dr. Corey Kirshner",
  "Dianne Morris Jones",
  "<em>Diabetic Living</em> magazine",
  "<em>DMU Magazine</em>",
  "Ilya Kaminsky",
  "J. Barry Griswell <em>&</em> Bob Jennings",
  "John Foxjohn",
  "Kate Stockly, Ph.D.",
  "Kathleen Frazier",
  "Katie Swenson",
  "Kristian Marlow, Ph.D.",
  "Lisa King",
  "Lori McNulty",
  "U.S. Ambassador Mary E. Kramer",
  "Mary Stier",
  "Dr. Michael Miller",
  "Morra Aarons-Mele",
  "Muriel Maignan Wilkins",
  "Phil Karber",
  "Rebecca Johns",
  "Rodale Books",
  "Sallie Bingham",
  "Sean McGinty",
  "Steve Gera",
  "Dr. Sunita Osborn",
  "Suzi Weiss-Fischmann",
  "Terry Mutchler",
  "Trowa D. Cloud",
  "Wesley Wildman, Ph.D.",
];

export const Clients = () => (
  <section id="clients">
    <section-header>
      <carousel-prev />
      <h2>Selected Clients</h2>
      <carousel-next />
    </section-header>
    <carousel-dots />
    <section-wrapper>
      {(() => {
        const slice = Math.ceil(CLIENTS.length / 3);
        const cols = [
          CLIENTS.slice(0, slice),
          CLIENTS.slice(slice, slice * 2),
          CLIENTS.slice(slice * 2),
        ];

        return cols.map((col, i) => (
          <ul key={i}>
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
