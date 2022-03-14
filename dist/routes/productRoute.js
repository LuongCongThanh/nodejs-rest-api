"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const productCtrl_1 = __importDefault(require("../controller/productCtrl"));
const router = express_1.default.Router();
router.get("/products", productCtrl_1.default.getProducts);
router.get("/products/:id", productCtrl_1.default.getProduct);
router.post("/products", productCtrl_1.default.addProducts);
router.put("/products/:id", productCtrl_1.default.updateProducts);
router.delete("/products/:id", productCtrl_1.default.deleteProducts);
exports.default = router;
//# sourceMappingURL=productRoute.js.map