import React from 'react';

const Review = ({review}) => {
       const {name, rating, text} =review;
       return (
              <div className='container mx-auto mt-6 py-6 px-5 border-solid border rounded-lg border-sky-500'>
                     <div className=''>
                      <div className=''>
                            <h2 className='text-xl'>{name}</h2> 
                            <h4>{rating}</h4>
                            <p>{text}</p>
                      </div>
                     </div>
                   
              </div>
       );
};

export default Review;
