import {
  sessionTable,
  userTable,
  verificationTokenTable,
} from "@/drizzle/schema"
import { db } from "@/lib/drizzle"
import { DrizzleAdapter } from "@auth/drizzle-adapter"
import NextAuth from "next-auth"
import Nodemailer from "next-auth/providers/nodemailer"

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: DrizzleAdapter(db, {
    usersTable: userTable,
    sessionsTable: sessionTable,
    verificationTokensTable: verificationTokenTable,
  } as any),
  providers: [
    Nodemailer({
      server: process.env.EMAIL_SERVER,
      from: "auth@sinchful.com",
    }),
  ],
})
