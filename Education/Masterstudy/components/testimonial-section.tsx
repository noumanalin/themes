export default function TestimonialSection() {
  return (
    <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Come as you are</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              Whether you're just starting out or already an expert, MasterStudy has something for everyone. Our diverse
              course catalog and flexible learning paths ensure you can find exactly what you need to succeed.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              Join thousands of learners who have transformed their careers and lives through quality education.
            </p>
            <div>
              <p className="font-bold text-gray-900">Sarah Johnson</p>
              <p className="text-sm text-gray-600">Career Manager at Tech Corp</p>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=600&fit=crop"
              alt="Testimonial"
              className="w-full max-w-sm rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
