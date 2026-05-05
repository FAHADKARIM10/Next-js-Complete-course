import Link from 'next/link'  

export default function Home() {
  return (
    <div style={{ padding: '50px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Welcome to my Next.js journey</h1>
      <p>Today is day 2 and I am learning navigation and much more!</p>

      <div style={{ marginTop: '30px' }}>
        <h2>Navigate to:</h2>

        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ margin: '10px 0' }}>
            <Link 
              href="/about"
              style={{
                color: 'blue',
                textDecoration: 'none',
                fontSize: '18px'
              }}
            >
              Go to About Page
            </Link>
          </li>
        </ul>

      </div>
    </div>
  )
}