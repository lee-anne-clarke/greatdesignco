import Header from './components/Header'
import Footer from './components/Footer'

// Google fonts
import { Fira_Sans, Courgette, Oswald } from 'next/font/google';

const firaSans = Fira_Sans({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-firasans',
})

const courgette = Courgette({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-courgette',
})

const oswald = Oswald({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-oswald',
})

// Styles
import '../styles/global.scss'

// Metadata
export const metadata = {
  title: 'Great Design Co.',
  description: '',
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${firaSans.variable} ${courgette.variable} ${oswald.variable}`}>

        <Header />
        {children}
        <Footer />
        
      </body>
    </html>
  )
}
