import { useState, useEffect } from 'react'
import './index.css'

function App() {
  const [imgData, setImgData] = useState([])
  const reqUrl = "https://api.giphy.com/v1/gifs/translate?api_key=l9wddb2iB91ZMFFD1U2BXvF4C5wubzBG&s=funny"

  useEffect(() => {
    async function getData() {
      try {        
        const res = await fetch(reqUrl)
        
        if (res.ok) {
          let parsed = await res.json()
          let imgUrl = parsed.data.images.original.url
          if (imgData.length <= 20) {
            setImgData(prevImg => [...prevImg, imgUrl])
            console.log(imgUrl);
            console.log(imgData);
          }
        }
      } catch (err) {
        console.log(err);
      }
    }
    getData()
  },[imgData]) 
  return (
    <>
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    </>
  )
}

export default App
