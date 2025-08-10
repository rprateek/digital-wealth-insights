import React, { Children } from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";

const Blog = ({data}) => {
  return (
    //console.log(data.allFile.nodes),
    <div>
     <Layout pageHeading={"Blog"} pageTitle={"Blog"}>
        <p> Latest Blog Posts </p>
        <ul>    
            {data.allFile.nodes.map((node) => (
                <li key={node.name}> {node.name}            
                </li>
            ))}
        </ul>
     </Layout>
   </div>    
  );
}
export const query = graphql`
  query {   
    allFile(filter: {sourceInstanceName: {eq: "blog"}}) {
        nodes {
            name
        }
    }
  }`;

export default Blog;