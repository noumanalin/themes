import { Star, Users } from "lucide-react"

interface CourseCardProps {
  title: string
  image: string
  price: number
  rating: number
  students: number
}

export default function CourseCard({ title, image, price, rating, students }: CourseCardProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
      <div className="relative h-48 overflow-hidden bg-gray-200">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <h3 className="font-bold text-gray-900 mb-2 line-clamp-2">{title}</h3>
        <div className="flex items-center gap-1 mb-3">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={14}
                className={i < Math.floor(rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600 ml-1">({rating})</span>
        </div>
        <div className="flex items-center gap-1 mb-4 text-sm text-gray-600">
          <Users size={16} />
          <span>{students.toLocaleString()} students</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-blue-600">${price}</span>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
            Enroll
          </button>
        </div>
      </div>
    </div>
  )
}
