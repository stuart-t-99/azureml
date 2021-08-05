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
      width={75}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="Azure ML"
      style={{ marginBottom: `1.45rem` }}
    />
  
  
  <h1>Key learning resources</h1>
    <h2>Starting with AzureML</h2>
    <a href="https://github.com/Azure/MachineLearningNotebooks/">ttps://github.com/Azure/MachineLearningNotebooks</a><p> </p>
    <a href="https://github.com/MicrosoftLearning/mslearn-dp100/">ttps://github.com/MicrosoftLearning/mslearn-dp100</a><p></p>
    <a href="https://azure.github.io/azureml-cheatsheets/">s://azure.github.io/azureml-cheatsheets/</a><p></p>
    <h2>MLOps examples</h2>
    <a href="https://github.com/microsoft/MLOps/">https://github.com/microsoft/MLOps</a><p></p>
  
  
      </Layout>
)

export default IndexPage
