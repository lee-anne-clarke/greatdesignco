import '../styles/global.scss'
import Header from './components/Header'
import Footer from './components/Footer'

// Metadata
export const metadata = {
  title: 'Great Design Co.',
  description: '',
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

        <Header />
        {children}
        <Footer />
        
      </body>
    </html>
  )
}
