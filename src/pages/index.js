import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
  <StaticImage
      src="../images/azureml.png"
      width={50}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="Azure ML"
      style={{ marginBottom: `1.45rem` }}
    />
    
    <h2>Starting with AzureML</h2>
    <a href="https://github.com/Azure/MachineLearningNotebooks/">AzureML Python SDK notebooks repository</a><p> </p>
    <a href="https://github.com/MicrosoftLearning/mslearn-dp100/">Microsoft Learn DP-100</a><p></p>
    <a href="https://azure.github.io/azureml-cheatsheets/">AzureML cheatsheets/</a><p></p>
    
    <h2>MLOps</h2>
    <a href="https://github.com/microsoft/MLOps/">End to end MLOps</a><p></p>
  
  
      </Layout>
)

export default IndexPage
