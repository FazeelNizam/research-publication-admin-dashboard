import './globals.css'
import SideBar from '@/components/sidebar/SideBar'

export const metadata = {
  title: 'Dashboard',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="container">
          <div className="wrapper">
            <SideBar />
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
