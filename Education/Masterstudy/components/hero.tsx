export default function Hero() {
  return (
    <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Start Investing in <span className="text-blue-600">Yourself</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              With over 500 courses in everything you want to learn, it's all here on MasterStudy.
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition font-semibold">
              Start Learning
            </button>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <img
             src="https://media.istockphoto.com/id/1253686056/vector/education-online-student-girl-student-watching-virtual-class-on-computer-with-books-vector.jpg?s=2048x2048&w=is&k=20&c=u0R1wNqfG2RVieNFkURz6cscX2GC0_UsiXKQ8NJoHl4="
              alt="Student learning online"
              className="w-full max-w-md rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
