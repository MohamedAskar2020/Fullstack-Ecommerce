import express, { json, urlencoded } from "express";
import productsRoutes from "./routes/products/index.js";
import authRoutes from "./routes/auth/index.js";

const app = express();
const port = 3000;

// Middleware:
app.use(urlencoded({ extended: false }));
app.use(json());

// Routes:
app.use("/products", productsRoutes);
app.use("/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
