import { Mail } from "lucide-react"

export default function NewsletterSection() {
  return (
    <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-teal-400">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Subscribe and Supercharge Your Skills</h2>
        <p className="text-white/80 mb-8 text-lg">
          Get the latest courses, tips, and industry insights delivered to your inbox.
        </p>

        <form className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
          <div className="flex-1 flex items-center gap-2 px-4 py-3 bg-white rounded-lg">
            <Mail size={20} className="text-gray-500" />
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 outline-none bg-transparent text-gray-900 placeholder-gray-500"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-semibold"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  )
}
