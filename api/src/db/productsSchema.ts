import {
  doublePrecision,
  integer,
  pgTable,
  text,
  varchar,
} from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const productsTable = pgTable("products", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  description: text(),
  image: varchar({ length: 255 }),
  price: doublePrecision().notNull(),
});

// Zod schema for creating a new product
export const createProductSchema = createInsertSchema(productsTable).omit({
  id: true,
});

// Zod schema for updating a product
export const updateProductSchema = createInsertSchema(productsTable)
  .omit({
    id: true,
  })
  .partial();

// Zod schema for deleting a product
export const deleteProductSchema = z.object({
  id: z.number(),
});
