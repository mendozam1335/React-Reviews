import { useState } from "react";
import review from "./data";
import { BiSolidQuoteAltRight } from "react-icons/bi";
import { FaLessThan, FaGreaterThan } from "react-icons/fa6";

const App = () => {
  const [index, setIndex] = useState(0);
  const { name, job, text, image } = review[index];

  const prevReview = () => {
    if (index === 0) {
      setIndex(review.length - 1);
    } else {
      setIndex(index - 1);
    }
  };
  const nextReview = () => {
    index === review.length - 1 ? setIndex(0) : setIndex(index + 1);
  };

  const randReview = () => {
    const newIndex = Math.floor(Math.random() * review.length);
    setIndex(newIndex);
  };
  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img className="person-img" src={image} alt={name} />
          <span className="quote-icon">
            <BiSolidQuoteAltRight />
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <h5 className="job">{job}</h5>
        <p className="info">{text}</p>
        <div className="btn-container">
          <button className="prev-btn" onClick={prevReview}>
            <FaLessThan />
          </button>
          <button className="next-btn" onClick={nextReview}>
            <FaGreaterThan />
          </button>
        </div>
        <button className="btn" onClick={randReview}>
          Suprise Me
        </button>
      </article>
    </main>
  );
};
export default App;
