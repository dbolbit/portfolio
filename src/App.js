import React, {useEffect, useRef} from "react"
import Home from "./routes/Home"
import Header from "./components/Header/Header"
import Container, {Separator} from "./components/Container"
import Stack from "./routes/Stack"
import Portfolio from "./routes/Portfolio"
import Footer from "./components/Footer/Footer"


function App() {

  return (
    <>
      <Header/>
      <Container>
        <Home/>
      </Container>
      <Separator/>
      <Container
        style={{background: 'radial-gradient(circle farthest-corner at -75% 100%, black,var(--main-bg-color))'}}>
        <Stack/>
      </Container>
      <Separator/>
      <Container
        style={{background: 'radial-gradient(circle farthest-corner at -75% 100%,var(--main-bg-color), black)'}}>
        <Portfolio/>
      </Container>
      <Separator/>
      <Footer/>
    </>
  )
}

export default App
