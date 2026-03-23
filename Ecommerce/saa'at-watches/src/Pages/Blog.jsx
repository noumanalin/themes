import React from 'react'
import BlogTech from '../Components/Blogs/BlogTech';
import PageBanner from '../Components/PageBanner';

const Blog = () => {
  return (
    <div>
      <PageBanner title="Blog" breadcrumb="Discover the stories, technology, and trends shaping the world of timepieces."/>
      <BlogTech />
    </div>
  )
}

export default Blog
