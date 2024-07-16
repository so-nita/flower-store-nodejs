const Category = require('../models/Category');
const Response = require('../dto/response');
const { validationResult } = require('express-validator');

const getAllAsync = async () => {
    try {
        let Categories = await Category.find();
        return Response.success(Categories);
    } catch (error) {
        return Response.fail(error);
    }
}

const getByIdAsync = async (id) => {
    try {
        let category = await Category.findById(id);
        if (category == null) {
            return Response.fail('Category not found');
        }
        return Response.success(category);
    } catch (error) {
        return Response.fail('Category not found');
    }
};

const createAsync = async (category) => {
    try {
        // Validate the incoming data
        const errors = validationResult(category);
        if (!errors.isEmpty()) {
            return Response.fail(errors.array().map(err => err.msg));
        }

        // Create the category
        let newCategory = await Category.create(categoryData);
        return Response.success(newCategory);
    } catch (error) {
        console.error('Error creating category:', error);
        return Response.fail(error.message);
    }
};

const updateAsync = async (id, category) => {
    try {
        let updatedCategory = await Category.findByIdAndUpdate(id, category, { new: true });
        return Response.success(updatedCategory);
    } catch (error) {
        return Response.fail(error);
    }
};

const deleteAsync = async (id) => {
    try {
        let category = await Category.findByIdAndDelete(id);
        console.log(category);
        if(category==null){
            return Response.fail('Category not found');
        }
        return Response.success('Deleted Successfully');
    } catch (error) {
        return Response.fail(error);
    }
};

module.exports = {
    getAllAsync,
    getByIdAsync,
    createAsync,
    updateAsync,
    deleteAsync
};