import CourseCard from "./course-card"

const popularCourses = [
  {
    id: 1,
    title: "Advanced React Patterns",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=250&fit=crop",
    price: 129.99,
    rating: 4.9,
    students: 5234,
  },
  {
    id: 2,
    title: "Node.js Backend Mastery",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop",
    price: 119.99,
    rating: 4.8,
    students: 4123,
  },
  {
    id: 3,
    title: "TypeScript Pro Guide",
    image: "/ts.png",
    price: 99.99,
    rating: 4.7,
    students: 3456,
  },
  {
    id: 4,
    title: "Cloud Architecture Basics",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=250&fit=crop",
    price: 139.99,
    rating: 4.9,
    students: 2987,
  },
]

export default function PopularCourses() {
  return (
    <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Popular Courses</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularCourses.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>

        <div className="flex gap-2 justify-center mt-8">
          <button className="w-3 h-3 bg-blue-600 rounded-full" />
          <button className="w-3 h-3 bg-gray-300 rounded-full hover:bg-blue-600 transition-colors" />
        </div>
      </div>
    </section>
  )
}
