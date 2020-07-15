import React from 'react'
import { Card, Button } from 'antd';
import './cards.css';
import { Link } from 'react-router-dom';
const { Meta } = Card;

export default function BlogCard() {
  return (
    <div className="blog-card">
    <Card
    hoverable
    style={{ width: 300 }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
    <br />
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, dolorem?
    <Link to="/blog/post1" ><Button type="primary"> Read More</Button></Link>
  </Card>
  </div>
  )
}
