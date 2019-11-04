import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import Button from "@material-ui/core/Button"
const Product = ({ pageContext: { title,products } }) => {
  console.log("products", products)

const image = products.node.defaultProductVariant.images[0].asset.fluid.src
const decription = products.node.blurb.en
const price = products.node.defaultProductVariant.price
const quantity = products.node.defaultProductVariant.grams

  return (
    <Layout>
      <div className="container">
        <div className="row">
            <div className="col-md-6">
          <img className="prod-image" src={image}/>
          </div>
          <div className="col-md-6">
              <div className="prod-title">
              <h1>{title}</h1>
              </div>
              <div className="prod-description">
                  <p>Description: {decription}</p>
                  <p>Quantity: {quantity == null ? "NA" : quantity}</p>
                  <p>Price:${price}</p>
              </div>
              <div style={{paddingLeft:64,paddingTop:35}}>
              <Button
                style={{ background: "#ee6a02", color: "#ffff", fontSize: 15 }}
              >
                Add to Cart
              </Button>
              </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Product
