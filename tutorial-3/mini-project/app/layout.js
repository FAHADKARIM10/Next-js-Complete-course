import Link  from "next/link";
import './globals.css'

export const metadata ={
  title: 'Next.js Mini learning journey' ,
  description:'following a structured path to master Next.js step by step'

}

export default function RootLayout({children}) {
  return (
    <html lang="en">
    <body>

       <nav style={{
          backgroundColor: '#333',
          padding: '20px',
          color: 'white'
        }}>
        
        <div style={{ 
            maxWidth: '1200px', 
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>

          <h2 style={{ margin: 0 }}>🚀 Next.js Journey</h2>
            <ul style={{ 
              listStyle: 'none', 
              display: 'flex', 
              gap: '20px',
              margin: 0,
              padding: 0
            }}>
            <li>
                <Link href="/" style={{ color: 'white', textDecoration: 'none' }}>
                  Home
                </Link>
              </li>

               <li>
                <Link href="/about" style={{ color: 'white', textDecoration: 'none' }}>
                  About
                </Link>
              </li>

               <li>
                <Link href="/contact" style={{ color: 'white', textDecoration: 'none' }}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>

                {/* Main content area - this is where pages appear */}
        <main>
          {children}
        </main>

        {/* Footer - appears on ALL pages */}
        <footer style={{
          backgroundColor: '#f5f5f5',
          padding: '30px',
          textAlign: 'center',
          marginTop: '50px',
          borderTop: '1px solid #ddd'
        }}>
          <p>© 2024 Next.js Learning Journey | Day 2 of Mastery</p>
          <p style={{ fontSize: '14px', color: '#666' }}>
            Built with Next.js and dedication 💪
          </p>
        </footer>
      </body>
    </html>
  )
}

            
        


  