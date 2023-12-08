const { models } = require("../models/definations");

const getAllCategories = async () =>
  await models.categories.findAll({
    include: [
      {
        model: models.cars,
        attributes: ["name", "image", "Description"],
      },
    ],
  });

const getCategoryById = async (id) =>
  await models.categories.findByPk(id, {
    include: [
      {
        model: models.cars,
        attributes: ["name", "image", "Description"],
      },
    ],
  });

const createCategory = async (categoryData) =>
  await models.categories.create(categoryData);

const updateCategory = async (id, categoryData) => {
  await models.categories.update(categoryData, { where: { id } });
  return await getCategoryById(id);
};

const deleteCategory = async (id) =>
  await models.categories.destroy({ where: { id } });

module.exports = {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
};
