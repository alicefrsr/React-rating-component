import './App.css';
import { useState } from 'react';
import RatingCard from './components/RatingCard';
import ThankYouCard from './components/ThankYouCard';

function App() {
  const [showThankYouCard, setShowThankYouCard] = useState(false);
  const [rating, setRating] = useState(null);

  const handleRating = rating => {
    setRating(rating);
  };

  const handleShowCard = bool => {
    setShowThankYouCard(bool);
  };

  return (
    <main className='container'>
      {showThankYouCard ? (
        <ThankYouCard rating={rating} />
      ) : (
        <RatingCard
          rating={rating} // state as props
          // to move state from RatingCard (where the event the select rating happens) UP to parent, so we can pass it down to TYCard comp
          onSelectRating={handleRating}
          // to move state from RatingCard (where the --submit-- event is) UP to parent
          onShowThankYouCard={handleShowCard}
        />
      )}
    </main>
  );
}

export default App;
