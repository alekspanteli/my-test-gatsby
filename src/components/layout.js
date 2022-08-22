import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import {
  container,
  heading,
  navLinks,
  navLinksText,
  siteTitle,
} from "./layout.module.scss"

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className={container}>
      <header className={siteTitle}>{data.site.siteMetadata.title}</header>
      <nav>
        <ul className={navLinks}>
          <li>
            <Link to="/" className={navLinksText}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className={navLinksText}>
              About
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
      <footer>
        <p>&copy; {data.site.siteMetadata.title}</p>
      </footer>
    </div>
  )
}

export default Layout