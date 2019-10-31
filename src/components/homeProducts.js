import { Link ,graphql} from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Button from '@material-ui/core/Button';
import Card from "@material-ui/core/Card"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
    root: {
      padding: theme.spacing.unit,
      margin: theme.spacing.unit * 2,
      background: "fff",
      borderRadius: "2px",
      display: "inline-block",
      position: "relative",
      height:275,
      boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
      transition: "all 0.3s cubic-bezier(.25,.8,.25,1)",
  
      "&:hover": {
        boxShadow: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
      },
    },
  }))



const HomeProducts = ({ allSanityProduct }) => {
    console.log("alll",allSanityProduct)
    const classes = useStyles()
return(


<main className="cards">
<h1>Hot Deals</h1>
        <div className="row" style={{display:'flex',flexDirection:'row',flexWrap:'wrap',padding:29}}>
           
          {allSanityProduct.edges.map(({ node })=> (
            <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4" style={{width:200}}>
              <Card className={classes.root} raised>
                  <img src={node.defaultProductVariant.images[0].asset.fluid.src} style={{height:150,width: 250}}/>
                  <div className="row">
                      <div className="col-md-9">
              <h2><b>{node.title}</b></h2> 
              </div>
              <div className="col-md-3">
              <h2><b>${node.defaultProductVariant.price}</b></h2>
              </div> 
              </div>
              <Button style={{background:"#ee6a02",color:"#ffff",fontSize:10}}>Add to Cart</Button>
              </Card>
            </div>
          ))}
        </div>
  
    </main>

)
}

export default HomeProducts
