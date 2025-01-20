import { sql } from "drizzle-orm"
import {
  integer,
  pgTable,
  primaryKey,
  serial,
  text,
  timestamp,
  unique,
} from "drizzle-orm/pg-core"

export const dayTable = pgTable(
  "day",
  {
    id: serial().primaryKey(),
    date: text().notNull(),
    userId: text()
      .notNull()
      .references(() => userTable.id, { onDelete: "cascade" }),
  },
  (table) => [unique().on(table.date, table.userId)]
)

export const dayFoodTable = pgTable("day_food", {
  dayId: integer()
    .notNull()
    .references(() => dayTable.id, { onDelete: "cascade" }),
  foodCode: text()
    .notNull()
    .references(() => foodTable.code, { onDelete: "cascade" }),
  amount: integer().notNull(),
})

export const foodTable = pgTable("food", {
  code: text().primaryKey(),
  name: text().notNull(),
  calories: integer().notNull(),
  protein: integer().notNull(),
  carbs: integer().notNull(),
  fat: integer().notNull(),
})

export const userTable = pgTable("user", {
  id: text()
    .primaryKey()
    .default(sql`gen_random_uuid()`),
  email: text().notNull().unique(),
})

export const sessionTable = pgTable("session", {
  sessionToken: text().primaryKey(),
  userId: text()
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
  (table) => [primaryKey({ columns: [table.identifier, table.token] })]
)
