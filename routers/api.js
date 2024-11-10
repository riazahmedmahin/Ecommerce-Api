
import express from "express";
import * as ProductController from "../services/controllers/productController.js";

const router = express.Router();


router.get("/ProductBrandList", ProductController.ProductBrandList);
router.get("/ProductCategoryList", ProductController.ProductCategoryList);
router.get("/ProductSliderList", ProductController.ProductSliderList);
router.get("/ProductListByBrand/:BrandId", ProductController.ProductListByBrand);
router.get("/ProductListByCategory/:CategoryId", ProductController.ProductListByCategory);
router.get("/ProductListBySimilier/:Keyword", ProductController.ProductListBySimilier);
router.get("/ProductListByKeyword/:Keyword", ProductController.ProductListByKeyword);
router.get("/ProductListByRemark/:Keyword", ProductController.ProductListByRemark);
router.get("/ProductDeatils/:ProductId", ProductController.ProductDeatils);
router.get("/ProductReviewList/:ProductId", ProductController.ProductReviewList);

export default router; 