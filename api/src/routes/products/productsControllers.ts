import { Request, Response } from "express";

export function listProducts(req: Request, res: Response) {
  res.send("ListProducts");
}

export function getProductById(req: Request, res: Response) {
  res.send("GetProductById");
}

export function createProduct(req: Request, res: Response) {
  res.send("CreateProduct");
}

export function updateProduct(req: Request, res: Response) {
  res.send("UpdateProduct");
}

export function deleteProduct(req: Request, res: Response) {
  res.send("DeleteProduct");
}
