import React from "react"
import { Link, graphql } from "gatsby"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"
import Layout from "../components/layout"
import "../components/style.css"
import SEO from "../components/seo"
import "../components/carousel.css"
import HomeProducts from "../components/homeProducts"
import image1 from "../images/image1.jpg"
import image2 from "../images/image2.jpg"
import image3 from "../images/image3.png"


export const query = graphql`
  {
    allSanityProduct {
      edges {
        node {
          title
          defaultProductVariant {
            images {
              asset {
                fluid {
                  src
                }
              }
            }
            price
          }
        }
      }
    }
  }
`

const carouselImages = [image2, image1, image3]

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />

    <section>
      <Carousel
        emulateTouch
        autoPlay
        infiniteLoop
        showStatus={false}
        showThumbs={false}
      >
        {carouselImages.map(images => (
          <div>
            <img src={images} />
          </div>
        ))}
      </Carousel>
    </section>

<HomeProducts allSanityProduct={data.allSanityProduct}/>


  </Layout>
)

export default IndexPage
