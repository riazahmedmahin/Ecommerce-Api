
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

import mongoose from 'mongoose';

const { ObjectId } = mongoose.Types;


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
    } 
    catch (e) {
        return res.json({ status: "Fail", data: e.toString() });
    }

};

export const ProductSliderList = async (req, res) => {
    try {
        let data = await ProductSliderModel.find();
        return res.status(200).json({ status: "Success", data: data });
    } 
    catch (e) {
        return res.json({ status: "Fail", data: e.toString() });
    }

};

export const ProductListByBrand = async (req, res) => {
    try {

        let BrandId = new ObjectId(req.params.BrandId);
        let MatchStage = { $match: { brandID: BrandId } };
        let JoinWithBrandStage = {
            $lookup: {
                from: "brands",
                localField: "brandID",
                foreignField: "_id",
                as: "brand",
            },
        };
        let JoinWithCategoryStage = {
            $lookup: {
                from: "categories",
                localField: "categoryID",
                foreignField: "_id",
                as: "category",
            },
        };
        let UnwindBrandStage = { $unwind: "$brand" };
        let UnwindCategoryStage = { $unwind: "$category" };
        let ProjectionStage = {
            $project: {
                "brand._id": 0,
                "category._id": 0,
                categoryID: 0,
                brandID: 0,
            },
        };
        
        let data = await ProductModel.aggregate([
            MatchStage,
            JoinWithBrandStage,
            JoinWithCategoryStage,
            UnwindBrandStage,
            UnwindCategoryStage,
            ProjectionStage,
        ]);
        
        return res.status(200).json({ status: "Success", data: data });
    } 
    catch (e) {
       
        return res.status(500).json({ status: "Fail", data: e.toString() });
    }
      
};

export const ProductListByCategory = async (req, res) => {
    try{
        let CategoryID = new ObjectId(req.params.CategoryID)
        let matchStage = {$match :{categoryID:CategoryID}}
    
        let JoinWithBrandStage = {
            $lookup: {
                from: "brands",
                localField: "brandID",
                foreignField: "_id",
                as: "brand",
            },
        };
        let JoinWithCategoryStage = {
            $lookup: {
                from: "categories",
                localField: "categoryID",
                foreignField: "_id",
                as: "category",
            },
        };
        let UnwindBrandStage = { $unwind: "$brand" };
        let UnwindCategoryStage = { $unwind: "$category" };
        let ProjectionStage = {
            $project: {
                "brand._id": 0,
                "category._id": 0,
                categoryID: 0,
                brandID: 0,
            },
        };
        let data = await ProductModel.aggregate([
            matchStage,JoinWithBrandStage,JoinWithCategoryStage,
            UnwindBrandStage,UnwindCategoryStage,ProjectionStage
        ])
        return res.status(200).json({ status: "Success", data: data });

    }
    catch(e){
        return res.status(500).json({ status: "Fail", data: e.toString() });

    }

};

export const ProductListByRemark = async (req, res) => {
    try {

        let Remark = req.params.Remark;
        let MatchStage = { $match: { remark: Remark } };
        let JoinWithBrandStage = {
            $lookup: {
                from: "brands",
                localField: "brandID",
                foreignField: "_id",
                as: "brand",
            },
        };
        let JoinWithCategoryStage = {
            $lookup: {
                from: "categories",
                localField: "categoryID",
                foreignField: "_id",
                as: "category",
            },
        };
        let UnwindBrandStage = { $unwind: "$brand" };
        let UnwindCategoryStage = { $unwind: "$category" };
        let ProjectionStage = {
            $project: {
                "brand._id": 0,
                "category._id": 0,
                categoryID: 0,
                brandID: 0,
            },
        };
        
        let data = await ProductModel.aggregate([
            MatchStage,
            JoinWithBrandStage,
            JoinWithCategoryStage,
            UnwindBrandStage,
            UnwindCategoryStage,
            ProjectionStage,
        ]);
        
        return res.status(200).json({ status: "Success", data: data });
    } 
    catch (e) {
       
        return res.status(500).json({ status: "Fail", data: e.toString() });
    }

};


export const ProductListBySimilier = async (req, res) => {

};

export const ProductListByKeyword = async (req, res) => {

};



export const ProductReviewList = async (req, res) => {

};

export const ProductDeatils = async (req, res) => {

};
