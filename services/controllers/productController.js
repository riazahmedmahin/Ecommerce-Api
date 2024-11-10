
// import { 
//     BrandListService,
//     // CategoryListService,
//     // SliderListService,
//     // ListByBrandService,
//     // ListByCategoryService,
//     // ListByRemarkService,
//     // ListBySimilierService,
//     // ListByKeywordService,
//     // DetailsService,
//     // ReviewListService

// } from "../service/ProductService.js";

import BrandModel from "../models/BrandModel.js"
import CategoryModel from "../models/CategoryModel.js"
import ProductModel from "../models/ProductModel.js"
import ProductDetailModel from "../models/ProductDetailModel.js"
import ProductSliderModel from "../models/ProductSliderModel.js"
import ReviewModel from "../models/ReviewModel.js"


export const ProductBrandList = async (req, res) => {
    try {
        let data = await BrandModel.find();
        return res.status(200).json({ status: "Success", data: data });
    } catch (e) {
        return res.json({ status: "Fail", data: e.toString() });
    }

};

export const ProductCategoryList = async (req, res) => {
    try {
        let data = await CategoryModel.find();
        return res.status(200).json({ status: "Success", data: data });
    } catch (e) {
        return res.json({ status: "Fail", data: e.toString() });
    }

};

export const ProductSliderList = async (req, res) => {
    try {
        let data = await ProductSliderModel.find();
        return res.status(200).json({ status: "Success", data: data });
    } catch (e) {
        return res.json({ status: "Fail", data: e.toString() });
    }

};

export const ProductListByBrand = async (req, res) => {

};

export const ProductListByCategory = async (req, res) => {

};

export const ProductListBySimilier = async (req, res) => {

};

export const ProductListByKeyword = async (req, res) => {

};

export const ProductListByRemark = async (req, res) => {

};

export const ProductReviewList = async (req, res) => {

};

export const ProductDeatils = async (req, res) => {

};
