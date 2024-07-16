const categoryService = require('../services/category.service');

const getAllAsync = async (req, res) => {
    let data = await categoryService.getAllAsync();
    if(data.status != 200){
        return res.status(400).json(data);
    }
    return res.status(data.status).json(data);
}

const getByIdAsync = async (req, res) => {
    var category = await categoryService.getByIdAsync(req.params.id);
    if (category.status != 200) {
        res.status(404).json(category);
    } else {
        res.status(200).json(category);
    }
};

const createAsync = async (req, res) => {
    var category = await categoryService.createAsync(req.body);
    if (category.status != 200) {
        res.status(404).json(category);
    } else {
        res.status(200).json(category);
    }
};

const updateAsync = async (id, category) => {
    var category = await categoryService.updateAsync(id, category);
    if (category.status != 200) {
        res.status(404).json(category);
    } else {
        res.status(200).json(category);
    }
};  

const deleteAsync = async (req, res) => {
    var category = await categoryService.deleteAsync(req.params.id);
    if (category.status != 200) {
        res.status(404).json(category);
    } else {
        res.status(200).json(category);
    }
};

module.exports = {
    getAllAsync,
    getByIdAsync,
    createAsync,
    updateAsync,
    deleteAsync
};