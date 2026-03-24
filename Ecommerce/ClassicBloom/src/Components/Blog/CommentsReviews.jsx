import React from "react";

const CommentsReviews = () => {
  // ✅ Comment Data (you can later fetch from backend or API)
  const comments = [
    {
      id: 1,
      name: "John Doe",
      avatar: "/productData/avatar.jpg",
      message:
        "Absolutely loved this post! The tips on perfume layering were so helpful — I tried combining citrus and vanilla and it smells amazing.",
      date: "November 4, 2025",
    },
    {
      id: 2,
      name: "Sarah Ali",
      avatar: "/productData/avatar.jpg",
      message:
        "I never realized how important perfume storage is until now. Great insights — my collection will last much longer now!",
      date: "November 5, 2025",
    },
    {
      id: 3,
      name: "Michael Lee",
      avatar: "/productData/avatar.jpg",
      message:
        "Excellent read! I enjoy how detailed the blog was about understanding perfume notes — really helps in picking new fragrances.",
      date: "November 5, 2025",
    },
  ];

  return (
    <div className="pt-10 border-t border-gray-200">
      {/* Comments Section */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        {comments.length} Comments
      </h2>

      {comments.map((comment) => (
        <div
          key={comment.id}
          className="flex items-start gap-4 mb-6 border-gray-200 pb-4"
        >
          {/* Left: Avatar */}
          <figure className="w-14 h-14 rounded-full overflow-hidden border border-gray-300 flex-shrink-0">
            <img
              src={comment.avatar}
              alt={comment.name}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </figure>

          {/* Right: Content */}
          <div className="flex flex-col gap-1 w-full">
            <h3 className="font-semibold text-gray-800 text-sm">
              {comment.name}
            </h3>
            <p className="text-gray-600 tracking-wider leading-relaxed">
              {comment.message}
            </p>
            <span className="text-xs text-gray-400 mt-1 uppercase">
              {comment.date}
            </span>
          </div>
        </div>
      ))}

      {/* Add Review Form */}
      <div className='md:w-2/3 w-full'>
        <h2
          id="achievements-title"
          className="text-2xl   leading-snug text-gray-800"
        >
          Add Comment
        </h2>
        <p className=' text-sm'>Your email address will not be published. Required fields are marked *</p>

        <form action="" className=' py-10 md:space-y-10 space-y-7'>
        
          {/*     Name field */}

          <input type="text" placeholder='Full Name *' name='name' required className='outline-none border border-gray-300 focus:border-gray-500 transition-colors duration-200 px-2 py-3 w-full' />

          {/*     email field */}
          <input type="email" placeholder='Email *' name='email' required className='outline-none border border-gray-300 focus:border-gray-500 transition-colors duration-200 px-2 py-3 w-full' />

          {/*     message field */}

          <textarea name="message" id="message" placeholder='Message' className='outline-none border border-gray-300 focus:border-gray-500 transition-colors duration-200 px-2 py-3 w-full h-40' />
          
          <button
            className="relative z-30 px-8 py-2 border bg-transparent text-gray-900 hover:text-white font  mt-2
                         overflow-hidden transition-all duration-700 text-lg 
                         after:content-[''] after:absolute after:left-5 after:bottom-0 after:h-1 after:w-1 
                         after:bg-gray-900 after:rounded-md after:-z-10 after:translate-y-full 
                         after:transition-all after:duration-700 hover:after:scale-[300] cursor-pointer uppercase"
          >
            Post
          </button>

        </form>
      </div>
    </div>
  );
};

export default CommentsReviews;
