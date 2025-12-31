const BOOKS = [
  {
    title: "The Adversity Paradox",
    author: "J. Barry Griswell and Bob Jennings",
    uri: "/assets/books/adversity.jpeg",
  },
  {
    title: "The Anxious Achiever",
    author: "Morra Aarons-Mele",
    uri: "/assets/books/anxious.jpeg",
  },
  {
    title: "More Than a Walk on the Beach",
    author: "Mary E. Kramer",
    uri: "/assets/books/beach.jpeg",
  },
  {
    title: "The Blue Box: Three Lives in Letters",
    author: "Sallie Bingham",
    uri: "/assets/books/bluebox.jpeg",
  },
  {
    title: "Burnout Immunity",
    author: "Kandi Wiens",
    uri: "/assets/books/burnout.jpeg",
  },
  {
    title: "Cloud Cuckoo Land",
    author: "Anthony Doerr",
    uri: "/assets/books/cloud.jpeg",
  },
  {
    title: "Do Your Best Coaching",
    author: "Julie Hess and Laura Daley",
    uri: "/assets/books/coaching.jpeg",
  },
  {
    title: "Consumption",
    author: "G S Johnston",
    uri: "/assets/books/consumption.jpeg",
  },
  {
    title: "The Countess",
    author: "Rebecca Johns",
    uri: "/assets/books/countess.jpeg",
  },
  {
    title: "Death in a Wine Dark Sea",
    author: "Lisa King",
    uri: "/assets/books/death.jpeg",
  },
  {
    title: "Design with Love: At Home in America",
    author: null,
    uri: "/assets/books/design.jpeg",
  },
  {
    title: "Under This Beautiful Dome",
    author: "Terry Mutchler",
    uri: "/assets/books/dome.jpeg",
  },
  {
    title: "What You Don't Know",
    author: "Cortnie Abercrombie",
    uri: "/assets/books/dontknow.jpeg",
  },
  {
    title: "Eat for Extraordinary Health & Healing",
    author: "The Editors of Rodale Books",
    uri: "/assets/books/eat.jpeg",
  },
  {
    title: "Fear and Faith in Paradise",
    author: "Phil Karber",
    uri: "/assets/books/fearfaith.jpeg",
  },
  {
    title: "The End of Fun",
    author: "Sean McGinty",
    uri: "/assets/books/fun.jpeg",
  },
  {
    title: "The Grammar of God",
    author: "Aviya Kushner",
    uri: "/assets/books/grammar.jpeg",
  },
  {
    title: "Heal Your Heart",
    author: "Michael Miller, MD with Catherine Knepper",
    uri: "/assets/books/heal.jpeg",
  },
  {
    title: "Lady Leader",
    author: "Mary Stier",
    uri: "/assets/books/leader.jpeg",
  },
  {
    title: "Life on Mars",
    author: "Lori McNulty",
    uri: "/assets/books/mars.jpeg",
  },
  {
    title: "The Memory of Us",
    author: "Camille Di Maio",
    uri: "/assets/books/memory.jpeg",
  },
  {
    title: "The Miscarriage Map",
    author: "Dr. Sunita Osborn",
    uri: "/assets/books/miscarriage.jpeg",
  },
  {
    title: "The Paris Architect",
    author: "Charles Belfoure",
    uri: "/assets/books/paris.jpeg",
  },
  {
    title: "The Real Life of the Parthenon",
    author: "Patricia Vigderman",
    uri: "/assets/books/parthenon.jpeg",
  },
  {
    title: "Queenbreaker",
    author: "Catherine McCarran",
    uri: "/assets/books/queenbreaker.jpeg",
  },
  {
    title: "Sky Train",
    author: "Canyon Sam",
    uri: "/assets/books/skytrain.jpeg",
  },
  {
    title: "Sleepwalker",
    author: "Kathleen Frazier",
    uri: "/assets/books/sleepwalker.jpeg",
  },
  {
    title: "Stop Breathe Believe",
    author: "Dianne Morris Jones with Catherine Knepper",
    uri: "/assets/books/stop.jpeg",
  },
  {
    title: "The Superhuman Mind",
    author: "Berit Brogaard and Kristian Marlow",
    uri: "/assets/books/superhuman.jpeg",
  },
  {
    title: "Timberhill: Chronicle of a Restoration",
    author: "Sibylla Brown",
    uri: "/assets/books/timberhill.jpeg",
  },
  {
    title: "I'm Not Really a Waitress",
    author: "Suzi Weiss-Fischmann",
    uri: "/assets/books/waitress.jpeg",
  },
  {
    title: "The Whole Body Cure",
    author: "Dr. Corey W. Kirshner with Catherine Knepper",
    uri: "/assets/books/wholebody.jpeg",
  },
  {
    title: "Spirit Tech",
    author: "Wesley J. Wildman and Kate J. Stockly",
    uri: "/assets/books/spirit.jpeg",
  },
  {
    title: "Unblocked",
    author: "Alison McCauley",
    uri: "/assets/books/unblocked.jpeg",
  },
];

const PUBLISHERS = [
  { name: "Bloomsbury", path: "/assets/publishers/bloomsbury.png" },
  { name: "Countryman Press", path: "/assets/publishers/countryman.png" },
  { name: "Crown Press", path: "/assets/publishers/crown.png" },
  { name: "Hachette Books", path: "/assets/publishers/hachette.png" },
  { name: "HarperCollins", path: "/assets/publishers/harpercollins.png" },
  { name: "Harvard Business Review", path: "/assets/publishers/hbr.png" },
  { name: "O'Reilly", path: "/assets/publishers/oreilly.png" },
  { name: "OU Press", path: "/assets/publishers/ou.png" },
  { name: "Penguin Random House", path: "/assets/publishers/penguin.png" },
  { name: "Post Hill Press", path: "/assets/publishers/posthill.png" },
  { name: "Rodale", path: "/assets/publishers/rodale.png" },
  { name: "Schiffer Publishing", path: "/assets/publishers/schiffer.png" },
  { name: "Seal Press", path: "/assets/publishers/seal.png" },
  { name: "Simon & Schuster", path: "/assets/publishers/simon.png" },
  { name: "Sourcebooks", path: "/assets/publishers/sourcebooks.png" },
  { name: "Spiegel and Grau", path: "/assets/publishers/spiegel.png" },
  { name: "St. Martin's Press", path: "/assets/publishers/stmartin.png" },
];

export const Books = () => {
  return (
    <section id="books">
      <h2>
        Featured Books <em>&amp;</em> Publishers
      </h2>

      <h3>Books</h3>
      <books-wrapper>
        <ul>
          {BOOKS.map((_) => (
            <li class={"book-cover"}>
              <img
                alt={`${_.title} by ${_.author}`}
                decoding={"async"}
                loading={"lazy"}
                src={_.uri}
              />
              <span>
                <br />
                {_.title} by {_.author}
              </span>
            </li>
          ))}
        </ul>
      </books-wrapper>

      <h3>Publishers</h3>
      <publishers-wrapper>
        <ul>
          {/* First set of logos */}
          {PUBLISHERS.map((publisher, index) => (
            <li key={`first-${index}`}>
              <img src={publisher.path} alt={publisher.name} />
              <span>
                <br />
                {publisher.name}
              </span>
            </li>
          ))}
          {/* Identical second set for the loop */}
          {PUBLISHERS.map((publisher, index) => (
            <li key={`second-${index}`}>
              <img src={publisher.path} alt={publisher.name} />
              <span>
                <br />
                {publisher.name}
              </span>
            </li>
          ))}
        </ul>
      </publishers-wrapper>

      {/* <ul>
          {PUBLISHERS.map((_) => (
            <li>
              <img src={_.path} alt={`${_.name}`} />
              <span>
                <br />
                {_.name}
              </span>
            </li>
          ))}
        </ul> */}
    </section>
  );
};
