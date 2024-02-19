import { useState, useEffect } from 'react'
import './index.css'
import Header from './Header'
import Container from './Container'
import Footer from './Footer'

const contentStyle = {
  display: 'grid',
  gridGap: '20px',
  gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))'
}

function App() {

  return (
    <div className="flex flex-col min-h-screen">
      <Header/>
      <div style={contentStyle} className="flex-1">
        <Container/>
      </div>
      <Footer/>
    </div>
  )
}

export default App
