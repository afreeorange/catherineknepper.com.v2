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
    <h2>Selected Clients</h2>
    <ul>
      {CLIENTS.map((_) => (
        <li>
          <span dangerouslySetInnerHTML={{ __html: _ }} />
        </li>
      ))}
    </ul>
  </section>
);
