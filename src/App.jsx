import { useState } from "react";
import review from "./data";
import { BiSolidQuoteAltRight } from "react-icons/bi";
import { FaLessThan, FaGreaterThan } from "react-icons/fa6";

const App = () => {
  const [index, setIndex] = useState(0);

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
      <div className="review">
        <div className="img-container">
          <img className="person-img" src={review[index].image} alt="" />
          <BiSolidQuoteAltRight className="quote-icon" />
        </div>
        <h4 className="author">{review[index].name}</h4>
        <h5 className="job">{review[index].job}</h5>
        <p className="info">{review[index].text}</p>
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
      </div>
    </main>
  );
};
export default App;
