import React from 'react';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';

const Reviews = () => {
       const [reviews, setReviews] = useReviews();
       return (
              <div>
                     <h1 className='text-2xl antialiased flex justify-center text-sky-500 py-8'>this is current reviews page!</h1>
                     <div>
                            {
                                   reviews.map(review =><Review
                                          key={review.id}
                                          review={review}
                                   ></Review>)
                            }
                     </div>
              </div>
       );
};

export default Reviews;