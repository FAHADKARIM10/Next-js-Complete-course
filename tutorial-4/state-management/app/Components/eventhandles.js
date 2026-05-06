'use client'
import { useState } from 'react'

export default function ColorPicker() {
  const [color, setColor] = useState('gray')
  
  // Handler that receives an argument
  const changeColor = (newColor) => {
    setColor(newColor)
  }
  
  return (
    <div style={{ padding: '30px' }}>
      <div style={{
        width: '200px',
        height: '200px',
        backgroundColor: color,
        border: '2px solid black',
        borderRadius: '10px',
        margin: '20px auto'
      }} />
      
      <div style={{ textAlign: 'center' }}>
        <button onClick={() => changeColor('red')} 
                style={{ margin: '5px', padding: '10px' }}>Red</button>
        <button onClick={() => changeColor('blue')} 
                style={{ margin: '5px', padding: '10px' }}>Blue</button>
        <button onClick={() => changeColor('green')} 
                style={{ margin: '5px', padding: '10px' }}>Green</button>
        <button onClick={() => changeColor('yellow')} 
                style={{ margin: '5px', padding: '10px' }}>Yellow</button>
      </div>
      
      <p style={{ textAlign: 'center', marginTop: '20px' }}>
        Current color: <strong>{color}</strong>
      </p>
    </div>
  )
}