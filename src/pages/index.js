import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Key learning resources</h1>
    <a href="https://github.com/Azure/MachineLearningNotebooks/">https://github.com/Azure/MachineLearningNotebooks/</a>  
    <p>https://github.com/MicrosoftLearning/ms-learn-dp100</p>
    <StaticImage
      src="../images/azureml.png"
      width={150}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="Azure ML"
      style={{ marginBottom: `1.45rem` }}
    />
      </Layout>
)

export default IndexPage
