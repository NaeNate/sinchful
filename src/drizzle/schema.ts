import { sql } from "drizzle-orm"
import {
  integer,
  pgTable,
  primaryKey,
  serial,
  text,
  timestamp,
} from "drizzle-orm/pg-core"

export const foodTable = pgTable("food", {
  id: serial(),
  name: text(),
  calories: integer(),
  protein: integer(),
  carbs: integer(),
  fat: integer(),
})

export const userTable = pgTable("user", {
  id: text()
    .primaryKey()
    .default(sql`gen_random_uuid()`),
  email: text().unique(),
})

export const sessionTable = pgTable("session", {
  sessionToken: text("session_token").primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => userTable.id, { onDelete: "cascade" }),
  expires: timestamp().notNull(),
})

export const verificationTokenTable = pgTable(
  "verification_token",
  {
    identifier: text().notNull(),
    token: text().notNull(),
    expires: timestamp().notNull(),
  },
  (table) => [primaryKey({ columns: [table.identifier, table.token] })],
)
