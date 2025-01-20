import {
  sessionTable,
  userTable,
  verificationTokenTable,
} from "@/drizzle/schema"
import { db } from "@/lib/drizzle"
import { DrizzleAdapter } from "@auth/drizzle-adapter"
import NextAuth from "next-auth"
import Nodemailer from "next-auth/providers/nodemailer"

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: DrizzleAdapter(db, {
    usersTable: userTable,
    sessionsTable: sessionTable,
    verificationTokensTable: verificationTokenTable,
  } as never),
  providers: [
    Nodemailer({
      server: process.env.EMAIL_SERVER,
      from: "auth@sinchful.com",
    }),
  ],
  pages: { verifyRequest: "/verify" },
})
