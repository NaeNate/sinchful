import "@/styles/base.css"
import { Metadata } from "next"
import { ReactNode } from "react"

export const metadata: Metadata = {
  title: { default: "sinchful", template: "%s | sinchful" },
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}
