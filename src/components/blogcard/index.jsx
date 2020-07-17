import React from 'react'
import './cards.css';
import { Link } from 'react-router-dom';

export default function BlogCard() {
  return (
  <div className="example-2 card">
    <div className="wrapper">
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
          <h1 className="title"><Link to="/blog/post1">Stranger Things: The sound of the Upside Down</Link></h1>
          <p className="text">The antsy bingers of Netflix will eagerly anticipate the digital release of the Survive soundtrack, out today.</p>
          <Link to="/blog/post1" className="button">Read more</Link>
        </div>
      </div>
    </div>
  </div>
  )
};



