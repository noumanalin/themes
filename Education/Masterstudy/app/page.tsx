import Hero from "@/components/hero"
import Features from "@/components/features"
import GallerySection from "@/components/gallery-section"
import LimitlessSection from "@/components/limitless-section"
import CoursesSlider from "@/components/courses-slider"
import StatsSection from "@/components/stats-section"
import NewsletterSection from "@/components/newsletter-section"
import PopularCourses from "@/components/popular-courses"
import CTACards from "@/components/cta-cards"
import TestimonialSection from "@/components/testimonial-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <GallerySection />
      <LimitlessSection />
      <CoursesSlider />
      <StatsSection />
      <NewsletterSection />
      <PopularCourses />
      <CTACards />
      <TestimonialSection />
    </main>
  )
}
