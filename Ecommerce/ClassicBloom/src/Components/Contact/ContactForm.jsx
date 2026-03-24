import React from 'react'

const ContactForm = () => {
  return (
      <section className=' sectionlayout py-10 flex md:flex-row flex-col items-center justify-between md:gap-20'>
          <div className='md:w-1/2 w-full'>
              <h2
                  id="achievements-title"
                  className="text-2xl md:text-4xl uppercase  leading-snug text-gray-800"
              >
                  send message
              </h2>
              <p className=' text-sm'>Your email address will not be published. Required fields are marked *</p>
              
              <form action="" className=' py-10 md:space-y-10 space-y-7'>
              
                  <div className=' flex md:flex-row flex-col items-center justify-between md:gap-10 gap-7'>
                  
                      {/*     Name field */}
                      
                      <input type="text" placeholder='Full Name *' name='name' required className='outline-none border border-gray-300 focus:border-gray-500 transition-colors duration-200 px-2 py-3 w-full' />
                      
                      {/*     email field */}
                      <input type="email" placeholder='Email *' name='email' required className='outline-none border border-gray-300 focus:border-gray-500 transition-colors duration-200 px-2 py-3 w-full' />
                  </div>   
                  
                  {/*     Subject field */}
                  
                  <input type="text" placeholder='Subject' name='name' className='outline-none border border-gray-300 focus:border-gray-500 transition-colors duration-200 px-2 py-3 w-full' />
                  
                  {/*     message field */}

                  <textarea name="message" id="message" placeholder='Message' className='outline-none border border-gray-300 focus:border-gray-500 transition-colors duration-200 px-2 py-3 w-full h-40'/>
                
                  <button
                      className="relative z-30 px-8 py-2 border bg-transparent text-gray-900 hover:text-white font  mt-2
                         overflow-hidden transition-all duration-700 text-lg 
                         after:content-[''] after:absolute after:left-5 after:bottom-0 after:h-1 after:w-1 
                         after:bg-gray-900 after:rounded-md after:-z-10 after:translate-y-full 
                         after:transition-all after:duration-700 hover:after:scale-[300] cursor-pointer uppercase"
                  >
                      Send
                  </button>
                  
              </form>
          </div>
          
          
          <div className=' md:w-1/2 w-full'>
              <img src="/about/banner.png" alt="" className='' />
          </div>
      </section>
  )
}

export default ContactForm
