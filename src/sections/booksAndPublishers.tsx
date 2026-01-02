const BOOKS = [
  {
    title: "The Adversity Paradox",
    author: "J. Barry Griswell and Bob Jennings",
    uri: "/assets/img/books/adversity.jpeg",
  },
  {
    title: "The Anxious Achiever",
    author: "Morra Aarons-Mele",
    uri: "/assets/img/books/anxious.jpeg",
  },
  {
    title: "More Than a Walk on the Beach",
    author: "Mary E. Kramer",
    uri: "/assets/img/books/beach.jpeg",
  },
  {
    title: "The Blue Box: Three Lives in Letters",
    author: "Sallie Bingham",
    uri: "/assets/img/books/bluebox.jpeg",
  },
  {
    title: "Burnout Immunity",
    author: "Kandi Wiens",
    uri: "/assets/img/books/burnout.jpeg",
  },
  {
    title: "Cloud Cuckoo Land",
    author: "Anthony Doerr",
    uri: "/assets/img/books/cloud.jpeg",
  },
  {
    title: "Do Your Best Coaching",
    author: "Julie Hess and Laura Daley",
    uri: "/assets/img/books/coaching.jpeg",
  },
  {
    title: "Consumption",
    author: "G S Johnston",
    uri: "/assets/img/books/consumption.jpeg",
  },
  {
    title: "The Countess",
    author: "Rebecca Johns",
    uri: "/assets/img/books/countess.jpeg",
  },
  {
    title: "Death in a Wine Dark Sea",
    author: "Lisa King",
    uri: "/assets/img/books/death.jpeg",
  },
  {
    title: "Design with Love: At Home in America",
    author: null,
    uri: "/assets/img/books/design.jpeg",
  },
  {
    title: "Under This Beautiful Dome",
    author: "Terry Mutchler",
    uri: "/assets/img/books/dome.jpeg",
  },
  {
    title: "What You Don't Know",
    author: "Cortnie Abercrombie",
    uri: "/assets/img/books/dontknow.jpeg",
  },
  {
    title: "Eat for Extraordinary Health & Healing",
    author: "The Editors of Rodale Books",
    uri: "/assets/img/books/eat.jpeg",
  },
  {
    title: "Fear and Faith in Paradise",
    author: "Phil Karber",
    uri: "/assets/img/books/fearfaith.jpeg",
  },
  {
    title: "The End of Fun",
    author: "Sean McGinty",
    uri: "/assets/img/books/fun.jpeg",
  },
  {
    title: "The Grammar of God",
    author: "Aviya Kushner",
    uri: "/assets/img/books/grammar.jpeg",
  },
  {
    title: "Heal Your Heart",
    author: "Michael Miller, MD with Catherine Knepper",
    uri: "/assets/img/books/heal.jpeg",
  },
  {
    title: "Lady Leader",
    author: "Mary Stier",
    uri: "/assets/img/books/leader.jpeg",
  },
  {
    title: "Life on Mars",
    author: "Lori McNulty",
    uri: "/assets/img/books/mars.jpeg",
  },
  {
    title: "The Memory of Us",
    author: "Camille Di Maio",
    uri: "/assets/img/books/memory.jpeg",
  },
  {
    title: "The Miscarriage Map",
    author: "Dr. Sunita Osborn",
    uri: "/assets/img/books/miscarriage.jpeg",
  },
  {
    title: "The Paris Architect",
    author: "Charles Belfoure",
    uri: "/assets/img/books/paris.jpeg",
  },
  {
    title: "The Real Life of the Parthenon",
    author: "Patricia Vigderman",
    uri: "/assets/img/books/parthenon.jpeg",
  },
  {
    title: "Queenbreaker",
    author: "Catherine McCarran",
    uri: "/assets/img/books/queenbreaker.jpeg",
  },
  {
    title: "Sky Train",
    author: "Canyon Sam",
    uri: "/assets/img/books/skytrain.jpeg",
  },
  {
    title: "Sleepwalker",
    author: "Kathleen Frazier",
    uri: "/assets/img/books/sleepwalker.jpeg",
  },
  {
    title: "Stop Breathe Believe",
    author: "Dianne Morris Jones with Catherine Knepper",
    uri: "/assets/img/books/stop.jpeg",
  },
  {
    title: "The Superhuman Mind",
    author: "Berit Brogaard and Kristian Marlow",
    uri: "/assets/img/books/superhuman.jpeg",
  },
  {
    title: "Timberhill: Chronicle of a Restoration",
    author: "Sibylla Brown",
    uri: "/assets/img/books/timberhill.jpeg",
  },
  {
    title: "I'm Not Really a Waitress",
    author: "Suzi Weiss-Fischmann",
    uri: "/assets/img/books/waitress.jpeg",
  },
  {
    title: "The Whole Body Cure",
    author: "Dr. Corey W. Kirshner with Catherine Knepper",
    uri: "/assets/img/books/wholebody.jpeg",
  },
  {
    title: "Spirit Tech",
    author: "Wesley J. Wildman and Kate J. Stockly",
    uri: "/assets/img/books/spirit.jpeg",
  },
  {
    title: "Unblocked",
    author: "Alison McCauley",
    uri: "/assets/img/books/unblocked.jpeg",
  },
];

const PUBLISHERS = [
  { name: "Bloomsbury", path: "/assets/img/publishers/bloomsbury.png" },
  { name: "Countryman Press", path: "/assets/img/publishers/countryman.png" },
  { name: "Crown Press", path: "/assets/img/publishers/crown.png" },
  { name: "Hachette Books", path: "/assets/img/publishers/hachette.png" },
  { name: "HarperCollins", path: "/assets/img/publishers/harpercollins.png" },
  { name: "Harvard Business Review", path: "/assets/img/publishers/hbr.png" },
  { name: "O'Reilly", path: "/assets/img/publishers/oreilly.png" },
  { name: "OU Press", path: "/assets/img/publishers/ou.png" },
  { name: "Penguin Random House", path: "/assets/img/publishers/penguin.png" },
  { name: "Post Hill Press", path: "/assets/img/publishers/posthill.png" },
  { name: "Rodale", path: "/assets/img/publishers/rodale.png" },
  { name: "Schiffer Publishing", path: "/assets/img/publishers/schiffer.png" },
  { name: "Seal Press", path: "/assets/img/publishers/seal.png" },
  { name: "Simon & Schuster", path: "/assets/img/publishers/simon.png" },
  { name: "Sourcebooks", path: "/assets/img/publishers/sourcebooks.png" },
  { name: "Spiegel and Grau", path: "/assets/img/publishers/spiegel.png" },
  { name: "St. Martin's Press", path: "/assets/img/publishers/stmartin.png" },
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
