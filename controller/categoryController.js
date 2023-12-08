const categoryService = require("../services/categoryServices");

const getAllCategories = async (req, res) => {
  const categories = await categoryService.getAllCategories();
  res.json(categories);
};

const getCategoryById = async (req, res) => {
  const { id } = req.params;
  const category = await categoryService.getCategoryById(id);

  if (category) {
    res.json(category);
  } else {
    res.status(404).json({ message: "Category not found" });
  }
};

const createCategory = async (req, res) => {
  const categoryData = req.body;
  const newCategory = await categoryService.createCategory(categoryData);
  res.status(201).json(newCategory);
};

const updateCategory = async (req, res) => {
  const { id } = req.params;
  const categoryData = req.body;

  const updatedCategory = await categoryService.updateCategory(
    id,
    categoryData
  );

  if (updatedCategory) {
    res.json(updatedCategory);
  } else {
    res.status(404).json({ message: "Category not found" });
  }
};

const deleteCategory = async (req, res) => {
  const { id } = req.params;
  const deletedCategory = await categoryService.deleteCategory(id);

  if (deletedCategory) {
    res.json({ message: "Category deleted successfully" });
  } else {
    res.status(404).json({ message: "Category not found" });
  }
};

module.exports = {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
};
