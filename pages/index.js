import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import React from 'react'

export default function Home(props) {

  return (
    <div className={styles.container}>
      <h1>test</h1>
      {props.blogs.map(blog => (
        <React.Fragment key={blog.id}>
          <Link href="/blogs/[id]" as={`blogs/${blog.id}`}>
            <a>
              <h2>{blog.title}</h2>
            </a>
          </Link>
          {blog.tags.map(tag => (
            <React.Fragment key={tag.id}>
              <span>{tag.name}</span>
            </React.Fragment>
          ))}
        </React.Fragment>
      ))}
    </div>
  )
}

export const getStaticProps = async () => {
  const key = {
    headers: {'X-API-KEY': process.env.API_KEY}
  };
  const res = await fetch(`https://offiter.microcms.io/api/v1/blogs`, key);
  const data = await res.json();

  return {
    props: {
      blogs: data.contents,
    }
  }
};