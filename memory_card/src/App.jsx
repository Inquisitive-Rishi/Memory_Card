import { useState, useEffect } from 'react'
import './index.css'
import Header from './Header'
// import Container from './Container'
import Footer from './Footer'
import Card from './Card'

const contentStyle = {
  display: 'grid',
  gridGap: '20px',
  gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))'
}

const gifUrl = "https://api.giphy.com/v1/gifs/translate?api_key=l9wddb2iB91ZMFFD1U2BXvF4C5wubzBG&s=funny"

function App() {
  const [arr, setArr] = useState([])
  useEffect(() => {
    if (arr[arr.length - 1] === "") {
      setArr(prevArr => prevArr.slice(0, -1))
    }
    async function fetchImg() {
      let res = await (await fetch(gifUrl)).json()
      let imgData = res.data.images.original.url;
          
      if (arr.length < 10) {
        if (!arr.includes(imgData)) {
          setArr(prevArr => [...prevArr, imgData])
        } else {
          setArr(prevArr => [...prevArr, ""])
        }
      } else {
        return false;
      }
    }
    fetchImg()
  }, [arr])

  return (
    <div className="flex flex-col min-h-screen">
      <Header/>
      <div style={contentStyle} className="flex-1 p-3">
        {arr.map(gif => <Card key={gif} url={gif}/>)}
      </div>
      <Footer/>
    </div>
  )
}

export default App
