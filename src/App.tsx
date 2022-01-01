import React from 'react'
import './styles/global.css'
import { BrowserRouter } from 'react-router-dom'
import Rotas from './routes'
const App: React.FC = () =>{
  return (
    <div>
      <BrowserRouter>
        <Rotas />
      </BrowserRouter>
    </div>
  )
}
export default App