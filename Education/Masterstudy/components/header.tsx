"use client"

import { useState } from "react"
import { Menu, X, Search, Heart, Globe, ChevronDown } from "lucide-react"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name)
  }

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      {/* Top Navigation Bar */}
      <div className="hidden md:flex justify-between items-center px-6 py-2 text-sm text-gray-600 border-b border-gray-100">
        <div className="flex items-center gap-2 hover:text-gray-900 cursor-pointer">
          <Globe size={16} />
          <span>English</span>
          <ChevronDown size={14} />
        </div>
        <nav className="flex items-center gap-8">
          <a href="#" className="hover:text-gray-900 transition">
            Courses
          </a>
          <a href="#" className="hover:text-gray-900 transition">
            Course Formats
          </a>
          <a href="#" className="hover:text-gray-900 transition">
            Pages
          </a>
          <a href="#" className="relative hover:text-gray-900 transition">
            Add Courses
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded">HOT</span>
          </a>
          <a href="#" className="hover:text-gray-900 transition">
            Memberships
          </a>
          <a href="#" className="hover:text-gray-900 transition">
            Demos
          </a>
        </nav>
        <div className="flex items-center gap-4 text-gray-600">
          <a href="#" className="hover:text-gray-900 transition">
            X
          </a>
          <a href="#" className="hover:text-gray-900 transition">
            📷
          </a>
          <a href="#" className="hover:text-gray-900 transition">
            Bē
          </a>
        </div>
      </div>

      {/* Main Header */}
      <div className="flex justify-between items-center px-4 md:px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-2 font-bold text-xl md:text-2xl">
          <div className="w-10 h-10 bg-red-500 text-white flex items-center justify-center rounded font-bold text-sm">
            MS
          </div>
          <span className="hidden sm:inline">
            <span className="text-red-500">MASTER</span>
            <span className="text-gray-900">STUDY</span>
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {/* Category Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("category")}
              className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded hover:bg-gray-50 transition"
            >
              <Menu size={20} />
              <span className="text-sm font-semibold">CATEGORY</span>
              <ChevronDown
                size={16}
                className={`transition-transform ${openDropdown === "category" ? "rotate-180" : ""}`}
              />
            </button>
            {openDropdown === "category" && (
              <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded shadow-lg min-w-max z-10">
                <a href="#" className="block px-4 py-2 hover:bg-blue-50 text-gray-700 transition">
                  Development
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-blue-50 text-gray-700 transition">
                  Business
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-blue-50 text-gray-700 transition">
                  Design
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-blue-50 text-gray-700 transition">
                  Marketing
                </a>
              </div>
            )}
          </div>

          {/* Search Bar */}
          <div className="flex items-center border border-gray-300 rounded bg-gray-50">
            <input
              type="text"
              placeholder="Search courses"
              className="px-4 py-2 bg-transparent outline-none w-48 text-sm"
            />
            <button className="bg-blue-600 text-white px-4 py-2 hover:bg-blue-700 transition">
              <Search size={20} />
            </button>
          </div>
        </div>

        {/* Right Side Actions */}
        <div className="hidden md:flex items-center gap-4">
          {/* Become Instructor Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("instructor")}
              className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition text-sm font-medium"
            >
              <span>👤</span>
              <span>Become Instructor</span>
              <ChevronDown size={14} />
            </button>
            {openDropdown === "instructor" && (
              <div className="absolute top-full right-0 mt-2 bg-white border border-gray-200 rounded shadow-lg min-w-max z-10">
                <a href="#" className="block px-4 py-2 hover:bg-blue-50 text-gray-700 transition">
                  Teach with Us
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-blue-50 text-gray-700 transition">
                  Guidelines
                </a>
              </div>
            )}
          </div>

          {/* For Enterprise Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("enterprise")}
              className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition text-sm font-medium"
            >
              <span>📋</span>
              <span>For Enterprise</span>
              <ChevronDown size={14} />
            </button>
            {openDropdown === "enterprise" && (
              <div className="absolute top-full right-0 mt-2 bg-white border border-gray-200 rounded shadow-lg min-w-max z-10">
                <a href="#" className="block px-4 py-2 hover:bg-blue-50 text-gray-700 transition">
                  Enterprise Plans
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-blue-50 text-gray-700 transition">
                  Contact Sales
                </a>
              </div>
            )}
          </div>

          <a href="#" className="text-blue-600 hover:text-blue-700 font-semibold text-sm">
            Log in
          </a>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition font-semibold text-sm">
            SIGN UP
          </button>
          <button className="text-gray-400 hover:text-red-500 transition">
            <Heart size={24} />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-gray-700">
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white p-4">
          <nav className="flex flex-col gap-4">
            <a href="#" className="text-gray-700 hover:text-blue-600 transition">
              Courses
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition">
              Course Formats
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition">
              Pages
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition">
              Add Courses
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition">
              Memberships
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition">
              Become Instructor
            </a>
            <a href="#" className="text-blue-600 font-semibold hover:text-blue-700 transition">
              Log in
            </a>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 w-full font-semibold">
              SIGN UP
            </button>
          </nav>
        </div>
      )}
    </header>
  )
}
