import "../globals.css"
import "../style.css"

export const metadata = {
  title: 'MCM Kitchen',
  description: 'Welcome to MCM Kitchen. We deliver classy and high-quality foods made with the freashest African ingredients.',
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
