import BOOKS from "./books";
import PUBLISHERS from "./publishers";

export const Books = () => {
  return (
    <section id="books" aria-labelledby="books-heading">
      <section-header>
        <h2 id="books-heading">
          Featured Books <em>&amp;</em> Publishers
        </h2>
      </section-header>

      <h3 id="books-list-heading">Books</h3>

      <books-wrapper aria-labelledby="books-list-heading">
        <ul role="list">
          {BOOKS.map((_) => (
            <li key={_.title} class={"book-cover"}>
              <a href={_.uri} title={`Buy ${_.title} by ${_.author} online`}>
                <img
                  alt={_.author ? `${_.title} by ${_.author}` : _.title}
                  decoding={"async"}
                  loading={"lazy"}
                  src={_.cover}
                />
              </a>
              <span>
                <br />
                <a href={_.uri} title={`Buy ${_.title} by ${_.author} online`}>
                  {_.title} by {_.author}
                </a>
              </span>
            </li>
          ))}
        </ul>
      </books-wrapper>

      <h3 id="publishers-heading">Publishers</h3>
      <publishers-wrapper aria-labelledby="publishers-heading">
        <ul role="list">
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
