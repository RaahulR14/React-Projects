import { useState } from 'react'
import ThemeProvider from './Context/ThemeProvider'
import ThemeComponent from './Components/ThemeComponent'

function App() {

  return (
    <>
      <ThemeProvider>
        <ThemeComponent />
      </ThemeProvider>
    </>
  )
}

export default App
