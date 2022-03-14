import express from "express";
import productCtr from "../controller/productCtrl";
import {checkProductData} from '../middleware/validates'
const router = express.Router();

router.get("/products", productCtr.getProducts);
router.get("/products/:id", productCtr.getProduct);
router.post("/products", checkProductData, productCtr.addProducts);
router.put("/products/:id",checkProductData, productCtr.updateProducts);
router.delete("/products/:id", productCtr.deleteProducts);

export default router;
