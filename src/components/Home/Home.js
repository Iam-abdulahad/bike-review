import React from 'react';
import { useNavigate } from 'react-router-dom';
import useReviews from '../../hooks/useReviews';
import Images from '../Images/ktm.jpg';
import Review from '../Review/Review';

const Home = () => {
       const [reviews, setReviews] = useReviews();
       const navigate = useNavigate();
       return (
              <div class="container mx-auto">
                     <div className='grid grid-cols-2 flex justify-between'>
                            <div className='mt-6 py-6 px-5'>
                                   <h1 className='text-7xl font-sans'>
                                          I do not need any weapon, <br /> I own a KTM RC✌
                                   </h1>
                                   <h4 className='my-8'>
                                          Happiness is the smell of a new car. Girlfriend must be HOT, Beer must be Chilled and Bike must be a KTM. Four wheels move the body, Two wheels move the soul. Faster, faster, faster, until the thrill of speed overcomes the fear of death.
                                   </h4>
                                   <a class="text-zinc-50 bg-sky-500 rounded-full px-8 my-8 py-4 mt-6" target="_blank" href="https://www.linkedin.com/in/iam-abdulahad/"> HIRE ME </a>
                            </div>
                            <div className='mt-6 py-6 px-5'>
                                   <img
                                          className='border rounded-lg'
                                          style={{ height: "500px" }}
                                          src={Images} alt="" />
                            </div>
                     </div>

                     <div className='reviews-container'>
                            <div className='text-2xl antialiased flex justify-center text-sky-500 py-8'>
                                   <h2>Reviews</h2>
                            </div>

                            <div>
                                   {
                                          reviews.slice(0, 3).map(review => <Review
                                                 key={review.id}
                                                 review={review}
                                          ></Review>)
                                   }
                            </div>
                     </div>

                     <div className=' flex justify-center'>
                            <button
                                   className=' flex justify-center text-zinc-50 bg-sky-500 rounded-full px-8 my-8 py-4 mt-6'
                                   onClick={() => navigate("/reviews")}
                            >See All Reviews</button>
                     </div>
              </div>

       );
};

export default Home;