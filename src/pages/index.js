import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default () => (
  <div style={{ color: `purple` }}>
    <Header headerText="Hello Gatsby!" />
    <p>What a world.</p>
    <img src="https://source.unsplash.com/random/400x200" alt="" />
    <h2><Link to="/about/">About</Link></h2>
    <h2><Link to="/contact/">Contact</Link></h2>
  </div>
)