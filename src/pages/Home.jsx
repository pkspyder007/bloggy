import React from 'react'
import { Typography} from 'antd'
import BlogCard from '../components/blogcard'

const {Title} = Typography;
export default function Home() {
  return (
    <>
    <div className="container">
      <div className="home">
        <h1>Welcome to Bloggy</h1>
      </div>
        <Title style={{textAlign:'center'}} type="secondary">Recent Posts</Title>
        <div className="recents">
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        {/* <Button type="ghost">Load More ..</Button> */}
        </div>
        <Title style={{textAlign:'center'}} type="secondary">Featured Posts</Title>
        <div className="recents">
          <BlogCard />
          <BlogCard />
          <BlogCard />
        {/* <Button type="ghost">Load More ..</Button> */}
        </div>
        </div>
    </>
  )
}
