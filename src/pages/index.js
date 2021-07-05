import React from 'react'
import { Link } from 'gatsby'
import { graphql } from "gatsby"
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const index = ({data}) => {
    const { title, description } = data.site.siteMetadata
  return (
    <Layout pageTitle="Index">

            <h1>{title}</h1>
            <p>{description}</p>
        <img alt="Cute dog" src={data.image.publicURL} />

      <p>If you try to make some changes to this file, the server that is watching all the changes in our directory will update the website automatically. How neat!</p>

        <StaticImage
            alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
            src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
        />
        <StaticImage
            alt="Gatsby"
            src="../images/gatsby.png"
        />
    </Layout>)
}

export default index
export const pageQuery = graphql`
  query MetadataQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    image: file(base: { eq: "cute-dog.jpg" }) {
      publicURL
    }
  }
`