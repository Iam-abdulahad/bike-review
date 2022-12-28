import React from 'react';

const Blog = () => {
       return (
              <div>
                     <h4 className='text-2xl antialiased flex justify-center text-sky-500 py-8'>Questions and Answers</h4>
                     <div className='container mx-auto'>
                            <div className='mt-6 py-6 px-5 border-solid border rounded-lg border-sky-500'>
                                   <h2 className='text-xl pb-5'>What is Context API?</h2>
                                   <p>
                                          The Context API helps share data between components which you can't easily share with props, for example, complex data objects. React Context API provides a way to send data like userId, auth, and theme data through the component tree without sending any props manually at every level. <br />
                                          Context API can solve many problems that modern applications face, related to state management, for example, props drilling. Many solutions can solve state management issues and props drilling, but they may increase your build size and compromise your app performance. Context API is a React built-in feature, so we don’t have to worry about performance overhead and library installing issues.

                                          The props drilling problem occurs when you pass a prop somewhere down the tree. When a project grows, data passing through props becomes chaotic, making the code more vulnerable and complex. To tackle this problem, we use Context API.
                                   </p>
                            </div>
                            <div className='mt-6 py-6 px-5 border-solid border rounded-lg border-sky-500'>
                                   <h2 className='text-xl pb-5'>What is sematic tags?</h2>
                                   <p>
                                          Semantic HTML tags are tags that define the meaning of the content they contain. For example, tags like 'header' ,  'article' , and 'footer' are semantic HTML tags. They clearly indicate the role of the content they contain. On the other hand, tags like 'div' and 'span' are typical examples of non-semantic HTML elements. They serve only as content holders but give no indication as to what type of content they contain or what role that content plays on the page. <br />
                                          Why Do I Need to Use Semantic HTML Tags? <br />
                                          Besides the obvious reason that semantic HTML tags are easier to read and understand—for example, by web developers reviewing the code—there are two more specific reasons why you should always use semantic tags.
                                   </p>
                            </div>

                     </div>
              </div>
       );
};

export default Blog;