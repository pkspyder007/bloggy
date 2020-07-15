import React from 'react'
import './post.css';

import image from '../../images/hero1.jpg';

export default function Post() {
  return (
    <div className="post-container">
      <img src={image} alt="post featured image" className="post-image"/>
      <div className="post-title">Post Title</div>
      <div className="post-info">Author: Anonymous, Date: 19/07/2020</div>
      <div className="post-content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, magnam odio? Possimus maiores eligendi rerum explicabo architecto quas odit totam eaque aut nesciunt dolorum fuga facere praesentium tempore, ratione ipsam?
        Velit amet debitis obcaecati dignissimos quibusdam eius alias maiores eum, vitae pariatur. Similique explicabo sit tempora, aperiam, impedit nihil excepturi harum fugiat ab provident debitis distinctio ipsum consectetur iure. Dolore.
        Eius, delectus esse voluptatem adipisci harum ab. At, atque. Obcaecati incidunt ut accusamus! Aliquid aperiam, beatae, necessitatibus itaque mollitia explicabo placeat esse repellat porro fugiat vitae soluta quis. Incidunt, totam?
        Quod tempore voluptate commodi, porro sapiente quisquam cumque eius in et temporibus numquam eligendi debitis iusto, quam iure corrupti error mollitia enim aspernatur doloribus sunt minus, ipsa possimus. Ullam, ratione?
        Facere porro vero nesciunt nam suscipit facilis aliquam velit magnam atque iure eligendi, iusto nostrum quia voluptates consectetur deleniti magni possimus eveniet veniam aut voluptatem vitae est. Sit, deleniti exercitationem.
      </div>
    </div>
  )
}
