const Category = require('../models/Category');

const Response = require('../dto/response');

const getAllAsync = async () => {
    try {
        let categories = await Category.find();
        return Response.SuccessResponse(categories);
    } catch (error) {
        return Response.fail(error);
    }
}

const getByIdAsync = async (id) => {
    try {
        let category = await Category.findById(id);
        return Response.SuccessResponse(category);
    } catch (error) {
        return Response.fail(error);
    }
};

const createAsync = async (category) => {
    try {
        var valid = ValidityState(validate(category));
        if(valid.error){
            return Response.fail(valid.error);
        }
        let newCategory = await Category.create(category);

        return Response.SuccessResponse(newCategory);
    } catch (error) {
        return Response.fail(error);
    }
};

const updateAsync = async (id, category) => {
    try {
        let updatedCategory = await Category.findByIdAndUpdate(id, category, { new: true });
        return Response.SuccessResponse(updatedCategory);
    } catch (error) {
        return Response.fail(error);
    }
};

const deleteAsync = async (id) => {
    try {
        let category = await Category.findByIdAndDelete(id);
        return Response.SuccessResponse(category);
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