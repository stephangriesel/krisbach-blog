import React from 'react'
import { Link } from 'gatsby'

const PostListing = ({post}) => (
    <article>
        <h3>{post.frontmatter.title}</h3>
        <span>{post.frontmatter.date}</span>
        <p>{post.excerpt}</p>
        {/* <div 
        dangerouslySetInnerHTML={{
            __html: post.html
        }}
    />*/}

    </article>
);

export default PostListing;