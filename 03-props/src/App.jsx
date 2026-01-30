import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'>
      <Card user='Arijit' age={20} img='https://images.unsplash.com/photo-1607853554439-0069ec0f29b6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym13fGVufDB8fDB8fHww'/>
      <Card user='Rohan' age={16} img='https://images.unsplash.com/photo-1768475965443-800a23634f0c?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
      <Card user='Nikhil' age={22} img='https://images.unsplash.com/photo-1617335692042-7a3779b8e050?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWNsYXJlbnxlbnwwfHwwfHx8MA%3D%3D'/>
    </div>
  )
}

export default App
