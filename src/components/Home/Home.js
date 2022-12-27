import React from 'react';
import useReviews from '../../hooks/useReviews';
import Images from '../Images/ktm.jpg';

const Home = () => {
       const [reviews, setReviews]= useReviews([]);
       return (
              <div class="container mx-auto">
                     <div className='grid grid-cols-2 flex justify-between'>
                            <div className=''>
                                   <h1 className='text-7xl font-sans'>
                                          I do not need any weapon, <br /> I own a KTM RC✌
                                   </h1>
                                   <h4>
                                   Happiness is the smell of a new car. Girlfriend must be HOT, Beer must be Chilled and Bike must be a KTM. Four wheels move the body, Two wheels move the soul. Faster, faster, faster, until the thrill of speed overcomes the fear of death.
                                   </h4>
                                   <a class="text-zinc-50 bg-sky-500 rounded-full px-8 py-4 mt-6" target="_blank" href="https://www.linkedin.com/in/iam-abdulahad/"> HIRE ME </a>
                            </div>
                            <div>
                                   <img src={Images} alt="" />
                            </div>
                     </div>

                     <div className='reviews-container'>
                     </div>
              </div>
              
       );
};

export default Home;