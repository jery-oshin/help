import React from 'react';

import { Link, graphql, useStaticQuery } from 'gatsby';
//useStaticQuery allows us query our GraphQL API
import Layout from '../components/layout';

import blogStyles from './blog.module.scss';

const BlogPage = () =>{

    const data = useStaticQuery(graphql`

        query {
            allContentfulBlogPost (
            sort: {
                fields: publishedDate,
                order: ASC
            }
            ) {
            edges {
                node {
                title
                slug
                publishedDate (formatString:"MMM Do, YYYY")
                }
            }
            }
        }

    `)

    //console.log(data);

    return(
        <Layout>
            <h1>Blog</h1>
            <ol className={blogStyles.posts}>
                {data.allContentfulBlogPost.edges.map( (edge)=> {
                    return (
                        <li className={blogStyles.post}>
                            <Link to={`/blog/${edge.node.slug}`}>
                                <h2>  {edge.node.title}</h2>
                                <p> {edge.node.publishedDate}</p>
                            </Link>
                        </li>
                    )
                })}
            </ol>
        </Layout>
    )
}
export default BlogPage