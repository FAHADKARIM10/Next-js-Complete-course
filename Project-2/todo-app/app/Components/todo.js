'use client'
import { useState } from 'react'

export default function todoApp() {
  // State for the list of todos
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn Next.js', completed: false },
    { id: 2, text: 'Build a project', completed: false },
    { id: 3, text: 'Master React', completed: true }
  ])
  
  // State for the input field
  const [inputValue, setInputValue] = useState('')
  
  // State for filter (all, active, completed)
  const [filter, setFilter] = useState('all')
  
  // Add a new todo
  const addTodo = () => {
    if (inputValue.trim() === '') {
      alert('Please enter a todo!')
      return
    }
    
    const newTodo = {
      id: Date.now(),  // Simple ID generation
      text: inputValue,
      completed: false
    }
    
    setTodos([...todos, newTodo])  // Add to array
    setInputValue('')  // Clear input
  }
  
  // Handle Enter key press
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTodo()
    }
  }
  
  // Toggle todo completion
  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }
  
  // Delete a todo
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }
  
  // Clear completed todos
  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed))
  }
  
  // Get filtered todos
  const getFilteredTodos = () => {
    if (filter === 'active') {
      return todos.filter(todo => !todo.completed)
    }
    if (filter === 'completed') {
      return todos.filter(todo => todo.completed)
    }
    return todos  // 'all'
  }
  
  const filteredTodos = getFilteredTodos()
  const activeCount = todos.filter(todo => !todo.completed).length
  
  return (
    <div style={{
      maxWidth: '600px',
      margin: '50px auto',
      padding: '30px',
      backgroundColor: '#f9f9f9',
      borderRadius: '10px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
    }}>
      <h1 style={{ textAlign: 'center', color: '#333', marginBottom: '30px' }}>
        📝 My Todo App
      </h1>
      
      {/* Input Section */}
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <input 
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="What needs to be done?"
          style={{
            flex: 1,
            padding: '12px',
            fontSize: '16px',
            border: '2px solid #ddd',
            borderRadius: '5px',
            outline: 'none'
          }}
        />
        <button 
          onClick={addTodo}
          style={{
            padding: '12px 24px',
            fontSize: '16px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          Add
        </button>
      </div>
      
      {/* Filter Buttons */}
      <div style={{ 
        display: 'flex', 
        gap: '10px', 
        marginBottom: '20px',
        justifyContent: 'center'
      }}>
        {['all', 'active', 'completed'].map(filterType => (
          <button
            key={filterType}
            onClick={() => setFilter(filterType)}
            style={{
              padding: '8px 16px',
              fontSize: '14px',
              backgroundColor: filter === filterType ? '#2196F3' : '#e0e0e0',
              color: filter === filterType ? 'white' : '#333',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              textTransform: 'capitalize'
            }}
          >
            {filterType}
          </button>
        ))}
      </div>
      
      {/* Todo List */}
      <div>
        {filteredTodos.length === 0 ? (
          <p style={{ textAlign: 'center', color: '#999', padding: '40px 0' }}>
            {filter === 'completed' ? 'No completed todos yet!' : 'No todos yet! Add one above.'}
          </p>
        ) : (
          filteredTodos.map(todo => (
            <div 
              key={todo.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '15px',
                marginBottom: '10px',
                backgroundColor: 'white',
                borderRadius: '5px',
                border: '1px solid #e0e0e0',
                transition: 'all 0.3s ease'
              }}
            >
              {/* Checkbox */}
              <input 
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
                style={{
                  width: '20px',
                  height: '20px',
                  marginRight: '15px',
                  cursor: 'pointer'
                }}
              />
              
              {/* Todo Text */}
              <span style={{
                flex: 1,
                fontSize: '16px',
                textDecoration: todo.completed ? 'line-through' : 'none',
                color: todo.completed ? '#999' : '#333'
              }}>
                {todo.text}
              </span>
              
              {/* Delete Button */}
              <button 
                onClick={() => deleteTodo(todo.id)}
                style={{
                  padding: '6px 12px',
                  fontSize: '14px',
                  backgroundColor: '#f44336',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>
      
      {/* Footer Stats */}
      <div style={{
        marginTop: '20px',
        padding: '15px',
        backgroundColor: 'white',
        borderRadius: '5px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <span style={{ fontSize: '14px', color: '#666' }}>
          {activeCount} {activeCount === 1 ? 'item' : 'items'} left
        </span>
        
        {todos.some(todo => todo.completed) && (
          <button 
            onClick={clearCompleted}
            style={{
              padding: '6px 12px',
              fontSize: '14px',
              backgroundColor: '#9E9E9E',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Clear Completed
          </button>
        )}
      </div>
    </div>
  )
}