import { sql } from "drizzle-orm"
import { pgTable, primaryKey, text, timestamp } from "drizzle-orm/pg-core"

export const userTable = pgTable("user", {
  id: text("id")
    .primaryKey()
    .default(sql`gen_random_uuid()`),
  email: text("email").notNull().unique(),
})

export const sessionTable = pgTable("session", {
  sessionToken: text("session_token").primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => userTable.id, { onDelete: "cascade" }),
  expires: timestamp("expires").notNull(),
})

export const verificationTable = pgTable(
  "verification",
  {
    identifier: text("identifier").notNull(),
    token: text("token").notNull(),
    expires: timestamp("expires").notNull(),
  },
  (table) => [primaryKey({ columns: [table.identifier, table.token] })],
)
