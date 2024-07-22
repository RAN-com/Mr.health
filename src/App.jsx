import React, { useRef,useState } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import PhotoHoverSlide from './Components/PhotoHoverText/PhotoHoverText'
import FlexTwoColumnLayout from './Components/FlexTwoColumnLayout/FlexTwoColumnLayout'
import FlexTwoColumnLayou from './Components/Contectus/Content'
import PhotoGallery from './Components/PhotoGallery/PhotoGallery'
import Footer from './Components/Footer/Footer'
import PathInput from './Components/path/path'
import Cards from './Components/Card/Cards'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Result from './Components/Result/Results'
import Results from './Components/Result/Result'
import Aboutpage from './Components/Result/Aboutpage'



import Tab from './Components/Tab/Tab'


function App() {
  const scrollRef = useRef(null);
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar />
      <Hero/>
      <PhotoHoverSlide/>
      <FlexTwoColumnLayout/>
      <Cards/> 
      <Tab/>
      <header className="App-header">
        <h1 className="text-2xl font-bold mb-4">Flex Two Column Layout Example with Form and US Map</h1>
        <FlexTwoColumnLayou />
      </header>
      <header className="App-header">
        <h1 className="text-2xl font-bold mb-4">Photo Gallery Example</h1>
        <PhotoGallery />
      </header>
      <main className="p-4">
        <h1 className="text-2xl font-bold">Welcome to my website!</h1>
        
      </main>
      <Footer/>
      
   
           
    </div>
  )
}

export default App
