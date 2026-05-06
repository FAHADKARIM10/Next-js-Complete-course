'use client'  // This is IMPORTANT - I'll explain!

import { useState } from 'react'

export default function Counter() {
  // Create state for our count
  const [count, setCount] = useState(0)
  
  // Function to increase count
  const increase = () => {
    setCount(count + 1)
  }
  
  // Function to decrease count
  const decrease = () => {
    setCount(count - 1)
  }
  
  // Function to reset count
  const reset = () => {
    setCount(0)
  }
  
  return (
    <div style={{
      padding: '30px',
      border: '2px solid #333',
      borderRadius: '10px',
      textAlign: 'center',
      maxWidth: '400px',
      margin: '20px auto'
    }}>
      <h2>Counter App</h2>
      
      {/* Display the count */}
      <div style={{
        fontSize: '48px',
        fontWeight: 'bold',
        margin: '20px 0',
        color: count > 0 ? 'green' : count < 0 ? 'red' : 'black'
      }}>
        {count}
      </div>
      
      {/* Buttons to change count */}
      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
        <button 
          onClick={decrease}
          style={{
            padding: '10px 20px',
            fontSize: '18px',
            backgroundColor: '#f44336',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          - Decrease
        </button>
        
        <button 
          onClick={reset}
          style={{
            padding: '10px 20px',
            fontSize: '18px',
            backgroundColor: '#9E9E9E',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Reset
        </button>
        
        <button 
          onClick={increase}
          style={{
            padding: '10px 20px',
            fontSize: '18px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          + Increase
        </button>
      </div>
      
      {/* Status message */}
      <p style={{ marginTop: '20px', color: '#666' }}>
        You've clicked {Math.abs(count)} times
      </p>
    </div>
  )
}