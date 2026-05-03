import Link from 'next/link';

export default function HomePage() {
  return (
    <div>
      <h1>Home Page 🏠</h1>
      <p>Welcome to my Next.js website!</p>

      <nav>
        <Link href="/about">Go to About</Link>
        <br />
        <Link href="/contact">Go to Contact</Link>
      </nav>
    </div>
  );
}