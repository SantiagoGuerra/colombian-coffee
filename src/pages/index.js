import React from "react"
import { Link } from "gatsby"

import SEO from "../layouts/seo"

const IndexPage = () => (
    <div>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
    </div>
    </div>
)

export default IndexPage
