import React, { useState } from 'react';


const Rating = () => {
  const [rate, setRate] = useState(0);
  const [user, setUser] = useState('');
  const [review, setReview] = useState('');
  const [reviews, setReviews] = useState([]);

  const submitRate = () => {
    if (rate !== 0 && user !== '' && review !== '') {
      const newReview = {
        user,
        rate,
        review,
      };

      setReviews([...reviews, newReview]);

      setUser('');
      setReview('');
      setRate(0);
    }
  };

  const startRating = (selectedRate) => {
    setRate(selectedRate);
  };

  return (
    <div>
      <div className='rating_text'>
        <h2>Rating:</h2>
        <div>
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              className='star'
              key={star}
              onClick={() => startRating(star)}
              style={{ cursor: 'pointer', color: star <= rate ? 'yellow' : 'black' }}
            >
              ★
            </span>
          ))}
        </div>
      </div>

      <div className="user">
        <label>User: </label>
        <input type="text" value={user} onChange={(e) => setUser(e.target.value)} />
      </div>

      <div className="user">
        <label>Review: </label>
        <textarea value={review} onChange={(e) => setReview(e.target.value)} />
      </div>

      <button className='submit-button' onClick={submitRate}>Submit Review</button>

      <div className='reviews'>
        <h3>User Reviews:</h3>
        {reviews.map((r, index) => (
          <div className='review-box' key={index}>
            <strong>User:</strong> {r.user}, <strong>Rating:</strong> {r.rate}, <strong>Review:</strong> {r.review}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rating;