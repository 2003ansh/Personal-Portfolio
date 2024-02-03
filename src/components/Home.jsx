import React from 'react'
import Banner from './pages/Banner'
import { Skills } from './pages/Skills'
import Projects from './pages/Projects'
import Contact from './pages/Contacts'
import { Tech_stack } from './pages/Tech_stack'
// import { Footer } from './Footer'

export default function Home() {
  return (
    <>
    <Banner></Banner>
    <Skills></Skills>
    <Tech_stack></Tech_stack>
    <Projects></Projects>
    <Contact></Contact>
    {/* <Footer></Footer> */}
      
    </>
  )
}
