import React, { Children } from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import MDXrender from "gatsby-plugin-mdx";


const Blog = ({data, children}) => {
  return (
    
    <div>
     <Layout pageHeading={"Blog"} pageTitle={"Blog"}>
        <p>Welcome to our blog! Here you will find the latest insights
           and updates in digital wealth management.</p>
        <p>Check out our latest posts below:</p> 
            {data.allMdx.nodes.map((node) => (
                <article key={node.id}> 
                <h2>{node.frontmatter.title}</h2>
                <p>{node.frontmatter.date}</p>     
                <p>{node.body} </p>                    
                <hr />
                </article>
                
            ))}
        
     </Layout>
   </div>    
  );
}
export const query = graphql`
  query {
    allMdx {
      nodes {
        frontmatter {
          title
          date(formatString: "dddd MMM Do YYYY")
        }
      excerpt(pruneLength: 50)
      body
      id
    }
  }
}`;

export default Blog;