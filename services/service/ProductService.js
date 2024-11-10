import BrandModel from "../models/BrandModel.js"
import CategoryModel from "../models/CategoryModel.js"
import ProductModel from "../models/ProductModel.js"
import ProductDetailModel from "../models/ProductDetailModel.js"
import ProductSliderModel from "../models/ProductSliderModel.js"
import ReviewModel from "../models/ReviewModel.js"


export const BrandListService = async () => {
    try{

        let data=await BrandModel.find();
        return {status:"Success",data:data}
    }
    catch(e){
        return {status:"fail",data:e}.toSring()

    }

};


export const CategoryListService = async () => {
    try{

        let data=await CategoryModel.find();
        return {status:"Success",data:data}
    }
    catch(e){
        return {status:"fail",data:e}.toSring()

    }

};


export const SliderListService = async () => {
    try{

        let data=await ProductSliderModel.find();
        return {status:"Success",data:data}
    }
    catch(e){
        return {status:"fail",data:e}.toSring()

    }

};


export const ListByBrandService = async (req, res) => {

};


export const ListByCategoryService = async (req, res) => {

};

export const ListByRemarkService = async (req, res) => {

};
export const ListBySimilierService = async (req, res) => {

};

export const ListByKeywordService = async (req, res) => {

};

export const DetailsService = async (req, res) => {

};

export const ReviewListService = async (req, res) => {

};