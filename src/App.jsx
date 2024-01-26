import { useState } from 'react'
import {Header} from './components/Header'
import {Form} from './components/Form'
import './App.css'

function App() {

  return (
    <>
      <div className='main-wrapper'>
          
          <div className='sub-wrapper'>
            <Header/>
            <Form/>
          </div>

      </div>
    </>
  )
}

export default App