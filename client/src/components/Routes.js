import React from "react"
import { Route } from "react-router-dom"
import Dashboard from "./Dashboard"
import AboutMe from "./AboutMe"
// Internal routes - only viewable if you are authenticated
export default props => {
    return (
        <>
            <Route path="/" component={Dashboard} />
            <Route path="/about" component={AboutMe} />
        </>
    )
}