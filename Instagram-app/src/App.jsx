import React from "react"
import Nav from "./component/Nav"
import UserBio from "./component/UserBio"
import ReelSection from "./component/ReelSection"
import Post from "./component/Post"
import Javascript from "./component/Javascript"

function App() {

  return (
    <>
    <Nav />
    <div className="main">
    <UserBio />
    <ReelSection />
    <Post />
    </div>
    <Javascript/>
    </>
  )
}

export default App
