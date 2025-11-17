import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className = "parent">
        
        <Card user = 'Rishav Kayshap' age = {23} role ='SDE-1' img = "https://images.unsplash.com/photo-1760931969401-9bd6ee902798?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDk0fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D"/>
        <Card user = 'Kalix Ris' age = {21} role='Intern' img = "https://images.unsplash.com/photo-1754851342161-083a48d2e075?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDkzfENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D"/>
        <Card user = 'Sunny Kayshap' age = {22} role='Intern' img = "https://images.unsplash.com/photo-1756137074695-88e71b00ef77?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEwNHxDRHd1d1hKQWJFd3x8ZW58MHx8fHx8"/>
        <Card user = 'Anand Jha' age = {20} role='C-Dac' img = "https://plus.unsplash.com/premium_photo-1692948505024-20a1288d0b65?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM4NHxDRHd1d1hKQWJFd3x8ZW58MHx8fHx8"/>
    </div>
  )
}

export default App