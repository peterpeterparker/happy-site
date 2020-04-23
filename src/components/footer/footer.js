import React from "react"

import Img from "gatsby-image"
import { graphql, StaticQuery } from "gatsby"

import styles from "./footer.module.scss"

import Bubble from "../bubble/bubble"

class Footer extends React.Component {
  render() {
    return (
      <footer className={styles.footer}>
        <div>
          <Img fluid={this.props.data.happyBikeImage.childImageSharp.fluid} />
        </div>

        <Bubble
          animate={false}
          customStyle={{
            "--size": "44rem",
            "--background": "#75F064",
            "--bottom": "-58rem",
            "--left": "50%",
          }}
        ></Bubble>
      </footer>
    )
  }
}

export default () => (
  <StaticQuery
    query={graphql`
      query {
        happyBikeImage: file(relativePath: { eq: "happy-bike.png" }) {
          childImageSharp {
            fluid(maxWidth: 240) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <Footer data={data} />}
  />
)
