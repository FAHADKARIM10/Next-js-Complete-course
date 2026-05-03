import Link from 'next/link';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

        {/* This navbar will appear on EVERY page */}
        <nav style={{ background: '#333', padding: '10px' }}>
          <Link href="/" style={{ color: 'white', marginRight: '20px' }}>Home</Link>
          <Link href="/about" style={{ color: 'white', marginRight: '20px' }}>About</Link>
          <Link href="/contact" style={{ color: 'white' }}>Contact</Link>
        </nav>

        {/* Your page content goes here */}
        <main style={{ padding: '20px' }}>
          {children}
        </main>

      </body>
    </html>
  );
}