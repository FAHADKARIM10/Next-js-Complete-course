'use client'
import { useState } from 'react'

export default function NameForm() {
  const [name, setName] = useState('')
  
  return (
    <div style={{ padding: '30px' }}>
      <h2>What's your name?</h2>
      
      <input 
        type="text"
        value={name}  // State controls the value
        onChange={(e) => setName(e.target.value)}  // Update state on change
        placeholder="Enter your name"
        style={{
          padding: '10px',
          fontSize: '16px',
          border: '2px solid #ddd',
          borderRadius: '5px',
          width: '300px'
        }}
      />
      
      <p style={{ marginTop: '20px', fontSize: '18px' }}>
        Hello, <strong>{name || 'stranger'}</strong>! 👋
      </p>
      
      {name.length > 0 && (
        <p style={{ color: 'gray', fontSize: '14px' }}>
          Your name has {name.length} characters
        </p>
      )}
    </div>
  )
}