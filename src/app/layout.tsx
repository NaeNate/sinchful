import { auth } from "@/lib/auth"
import "@/styles/base.css"
import { Metadata } from "next"
import { Mulish } from "next/font/google"
import Link from "next/link"
import { ReactNode } from "react"

export const metadata: Metadata = {
  title: { default: "Sinchful", template: "%s | Sinchful" },
}

const mulish = Mulish()

export default async function Layout({ children }: { children: ReactNode }) {
  const session = await auth()

  return (
    <html lang="en">
      <body className={mulish.className}>
        <nav className="flex p-4">
          <Link href="/">Sinchful</Link>

          <div className="ml-auto">
            {session ? <p>Sign Out</p> : <Link href="/signin">Sign In</Link>}
          </div>
        </nav>

        <main className="mx-auto w-3/5">{children}</main>
      </body>
    </html>
  )
}
