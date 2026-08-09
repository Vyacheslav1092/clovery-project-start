import React from 'react'
import './App.css'
import ActiveProjectsWidget from "./components/ActiveProjectsWidget";

const App:React.FC = () => {
  return (
    <div className="App">
      <ActiveProjectsWidget />
    </div>
  )
}

export default App
