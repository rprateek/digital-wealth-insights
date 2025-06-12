import * as React from 'react';
import { Link } from 'gatsby';
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"

const HomePage = () => {
  return (
    <Layout pageHeading={"Home Page"} pageTitle={"Digital Wealth Insights"}>
      <p>Your source for the latest in digital wealth management.</p>  
      <StaticImage
        //src="../images/digital-wealth-insights.jpg"
        src="https://images.unsplash.com/photo-1506645292803-579c17d4ba6a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Digital Wealth Insights"
        placeholder="blurred"
        layout="constrained"
        width={800}    />  
        <StaticImage
        src="../images/DWI_get_started.png"        
        alt="Digital Wealth Insights"
        loading="eager"
        />  
     </Layout>          
   
  );
}

export default HomePage;
