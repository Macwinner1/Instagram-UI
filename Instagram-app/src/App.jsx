import React from "react"
import Nav from "./component/Nav"
import UserBio from "./component/UserBio"
import ReelSection from "./component/ReelSection"

function App() {

  return (
    <>
    <Nav />
    <div className="main">
    <UserBio />
    <ReelSection/>
    </div>
    </>
  )
}

export default App
