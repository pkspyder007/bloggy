import React from 'react'
import { Tag, Divider } from 'antd';
import { Typography} from 'antd'
import BlogCard from '../components/blogcard'

const {Title} = Typography;

const posts = [
  {title: 'Stranger Things: The sound of the Upside Down', sub: 'The antsy bingers of Netflix will eagerly anticipate the digital release of the Survive soundtrack, out today.', image: 'https://images.unsplash.com/photo-1589433379200-445f47abff1c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'},
  {title: 'Lorem ipsum dolor sit amet.', sub: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis minus porro eum, dignissimos nemo amet beatae eos", image: 'https://images.unsplash.com/photo-1594896177517-a1426c18d022?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80'},
  {title: 'Stranger Things: The sound of the Upside Down', sub: 'The antsy bingers of Netflix will eagerly anticipate the digital release of the Survive soundtrack, out today.', image: 'https://images.unsplash.com/photo-1589433379200-445f47abff1c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'},
  {title: 'Lorem ipsum dolor sit amet.', sub: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis minus porro eum, dignissimos nemo amet beatae eos", image: 'https://images.unsplash.com/photo-1502185635613-0a5b2e78efea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'},
  {title: 'Stranger Things: The sound of the Upside Down', sub: 'The antsy bingers of Netflix will eagerly anticipate the digital release of the Survive soundtrack, out today.', image: 'https://images.unsplash.com/photo-1589433379200-445f47abff1c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'},
  {title: 'Lorem ipsum dolor sit amet.', sub: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis minus porro eum, dignissimos nemo amet beatae eos", image: 'https://images.unsplash.com/photo-1557343569-b1d5b655b7cb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'},
]

export default function Home() {
  return (
    <>
    <div className="container">
      {/* <div className="home">
        <h1>Welcome to Bloggy</h1>
      </div> */}

  <>
    <Divider orientation="center"><Typography.Title>Categories</Typography.Title></Divider>
    <Divider orientation="center">
    <div>
      <Tag color="magenta">React</Tag>
      <Tag color="red">Angular</Tag>
      <Tag color="volcano">Node</Tag>
      <Tag color="orange">ES6</Tag>
      <Tag color="gold">Vue</Tag>
      <Tag color="lime">Ember</Tag>
      <Tag color="green">JAvaScript</Tag>
      <Tag color="cyan">Latest</Tag>
      <Tag color="blue">Tech</Tag>
      <Tag color="geekblue">Awesome</Tag>
    </div>
    </Divider>
    </>
    <br/>
    <br/>
    <Typography.Title style={{textAlign:'center'}}>Recent Posts</Typography.Title>
        {/* <Title style={{textAlign:'center'}} type="secondary">Recent Posts</Title> */}
        <div className="recents">
          {posts.map((p,i) => (<div key={i}><BlogCard title={p.title} sub={p.sub} img={p.image} /></div>))}
        {/* <Button type="ghost">Load More ..</Button> */}
        </div>
        <Title style={{textAlign:'center'}} type="secondary">Featured Posts</Title>
        <div className="recents">
        {posts.map((p,i) => {
          return (i%2 !== 0) ? (<div key={i}><BlogCard title={p.title} sub={p.sub} img={p.image} /></div>): null;
        })}
        {/* <Button type="ghost">Load More ..</Button> */}
        </div>
        </div>
    </>
  )
}
