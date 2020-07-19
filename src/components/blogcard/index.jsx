import React from 'react'
import './cards.css';
import { Link } from 'react-router-dom';

export default function BlogCard({title, sub, img}) {
  return (
  <div className="example-2 card">
    <div className="wrapper" style={{background: `url(${img}) 20% 1%/cover no-repeat`}}>
      <div className="header">
        <div className="date">
          <span className="day">12</span>
          <span className="month">Aug</span>
          <span className="year">2016</span>
        </div>
        <ul className="menu-content">
          <li>
            <Link to="/blog/post1" className="fa fa-bookmark-o"></Link>
          </li>
          <li><Link to="/blog/post1" className="fa fa-heart-o"><span>18</span></Link></li>
          <li><Link to="/blog/post1" className="fa fa-comment-o"><span>3</span></Link></li>
        </ul>
      </div>
      <div className="data">
        <div className="content">
          <span className="author">Jane Doe</span>
          <h1 className="title"><Link to="/blog/post1">{title}</Link></h1>
          <p className="text">{sub}</p>
          <Link to="/blog/post1" className="button">Read more</Link>
        </div>
      </div>
    </div>
  </div>
  )
};



