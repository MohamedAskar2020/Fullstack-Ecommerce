import { Router } from "express";
import {
  listProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "./productsControllers.js";
import { validateData } from "../../middlewares/validationMiddleware.js";
import { verifySeller, verifyToken } from "../../middlewares/authMiddleware.js";

import {
  createProductSchema,
  updateProductSchema,
  deleteProductSchema,
} from "../../db/productsSchema.js";

// type ProductType = z.infer<typeof createProductSchema>

const router = Router();
router.get("/", listProducts);
router.get("/:id", getProductById);
router.post(
  "/",
  verifyToken,
  verifySeller,
  validateData(createProductSchema),
  createProduct
);
router.put(
  "/:id",
  verifyToken,
  verifySeller,
  validateData(updateProductSchema),
  updateProduct
);
router.delete("/:id", verifyToken, verifySeller, deleteProduct);

export default router;
