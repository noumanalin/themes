import type React from "react"
import { Globe, BookOpen, Award } from "lucide-react"

interface Feature {
  icon: React.ReactNode
  title: string
  description: string
}

const features: Feature[] = [
  {
    icon: <Globe className="w-8 h-8 text-blue-600" />,
    title: "Worldwide Trends",
    description: "Learn the latest industry trends and global best practices from expert instructors",
  },
  {
    icon: <BookOpen className="w-8 h-8 text-blue-600" />,
    title: "Complete Online Education",
    description: "Comprehensive learning paths covering all aspects of your professional development",
  },
  {
    icon: <Award className="w-8 h-8 text-blue-600" />,
    title: "Board Certified",
    description: "Earn recognized certifications upon course completion to boost your career",
  },
]

export default function Features() {
  return (
    <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-white border border-gray-200 rounded-2xl hover:shadow-lg transition-shadow"
            >
              <div className="mb-4 p-3 bg-blue-50 rounded-lg w-fit">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
