import "../globals.css"
import "../style.css"

export const metadata = {
  title: 'MCM Hair Beauty Salon',
  description: 'Welcome to MCM Hair Beauty Salon, where we craft elegance and style with every strand.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
