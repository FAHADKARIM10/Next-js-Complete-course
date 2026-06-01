import Link from 'next/link'

export default function HomePage() {
  return (
    <div>
      <h1>Welcome Home!</h1>
      
      <p>This is the home page of my website.</p>
      
      <h2>Pages:</h2>
      <ul>
        <li><Link href="/about">About Us</Link></li>
        <li><Link href="/contact">Contact Us</Link></li>
      </ul>
    </div>
  )
}