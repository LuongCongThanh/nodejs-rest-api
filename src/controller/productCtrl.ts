import express from "express";
import Products from "../model/productsModel";
import {APIfeatures} from "../lib/features";

const productCtr = {
  getProducts: async (req, res) => {
    try {
      const features = new APIfeatures(Products.find(), req.query).paginating();

      console.log(features);

      const sort = req.query.sort || "-createdAt";
      const products = await features.query.sort(sort);
      return res.status(200).json(products);
    } catch (error) {
      return res.status(500).json({ mgs: error.message });
    }
  },
  getProduct: async (req, res) => {
    try {
      const product = await Products.findById(req.param.id);
      if (!product) {
        return res.status(404).json({ mgs: "this product does not exist." });
      }
      return res.status(200).json(product);
    } catch (error) {
      return res.status(500).json({ mgs: error.message });
    }
  },
  addProducts: async (req, res) => {
    try {
      const { title, price, description, category, image } = req.body;
      const newProduct = new Products({
        title,
        price,
        description,
        category,
        image,
      });
      await newProduct.save();
      return res.status(200).json(newProduct);
    } catch (error) {
      return res.status(500).json({ mgs: error.message });
    }
  },
  updateProducts: async (req, res) => {
    try {
      const { title, price, description, category, image } = req.body;
      const product = await Products.findByIdAndUpdate(
        req.param.id,
        {
          title,
          price,
          description,
          category,
          image,
        },
        { new: true }
      );
      if (!product) {
        return res.status(404).json({ mgs: "this product does not exist." });
      }
      return res.status(200).json(product);
    } catch (error) {
      return res.status(500).json({ mgs: error.message });
    }
  },
  deleteProducts: async (req, res) => {
    try {
      const product = await Products.findByIdAndDelete(req.param.id);
      if (!product) {
        return res.status(404).json({ mgs: "this product does not exist." });
      }
      return res.status(200).json({ mgs: "Delete success" });
    } catch (error) {
      return res.status(500).json({ mgs: error.message });
    }
  },
};
export default productCtr;
