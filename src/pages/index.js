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
      width={150}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="Azure ML"
      style={{ marginBottom: `1.45rem` }}
    />
  
  
  <h1>Key learning resources</h1>
    <h2>Starting with AzureML</h2>
    <a href="https://github.com/Azure/MachineLearningNotebooks/">https://github.com/Azure/MachineLearningNotebooks</a><p> </p>
    <a href="https://github.com/MicrosoftLearning/mslearn-dp100/">https://github.com/MicrosoftLearning/mslearn-dp100</a><p></p>
    <h2>MLOps examplesL</h2>
    <a href="https://github.com/microsoft/MLOps/">https://github.com/microsoft/MLOps</a><p></p>
  
  
      </Layout>
)

export default IndexPage
