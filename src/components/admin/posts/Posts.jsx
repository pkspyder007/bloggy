import React from 'react'
import { Table, Tag, Space } from 'antd';

const columns = [
  {
    title: 'TItle',
    dataIndex: 'title',
    key: 'title',
    render: text => <a href="/test">{text}</a>,
  },
  {
    title: 'Author',
    dataIndex: 'author',
    key: 'author',
  },
  {
    title: 'Excerpt',
    dataIndex: 'excerpt',
    key: 'excerpt',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: tags => (
      <>
        {tags.map(tag => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <Space size="middle">
        <a href="/test">Verify {record.name}</a>
        <a href="/test">Delete</a>
      </Space>
    ),
  },
];

const data = [
  {
    key: '1',
    author: 'John Brown',
    title: 'Post title1',
    excerpt: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    author: 'Jim Green',
    title: 'Post Title 2',
    excerpt: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    author: 'Joe Black',
    title: 'Post title 3',
    excerpt: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
  {
    key: '1',
    author: 'John Brown',
    title: 'Post title1',
    excerpt: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    author: 'Jim Green',
    title: 'Post Title 2',
    excerpt: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    author: 'Joe Black',
    title: 'Post title 3',
    excerpt: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
  {
    key: '1',
    author: 'John Brown',
    title: 'Post title1',
    excerpt: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    author: 'Jim Green',
    title: 'Post Title 2',
    excerpt: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    author: 'Joe Black',
    title: 'Post title 3',
    excerpt: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },{
    key: '1',
    author: 'John Brown',
    title: 'Post title1',
    excerpt: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    author: 'Jim Green',
    title: 'Post Title 2',
    excerpt: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    author: 'Joe Black',
    title: 'Post title 3',
    excerpt: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];


function Posts() {
  return (
    <div>
      <Table columns={columns} dataSource={data} />
    </div>
  )
}


export default Posts;