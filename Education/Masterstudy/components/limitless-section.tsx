export default function LimitlessSection() {
  return (
    <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-100 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Image */}
          <div className="flex justify-center order-2 md:order-1">
            <img
              src="https://cdn.pixabay.com/photo/2024/01/29/22/47/ai-generated-8540912_1280.jpg"
              alt="Unlimited learning"
              className="w-full max-w-md rounded-2xl shadow-lg"
            />
          </div>

          {/* Right Content */}
          <div className="space-y-6 order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              Limitless learning, <span className="text-blue-600">more possibilities</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Unlock courses upon the opportunity for learning to take your skills to the next level, regardless of your
              schedule.
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition font-semibold">
              Explore Courses
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
