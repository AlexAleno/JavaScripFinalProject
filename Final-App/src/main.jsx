import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Contact from './Contact.jsx'
import Footer from './Footer.jsx'
import StockGamer from './StockGamer.jsx'
import DisplayMap from './DisplayMap.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <App /> 
      
       <Footer />
    
     <StockGamer />
    <DisplayMap/>
    <Contact />
  
  </React.StrictMode>,
)
