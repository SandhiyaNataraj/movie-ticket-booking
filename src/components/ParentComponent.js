import React from 'react'
import Rating from './Rating';

function ParentComponent() {
    const handleAddReview = (reviewData) => {
    console.log('Adding review:', reviewData);
  };

  return (
    <Rating
      id={1}
      name="Product Name"
      description="Product Description"
      reviews={[/* array of reviews */]}
      onAddReview={handleAddReview}
      />
  )
}
export default ParentComponent