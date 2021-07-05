import React from "react"
import Header from "./header"
import Footer from "./footer"

import "../styles/style.scss"
import * as layoutStyles from "./layout.module.scss"

const Layout = ({ pageTitle, children }) => {
    return (
        <div className={layoutStyles.container}>
            <div className={layoutStyles.content}>
              <Header />
              <title>{pageTitle}</title>

              <div className={layoutStyles.mainContent}>{children}</div>

            <Footer />
            </div>
        </div>
    )
}

export default Layout
