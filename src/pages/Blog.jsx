import React from 'react'
import BlogCard from '../components/blogcard'

export default function Blog() {
  return (
    <>
    <h1 style={{textAlign:'center'}}>Blog Page</h1>
    <div className="blog-grid">
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
    </div>
    </>
  )
}
