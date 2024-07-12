
const categoryService = require('../services/category.service');

const getAllAsync = async () => {
    var categories = await categoryService.getAllAsync();
    return categories;
}

const getByIdAsync = async (id) => {
    var category = await categoryService.getByIdAsync(id);
    return category;
}

const createAsync = async (category) => {
    var newCategory = await categoryService.createAsync(category);
    return newCategory;
};

const updateAsync = async (id, category) => {
    var updatedCategory = await categoryService.updateAsync(id, category);
    return updatedCategory;
};  

const deleteAsync = async (id) => {
    var category = await categoryService.deleteAsync(id);
    return category;
};

module.exports = {
    getAllAsync,
    getByIdAsync,
    createAsync,
    updateAsync,
    deleteAsync
};