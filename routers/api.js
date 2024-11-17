
import express from "express";
import * as ProductController from "../services/controllers/productController.js";

const router = express.Router();


router.get("/ProductBrandList", ProductController.ProductBrandList);
router.get("/ProductCategoryList", ProductController.ProductCategoryList);
router.get("/ProductSliderList", ProductController.ProductSliderList);
router.get("/ProductListByBrand/:BrandID", ProductController.ProductListByBrand);
router.get("/ProductListByCategory/:CategoryID", ProductController.ProductListByCategory);
router.get("/ProductListBySimilier/:CategoryID", ProductController.ProductListBySimilier);
router.get("/ProductListByKeyword/:Keyword", ProductController.ProductListByKeyword);
router.get("/ProductListByRemark/:Remark", ProductController.ProductListByRemark);
router.get("/ProductDeatils/:ProductID", ProductController.ProductDeatils);
router.get("/ProductReviewList/:ProductID", ProductController.ProductReviewList);

export default router; 