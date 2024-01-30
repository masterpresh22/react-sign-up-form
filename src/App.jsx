import { useState } from 'react'
import {Header} from './components/Header'
import {Form} from './components/Form'
import './App.css'

function App()  {
    // const [counter, setCounter] = useState(0)

  return (
    <>
      <div className='main-wrapper'>
          
          <div className='sub-wrapper'>
            {/* value of counterValue is {counter}
            <button onClick={() => setCounter(counter + 1)}>
              Increment
            </button>
            {" "} {" "} 
            <button onClick={() => setCounter(counter - 1)}>
              Decrement
            </button> */}

            <Header/>
            <Form/>
          </div>

      </div>
    </>
  )
}

export default App
