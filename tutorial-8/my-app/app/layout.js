import Link  from "next/link";

export const metadata = {
  title: 'My Website',
  description: 'Welcome to my website',
}

export default function RootLayout({children}){
  return(
    <html lang="en">
      <body>
        <nav>
          <h1>My Website</h1>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>

        <main>
          {children}
        </main>

        <footer>
          <p>&copy; 2024 My Website. All rights reserved.</p>
        </footer>
      </body>
    </html>
  )
}
