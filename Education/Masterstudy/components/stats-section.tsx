export default function StatsSection() {
  const stats = [
    { number: "2000", label: "Courses", icon: "📚" },
    { number: "950", label: "Instructors", icon: "👨‍🏫" },
    { number: "1600", label: "Hours Total", icon: "⏱️" },
    { number: "150", label: "Countries", icon: "🌍" },
  ]

  return (
    <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-indigo-600">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">We are Proud</h2>
        <p className="text-blue-100 mb-12 text-lg">Trusted by millions of learners worldwide</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl mb-2">{stat.icon}</div>
              <p className="text-4xl md:text-5xl font-bold text-white">{stat.number}</p>
              <p className="text-blue-100 mt-2 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
