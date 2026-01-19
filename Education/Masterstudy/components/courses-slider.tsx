"use client"

import { useState } from "react"
import CourseCard from "./course-card"
import { ChevronLeft, ChevronRight } from "lucide-react"

const courses = [
  {
    id: 1,
    title: "Complete Web Development",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=250&fit=crop",
    price: 99.99,
    rating: 4.8,
    students: 2543,
  },
  {
    id: 2,
    title: "UI/UX Design Masterclass",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop",
    price: 79.99,
    rating: 4.9,
    students: 1842,
  },
  {
    id: 3,
    title: "Mobile App Development",
    image: "https://media.istockphoto.com/id/1054541696/vector/online-product-presentation-with-project-team.jpg?s=2048x2048&w=is&k=20&c=FRLGUAa9r0IeOlig2r_mql_dAhQyWnHARtW1gmsE-iQ=",
    price: 89.99,
    rating: 4.7,
    students: 3102,
  },
  {
    id: 4,
    title: "Digital Marketing Pro",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=250&fit=crop",
    price: 69.99,
    rating: 4.6,
    students: 2890,
  },
  {
    id: 5,
    title: "Data Science Fundamentals",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop",
    price: 109.99,
    rating: 4.9,
    students: 4521,
  },
]

export default function CoursesSlider() {
  const [scrollPosition, setScrollPosition] = useState(0)

  const scroll = (direction: "left" | "right") => {
    const container = document.getElementById("courses-container")
    if (container) {
      const scrollAmount = 320
      const newPosition = direction === "left" ? scrollPosition - scrollAmount : scrollPosition + scrollAmount
      container.scrollLeft = newPosition
      setScrollPosition(newPosition)
    }
  }

  return (
    <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Recent Courses</h2>
          <div className="flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div
          id="courses-container"
          className="flex overflow-x-auto gap-6 pb-2 scroll-smooth"
          style={{ scrollBehavior: "smooth" }}
        >
          {courses.map((course) => (
            <div key={course.id} className="flex-shrink-0 w-full sm:w-80">
              <CourseCard {...course} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
