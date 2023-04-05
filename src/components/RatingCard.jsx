import '../styles/RatingCard.css';
import CardBg from './CardBg';
import { FaStar } from 'react-icons/fa';
import { useState } from 'react';

const RatingCard = ({ rating, onSelectRating, onShowThankYouCard }) => {
  const [selectedRatings, setSelectedRatings] = useState({
    oneStar: false,
    twoStars: false,
    threeStars: false,
    fourStars: false,
    fiveStars: false,
  });

  const handleSubmit = () => {
    if (!rating) return;
    onShowThankYouCard(true);
  };

  return (
    <div>
      <CardBg>
        <div className='star-img-container'>
          <FaStar className='main-star' />
        </div>
        <h1 className='rating-title'>How did we do?</h1>
        <p className='rating-text'>Please let us know how we did with your support request. All feedback is appreciated to improve our service!</p>

        <div className='rating-btns'>
          <button
            // name='oneStar'
            className={selectedRatings.oneStar ? 'rating-circle-btn active' : 'rating-circle-btn'}
            onClick={() => {
              setSelectedRatings({
                oneStar: true,
                twoStars: false,
                threeStars: false,
                fourStars: false,
                fiveStars: false,
              });
              {
                onSelectRating(1);
              }
            }}>
            1
          </button>
          <button
            // name='twoStars'
            className={selectedRatings.twoStars ? 'rating-circle-btn active' : 'rating-circle-btn'}
            onClick={() => {
              setSelectedRatings({
                oneStar: false,
                twoStars: true,
                threeStars: false,
                fourStars: false,
                fiveStars: false,
              });
              {
                onSelectRating(2);
              }
            }}>
            2
          </button>
          <button
            // name='threeStars'
            className={selectedRatings.threeStars ? 'rating-circle-btn active' : 'rating-circle-btn'}
            onClick={() => {
              setSelectedRatings({
                oneStar: false,
                twoStars: false,
                threeStars: true,
                fourStars: false,
                fiveStars: false,
              });
              {
                onSelectRating(3);
              }
            }}>
            3
          </button>
          <button
            // name='fourStars'
            className={selectedRatings.fourStars ? 'rating-circle-btn active' : 'rating-circle-btn'}
            onClick={() => {
              setSelectedRatings({
                oneStar: false,
                twoStars: false,
                threeStars: false,
                fourStars: true,
                fiveStars: false,
              });
              {
                onSelectRating(4);
              }
            }}>
            4
          </button>
          <button
            // name='fiveStars'
            className={selectedRatings.fiveStars ? 'rating-circle-btn active' : 'rating-circle-btn'}
            onClick={() => {
              setSelectedRatings({
                oneStar: false,
                twoStars: false,
                threeStars: false,
                fourStars: false,
                fiveStars: true,
              });
              {
                onSelectRating(5);
              }
            }}>
            5
          </button>
        </div>
        <button
          className='submit-btn'
          onClick={handleSubmit}>
          Submit
        </button>
      </CardBg>
    </div>
  );
};

export default RatingCard;
