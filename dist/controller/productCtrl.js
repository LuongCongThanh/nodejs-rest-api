"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const productsModel_1 = __importDefault(require("../model/productsModel"));
const productCtr = {
    getProducts: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const products = yield productsModel_1.default.find();
            return res.status(200).json({ products });
        }
        catch (error) {
            return res.status(500).json({ mgs: error.message });
        }
    }),
    getProduct: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const product = yield productsModel_1.default.findById(req.param.id);
            if (!product) {
                return res.status(404).json({ mgs: "this product does not exist." });
            }
            return res.status(200).json({ product });
        }
        catch (error) {
            return res.status(500).json({ mgs: error.message });
        }
    }),
    addProducts: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { title, price, description, category, image } = req.body;
            const newProduct = new productsModel_1.default({
                title,
                price,
                description,
                category,
                image,
            });
            yield newProduct.save();
            return res.status(200).json({ newProduct });
        }
        catch (error) {
            return res.status(500).json({ mgs: error.message });
        }
    }),
    updateProducts: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { title, price, description, category, image } = req.body;
            const product = yield productsModel_1.default.findByIdAndUpdate(req.param.id, {
                title,
                price,
                description,
                category,
                image,
            }, { new: true });
            if (!product) {
                return res.status(404).json({ mgs: "this product does not exist." });
            }
            return res.status(200).json({ product });
        }
        catch (error) {
            return res.status(500).json({ mgs: error.message });
        }
    }),
    deleteProducts: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const product = yield productsModel_1.default.findByIdAndDelete(req.param.id);
            if (!product) {
                return res.status(404).json({ mgs: "this product does not exist." });
            }
            return res.status(200).json({ mgs: "Delete success" });
        }
        catch (error) {
            return res.status(500).json({ mgs: error.message });
        }
    }),
};
exports.default = productCtr;
//# sourceMappingURL=productCtrl.js.map