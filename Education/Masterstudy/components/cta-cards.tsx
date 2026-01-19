import { Smartphone, Users } from "lucide-react"

const cards = [
  {
    icon: <Smartphone className="w-8 h-8 text-blue-600" />,
    title: "Become an Instructor",
    description: "Share your expertise and earn money by creating online courses",
  },
  {
    icon: <Users className="w-8 h-8 text-blue-600" />,
    title: "Corporate Training",
    description: "Upskill your team with our comprehensive training programs",
  },
]

export default function CTACards() {
  return (
    <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="p-8 bg-white rounded-2xl border border-gray-200 flex flex-col items-center text-center space-y-4 hover:shadow-lg transition-shadow"
            >
              <div className="p-4 bg-blue-50 rounded-lg">{card.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900">{card.title}</h3>
              <p className="text-gray-600 leading-relaxed">{card.description}</p>
              <button className="mt-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition font-semibold">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
