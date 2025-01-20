"use server"

import { foodTable } from "@/drizzle/schema"
import { db } from "@/lib/drizzle"
import { eq } from "drizzle-orm"

export const getFood = async (code: string) => {
  const food = await db.query.foodTable.findFirst({
    where: eq(foodTable.code, code),
  })
}
