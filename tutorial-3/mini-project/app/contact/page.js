import Link from "next/link";

export default function Contact(){
    return (
        <div style={{ padding: '50px', maxWidth: '800px', margin: '0 auto' }}>
            <h1>📧 Contact Me</h1>
            <p>I'd love to hear from you!</p>
            <div style={{ marginTop: '20px' }}>
                <p><strong>Email:</strong> fahadkar33m@icloud.com</p>
                <p><strong>Twitter:</strong> @nextjs_learner</p>
                <p><strong>GitHub:</strong> github.com/nextjs-learner</p> 

            </div>
            <div style={{ marginTop: '30px' }}>
        <Link href="/" style={{ 
          color: 'blue', 
          textDecoration: 'none',
          fontSize: '18px' 
        }}>
          ← Back to Home
        </Link>
        {' | '}
        <Link href="/about" style={{ 
          color: 'blue', 
          textDecoration: 'none',
          fontSize: '18px' 
        }}>
          About Me →
        </Link>
        </div>
        </div>
    ) 
}