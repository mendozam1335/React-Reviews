import { useState } from "react";
import review from "./data";
import { BiSolidQuoteAltRight } from "react-icons/bi";
import { FaLessThan, FaGreaterThan } from "react-icons/fa6";

const App = () => {
  const [index, setIndex] = useState(0);
  const { name, job, text, image } = review[index];

  const checkNum = (number) => {
    if (number < 0) {
      return review.length - 1;
    }
    if (number > review.length - 1) {
      return 0;
    }
    return number;
  };
  const prevReview = () => {
    const number = index - 1;
    setIndex(checkNum(number));
  };
  const nextReview = () => {
    const number = index + 1;
    setIndex(checkNum(number));
  };

  const randReview = () => {
    let newIndex = Math.floor(Math.random() * review.length);
    if (newIndex === index) {
      newIndex = newIndex + 1;
    }

    setIndex(checkNum(newIndex));
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
