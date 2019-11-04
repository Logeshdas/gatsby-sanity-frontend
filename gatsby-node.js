const path = require("path")

const slugGenerator = str => {
  const dummySlug = str
    .replace(/[^a-zA-Z]/g, " ")
    .split(" ")
    .join("-")
  const slug = dummySlug
    .replace(/-/g, " ")
    .split(" ")
    .filter(v => v !== "")
    .join("-")
  return String(slug).toLowerCase()
}

const unitWeightSlugGenerator = row => {

  if ( row.unitWeight === "N/A" || row.unitWeight === "") {
    return ""
  }

  return `-${row.unitWeight ? row.unitWeight.trim() : "g"}` 
}


exports.createPages = ({ graphql, actions: { createPage } }) => {
   
    return new Promise(resolve => {
      graphql(`
      query MyQuery {
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
              grams
            }
            blurb {
              en
            }
            }
          }
        }
      }
      `).then(result => {
        if (result.errors) {
          console.log("------------Build Faild-------------")
          console.log(result.errors)
          console.log("------------------------------------")
          process.exit()
        }
  
        const products = result.data.allSanityProduct.edges
  
        products.forEach(item => {
            
          const slug = slugGenerator(item.node.title)
          createPage({
            path: slug,
            component: path.resolve("./src/templates/product.js"),
            context: {
              title: item.node.title,
              products:item
            },
          })
  
        })
  
        resolve()
      })
    })
  }
  
  exports.onCreateWebpackConfig = ({ stage, actions }) => {
    if (stage === "build-html") {
      actions.setWebpackConfig({
        module: {
          rules: [
            {
              test: /cookieconsent/,
              use: "null-loader",
            },
          ],
        },
      })
    }
  }